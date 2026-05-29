import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import lessons from '../data/lessons';
import TeacherPage from './TeacherPage';
import StudentPage from './StudentPage';
import { useApp } from '../context/AppContext';

/**
 * 课时容器组件
 * 白色顶栏 + 模式切换 + 响应式布局
 * 优化版：增强视觉层次和动画
 */
function Lesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mode, switchMode, setCurrentLesson, updateProgress } = useApp();

  const [lesson, setLesson] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCourseNavOpen, setIsCourseNavOpen] = useState(true);

  const chapterGroups = useMemo(() => {
    return lessons.reduce((groups, item) => {
      if (!groups[item.chapter]) groups[item.chapter] = [];
      groups[item.chapter].push(item);
      return groups;
    }, {});
  }, []);

  // 加载课时数据
  useEffect(() => {
    const lessonId = parseInt(id);
    const foundLesson = lessons.find(l => l.id === lessonId);

    if (foundLesson) {
      setLesson(foundLesson);
      setCurrentLesson(lessonId);
    } else {
      navigate('/');
    }

    setIsLoading(false);
  }, [id, navigate, setCurrentLesson]);

  // 处理模式切换
  const handleModeSwitch = () => {
    const newMode = mode === 'teacher' ? 'student' : 'teacher';
    switchMode(newMode);
  };

  // 处理课时完成
  const handleLessonComplete = (data) => {
    if (lesson) {
      updateProgress(lesson.id, {
        completed: true,
        ...data
      });
    }
  };

  // 加载状态 - 优化版
  if (isLoading || !lesson) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center animate-fade-up">
          <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-primary/10 to-orange-100 flex items-center justify-center">
            <span className="text-3xl animate-pulse">🐍</span>
          </div>
          <p className="text-muted text-sm">正在加载课时...</p>
        </div>
      </div>
    );
  }

  const isTeacherMode = mode === 'teacher';

  return (
    <div className={`lesson-page min-h-screen bg-surface pb-24 ${isTeacherMode ? 'teacher-layout' : ''} ${isTeacherMode && isCourseNavOpen ? 'course-nav-open' : ''}`}>
      {/* ===== 顶部导航 ===== */}
      <header className="lesson-topbar sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 左侧：返回 + 课时信息 */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="icon-button"
                title="返回首页"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </Link>

              <div>
                <div className="flex items-center gap-2">
                  <span className="lesson-number-pill">
                    #{lesson.id}
                  </span>
                  <h1 className="font-bold text-dark text-base leading-tight">
                    {lesson.title}
                  </h1>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted mt-0.5">
                  <span>{lesson.chapter}</span>
                  <span className="text-border">·</span>
                  <span>{'★'.repeat(lesson.difficulty || 1)}</span>
                </div>
              </div>
            </div>

            {/* 右侧：模式切换 */}
            <div className="flex items-center gap-3">
              {/* 模式标签 - 优化版 */}
              <div className={`mode-chip ${mode}`}>
                {mode === 'teacher' ? (
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 10v6M2 10l10-6 10 6-10 6-10-6z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                    教师模式
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    学生模式
                  </span>
                )}
              </div>

              {/* 切换按钮 */}
              <button
                onClick={handleModeSwitch}
                className="mode-switch-button"
              >
                切换 {mode === 'teacher' ? '学生' : '教师'}模式
              </button>
            </div>
          </div>
        </div>
      </header>

      {isTeacherMode && (
        <CourseNavigator
          lesson={lesson}
          chapterGroups={chapterGroups}
          isOpen={isCourseNavOpen}
          onToggle={() => setIsCourseNavOpen(open => !open)}
        />
      )}

      {/* ===== 主内容区域 ===== */}
      <div className="lesson-main mt-6 animate-fade-up">
        {isTeacherMode ? (
          <TeacherPage lesson={lesson} />
        ) : (
          <StudentPage
            lesson={lesson}
            onComplete={handleLessonComplete}
          />
        )}
      </div>

      {/* ===== 底部操作栏（仅学生模式） ===== */}
      {mode === 'student' && (
        <div className="lesson-footer">
          <div className="lesson-footer-inner">
            <div className="lesson-footer-title">
              {lesson.student?.codingChallenge?.title}
            </div>

            <div className="lesson-footer-actions">
              <button
                onClick={() => switchMode('teacher')}
                className="secondary-action"
              >
                ← 查看教师页
              </button>

              <Link
                to="/"
                className="primary-action"
              >
                返回首页
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CourseNavigator({ lesson, chapterGroups, isOpen, onToggle }) {
  const currentIndex = lessons.findIndex(item => item.id === lesson.id);
  const previousLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="course-nav-toggle"
          onClick={onToggle}
          aria-label="显示课程目录"
          aria-controls="course-chapter-nav"
          aria-expanded={false}
          title="显示课程目录"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      )}

      <aside id="course-chapter-nav" className={`course-nav ${isOpen ? 'open' : ''}`} aria-label="课程章节导航" aria-hidden={!isOpen}>
        <div className="course-nav-head">
          <div>
            <span>课程目录</span>
            <strong>快速切换章节</strong>
          </div>
          <button type="button" onClick={onToggle} aria-label="收起课程目录">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        </div>

        <div className="course-nav-current">
          <span>当前</span>
          <strong>#{lesson.id} {lesson.title}</strong>
          <small>{lesson.chapter}</small>
        </div>

        <div className="course-nav-scroll">
          {Object.entries(chapterGroups).map(([chapter, chapterLessons]) => (
            <section key={chapter} className="course-nav-section">
              <h2>{chapter}</h2>
              <div className="course-nav-list">
                {chapterLessons.map(item => (
                  <Link
                    key={item.id}
                    to={`/lesson/${item.id}`}
                    className={`course-nav-item ${item.id === lesson.id ? 'active' : ''}`}
                    aria-current={item.id === lesson.id ? 'page' : undefined}
                  >
                    <span>{item.id}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.type === 'extended' ? '拓展' : '主线'} · {'★'.repeat(item.difficulty || 1)}</small>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="course-nav-actions">
          {previousLesson ? (
            <Link to={`/lesson/${previousLesson.id}`} className="course-nav-step secondary">
              上一课
              <span>#{previousLesson.id} {previousLesson.title}</span>
            </Link>
          ) : (
            <span className="course-nav-step disabled">已经是第一课</span>
          )}

          {nextLesson ? (
            <Link to={`/lesson/${nextLesson.id}`} className="course-nav-step primary">
              下一课
              <span>#{nextLesson.id} {nextLesson.title}</span>
            </Link>
          ) : (
            <span className="course-nav-step disabled">已经是最后一课</span>
          )}
        </div>
      </aside>
    </>
  );
}

export default Lesson;
