// main elements
let root_of_game_buttons = document.querySelectorAll("#box");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

// result elements
let user_score = document.querySelector(".user_score");
let computer_score = document.querySelector(".computer_score");
let main_result = document.querySelector(".main_result p");
let main_result_back = document.querySelector(".main_result");

// math
function generateRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

// sim num result
let result_number_user = 0;
let result_number_computer = 0;

root_of_game_buttons.forEach((item) => {
  item.addEventListener("click", () => {
    const intervalResult = generateRandomNumber();

    // rock statement
    if (item.className === "rock") {
      if (intervalResult === 1) {
        main_result.innerText = "Game is Draw ( computer choosed rock )";
        main_result_back.style.backgroundColor = "coral";
      } else if (intervalResult === 2) {
        main_result.innerText = "Computer Wins ( computer choosed paper )";
        main_result_back.style.backgroundColor = "crimson";
        computer_score.innerText = `${++result_number_computer}`;
      } else if (intervalResult === 3) {
        main_result.innerText = "User Wins ( computer choosed scissor )";
        user_score.innerText = `${++result_number_user}`;
        main_result_back.style.backgroundColor = "green";
      };
    };

    // paper statement
    if (item.className === "paper") {
      if (intervalResult === 1) {
        main_result.innerText = "User Wins ( computer choosed rock )";
        user_score.innerText = `${++result_number_user}`;
        main_result_back.style.backgroundColor = "green";
      } else if (intervalResult === 2) {
        main_result.innerText = "Game is Draw ( computer choosed paper )";
        main_result_back.style.backgroundColor = "coral";
      } else if (intervalResult === 3) {
        main_result.innerText = "Computer Wins ( computer choosed scissor )";
        main_result_back.style.backgroundColor = "crimson";
        computer_score.innerText = `${++result_number_computer}`;
      };
    };

    // scissor statement
    if (item.className === "scissor") {
      if (intervalResult === 1) {
        main_result.innerText = "Computer Wins ( computer choosed rock )";
        main_result_back.style.backgroundColor = "crimson";
        computer_score.innerText = `${++result_number_computer}`;
      } else if (intervalResult === 2) {
        main_result.innerText = "User Wins ( computer choosed paper )";
        user_score.innerText = `${++result_number_user}`;
        main_result_back.style.backgroundColor = "green";
      } else if (intervalResult === 3) {
        main_result.innerText = "Game is Draw ( computer choosed scissor )";
        main_result_back.style.backgroundColor = "coral";
      };
    };
  });
});
