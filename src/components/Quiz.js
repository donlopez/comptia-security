import React, { useState } from "react";
import { questions } from "../data/all_questions";
import "../styles/Quiz.css";

const Quiz = () => {
  const sampleSize = 30;
  const [quizStarted, setQuizStarted] = useState(false);
  const [shuffled, setShuffled] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const startQuiz = () => {
    const sample = [...questions].sort(() => 0.5 - Math.random()).slice(0, sampleSize);
    setShuffled(sample);
    setQuizStarted(true);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setQuizFinished(false);
  };

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    setShowAnswer(true);
    const correctIndex = shuffled[current].choices.findIndex(
      (choice) =>
        choice === shuffled[current].choices[shuffled[current].answer.charCodeAt(0) - 65]
    );
    if (index === correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    if (current + 1 < sampleSize) {
      setCurrent((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const quitQuiz = () => {
    setQuizStarted(false);
    setShuffled([]);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowAnswer(false);
    setQuizFinished(false);
  };

  const getMessage = (percentage) => {
    if (percentage < 50) return "😵‍💫 You have some serious studying to do!";
    if (percentage < 70) return "📚 Keep going, you're getting there!";
    if (percentage < 80) return "💪 Awesome progress!";
    if (percentage < 90) return "🎯 Nice job!!";
    return "🏆 Perfect!!! You're a Security+ pro!";
  };

  if (!quizStarted) {
    return (
      <div className="quiz-container">
        <h1>🛡️ CompTIA Security+ Practice Test</h1>
        <button onClick={startQuiz} className="quiz-start">Start Test</button>
      </div>
    );
  }

  if (quizFinished) {
    const percentage = Math.round((score / sampleSize) * 100);
    return (
      <div className="quiz-container quiz-result">
        <h1>✅ Test Complete!</h1>
        <div className="quiz-message">{getMessage(percentage)}</div>
        <div className="quiz-score">Your Score: <strong>{score} / {sampleSize} ({percentage}%)</strong></div>
        <div style={{ marginTop: "20px" }}>
          <button onClick={startQuiz} className="quiz-retake">Retake Test</button>
          <button onClick={quitQuiz} className="quiz-quit">Quit</button>
        </div>
      </div>
    );
  }

  const question = shuffled[current];
  const correctIndex = question.choices.findIndex(
    (choice) => choice === question.choices[question.answer.charCodeAt(0) - 65]
  );

  return (
    <div className="quiz-container">
      <h1>🛡️ CompTIA Security+ Practice Test</h1>
      <h2>Question {current + 1} of {sampleSize}</h2>
      <h3>{question.question}</h3>

      {question.image && (
        <div style={{ margin: "10px 0" }}>
          <img
            src={question.image}
            alt="Question visual aid"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "6px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)"
            }}
          />
        </div>
      )}

      <div className="quiz-options">
        {question.choices.map((choice, index) => {
          let className = "quiz-button";
          if (showAnswer) {
            if (index === correctIndex) className += " correct";
            else if (index === selected) className += " incorrect";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={className}
            >
              {choice}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <div className="quiz-feedback">
          {selected === correctIndex
            ? "✅ Correct!"
            : `❌ Incorrect. Correct answer: ${question.choices[correctIndex]}`}
          <p style={{ marginTop: "10px", fontSize: "16px", color: "#444" }}>
            {question.explanation}
          </p>
        </div>
      )}
      {showAnswer && (
        <button onClick={nextQuestion} className="quiz-next">
          {current + 1 === sampleSize ? "Finish Test" : "Next Question →"}
        </button>
      )}
    </div>
  );
};

export default Quiz;