const surpriseButton = document.getElementById("surpriseButton");
const surpriseBubble = document.getElementById("surpriseBubble");
const surpriseText = document.getElementById("surpriseText");

const surpriseMessages = [
    "Good grief! You're doing better than you think. ♡",

    "Remember to take a break. Even Snoopy needs his naps!",

    "You are someone's favorite person. Never forget that! ✦",

    "Small steps are still progress. Keep going!",

    "Sending you a little virtual hug! ʕ•ᴥ•ʔ",

    "Life is better with a little music and a lot of happiness.",

    "Don't forget to smile today. You deserve it! ♡",

    "Believe in yourself, even on the difficult days.",

    "You are a little masterpiece in progress!",

    "Just like Snoopy, keep dreaming big!"
];

let currentMessage = -1;

surpriseButton.addEventListener("click", function() {

    currentMessage++;

    if (currentMessage >= surpriseMessages.length) {
        currentMessage = 0;
    }
    surpriseText.textContent = surpriseMessages[currentMessage];

    surpriseBubble.style.display = "block";

    surpriseBubble.style.animation = "none";
    surpriseBubble.offsetHeight;
    surpriseBubble.style.animation = "bubbleAppear 0.4s ease";

});
