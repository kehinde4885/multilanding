//import css
import "../output.css";

export const createcomp = () => {
  let header = document.createElement("header");

  header.className = ["content flex h-screen flex-col"];

  header.innerHTML = `<div class="flex basis-full flex-col justify-between pb-8">
  <h1 class="relative top-[25%] font-sig-light text-5xl text-yellow">
    Adapted to your rituals
  </h1>

  <div class="flex flex-col gap-y-7">
    <div class="flex text-sm">
      <button class="car-btn border border-yellow">1</button>
      <button class="car-btn">2</button>
      <button class="car-btn">3</button>
      <button class="car-btn">4</button>
    </div>

    <div class="space-y-4">
      <p class="text-lg text-yellow">Apartment in Holmengrada</p>

      <p class="text-xs uppercase text-white">See project →</p>
    </div>
  </div>
</div>
`;

  console.log(header);

  return header;
};
