export type Student = {
  id: number
  imie: string
  nazwisko: string
  wiek: number
}

export type CreateStudentRequest = {
  firstName: string
  lastName: string
  age: number
}
