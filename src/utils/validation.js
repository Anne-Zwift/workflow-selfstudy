export function validateUserName(username) {
  // must be at least 3 characters
  return username.length >= 3;
}

/*export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@(stud\.noroff\.no|noroff\.no)$/;
  return emailRegex.test(email);
}*/
