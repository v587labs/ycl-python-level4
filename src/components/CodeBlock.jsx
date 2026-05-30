import React, { useState, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';

/**
 * 代码块组件
 * 精致的深色主题 + 代码高亮 + 一键复制
 */
function CodeBlock({ code, language = 'python', showLineNumbers = false }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  // 处理代码高亮
  const highlightedCode = React.useMemo(() => {
    if (typeof window !== 'undefined' && Prism.languages[language]) {
      return Prism.highlight(code, Prism.languages[language], language);
    }
    return code;
  }, [code, language]);

  // 复制到剪贴板
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // 生成行号
  const lineNumbers = code.split('\n').map((_, i) => i + 1);

  return (
    <div className="code-block-container rounded-xl overflow-hidden shadow-lg border border-gray-700/50 group">
      {/* 顶部工具栏 */}
      <div className="code-toolbar bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-2.5 flex items-center justify-between border-b border-gray-700/50">
        {/* macOS 风格窗口按钮 */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner"/>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner"/>
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-inner"/>
          </div>
          <span className="text-gray-500 text-xs font-medium ml-2">{language.toUpperCase()}</span>
        </div>

        {/* 复制按钮 */}
        <button
          onClick={handleCopy}
          className={`
            flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium
            transition-all duration-200
            ${copied
              ? 'bg-green-500/20 text-green-400'
              : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-gray-200'}
          `}
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              已复制
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
              复制
            </>
          )}
        </button>
      </div>

      {/* 代码内容 */}
      <div className="relative bg-[#1a1a2e]">
        {/* 行号 */}
        {showLineNumbers && (
          <div className="code-line-numbers">
            {lineNumbers.map(num => (
              <div key={num}>{num}</div>
            ))}
          </div>
        )}

        {/* 代码区域 */}
        <pre className={`language-${language} p-4 pt-3 overflow-x-auto`} ref={codeRef}>
          <code
            className={`language-${language} text-sm leading-relaxed`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>

        {/* 底部渐变边框 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"/>
      </div>

      <style>{`
        .code-block-container {
          background: #1a1a2e;
        }

        pre[class*="language-"] {
          margin: 0;
          background: transparent;
          padding-left: 1rem;
        }

        .code-block-container pre::selection,
        .code-block-container code::selection,
        .code-block-container code *::selection {
          background: rgba(37, 99, 235, 0.82);
          color: #f8fafc;
          text-shadow: none;
        }

        .code-block-container pre::-moz-selection,
        .code-block-container code::-moz-selection,
        .code-block-container code *::-moz-selection {
          background: rgba(37, 99, 235, 0.82);
          color: #f8fafc;
          text-shadow: none;
        }

        .code-line-numbers {
          position: absolute;
          left: 0;
          top: 0;
          padding: 1rem 0.75rem;
          color: #4a5568;
          background: transparent;
          text-align: right;
          user-select: none;
          min-width: 2.5rem;
          border-right: 1px solid #2d2d44;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .code-line-numbers div {
          height: 1.6em;
        }

        /* 令牌样式优化 */
        .token.comment { color: #6b7280; font-style: italic; }
        .token.prolog { color: #6b7280; }
        .token.doctype { color: #6b7280; }
        .token.cdata { color: #6b7280; }

        .token.punctuation { color: #a1a1aa; }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol {
          color: #f472b6;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #4ade80;
        }

        .token.operator,
        .token.entity {
          color: #fbbf24;
        }

        .token.atrule,
        .token.attr-value,
        .token.keyword {
          color: #60a5fa;
        }

        .token.function,
        .token.class-name {
          color: #c084fc;
        }

        .token.regex,
        .token.important,
        .token.variable {
          color: #fb923c;
        }

        .token.important { font-weight: bold; }
        .token.bold { font-weight: bold; }
        .token.italic { font-style: italic; }

        /* 自定义滚动条 */
        pre[class*="language-"]::-webkit-scrollbar {
          height: 6px;
        }
        pre[class*="language-"]::-webkit-scrollbar-track {
          background: #2d2d44;
        }
        pre[class*="language-"]::-webkit-scrollbar-thumb {
          background: #4a4a6a;
          border-radius: 3px;
        }
        pre[class*="language-"]::-webkit-scrollbar-thumb:hover {
          background: #5a5a7a;
        }
      `}</style>
    </div>
  );
}

export default CodeBlock;
