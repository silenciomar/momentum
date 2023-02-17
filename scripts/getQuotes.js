const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const btnQuotes = document.querySelector('.change-quote');

async function getQuotes() {
  const quotes = 'https://type.fit/api/quotes';
  const res = await fetch(quotes);
  const data = await res.json();

  let randomNum = Math.floor(Math.random() * (data.length - 0 + 1)) + 0
  quote.textContent = data[randomNum].text;
  author.textContent = data[randomNum].author;
}
getQuotes();

btnQuotes.addEventListener('click', getQuotes);
document.addEventListener('onload', getQuotes);