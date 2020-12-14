class modalView {
  _overlay = document.querySelector('.overlay')
  _modal = document.querySelector('.modal')
  _btnCloseModal = document.querySelector('.btn-close-modal')
  _parentElement = document.querySelector('.course-list')
  _data

  addHandlerCloseModal(subscriber) {
    this._btnCloseModal.addEventListener('click', subscriber)
  }

  renderDialog(data) {
    this._data = data
    this._clearMarkup()
    this._overlay.classList.remove('hidden')
    this._modal.classList.remove('hidden')
    this._modal.querySelector('.modal-header').innerHTML = `${data.title}`
    this._modal.querySelector('.details').innerHTML = `${data.description}`
    this._modal.querySelector(
      '.sub-details'
    ).innerHTML = `Kursen är ${data.duration} dagar lång.`
    if (data.participants) {
      data.participants.forEach((element) => {
        this._modal
          .querySelector('.participants-container')
          .insertAdjacentHTML(
            'beforeend',
            `<p>${element.firstName} ${element.lastName}</p>`
          )
      })
    }
  }

  alertAlreadySigned() {
    alert('Du är redan anmäld till kursen.')
  }

  closeModalWindow() {
    this._modal.classList.add('hidden')
    this._overlay.classList.add('hidden')
  }

  _clearMarkup() {
    let parent = this._modal.querySelector('.participants-container')
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild)
    }
  }
}

export default new modalView()
