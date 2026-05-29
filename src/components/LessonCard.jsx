import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

function LessonCard({ lesson, status = 'notstarted', animDelay = 0 }) {
  const navigate = useNavigate();
  const { isLessonCompleted } = useApp();

  const lessonStatus = isLessonCompleted(lesson.id) ? 'completed' : status;
  const config = statusConfig[lessonStatus] || statusConfig.notstarted;
  const typeLabel = lesson.type === 'extended' ? '拓展' : '主线';

  return (
    <motion.button
      type="button"
      onClick={() => navigate(`/lesson/${lesson.id}`)}
      className={`lesson-card ${lessonStatus}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: animDelay }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="lesson-card-top">
        <span className="lesson-index">#{lesson.id}</span>
        <div className="lesson-card-tags">
          <span className={`lesson-kind ${lesson.type === 'extended' ? 'extended' : 'main'}`}>{typeLabel}</span>
          <span className={`lesson-state ${lessonStatus}`}>{config.label}</span>
        </div>
      </div>

      <h3>{lesson.title}</h3>
      <p>{lesson.chapter}</p>

      <div className="lesson-card-footer">
        <span>{lesson.examTopics?.slice(0, 2).join(' · ')}</span>
        <span className="difficulty">{'★'.repeat(lesson.difficulty || 1)}</span>
      </div>
    </motion.button>
  );
}

const statusConfig = {
  completed: { label: '已完成' },
  inprogress: { label: '进行中' },
  notstarted: { label: '未开始' }
};

export default LessonCard;
