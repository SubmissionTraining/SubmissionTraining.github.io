//Toggles visibility of the modal by removing/adding is-hidden css class


modal = document.getElementById("modal");

function modalToggle() {
    if (modal.classList.contains("is-hidden")) { modalOpen(); }
    else { modalClose(); }
}


/* remove is hidden from modal (because modal is hidden by default) & make the body position fixed (to prevent scrolling) */
function modalOpen() { 
    modal.classList.remove("is-hidden"); 
    document.body.classList.add("position-fixed");
}

/* add is hidden from modal & unfix the body */
function modalClose() { 
    modal.classList.add("is-hidden"); 
    document.body.classList.remove("position-fixed");
}