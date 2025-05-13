document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const sidebarButton = document.getElementById("sidebarRealButton");
  const sidebarButtonImg = document.querySelector(".sidebar-buttonCLASS"); // query selector if styling a class (something to do with «HTMLclass» and «single elements» stuff)

  sidebarButton.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("open");

    if (isOpen) {
      sidebar.classList.remove("open");
      sidebar.classList.add("closed");
      sidebarButtonImg.src = "assets/icons/menu.svg";
      sidebarButtonImg.id = "menu-button"; // a shorter version of document.getElementById("ID1-").id = "ID-2";
      //sidebarClosed.style.display = `none`;
    } else {
      sidebar.classList.remove("closed");
      sidebar.classList.add("open");
      sidebarButtonImg.src = "assets/icons/menu-close.svg";
      sidebarButtonImg.id = "back-icon";
    }
  });
});
