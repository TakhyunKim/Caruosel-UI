const showingClass = "showing";
const firstSlide = document.querySelector(".slide:nth-child(1)");
const lastSlide = document.querySelector(".slide:nth-child(6)");
const activeClass = "active";
const firstDot = document.querySelector(".dot:nth-child(1)");
const lastDot = document.querySelector(".dot:nth-child(6)");
const leftBtn = document.querySelector(".left_btn");
// 왼쪽 버튼 작동 함수
function left_move() {
    const showingSlide = document.querySelector(".showing");
    const activeDot = document.querySelector(".active");
    if (showingSlide, activeDot) {
        const prevSlide = showingSlide.previousElementSibling;
        const prevDot = activeDot.previousElementSibling;
        showingSlide.classList.remove(showingClass);
        activeDot.classList.remove(activeClass);
        if(prevSlide, prevDot) {
            prevSlide.classList.add(showingClass);
            prevDot.classList.add(activeClass);
        } else {
            lastSlide.classList.add(showingClass);
            lastDot.classList.add(activeClass);
        }
    }
}
// 왼쪽 버튼 작동 함수 //

// 오른쪽 버튼 작동 함수
function right_move() {
    const showingSlide = document.querySelector(".showing");
    const activeDot = document.querySelector(".active");
    if (showingSlide, activeDot) {
        const nextSlide = showingSlide.nextElementSibling;
        const nextDot = activeDot.nextElementSibling;
        showingSlide.classList.remove(showingClass);
        activeDot.classList.remove(activeClass);
        if(nextSlide !== leftBtn) {
            nextSlide.classList.add(showingClass);
            nextDot.classList.add(activeClass);
        } else {
            firstSlide.classList.add(showingClass);
            firstDot.classList.add(activeClass);
        }
    }
}
// 오른쪽 버튼 작동 함수 //



// 위 코드 작동 원리

// css에서 active, showing 추가하여 작동시 변화에 대한 코드 기입
// js에서 위 class들을 각 element에 제거 및 추가 할 수 있도록 함