function renderProjects(projects) {
  let projectsNode = [];

  projects.forEach((project, index) => {
    let article = document.createElement("article");

    //add article class

    if (index === 0) {
      article.classList.add("proj-lay1");
    } else if (index === 2) {
      article.classList.add("proj-lay2");
    }

    //Loop through image array and add image

    project.images.forEach((img) => {
      let div = document.createElement("div");
      div.innerHTML = `<img src=${img} alt="" />`;

      article.append(div);
    });

    //add Title
    let title = document.createElement("a");
    title.classList.add("title", "mt-2", "md:text-xl");
    title.href = "/project.html";

    title.innerText = `${project.name}`;

    article.append(title);

    //add complete element to DOM
    projectsNode.push(article);
  })
  

  return projectsNode;
}

async function dataFetching(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

function renderArticles(articlesarr) {
  let innerhtml = "";

  articlesarr.forEach((article) => {
    innerhtml += `<article class="space-y-7 flex-1">
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

        <div class="bg-ivory px-8 py-8">
          <img
            class="w-full"
            src=${article.image}
            alt=""
          />
        </div>
        </article>`;
  });

  return innerhtml;
}

function renderProjectsList(projects) {
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

  return innerhtml;
}

export { renderProjectsList, renderProjects, renderArticles, dataFetching };
