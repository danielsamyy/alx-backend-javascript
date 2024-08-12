export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accu, student) => accu + student.id, 0);
}
