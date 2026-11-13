// Surprise button
document.addEventListener("DOMContentLoaded", function() {

    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseBubble = document.getElementById("surpriseBubble");
    const surpriseText = document.getElementById("surpriseText");

    const surpriseMessages = [
        "Good grief! You're doing so amazing!! ♡",
        "Remember to take a break. Even Snoopy needs his naps!",
        "You are someone's favorite person. Never forget that! ✦",
        "Small steps are still progress. Keep going!",
        "Sending you a little virtual hug! ʕ•ᴥ•ʔ",
        "Life is better with a little music and a lot of happiness.",
        "Let's watch a movie together(ಥ _ ಥ)",
        "Believe in yourself, even on the difficult days.",
        "You are a little masterpiece in progress!",
        "Just like Snoopy, keep dreaming big!",
        "I got a rock.",
        "Well hello there, Charlie Brown, you blockhead!!",
        "I've developed a new philosophy. I only dread one day at a time.",
        "Sometimes I lie awake at night, and I ask, 'Why me?' Then a voice answers, 'Nothing personal... your name just happened to come up.'",
        "It was a dark and stormy night...",
        "Yesterday I was a dog. Today I'm a dog. Tomorrow I'll probably still be a dog. *sigh!* There's so little hope for advancement.",
        "Curse you, Red Baron!",
        "Why Dogs Are Superior to Cats: They just are, and that's all there is to it!"
    ];

    let previousMessage = -1;

    surpriseButton.addEventListener("click", function() {

        let randomMessage;
        do {
            randomMessage = Math.floor(
                Math.random() * surpriseMessages.length
            );
        } while (
            randomMessage === previousMessage &&
            surpriseMessages.length > 1
        );

        previousMessage = randomMessage;

        surpriseText.textContent = surpriseMessages[randomMessage];

        surpriseBubble.classList.remove("show");

        void surpriseBubble.offsetWidth;

        surpriseBubble.classList.add("show");

    });

});


// Music button


document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");

    if (!music || !musicButton) {
        console.error("Music button or audio element was not found!");
        return;
    }

    music.volume = 0.35;

    musicButton.addEventListener("click", async function () {

        if (music.paused) {
            try {
                await music.play();

                musicButton.textContent = "♫ Pause Music";
                console.log("Music is playing!");

            } catch (error) {
                console.error("Music playback failed:", error);

                musicButton.textContent = "♫ Unable to Play";
                alert("Unable to play music. Please check your audio file and file path.");
            }

        } else {
            music.pause();
            musicButton.textContent = "♫ Play a Tune";
        }

    });

    music.addEventListener("ended", function () {
        musicButton.textContent = "♫ Play a Tune";
    });

    music.addEventListener("error", function () {
        console.error("Audio file could not be loaded:", music.error);
    });

    const albumToggle = document.getElementById("albumToggle");
    const photoGallery = document.getElementById("photoGallery");

    if (albumToggle && photoGallery) {
        albumToggle.addEventListener("click", function () {

            const isOpening = photoGallery.hidden;

            photoGallery.hidden = !isOpening;

            albumToggle.setAttribute("aria-expanded", String(isOpening));

            albumToggle.textContent = isOpening
                ? "♡ Close My Photo Album"
                : "♡ Open My Photo Album";
        });
    }

});
