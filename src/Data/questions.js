let questions = [
  {
    number: 1,
    questionText: "Its the 4th quarter with 4:30 left in the game, your team is down 70-71 at home, you have 2 timeouts left and your challenge. Your best player just committed a questionable 6 foul by rotating to the opposite block to play help defense on a driver who just blew by his defender in the corner. Even though it was the right decision for him to play help defense another one of your players who is one of the best help defenders/shot blockers in the league (who only has two fouls) was closer at the elbow already on the move. The foul happened when all three players collided to stop the shot, but the foul could have been called on either player. What is your thought process and next move?",
    answerOptions: [
      { answerText: "Don’t challenge the play because after seeing a quick replay there doesn’t seem to be enough conclusive evidence to overturn.", isCorrect: true },
      { answerText: "Challenge the play by arguing that there was no foul committed and try to keep your best player in the game even though you know there is small chance it will be overturned.", isCorrect: false },
      { answerText: "Call a timeout to get a better look at the play and make your move from there. ", isCorrect: false },
      { answerText: "Challenge the play by arguing the foul was committed on the other player involved in the collision since he only has two fouls.", isCorrect: false },
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
];

// function shuffle(array) {
//   var currentIndex = array.length,
//     randomIndex;

//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

// shuffle(questions);

export default questions;
