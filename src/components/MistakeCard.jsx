import React from 'react';
import { motion } from 'framer-motion';

function MistakeCard({ mistake, wrongCode, correctCode, explanation }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mistake-card"
    >
      {/* 错误标题 */}
      <div className="mistake-card-head">
        <span>!</span>
        <h3>{mistake}</h3>
      </div>

      {/* 代码对比 */}
      <div className="code-compare">
        {/* 错误代码 */}
        <div>
          <span className="compare-label wrong">错误</span>
          <pre className="wrong-code">
            <code>{wrongCode}</code>
          </pre>
        </div>

        {/* 正确代码 */}
        <div>
          <span className="compare-label correct">正确</span>
          <pre className="correct-code">
            <code>{correctCode}</code>
          </pre>
        </div>
      </div>

      {/* 解释说明 */}
      {explanation && (
        <div className="mistake-explanation">
          <strong>说明</strong>
          <p>{explanation}</p>
        </div>
      )}
    </motion.div>
  );
}

export default MistakeCard;
