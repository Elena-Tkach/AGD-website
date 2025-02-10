import { swiper } from "/js/swiperScript.js";
import { getCurrentDay } from "/js/workDay.js";
import { sendMail } from "./js/sendMail";

swiper(".mySwiper", 2);
swiper(".mySwiper2", 1);
getCurrentDay();
sendMail();
