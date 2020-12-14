class TeachersListView {
  _parentElement = document.querySelector('.teachers')

  addHandlerRender(subscriber) {
    ;['load'].forEach((e) => window.addEventListener(e, subscriber))
  }

  render(data) {
    data.forEach((teacher) => {
      const markup = this._generateMarkup(teacher)
      this._parentElement.insertAdjacentHTML('beforeend', markup)
    })
  }

  _generateMarkup(data) {
    return `<p class="teacher-list">${data.displayInfo()}</p>`
  }
}

export default new TeachersListView()
