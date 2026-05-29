import React from 'react';
import { motion } from 'framer-motion';
import CodeBlock from './CodeBlock';

function ConceptCard({ name, definition, example, teacherSay, kidQuestion }) {
  const looksLikeCode = typeof example === 'string'
    && (/(\bprint\(|\binput\(|\w+\s*=|>>>|\n)/.test(example));

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="concept-card"
    >
      {/* 概念名称 */}
      <div className="concept-card-head">
        <span>P</span>
        <h3>
          {name}
        </h3>
      </div>

      {/* 定义 */}
      <p>
        {definition}
      </p>

      {/* 示例 */}
      {example && looksLikeCode && (
        <div className="concept-code">
          <div>代码示例</div>
          <CodeBlock code={example} language="python" />
        </div>
      )}

      {example && !looksLikeCode && (
        <div className="concept-example">
          <strong>课堂例子</strong>
          <p>{example}</p>
        </div>
      )}

      {teacherSay && (
        <div className="concept-teacher-say">
          <strong>老师可以这样说</strong>
          <p>{teacherSay}</p>
        </div>
      )}

      {kidQuestion && (
        <div className="concept-kid-question">
          <strong>马上问孩子</strong>
          <p>{kidQuestion}</p>
        </div>
      )}
    </motion.div>
  );
}

export default ConceptCard;
