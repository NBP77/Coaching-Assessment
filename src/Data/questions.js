let questions = [
  {
    number: 1,
    questionText: "What is my name?",
    answerOptions: [
      { answerText: "Nick", isCorrect: true },
      { answerText: "Taylor", isCorrect: false },
      { answerText: "Jim", isCorrect: false },
      { answerText: "Henry", isCorrect: false },
    ],
  },
  {
    number: 2,
    questionText: "What is my dogs name?",
    answerOptions: [
      { answerText: "Phil", isCorrect: false },
      { answerText: "Monty", isCorrect: false },
      { answerText: "Rory", isCorrect: false },
      { answerText: "Becs", isCorrect: true },
    ],
  },
  {
    number: 3,
    questionText: "What is my favorite NBA team?",
    answerOptions: [
      { answerText: "Raptors", isCorrect: false },
      { answerText: "Warriors", isCorrect: false },
      { answerText: "Sixers", isCorrect: true },
      { answerText: "Nuggets", isCorrect: false },
    ],
  },
  {
    number: 4,
    questionText: "What is my cars brand?",
    answerOptions: [
      { answerText: "Ford", isCorrect: false },
      { answerText: "Suburau", isCorrect: true },
      { answerText: "Tesla", isCorrect: false },
      { answerText: "Toyota", isCorrect: false },
    ],
  },
  {
    number: 5,
    questionText: "What is my favorite color?",
    answerOptions: [
      { answerText: "Blue", isCorrect: false },
      { answerText: "Green", isCorrect: false },
      { answerText: "Pink", isCorrect: false },
      { answerText: "Red", isCorrect: true },
    ],
  },
  {
    number: 6,
    questionText: "What is my favorite show?",
    answerOptions: [
      { answerText: "Breaking Bad", isCorrect: false },
      { answerText: "The Wire", isCorrect: false },
      { answerText: "Curb your Enthusiasm", isCorrect: false },
      { answerText: "GOT", isCorrect: true },
    ],
  },
  {
    number: 7,
    questionText: "What is my favorite Anime?",
    answerOptions: [
      { answerText: "Hunter X Hunter", isCorrect: false },
      { answerText: "One Piece", isCorrect: true },
      { answerText: "Naruto", isCorrect: false },
      { answerText: "AOT", isCorrect: false },
    ],
  },
  {
    number: 8,
    questionText: "What is my favorite NFL team?",
    answerOptions: [
      { answerText: "Eagles", isCorrect: true },
      { answerText: "Panthers", isCorrect: false },
      { answerText: "Steelers", isCorrect: false },
      { answerText: "Rams", isCorrect: false },
    ],
  },
  {
    number: 9,
    questionText: "What is my favorite soccer team?",
    answerOptions: [
      { answerText: "Chelsea", isCorrect: false },
      { answerText: "Liverpool", isCorrect: false },
      { answerText: "Tottenham", isCorrect: true },
      { answerText: "Man United", isCorrect: false },
    ],
  },
  {
    number: 10,
    questionText: "What is my favorite food?",
    answerOptions: [
      { answerText: "Oysters", isCorrect: false },
      { answerText: "Ramen", isCorrect: false },
      { answerText: "Pizza", isCorrect: false },
      { answerText: "Steak", isCorrect: true },
    ],
  },
  // {
  //   number: 1,
  //   questionText: "What is my name?",
  //   answerOptions: [
  //     { answerText: "Nick", isCorrect: true },
  //     { answerText: "Taylor", isCorrect: false },
  //     { answerText: "Jim", isCorrect: false },
  //     { answerText: "Henry", isCorrect: false },
  //   ],
  // },
  // {
  //   number: 2,
  //   questionText: "What is my dogs name?",
  //   answerOptions: [
  //     { answerText: "Phil", isCorrect: false },
  //     { answerText: "Monty", isCorrect: false },
  //     { answerText: "Rory", isCorrect: false },
  //     { answerText: "Becs", isCorrect: true },
  //   ],
  // },
  // {
  //   number: 3,
  //   questionText: "What is my favorite NBA team?",
  //   answerOptions: [
  //     { answerText: "Raptors", isCorrect: false },
  //     { answerText: "Warriors", isCorrect: false },
  //     { answerText: "Sixers", isCorrect: true },
  //     { answerText: "Nuggets", isCorrect: false },
  //   ],
  // },
  // {
  //   number: 4,
  //   questionText: "What is my cars brand?",
  //   answerOptions: [
  //     { answerText: "Ford", isCorrect: false },
  //     { answerText: "Suburau", isCorrect: true },
  //     { answerText: "Tesla", isCorrect: false },
  //     { answerText: "Toyota", isCorrect: false },
  //   ],
  // },
  // {
  //   number: 5,
  //   questionText: "What is my favorite color?",
  //   answerOptions: [
  //     { answerText: "Blue", isCorrect: false },
  //     { answerText: "Green", isCorrect: false },
  //     { answerText: "Pink", isCorrect: false },
  //     { answerText: "Red", isCorrect: true },
  //   ],
  // },
  // {
  //   number: 6,
  //   questionText: "What is my favorite show?",
  //   answerOptions: [
  //     { answerText: "Breaking Bad", isCorrect: false },
  //     { answerText: "The Wire", isCorrect: false },
  //     { answerText: "Curb your Enthusiasm", isCorrect: false },
  //     { answerText: "GOT", isCorrect: true },
  //   ],
  // },
  // {
  //   number: 7,
  //   questionText: "What is my favorite Anime?",
  //   answerOptions: [
  //     { answerText: "Hunter X Hunter", isCorrect: false },
  //     { answerText: "One Piece", isCorrect: true },
  //     { answerText: "Naruto", isCorrect: false },
  //     { answerText: "AOT", isCorrect: false },
  //   ],
  // },
  // {
  //   number: 8,
  //   questionText: "What is my favorite NFL team?",
  //   answerOptions: [
  //     { answerText: "Eagles", isCorrect: true },
  //     { answerText: "Panthers", isCorrect: false },
  //     { answerText: "Steelers", isCorrect: false },
  //     { answerText: "Rams", isCorrect: false },
  //   ],
  // },
  // {
  //   number: 9,
  //   questionText: "What is my favorite soccer team?",
  //   answerOptions: [
  //     { answerText: "Chelsea", isCorrect: false },
  //     { answerText: "Liverpool", isCorrect: false },
  //     { answerText: "Tottenham", isCorrect: true },
  //     { answerText: "Man United", isCorrect: false },
  //   ],
  // },
  // {
  //   number: 10,
  //   questionText: "What is my favorite food?",
  //   answerOptions: [
  //     { answerText: "Oysters", isCorrect: false },
  //     { answerText: "Ramen", isCorrect: false },
  //     { answerText: "Pizza", isCorrect: false },
  //     { answerText: "Steak", isCorrect: true },
  //   ],
  // },
];

export default questions;
