import './_components.js';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


document.addEventListener('DOMContentLoaded', function () {
	const produce__slider = new Swiper('.produce__slider', {
		slidesPerView: 'auto',
		spaceBetween: '32px'
	});

	const service__logos = new Swiper('.service__logos', {
		slidesPerView: 'auto',
		spaceBetween: '45px',
		autoplay: {
			delay: 100,
		},
	});

	document.querySelectorAll(".question__accordeon_item_title").forEach(function (title) {
		title.addEventListener("click", function () {
			const currentItem = this.parentElement;
			const content = currentItem.querySelector(".question__accordeon_item_content");

			// Закрываем все открытые элементы
			document.querySelectorAll(".question__accordeon_item").forEach(function (item) {
				const itemContent = item.querySelector(".question__accordeon_item_content");
				if (item !== currentItem) {
					itemContent.style.display = "none";
					item.querySelector(".question__accordeon_item_title").classList.remove("active");
				}
			});

			// Переключаем состояние текущего элемента
			if (content.style.display === "block") {
				content.style.display = "none";
				this.classList.remove("active");
			} else {
				content.style.display = "block";
				this.classList.add("active");
			}
		});
	});

});