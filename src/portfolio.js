/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Mutlu's Portfolio",
  description:
    "A Data Scientist with a background in Industrial Engineering and a master's degree in Data Science, adept at leveraging advanced analytical techniques to derive actionable insights and solve complex business problems.",
  og: {
    title: "Mutlu Soruklu Portfolio",
    type: "website",
    url: "https://msoruklu.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Mutlu Soruklu",
  logo_name: "MutluSoruklu",
  subTitle:
    "A Data Scientist with a background in Industrial Engineering and a master's degree in Data Science, adept at leveraging advanced analytical techniques to derive actionable insights and solve complex business problems.",
  resumeLink:
    "https://github.com/msoruklu/portfolio/blob/master/src/assests/files/MutluSoruklu_CV.pdf",
  portfolio_repository: "https://github.com/msoruklu/msoruklu.github.io",
  githubProfile: "https://github.com/msoruklu",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/msoruklu",
  // linkedin: "https://www.linkedin.com/in/mutlu-soruklu-888755171/",
  // gmail: "mutlusoruklu@gmail.com",

  {
    name: "Github",
    link: "https://github.com/msoruklu",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mutlu-soruklu-888755171/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:mutlusoruklu@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/mtlsrkl",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "mdi:language-r",
          style: {
            backgroundColor: "transparent",
            color: "#0e81ec",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Sabanci University",
      subtitle: "MSc Data Science",
      logo_path: "sabanci_logo.svg",
      alt_name: "Faculty of Engineering and Natural Sciences",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have studied on Statistical Analysis, Machine Learning, Deep Learning, Convex Optimization",
        "⚡ My thesis area was on Computational Social Science on social media data analysis",
      ],
      website_link: "https://fens.sabanciuniv.edu",
    },
    {
      title: "Sabanci University",
      subtitle: "BSc Industrial Engineering",
      logo_path: "sabanci_logo.svg",
      alt_name: "Faculty of Engineering and Natural Sciences",
      duration: "2015 - 2020",
      descriptions: [
        "⚡ I have studied Industrial Engineering with main topics of Statistics, Operations Research, Linear Algebra and Data Science",
      ],
      website_link: "https://fens.sabanciuniv.edu",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Scientist",
          company: "Afiniti",
          company_url: "https://www.afiniti.com/",
          logo_path: "afiniti_logo.png",
          duration: "July 2022 - Present",
          location: "Istanbul, Turkey",
          description:
            "I'm working as Data Scientist in R&D team to build decisioning product that focuses on offer recommendations.",
          color: "#0879bf",
        },
        {
          title: "Data Scientist",
          company: "iLab",
          company_url: "https://www.ilab.com.tr/",
          logo_path: "ilab_logo.jpeg",
          duration: "Dec 2021 - July 2022",
          location: "Istanbul, Turkey",
          description:
            "I have worked on a project which aims to measure effects of commercial activities using causal analysis.",
          color: "#9b1578",
        },
        {
          title: "Teaching Assistant",
          company: "Sabanci University",
          company_url: "https://www.ilab.com.tr/",
          logo_path: "sabanci_logo.svg",
          duration: "Sep 2020 - June 2022",
          location: "Istanbul, Turkey",
          description:
            "I have worked as teaching assistant during my masters studies to assist for undergraduate classes for following courses: CS210 Introduction to Data Science, CS306 Database Systems, CS201 Introduction to Computing: C++ intro course",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Production Planning Intern",
          company: "ASELSAN",
          company_url: "https://www.aselsan.com/",
          logo_path: "aselsan_logo.svg",
          duration: "Nov 2019 - July 2020",
          location: "Ankara, Turkey",
          description:
            "I have worked at production planning department in Turkey's leading defence company.",
          color: "#000000",
        },
        {
          title: "Business Analyst",
          company: "IBTECH",
          company_url: "https://www.ibtech.com.tr",
          logo_path: "ibtech_logo.png",
          duration: "Oct 2019 - Nov 2019",
          location: "Kocaeli, Turkey",
          description:
            "I have took part in the testing procedures of automated teller machine (ATM) screen implementations.",
          color: "#ee3c26",
        },
        {
          title: "Product Management Intern",
          company: "Multinet Inventiv",
          company_url: "https://inventiv.com.tr/",
          logo_path: "multinet_logo.svg",
          duration: "July 2019 - Aug 2019",
          location: "Istanbul, Turkey",
          description:
            "I have worked on persona creation for custom app that tries to give premium dining services for its customers.",
          color: "#ee3c26",
        },
        {
          title: "Production Planning Intern",
          company: "ASELSAN",
          company_url: "https://www.aselsan.com/",
          logo_path: "aselsan_logo.svg",
          duration: "June 2019 - July 2019",
          location: "Ankara, Turkey",
          description:
            "I have worked on statistical simulation of daily warehouse operations to analyze the order preparation times.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Global Volunteer",
          company: "AIESEC",
          company_url: "https://aiesec.org/",
          logo_path: "aiesec_logo.svg",
          duration: "June 2017 - Aug 2017",
          location: "Craiova, Romania",
          description:
            "Contributing to English lessons to underprivileged Romanian kids with the cooperation of their teachers.",
          color: "#4285F4",
        },
        {
          title: "Volunteer",
          company: "AIESEC Istanbul Asia Branch",
          company_url: "https://aiesec.org/",
          logo_path: "aiesec_logo.svg",
          duration: "Oct 2016 - May 2020",
          location: "Istanbul, Turkey",
          description:
            "Attended the activities and projects of the AIESEC office.",
          color: "#D83B01",
        },
        {
          title: "Sabanci University Social Awareness Projects",
          company: "CIP Office",
          company_url:
            "https://www.sabanciuniv.edu/en/academic/support-education-and-career/civic-involvement-projects-cip",
          logo_path: "sabanci_logo.svg",
          duration: "Jan 2016 - June 2016",
          location: "Istanbul, Turkey",
          description:
            "Mentorship for primary school kids with CIP volunteer program",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_image.jpg",
    description: "Reach me for inquiries",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "Atasehir / Istanbul / Turkey",
    locality: "Istanbul",
    country: "TR",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/JhdDKapr9sKe1PYo9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
