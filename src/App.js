import { quotes } from "./modules/quotes.module";
import { colors } from "./modules/colors.module";

// get a random number
let getRandomNumber = limit => {
    return Math.floor(Math.random() * limit);
};

// implementation of displaying a new quote
let nextQuoteHandler = () => {
    let text = document.getElementById('quote-text');
    let author = document.getElementById('quote-author');

    let randomQuotesIndex = getRandomNumber(quotes.length);
    let randomColorsIndex = getRandomNumber(colors.length);

    text.innerText = quotes[randomQuotesIndex].quoteText;
    author.innerText = quotes[randomQuotesIndex].quoteAuthor;
    document.body.style.backgroundColor = colors[randomColorsIndex];
};

// get the button and add a click event for it
let nextQuoteButton = document.getElementById('next-quote');
nextQuoteButton.addEventListener('click', nextQuoteHandler);

nextQuoteHandler();