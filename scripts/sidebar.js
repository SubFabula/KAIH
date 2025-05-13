document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const sidebarROTC = document.getElementById("rest-of-the-content"); // sidebarROTC => sidebarRestOfTheContent
  const sidebarRealButton = document.getElementById("sidebarRealButton");
  const sidebarButtonImg = document.querySelector(".sidebar-buttonCLASS"); // query selector if styling a class (something to do with «HTMLclass» and «single elements» stuff)

  sidebarRealButton.addEventListener("click", () => {
    const sidebarClosed = document.getElementById("menu-button");
    const sidebarOpen = document.getElementById("back-icon");

    if (sidebarClosed != null) {
      sidebarROTC.style.display = `none`;
      sidebarClosed.id = "back-icon"; 
      sidebarClosed.style.display = `inherit`;
      //sidebarOpen.style.display = `none`;
      sidebar.style.width = `50px`;
      sidebar.style.padding = `20px 20px 20px 20px`;
      sidebar.style.background = `#4e8b6c`;
      sidebar.style.borderRadius = `0 0 50% 0`;
      sidebarButtonImg.src = "assets/icons/menu.svg";
    } else if (sidebarOpen != null) {
      sidebarROTC.style.display = `flex`;
      sidebarOpen.id = "menu-button"; // a shorter version of document.getElementById("ID1-").id = "ID-2";
      //sidebarClosed.style.display = `none`;
      sidebarOpen.style.display = `inherit`;
      sidebar.style.width = `200px`;
      sidebar.style.padding = `20px 20px 10px 20px`;
      sidebar.style.background = `#8ae0b4`;
      sidebar.style.borderRadius = ``;
      sidebarButtonImg.src = "assets/icons/menu-close.svg";
    }
  });
});
