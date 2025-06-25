const buttonModal = document.getElementById('buttonModal')
const modal = document.querySelector('.modal')

buttonModal.addEventListener('click', () => {
  modal.classList.toggle('show')
})
