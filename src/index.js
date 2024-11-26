import "./style.css";
console.log("test 1");

import {showQuotes} from "./home.js";
import {showOpeningHours} from "./openingHours.js";
console.log("test 2");

//const targetContent = document.querySelector("#content");

const targetcontent = document.querySelector("#content");
console.log("test 3")

const clearDom = () => {
    targetcontent.innerHTML = "testing";
}

const quoteButton = document.querySelector("#quotesBtn");
quoteButton.addEventListener("click", () =>{
    clearDom();
    showQuotes();
    }
);

const openButton = document.querySelector("#openingHoursBtn");
openButton.addEventListener("click", () =>{
    clearDom();
    showOpeningHours();
    }
);

console.log("test 4");