 
 // When the page loads, fade it in
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// When user clicks a link with fadeAndNavigate
function fadeAndNavigate(event, url) {
  event.preventDefault(); // Stop link from navigating immediately
  document.body.classList.remove('loaded'); // Reset fade-in
  document.body.classList.add('fade-out');  // Start fade-out

  // Wait for fade to finish (500ms), then navigate
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

