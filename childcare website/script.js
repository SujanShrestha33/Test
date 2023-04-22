let menu = document.getElementById("menu");

menu.addEventListener("click", function() {
    let nav_bar = document.getElementById("nav-list");
    // console.log(nav_bar.className)
    if (nav_bar.className === "nav-bar"){
            nav_bar.className += " phone";
            // console.log(nav_bar.classList);
    }else{
        nav_bar.className = "nav-bar";
    }   
});
