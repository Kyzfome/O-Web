const form = document.querySelector(".reservation-form");
const customerName = document.getElementById("name");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const dateValue = date.value;
  const timeValue = time.value;
  const numPeopleValue = people.value;
  const nameValue = customerName.value;
  const emailValue = email.value;
  const phoneValue = phone.value;

  const message = `You reserved:
        Date: ${dateValue}
        Time: ${timeValue}
        Number of people: ${numPeopleValue}
        Name: ${nameValue}
        Email: ${emailValue}
        Phone: ${phoneValue}`;

  alert(message);
});
