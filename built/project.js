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
        let restOfProjects = [];
        let projectToRender = [];
        data.projects.map((project, index) => {
            if (Object.keys(project).includes("drawings")) {
                projectToRender.push(project);
                //projectToRender = project;
            }
            else {
                restOfProjects.push(project);
            }
        });
        fillProject(...projectToRender);
        renderProjectsList(restOfProjects);
        //fillProject(projectToRender);
    });
}
renderPage();
function fillProject(project) {
    const title = document.getElementById("title");
    const headerImg = document.getElementById("headerImg");
    const categories = document.getElementById("categories");
    const location = document.getElementById("location");
    const architect = document.getElementById("architect");
    const desc = document.getElementById("desc");
    const projectImgs = document.getElementById("projectImgs");
    const drawings = document.getElementById("drawings");
    //Set Title
    title.textContent = project.name;
    //Set Img
    headerImg.src = project.headerImg;
    project.categories.forEach((cat) => {
        let li = document.createElement("li");
        li.classList.add("border", "border-khaki", "px-6", "py-[6px]", "text-sm", "text-black");
        li.textContent = cat;
        categories.append(li);
    });
    location.textContent = project.location;
    architect.textContent = `Architect:${project.architect}`;
    desc.innerText = `${project.desc1} 
    
    ${project.desc2}`;
    project.projectImgs.forEach((imgString, index) => {
        let img = document.createElement("img");
        index === 3 || index === 8 ? img.classList.add("ml-auto") : "";
        img.src = imgString;
        projectImgs.appendChild(img);
    });
    project.drawings.forEach((imgSrc) => {
        let img = document.createElement("img");
        img.classList.add("min-w-[85%]", "rounded-lg", "border", "border-black", "md:min-w-[45%]");
        img.src = imgSrc;
        drawings.appendChild(img);
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
