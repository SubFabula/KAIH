document.addEventListener("DOMContentLoaded", () => {
  const noticeDiv = document.createElement("div");
  const noticeUI = document.createElement("div");
  const noticeCloseIcon = document.createElement("img");
  const noticeTitle = document.createElement("h2");
  const noticeContext = document.createElement("p");
  const noticeList = document.createElement("ul");
  const noticeConfirmButton = document.createElement("button");

  noticeDiv.id = "noticeDiv";
  noticeUI.id = "noticeUI";
  noticeCloseIcon.id = "noticeCloseIcon";
  noticeTitle.id = "noticeTitle";
  noticeContext.id = "noticeContext";
  noticeList.id = "noticeList";
  noticeConfirmButton.id = "noticeConfirmButton";

  noticeConfirmButton.addEventListener("click", noticeClose);

  document.body.append(noticeDiv);
  noticeDiv.append(noticeUI);
  noticeUI.append(noticeCloseIcon, noticeTitle, noticeContext, noticeList, noticeConfirmButton);

  if (window.innerWidth <= 719) {
    // @media (max-width: [Mobile])
    // #noticeUI Styles
    noticeUI.style.maxWidth = "70vw";
    noticeUI.style.minWidth = "40vw";
    noticeUI.style.maxHeight = "80vh";
    noticeUI.style.minHeight = "60vh";
    noticeUI.style.aspectRatio = "1/1.25";
    noticeUI.style.padding = "2.5vw";

    // #noticeTitle Styles
    noticeTitle.style.fontSize = "5vw";
    
    // #noticeContext Styles
    noticeContext.style.fontSize = "3.5vw";

    // #noticeList Styles
    noticeList.style.width = "50vw";
    noticeList.style.fontSize = "3vw";
    noticeList.style.paddingRight = "3vw";

    // #noticeConfirmButton Styles
    noticeConfirmButton.style.width = "50vw";
    noticeConfirmButton.style.height = "10vh";
    noticeConfirmButton.style.aspectRatio = "1/2";
    noticeConfirmButton.style.fontSize = "3vw";
  } else if (window.innerWidth >= 720) {
    // @media (max-width: [Desktop])
    // #noticeUI Styles
    noticeUI.style.maxWidth = "40vw";
    noticeUI.style.maxHeight = "65vh";
    noticeUI.style.aspectRatio = "1/1.25";
    noticeUI.style.padding = "2vw";

    // #noticeTitle Styles
    noticeTitle.style.fontSize = "2vw";
    
    // #noticeContext Styles
    noticeContext.style.fontSize = "1.5vw";

    // #noticeList Styles
    noticeList.style.width = "20vw";
    noticeList.style.fontSize = "1.25vw";

    // #noticeConfirmButton Styles
    noticeConfirmButton.style.width = "20vw";
    noticeConfirmButton.style.height = "10vh";
    noticeConfirmButton.style.aspectRatio = "1/2";
    noticeConfirmButton.style.fontSize = "1vw";
  }
  // #noticeDiv Styles
  noticeDiv.style.top = "0"
  noticeDiv.style.left = "0"
  noticeDiv.style.width = "100%";
  noticeDiv.style.height = "100%";
  noticeDiv.style.zIndex = "10000";
  noticeDiv.style.boxSizing = "border-box";
  noticeDiv.style.position = "fixed";
  noticeDiv.style.overflow = "hidden";
  noticeDiv.style.backgroundColor = "#000000d0";

  // #noticeUI Styles
  noticeUI.style.top = "50%"
  noticeUI.style.left = "50%"
  noticeUI.style.transform = "translate(-50%, -50%)";
  noticeUI.style.aspectRatio = "1/1.25";
  noticeUI.style.boxSizing = "border-box";
  noticeUI.style.position = "relative";
  noticeUI.style.display = "flex";
  noticeUI.style.flexWrap = "nowrap";
  noticeUI.style.justifyContent = "center";
  noticeUI.style.placeContent = "center";
  noticeUI.style.placeItems = "center";
  noticeUI.style.flexDirection = "column";
  noticeUI.style.overflow = "hidden";
  noticeUI.style.backgroundColor = "#ffffffd0";
  noticeUI.style.textAlign = "center";
  noticeUI.style.textWrap = "pretty";

  // #noticeCloseIcon Styles & Scripts
  function noticeClose() {
    noticeDiv.remove()
  }

  // #noticeTitle Styles
  noticeTitle.innerText =
    isEnglish
      ? "NOTICE"
      : "BİLGİLENDİRME";

  // #noticeContext Styles
  noticeContext.innerText =
    isEnglish
      ? "This WebSite is still under construction. Please be aware that there may be errors and unfinished content."
      : "Bu WebSitesi hâlen yapım aşamasındadır. Oluşabilecek hatalar ve eksik içerikler konusunda lütfen dikkatli olun.";

  // #noticeList Styles
  noticeList.innerHTML =
    isEnglish
    ? "<li>Calculation by Bill(₺) hasn't been setup yet. It will just factor the given data from 1 to 8.</li>"
    : "<li>Tutar/Fatura(₺) ile Hesaplama yöntemi henüz hazır değil. Girilen veriler sırasıyla 1'den 8 çarpılıyor.</li>";

  // #noticeConfirmButton Styles
  noticeConfirmButton.innerText =
    isEnglish
      ? "Okay! Got it."
      : "Tamamdır! Anlaşıldı.";
  noticeConfirmButton.disabled = "disabled";
  function noticeWaitForConfirmButton() {
    noticeConfirmButton.disabled = !noticeConfirmButton.disabled // "[thing].disabled = ![thing].disabled" enables the disabled [thing].
  }
  if (noticeConfirmButton.disabled) {
    setTimeout(() => {
      noticeWaitForConfirmButton()
    }, 5000); // 5000 milliseconds -> 5 seconds
  }
});