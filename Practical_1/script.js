const votes = {
    JavaScript: 0,
    Python: 0,
    Java: 0
};


function vote(language) {
    votes[language]++;
    updateVotes();
}

function updateVotes() {
    document.getElementById('js-votes').textContent = votes.JavaScript;
    document.getElementById('py-votes').textContent = votes.Python;
    document.getElementById('java-votes').textContent = votes.Java;
}

setInterval(() => {
    const languages = Object.keys(votes);
    const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
    votes[randomLanguage]++;
    updateVotes();
}, 2000);

updateVotes();