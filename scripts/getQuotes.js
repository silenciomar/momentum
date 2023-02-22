const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btnQuotes = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = './scripts/quotesEng.json';
  const res = await fetch(quotes);
  const data = await res.json();

  let randomNum = Math.floor(Math.random() * (data.length))
  quote.textContent = data[randomNum].text;
  author.textContent = data[randomNum].author;
}
getQuotes();

btnQuotes.addEventListener('click', getQuotes);
document.addEventListener('onload', getQuotes);