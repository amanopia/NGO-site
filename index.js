var stories = document.querySelector('.card-stories');

window.onResize = function() {
  if (window.innerWidth <= (1279)) {
    stories.classList.remove('d-flex');
    stories.classList.remove('justify-content-center');
  }
  else {
    stories.classList.add('d-flex');
    stories.classList.add('justify-content-center');
  }

};
