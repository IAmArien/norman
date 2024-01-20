window.onload =() => {

    const setAboutNavActive =(active) => {
      const hover = document.getElementById("navHoverAbout");
      const about = document.getElementById("about");
      const aboutSlideNav = document.getElementById("aboutSlideNav");
      if ((about !== undefined || about !== null) && (hover !== undefined || hover !== null) &&
        (aboutSlideNav !== undefined || aboutSlideNav !== null)
      ) {
        if (active) {
          hover.classList.add("active");
          hover.classList.remove("inactive");
          about.classList.add("active");
          aboutSlideNav.classList.add("active");
        } else {
          hover.classList.remove("active");
          hover.classList.add("inactive");
          about.classList.remove("active");
          aboutSlideNav.classList.remove("active");
        }
      }
    }

    const setWhatIDoNavActive =(active) => {
      const hover = document.getElementById("navHoverWhatIdo");
      const whatIdo = document.getElementById("whatIdo");
      const whatIdoSlideNav = document.getElementById("whatIdoSlideNav");
      if ((whatIdo !== undefined || whatIdo !== null) && (hover !== undefined || hover !== null) &&
        (whatIdoSlideNav !== undefined || whatIdoSlideNav !== null)
      ) {
        if (active) {
          hover.classList.add("active");
          hover.classList.remove("inactive");
          whatIdo.classList.add("active");
          whatIdoSlideNav.classList.add("active");
        } else {
          hover.classList.remove("active");
          hover.classList.add("inactive");
          whatIdo.classList.remove("active");
          whatIdoSlideNav.classList.remove("active");
        }
      }
    }

    const setExperienceNavActive =(active) => {
      const hover = document.getElementById("navHoverExperience");
      const experience = document.getElementById("experience");
      const experienceSlideNav = document.getElementById("experienceSlideNav");
      if ((experience !== undefined || experience !== null) && (hover !== undefined || hover !== null) &&
        (experienceSlideNav !== undefined || experienceSlideNav !== null)
      ) {
        if (active) {
          hover.classList.add("active");
          hover.classList.remove("inactive");
          experience.classList.add("active");
          experienceSlideNav.classList.add("active");
        } else {
          hover.classList.remove("active");
          hover.classList.add("inactive");
          experience.classList.remove("active");
          experienceSlideNav.classList.remove("active");
        }
      }
    }

    const setProjectsNavActive =(active) => {
      const hover = document.getElementById("navHoverProjects");
      const projects = document.getElementById("projects");
      const projectsSlideNav = document.getElementById("projectsSlideNav");
      if ((projects !== undefined || projects !== null) && (hover !== undefined || hover !== null) &&
        (projectsSlideNav !== undefined || projectsSlideNav !== null)
      ) {
        if (active) {
          hover.classList.add("active");
          hover.classList.remove("inactive");
          projects.classList.add("active");
          projectsSlideNav.classList.add("active");
        } else {
          hover.classList.remove("active");
          hover.classList.add("inactive");
          projects.classList.remove("active");
          projectsSlideNav.classList.remove("active");
        }
      }
    }

    const setMoreNavActive =(active) => {
      const hover = document.getElementById("navHoverMore");
      const more = document.getElementById("more");
      const moreDropdown = document.getElementById("moreDropdown");
      const moreSlideNav = document.getElementById("moreSlideNav");
      if ((more !== undefined || more !== null) && (hover !== undefined || hover !== null) &&
        (moreDropdown !== undefined || moreDropdown !== null) &&
        (moreSlideNav !== undefined || moreSlideNav !== null)
      ) {
        if (active) {
          hover.classList.add("active");
          hover.classList.remove("inactive");
          more.classList.add("active");
          moreDropdown.classList.add("active");
          moreSlideNav.classList.add("active");
        } else {
          hover.classList.remove("active");
          hover.classList.add("inactive");
          more.classList.remove("active");
          moreDropdown.classList.remove("active");
          moreSlideNav.classList.remove("active");
        }
      }
    }

    const setSkillsNavActive =(active) => {
      const skills = document.getElementById("skillsNav");
      const skillsSlideNav = document.getElementById("skillsSlideNav");
      if ((skills !== undefined || skills !== null) && (skillsSlideNav !== undefined || skillsSlideNav !== null)) {
        if (active) {
          skills.classList.add("active");
          skillsSlideNav.classList.add("active");
        } else {
          skills.classList.remove("active");
          skillsSlideNav.classList.remove("active");
        }
      }
    }

    const setTestimonialsNavActive =(active) => {
      const testimonials = document.getElementById("testimonialsNav");
      const testimonialsSlideNav = document.getElementById("testimonialsSlideNav");
      if ((testimonials !== undefined || testimonials !== null) && (testimonialsSlideNav !== undefined || testimonialsSlideNav !== null)) {
        if (active) {
          testimonials.classList.add("active");
          testimonialsSlideNav.classList.add("active");
        } else {
          testimonials.classList.remove("active");
          testimonialsSlideNav.classList.remove("active");
        }
      }
    }

    const setContactUsNavActive =(active) => {
      const contactUs = document.getElementById("contactUsNav");
      const contactUsSlideNav = document.getElementById("contactUsSlideNav");
      if ((contactUs !== undefined || contactUs !== null) && (contactUsSlideNav !== undefined || contactUsSlideNav !== null)) {
        if (active) {
          contactUs.classList.add("active");
          contactUsSlideNav.classList.add("active");
        } else {
          contactUs.classList.remove("active");
          contactUsSlideNav.classList.remove("active");
        }
      }
    }

    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const navHeaderContainer = document.getElementsByClassName("nav-header-container");
      if (navHeaderContainer !== undefined || navHeaderContainer !== null) {
        if (navHeaderContainer.length > 0) {
          const navbarContainer = navHeaderContainer[0];
          if (scrollTop >= 100) {
            navbarContainer.classList.add("navbar-shadow-shrink");
          } else {
            navbarContainer.classList.remove("navbar-shadow-shrink");
          }

          const aboutContainer = document.getElementById("aboutContainer");
          const whatIdoContainer = document.getElementById("whatIdoContainer");
          const experienceContainer = document.getElementById("experienceContainer");
          const projectsContainer = document.getElementById("projectsContainer");
          const skillsContainer = document.getElementById("skillsContainer");
          const testimonialsContainer = document.getElementById("testimonialsContainer");

          const isAboutActive = (aboutContainer !== undefined || aboutContainer !== null);
          const isWhatIDoActive = (whatIdoContainer !== undefined || whatIdoContainer !== null);
          const isExperienceActive = (experienceContainer !== undefined || experienceContainer !== null);
          const isProjectsActive = (projectsContainer !== undefined || projectsContainer !== null);
          const isSkillsActive = (skillsContainer !== undefined || skillsContainer !== null);
          const isTestimonialsActive = (testimonialsContainer !== undefined || testimonialsContainer !== null)

          if (isWhatIDoActive && isExperienceActive && isAboutActive &&
              isProjectsActive && isSkillsActive && isTestimonialsActive
          ) {
            const aboutOffset = aboutContainer.getBoundingClientRect();
            const whatIdoOffset = whatIdoContainer.getBoundingClientRect();
            const experienceOffset = experienceContainer.getBoundingClientRect();
            const projectsOffset = projectsContainer.getBoundingClientRect();
            const skillsOffset = skillsContainer.getBoundingClientRect();
            const testimonialsOffset = testimonialsContainer.getBoundingClientRect();

            if (testimonialsOffset.bottom <= 80) {
              setAboutNavActive(false);
              setWhatIDoNavActive(false);
              setExperienceNavActive(false);
              setProjectsNavActive(false);
              setMoreNavActive(true);
              setSkillsNavActive(false);
              setTestimonialsNavActive(false);
              setContactUsNavActive(true);
            } else if (skillsOffset.bottom <= 80) {
              setAboutNavActive(false);
              setWhatIDoNavActive(false);
              setExperienceNavActive(false);
              setProjectsNavActive(false);
              setMoreNavActive(true);
              setSkillsNavActive(false);
              setTestimonialsNavActive(true);
              setContactUsNavActive(false);
            } else if (projectsOffset.bottom <= 80) {
              setAboutNavActive(false);
              setWhatIDoNavActive(false);
              setExperienceNavActive(false);
              setProjectsNavActive(false);
              setMoreNavActive(true);
              setSkillsNavActive(true);
              setTestimonialsNavActive(false);
              setContactUsNavActive(false);
            } else if (experienceOffset.bottom <= 80) {
              setAboutNavActive(false);
              setWhatIDoNavActive(false);
              setExperienceNavActive(false);
              setProjectsNavActive(true);
              setMoreNavActive(false);
              setSkillsNavActive(false);
              setTestimonialsNavActive(false);
              setContactUsNavActive(false);
            } else if (whatIdoOffset.bottom <= 80) {
              setAboutNavActive(false);
              setWhatIDoNavActive(false);
              setExperienceNavActive(true);
              setProjectsNavActive(false);
              setMoreNavActive(false);
              setSkillsNavActive(false);
              setTestimonialsNavActive(false);
              setContactUsNavActive(false);
            } else if (aboutOffset.bottom <= 80) {
              setAboutNavActive(false);
              setWhatIDoNavActive(true);
              setExperienceNavActive(false);
              setProjectsNavActive(false);
              setMoreNavActive(false);
              setSkillsNavActive(false);
              setTestimonialsNavActive(false);
              setContactUsNavActive(false);
            } else {
              setAboutNavActive(true);
              setWhatIDoNavActive(false);
              setExperienceNavActive(false);
              setProjectsNavActive(false);
              setMoreNavActive(false);
              setSkillsNavActive(false);
              setTestimonialsNavActive(false);
              setContactUsNavActive(false);
            }
          }
        }
      }
    }
}