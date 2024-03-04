const setOnePointFiveSpeedButton = document.getElementById("setOnePointFiveSpeed");
const setTwoSpeedButton = document.getElementById("setTwoSpeed");
const resetButton = document.getElementById("reset");

setOnePointFiveSpeedButton.addEventListener('click', async () => {
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

setTwoSpeedButton.addEventListener('click', async () => {
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

resetButton.addEventListener('click', async () => {
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
