// Preparation of Articles

async function dataFetching() {
  let res = await fetch("./data.json");
  let data = await res.json();
  return data;
}

async function renderPage() {
  let data = await dataFetching();


  renderArticles(data.articles);

  renderProjects(data.projects)

  renderProjectsList(data.projects)
}



function renderArticles(articlesarr) {
  let articles = document.getElementById("articles");

  let innerhtml = "";

  articlesarr.forEach((article) => {
    innerhtml += `<article class="min-w-[310px] space-y-7">
        <div class="flex gap-x-2">
          <span class="h-[22px] w-[22px] shrink-0 rounded-full bg-yellow">
          </span>
          <div class="space-y-3">
            <p class="text-base md:text-lg lg:text-xl">
              ${article.desc}
            </p>
            <button class="text-sm">see ${article.category} projects →</button>
          </div>
        </div>
        
        <div class="bg-black">
          <img
            class="mx-auto my-auto h-4/5 w-4/5"
            src=${article.image}
            alt=""
          />
        </div>
        </article>`;

    articles.innerHTML = innerhtml;
  });
}



function renderProjects(projects) {
  let projectswrapper = document.getElementById("projects");

  projects.forEach((project, index) => {
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
    title.classList.add("title", "mt-2", "md:text-xl");
    title.innerText = `${project.name}`;

    article.append(title);

    //add complete element to DOM
    projectswrapper.append(article);
  });
}


//Render Projects List

function renderProjectsList(projects) {
  let list = document.getElementById("list");

  let innerhtml = "";

  projects.forEach((project) => {
    innerhtml += `<li class="py-4 border-t border-khaki  grid grid-cols-3 min-h-[60px] xl:min-h-[92px] items-center  gap-x-9">
    
    <p class="md:text-lg lg:text-xl">${project.name}</p>

    <ul class="flex-row flex gap-x-4 flex-wrap max-w-[calc(4*8ch)]">

    ${categories(project.categories)}
  
    </ul>

    <p class="justify-self-end text-sm">${project.location}</p>
  </li>`;
  });

  function categories(arr) {
    let categories = "";

    arr.forEach((cat) => {
      categories += `<li class="capitalize">${cat}</li>`;
    });

    return categories;
  }

  list.innerHTML = innerhtml;
}


renderPage();