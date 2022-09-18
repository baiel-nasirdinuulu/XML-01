# XML-01
https://baiel-nasirdinuulu.github.io/XML-01/



const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");

btn.addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "user.txt", true);

  xhr.onload = function () {
    if (this.status == 200) {
      const data = this.responseText;
      const users = data.split(",");

      users.map((user) => {
        const li = document.createElement("li");
        li.textContent = user;
        ul.appendChild(li);
      });
    }
  };
  xhr.send();
}
