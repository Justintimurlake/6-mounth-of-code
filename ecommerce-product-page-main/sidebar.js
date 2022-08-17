export default function sideNav() {
    const openMenu = document.querySelector('.navbar_img--menu');
    const closeMenu = document.querySelector('.sidenav_closebtn');
    const sideBar = document.querySelector('.sidenav');

    openMenu.addEventListener('click', function() {
        sideBar.setAttribute("style", " display: block; transform: translateX(0);")
    });
    closeMenu.addEventListener('click', function() {
        sideBar.setAttribute("style", " display: none; transform: translateX(-100%);")
    });

   window.addEventListener("click", function(e) {
        if(e.target == openMenu) {
            sideBar.setAttribute("style", " display: block; transform: translateX(0);");
        } else if (e.target == closeMenu || e.target != sideBar && e.target.parentNode != sideBar) {
            sideBar.setAttribute("style", " display: none; transform: translateX(-100%);");
        }
   });
}

