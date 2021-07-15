const toggleBtn = document.getElementById("toggle-check");
const yearlyPriceEls = document.querySelectorAll(".pricing__cost--yearly");
const monthlyPriceEls = document.querySelectorAll(".pricing__cost--monthly");
const yearlyLabelEl = document.getElementById("yearly-label");
const monthlyLabelEl = document.getElementById("monthly-label");

toggleBtn.addEventListener("click", () => {
  yearlyLabelEl.classList.toggle("toggle__title--selected");
  monthlyLabelEl.classList.toggle("toggle__title--selected");
  if (toggleBtn.checked == true) {
    yearlyPriceEls.forEach((element) => {
      element.style.display = "none";
    });
    monthlyPriceEls.forEach((element) => {
      element.style.display = "flex";
    });
  } else {
    yearlyPriceEls.forEach((element) => {
      element.style.display = "flex";
    });
    monthlyPriceEls.forEach((element) => {
      element.style.display = "none";
    });
  }
});
