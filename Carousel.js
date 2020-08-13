const showingClass = "showing";
const firstSlide = document.querySelector(".slide:nth-child(1)");
const lastSlide = document.querySelector(".slide:nth-child(6)");
const leftBtn = document.querySelector(".left_btn");
// 왼쪽 버튼 작동 함수
function left_move() {
    const showingSlide = document.querySelector(".showing");
    if (showingSlide) {
        const prevSlide = showingSlide.previousElementSibling;
        showingSlide.classList.remove(showingClass);
        if(prevSlide) {
            prevSlide.classList.add(showingClass);
        } else {
            lastSlide.classList.add(showingClass);
        }
    }
}
// 왼쪽 버튼 작동 함수 //

// 오른쪽 버튼 작동 함수
function right_move() {
    const showingSlide = document.querySelector(".showing");
    if (showingSlide) {
        const nextSlide = showingSlide.nextElementSibling;
        showingSlide.classList.remove(showingClass);
        if(nextSlide !== leftBtn) {
            nextSlide.classList.add(showingClass);
        } else {
            firstSlide.classList.add(showingClass);
        }
    }
}
// 오른쪽 버튼 작동 함수 //
