const btnContainer = document.querySelector('#btnContainer');

btnContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(`${e.target.textContent} clicked`);
    }
});
