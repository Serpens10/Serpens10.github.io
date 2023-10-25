const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener ('click', () => {
    document.body.classList.toggle('nav-open');
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
  .then(() => {
    console.log(`Copied text to clipboard: ${text}`);
    alert(`The link to this page has been copied!`);
  })
  .catch((error) => {
    console.error(`Could not copy text: ${error}`);
  });
  }
