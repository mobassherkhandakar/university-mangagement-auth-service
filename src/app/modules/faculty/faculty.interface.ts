export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}
export type IFaculty = {
  id: string
  name: UserName
  gender: 'male' | 'female'
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  presentAddress: string
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  designation: string
  academicDepartment: string
  academicFaculty: string
}
