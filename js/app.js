/**===========================================================================================================
 * Define Global Variables
 */
//DOM ELements
const ul = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

//End DOM elements .

//1- Using (for of loop) to bulid a Navigation menu dynamically ..
for (each of sections) {
  const sectionName = each.getAttribute("data-nav");
  const sectionLink = each.getAttribute("id");
  ul.innerHTML += `<li><a class = 'menu__link' href="#${sectionLink}" >${sectionName}</a></li>`;
}
//=========================================================================================================================
// 2- smootth scrolling
const navBarLinks = document.querySelectorAll(".menu__link");
navBarLinks.forEach((elem) =>
  elem.addEventListener("click", (event) => {
    event.preventDefault();
    document
      .getElementById(event.target.textContent.replace(/\s/g, "").toLowerCase())
      .scrollIntoView({
        behavior: "smooth",
      });
  })
);

//============================================================================================================
// 3- Add or remove the active class depend on the visibility
//?check if the appearing section is in the top of viewport 
isInViewport = (section) => {
  var bounding = section.getBoundingClientRect();
  return bounding.top <= 100 && bounding.top >= 0;
};

//?create function to remove the active class from the section
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
};

//?switch active class depend on viewport
switchActiveClass = () => {
  for (section of sections) {
    if (isInViewport(section) === true) {
      {
        section.classList.toggle("your-active-class");
      }
    } else {
      removeActiveClass(section);
    }
  }
};

//?event to switch active class while scrolling 
document.addEventListener("scroll", () => {
  switchActiveClass();
});

//==================================================================================================================

/**
 * End Main Functions
 * Begin Events
 *
 */
