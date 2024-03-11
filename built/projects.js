"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function dataFetching() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch("./data.json");
        let data = yield res.json();
        return data;
    });
}
function renderPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield dataFetching();
        renderProjects(data.projects);
        renderProjectsList(data.projects.slice(2));
    });
}
renderPage();
function renderProjects(projects) {
    let projectswrapper = document.getElementById("projects");
    projects.forEach((project, index) => {
        let article = document.createElement("article");
        //add article class
        if (index === 0) {
            article.classList.add("proj-lay1");
        }
        else if (index === 1) {
            ;
        }
        else if (index === 2 || index === 5) {
            article.classList.add("proj-lay3");
        }
        else if (index === 3) {
            article.classList.add("proj-lay2");
        }
        //Loop through image array and add image
        project.images2.forEach((img) => {
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
