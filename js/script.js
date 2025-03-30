document.addEventListener("DOMContentLoaded", function () { let menu = document.querySelector(".menu"); let menuIcon = document.querySelector(".menu-icon"); let closeBtn = document.querySelector(".close-btn");

// Khi bấm vào icon 3 gạch, mở menu
menuIcon.addEventListener("click", function () {
    menu.classList.add("active");
    menu.style.left = "0"; // Hiển thị menu hoàn toàn
    menu.style.height = "auto"; // Chỉ chiếm đủ nội dung
});

// Khi bấm vào nút X, đóng menu
closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
    menu.style.left = "-100%"; // Đảm bảo menu biến mất hoàn toàn
});

});
