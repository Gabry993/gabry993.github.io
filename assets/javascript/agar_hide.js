// The string is your base64-encoded email
const agar = atob("bWFpbHRvOmdhYnJpZWxlLmFiYmF0ZUBpZHNpYS5jaA==");

// Select all links with the attribute 'data-gen-email'
const agarLinks = document.querySelectorAll('[data-gen-agar]');

agarLinks.forEach(link => {
    link.onmouseover = link.ontouchstart = () => link.setAttribute('href', agar);
});

agarLinks.forEach(link => {
    link.onmouseout = link.ontouchend = () => link.setAttribute('href', "#");
});