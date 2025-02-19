import { swiper } from "/js/swiperScript.js";
import { getCurrentDay } from "/js/workDay.js";
import { sendMail } from "./js/sendMail.js";
const formPage = document.querySelector(".js-form");

swiper(".mySwiper", 2);
swiper(".mySwiper2", 1);
getCurrentDay();

if (formPage) {
  sendMail(formPage);
}
