function toggleNav() {
    let nav = document.querySelector(".nav");
    let classToAdd = nav.classList.contains("closed") ? "open" : "closed";
    let classToRemove = nav.classList.contains("closed") ? "closed" : "open";
    nav.classList.remove(classToRemove);
    nav.classList.add(classToAdd);
}