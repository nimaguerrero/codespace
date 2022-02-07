const showMenu = (toogleId,navId) =>{
  const toggle = document.getElementById(toogleId), 
    nav = document.getElementById(navId)

    if (toggle && nav) {
      toggle.addEventListener('click',()=>{
        nav.classList.toggle('show')
      })
    }
}

showMenu('main-menu-toggle','main-nav')
