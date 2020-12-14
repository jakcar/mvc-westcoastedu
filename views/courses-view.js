class CoursesListView {
  _parentElement = document.querySelector('.course-list')
  _signupForm = document.querySelector('.signup-form')
  _formVals = document.getElementsByClassName('form-input')
  _currentCourse

  addHandlerRender(subscriber) {
    ;['load'].forEach((e) => window.addEventListener(e, subscriber))
  }

  addHandlerClickRow(subscriber) {
    this._parentElement.addEventListener('click', (event) => {
      this._currentCourse =
        event.target.parentElement.childNodes[0].firstChild.nodeValue
      subscriber(this._currentCourse)
    })
  }

  addHandlerSubmitForm(subscriber) {
    this._signupForm.addEventListener('submit', (e) => {
      const applicant = {
        firstName: this._formVals[0].value,
        lastName: this._formVals[1].value,
        email: this._formVals[2].value,
        course: this._currentCourse
      }
      subscriber(applicant)
      e.preventDefault()
    })
  }

  render(data) {
    data.forEach((course) => {
      const markup = this._generateMarkup(course)
      this._parentElement.insertAdjacentHTML('beforeend', markup)
    })
  }

  _generateMarkup(data) {
    return `<tr><td>${data.courseNumber}</td><td>${data.title}</td><td>${data.duration}</td></tr>`
  }
}

export default new CoursesListView()
