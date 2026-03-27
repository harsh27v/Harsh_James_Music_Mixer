console.log("JavaScript File is linked");

const targetZones = document.querySelectorAll(".target-zone");
const dragItems = document.querySelectorAll(".drag-item");
//const audioPlayer = document.querySelector('audio');
const playButton = document.querySelector('#play-all');
const pauseButton = document.querySelector('#pause-all');
const volSlider = document.querySelector('#volumeControl');
const stopButton = document.querySelector('#stop-all');
//const resetButton = document.querySelector('#reset-all');

let currentDraggedElement = null;

function dragStart() {
  currentDraggedElement = this;
}

console.log(currentDraggedElement);

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  this.appendChild(currentDraggedElement);

  console.log(currentDraggedElement.dataset.instrument);

  const instrument = document.createElement("audio");
  instrument.src = `audio/${currentDraggedElement.dataset.instrument}.mp3`;
  instrument.load();
  this.appendChild(instrument);
  instrument.loop;
  instrument.play();
  currentDraggedElement = null;
}

// load the new audio source
/* 

function playAudio() {
   console.log("Load Audio Called")
   audioPlayer.src = `audio/${this.dataset.trackref}.mp3`;
   audioPlayer.load();   
   //call another function
   playAudio();
} {
 console.log ("Audio Loaded Called");
  const playAudio = document.querySelector('audio');
  playAudio.src="audio/Guitar.mp3";
  playAudio.src = `audio/${this.dataset.trackref}.mp3`;
  playAudio.load();
  loadAudio();
}*/

function playAudio() {
    const audioElements = document.querySelectorAll('audio');
    console.log(audioElements);
    audioElements.forEach(audioElement => {
      audioElement.play();
    })
}

function pauseAudio() {
    const audioElements = document.querySelectorAll('audio');
    console.log(audioElements);
    audioElements.forEach(audioElement => {
      audioElement.pause();
    })
}

function restartAudio() {
  const audioElements = document.querySelectorAll('audio');
  console.log(audioElements);
    audioElements.forEach(audioElement => {
      audioElement.currentTime = 0;
   restartAudio();
})
}

function setVolume() {
  const audioElements = document.querySelectorAll('audio');
  console.log(this.value);
    audioElements.volume = (this.value/100);
}

/*function resetMixer() {
 dragItems.forEach(dragItem => {
      dragItem.appendChild(dragItem);
    });
};*/

dragItems.forEach(dragItem => {
  dragItem.addEventListener('dragstart', dragStart);
});

targetZones.forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('drop', drop);
});

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
volSlider.addEventListener("slide", setVolume);
stopButton.addEventListener("click", restartAudio);

//resetButton.addEventListener('click', resetMixer);
