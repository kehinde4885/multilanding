// import functions
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { dataFetching } from "./helpers.js";
// Preparation of Articles
let url = "/data.json";
function renderPage() {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield dataFetching(url);
        console.log(data);
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
            }
            else {
                restOfProjects.push(element);
            }
        });
        renderArticles(data.articles);
        renderProjects(highlights);
        renderProjectsList(restOfProjects);
    });
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

        <div class="bg-ivory">
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
        if (index === 0) {
            article.classList.add("proj-lay1");
        }
        else if (index === 2) {
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
