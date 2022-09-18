const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");

btn.addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "user.txt", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const data = this.responseText;
      ul.innerHTML = `<li>${data}</li>`;
    }
  };
  xhr.send();
}
