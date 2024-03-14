// Two friends, A and B, are playing the game of matchsticks.
// In this game, a group of N matchsticks is placed on the table.
// The players can pick any number of matchsticks from 1 to 4 (both inclusive) during their chance.
// The player who takes the last match stick wins the game.
// If A starts first, how many matchsticks should he pick on his 1st turn such that
// he is guaranteed to win the game or determine
// if it's impossible for him to win. Return -1 if it's impossible for A to win the game,
// else return the number of matchsticks should he pick on his 1st turn such
// that he is guaranteed to win.

// for ques and sol - https://www.youtube.com/watch?v=6SiK4-guMUg&t=3s
function matchStickGame(n) {
  if (n <= 4) {
    return n;
  } else {
    return n % 5 != 0 ? n % 5 : -1;
  }
}

console.log(matchStickGame(48));
console.log(matchStickGame(15));
