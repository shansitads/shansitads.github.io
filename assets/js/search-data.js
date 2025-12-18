// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/drive.google.com/file/d/1S_SbXrx1aeO8uk1CGNa8cgNB2S98Vzag/view?usp=drive_link";
          },
        },{id: "post-machine-learning-papers-in-10-minutes",
        
          title: "machine learning papers in 10 minutes",
        
        description: "explaining ML research papers I&#39;ve liked reading",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ML-Papers-In-10-Minutes/";
          
        },
      },{id: "news-i-will-be-at-neurips-in-san-diego-this-upcoming-week-sparkles",
          title: 'I will be at NeurIPS in San Diego this upcoming week :sparkles:',
          description: "",
          section: "News",},{id: "news-i-have-received-an-honorable-mention-for-the-cra-outstanding-undergraduate-researcher-award-raised-hands",
          title: 'I have received an honorable mention for the CRA Outstanding Undergraduate Researcher Award!...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6E%73%69%74%61.%64.%73%68%61%72%6D%61@%76%61%6E%64%65%72%62%69%6C%74.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Y71TiuAAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shansita-das-sharma", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
