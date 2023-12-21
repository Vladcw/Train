// Функція для відображення модального вікна за його ідентифікатором
function showInfo(modalId) {
	const modal = document.querySelector(`[data-modalid="${modalId}"]`);
	modal.style.display = 'flex';
}

// Функція для приховування модального вікна за його ідентифікатором
function hideInfo(modalId) {
	const modal = document.querySelector(`[data-modalid="${modalId}"]`);
	modal.style.display = 'none';
}

// Визначення усіх карточок
const cards = document.querySelectorAll('.card__people');

// Додавання обробників подій для карточок
cards.forEach(card => {
	card.addEventListener('click', (event) => {
		const personId = event.currentTarget.getAttribute('data-personid');
		showInfo(personId);
	});
});