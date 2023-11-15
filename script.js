const result = document.querySelector("#url-result");
const link = document.getElementById("linkinput");
const message = document.getElementById("message");
const copied = document.querySelector("#copied");
const submit = document.querySelector("#submit-url");

const getShortUrl = () => {
    const linkInput = link.value;
    const data = {
        "domain": "url.jorgenlt.no",
        "originalURL": linkInput,
        "allowDuplicates": false 
    };
    fetch('https://api.short.io/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'pk_0Un0di4WhxYgCjwn'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        message.innerHTML = data.shortURL;
        result.style.visibility = "visible";
    });

    link.value = "";
};

result.addEventListener("click", () => {
    new ClipboardJS("#url-result");
    
    copied.classList.remove("d-none");
    setTimeout(() => {
        copied.classList.add("d-none")
    }, 1000);
});

submit.addEventListener('click', () => getShortUrl());

