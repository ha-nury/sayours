// HTML에서 오디오 플레이어 요소를 가져옵니다.
const audioPlayer = document.getElementById('audioPlayer');

// 'soundButton' 클래스를 가진 모든 버튼을 가져옵니다. (NodeList 형태로 반환)
const soundButtons = document.querySelectorAll('.soundButton');

// 각 버튼에 대해 이벤트 리스너를 추가합니다.
soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 클릭된 버튼의 'data-sound-src' 속성 값을 가져옵니다.
        const soundSrc = button.dataset.soundSrc; // 또는 button.getAttribute('data-sound-src');

        // 오디오 플레이어의 소스를 변경합니다.
        audioPlayer.src = soundSrc;

        // 소리를 재생합니다.
        audioPlayer.play()
            .then(() => {
                console.log(`소리 재생 성공: ${soundSrc}`);
            })
            .catch(error => {
                console.error(`소리 재생 중 오류 발생 (${soundSrc}):`, error);
                alert(`소리 재생에 실패했습니다. 브라우저 설정이나 파일 경로를 확인해주세요. (${soundSrc})`);
            });
    });
});
