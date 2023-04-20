let btn1 = document.getElementsByClassName("btn")[0];
let btn2 = document.getElementsByClassName("btn")[1];
let btn3 = document.getElementsByClassName("btn")[2];
btn1.addEventListener("click", getjoke);
btn2.addEventListener("click", getfox);
btn3.addEventListener("click", getdog);

let jokeres = document.getElementsByClassName("result")[0];

async function getjoke() {
  const jokes = async () => {
    const res = await fetch(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const data = await res.json();
    return data;
  };
  const j = await jokes();
  let jj = j.joke;
  jokeres.innerHTML = jj;
}
async function getfox() {
  const foxes = async () => {
    const res = await fetch("https://randomfox.ca/floof/");
    const data = await res.json();
    return data;
  };
  const f = await foxes();
  let ff = f.image;
  let img1 = document.getElementsByClassName("result")[1];

  img1.style.backgroundImage = "url(" + ff + ")";
}
async function getdog() {
  const dogs = async () => {
    const res = await fetch("https://random.dog/woof.json");
    const data = await res.json();
    return data;
  };
  const d = await dogs();
  let dd = d.url;
  let img2 = document.getElementsByClassName("result")[2];
  img2.style.backgroundImage = "url(" + dd + ")";
}
