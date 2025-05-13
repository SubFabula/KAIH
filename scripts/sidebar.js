document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementsByClassName("sidebar");
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebarROTC = document.getElementById("rest-of-the-content"); // sidebarROTC => sidebarRestOfTheContent

  sidebarButton.addEventListener("click", sidebarOpenClose);
});

function sidebarOpenClose() {
  let sidebarClosed = document.getElementById("menu-button");
  let sidebarOpen = document.getElementById("back-icon");
  const sidebarButtonImgSrc = document.getElementsByClassName("sidebar-buttonCLASS");

  if (sidebarOpen != null) {
    sidebar.sidebarROTC.style.display = `inherit`;
    sidebarClosed.style.display = `none`;
    sidebarOpen.style.display = `inherit`;
    sidebar.style.width = `200px`;
    sidebar.style.padding = `20px 20px 10px 20px`;
    sidebar.style.background = `#8ae0b4`;
    sidebar.style.borderRadius = ` `;
    document.getElementById("menu-button").id = "back-icon";
    sidebarButtonImgSrc.src = "assets/icons/menu-close.svg";
  } else if (sidebarClosed != null) {
    sidebar.sidebarROTC.style.display = `none`;
    sidebarClosed.style.display = `inherit`;
    sidebarOpen.style.display = `none`;
    sidebar.style.width = `50px`;
    sidebar.style.padding = `20px 20px 20px 20px`;
    sidebar.style.background = `#4e8b6c`;
    sidebar.style.borderRadius = `0 0 50% 0`;
    document.getElementById("back-icon").id = "menu-button";
    sidebarButtonImgSrc.src = "assets/icons/menu.svg";
  }
}