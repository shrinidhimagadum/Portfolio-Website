function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  

  const isValidEmail = validateEmail(email);
  if (isValidEmail) {
    console.log("Valid email");
  } else {
    console.log("Invalid email");
  }
  