const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener("input", () => {
    const trimmedValue = nameInput.value.trim();
    if (trimmedValue === "") {
        nameOutput.textContent = "Anonymous";
    }
    else {
        nameOutput.textContent = trimmedValue;
    }
});