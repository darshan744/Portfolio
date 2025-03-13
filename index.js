let roleTyping = new Typed(".typing-role",{
    strings:['Web Developer'],
    typeSpeed:150,
    backSpeed:100,
    loop:true   
})

function setLink() {
    const links = [
   document.getElementById("home"),
     document.getElementById("TechStack"),
     document.getElementById("Projects"),
    document.getElementById("contact")]
    const hash = window.location.hash || "#home";
    for(let link of links) {
        link.classList.remove('active');
        if(link.getAttribute("href") === hash){
            link.classList.add("active");
        }
    }

}

window.addEventListener("hashchange" , setLink);
window.addEventListener("load" , setLink);

function showNavBar() {
    const mobileNavBar = document.querySelector(".mobileNavLinks");
    mobileNavBar.style.display = 'block'
}

function hideNavBar(){
    const mobileNavBar = document.querySelector(".mobileNavLinks");
    mobileNavBar.style.display = 'none'
}