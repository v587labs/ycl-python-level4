import React, { useRef } from 'react';
import LessonCard from '../components/LessonCard';
import lessons from '../data/lessons';
import { useApp } from '../context/AppContext';
import { exportToJSON, importFromJSON } from '../utils/exportData';

function Home() {
  const { progress, importProgress, getOverallProgress } = useApp();
  const fileInputRef = useRef(null);

  const chapterGroups = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.chapter]) acc[lesson.chapter] = [];
    acc[lesson.chapter].push(lesson);
    return acc;
  }, {});

  const getLessonStatus = (lessonId) => {
    const lessonProgress = progress.lessons[lessonId];
    if (!lessonProgress) return 'notstarted';
    if (lessonProgress.completed) return 'completed';
    return 'inprogress';
  };

  const handleImportJSON = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const data = await importFromJSON(file);
      const result = importProgress(JSON.stringify(data));
      alert(result.success ? '进度导入成功！' : `导入失败：${result.error}`);
    } catch (err) {
      alert(`导入失败：${err.message}`);
    }

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const completedCount = Object.values(progress.lessons).filter(p => p.completed).length;
  const overallProgress = getOverallProgress(lessons.length);
  const mainLessons = lessons.filter(lesson => lesson.type === 'main');
  const extendedLessons = lessons.filter(lesson => lesson.type === 'extended');
  const completedLessonIds = new Set(
    Object.entries(progress.lessons)
      .filter(([, item]) => item.completed)
      .map(([lessonId]) => Number(lessonId))
  );
  const mainCompletedCount = mainLessons.filter(lesson => completedLessonIds.has(lesson.id)).length;
  const extendedCompletedCount = extendedLessons.filter(lesson => completedLessonIds.has(lesson.id)).length;

  return (
    <div className="min-h-screen bg-surface pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <header className="app-shell-header">
          <div className="brand-lockup">
            <div className="brand-mark">Py</div>
            <div>
              <div className="brand-title">YCL Python 四级课堂</div>
              <div className="brand-subtitle">四级主线 · 拓展挑战 · 本地进度</div>
            </div>
          </div>

          <div className="header-progress">
            <span>{completedCount}/{lessons.length}</span>
            <small>课时完成</small>
          </div>
        </header>

        <section className="dashboard-hero animate-fade-up">
          <div className="hero-copy">
            <span className="section-kicker">Python Level 4</span>
            <h1>一套可投屏、可练习、可导出的互动课件</h1>
            <p>课时 0-1 是序章，课时 2-13 覆盖四级主线，课时 14-29 是拓展挑战；课堂讲解和学生编程练习共用同一份进度。</p>
          </div>

          <div className="progress-panel">
            <div className="progress-number">{overallProgress}%</div>
            <div className="progress-label">整体完成度</div>
            <div className="progress-track">
              <span style={{ width: `${overallProgress}%` }} />
            </div>
          </div>
        </section>

        <section className="metric-grid">
          <MetricCard label="主线完成" value={`${mainCompletedCount}/${mainLessons.length}`} tone="success" />
          <MetricCard label="拓展完成" value={`${extendedCompletedCount}/${extendedLessons.length}`} tone="warning" />
          <MetricCard label="总课时" value={lessons.length} tone="neutral" />
        </section>

        <section className="course-sections">
          {Object.entries(chapterGroups).map(([chapter, chapterLessons], chapterIdx) => (
            <div key={chapter} className="chapter-section animate-fade-up" style={{ animationDelay: `${chapterIdx * 0.06}s` }}>
              <div className="chapter-heading">
                <div>
                  <span className="section-kicker">Chapter {chapterIdx + 1}</span>
                  <h2>{chapter}</h2>
                </div>
                <span className="chapter-count">{chapterLessons.length} 课时</span>
              </div>

              <div className="lesson-grid">
                {chapterLessons.map((lesson, lessonIdx) => (
                  <LessonCard
                    key={lesson.id}
                    lesson={lesson}
                    status={getLessonStatus(lesson.id)}
                    animDelay={(chapterIdx * 3 + lessonIdx) * 0.03}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="file-actions">
          <button onClick={() => exportToJSON(progress, lessons)} className="btn btn-secondary text-sm">
            导出完整 JSON
          </button>

          <label className="btn btn-secondary text-sm cursor-pointer">
            导入进度 JSON
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImportJSON}
              className="hidden"
            />
          </label>
        </section>
      </div>
    </div>
  );
}

function MetricCard({ label, value, tone }) {
  return (
    <div className={`metric-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default Home;
