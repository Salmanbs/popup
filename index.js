var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementById("cancel");

var add = document.getElementById("add");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

add.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function handleClick(type,event) {
  event.preventDefault();
  const oneTimeBtn = document.getElementById("one-time-btn");
  const monthlyBtn = document.getElementById("monthly-btn");
  var duration = document.getElementById("duration");

  if (type === "one-time") {
    oneTimeBtn.classList.add("active");
    monthlyBtn.classList.remove("active");
  } else if (type === "monthly") {
    monthlyBtn.classList.add("active");
    oneTimeBtn.classList.remove("active");
  }

  if (type === "monthly") {
    duration.style.display = "block";
  } else if (type === "one-time") {
    duration.style.display = "none";
  }
}

var dropdown = document.querySelector(".dropdown");
var dropdownToggle = dropdown.querySelector(".dropdown-toggle");
var dropdownMenu = dropdown.querySelector(".dropdown-menu");
var dropdownItems = dropdownMenu.querySelectorAll(".dropdown-item");

var selectedItem = dropdownItems[0];
selectedItem.classList.add("active");
dropdownToggle.textContent = selectedItem.textContent.charAt(0);

dropdownItems.forEach(function (item) {
  item.addEventListener("click", function () {
    selectedItem.classList.remove("active");

    selectedItem = item;
    selectedItem.classList.add("active");
    dropdownToggle.textContent = selectedItem.textContent.charAt(0);
  });
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});

dropdownToggle.addEventListener("click", function () {
  dropdownMenu.style.display = "block";
});
