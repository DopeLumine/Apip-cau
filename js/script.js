// JavaScript untuk memperbesar gambar saat diklik
document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
        // Membuat elemen overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        // Membuat elemen gambar besar
        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.classList.add('large-img');
        overlay.appendChild(largeImg);

        // Menutup overlay saat di-klik
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
window.addEventListener('load', () => {
    const video = document.querySelector('.birthday-video');
    
    video.play().catch(() => {
        // Jika autoplay dengan suara diblokir, berikan instruksi ke pengguna
        console.log("Autoplay dengan suara diblokir, silakan tekan play.");
    });
});
