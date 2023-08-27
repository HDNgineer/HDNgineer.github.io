const headerTitle = document.querySelector('.header-title');
const textArray = ["This is", "HD Engineer"];
let textIndex = 0;
let charIndex = 0;
let isTyping = true; // Mengontrol apakah sedang mengetik atau menghapus

function type() {
    if (charIndex <= textArray[textIndex].length && isTyping) {
        headerTitle.textContent = textArray[textIndex].substr(0, charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        isTyping = false;
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex >= 0 && !isTyping) {
        headerTitle.textContent = textArray[textIndex].substr(0, charIndex);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        isTyping = true;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

type(); // Memulai animasi saat halaman dimuat
