// Create variables and constants
var createCardModal = document.getElementById('createCardModal');
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

// Create New Card Modal with Get Elements and Event Listeners
createCardModal.addEventListener('show.bs.modal', function (event) {
    var createCardButton = document.getElementById('createCardButton');
    createCardButton = event.relatedTarget;
})

// Retrieve flashcard DOM elements

// Create class for new flashcards
class flashCard {
    constructor(cardTitle,cardText,answer) {
        this.cardTitle = cardTitle;
        this.cardText = cardText;
        this.answer = answer;
    }
}
