import { Course } from './course-model.js'
import { Person } from './person-model.js'

export const state = {
  courses: []
}

export const loadCourses = function () {
  state.courses.push(
    new Course(
      '1365',
      'Javascript from start to end',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      30,
      []
    ),
    new Course(
      '1366',
      'NodeJs for beginners',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      10,
      []
    ),
    new Course(
      '1367',
      'Typescript for JavaScript developers',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      20,
      []
    ),
    new Course(
      '1368',
      'Web API with NodeJs',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      25,
      []
    ),
    new Course(
      '1369',
      'Introduction to programming in Swift',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      50,
      []
    )
  )
}

export const findCourse = function (courseNr) {
  state.course = state.courses.find(
    (course) => course.courseNumber === courseNr
  )
}

export const addParticipant = (applicant) => {
  if (
    state.course.participants.some(
      (participant) => participant.email === applicant.email
    )
  ) {
    return false
  } else {
    state.course.participants.push(
      new Person(applicant.email, applicant.firstName, applicant.lastName)
    )
    return true
  }
}
