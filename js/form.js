//HTML Elemente
const form = document.querySelector('[data-js="card-form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

//submit wird abgesendet
form.addEventListener('submit', (event) => {
  event.preventDefault(); //stoppt das Neuladen der Seite für Javascript

  //Value holt den Text aus den Eingabefeldern
  const questionText = document.querySelector('[name="question"]').value;
  const answerText = document.querySelector('[name="answer"]').value;
  const tagText = document.querySelector('[name="tag"]').value;

  //ruft die function auf und gibt die Texte weiter
  createCard(questionText, answerText, tagText);

  //Formularfed wird geleert
  event.target.reset();
  form.elements.question.focus();

  //counter wird auf 150 zurück gesetzt
  questionCounter.textContent = "150 characters left"
  answerCounter.textContent = "150 characters left"
});
//funtion für DOM
function createCard(questionText, answerText, tagText) {
  //<article class="QuestionCard">
  //create 
  //1.Erstellt das Element im Speicher
  const cardArticle = document.createElement('article');
  //append
  //2.das Element geht auf die Webseite zum cardContainer
  cardContainer.append(cardArticle);
  //define
  //3.gibt dem Element Klassen, Attribute oder Texte
  cardArticle.classList.add('QuestionCard');
  //1.2.3. wiederholt sich für jedes Unterelement


  //<button class="bookmark">
  //create
  const bookmarkButton = document.createElement('button');
  //append
  cardArticle.append(bookmarkButton); //wird in die Karte gehängt
  //define
  bookmarkButton.classList.add('bookmark');

  //<img src="..." alt="..." />
  //create
  const bookmarkImg = document.createElement('img');
  //append
  bookmarkButton.append(bookmarkImg); //wird in den Bookmark Button gehängt
  //define
  bookmarkImg.src = './assets/bookmarkneu.png';
  bookmarkImg.alt = 'Bookmark';

  //<h2>FrageText</h2>
  //create
  const heading = document.createElement('h2');
  //append
  cardArticle.append(heading);
  //define
  heading.textContent = questionText; //füllt die Überschrift mit dem Formulartext

  //<p class="answer" hidden>AntwortText</p>
  //create
  const answer = document.createElement('p');
  //append
  cardArticle.append(answer);
  //define
  answer.textContent = answerText; //füllt den Absatz mit dem Formulartext
  answer.classList.add('answer');
  answer.hidden = true; //versteckt die Antwort

  //<button class="toggle">Show Answer</button>
  //create
  const toggleButton = document.createElement('button');
  //append
  cardArticle.append(toggleButton);
  //define
  toggleButton.classList.add('toggle');
  toggleButton.textContent = 'Show Answer';

  //<ul class="tags">
  //create
  //erschafft Schlagwörter
  const tagList = document.createElement('ul');
  //append
  cardArticle.append(tagList);
  //define
  tagList.classList.add('tags');

  //<li class="tag">TagText</li> 
  //create
  const tagItem = document.createElement('li');
  //append
  tagList.append(tagItem); //wird in die UL liste gehängt
  //define
  tagItem.classList.add('tag');
  tagItem.textContent = tagText; //füllt den Listenpunkt mit dem Tag aus dem Formular
}

//Zähler
//Input event aus HTML
const questionInput = document.querySelector('[data-js="question-input"]')
const questionCounter = document.querySelector('[data-js="question-counter"]');

const answerInput = document.querySelector('[data-js="answer-input"]')
const answerCounter = document.querySelector('[data-js="answer-counter"]');

//Zeichenzähler code für beide Textfelder
function updateCounter(inputElement, counterElement) {
  const maxLength = 150;
  const currentLength = inputElement.value.length; //zählt den Text
  const charactersLeft = maxLength - currentLength; //zeigt restliche Buchstaben an

  //Tauscht den <p> Text im HTML
  counterElement.textContent = charactersLeft + " characters left"
}
//bei Frage wir die function aufgerufen
questionInput.addEventListener('input', () => {
  //übergibt das Fragefeld und den Zähler
  updateCounter(questionInput, questionCounter);
});
//bei Antwort wir die function aufgerufen
answerInput.addEventListener('input', () => {
  //übergibt das Antwortfeld und den Zähler
  updateCounter(answerInput, answerCounter);
});

