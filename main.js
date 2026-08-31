let formDiv = document.querySelector(".section-two");
let addTask = document.querySelector("#first-task");
let closeForm = document.querySelector("#close");
let form = document.querySelector("form");
let firstUi = document.querySelector(".section-one");
let cardContainer = document.querySelector(".card-container");
let navAddTask = document.querySelector("#add-task");
let input = document.querySelector("input");
let select = document.querySelector("select");
let textArea = document.querySelector("textarea");
let allTask = document.querySelector("#all-task");
let developmentBtn = document.querySelector("#Development");
let workBtn = document.querySelector("#Work");
let personalBtn = document.querySelector("#Personal");
let studyBtn = document.querySelector("#Study");
let theme = document.querySelector("#theme");
let body = document.querySelector("body");
let aside = document.querySelector("aside");


addTask.addEventListener("click", () => {
  formDiv.style.display = "flex";
  firstUi.style.display = "none";
});

navAddTask.addEventListener("click", (event) => {
  formDiv.style.display = "flex";
  firstUi.style.display = "none";
});

closeForm.addEventListener("click", () => {
  formDiv.style.display = "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = input.value;

  //demonstration: input.value gives the current input value, whereas getAttribute("value") reads the html value attribute which i kept blank so giving null.
  console.log("input.value =>", input.value);
  console.log('input.getAttribute("value") =>', input.getAttribute("value"));
  let cgory = select.value;
  let des = textArea.value;

  if (name.trim() === "" || cgory.trim() === "" || des.trim() === "") {
    alert("Please enter all the fields");
    return;
  }

  obj = {
    name,
    cgory,
    des,
  };

  let card = document.createElement("div");
  card.setAttribute("data-id", Date.now());
  card.setAttribute("data-status", "pending");
  card.setAttribute("data-category", cgory);
  card.setAttribute("class", "card");

  let categoryIcons = {
    Development: "ri-code-s-slash-line",
    Study: "ri-book-open-line",
    Work: "ri-briefcase-line",
    Personal: "ri-user-line",
  };

  let icon = categoryIcons[cgory];

  let taskTitle = document.createElement("h1");
  taskTitle.innerHTML = `<div><i class="${icon}"></i></div> ${name} `;
  taskTitle.setAttribute("class", "taskTitle");

  let category = document.createElement("p");
  category.innerHTML = cgory;
  category.setAttribute("class", "category");

  let description = document.createElement("p");
  description.innerHTML = des;
  description.setAttribute("class", "description");

  let btns = document.createElement("div");
  btns.setAttribute("class", "btns");

  let complete = document.createElement("button");
  complete.innerHTML = `Complete`;
  complete.setAttribute("class", "complete");

  let edit = document.createElement("button");
  edit.innerHTML = `Edit <i class="ri-pencil-ai-line"></i>`;
  edit.setAttribute("class", "edit");

  let del = document.createElement("button");
  del.innerHTML = `Delete <i class="ri-delete-bin-line"></i>`;
  del.setAttribute("class", "delete");

  btns.append(complete, edit, del);

  card.append(taskTitle, category, description, btns);

  cardContainer.appendChild(card);

  formDiv.style.display = "none";
  cardContainer.style.display = "flex";

 cardContainer.addEventListener("click", (event) => {

    let card = event.target.closest(".card");

    if (!card) return;

    // DELETE
    if (event.target.closest(".delete")) {
        card.remove();
    }

    // EDIT
    if (event.target.closest(".edit")) {

        input.value = card.querySelector(".taskTitle").innerText;
        select.value = card.getAttribute("data-category");
        textArea.value = card.querySelector(".description").innerText;

        formDiv.style.display = "flex";
        card.remove();
    }

    // COMPLETE
    if (event.target.closest(".complete")) {

        let completeBtn = event.target.closest(".complete");

        completeBtn.innerHTML =
            `Completed <i class="ri-check-line"></i>`;

        card.setAttribute("data-status", "completed");
    }

});

  form.reset();
});

aside.addEventListener("click", (event) => {

  let clickedBtn = event.target.closest("button");

  if (!clickedBtn) return;

  allTask.style.backgroundColor = "";
  allTask.style.borderRadius = "";

  developmentBtn.style.backgroundColor = "";
  developmentBtn.style.borderRadius = "";

  workBtn.style.backgroundColor = "";
  workBtn.style.borderRadius = "";

  personalBtn.style.backgroundColor = "";
  personalBtn.style.borderRadius = "";

  studyBtn.style.backgroundColor = "";
  studyBtn.style.borderRadius = "";


  
  if (clickedBtn === allTask) {

    allTask.style.backgroundColor = "lightgrey";
    allTask.style.borderRadius = "10px";

    document.querySelectorAll(".card").forEach((card) => {
      card.style.display = "flex";
    });

  }


  else if (clickedBtn === developmentBtn) {

    developmentBtn.style.backgroundColor = "lightgrey";
    developmentBtn.style.borderRadius = "10px";

    document.querySelectorAll(".card").forEach((card) => {
      card.style.display =
        card.getAttribute("data-category") === "Development"
          ? "flex"
          : "none";
    });

  }


  else if (clickedBtn === workBtn) {

    workBtn.style.backgroundColor = "lightgrey";
    workBtn.style.borderRadius = "10px";

    document.querySelectorAll(".card").forEach((card) => {
      card.style.display =
        card.getAttribute("data-category") === "Work"
          ? "flex"
          : "none";
    });

  }


  else if (clickedBtn === personalBtn) {

    personalBtn.style.backgroundColor = "lightgrey";
    personalBtn.style.borderRadius = "10px";

    document.querySelectorAll(".card").forEach((card) => {
      card.style.display =
        card.getAttribute("data-category") === "Personal"
          ? "flex"
          : "none";
    });

  }


  else if (clickedBtn === studyBtn) {

    studyBtn.style.backgroundColor = "lightgrey";
    studyBtn.style.borderRadius = "10px";

    document.querySelectorAll(".card").forEach((card) => {
      card.style.display =
        card.getAttribute("data-category") === "Study"
          ? "flex"
          : "none";
    });

  }

  cardContainer.style.display = "flex";
  firstUi.style.display = "none";

});

theme.addEventListener("click", () => {
  let html = document.documentElement;

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.setAttribute("data-theme", "light");

    theme.innerHTML = `<i class="ri-sun-line"></i> Theme`;
  } else {
    html.classList.add("dark");
    html.setAttribute("data-theme", "dark");

    theme.innerHTML = `<i class="ri-moon-line"></i> Theme`;
  }
});
