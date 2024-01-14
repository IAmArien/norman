window.onload =() => {

    const setNavbarBrandScrollingEffect =(scrollTop) => {
      const navBrand = document.getElementsByClassName("nav-brand")[0];
      if (scrollTop >= 100) {
        navBrand.classList.add("nav-brand-light");
      } else {
        navBrand.classList.remove("nav-brand-light");
      }
    }

    const setNavbarMenusScrollingEffect =(scrollTop) => {
      const about = document.getElementById("about");
      const whatIdo = document.getElementById("whatIdo");
      const experience = document.getElementById("experience");
      const projects = document.getElementById("projects");
      const more = document.getElementById("more");
      const moreDropdown = document.getElementById("moreDropdown");
      if (scrollTop >= 100) {
        about.classList.add("nav-link-light");
        whatIdo.classList.add("nav-link-light");
        experience.classList.add("nav-link-light");
        projects.classList.add("nav-link-light");
        more.classList.add("nav-link-light");
        moreDropdown.classList.add("nav-link-light");
      } else {
        about.classList.remove("nav-link-light");
        whatIdo.classList.remove("nav-link-light");
        experience.classList.remove("nav-link-light");
        projects.classList.remove("nav-link-light");
        more.classList.remove("nav-link-light");
        moreDropdown.classList.remove("nav-link-light");
      }
    }

    const setNavbarMenuButtonScrollingEffect =(scrollTop) => {
      const btn = document.getElementsByClassName("nav-btn-download")[0];
      if (scrollTop >= 100) {
        btn.classList.add("nav-btn-download-light");
      } else {
        btn.classList.remove("nav-btn-download-light");
      }
    }

    const setNavbarMenuSelectedScrollingEffect =(scrollTop) => {
      const divider = document.getElementsByClassName("nav-hover active")[0];
      console.log(divider);
      if (scrollTop >= 100) {
        divider.classList.add("nav-hover-active-light");
      } else {
        divider.classList.remove("nav-hover-active-light");
      }
    }

    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const navHeaderContainer = document.getElementsByClassName("nav-header-container");
      if (navHeaderContainer !== undefined || navHeaderContainer !== null) {
        if (navHeaderContainer.length > 0) {
          const navbarContainer = navHeaderContainer[0];
          // setNavbarMenuSelectedScrollingEffect(scrollTop);
          // setNavbarBrandScrollingEffect(scrollTop);
          // setNavbarMenusScrollingEffect(scrollTop);
          // setNavbarMenuButtonScrollingEffect(scrollTop);
          if (scrollTop >= 100) {
            navbarContainer.classList.add("navbar-shadow-shrink");
          } else {
            navbarContainer.classList.remove("navbar-shadow-shrink");
          }
        }
      }
    }
}