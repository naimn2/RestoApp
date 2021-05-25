import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import "./resto-list.js";
import restoData from "../DATA.json";

console.log("Resto:", restoData);

const navToggleElement = document.querySelector("#nav-toggle");
const navElement = document.querySelector("#nav");
const mainElement = document.querySelector("main");
const jumbotronElement = document.querySelector(".jumbotron");

const openDrawer = event => {
    navElement.classList.toggle("open");
    event.stopPropagation();
}

const closeDrawer = event => {
    navElement.classList.remove("open");
    event.stopPropagation();
}

navToggleElement.addEventListener("click", event => {
    openDrawer(event);
});

mainElement.addEventListener("click", event => {
    closeDrawer(event);
});

jumbotronElement.addEventListener("click", event => {
    closeDrawer(event);
});

const showRestoData = () => {
    console.log("show resto data.");
    const restoList = document.querySelector("resto-list");
    restoList.restoList = restoData.restaurants; 
}

showRestoData();