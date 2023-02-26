export function playMusic() {
  const musicListBtn = document.querySelector('.playlist'),
    playList = document.querySelector('.play-list'),
    playListBody = document.querySelector('.playlist__body'),
    closePlayList = document.querySelector('.close-icon'),
    prevBtn = document.querySelector('.play-prev'),
    playPauseBtn = document.querySelector('.play'),
    nextBtn = document.querySelector('.play-next'),
    musicName = document.querySelector('.song-name'),
    musicArtist = document.querySelector('.song-artist'),
    volumeDownBtn = document.querySelector('.volume-down'),
    volumeUpBtn = document.querySelector('.volume-up'),
    volumeRange = document.querySelector('.volume-range'),
    mainMusic = document.querySelector('.song-audio'),
    progressBar = document.querySelector('.progress-bar'),
    progressArea = document.querySelector('.progress-area')

  let allMusic = [
    {
      name: 'Christmas at Hogwarts',
      artist: `OST Harry Potter and The Sorcerer's Stone`,
      src: `John_Williams_Christmas_at_Hogwarts`
    },
    {
      name: 'Double Trouble',
      artist: 'OST Harry Potter and the Prisoner of Azkaban',
      src: `John_Williams_Double_Trouble`
    },
    {
      name: 'Leaving Hogwarts',
      artist: `OST Harry Potter and The Sorcerer's Stone`,
      src: `John_Williams_Leaving_Hogwarts`
    },
    {
      name: `Lumos!(Hedwig's Theme)`,
      artist: 'OST Harry Potter and the Prisoner of Azkaban',
      src: `John_Williams_Lumos_Hedwigs_Theme`
    },
  ];

  let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

  function loadMusic(indexNumb) {
    musicName.textContent = allMusic[indexNumb - 1].name;
    musicArtist.textContent = allMusic[indexNumb - 1].artist;
    mainMusic.src = `./assets/sounds/${allMusic[indexNumb - 1].src}.mp3`
  }

  function playMusic() {
    playPauseBtn.classList.add('paused');
    mainMusic.play();
  }

  function pauseMusic() {
    playPauseBtn.classList.remove('paused');
    mainMusic.pause();
  }

  function prevMusic() {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
  }

  function nextMusic() {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
  }

  function togglePlaylist() {
    playList.classList.toggle('show');
  }

  function musicProgress(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.querySelector('.current'),
      musicDuartion = document.querySelector('.max-duration');

    mainMusic.addEventListener('loadeddata', () => {
      let mainAdDuration = mainMusic.duration;
      let totalMin = Math.floor(mainAdDuration / 60);
      let totalSec = Math.floor(mainAdDuration % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      }
      musicDuartion.textContent = `${totalMin}:${totalSec}`;
    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);

    if (currentSec < 10) {
      currentSec = `0${currentSec}`;
    }
    musicCurrentTime.textContent = `${currentMin}:${currentSec}`;
  }

  function getMusicProgress(e) {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainMusic.duration;

    mainMusic.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
    playingMusic();
  }

  volumeRange.addEventListener('input', () => {
    mainMusic.volume = volumeRange.value / 100;
  })

  volumeDownBtn.addEventListener('click', () => {
    volumeRange.value = 0;
    mainMusic.volume = volumeRange.value / 100;
  })

  volumeUpBtn.addEventListener('click', () => {
    volumeRange.value = 100;
    mainMusic.volume = volumeRange.value / 100;
  })

  progressArea.addEventListener("click", getMusicProgress);

  mainMusic.addEventListener('timeupdate', musicProgress);

  window.addEventListener('load', () => {
    loadMusic(musicIndex);
    playingMusic();
  });

  playPauseBtn.addEventListener('click', () => {
    const isMusicPlay = playPauseBtn.classList.contains('paused');
    isMusicPlay ? pauseMusic() : playMusic();
    playingMusic();
  });

  prevBtn.addEventListener('click', () => {
    prevMusic();
    playingMusic();
  });

  nextBtn.addEventListener('click', () => {
    nextMusic();
    playingMusic();
  });

  musicListBtn.addEventListener('click', togglePlaylist);

  closePlayList.addEventListener('click', togglePlaylist);

  for (let i = 0; i < allMusic.length; i++) {
    //let's pass the song name, artist from the array
    let liTag = `<li li-index="${i + 1}">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
                <audio class="${allMusic[i].src}" src="./assets/sounds/${allMusic[i].src}.mp3"></audio>
              </li>`;
    playListBody.insertAdjacentHTML("beforeend", liTag);
    let liAudioDuartionTag = playListBody.querySelector(`#${allMusic[i].src}`);
    let liAudioTag = playListBody.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", () => {
      let duration = liAudioTag.duration;
      let totalMin = Math.floor(duration / 60);
      let totalSec = Math.floor(duration % 60);
      if (totalSec < 10) {
        totalSec = `0${totalSec}`;
      };
      liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
      liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
    });
  }

  function playingMusic() {
    const allLiTag = playListBody.querySelectorAll("li");

    for (let j = 0; j < allLiTag.length; j++) {
      let audioTag = allLiTag[j].querySelector(".audio-duration");

      if (allLiTag[j].classList.contains("playing")) {
        allLiTag[j].classList.remove("playing");
        let adDuration = audioTag.getAttribute("t-duration");
        audioTag.innerText = adDuration;
      }

      if (allLiTag[j].getAttribute("li-index") == musicIndex) {
        allLiTag[j].classList.add("playing");
        audioTag.innerText = "Playing";
      }

      allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
  }

  function clicked(element) {
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex;
    loadMusic(musicIndex);
    playMusic();
    playingMusic();
  }
}

playMusic();