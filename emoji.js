

const emojiDiv = document.querySelector('#emoji');
const emojis = [
    '😆', '😅', '🤣', '😂', '😀', '🤑', '🤨', '🙂',
    '😊', '😗', '😛', '😏', '🤥', '😴', '🥺', '😧',
    '😇', '😳', '🙃', '🥴', '🧐', '🤨', '😒', '🤔',
    '🤭', '🥰', '🤐', '👀', '🤪', '🥲', '😃', '😁', '😬'
];

emojiDiv.addEventListener('mouseenter', () => {
    // Get a random emoji different from the current one
    let newEmoji;
    do {
        newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    } while (newEmoji === emojiDiv.textContent);

    emojiDiv.textContent = newEmoji;
});
