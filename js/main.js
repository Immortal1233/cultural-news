const headerToggle = document.querySelector('.main-header__toggle'); // find the switch button 
const headerWrapper = document.querySelector('.main-header .main-header__wrapper'); // find container with navigation

if (headerToggle) { // if toggle button exists
  headerToggle.addEventListener('click', evt => { // handle the event on clicking the button
    evt.preventDefault(); // undo the default action of the button

    if (headerWrapper) { // if there is a container with navigation
      headerWrapper.classList.toggle('main-header__wrapper--active'); // switch the class of this container
    }
  });
}

window.addEventListener('resize', () => { // handle the window resize event
  if (window.innerWidth <= 768 && headerWrapper) { // if the window size is less than or equal to 768 and there is a container with navigation
    headerWrapper.classList.remove('main-header__wrapper--active'); // remove the specified class from the container with navigation
  }
});