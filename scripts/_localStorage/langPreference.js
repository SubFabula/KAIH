document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLang"); // Loads from the localStorage when the langSwitch.js saves the last used option.
  const path = window.location.pathname;
  const isEnglish = path.includes("/en/");

  if (savedLang === "option-en" && !isEnglish) {
    location.href = path.replace("/KAIH", "/KAIH/en");
  }

  if (savedLang === "option-tr" && isEnglish) {
    location.href = path.replace("/en", "");
  }
});
