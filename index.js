const calcBtnEl = document.getElementById("calcBtn");
const birthDateInputEl = document.getElementById("birthday");
const result = document.getElementById("result");

function calculateAge() {
  const dateOfBirth = birthDateInputEl.value;
  if (dateOfBirth === "") {
    alert("enter a valid birth date date");
  } else {
    let age = getAge(dateOfBirth);
    result.innerText = `Your age is ${age} ${age > 1 ? 'years' : 'year'} old`
  }
}

function getAge(dateOfBirth) {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const month = currentDate.getMonth() - birthDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age
}

calcBtnEl.addEventListener("click", calculateAge);
