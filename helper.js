

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

    //Pick 2 Images at Random

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



export {renderProjects}