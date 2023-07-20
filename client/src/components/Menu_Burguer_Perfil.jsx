function openPerfil() {
    let menu = document.getElementById("dropdownOffset");
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }

}

export default openPerfil