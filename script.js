

// Create New Card Modal with Get Elements and Event Listeners
var createCardModal = document.getElementById('createCardModal');

createCardModal.addEventListener('show.bs.modal', function (event) {
    var createCardButton = document.getElementById('createCardButton');
    createCardButton = event.relatedTarget;
})