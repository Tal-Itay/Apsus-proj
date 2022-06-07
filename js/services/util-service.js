export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    makeLorem,
    getRandomIntInclusive,
};

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}

function makeId(length = 8) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeLorem(wordCount = 100) {
    const words = ['The', 'sky', 'above', 'the', 'port', 'was', 'the', 'color', 'of', 'television', 'tuned', 'to', 'dead', 'channel', 'All', 'this', 'happened', 'more', 'or', 'less', 'had', 'the', 'story', 'bit', 'by', 'from', 'various', 'people', 'and', 'as', 'generally', 'happens', 'in', 'such', 'cases', 'each', 'time', 'it', 'was', 'different', 'story', 'pleasure', 'burn'];
    var txt = '';
    while (wordCount > 0) {
        wordCount--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt.trim();
}

// get an random number max inclusive
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}