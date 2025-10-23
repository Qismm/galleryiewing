document.addEventListener("DOMContentLoaded", () => {
    const popupOverlay = document.getElementById("vip-popup-overlay");
    const vipPopup = document.getElementById("vip-popup");
    const adLink = document.getElementById("ad-link");
    const imagePopup = document.getElementById("imagePopup");

    // Show image popup after 5 seconds
    setTimeout(() => {
        if (imagePopup) imagePopup.style.display = 'block';
    }, 5000);

    // Handle Mega button clicks to show VIP popup
    const megaButtons = document.querySelectorAll(".get-mega-button");
    megaButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();
            const link = button.href;
            adLink.href = link;
            popupOverlay.style.display = "flex";
        });
    });

    // Close image popup when clicking outside it
    if (imagePopup) {
        imagePopup.addEventListener("click", event => {
            if (event.target === imagePopup) {
                imagePopup.style.display = "none";
            }
        });
    }

    // ✅ Close VIP popup when clicking outside the box
    if (popupOverlay && vipPopup) {
        popupOverlay.addEventListener("click", (event) => {
            if (!vipPopup.contains(event.target)) {
                popupOverlay.style.display = "none";
            }
        });
    }
});

