import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AceEditor from 'react-ace';
import usePyodide from '../hooks/usePyodide';

import 'ace-builds/src-min-noconflict/mode-python';
import 'ace-builds/src-min-noconflict/theme-github_light_default';

function CodeEditor({
  template,
  exampleCode,
  initialCode = '',
  onRun,
  onSubmit,
  onCodeChange,
  placeholder = '# 在这里编写你的代码',
  language = 'python',
  compact = false
}) {
  const emptyCode = initialCode ?? '';
  const sampleCode = exampleCode ?? template ?? '';
  const [code, setCode] = useState(emptyCode);
  const [output, setOutput] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const editorHeight = compact ? (isMobile ? '144px' : '156px') : (isMobile ? '176px' : '224px');
  const { load, runCode, isLoading, isReady, error } = usePyodide();

  // 检测移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setCode(emptyCode);
    setOutput('');
    setLastResult(null);
    setShowOutput(false);
  }, [template, exampleCode, emptyCode]);

  const handleCodeChange = (nextCode) => {
    setCode(nextCode);
    if (onCodeChange) {
      onCodeChange(nextCode);
    }
  };

  // 处理运行代码
  const handleRun = async () => {
    if (!code.trim()) {
      setOutput('请先编写代码');
      setShowOutput(true);
      return;
    }

    setIsRunning(true);
    setOutput('正在加载 Pyodide...');
    setShowOutput(true);

    try {
      if (!isReady) {
        await load();
      }

      setOutput('正在运行代码...');

      const inputs = inputValue.split('\n').filter(line => line.trim() !== '');
      const result = await runCode(code, inputs);

      if (result.success) {
        setOutput(result.output || '(无输出)');
        setLastResult({ success: true, output: result.output, error: null, code });
        if (onRun) {
          onRun({ success: true, output: result.output, error: null, code });
        }
      } else {
        setOutput('错误：\n' + result.error);
        setLastResult({ success: false, output: null, error: result.error, code });
        if (onRun) {
          onRun({ success: false, output: null, error: result.error, code });
        }
      }
    } catch (err) {
      setOutput('运行错误：' + err.message);
    } finally {
      setIsRunning(false);
    }
  };

  // 处理重置
  const handleReset = () => {
    handleCodeChange('');
    setOutput('');
    setLastResult(null);
    setShowOutput(false);
  };

  // 查看示例时才把参考代码放进编辑器
  const handleShowExample = () => {
    if (!sampleCode.trim()) return;
    handleCodeChange(sampleCode);
    setOutput('');
    setLastResult(null);
    setShowOutput(false);
  };

  return (
    <motion.div
      className="code-editor-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* macOS 风格窗口头部 - 移动端优化 */}
      <div className="editor-toolbar">
        <div className="editor-title">
          {/* macOS 窗口按钮 */}
          <div className="flex gap-1.5 md:gap-2">
            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-red-400 shadow-inner"/>
            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-yellow-400 shadow-inner"/>
            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-green-400 shadow-inner"/>
          </div>
          <span>{language.toUpperCase()} 编辑器</span>
        </div>

        <div className="editor-status">
          {isLoading && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="runtime-pill loading"
            >
              <span className="animate-spin">⏳</span>
              {!isMobile && '加载中...'}
            </motion.span>
          )}
          {isReady && !isLoading && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="runtime-pill ready"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
              {!isMobile && '就绪'}
            </motion.span>
          )}
          {error && (
            <span className="runtime-pill failed">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"/>
              {!isMobile && '失败'}
            </span>
          )}
        </div>
      </div>

      {/* 代码编辑区 - 移动端优化 */}
      <div className="editor-body">
        <AceEditor
          value={code}
          onChange={handleCodeChange}
          mode="python"
          theme="github_light_default"
          name="python-lesson-editor"
          placeholder={placeholder}
          width="100%"
          height={editorHeight}
          fontSize={isMobile ? 14 : 15}
          lineHeight={24}
          className="python-ace-editor"
          showPrintMargin={false}
          showGutter
          highlightActiveLine
          wrapEnabled
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            behavioursEnabled: true,
            displayIndentGuides: true,
            enableAutoIndent: true,
            highlightGutterLine: true,
            showLineNumbers: true,
            tabSize: 4,
            useSoftTabs: true,
            useWorker: false
          }}
        />
      </div>

      {/* 输入区（如果代码需要input） */}
      <AnimatePresence>
        {showInput && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="editor-input-panel"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="editor-subtitle">
                <span>📥</span> 输入（每行一个值）
              </span>
              <button
                onClick={() => setShowInput(false)}
                className="editor-link-button"
              >
                隐藏
              </button>
            </div>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="例如：&#10;小明&#10;95"
              className="editor-input-box"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 操作按钮栏 - 移动端优化 */}
      <div className="editor-actions">
        <div className="editor-action-group">
          <button
            onClick={handleReset}
            className="editor-ghost-button"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
            </svg>
            <span className="hidden md:inline">清空</span>
          </button>
          {sampleCode.trim() && (
            <button
              onClick={handleShowExample}
              className="editor-example-button"
              title="查看示例代码"
            >
              <span aria-hidden="true">#</span>
              <span>查看示例</span>
            </button>
          )}
          {!showInput && (
            <button
              onClick={() => setShowInput(true)}
              className="editor-ghost-button"
            >
              <span>📥</span>
              <span className="hidden md:inline">添加输入</span>
            </button>
          )}
          {showOutput && (
            <button
              onClick={() => setShowOutput(false)}
              className="editor-ghost-button"
            >
              <span>👁️</span>
              <span className="hidden md:inline">隐藏输出</span>
            </button>
          )}
        </div>

        <div className="editor-action-group">
          {onSubmit && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => onSubmit({ success: true, output: lastResult?.output, error: null, code })}
              disabled={isRunning || isLoading}
              className={`
                editor-submit-button
                ${isRunning || isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-md hover:shadow-lg'}
              `}
            >
              <span>📤</span>
              <span className="hidden md:inline">交卷</span>
            </motion.button>
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleRun}
            disabled={isRunning || isLoading}
            className={`
                editor-run-button
              ${isRunning || isLoading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md hover:shadow-lg'}
            `}
          >
            {isRunning ? (
              <>
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  ⚙️
                </motion.span>
                <span className="hidden md:inline">运行中...</span>
              </>
            ) : (
              <>
                <span>▶</span>
                <span className="hidden md:inline">运行代码</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* 输出区域 - 动画效果 */}
      <AnimatePresence>
        {showOutput && output && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="editor-output"
          >
            <div className="editor-output-head">
              <span className="flex items-center gap-1.5">
                <span>📤</span> 输出结果
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(output);
                }}
                className="editor-link-button"
              >
                复制
              </button>
            </div>
            <pre className="editor-output-body">
              {output}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CodeEditor;
