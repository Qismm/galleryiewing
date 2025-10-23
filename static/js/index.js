document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("vip-popup-overlay");
    const adLink = document.getElementById("ad-link");
    setTimeout(() => {
        const imagePopup = document.getElementById('imagePopup').style.display = 'block';
    }, 5000);

    const megaButtons = document.querySelectorAll(".get-mega-button");
    megaButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const link = button.href;
            adLink.href = link;
            popupOverlay.style.display = "flex";
        });
    });

    imagePopup.addEventListener("click", event => {
        if (event.target === imagePopup) {
            imagePopup.style.display = "none";
        }
    });

    popupOverlay.addEventListener("click", event => {
        if (event.target === popupOverlay) {
            popupOverlay.style.display = "none";
        }
    });
});
