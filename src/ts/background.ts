chrome.runtime.onMessage.addListener(() => {
    setAudioPlayBackPosition(500);
});

// 動画再生位置を復元する
function setAudioPlayBackPosition(audioPlayBackPosition: number) {
    console.log('再生位置', audioPlayBackPosition);
    chrome.tabs.query(
        { active: true, lastFocusedWindow: true },
        function (tabs) {
            chrome.tabs.executeScript(
                <number>tabs[0].id,
                {
                    code:
                        `const audioPlayBackPosition = ` +
                        audioPlayBackPosition,
                },
                () => {
                    chrome.tabs.executeScript(<number>tabs[0].id, {
                        code: `
                            const a = document.getElementsByTagName('audio')[0];
                            a.currentTime = audioPlayBackPosition;
                            `,
                    });
                }
            );
        }
    );
}
