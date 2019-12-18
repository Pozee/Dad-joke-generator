console.log("Javascript loaded!");
const apiUrl = "https://icanhazdadjoke.com/";
let searchjoke = "search?term=hipster";
let myHeader = new Headers();
myHeader.append("Accept", "application/json")
let req = new Request(apiUrl, {
    method: "GET",
    headers: myHeader
});

window.addEventListener("load", () => {
    loadJoke();
})

function loadJoke() {
    fetch(req)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let jokeWrapper = document.querySelector(".joke-text");
            jokeWrapper.innerHTML = data.joke;
        });
};

