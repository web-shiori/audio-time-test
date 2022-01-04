function getAudioPlayBackPosition() {
    chrome.tabs.query(
        { active: true, lastFocusedWindow: true },
        function (tabs) {
            chrome.tabs.executeScript(
                <number>tabs[0].id,
                {
                    code: `document.getElementsByTagName('audio')[0].currentTime;`,
                },
                (result) => {
                    const audioPlayBackPosition: number = Number(
                        result[0]
                    );
                    alert(audioPlayBackPosition)
                }
            );
        }
    );
}

getAudioPlayBackPosition()
