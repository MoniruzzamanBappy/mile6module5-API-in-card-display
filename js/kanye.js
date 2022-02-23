const quotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = data => {
    const loadQuote = document.getElementById('quote');
    loadQuote.innerHTML = `
    <blockquote>"${data.quote}"</blockquote>
    `;
}