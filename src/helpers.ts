// Helper Functions

async function dataFetching(url:string) {
  let res = await fetch("./data.json");
  let data = await res.json();
  return data;
  console.log(data)
}



export {dataFetching}