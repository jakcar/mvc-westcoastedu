import modalView from '../views/modal-view.js'

export const modalController = function () {
  modalView.addHandlerCloseModal(modalClose)
}

export const modalClose = () => {
  modalView.closeModalWindow()
}

const init = function () {
  modalController()
}

init()
