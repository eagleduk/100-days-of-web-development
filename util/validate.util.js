function signupValidate(
  email,
  cEmail,
  password,
  name,
  street,
  postalCode,
  city
) {
  return (
    email.trim() &&
    cEmail.trim() &&
    email === cEmail &&
    password.trim() &&
    name.trim() &&
    street.trim() &&
    postalCode.trim() &&
    city.trim()
  );
}

module.exports = {
  signupValidate,
};
