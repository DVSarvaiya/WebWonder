"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    explanation: "The gravitational pull of the Moon is the major driver of Earth’s ocean tides."
  },
];

const gradientBg =
  "bg-gradient-to-br from-[#131a22] via-[#263c60] to-[#6b21a8]";

export default function QuizPage() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [copied, setCopied] = useState(false);

  // Calculate live score based on correct answers in userAnswers
  const score = userAnswers.filter(
    (ans, idx) => ans === quizQuestions[idx].answer
  ).length;

  const handleOption = (option) => {
    const updated = [...userAnswers];
    updated[current] = option;
    setUserAnswers(updated);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const prevQuestion = () => {
    setShowExplanation(false);
    if (current > 0) setCurrent(current - 1);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setShowExplanation(false);
    setFinished(false);
    setCopied(false);
  };

  const copyResult = async () => {
    await navigator.clipboard.writeText(
      `I scored ${score} out of ${quizQuestions.length} on the Ocean Odyssey Quiz!`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const progress = ((current + Number(finished)) / quizQuestions.length) * 100;

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${gradientBg} relative`}>
      {/* Go to Home Button */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-6 left-6 z-20 bg-blue-900/90 text-violet-200 py-2 px-5 rounded-full shadow-lg font-bold hover:bg-violet-800 transition duration-200"
      >
        ⬅️ Go to Home
      </button>

      <div
        className="absolute inset-0 animate-pulse opacity-60"
        style={{
          background: "radial-gradient(circle at center, #8b5cf6 0%, transparent 58%)",
          zIndex: 0
        }}
      ></div>

      <div className="relative z-10 w-full max-w-lg p-8 rounded-3xl shadow-2xl bg-black/60 border border-violet-900 border-opacity-40">

        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-200 mb-2">
          Ocean Odyssey Quiz
        </h1>
        <p className="text-center text-violet-300 mb-4 italic">
          Dive into the wonders of marine exploration!
        </p>

        {/* Progress Bar */}
        <div className="relative h-5 rounded-full bg-blue-800/50 mb-8 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-5 rounded-full bg-violet-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
          <span className="relative z-10 flex justify-center text-sm text-violet-100 font-semibold">
            {finished ? 'Completed!' : `Question ${current + 1} of ${quizQuestions.length}`}
          </span>
        </div>

        {/* Score Preview */}
        {!finished && (
          <div className="mb-3 text-blue-100 flex justify-end font-bold">
            Score: {score}
          </div>
        )}

        {finished ? (
          <div className="flex flex-col items-center">
            <div className="text-white text-3xl mb-4 font-semibold">
              Your Score: <span className="text-blue-300">{score}</span> / {quizQuestions.length}
            </div>
            <button
              onClick={restartQuiz}
              className="mt-1 mb-3 bg-blue-700 hover:bg-violet-700 text-white py-2 px-6 rounded-full font-semibold shadow-md transition transform hover:scale-105"
            >
              Retry Quiz
            </button>
            <button
              onClick={copyResult}
              className={`bg-violet-800 text-blue-100 py-2 px-5 rounded-full mt-1 font-semibold hover:bg-violet-600 transition ${copied ? 'ring-2 ring-green-400' : ''}`}
            >
              {copied ? 'Copied!' : 'Share Your Score'}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-xl text-white font-semibold mb-4 transition-all duration-300">
                {quizQuestions[current].question}
              </div>
              <div className="grid gap-4">
                {quizQuestions[current].options.map((option) => (
                  <button
                    key={option}
                    className={`py-2 px-4 rounded-lg w-full font-semibold
                      transition-all duration-300
                      ${
                        userAnswers[current]
                          ? option === quizQuestions[current].answer
                            ? userAnswers[current] === option
                              ? "bg-green-800 text-white border-2 border-green-400 shadow-xl scale-105"
                              : "bg-indigo-900 text-blue-200"
                            : userAnswers[current] === option
                              ? "bg-red-800 text-white border-2 border-red-400 shadow-xl scale-105"
                              : "bg-indigo-900 text-blue-200"
                          : "bg-indigo-900 text-blue-200 hover:bg-indigo-700 hover:text-violet-200"
                      }`}
                    disabled={!!userAnswers[current]}
                    onClick={() => handleOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation after answering */}
            {userAnswers[current] && (
              <div className="bg-black/60 text-violet-200 rounded-lg p-4 my-2 transition-all duration-500 shadow-inner">
                <span className="font-medium">Fact:</span> {quizQuestions[current].explanation}
              </div>
            )}

            <div className="mt-4 flex w-full gap-2">
              <button
                onClick={prevQuestion}
                className={`w-1/2 bg-blue-800 hover:bg-violet-800 text-violet-100 py-2 rounded-full font-bold transition shadow-md
                  ${current === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
                disabled={current === 0}
              >
                Previous
              </button>
              {userAnswers[current] && (
                <button
                  onClick={nextQuestion}
                  className="w-1/2 bg-blue-500 hover:bg-violet-600 text-white py-2 rounded-full font-bold transition shadow-md"
                >
                  {current + 1 === quizQuestions.length ? "See Results" : "Next"}
                </button>
              )}
            </div>

            <div className="text-sm text-violet-200 mt-6 text-center">
              Question {current + 1} of {quizQuestions.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
