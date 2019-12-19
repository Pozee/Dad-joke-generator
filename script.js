console.log("Javascript loaded!");
const apiUrl = "https://icanhazdadjoke.com/";
let myHeader = new Headers();
myHeader.append("Accept", "application/json")
let req = new Request(apiUrl, {
    method: "GET",
    headers: myHeader
});

window.addEventListener("load", () => { // Load starts
    loadJoke();
    let inputField = document.querySelector(".user-value");
    let errorShower = document.querySelector(".error-shower");
    inputField.addEventListener("keyup", event => {
        let userValue = document.querySelector(".user-value").value;
        if (event.code === "Enter" && userValue.length > 0) {
            errorShower.style.opacity = "0";
            console.log("Enter was pressed!");
            searchJoke(userValue);
        } else if (event.code === "Enter" && userValue.length <= 0) {
            errorShower.innerHTML = "Empty field, try again."
            errorShower.style.opacity = "1"
        }

    })
}) // Load ends

function loadJoke() {
    fetch(req)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let jokeWrapper = document.querySelector(".joke-text");
            jokeWrapper.innerHTML = data.joke;
        });
};

function searchJoke(userInput) {
    console.log(userInput);

}
