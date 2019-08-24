"use strict";

var form = document.querySelector("#formMovies");

form.addEventListener("submit", () => {
  var title = document.querySelector("#addMovie").value;
  if (title.length >= 1) {
    localStorage.setItem(title, title);
  }
});

var ul = document.querySelector("#movies-list");
for (var i in localStorage) {
  if (typeof localStorage[i] == "string") {
    var li = document.createElement("li");
    li.append(localStorage[i]);
    ul.append(li);
  }
}

var formb = document.querySelector("#formDeleteMovies");

formb.addEventListener("submit", () => {
  var title = document.querySelector("#deleteMovie").value;
  if (title.length >= 1) {
    localStorage.removeItem(title, title);
  }
});
