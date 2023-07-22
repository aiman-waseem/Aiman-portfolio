import images from "./images";

 export const techstack= [
    {img: images.html, tech: "HTML"},
    {img:images.css, tech:"CSS"},
    {img: images.javascript, tech:"JavaScript"},
    {img: images.react, tech:"REACT"},
    {img: images.ExpressJS, tech:"ExpressJS"},
    {img: images.Nextjs, tech:"NextJS"},
    {img: images.node, tech:"NodeJS"},
    {img: images.firebase, tech: "FireBase"},
    {img: images.python, tech:"Python"},
    {img: images.redux, tech:"Redux"}
 ]

    export const certificates = [
        {index:0,name:"AI For Everyone", platform:"Coursera", verify:"https://www.coursera.org/account/accomplishments/certificate/YFMQTUZCTLWY"},
        {index:1,name:"Introduction To CyberSecurity", platform:"SMIT", verify:"https://drive.google.com/file/d/1hbhG5GJsbFA5BbJJsnI7F4uqOrlhm810/view?usp=sharing"},
        {index:2,name:"Create a Website Using Wordpress", platform:"Coursera",verify:"https://www.coursera.org/account/accomplishments/certificate/P4KP8NYQYUAA"}
        
    ]

    export const Portfolio = [
        {
            id: 1,
            title: "Pokedex",
            img: "https://raw.githubusercontent.com/aiman-waseem/bytewise-tasks/master/pokedex/output.PNG",
            description: 'Pokemon app',
            tags: ['REACT'],
            projectLink: 'https://pokedex-pokemon-website.netlify.app/',
            codeLink: 'https://github.com/aiman-waseem/bytewise-tasks/tree/master/pokedex'
        },
        {
            id: 2,
            title: "Expense Tracker",
            img: "https://raw.githubusercontent.com/aiman-waseem/bytewise-tasks/master/pokedex/output.PNG",
            description: 'Tracks total balance and income',
            tags: ['REACT'],
            projectLink: 'https://pokedex-pokemon-website.netlify.app/',
            codeLink: 'https://github.com/aiman-waseem/expense-tracker-app',
        }
    ]

    export const Experiences = [
        {title:"Virtual Internship- Interns.pk", Skills:"HTML,CSS,Javascript,Wordpress"},
        {title: "Bytewise Fellowship", Skills: "React/NextJS"}
    ]

    export const ProjectsList =[
        {title:"Pokedex App",
         img:"https://raw.githubusercontent.com/aiman-waseem/bytewise-tasks/master/pokedex/output.PNG",
         sourceCode: "https://github.com/aiman-waseem/bytewise-tasks/tree/master/pokedex",
         liveLink:"https://pokedex-pokemon-website.netlify.app/" 
       },
       {title:"Expense Tracker app",
        img:"https://raw.githubusercontent.com/aiman-waseem/expense-tracker-app/master/SS2.PNG",
       sourceCode: "https://github.com/aiman-waseem/expense-tracker-app",
       liveLink:"https://balance-management.netlify.app/" 
     },
     {title:"Form (NextJS) ",
        img:"https://raw.githubusercontent.com/aiman-waseem/bytewise-tasks/master/form-nextjs-tailwindcss/image.png",
       sourceCode: "https://github.com/aiman-waseem/bytewise-tasks/tree/master/form-nextjs-tailwindcss",
       liveLink:"https://form-nextjs-tailwindcss.netlify.app/" 
     },
     {title:"Form Validation (React-hook-form)",
        img:"https://raw.githubusercontent.com/aiman-waseem/bytewise-tasks/master/react-hook-form/image.png",
       sourceCode: "https://github.com/aiman-waseem/bytewise-tasks/tree/master/react-hook-form",
       liveLink:"https://form-using-react-hook-form.netlify.app/" 
     },
     
     
    ]
