const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;

const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;

const cancelAddmovieButton = addMovieModal.querySelector('.btn--passive');

const confirmAddMovieButton = cancelAddmovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input');

const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const clearMovieInput = () => {
    for (const userInput of userInputs){
        userInput.value = '';
    }
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const tilteValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (tilteValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
       ) {
           alert('Please enter valid values (rating between 1 and 5).');
           return;
       }

       const newMovie = {
        title: tilteValue,
        image: imageUrlValue,
        rating: ratingValue
    };   

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
};



const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddmovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);

