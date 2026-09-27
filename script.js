// =================================
// LẤY CÁC PHẦN TỬ
// =================================

const mainScreen =
    document.getElementById("mainScreen");

const successScreen =
    document.getElementById("successScreen");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const message =
    document.getElementById("message");


// =================================
// BIẾN
// =================================

let noSize = 1;
let yesSize = 1;

let noClickCount = 0;

let heartRainInterval;


// =================================
// CÁC CÂU KHI BẤM NO
// =================================

const messages = [

    "Pleaseee 💗",

    "really? 🥺",

    "think again! 🥺",

    "you might regret this!",

    "one last chance 😭",

    "pretty please??",

    "Don't break my heart 💔"

];


// =================================
// BẤM NO
// =================================

noBtn.addEventListener("click", function () {

    noClickCount++;


    // -----------------------------
    // Đổi message
    // -----------------------------

    if (noClickCount <= messages.length) {

        message.textContent =
            messages[noClickCount - 1];

    }


    // -----------------------------
    // NO nhỏ dần
    // -----------------------------

    noSize *= 0.72;

    noBtn.style.transform =
        `scale(${noSize})`;


    // -----------------------------
    // YES lớn dần
    // -----------------------------

    yesSize += 0.25;

    if (yesSize > 3.2) {
        yesSize = 3.2;
    }


    // -----------------------------
    // YES dịch sang trái + xuống
    // -----------------------------

    const moveX =
        -(yesSize - 1) * 12;

    const moveY =
        (yesSize - 1) * 5;


    yesBtn.style.transform =
        `translate(${moveX}px, ${moveY}px) scale(${yesSize})`;


    // -----------------------------
    // NO biến mất
    // -----------------------------

    if (noSize < 0.12) {

        noBtn.style.opacity = "0";

        noBtn.style.pointerEvents = "none";

    }

});


// =================================
// BẤM YES
// =================================

yesBtn.addEventListener("click", function () {

    // Ẩn màn hình chính
    mainScreen.style.display = "none";


    // Hiện màn hình success
    successScreen.classList.add("show");


    // Bắt đầu mưa tim
    startHeartRain();

});


// =================================
// CƠN MƯA TRÁI TIM
// =================================

function startHeartRain() {

    createHeartRow();


    heartRainInterval = setInterval(() => {

        createHeartRow();

    }, 600);

}


// =================================
// TẠO MỘT ĐỢT TIM
// =================================

function createHeartRow() {

    const heartSymbols = [

        "💕",
        "💖",
        "💘",
        "❤️"

    ];


    // Giảm mật độ
    const amount = 5;


    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "heart";


        // Chọn tim ngẫu nhiên

        heart.textContent =
            heartSymbols[
                Math.floor(
                    Math.random() *
                    heartSymbols.length
                )
            ];


        // Vị trí ngang ngẫu nhiên

        heart.style.left =
            Math.random() * 100 + "vw";


        // Kích thước ngẫu nhiên

        const size =
            15 + Math.random() * 14;

        heart.style.fontSize =
            size + "px";


        // Tốc độ rơi ngẫu nhiên

        const duration =
            4 + Math.random() * 3;

        heart.style.animationDuration =
            duration + "s";


        // Delay ngẫu nhiên

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";


        document.body.appendChild(heart);


        // Xóa tim sau khi animation kết thúc

        setTimeout(() => {

            heart.remove();

        }, (duration + 2) * 1000);

    }

}