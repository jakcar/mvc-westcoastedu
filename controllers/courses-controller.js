import * as model from '../models/courses-model.js'
import courseListView from '../views/courses-view.js'
import modalView from '../views/modal-view.js'

const coursesController = function () {
  model.loadCourses()
  courseListView.render(model.state.courses)
  courseListView.addHandlerClickRow(CoursesDetails)
  courseListView.addHandlerSubmitForm(signupCheck)
}

const signupCheck = function (applicant) {
  console.log(applicant)
  if (model.addParticipant(applicant)) {
    console.log('Giltig anmälan, skickar mail och sånt...')
    CoursesDetails(applicant.course)
  } else modalView.alertAlreadySigned()
}

const CoursesDetails = function (courseNr) {
  model.findCourse(courseNr)
  modalView.renderDialog(model.state.course)
}

const init = function () {
  courseListView.addHandlerRender(coursesController)
}

init()
