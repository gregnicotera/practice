function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  return average >= 90 ? 'A' :
         average >= 80 ? 'B' :
         average >= 70 ? 'C' :
         average >= 60 ? 'D' :
         'F';
}