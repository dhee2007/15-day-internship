let footerYear = document.querySelector(".footer-year");
if(footerYear){
    footerYear.textContent = new Date().getFullYear();
};
 
 
// theme toggle
let themebtn = document.querySelector(".theme-toggle");
//we don't have any backend databases to store the items.
// So I'm storing the items in the browsers storage called as localStorage
localStorage.setItem("theme", "light");
if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light-theme");
    themebtn.textContent = "🌞";
}else{
    themebtn.textContent= "🌛";
}
themebtn.addEventListener("click", function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        themebtn.textContent= "🌞";
    }else{
        themebtn.textContent = "🌛";
        localStorage.setItem("theme", "dark");
    }
   
});
 