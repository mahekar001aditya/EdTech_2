// script.js
const translations = {
  en: {
    tec: "Akshara",
    tech: "Light Of Education",
    kannada: "Kannada Grammar",
    english: "English Grammar",
    hindi: "Hindi Grammar",
    maths: "Maths Formulas",
    kavi: "Kannada Jnanapeetha Award Winners",
    quizTitle: " Quiz & Puzzle Zone",
    touristTitle: "Tourist Places in Karnataka",
    personalityTitle: " Famous Personalities of Karnataka",
    backHome: "⬅ Back to Home"
  },
  kn: {
    tec: "ಅಕ್ಷರ",
    tech: "ಜ್ಯೋತಿ<br>ಶಿಕ್ಷಣದ ಬೆಳಕು",
    kannada: "ಕನ್ನಡ ವ್ಯಾಕರಣ",
    english: "ಇಂಗ್ಲೀಷ್ ವ್ಯಾಕರಣ",
    hindi: "ಹಿಂದಿ ವ್ಯಾಕರಣ",
    maths: "ಗಣಿತ ಸೂತ್ರಗಳು",
    kavi: "ಕನ್ನಡ ಜ್ಞಾನಪೀಠ ಪ್ರಶಸ್ತಿ ವಿಜೇತರು",
    quizTitle: " ಪ್ರಶ್ನೋತ್ತರ ಹಾಗೂ ಪಜಲ್ ವಿಭಾಗ",
    touristTitle: "ಕರ್ನಾಟಕದ ಪ್ರಸಿದ್ಧ ಪ್ರವಾಸಿ ತಾಣಗಳು",
    personalityTitle: " ಕರ್ನಾಟಕದ ಪ್ರಸಿದ್ಧ ವ್ಯಕ್ತಿತ್ವಗಳು",
    backHome: "⬅ ಮನೆಗೆ ಹಿಂತಿರುಗಿ"
  }
};

// Save & apply language selection
function changeLanguage(lang) {
  localStorage.setItem("selectedLanguage", lang);
  applyLanguage(lang);
}

// Apply translations to all elements with data-lang attribute
function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-lang");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  const storedLanguage = localStorage.getItem("selectedLanguage") || "en";
  applyLanguage(storedLanguage);
});
