async function dataFetching() {
  let res = await fetch("./data.json");
  let data = await res.json();
  return data;
}

async function renderPage() {
  let data = await dataFetching();

  renderProjects(data.projects);
}

renderPage();

function renderProjects(projects) {
  let projectswrapper = document.getElementById("projects");

  projects.forEach((project, index) => {
   
    let article = document.createElement("article");

    //add article class

    if (index === 0) {
      article.classList.add("proj-lay1");
    } else if (index === 1) {
       ;
    } else if (index === 2 || index === 5) {
        article.classList.add("proj-lay3")
    }else if (index === 3) {
        article.classList.add("proj-lay2")
    }

    //Loop through image array and add image

    project.images2.forEach((img) => {
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
