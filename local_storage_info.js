"use strict";

// first we will chech if our browser has localstorage available or is too old
window.addEventListener("load", () => {
  if (typeof Storage !== "undefined") {
    console.log("localstorage available");
  } else {
    console.log("localstorage unavailable");
  }

  // Now we save the data in the localstorage

  localStorage.setItem("title", "Hello localstorage");

  // Recover element

  document.querySelector("#users").innerHTML = localStorage.getItem("title");

  // Save objects. In localStorage you have to convert objects to a string
  var user = {
    name: "Sergi Navarro",
    age: 24,
    mail: "serginavarro.ro@gmail.com"
  };

  localStorage.setItem("user", JSON.stringify(user));

  //Separate elements

  var index;
  for (index in user) {
    console.log(user[index]);
  }

  //Recover the object

  var userjs = JSON.parse(localStorage.getItem("user")); // the use of parse is to convert the string into a JS object

  console.log(userjs);
  document
    .querySelector("#data")
    .append(userjs.name + " " + userjs.age + " " + userjs.mail);

  // Delete the items
  localStorage.removeItem("user");

  //Clear everything from localStorage
  localStorage.clear();
});
