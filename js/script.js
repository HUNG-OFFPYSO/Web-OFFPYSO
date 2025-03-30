document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".menu");
    let menuIcon = document.querySelector(".menu-icon");
    let closeBtn = document.querySelector(".close-btn");

    // Khi bấm vào icon 3 gạch, mở menu
    menuIcon.addEventListener("click", function () {
        menu.classList.add("active");
    });

    // Khi bấm vào nút X, đóng menu
    closeBtn.addEventListener("click", function () {
        menu.classList.remove("active");
    });
});
