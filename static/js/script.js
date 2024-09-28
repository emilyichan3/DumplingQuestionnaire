const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
  ];


function menuBar() {
    menuList = document.getElementById("menu-list");
    
    menuList.classList.toggle('open')
    
    mainContent = document.getElementById("main-content");
    mainContent.classList.toggle('main-content-border-control')
}
