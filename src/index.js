// import functions

import { dataFetching } from "./helper.js";

import { renderArticles } from "./helper.js";

import { renderProjectsList } from "./helper.js";

import { renderProjects } from "./helper.js";

// Preparation of Articles

const url = "/data.json";

async function renderPage() {
  let articles = document.getElementById("articles");

  let list = document.getElementById("list");

  let data = await dataFetching(url);

  let projectswrapper = document.getElementById("projects");

  let restOfProjects = [];

  let highlights = data.projects.filter((element, index, array) => {
    // The Array parameter passed into this function is a shallow copy of the
    // actual array(data.projects) so changes made it it would show up
    // after this block of code runs

    if (element.highlight) {
      //Reduction Process to remove the Item that satifies the Condition from
      // The actual array data.projects*****This is bad Practise as the Filter Function
      // doesnt know that the array is changing
      return element;
    } else {
      restOfProjects.push(element);
    }
  });

  renderProjects(highlights).map((element) => {
    projectswrapper.appendChild(element);
  });

  articles.innerHTML = renderArticles(data.articles);
  list.innerHTML = renderProjectsList(restOfProjects);
}


renderPage();
