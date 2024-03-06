const setZeroPointFiveSpeedBtn = document.getElementById("setZeroPointFiveSpeed"); // 0.5x
const setOriginalSpeedBtn = document.getElementById("setOriginalSpeed"); // 1x
const setOnePointFiveSpeedBtn = document.getElementById("setOnePointFiveSpeed"); // 1.5x
const setTwoSpeedBtn = document.getElementById("setTwoSpeed"); // 2x

const minusThirtySecBtn = document.getElementById("minusThirtySec"); // -30s
const minusFifteenSecBtn = document.getElementById("minusFifteenSec"); // -15s
const addFifteenSecBtn = document.getElementById("addFifteenSec"); // +15s
const addThirtySecBtn = document.getElementById("addThirtySec"); // +30s

const playBtn = document.getElementById("play"); // +30s
const pauseBtn = document.getElementById("pause"); // +30s
const replayBtn = document.getElementById("replay"); // +30s
const resetBtn = document.getElementById("reset"); // +30s

// playback rate
setZeroPointFiveSpeedBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 0.5;
      }
    },
  });
});

setOriginalSpeedBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 1;
      }
    },
  });
});

setOnePointFiveSpeedBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 1.5;
      }
    },
  });
});

setTwoSpeedBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 2;
      }
    },
  });
});

// current time
minusThirtySecBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime -= 30;
      }
    },
  });
});

minusFifteenSecBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime -= 15;
      }
    },
  });
});

addFifteenSecBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime += 15;
      }
    },
  });
});

addThirtySecBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime += 30;
      }
    },
  });
});

// others
playBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.play();
      }
    },
  });
});

pauseBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.pause();
      }
    },
  });
});

replayBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    },
  });
});

resetBtn.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 1;
      }
    },
  });
});
