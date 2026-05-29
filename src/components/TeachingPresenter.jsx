import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

function buildDefaultSlides(lesson) {
  const teacher = lesson.teacher || {};
  const flowSlides = (teacher.lessonFlow || []).map((item) => ({
    kicker: item.time,
    title: item.phase,
    body: item.teacher,
    prompt: item.student,
    teacherNote: item.teacher
  }));

  return [
    {
      kicker: lesson.chapter,
      title: lesson.title,
      body: '今天我们用清楚的话，让电脑照着我们的指令做事。',
      prompt: '准备好当一名小程序员了吗？',
      teacherNote: '先用一个动作口令热身，再进入代码。'
    },
    ...flowSlides,
    {
      kicker: '课堂收口',
      title: '今天记住什么？',
      bullets: teacher.objectives?.slice(0, 3) || [],
      prompt: '请用自己的话说出今天学到的一句话。',
      teacherNote: teacher.teachingTips
    }
  ];
}

function TeachingPresenter({ lesson, onClose }) {
  const slides = useMemo(() => {
    const baseSlides = lesson.teacher?.demoSlides?.length
      ? lesson.teacher.demoSlides
      : buildDefaultSlides(lesson);

    if (!lesson.visual) return baseSlides;

    return baseSlides.map((slide, index) => {
      if (index !== 0 || slide.image) return slide;
      return {
        ...slide,
        image: lesson.visual
      };
    });
  }, [lesson]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = slides[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === slides.length - 1;

  const goPrev = () => setCurrentIndex(index => Math.max(0, index - 1));
  const goNext = () => setCurrentIndex(index => Math.min(slides.length - 1, index + 1));

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const enterFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn('Unable to enter fullscreen:', error);
    }
  };

  const renderTeacherNote = (note) => {
    if (!note) {
      return <p>这一页可以让孩子先观察，再请1-2位同学回答。</p>;
    }

    if (typeof note === 'string') {
      return <p>{note}</p>;
    }

    if (Array.isArray(note)) {
      return (
        <div className="presenter-note-list">
          {note.map((item, index) => {
            if (typeof item === 'string') {
              return <p key={index}>{item}</p>;
            }

            return (
              <section key={index} className="presenter-note-block">
                <strong>{item.title}</strong>
                {item.lines && (
                  <ul>
                    {item.lines.map((line, lineIndex) => (
                      <li key={lineIndex}>{line}</li>
                    ))}
                  </ul>
                )}
                {item.text && <p>{item.text}</p>}
              </section>
            );
          })}
        </div>
      );
    }

    return <p>{String(note)}</p>;
  };

  const presenter = (
    <div className="presenter-overlay" role="dialog" aria-modal="true">
      <div className="presenter-topbar">
        <div>
          <span>课堂演示</span>
          <strong>{lesson.title}</strong>
        </div>
        <div className="presenter-topbar-actions">
          <button onClick={enterFullscreen}>全屏</button>
          <button onClick={onClose}>退出</button>
        </div>
      </div>

      <main className="presenter-stage">
        <section className={`presenter-slide ${current.image ? 'has-image' : ''}`}>
          {current.kicker && <span className="presenter-kicker">{current.kicker}</span>}
          <h2>{current.title}</h2>
          {current.body && <p className="presenter-body">{current.body}</p>}

          {current.bullets && (
            <ul className="presenter-bullets">
              {current.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}

          {current.code && (
            <pre className="presenter-code">
              <code>{current.code}</code>
            </pre>
          )}

          {current.image && (
            <figure className="presenter-image">
              <img src={current.image.src} alt={current.image.alt} />
              <figcaption>{current.image.caption}</figcaption>
            </figure>
          )}

          {current.prompt && (
            <div className="presenter-prompt">
              <span>问同学</span>
              <p>{current.prompt}</p>
            </div>
          )}
        </section>

        <aside className="presenter-note">
          <span>老师提示</span>
          {renderTeacherNote(current.teacherNote)}
          {current.check && (
            <div className="presenter-check">
              <strong>检查点</strong>
              <p>{current.check}</p>
            </div>
          )}
        </aside>
      </main>

      <div className="presenter-footer">
        <button onClick={goPrev} disabled={isFirst}>上一页</button>
        <div className="presenter-progress">
          <span style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }} />
        </div>
        <strong>{currentIndex + 1} / {slides.length}</strong>
        <button onClick={isLast ? onClose : goNext}>
          {isLast ? '结束演示' : '下一页'}
        </button>
      </div>
    </div>
  );

  return createPortal(presenter, document.body);
}

export default TeachingPresenter;
