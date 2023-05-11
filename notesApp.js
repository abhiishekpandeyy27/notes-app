const addTitle = document.getElementById("addTitle");
const addText = document.getElementById("addText");
const addNoteButton = document.getElementById("addNote");
const notesDiv = document.getElementById("notes");
const bin = document.getElementById("bin");
const archive = document.getElementById("archive");

//local storage vs session storage
showNotes();

function addNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notes = [];
  } else {
    notes = JSON.parse(notes);
  }
  if (addText.value == "") {
    alert("Add your note");
    return;
  }

  const notesObj = {
    title: addTitle.value,
    text: addText.value,
  };
  addTitle.value = "";
  addText.value = "";
  notes.push(notesObj);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function showNotes() {
  let notesHTML = "";
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }
  for (let i = 0; i < notes.length; i++) {
    notesHTML += ` <div class="note">
        <button class="deleteNote" id=${i} onclick='deleteNote(${i})'>Delete</button>
        <div class="title">${
          notes[i].title === "" ? "Note" : notes[i].title
        }</div>
            <div class="text">${notes[i].text}</div>
    </div>`;
  }

  notesDiv.innerHTML = notesHTML;
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    return;
  } else {
    notes = JSON.parse(notes);
  }

  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

addNoteButton.addEventListener("click", addNotes);

//assignment
/* 
1. delete notes and retrieve and archive


2.sorting and filter
*/
