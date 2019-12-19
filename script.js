//console.log("Javascript loaded!");
const apiUrl = "https://icanhazdadjoke.com/";
let myHeader = new Headers();
myHeader.append("Accept", "application/json") 
let req = new Request(apiUrl, {
    method: "GET",
    headers: myHeader,
});


window.addEventListener("load", () => { // Load starts
    document.querySelector(".user-value").value = "";
    loadJoke();
    let inputField = document.querySelector(".user-value");
    let errorShower = document.querySelector(".error-shower");
    inputField.addEventListener("keyup", event => {
        let userValue = document.querySelector(".user-value").value;
        if (event.code === "Enter" && userValue.length > 0) {
            errorShower.style.opacity = "0";
            //console.log("Enter was pressed!");
            searchJoke(userValue);
        } else if (event.code === "Enter" && userValue.length <= 0) {
            errorShower.innerHTML = "Empty field, try again."
            errorShower.style.opacity = "1"
        }
    })
}) // Load ends

function loadJoke() {
    //console.log(req)
    fetch(req)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            let jokeWrapper = document.querySelector(".joke-text");
            jokeWrapper.innerHTML = data.joke;
        });
};

function searchJoke(userInput) {
    const searchUrl = `https://icanhazdadjoke.com/search?term=${userInput}`
    let reqSearch = new Request(searchUrl, {
        method: "GET",
        headers: myHeader,
    });
    //console.log(reqSearch);
    fetch(reqSearch)
    .then(response => response.json())
    .then(data => {
        //console.log(data.results[0].joke)
        randomItem = data.results[Math.floor(Math.random()*data.results.length)];
        let jokeArea = document.querySelector(".joke-text");
        jokeArea.innerHTML = randomItem.joke;
        
    });

}
