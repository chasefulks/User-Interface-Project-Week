
class Dropdown {
    constructor(element) {
      this.element = element;
  
      this.button = this.element.querySelector(".dropdown-button");
  
      this.content = document.querySelector(".dropdown-content");
  
      this.button.addEventListener("click", () => {
          console.log("clicked")
        this.toggleContent();
      });
    }
  
    toggleContent() {
      console.log(this.content)
        console.log(this.content.classList)
      this.content.classList.toggle("dropdown-hidden");
    }
  }
  let dropdowns = document.querySelectorAll(".dropdown");
  dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));



// header
window.onscroll = function() {
  myFunction();
};
var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// email
const logIn = document.querySelector(".footer-all .login");

// Tabs
class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    this.tabItem = new TabItem(this.item);

    this.element.addEventListener("click", () => {
      this.select();
    });
  }

  select() {
    const links = document.querySelectorAll(".tabs-link");

    links.forEach(link => {
      link.classList.remove("tabs-link-selected");
    });

    this.element.classList.add("tabs-link-selected");

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll(".tabs-item");

    items.forEach(item => {
      item.classList.remove("tabs-item-selected");
    });

    this.element.classList.add("tabs-item-selected");
  }
}

let links = document.querySelectorAll(".tabs-link");

links = Array.from(links).map(link => new TabLink(link));

links[0].select();

//   DropDown

