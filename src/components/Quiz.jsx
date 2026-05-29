import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Quiz({ quizzes, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [earnedPoints, setEarnedPoints] = useState(0);

  const currentQuiz = quizzes[currentIndex];
  const progress = Math.round((currentIndex / quizzes.length) * 100);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuiz.answer;
    const pointsEarned = isCorrect ? (currentQuiz.points || 10) : 0;

    setAnswers(prev => ({
      ...prev,
      [currentIndex]: { answer: selectedAnswer, correct: isCorrect, points: pointsEarned }
    }));
    setIsSubmitted(true);
    if (isCorrect) setEarnedPoints(prev => prev + pointsEarned);
  };

  const handleNext = () => {
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    const correctCount = Object.values(answers).filter(answer => answer.correct).length;
    return Math.round((correctCount / quizzes.length) * 100);
  };

  const handleComplete = () => {
    if (!onComplete) return;

    const quizAnswers = quizzes.map((quiz, index) => {
      const userAnswer = answers[index] || {};
      return {
        questionIndex: index,
        question: quiz.question,
        selectedIndex: userAnswer.answer ?? null,
        selectedOption: userAnswer.answer !== undefined ? quiz.options[userAnswer.answer] : null,
        correctIndex: quiz.answer,
        correctOption: quiz.options[quiz.answer],
        correct: userAnswer.correct === true,
        points: userAnswer.points || 0,
        explanation: quiz.explanation || ''
      };
    });

    onComplete(calculateScore(), earnedPoints, quizAnswers);
  };

  if (showResults) {
    const score = calculateScore();
    const correctCount = Object.values(answers).filter(answer => answer.correct).length;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="quiz-panel"
      >
        <div className="quiz-summary">
          <div>
            <span className="section-kicker">Quiz Complete</span>
            <h3>选择题完成</h3>
            <p>答对 {correctCount} / {quizzes.length} 题，选择题得分 {score}%</p>
          </div>
          <div className="quiz-score">
            <strong>{score}%</strong>
            <span>+{earnedPoints} 积分</span>
          </div>
        </div>

        <div className="quiz-review-list">
          {quizzes.map((quiz, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer?.correct;

            return (
              <div key={quiz.question} className={`quiz-review ${isCorrect ? 'correct' : 'wrong'}`}>
                <div className="quiz-review-head">
                  <span>第 {index + 1} 题</span>
                  <strong>{isCorrect ? '正确' : '需复习'}</strong>
                </div>
                <p>{quiz.question}</p>
                {!isCorrect && (
                  <div className="answer-compare">
                    <span>你的答案：{quiz.options[userAnswer?.answer] || '未作答'}</span>
                    <span>正确答案：{quiz.options[quiz.answer]}</span>
                  </div>
                )}
                {quiz.explanation && <small>{quiz.explanation}</small>}
              </div>
            );
          })}
        </div>

        <button onClick={handleComplete} className="quiz-primary-action">
          继续编程练习
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="quiz-panel"
    >
      <div className="quiz-head">
        <div>
          <span className="section-kicker">Question {currentIndex + 1}</span>
          <h3>{currentQuiz.question}</h3>
        </div>
        <div className="quiz-points">{earnedPoints} 分</div>
      </div>

      <div className="quiz-progress">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-options">
        {currentQuiz.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrect = index === currentQuiz.answer;
          const showCorrect = isSubmitted && isCorrect;
          const showWrong = isSubmitted && isSelected && !isCorrect;

          return (
            <button
              key={option}
              type="button"
              onClick={() => !isSubmitted && setSelectedAnswer(index)}
              className={`quiz-option-card ${isSelected ? 'selected' : ''} ${showCorrect ? 'correct' : ''} ${showWrong ? 'wrong' : ''}`}
            >
              <span className="option-key">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isSubmitted && currentQuiz.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="quiz-explanation"
          >
            {currentQuiz.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {!isSubmitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="quiz-primary-action"
        >
          提交答案
        </button>
      ) : (
        <button onClick={handleNext} className="quiz-primary-action">
          {currentIndex < quizzes.length - 1 ? '下一题' : '查看成绩'}
        </button>
      )}
    </motion.div>
  );
}

export default Quiz;
