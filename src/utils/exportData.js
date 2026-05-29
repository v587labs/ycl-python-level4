/**
 * 数据导出工具函数
 * 支持 JSON 格式
 */

/**
 * 导出完整进度为 JSON 文件
 * @param {Object} progress - 进度数据
 * @param {Array} lessons - 课时数据
 */
export function exportToJSON(progress, lessons = []) {
  const data = buildProgressExport(progress, lessons);
  const dataStr = JSON.stringify(data, null, 2);
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

export function buildProgressExport(progress, lessons = []) {
  const progressLessons = progress?.lessons || {};
  const completedLessons = Object.values(progressLessons).filter(item => item?.completed).length;
  const quizRecords = lessons.flatMap(lesson => {
    const lessonProgress = progressLessons[lesson.id] || {};
    return Array.isArray(lessonProgress.quizAnswers)
      ? lessonProgress.quizAnswers.map(answer => ({
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          chapter: lesson.chapter,
          ...answer
        }))
      : [];
  });

  const codingRecords = lessons
    .map(lesson => {
      const lessonProgress = progressLessons[lesson.id] || {};
      if (!lessonProgress.codingCompleted && !lessonProgress.codingResults && !lessonProgress.lastRun) {
        return null;
      }

      return {
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        chapter: lesson.chapter,
        challengeTitle: lesson.student?.codingChallenge?.title || '',
        passed: lessonProgress.codingPassed ?? null,
        completed: lessonProgress.codingCompleted === true,
        submittedAt: lessonProgress.codingSubmittedAt || null,
        submittedCode: lessonProgress.submittedCode || '',
        lastRun: lessonProgress.lastRun || null,
        results: lessonProgress.codingResults || []
      };
    })
    .filter(Boolean);

  return {
    ...progress,
    exportVersion: 2,
    exportedAt: new Date().toISOString(),
    course: {
      appName: 'YCL Python 四级互动教学课件',
      totalLessons: lessons.length,
      mainLessons: lessons.filter(lesson => lesson.type === 'main').length,
      extendedLessons: lessons.filter(lesson => lesson.type === 'extended').length
    },
    summary: {
      completedLessons,
      totalLessons: lessons.length,
      overallProgress: lessons.length ? Math.round((completedLessons / lessons.length) * 100) : 0,
      quizRecordCount: quizRecords.length,
      codingRecordCount: codingRecords.length
    },
    lessonRecords: lessons.map(lesson => {
      const lessonProgress = progressLessons[lesson.id] || {};
      return {
        lessonId: lesson.id,
        title: lesson.title,
        chapter: lesson.chapter,
        type: lesson.type,
        difficulty: lesson.difficulty,
        completed: lessonProgress.completed === true,
        quiz: {
          completed: lessonProgress.quizCompleted === true,
          score: lessonProgress.quizScore ?? null,
          answers: lessonProgress.quizAnswers || []
        },
        coding: {
          completed: lessonProgress.codingCompleted === true,
          passed: lessonProgress.codingPassed ?? null,
          submittedAt: lessonProgress.codingSubmittedAt || null,
          submittedCode: lessonProgress.submittedCode || '',
          lastRun: lessonProgress.lastRun || null,
          results: lessonProgress.codingResults || []
        },
        lastUpdated: lessonProgress.lastUpdated || null
      };
    }),
    quizRecords,
    codingRecords
  };
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
