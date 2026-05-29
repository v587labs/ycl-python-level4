import React, { createContext, useContext, useState, useEffect } from 'react';
import { getBootstrapData } from '../utils/bootstrapData';

const STORAGE_KEY = 'ycl-python-level4-progress';

const AppContext = createContext();

/**
 * 初始化进度数据
 */
function initProgress() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return normalizeProgressData(JSON.parse(stored));
    }
  } catch (e) {
    console.error('Failed to load progress:', e);
  }
  return createEmptyProgress();
}

function createEmptyProgress() {
  return {
    userId: 'local-user',
    lessons: {},
    lastUpdated: new Date().toISOString()
  };
}

function normalizeProgressData(data) {
  return {
    userId: data.userId || 'local-user',
    lessons: data.lessons || {},
    lastUpdated: data.lastUpdated || new Date().toISOString()
  };
}

/**
 * 保存进度到 localStorage
 */
function saveProgress(progress) {
  try {
    const data = {
      ...progress,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Failed to save progress:', e);
    return false;
  }
}

export function AppProvider({ children }) {
  const [mode, setMode] = useState('teacher');
  const [currentLesson, setCurrentLesson] = useState(null);
  const [progress, setProgress] = useState(initProgress);
  const [bootstrapData] = useState(getBootstrapData);

  // 每次进度变化时保存到 localStorage
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  /**
   * 切换模式
   */
  const switchMode = (newMode) => {
    if (newMode === 'teacher' || newMode === 'student') {
      setMode(newMode);
    }
  };

  /**
   * 更新单个课时进度
   */
  const updateProgress = (lessonId, data) => {
    setProgress(prev => ({
      ...prev,
      lessons: {
        ...prev.lessons,
        [lessonId]: {
          ...prev.lessons[lessonId],
          ...data,
          lastUpdated: new Date().toISOString()
        }
      }
    }));
  };

  /**
   * 获取单个课时进度
   */
  const getProgress = (lessonId) => {
    return progress.lessons[lessonId] || null;
  };

  /**
   * 检查课时是否完成
   */
  const isLessonCompleted = (lessonId) => {
    const lessonProgress = progress.lessons[lessonId];
    return lessonProgress?.completed === true;
  };

  /**
   * 获取总体进度百分比
   */
  const getOverallProgress = (totalLessons = 12) => {
    const completedCount = Object.values(progress.lessons).filter(
      p => p.completed
    ).length;
    return Math.round((completedCount / totalLessons) * 100);
  };

  /**
   * 导出进度数据
   */
  const exportProgress = () => {
    return JSON.stringify(progress, null, 2);
  };

  /**
   * 导入进度数据
   */
  const importProgress = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.lessons && typeof data.lessons === 'object') {
        setProgress(normalizeProgressData(data));
        return { success: true };
      }
      return { success: false, error: 'Invalid data format' };
    } catch (e) {
      return { success: false, error: e.message };
    }
  };

  /**
   * 重置进度
   */
  const resetProgress = () => {
    setProgress(initProgress());
  };

  const value = {
    mode,
    currentLesson,
    progress,
    bootstrapData,
    runtimeConfig: bootstrapData.config,
    setMode,
    setCurrentLesson,
    switchMode,
    updateProgress,
    getProgress,
    isLessonCompleted,
    getOverallProgress,
    exportProgress,
    importProgress,
    resetProgress
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export default AppContext;
