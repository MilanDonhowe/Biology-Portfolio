/***********************************************
 ** Filename: index.js
 ** Author: Milan Donhowe
 ** Date : 5/6/2020
 ** Description: Entry point dependency file for
                 loading website dependencies like Bulma.
***********************************************/

// Import Customized Bulma
import "./custom_bulma.scss";
import { MediaObjects } from "./media-objects.js";
// import 'style.scss'; // proof of concept for later modification of bulma style sheets

// writes media objects to html doc
function addMediaObjects(objs) {
  let elem = document.getElementById("results");
  let newDocumentContent = "";

  let col_height = Math.floor(objs.length / 3)+1;

  for (let j = 0; j < objs.length; ) {
    newDocumentContent += `<div class="tile is-parent is-4 is-vertical level">`;
    let i;
    for (i = 0; i < col_height; i++) {
      if (j + i >= objs.length) break;
      newDocumentContent += objs[j + i].tile();
    }
    j += i;
    newDocumentContent += `</div>`;
  }

  //
  elem.innerHTML = newDocumentContent;
}

// returns valid objects
function searchObjects(tag) {
  let objects = [];
  if (tag == "") return MediaObjects;
  for (let oNum = 0; oNum < MediaObjects.length; oNum++) {
    // if the object contain the tag add it to the objects
    if (
      MediaObjects[oNum].tags
        .map((str) => str.toUpperCase().trim())
        .includes(tag.toUpperCase())
    ) {
      objects.push(MediaObjects[oNum]);
    }
  }
  return objects;
}

window.onload = function () {
  //let btn = document.getElementById("searchTagButton");
  let btn = document.getElementById("searchTagContent");
  btn.addEventListener("change", function () {
    let search_term = document.getElementById("searchTagContent").value;
    let validMediaObjects = searchObjects(search_term.trim());
    if (validMediaObjects.length == 0) {
      document.getElementById("results").innerHTML = `

            <div class="tile is-parent is-vertical">
                <h3 class="container">Sorry, no results found.</h3>
            </div>
        `;
    } else {
      addMediaObjects(validMediaObjects);
    }
  });
  // initial object add.
  addMediaObjects(MediaObjects);
  console.log("fired");
};
