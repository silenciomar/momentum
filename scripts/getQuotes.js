export function getQuotes() {
  const quote = document.querySelector('.quote');
  const author = document.querySelector('.author');
  const btnQuotes = document.querySelector('.change-quote');

  function getQuotes() {
    let quotes;
    if (localStorage.getItem('lang') === 'Ru') {
      quotes = `./scripts/quotesRu.json`;
    } else {
      quotes = `./scripts/quotesEng.json`;
    }

    fetch(quotes)
      .then(res => res.json())
      .then(data => {
        let randomNum = Math.floor(Math.random() * (data.length))
        quote.textContent = data[randomNum].text;
        author.textContent = data[randomNum].author;
      });


  }

  btnQuotes.addEventListener('click', getQuotes);
  window.addEventListener('load', () => {
    getQuotes()
  });
}

getQuotes();