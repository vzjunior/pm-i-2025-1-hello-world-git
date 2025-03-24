const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');


nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
};


const helloWorld = () => {
    messageP.innerText = nameInput.value.trim() 
        ? `Hello World, ${nameInput.value}!` 
        : "Hello World!";
};


nameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        helloWorld();
    }
});


nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        nameInput.value = "";
        messageP.innerText = "";
    }
});


const limparCampos = () => {
    nameInput.value = "";
    messageP.innerText = "";
};
