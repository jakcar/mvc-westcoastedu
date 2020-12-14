import * as model from '../models/teachers-model.js'
import teachersListView from '../views/teachers-view.js'

const teachersController = function () {
  model.loadTeachers()
  teachersListView.render(model.state.teachers)
}

const init = function () {
  teachersListView.addHandlerRender(teachersController)
}

init()
