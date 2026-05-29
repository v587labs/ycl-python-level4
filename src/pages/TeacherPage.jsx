import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ConceptCard from '../components/ConceptCard';
import MistakeCard from '../components/MistakeCard';
import TeachingPresenter from '../components/TeachingPresenter';

function TeacherPage({ lesson }) {
  const { teacher } = lesson;
  const [isPresenting, setIsPresenting] = useState(false);

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="teacher-shell"
    >
      {/* 页面标题 */}
      <motion.div variants={itemVariants} className={`teacher-hero ${lesson.visual ? 'with-visual' : ''}`}>
        <div className="teacher-hero-main">
          <div className="teacher-hero-copy">
            <span className="section-kicker">Teacher View</span>
            <h2>{lesson.title}</h2>
            <p>{lesson.chapter}</p>
          </div>
          <div className="teacher-hero-actions">
            <button
              type="button"
              className="presentation-button"
              onClick={() => setIsPresenting(true)}
            >
              开始课堂演示
            </button>
            <span className="teacher-badge">
              {lesson.type === 'extended' ? '拓展课件' : '主线课件'}
            </span>
          </div>
        </div>
        {lesson.visual && (
          <figure className="lesson-visual-hero compact">
            <img src={lesson.visual.src} alt={lesson.visual.alt} loading="lazy" decoding="async" />
            <figcaption>{lesson.visual.caption}</figcaption>
          </figure>
        )}
      </motion.div>

      {/* 主内容卡片 */}
      <motion.div variants={itemVariants} className="teacher-board">
        {/* 内容区域 */}
        <div className="teacher-board-body">

          {/* 第一行：学习目标 + 考试考点 */}
          <motion.div variants={itemVariants} className="teacher-grid">
            {/* 学习目标 */}
            <div className="teacher-section main">
              <h3>
                <span className="section-dot blue"/>
                学习目标
              </h3>
              <ul className="teacher-objectives">
                {teacher.objectives.map((objective, index) => (
                  <li key={index}>
                    <span>{index + 1}</span>
                    <p>{objective}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* 考试考点 */}
            <div className="teacher-section">
              <h3>
                <span className="section-dot amber"/>
                考试考点
              </h3>
              <div className="topic-chips">
                {lesson.examTopics.map((topic, index) => (
                  <span
                    key={index}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 第二行：低龄课堂提醒 */}
          {teacher.ageAdaptation && (
            <motion.div variants={itemVariants} className="teacher-section kid-guide">
              <h3>
                <span className="section-dot purple"/>
                低龄课堂提醒
              </h3>
              <div className="kid-guide-grid">
                <div>
                  <span>对象</span>
                  <strong>{teacher.ageAdaptation.target}</strong>
                </div>
                <div>
                  <span>节奏</span>
                  <strong>{teacher.ageAdaptation.pace}</strong>
                </div>
                <div>
                  <span>语言</span>
                  <strong>{teacher.ageAdaptation.language}</strong>
                </div>
              </div>
              {teacher.ageAdaptation.notes && (
                <ul className="kid-guide-notes">
                  {teacher.ageAdaptation.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}

          {/* 第三行：课堂流程 */}
          {teacher.lessonFlow && (
            <motion.div variants={itemVariants} className="teacher-section">
              <h3>
                <span className="section-dot blue"/>
                课堂流程
              </h3>
              <div className="lesson-flow-list">
                {teacher.lessonFlow.map((item, index) => (
                  <div key={index} className="lesson-flow-item">
                    <div className="lesson-flow-time">{item.time}</div>
                    <div>
                      <h4>{item.phase}</h4>
                      <p><strong>老师：</strong>{item.teacher}</p>
                      <p><strong>孩子：</strong>{item.student}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 第四行：老师话术 */}
          {teacher.teacherScript && (
            <motion.div variants={itemVariants} className="teacher-section">
              <h3>
                <span className="section-dot teal"/>
                老师话术
              </h3>
              <div className="teacher-script-list">
                {teacher.teacherScript.map((script, index) => (
                  <div key={index} className="teacher-script-card">
                    <span>{script.when}</span>
                    <h4>{script.title}</h4>
                    <p>{script.say}</p>
                    {script.check && <small>检查点：{script.check}</small>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 第五行：概念讲解 */}
          <motion.div variants={itemVariants} className="teacher-section">
            <h3>
              <span className="section-dot teal"/>
              概念讲解
            </h3>
            <div className="concept-grid">
              {teacher.concepts.map((concept, index) => (
                <ConceptCard
                  key={index}
                  name={concept.name}
                  definition={concept.definition}
                  example={concept.example}
                  teacherSay={concept.teacherSay}
                  kidQuestion={concept.kidQuestion}
                />
              ))}
            </div>
          </motion.div>

          {/* 第六行：课堂小游戏 */}
          {teacher.classroomGames && (
            <motion.div variants={itemVariants} className="teacher-section">
              <h3>
                <span className="section-dot amber"/>
                课堂小游戏
              </h3>
              <div className="classroom-game-grid">
                {teacher.classroomGames.map((game, index) => (
                  <div key={index} className="classroom-game-card">
                    <h4>{game.name}</h4>
                    <p>{game.how}</p>
                    <small>{game.goal}</small>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 第七行：典型错误 */}
          <motion.div variants={itemVariants} className="teacher-section">
            <h3>
              <span className="section-dot red"/>
              典型错误
            </h3>
            <div className="mistake-list">
              {teacher.commonMistakes.map((mistake, index) => (
                <MistakeCard
                  key={index}
                  mistake={mistake.mistake}
                  wrongCode={mistake.wrongCode}
                  correctCode={mistake.correctCode}
                  explanation={mistake.explanation}
                />
              ))}
            </div>

            {/* 教学建议 */}
            {teacher.teachingTips && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="teaching-tip"
              >
                <strong>教学建议</strong>
                <p>{teacher.teachingTips}</p>
              </motion.div>
            )}
          </motion.div>

          {/* 第八行：跟做练习 */}
          {teacher.handsOn && (
            <motion.div variants={itemVariants} className="teacher-section">
              <h3>
                <span className="section-dot blue"/>
                {teacher.handsOn.title}
              </h3>
              <ol className="hands-on-list">
                {teacher.handsOn.steps.map((step, index) => (
                  <li key={index}>
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </motion.div>
          )}

          {/* 第九行：板书与课后沟通 */}
          {(teacher.boardPlan || teacher.parentNote) && (
            <motion.div variants={itemVariants} className="teacher-grid">
              {teacher.boardPlan && (
                <div className="teacher-section">
                  <h3>
                    <span className="section-dot purple"/>
                    板书建议
                  </h3>
                  <div className="board-plan">
                    {teacher.boardPlan.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              )}

              {teacher.parentNote && (
                <div className="teacher-section">
                  <h3>
                    <span className="section-dot amber"/>
                    课后给家长
                  </h3>
                  <div className="parent-note">
                    <p>{teacher.parentNote}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>

      {isPresenting && (
        <TeachingPresenter
          lesson={lesson}
          onClose={() => setIsPresenting(false)}
        />
      )}
    </motion.div>
  );
}

export default TeacherPage;
