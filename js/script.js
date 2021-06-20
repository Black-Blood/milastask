let pageHeaderNavLinks = document.querySelectorAll("[data-section-id]")
let activeLink
document.addEventListener("scroll", () => {
  pageHeaderNavLinks.forEach(link => {
    let section = document.getElementById(link.getAttribute("data-section-id"))

    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (link.classList.contains("active")) {
      activeLink = link
    }

    if (pageYOffset >= (sectionTop - sectionHeight / 2) && !link.classList.contains("active")) {
      activeLink.classList.remove("active")
      activeLink = link
      activeLink.classList.add("active")
    }
  })
})
