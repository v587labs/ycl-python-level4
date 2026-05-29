import { useCallback } from 'react';
import { useApp } from '../context/AppContext';

const STORAGE_KEY = 'ycl-python-level4-progress';

/**
 * 进度管理 Hook
 * 提供读取/更新/保存进度的功能
 */
function useProgress() {
  const { progress, updateProgress, getProgress } = useApp();

  /**
   * 标记课时完成
   */
  const markLessonComplete = useCallback((lessonId, data = {}) => {
    updateProgress(lessonId, {
      completed: true,
      ...data
    });
  }, [updateProgress]);

  /**
   * 更新选择题得分
   */
  const updateQuizScore = useCallback((lessonId, score) => {
    updateProgress(lessonId, {
      quizScore: score
    });
  }, [updateProgress]);

  /**
   * 更新编程题状态
   */
  const updateCodingStatus = useCallback((lessonId, passed) => {
    updateProgress(lessonId, {
      codingPassed: passed
    });
  }, [updateProgress]);

  /**
   * 获取课时完成状态
   */
  const isCompleted = useCallback((lessonId) => {
    const lessonProgress = getProgress(lessonId);
    return lessonProgress?.completed === true;
  }, [getProgress]);

  /**
   * 获取选择题得分
   */
  const getQuizScore = useCallback((lessonId) => {
    const lessonProgress = getProgress(lessonId);
    return lessonProgress?.quizScore ?? null;
  }, [getProgress]);

  /**
   * 获取编程题是否通过
   */
  const isCodingPassed = useCallback((lessonId) => {
    const lessonProgress = getProgress(lessonId);
    return lessonProgress?.codingPassed ?? null;
  }, [getProgress]);

  /**
   * 获取所有已完成课时
   */
  const getCompletedLessons = useCallback(() => {
    return Object.entries(progress.lessons)
      .filter(([, data]) => data.completed)
      .map(([id]) => parseInt(id))
      .sort((a, b) => a - b);
  }, [progress.lessons]);

  /**
   * 获取总体进度
   */
  const getOverallProgress = useCallback((total = 12) => {
    const completed = Object.values(progress.lessons).filter(p => p.completed).length;
    return Math.round((completed / total) * 100);
  }, [progress.lessons]);

  return {
    progress,
    markLessonComplete,
    updateQuizScore,
    updateCodingStatus,
    isCompleted,
    getQuizScore,
    isCodingPassed,
    getCompletedLessons,
    getOverallProgress
  };
}

export default useProgress;