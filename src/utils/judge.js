/**
 * 判题逻辑模块
 * 执行用户代码并与测试用例比对
 */

/**
 * 格式化错误信息
 */
function formatError(err) {
  const message = err?.message || err?.toString() || 'Unknown error';
  
  // 提取关键信息
  if (message.includes('Traceback')) {
    const lines = message.split('\n');
    const tracebackIndex = lines.findIndex(l => l.includes('Traceback'));
    if (tracebackIndex >= 0) {
      return lines.slice(tracebackIndex).slice(-5).join('\n');
    }
  }
  
  return message;
}

/**
 * 执行多个测试用例
 * @param {Function} pyodideRunCode - Pyodide 的 runCode 函数
 * @param {string} code - 用户代码
 * @param {Array<{label: string, input: string, expected: string}>} testCases - 测试用例
 * @returns {Promise<Array<{label: string, passed: boolean, expected: string, actual: string, error: string|null}>>}
 */
export async function runTestCases(pyodideRunCode, code, testCases) {
  const results = [];

  for (const testCase of testCases) {
    const inputs = testCase.input ? testCase.input.split('\n').filter(Boolean) : [];
    
    try {
      const result = await pyodideRunCode(code, inputs);
      
      if (!result.success) {
        results.push({
          label: testCase.label || '测试',
          passed: false,
          expected: testCase.expected,
          actual: null,
          error: result.error
        });
        continue;
      }

      // 标准化输出（去除首尾空白）
      const normalizedExpected = testCase.expected.trim();
      const normalizedActual = result.output.trim();

      // 比对结果（精确匹配）
      const passed = normalizedActual === normalizedExpected;

      results.push({
        label: testCase.label || '测试',
        passed,
        expected: normalizedExpected,
        actual: normalizedActual,
        error: null
      });
    } catch (err) {
      results.push({
        label: testCase.label || '测试',
        passed: false,
        expected: testCase.expected,
        actual: null,
        error: formatError(err)
      });
    }
  }

  return results;
}

/**
 * 判店主函数
 * @param {Function} pyodideRunCode - Pyodide 的 runCode 函数
 * @param {string} code - 用户代码
 * @param {Array} testCases - 测试用例
 * @returns {Promise<{allPassed: boolean, results: Array, passRate: number, summary: string}>}
 */
export async function judge(pyodideRunCode, code, testCases) {
  if (!testCases || testCases.length === 0) {
    return {
      allPassed: false,
      results: [],
      passRate: 0,
      summary: '没有测试用例'
    };
  }

  const results = await runTestCases(pyodideRunCode, code, testCases);
  const passedCount = results.filter(r => r.passed).length;
  const passRate = Math.round((passedCount / results.length) * 100);

  return {
    allPassed: passedCount === results.length,
    results,
    passRate,
    summary: `${passedCount}/${results.length} 测试用例通过`
  };
}

/**
 * 生成错误报告
 */
export function generateErrorReport(results) {
  const failedTests = results.filter(r => !r.passed);
  
  if (failedTests.length === 0) {
    return null;
  }

  return failedTests.map(test => {
    if (test.error) {
      return `[${test.label}] 运行时错误: ${test.error}`;
    }
    return `[${test.label}]
  期望输出: ${test.expected}
  实际输出: ${test.actual || '(无输出)'}`;
  }).join('\n\n');
}

/**
 * 计算最终得分
 * @param {number} quizScore - 选择题得分 (0-100)
 * @param {number} codingPassRate - 编程题通过率 (0-100)
 * @returns {number} 最终得分
 */
export function calculateScore(quizScore, codingPassRate) {
  // 选择题占 40%，编程题占 60%
  const score = Math.round(quizScore * 0.4 + codingPassRate * 0.6);
  return score;
}

/**
 * 标准化输出用于比对
 * @param {string} output - 原始输出
 * @returns {string} 标准化后的输出
 */
export function normalizeOutput(output) {
  if (!output) return '';
  // 去除首尾空白
  return output.trim();
}

/**
 * 比对输出（支持容差比较）
 * @param {string} expected - 期望输出
 * @param {string} actual - 实际输出
 * @param {boolean} exactMatch - 是否精确匹配（默认 true）
 * @returns {boolean} 是否通过
 */
export function compareOutput(expected, actual, exactMatch = true) {
  const normalizedExpected = normalizeOutput(expected);
  const normalizedActual = normalizeOutput(actual);

  if (exactMatch) {
    return normalizedExpected === normalizedActual;
  }

  // 宽松比对：忽略空格差异
  return normalizedExpected.replace(/\s+/g, ' ') === normalizedActual.replace(/\s+/g, ' ');
}