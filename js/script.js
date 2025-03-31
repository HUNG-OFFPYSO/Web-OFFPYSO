document.addEventListener("DOMContentLoaded", function () { const starContainer = document.createElement("div"); starContainer.id = "star-container"; document.body.appendChild(starContainer);

function createShootingStar() {
    const star = document.createElement("div");
    star.classList.add("shooting-star");

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.3; // Xuất hiện từ trên
    const endX = startX + Math.random() * 200 - 100; // Bay theo hướng ngẫu nhiên
    const endY = window.innerHeight;

    star.style.left = `${startX}px`;
    star.style.top = `${startY}px`;
    document.getElementById("star-container").appendChild(star);

    star.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px)`, opacity: 0 }
    ], {
        duration: 2000 + Math.random() * 3000,
        easing: "linear",
        iterations: 1
    });

    setTimeout(() => star.remove(), 5000);
}

setInterval(createShootingStar, 800);

});

