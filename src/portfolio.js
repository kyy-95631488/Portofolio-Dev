/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Hendriansyah Rizky Setiawan",
  logo_name: "Hendriansyah",
  nickname: null,
  subTitle:
    "An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.",
  resumeLink:
    "#",
  portfolio_repository: "https://github.com/kyy-95631488",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/kyy-95631488",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hendriansyah-rizky-setiawan-8b4a68308/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=cerberus404x@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gh0stxpl0it/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using Laravel",
        "⚡ Implementing secure access to MySQL database",
        "⚡ Creating application backend using Laravel",
        "⚡ Building Android applications using Kotlin Jetpack Compose",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin",
          style: {
            color: "#0095D5",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Room Database",
          fontAwesomeClassname: "mdi:database",
          style: {
            color: "#f29400",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend (HTML, CSS, ReactJS)",
      progressPercentage: "85%", // Adjusted proficiency based on frontend skills
    },
    {
      Stack: "Backend (Laravel, NodeJS, PHP)",
      progressPercentage: "75%", // Backend development proficiency
    },
    {
      Stack: "Mobile Development (Kotlin, Jetpack Compose)",
      progressPercentage: "80%", // Mobile development proficiency
    },
    {
      Stack: "Database Management (MySQL, Firebase, Room Database)",
      progressPercentage: "70%", // Database proficiency
    },
    {
      Stack: "Programming Fundamentals",
      progressPercentage: "85%", // General programming skill
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS",
      progressPercentage: "85%", // Proficiency in frontend basics
    },
    {
      Stack: "ReactJS",
      progressPercentage: "80%", // Proficiency in React
    },
    {
      Stack: "Laravel",
      progressPercentage: "75%", // Proficiency in Laravel backend framework
    },
    {
      Stack: "PHP",
      progressPercentage: "80%", // Proficiency in PHP
    },
    {
      Stack: "JavaScript",
      progressPercentage: "85%", // Proficiency in JavaScript
    },
    {
      Stack: "Kotlin (Jetpack Compose)",
      progressPercentage: "80%", // Proficiency in Kotlin for Android development
    },
    {
      Stack: "MySQL",
      progressPercentage: "75%", // Proficiency in MySQL
    },
    {
      Stack: "Firebase",
      progressPercentage: "70%", // Proficiency in Firebase
    },
    {
      Stack: "NodeJS",
      progressPercentage: "60%", // Proficiency in NodeJS
    },
    {
      Stack: "Room Database",
      progressPercentage: "70%", // Proficiency in Room Database for local Android storage
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Git",
      progressPercentage: "80%", // Proficiency in Git for version control
    },
    {
      Stack: "Visual Studio Code",
      progressPercentage: "90%", // Proficiency in VS Code as primary editor
    },
    {
      Stack: "Android Studio",
      progressPercentage: "85%", // Proficiency in Android Studio for Kotlin/Jetpack Compose development
    },
    {
      Stack: "MySQL",
      progressPercentage: "75%", // Proficiency in MySQL database management
    },
    {
      Stack: "Firebase",
      progressPercentage: "70%", // Proficiency in Firebase for backend services
    },
    {
      Stack: "Room Database",
      progressPercentage: "70%", // Proficiency in Room Database for local Android storage
    },
    {
      Stack: "XAMPP",
      progressPercentage: "65%", // Proficiency in XAMPP for local server development
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/tasin95",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ahsanullah University of Science and Technology",
      subtitle: "B.Sc. in Computer Science and Engineering",
      logo_path: "aust_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "March 2016 - January 2021",
      cgpa: "3.855 / 4.00",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning and Full Stack Development.",
        "⚡ Placed 4th in my class.",
        "⚡ Dean's List.",
        "⚡ I was selected for ITEE Training Program which comprised of 20 students in the CSE department.",
        "⚡ Elected as the team leader in all the group projects.",
      ],
      website_link: "http://aust.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TENCON 2021",
      subtitle: "- Nirmal Nair",
      logo_path: "tencon.png",
      certificate_link:
        "https://drive.google.com/file/d/1wLzB3oGkyI4svn09Yor2sAeSF3DbPzeU/view?usp=sharing",
      alt_name: "New Zealand",
      color_code: "white",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/259bcebba35c1ba43934608a5fab9907",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    {
      title: "Python Basics",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/39d3749b06308a77e0f596129029d4fe",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },

    {
      title: "React: The Big Picture",
      subtitle: "- Cory House",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1qcJipEjDB3YanZor4xHpU_9BC73FuCud/view?usp=sharing",
      alt_name: "Pluralsight",
      color_code: "#000000",
    },
    {
      title: "React: Getting Started",
      subtitle: "- Samer Buna",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1LYzFiq0DDYYiDHowG4nbPjgmjCgd3QiV/view?usp=sharing",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Javascript: Getting Started",
      subtitle: "- Mark Zamoyta",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12qhxMM2DGp4YVdG9wcpFDNX7r1bjqumx/view?usp=sharing",
      alt_name: "Pluralsight",
      color_code: "#000000",
    },
    {
      title: "Designing React Components",
      subtitle: "- Peter Kellner",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12f_pCjrOIkx0SMC0mqjnxpMwc9tesQoC/view?usp=sharing",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Managing React State",
      subtitle: "- Cory House",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12f_pCjrOIkx0SMC0mqjnxpMwc9tesQoC/view?usp=sharing",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Building Applications with React and Redux",
      subtitle: "- Cory House",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15UMAKzJq1g1cIrz-sp1Ve0efg-M-hAq1/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Using React Hooks",
      subtitle: "- Peter Kellner",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15mPlLGrjpmkdlf3eyi7B_NLG8Wro5EEg/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Styling React Component",
      subtitle: "- Jake Trent",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14Wvag5M1sGzOlgWCC2PPDX4SsUkiqf72/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Testing React Components",
      subtitle: "- Liam McLennan",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1654lPVh6R1zwSjgZjHV9gz7mgQ7wRmLm/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Server Rendering React Components",
      subtitle: "- Daniel Stern",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/14YrLAmZlGNx2PayR0unlLjMoySL-eRG5/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Optimize Performance React",
      subtitle: "- Hendrik Swanepoel",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15kaZAf9642Kp_LBXYeqiVSzInaz-peAi/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Node.js The Big Picture",
      subtitle: "- Paul O'Fallon",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16jqLAZ4rWiUmITkGGxrZb68Eo5l77UPu/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Node.js Getting Started",
      subtitle: "- Samer Buna",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/173qXhPtqI1zwSzcb487R3Ud_0j13LiDP/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
    {
      title: "Using MongoDB with Node.js",
      subtitle: "- Samer Buna",
      logo_path: "pluralsight_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16za14GrABr8xBM8r8hCtag1fO2faZTD8/view",
      alt_name: "Pluralsight.",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "Fullstack Developer with 2+ years of experience working with React, .Net and NodeJs in an agile environment. Experience in leading a 5 member frontend team to achieve concrete goals on a strict deadline in a large scale project consisting over millions of records of drivers all throughout North America.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Fullstack Developer",
          company: "CodeExcel inc.",
          company_url: "https://codeexcel.ca/",
          logo_path: "codeexcel.jpg",
          duration: "January 2021 - PRESENT",
          location: "Markham, ON, Canada (Remote)",
          description:
            "Worked with 2 Insurance Bureau of Canada and Pixelmask Inc. as a Contractor via CodeExcel. Engaged in 5 successful projects utilizing stacks such as: React, .Net Core, MS SQL Server, Azure Cloud Services (AD, B2C, Key Vault, Blob Storage, Front Door etc). The projects are mainly focused towards the North American Insurance Industry.",
          features: [
            "- Led the frontend team that resulted in a 25% increase in sprint completion rate.",
            "- Implemented Single Sign-On (SSO) via Azure B2C across multiple legacy projects, simplifying user experience and reducing account management, resulting in seamless login with company credentials.",
            "- Uncovered critical project vulnerabilities within 2 days of joining the IBC team, enabling timely remediation and preventing potential losses.",
            "- Slashed development cost by 13% by suggesting and building a SCIM v2 compliant API for automatic user provisioning between IDP and application instead of using third party solution.",
            "- Implemented flexible payment gateway module, empowering clients to easily switch gateways, boosting convenience and expanding options.",
            "- Optimized UI performance by 15% and eliminated code redundancy using React's functional components, custom hooks, and Redux.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          features: [],
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "tasin.png",
    description:
      "I am available on almost every social media platform. Feel free to message me, and I'll respond within 24 hours. I can assist you with Frontend and Backend Development, Android Development, Database Management, and general programming guidance.",
  },
  blogSection: {
    title: "Website",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://callcenterofficial.xyz ",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Banani, Dhaka-1212, Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/yV1Vkp7L3to9qvKX6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1953699363",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
