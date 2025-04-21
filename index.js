const quote = document.querySelector(".quote-text p");
const quoteH = document.querySelector(".quote-text #h");
const quoteAuthor = document.querySelector(".quote-author p span"); 
const quoteBtn = document.querySelector("#quote-btn");

async function getQuote() {
    const res = await fetch('./json/web.json');

    if(!res.ok) {
        throw new Error('Network response was not ok' + res.statusText);
    }

    const data = await res.json();
    const length = data.length;
    const ramdomIndex = Math.floor(Math.random() * length);

    // quote.innerHTML = data[ramdomIndex].q;
    // quoteAuthor.innerHTML = data[ramdomIndex].a;
    quoteH.innerHTML = data[ramdomIndex].h;
}
quoteBtn.addEventListener('click',() => {
    getQuote();
});

















