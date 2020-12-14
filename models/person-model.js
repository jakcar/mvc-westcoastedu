export class Person {
  constructor(email, firstName, lastName) {
    this.email = email
    this.firstName = firstName
    this.lastName = lastName
  }
}

export class Teacher extends Person {
  constructor(birthDate, email, firstName, lastName, expertise) {
    super(email, firstName, lastName)
    this.expertise = expertise
    this.birthDate = birthDate
  }
  displayInfo() {
    return `${this.firstName} ${this.lastName} (${this.expertise})`
  }
}
