let active_timer = "pomodoro";
let timers = { pomodoro: 25, short_break: 5, long_break: 30};
let remainingTime = timers[active_timer] * 60;
let on_off = null


const top_buttons = document.querySelectorAll("#top-buttons button");
const pomodoro_button = document.getElementById("pomodoro-btn");
const short_break_button = document.getElementById("short-break-btn");
const long_break_button = document.getElementById("long-break-btn");

const play_button = document.getElementById("play-btn")
const reset_button = document.getElementById("reset-btn")
const settings_button = document.getElementById("settings-btn")

const settings_container = document.getElementById("settings-container")
const settings_window = document.getElementById("settings-window")
const close_settings_button = document.getElementById("close-settings-btn")
const save_settings_button = document.getElementById("save-settings-btn")



function update_timer(mode) {
    minutes = Math.floor(remainingTime / 60);
    seconds = (remainingTime % 60).toString().padStart(2, "0");
    document.getElementById("timer-display").innerHTML = `${minutes}:${seconds}`;

//  timers[mode.id.replace("-btn", "").replace("-", "_")] * 60
}


function switch_timer(btn) {
    top_buttons.forEach(button => {button.classList.remove("active");});
    if (btn == pomodoro_button) {
        console.log(String(pomodoro_button))
        btn.classList.add("active");
        active_timer = "pomodoro";
        remainingTime = timers[active_timer] * 60;
        pause();
        update_timer(btn);}
        
        else if (btn == short_break_button) {
            btn.classList.add("active");
            active_timer = "short_break";
            remainingTime = timers[active_timer] * 60;
            pause();
            update_timer(btn);}

        else {
            btn.classList.add("active");
            active_timer = "long_break";
            remainingTime = timers[active_timer] * 60;
            pause();
            update_timer(btn);}
}



function play_timer() {
    if (on_off == null) {
        play_button.innerHTML = "Pause";
        on_off = setInterval(() => {
            remainingTime = remainingTime - 1;
            update_timer();
            if (remainingTime <= 0) {
                if (active_timer == "pomodoro") {
                    switch_timer(short_break_button);
                    play_timer()
                }
                else if (active_timer == "short_break") {
                    switch_timer(pomodoro_button)
                    play_timer()
                }
                else {switch_timer(pomodoro_button)
                    play_timer()
                }
            }
            
            }, 1000);
        }
    else {pause()}

}

function pause() {
    clearInterval(on_off);
    on_off = null;
    play_button.innerHTML = "Play"
}


function reset() {
    remainingTime = timers[active_timer] * 60;
    update_timer();
    pause();
}

function open_settings() {
    settings_container.classList.remove("hidden");

}

function hide_settings(e) {
    if (e.target == settings_container) {
        settings_container.classList.add("hidden")};
    if (e.target == close_settings_button || e.target == save_settings_button) {
        settings_container.classList.add("hidden")};
    

}

function save_settings(x) {
    timers.pomodoro = parseInt(document.getElementById("pomodoro-time").value);
    timers.short_break = parseInt(document.getElementById("short-break-time").value);
    timers.long_break = parseInt(document.getElementById("long-break-time").value);
    hide_settings(x);
    remainingTime = timers[active_timer] * 60;
    update_timer();

}






pomodoro_button.addEventListener("click", () => switch_timer(pomodoro_button));
short_break_button.addEventListener("click", () => switch_timer(short_break_button));
long_break_button.addEventListener("click", () => switch_timer(long_break_button));

play_button.addEventListener("click", () => play_timer());
reset_button.addEventListener("click", () => reset());
settings_button.addEventListener("click", () => open_settings());
settings_container.addEventListener("click", (y) => {hide_settings(y)})
close_settings_button.addEventListener("click", (y) => {hide_settings(y)})
save_settings_button.addEventListener("click", (x) => {save_settings(x)})


update_timer()






/*
the arrow before the funtion in the function of the eventlistener, 
otherwise, it runs automatically without begin called

The $strings 

It reads and executes, like it reads, so top->bottom left->right

when a funcion is triggered by a click it only runs once, the only 
way it can run continiusly is with an infinite loop is in it.
*/



