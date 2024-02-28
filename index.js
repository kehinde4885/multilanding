// Preparation of Articles

async function dataFetching() {
  let res = await fetch("./data.json");
  let data = await res.json();
  return data;
}

async function renderArticles() {
  let data = await dataFetching();

  let articles = document.getElementById("articles");

  let innerhtml = ""

  data.projects.forEach((project) => {
    
    innerhtml += `<article class="min-w-[310px] space-y-7">
        <div class="flex gap-x-2">
          <span class="h-[22px] w-[22px] shrink-0 rounded-full bg-yellow">
          </span>
          <div class="space-y-3">
            <p class="text-base">
              ${project.desc}
            </p>
            <button class="text-sm">see ${project.category} projects →</button>
          </div>
        </div>
        
        <div class="bg-ivory">
          <img
            class="mx-auto my-auto h-4/5 w-4/5"
            src=${project.image}
            alt=""
          />
        </div>
        </article>`;

    articles.innerHTML= innerhtml;
  });
}

renderArticles();

let projectsarr = [
  {
    name: "Apartment in Holmengrenda",
    images: ["./images/Holmeng1.jpg", "./images/Holmeng2.jpg"],
    location: "Oslo",
  },
  {
    name: "Cabin in the archipelago",
    images: ["./images/archi1.jpg"],
    location: "Agder",
  },
  {
    name: "Detached House in Lillesand",
    images: ["./images/lille1.jpg", "./images/lille2.jpg"],
    location: "Nottoroy",
  },
];

function renderProjects() {
  let projects = document.getElementById("projects");

  function renderImages(stringarr) {
    console.log("");
  }

  projectsarr.forEach((project, index) => {
    //console.log(project.images)
    let article = document.createElement("article");

    //add article class
    index === 0
      ? article.classList.add("proj-lay1")
      : index === 1
        ? ""
        : article.classList.add("proj-lay2");

    //Loop through image array and add image
    project.images.forEach((img) => {
      let div = document.createElement("div");
      div.innerHTML = `<img src=${img} alt="" />`;

      article.append(div);
    });

    //add Title
    let title = document.createElement("p");
    title.classList.add("title", "mt-2");
    title.innerText = `${project.name}`;

    article.append(title);

    //add complete element to DOM
    projects.append(article);
  });
}

renderProjects();

//Render Projects List

function renderProjectsList() {
  let list = document.getElementById("list");

  let innerhtml = "";

  projectsarr.forEach((project) => {
    
    innerhtml += `<li class="border-t border-khaki  flex h-[60px] items-center justify-between">
    <p>${project.name}</p>
    <p class="text-sm">${project.location}</p>
  </li>`;
  });

  list.innerHTML = innerhtml
}

renderProjectsList();
