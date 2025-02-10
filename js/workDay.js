export const getCurrentDay = () => {
  const currentDay = new Date().getDay();

  // Select all schedule items
  const scheduleItems = document.querySelectorAll(".schedule__item");

  // Loop through the items and add a class to the current day
  scheduleItems.forEach((item) => {
    if (parseInt(item.getAttribute("data-day")) === currentDay) {
      item.classList.add("highlight"); // Add the highlight class
    }
  });
};
