const init = () => {
  const form = document.querySelector('form');

  const displayMovieInfo = movieData => {
    const movieTitle = movieData.title;
    const movieSummary = movieData.summary;
    const titleHTML = document.querySelector('#movieDetails h4');
    const summaryHTML = document.querySelector('#movieDetails p');
    titleHTML.textContent = `${movieTitle}`;
    summaryHTML.textContent = `${movieSummary}`;
  };

  const fetchMovieInfo = () => {
    const movieIdInput = form.querySelector('#searchByID').value;
    fetch(`http://localhost:3000/movies/${movieIdInput}`)
      .then(res => res.json())
      .then(data => displayMovieInfo(data));
  };
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetchMovieInfo();
  })
}

document.addEventListener('DOMContentLoaded', init);

//fetch and display movie info

//  store input value into a const
//  fetch move info by id
//  display movie info on screen