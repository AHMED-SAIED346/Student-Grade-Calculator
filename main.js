let button = document.getElementById("btn");
let result = document.getElementById("result");
let Grade = document.getElementById("Grade")

button.addEventListener("click", function () {
  let physics = Number(document.getElementById("Physics").value);
  let chemistry = Number(document.getElementById("Chemistry").value);
  let maths = Number(document.getElementById("Maths").value);
  let biology = Number(document.getElementById("Biology").value);
  let total = physics + chemistry + maths + biology;
  let gradeText = getGrade(total);
  result.innerText = `The Mark Is = ${total} / 450 `;
  Grade.innerHTML = gradeText
});

function getGrade(total) {
  if (total >= 450) {
    return "Excellent";
  } else if (total >= 400) {
    return "Very Good";
  } else if (total >= 350) {
    return "Good";
  } else if (total >= 300) {
    return "Pass";
  } else if (total >= 250) {
    return "Poor";
  } else {
    return "fair";
  }
}
