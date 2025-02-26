let currentSlide = 0;

//矢印ボタンがクリックされたときに画像をスライドさせる処理
function moveSlider(direction) {
    console.log("moveSlider called with direction:", direction);
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const indicators = document.querySelectorAll('.indicator');

    currentSlide += direction;

    //スライドが範囲外に出ないように調整
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; //最後のスライドに戻る
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; //最初のスライドに戻る
    }

    //スライドを移動
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // インジケーターの更新
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
        if (index === currentSlide) {
            indicator.classList.add('active');
        }
    });
}