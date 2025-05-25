const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
})

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})

//DarkMode
function lightDarkMode(){
    const darkMode = document.querySelector(".dark-mode i")
    const elements = document.querySelectorAll("body, section, nav a")

    darkMode.classList.toggle("fa-sun")
    darkMode.classList.toggle("fa-moon")
    darkMode.style.color = darkMode.classList.contains("fa-moon") ? "white" : "black";

    elements.forEach(element =>
        element.classList.toggle("dark-mode-class")
    );
}