"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Layout from '@/components/Layout';

const quizQuestions = [
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific",
    explanation: "The Pacific Ocean is the largest, covering over 30% of Earth's surface."
  },
  {
    question: "Which animal is known as the 'gentle giant' of the ocean?",
    options: ["Blue Whale", "Great White Shark", "Dolphin", "Orca"],
    answer: "Blue Whale",
    explanation: "The blue whale is the largest animal ever known and is gentle despite its size."
  },
  {
    question: "What percentage of the ocean has been explored by humans?",
    options: ["5%", "25%", "50%", "80%"],
    answer: "5%",
    explanation: "Only about 5% of the world's oceans have been explored by humans."
  },
  {
    question: "Which layer of the ocean is the deepest?",
    options: [
      "Sunlight zone (Epipelagic)",
      "Twilight zone (Mesopelagic)",
      "Midnight zone (Bathypelagic)",
      "Abyssal zone",
    ],
    answer: "Abyssal zone",
    explanation: "The Abyssal zone reaches depths of 6,000 meters and is perpetually dark."
  },
  {
    question: "What is the main cause of ocean tides?",
    options: [
      "Earth's rotation",
      "Sun's heat",
      "Moon's gravity",
      "Wind currents",
    ],
    answer: "Moon's gravity",
    explanation: "The gravitational pull of the Moon is the major driver of Earth's ocean tides."
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const router = useRouter();

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].answer;
    const newUserAnswers = [...userAnswers, {
      question: quizQuestions[currentQuestion].question,
      userAnswer: selectedAnswer,
      correctAnswer: quizQuestions[currentQuestion].answer,
      isCorrect,
      explanation: quizQuestions[currentQuestion].explanation
    }];
    
    setUserAnswers(newUserAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) return "Excellent! You're an ocean expert! 🌊";
    if (percentage >= 60) return "Great job! You know your ocean facts! 🐠";
    if (percentage >= 40) return "Good effort! Keep learning about the ocean! 🐙";
    return "Keep exploring! The ocean has many secrets to discover! 🦑";
  };

  if (quizCompleted) {
    return (
      <Layout>
        <div className="min-h-screen pt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
                Quiz Complete!
              </h1>
              <div className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-6xl mb-4">
                  {score >= 4 ? "🏆" : score >= 3 ? "🥈" : score >= 2 ? "🥉" : "🌊"}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Your Score: {score}/{quizQuestions.length}
                </h2>
                <p className="text-xl text-cyan-300 mb-6">{getScoreMessage()}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={resetQuiz}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Again
                  </motion.button>
                  <motion.button
                    onClick={() => router.push('/creatures')}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Creatures
                  </motion.button>
                  <motion.button
                    onClick={() => router.push('/dive')}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Deep Dive
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Review Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Review Your Answers</h3>
              {userAnswers.map((answer, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      answer.isCorrect ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {answer.isCorrect ? '✓' : '✗'}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-2">{answer.question}</h4>
                      <p className="text-gray-300 mb-1">
                        Your answer: <span className={answer.isCorrect ? 'text-green-400' : 'text-red-400'}>{answer.userAnswer}</span>
                      </p>
                      {!answer.isCorrect && (
                        <p className="text-gray-300 mb-2">
                          Correct answer: <span className="text-green-400">{answer.correctAnswer}</span>
                        </p>
                      )}
                      <p className="text-cyan-300 text-sm">{answer.explanation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4">
              Ocean Knowledge Quiz
            </h1>
            <p className="text-xl text-cyan-300">Test your knowledge of the deep blue sea!</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">Progress</span>
              <span className="text-cyan-300">{currentQuestion + 1} of {quizQuestions.length}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </motion.div>

          {/* Question Card */}
          <motion.div
            className="bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              {quizQuestions[currentQuestion].question}
            </h2>

            <div className="space-y-3 mb-6">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedAnswer === option
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-2 border-cyan-400'
                      : 'bg-slate-800/50 text-gray-300 border-2 border-gray-600 hover:border-cyan-500/50 hover:bg-slate-700/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={showExplanation}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === option ? 'border-white bg-white' : 'border-gray-400'
                    }`}>
                      {selectedAnswer === option && <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {!showExplanation ? (
              <motion.button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedAnswer
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                whileHover={selectedAnswer ? { scale: 1.02 } : {}}
                whileTap={selectedAnswer ? { scale: 0.98 } : {}}
              >
                Submit Answer
              </motion.button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`p-4 rounded-xl mb-4 ${
                  selectedAnswer === quizQuestions[currentQuestion].answer
                    ? 'bg-green-500/20 border border-green-500/50'
                    : 'bg-red-500/20 border border-red-500/50'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">
                      {selectedAnswer === quizQuestions[currentQuestion].answer ? '✅' : '❌'}
                    </span>
                    <span className="text-white font-semibold">
                      {selectedAnswer === quizQuestions[currentQuestion].answer ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-gray-300">{quizQuestions[currentQuestion].explanation}</p>
                </div>
                
                <motion.button
                  onClick={handleNextQuestion}
                  className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {/* Score Display */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-r from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/20 inline-block">
              <span className="text-white font-semibold">Current Score: </span>
              <span className="text-cyan-400 font-bold">{score}/{currentQuestion + (showExplanation ? 1 : 0)}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
