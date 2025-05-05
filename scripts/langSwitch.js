document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById("lang-select");

  const savedLang = localStorage.getItem("preferredLang"); // Saves to localStorage and langPreferences.js loads it if needed.
  if (savedLang) langSwitch.value = savedLang;

  langSwitch.addEventListener("change", () => {
    const selectedValue = langSwitch.value;
    localStorage.setItem("preferredLang", selectedValue);

    const path = window.location.pathname;
    const isEnglish = path.includes("/en/");
    let newPath = "";

    if (selectedValue === "option-en" && !isEnglish) {
      newPath = path.replace("/KAIH", "/KAIH/en");
    } else if (selectedValue === "option-tr" && isEnglish) {
      newPath = path.replace("/en", ""); // Remove '/en'
    }

    if (newPath && newPath !== path) {
      location.href = newPath;
    }
  });
});
