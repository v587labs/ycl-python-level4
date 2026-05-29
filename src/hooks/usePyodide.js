import { useState, useRef, useCallback } from 'react';

// Pyodide CDN URL
const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';

/**
 * Pyodide Hook
 * 负责加载 Pyodide、执行 Python 代码、捕获输出
 * 支持模拟 input() 的 stdin 输入
 */
function usePyodide() {
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState(null);
  const pyodideRef = useRef(null);
  const loadingPromiseRef = useRef(null);
  const inputQueueRef = useRef([]);
  const inputIndexRef = useRef(0);

  /**
   * 加载 Pyodide
   */
  const load = useCallback(async () => {
    if (pyodideRef.current) return pyodideRef.current;
    if (loadingPromiseRef.current) return loadingPromiseRef.current;

    setIsLoading(true);
    setError(null);

    loadingPromiseRef.current = (async () => {
      try {
        if (!window.loadPyodide) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = PYODIDE_CDN;
            script.onload = resolve;
            script.onerror = () => reject(new Error('Pyodide CDN 加载失败，请检查网络'));
            document.head.appendChild(script);
          });
        }

        // 重置输入队列
        inputQueueRef.current = [];
        inputIndexRef.current = 0;

        const pyodide = await window.loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
          // 使用 stdin 参数传入模拟 input 的函数
          stdin: () => {
            const queue = inputQueueRef.current;
            const idx = inputIndexRef.current;
            if (idx < queue.length) {
              const value = queue[idx];
              inputIndexRef.current++;
              return value;
            }
            return '';
          }
        });

        // 设置 stdout 捕获
        let stdoutBuffer = '';
        pyodide.setStdout({
          batched: (text) => {
            stdoutBuffer += text;
          }
        });

        pyodide.setStderr({
          batched: (text) => {
            stdoutBuffer += text;
          }
        });

        pyodideRef.current = pyodide;
        pyodideRef.current._stdoutBuffer = stdoutBuffer;

        setIsReady(true);
        setIsLoading(false);
        return pyodide;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        loadingPromiseRef.current = null;
        throw err;
      }
    })();

    return loadingPromiseRef.current;
  }, []);

  /**
   * 执行 Python 代码
   * @param {string} code - 要执行的代码
   * @param {string[]} inputs - 输入值数组（模拟 input()）
   * @returns {Promise<{success: boolean, output: string, error: string|null}>}
   */
  const runCode = useCallback(async (code, inputs = []) => {
    try {
      const pyodide = await load();

      // 设置输入队列
      inputQueueRef.current = inputs || [];
      inputIndexRef.current = 0;

      // 重置 stdout 缓冲区
      let stdoutBuffer = '';
      pyodide.setStdout({ batched: (text) => { stdoutBuffer += text; } });
      pyodide.setStderr({ batched: (text) => { stdoutBuffer += text; } });

      // ---- 执行用户代码 ----
      let output = '';
      let errorMsg = null;

      try {
        await pyodide.runPythonAsync(code);
        output = stdoutBuffer;
      } catch (execError) {
        // 检测 EOFError - 代码需要 input() 但没有提供输入
        if (execError instanceof SyntaxError || String(execError).includes('EOFError')) {
          errorMsg = '❌ 你的代码需要输入（input()），但没有可用输入。\n\n如果是在编程题里，系统会自动提供测试输入。\n如果想单独测试 input()，请先在题目要求的代码框里运行。';
        } else {
          errorMsg = formatError(execError);
        }
      }

      return {
        success: !errorMsg,
        output: output,
        error: errorMsg
      };
    } catch (err) {
      return {
        success: false,
        output: '',
        error: formatError(err)
      };
    }
  }, [load]);

  /**
   * 异步执行（带超时保护）
   */
  const runCodeAsync = useCallback(async (code, inputs = [], timeout = 15000) => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        resolve({ success: false, output: '', error: '⏰ 代码执行超时（15秒），可能是死循环，请检查代码' });
      }, timeout);

      runCode(code, inputs).then(result => {
        clearTimeout(timer);
        resolve(result);
      }).catch(err => {
        clearTimeout(timer);
        resolve({ success: false, output: '', error: formatError(err) });
      });
    });
  }, [runCode]);

  return { load, runCode, runCodeAsync, isLoading, isReady, error };
}

/** 格式化错误信息（人类可读） */
function formatError(err) {
  const msg = err?.message || String(err);

  // 去掉 Pyodide 冗余前缀，保留核心错误信息
  let cleaned = msg
    .replace(/^PythonError:\s*/i, '')
    .replace(/^Traceback \(most recent call last\):\n+/, 'Traceback (most recent call last):\n');

  // 如果错误信息太长，只截取有用的部分（Python错误通常在最后几行）
  const lines = cleaned.split('\n');
  if (lines.length > 15) {
    // 取最后10行，这是最有用的错误信息
    const usefulPart = lines.slice(-10);
    return usefulPart.join('\n');
  }

  return cleaned;
}

export default usePyodide;