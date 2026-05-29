import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function formatMultiline(value) {
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function isRunOnly(results) {
  return results.length > 0 && results.every(result => result.expected === null || result.expected === undefined);
}

export default function ResultPanel({
  results = [],
  allPassed = false,
  totalPoints = 0,
  badge = null,
  onReset
}) {
  const passedCount = results.filter(result => result.passed).length;
  const passRate = results.length ? Math.round((passedCount / results.length) * 100) : 0;
  const runOnly = isRunOnly(results);
  const panelState = runOnly ? 'run' : allPassed ? 'passed' : 'failed';

  const status = {
    run: {
      icon: '▶',
      title: '运行完成',
      hint: '下面是这次代码运行产生的输出。',
      badge: '仅运行',
    },
    passed: {
      icon: '✓',
      title: '全部通过',
      hint: '测试用例都匹配，输出格式也正确。',
      badge: `+${totalPoints} 积分`,
    },
    failed: {
      icon: '↻',
      title: '继续调试',
      hint: '对照期望输出和实际输出，改好后再提交判题。',
      badge: `${passedCount}/${results.length} 通过`,
    }
  }[panelState];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`result-panel ${panelState}`}
    >
      <div className="result-summary">
        <div className="summary-main">
          <div className="summary-icon">{status.icon}</div>
          <div className="summary-copy">
            <div className="summary-title-row">
              <h3>{status.title}</h3>
              {badge && panelState === 'passed' && (
                <span className="earned-badge">
                  {badge.icon} {badge.name}
                </span>
              )}
            </div>
            <p>{status.hint}</p>
          </div>
        </div>

        <div className="summary-side">
          <span className="summary-badge">{status.badge}</span>
          {!runOnly && (
            <div className="pass-meter" aria-hidden="true">
              <span style={{ width: `${passRate}%` }} />
            </div>
          )}
        </div>
      </div>

      <div className="results-list">
        <div className="results-header">
          <div>
            <span className="eyebrow">{runOnly ? 'Run Output' : 'Test Cases'}</span>
            <h4>{runOnly ? '运行结果' : '测试结果'}</h4>
          </div>
          {!runOnly && <span className="results-count">{passedCount} / {results.length}</span>}
        </div>

        <AnimatePresence>
          {results.map((result, index) => (
            <motion.div
              key={`${result.label || 'case'}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className={`test-case ${result.passed ? 'passed' : 'failed'}`}
            >
              <div className="case-header">
                <div>
                  <span className="case-index">{result.label || `测试 ${index + 1}`}</span>
                  <span className={`case-status ${result.passed ? 'passed' : 'failed'}`}>
                    {result.passed ? '通过' : '未通过'}
                  </span>
                </div>
                {result.passed && !runOnly && (
                  <span className="points">+{result.points || 10}</span>
                )}
              </div>

              <div className="case-body">
                {result.input && result.input.trim() && (
                  <ResultRow label="输入" value={formatMultiline(result.input)} tone="plain" />
                )}
                {result.expected !== null && result.expected !== undefined && (
                  <ResultRow label="期望输出" value={formatMultiline(result.expected)} tone="expected" />
                )}
                {result.actual !== null && result.actual !== undefined && (
                  <ResultRow
                    label={runOnly ? '运行结果' : '实际输出'}
                    value={formatMultiline(result.actual) || '(无输出)'}
                    tone={result.passed ? 'actual-ok' : 'actual-bad'}
                  />
                )}
                {result.error && (
                  <ResultRow label="错误信息" value={result.error} tone="error" />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {panelState === 'failed' && onReset && (
          <button className="retry-button" onClick={onReset}>
            继续修改
          </button>
        )}
      </div>

      <style>{`
        .result-panel {
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid #E9EEF2;
          background: #FFFFFF;
          box-shadow: 0 16px 36px rgba(45, 52, 54, 0.10);
        }

        .result-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
          border-bottom: 1px solid #EEF2F5;
        }

        .summary-main {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .summary-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 22px;
          font-weight: 900;
        }

        .result-panel.run .summary-icon {
          color: #3B82F6;
          background: #EFF6FF;
        }

        .result-panel.passed .summary-icon {
          color: #059669;
          background: #ECFDF5;
        }

        .result-panel.failed .summary-icon {
          color: #7C3AED;
          background: #F3EEFF;
        }

        .summary-copy {
          min-width: 0;
        }

        .summary-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .summary-copy h3 {
          margin: 0;
          color: #1F2933;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.2;
        }

        .summary-copy p {
          margin: 4px 0 0;
          color: #65717C;
          font-size: 13px;
          line-height: 1.5;
        }

        .earned-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 999px;
          background: #FFF7ED;
          color: #EA580C;
          font-size: 12px;
          font-weight: 800;
        }

        .summary-side {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          flex-shrink: 0;
        }

        .summary-badge {
          padding: 6px 10px;
          border-radius: 999px;
          background: #F5F7FA;
          color: #344054;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        .result-panel.passed .summary-badge {
          background: #D1FAE5;
          color: #047857;
        }

        .result-panel.failed .summary-badge {
          background: #EDE9FE;
          color: #6D28D9;
        }

        .pass-meter {
          width: 96px;
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: #E7ECF0;
        }

        .pass-meter span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #10B981, #34D399);
        }

        .result-panel.failed .pass-meter span {
          background: linear-gradient(90deg, #8B5CF6, #A78BFA);
        }

        .results-list {
          padding: 16px;
        }

        .results-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .eyebrow {
          display: block;
          color: #94A3B8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .results-header h4 {
          margin: 2px 0 0;
          color: #263238;
          font-size: 16px;
          font-weight: 800;
        }

        .results-count {
          color: #64748B;
          font-size: 13px;
          font-weight: 800;
        }

        .test-case {
          overflow: hidden;
          border-radius: 14px;
          border: 1px solid #E6EBEF;
          background: #FFFFFF;
        }

        .test-case + .test-case {
          margin-top: 10px;
        }

        .test-case.passed {
          border-color: #B7E8D4;
        }

        .test-case.failed {
          border-color: #FFD1C2;
        }

        .case-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 14px;
          background: #F8FAFC;
          border-bottom: 1px solid #EDF1F5;
        }

        .test-case.passed .case-header {
          background: #F0FDF7;
        }

        .test-case.failed .case-header {
          background: #FFF7F2;
        }

        .case-header > div {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .case-index {
          color: #263238;
          font-size: 14px;
          font-weight: 900;
        }

        .case-status {
          display: inline-flex;
          align-items: center;
          padding: 3px 8px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
        }

        .case-status.passed {
          color: #047857;
          background: #D1FAE5;
        }

        .case-status.failed {
          color: #C2410C;
          background: #FFEDD5;
        }

        .points {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 26px;
          padding: 0 8px;
          border-radius: 999px;
          color: #047857;
          background: #D1FAE5;
          font-size: 12px;
          font-weight: 900;
        }

        .case-body {
          display: grid;
          gap: 10px;
          padding: 14px;
        }

        .result-row {
          display: grid;
          gap: 6px;
        }

        .result-label {
          color: #71808C;
          font-size: 12px;
          font-weight: 800;
        }

        .result-value {
          margin: 0;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #E7ECF0;
          background: #F8FAFC;
          color: #27313A;
          white-space: pre-wrap;
          word-break: break-word;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 13px;
          line-height: 1.55;
        }

        .result-value.expected {
          color: #0F766E;
          background: #F0FDFA;
          border-color: #BFEFE6;
        }

        .result-value.actual-ok {
          color: #047857;
          background: #ECFDF5;
          border-color: #B7E8D4;
        }

        .result-value.actual-bad,
        .result-value.error {
          color: #B42318;
          background: #FFF5F2;
          border-color: #FFD1C2;
        }

        .retry-button {
          width: 100%;
          margin-top: 12px;
          padding: 12px 14px;
          border: 0;
          border-radius: 12px;
          background: #F3EEFF;
          color: #6D28D9;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          transition: transform 0.2s, background 0.2s;
        }

        .retry-button:hover {
          background: #EDE9FE;
          transform: translateY(-1px);
        }

        @media (max-width: 640px) {
          .result-summary {
            align-items: flex-start;
            flex-direction: column;
          }

          .summary-side {
            align-items: stretch;
            width: 100%;
          }

          .pass-meter {
            width: 100%;
          }
        }
      `}</style>
    </motion.div>
  );
}

function ResultRow({ label, value, tone }) {
  return (
    <div className="result-row">
      <span className="result-label">{label}</span>
      <pre className={`result-value ${tone}`}>{value}</pre>
    </div>
  );
}
