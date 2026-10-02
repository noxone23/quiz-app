

//Bookmark
//HTML ELement
//sucht alle bookmark CSS klassen auf der gesamten Seite und speichert sie in eine Nodelist
const bookmarkButtons = document.querySelectorAll(".bookmark");

//überprüft ob Bookmark-Buttons auf der Seite vorhanden sind
//verhindert Fehlermeldungen auf Seiten ohne Karten
if (bookmarkButtons.length > 0) {

  bookmarkButtons.forEach((button) => {  //Javascript hängt an jeden einzelnen Bookmark-Button ein eigenen Click

    button.addEventListener("click", () => {  //click event wird gestartet
      const bookmarkImage = button.querySelector("img"); //sucht das IMG tag das sich im geclickten Button befindet

      if (bookmarkImage && bookmarkImage.src.includes("neu")) {  //prüft ob Bild existiert mit Wort neu und datei src
        bookmarkImage.src = "./assets/bookmarkblack.png";  //wenn neu vorhanden wird das Bild gegen das Schwarze Bookmark getauscht
      } else if (bookmarkImage) {  //wenn es das Schwarze ist wird es gegen das Leere mit neu getauscht
        bookmarkImage.src = "./assets/bookmarkneu.png";
      }
    });
  });
}
//Bookmark

//Show/Hide Answer
//HTML Elemente toggle/answer
const toggleButton = document.querySelector(".toggle");
const answer = document.querySelector(".answer");


toggleButton.addEventListener("click", () => {  //wird mit click auf Button ausgelöst
  answer.classList.toggle("hidden");  //antwort wird gezeigt oder entfernt (hidden)

  if (answer.classList.contains("hidden")) {  //hier wird geprüft ob die Antwort da ist oder nicht
    toggleButton.textContent = "Show Answer"; //wenn nicht steht auf Button show answer
  } else {
    toggleButton.textContent = "Hide Answer";  //wenn ja steht auf Button hide answer
  }
});
//Show/Hide Answer