const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#f13f0d",
  "#095c30"
  ];


function menuBar() {
    menuList = document.getElementById("menu-list");
    
    menuList.classList.toggle('open')
    
    mainContent = document.getElementById("main-content");
    mainContent.classList.toggle('main-content-border-control')
}
