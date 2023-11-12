export const activeSection = () => {
  const path = window.location.pathname;
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".pp-section");
    const navLi = document.querySelectorAll(".nav-menu li");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (
        li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
      ) {
        li.classList.add("active");
      }
    });
  });
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
