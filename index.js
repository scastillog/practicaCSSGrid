const $user = document.querySelector('.user-name');
const $userWindow = document.querySelector('.user-window');

const showOptions = () => $userWindow.classList.add('active');
const removeOptions = () => $userWindow.classList.remove('active');

$user.addEventListener('click', (event) => {
  $userWindow.classList.contains('active') ? removeOptions() : showOptions();
});

document.addEventListener('click', function(event) {
  if (event.target !== $user) {
    removeOptions();
  }
});
