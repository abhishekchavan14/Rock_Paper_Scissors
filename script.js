


const CPU_choice_display = document.getElementById("CPU_choice");
const user_choice_display = document.getElementById("user_choice");
const result_display = document.getElementById("result_display");
let user_choice;
let CPU_choice;
let result;
//What should happen after clicking on a choice...
const possible_choices = document.querySelectorAll('button');
possible_choices.forEach((chosen_btn) => {
    chosen_btn.addEventListener('click', (e) => {
        document.getElementById("click_audio").play();
        user_choice = e.target.id;
        user_choice_display.innerHTML = user_choice;

        //Generate random choice of CPU
        generate_random_choice();
        CPU_choice_display.innerHTML = CPU_choice;

        //Display Result
        result_calculator(user_choice, CPU_choice);
        result_display.innerHTML = result;
    })
})

function generate_random_choice() {
    let rand_choice = Math.floor(Math.random() * 4);
    switch (rand_choice) {

        case 1:
            CPU_choice = "Rock";
            break;
        case 2:
            CPU_choice = "Paper";
            break;
        case 3:
            CPU_choice = "Scissor";
            break;
    }
}
function result_calculator(user, CPU) {
    if (user === "Rock" && CPU === "Rock") {
        result = "Draw!";
    }
    else if (user === "Rock" && CPU === "Paper") {
        result = "You Loose!";
        document.getElementById("loose_audio").volume = 0.3;
        document.getElementById("loose_audio").play();

    }
    else if (user === "Rock" && CPU === "Scissor") {
        result = "You Won!";
        document.getElementById("win_audio").play();
    }
    else if (user === "Paper" && CPU === "Rock") {
        result = "You Won!";
        document.getElementById("win_audio").play();
    }
    else if (user === "Paper" && CPU === "Paper") {
        result = "Draw!";
    }
    else if (user === "Paper" && CPU === "Scissor") {
        result = "You Loose!";
        document.getElementById("loose_audio").volume = 0.3;
        document.getElementById("loose_audio").play();
    }
    else if (user === "Scissor" && CPU === "Rock") {
        result = "You Loose!";
        document.getElementById("loose_audio").volume = 0.3;
        document.getElementById("loose_audio").play();
    }
    else if (user === "Scissor" && CPU === "Paper") {
        result = "You Won!";
        document.getElementById("win_audio").play();
    }
    else if (user === "Scissor" && CPU === "Scissor") {
        result = "Draw!";
    }
}