function updateDOM() {
    const title = document.getElementById("title");
    const message = document.querySelector(".message");
    const box = document.getElementById("box");

    title.textContent = "Updated Title";
    message.textContent = "The DOM has been updated!";

    box.style.backgroundColor = "orange";
    box.classList.add("active");
}
