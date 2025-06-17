// HTML에서 버튼과 오디오 요소를 가져옵니다.
const playSoundButton = document.getElementById('playSoundButton');
const myAudio = document.getElementById('myAudio');

// 버튼 클릭 이벤트 리스너를 추가합니다.
playSoundButton.addEventListener('click', () => {
    // 소리를 재생합니다.
    myAudio.play()
        .then(() => {
            console.log('소리 재생 성공!');
        })
        .catch(error => {
            console.error('소리 재생 중 오류 발생:', error);
            alert('소리 재생에 실패했습니다. 브라우저 설정이나 파일 경로를 확인해주세요.');
        });
});
