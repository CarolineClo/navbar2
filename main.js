/*
const Header = () => {
  const [hamClosed, setHamClosed] = useState(true);

  function showHam() {
    const hamb = document.getElementById("hamb");
    const links = document.getElementById("navDesk");

    links.classList.toggle("hidden");

    if (hamClosed) {
      hamb.classList.remove("fa fa-bars");
      hamb.classList.add("fa fa-close");
      setHamClosed(false);
    } else {
      hamb.classList.remove("fa fa_close");
      hamb.classList.add("fa fa-bars");
      setHamClosed(true);
    }
  }
};

Header();
*/

const hamb = document.querySelector("#hamb");
const list = document.querySelector("#navDesk");
const links = document.querySelector(".linkItem");
const icon = document.querySelector(".icon");

function toggleMenu() {
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    hamb.innerHTML = "close";
  } else {
    list.classList.add("hidden");
    hamb.innerHTML = "menu";
  }
}
icon.addEventListener("click", toggleMenu);
