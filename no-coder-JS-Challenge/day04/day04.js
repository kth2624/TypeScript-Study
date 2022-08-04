// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

let title = document.querySelector("h2");
const superEventHandler = {
  mouseLeave: function (event) {
    title.innerHTML = "The Mouse is gone";
    title.style.color = colors[0];
  },
  mouseEnter: function (event) {
    title.innerText = "The Mouse is here";
    title.style.color = colors[1];
  },
  context: function (event) {
    title.innerHTML = "That was a right click";
    title.style.color = colors[2];
  },
  windowResized: function (event) {
    title.innerText = "you just resized!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
title.addEventListener("contextmenu", superEventHandler.context);
window.addEventListener("resize", superEventHandler.windowResized);
