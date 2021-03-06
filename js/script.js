/*
*
* Start menu script
*
*/
let sections = document.querySelectorAll("section");
let sectionLinksMenu = document.querySelector(".page-header-nav")
let sectionsPosition = {}

sections.forEach(section => {
  let positionBox = section.getBoundingClientRect()
  let scrollActivePosition = positionBox.top + pageYOffset - screen.availHeight / 3 - 75
  sectionsPosition[scrollActivePosition] = section.id
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

let gallery = document.querySelectorAll(".photo")
let galleryBG = document.querySelector(".photo__active_bg")
let activePhoto

gallery.forEach(photo => {
  photo.addEventListener("click", () => {
    if (!photo.classList.contains("active")) {
      activePhoto = photo
      photo.classList.toggle("active")
    }
  })
})


galleryBG.addEventListener("click", () => {
  activePhoto.classList.remove("active")
})