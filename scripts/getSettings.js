export function getSettings() {
  const settingsOpenBtn = document.querySelector('.settings-btn'),
    settingsWindow = document.querySelector('.settings-content'),
    settingsCloseBtn = document.querySelector('.close-settings'),
    weatherPanel = document.querySelector('.weather'),
    weatherBtn = document.querySelector('#weather'),
    todoPanel = document.querySelector('.todo-list'),
    todoBtn = document.querySelector('#todo'),
    playerPanel = document.querySelector('.player'),
    playerBtn = document.querySelector('#player'),
    greetingPanel = document.querySelector('.greeting-container'),
    greetingBtn = document.querySelector('#greet'),
    quotesPanel = document.querySelector('.quotes-content'),
    quotesBtn = document.querySelector('#quotes'),
    timePanel = document.querySelector('.time'),
    timeBtn = document.querySelector('#time'),
    datePanel = document.querySelector('.date'),
    dateBtn = document.querySelector('#date'),
    languageBtn = document.querySelector('#language');

  function showSettings() {
    settingsWindow.classList.toggle('show-settings')
  }

  settingsOpenBtn.addEventListener('click', showSettings)
  settingsCloseBtn.addEventListener('click', showSettings)

  languageBtn.addEventListener('click', () => {
    if (languageBtn.querySelector('span').textContent === 'En') {
      languageBtn.querySelector('span').textContent = 'Ru';
    } else {
      languageBtn.querySelector('span').textContent = 'En';
    }

    localStorage.setItem('lang', languageBtn.querySelector('span').textContent)
    setTimeout(function () {
      location.reload();
    }, 500);
  })

  window.addEventListener('click', () => {
    if (localStorage.getItem('lang') === 'Ru') {
      languageBtn.querySelector('span').textContent = 'Ru';
    } else {
      languageBtn.querySelector('span').textContent = 'En';
    }

  })

  weatherBtn.addEventListener('click', () => {
    weatherPanel.style.opacity = (weatherPanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', weatherPanel.style.opacity);
    if (weatherPanel.style.opacity === '0') {
      weatherBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', weatherBtn.querySelector('span').textContent)
    } else {
      weatherBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', weatherBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    weatherPanel.style.opacity = '0';
    weatherBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }


  todoBtn.addEventListener('click', () => {
    todoPanel.style.opacity = (todoPanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', todoPanel.style.opacity);
    if (todoPanel.style.opacity === '0') {
      todoBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', todoBtn.querySelector('span').textContent)
    } else {
      todoBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', todoBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    todoPanel.style.opacity = '0';
    todoBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }


  playerBtn.addEventListener('click', () => {
    playerPanel.style.opacity = (playerPanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', playerPanel.style.opacity);
    if (playerPanel.style.opacity === '0') {
      playerBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', playerBtn.querySelector('span').textContent)
    } else {
      playerBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', playerBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    playerPanel.style.opacity = '0';
    playerBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }

  greetingBtn.addEventListener('click', () => {
    greetingPanel.style.opacity = (greetingPanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', greetingPanel.style.opacity);
    if (greetingPanel.style.opacity === '0') {
      greetingBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', greetingBtn.querySelector('span').textContent)
    } else {
      greetingBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', greetingBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    greetingPanel.style.opacity = '0';
    greetingBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }

  quotesBtn.addEventListener('click', () => {
    quotesPanel.style.opacity = (quotesPanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', quotesPanel.style.opacity);
    if (quotesPanel.style.opacity === '0') {
      quotesBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', quotesBtn.querySelector('span').textContent)
    } else {
      quotesBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', quotesBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    quotesPanel.style.opacity = '0';
    quotesBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }

  timeBtn.addEventListener('click', () => {
    timePanel.style.opacity = (timePanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', timePanel.style.opacity);
    if (timePanel.style.opacity === '0') {
      timeBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', timeBtn.querySelector('span').textContent)
    } else {
      timeBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', timeBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    timePanel.style.opacity = '0';
    timeBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }

  dateBtn.addEventListener('click', () => {
    datePanel.style.opacity = (datePanel.style.opacity === '0') ? '' : '0';
    localStorage.setItem('hide', datePanel.style.opacity);
    if (datePanel.style.opacity === '0') {
      dateBtn.querySelector('span').textContent = 'Show'
      localStorage.setItem('hideText', dateBtn.querySelector('span').textContent)
    } else {
      dateBtn.querySelector('span').textContent = 'Hide'
      localStorage.setItem('hideText', dateBtn.querySelector('span').textContent)
    }
  })
  if (localStorage.getItem('hide') === '0') {
    datePanel.style.opacity = '0';
    dateBtn.querySelector('span').textContent = localStorage.getItem('hideText')
  }
}

// getSettings();