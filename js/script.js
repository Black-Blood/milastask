/*
*
* Start menu script
*
*/
let sections = document.querySelectorAll("section");
let sectionLinksMenu = document.querySelector(".page-header-nav")
let sectionsPosition = {}

sections.forEach(section => {
  sectionsPosition[section.offsetTop - 75 - window.screen.availHeight / 2] = section.id
})

document.addEventListener("scroll", () => {
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

  let activeSectionID
  for (position in sectionsPosition) {
    if (Number(position) <= scrollPosition) {
      activeSectionID = sectionsPosition[position];
    }
  }

  let activeLink = sectionLinksMenu.querySelector(`a[href*=${activeSectionID}]`)

  if (!activeLink.classList.contains("active")) {
    sectionLinksMenu.querySelector("a.active").classList.remove("active")
    activeLink.classList.add("active")
  }
})
/*
*
* End menu script
*
*/