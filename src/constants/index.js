import {
    mobile,
    backend,
    creator,
    web,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Resources",
    },
    {
      id: "work",
      title: "Tools",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Articles",
      icon: web,
    },
    {
      title: "Motivation",
      icon: mobile,
    },
    {
      title: "Meditation",
      icon: backend,
    },
    {
      title: "Yoga and Fitness",
      icon: creator,
    },
    // {
    //   title: "GeetaGPT",
    //   icon: web,
    // },
    // {
    //   title: "Default",
    //   icon: mobile,
    // },
    // {
    //   title: "Default",
    //   icon: backend,
    // },
    // {
    //   title: "Default",
    //   icon: creator,
    // },
  ];

 export const tools =[

    {
      title: "Your Health Assistent",
      icon: backend
    },
    {
      title: "Your Wellness Plans",
      icon: backend
    },
    {
      title: "Sentiment Analysis",
      icon: backend
    },
  ];
  
  export { services,};
  