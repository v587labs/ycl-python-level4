/**
 * 数据导出工具函数
 * 支持 JSON 和 CSV 格式
 */

/**
 * 导出进度为 JSON 文件
 * @param {Object} progress - 进度数据
 */
export function exportToJSON(progress) {
  const dataStr = JSON.stringify(progress, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `ycl-python-progress-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 从 JSON 文件导入进度
 * @param {File} file - JSON 文件
 * @returns {Promise<Object>} 解析后的数据
 */
export function importFromJSON(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        // 验证数据格式
        if (!data.lessons || typeof data.lessons !== 'object') {
          reject(new Error('Invalid data format: missing lessons object'));
          return;
        }
        resolve(data);
      } catch (error) {
        reject(new Error('Invalid JSON file'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    
    reader.readAsText(file);
  });
}

/**
 * 导出选择题答题记录为 CSV
 * @param {Object} progress - 进度数据
 * @param {Array} lessons - 课时数据
 */
export function exportToCSV(progress, lessons) {
  // CSV 表头
  const headers = ['课时ID', '课时名称', '章节', '完成状态', '选择题得分', '编程题通过', '最后更新时间'];
  
  // 生成行数据
  const rows = lessons.map(lesson => {
    const lessonProgress = progress.lessons[lesson.id] || {};
    return [
      lesson.id,
      lesson.title,
      lesson.chapter,
      lessonProgress.completed ? '已完成' : '未完成',
      lessonProgress.quizScore !== undefined && lessonProgress.quizScore !== null 
        ? `${lessonProgress.quizScore}%` 
        : '-',
      lessonProgress.codingPassed === true 
        ? '通过' 
        : lessonProgress.codingPassed === false 
          ? '未通过' 
          : '-',
      lessonProgress.lastUpdated 
        ? new Date(lessonProgress.lastUpdated).toLocaleString('zh-CN') 
        : '-'
    ];
  });
  
  // 转义 CSV 特殊字符
  const escapeCSV = (value) => {
    if (value === null || value === undefined) return '';
    const str = String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  };
  
  // 生成 CSV 内容
  const csvContent = [
    headers.map(escapeCSV).join(','),
    ...rows.map(row => row.map(escapeCSV).join(','))
  ].join('\n');
  
  // 添加 BOM 以支持 Excel 打开 UTF-8 CSV
  const bom = '\uFEFF';
  const dataBlob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `ycl-python-quiz-record-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 下载文本文件
 * @param {string} content - 文件内容
 * @param {string} filename - 文件名
 * @param {string} mimeType - MIME 类型
 */
export function downloadTextFile(content, filename, mimeType = 'text/plain') {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}