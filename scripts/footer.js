const foot = document.getElementsByTagName("footer");



function footer() {
    return /*html*/ `
<footer>
    <p>
    Made with ♥ by
    <a href="https://github.com/michaelkolesidis" target="_blank"
        >Michael Kolesidis</a>
    </p>
</footer>
  `;
  }

  foot.innerHTML = footer()