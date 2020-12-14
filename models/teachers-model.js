import { Teacher } from './person-model.js'

export const state = {
  teachers: []
}

export const loadTeachers = function () {
  state.teachers.push(
    new Teacher('1958-02-13', 'ulf.bilting@hotmail.com', 'Ulf', 'Bilting', [
      'Java',
      'C++',
      'C'
    ]),
    new Teacher(
      '1964-02-20',
      'michael.gustavsson@gmail.com',
      'Michael',
      'Gustavsson',
      ['C++', 'JavaScript', 'TypeScript', 'Angular', 'React', 'MSSQL']
    ),
    new Teacher(
      '1977-01-10',
      'mikael.zetterstrom@hotmail.com',
      'Mikael',
      'Zetterström',
      ['C', 'C++']
    ),
    new Teacher('1943-10-23', 'ulf.malmstrom@hotmail.com', 'Ulf', 'Malmström', [
      'Visual Basic',
      'Access',
      'Excel'
    ])
  )
}
