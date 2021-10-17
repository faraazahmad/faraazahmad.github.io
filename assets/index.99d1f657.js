import{j as h,F as o,f as m,a as p,b as u,c as g,d as f,r as b,R as x,e as N}from"./vendor.d030f699.js";const v=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}};v();const e=h.exports.jsx,t=h.exports.jsxs;function y(){return t("div",{id:"navbar",className:"p-7 w-full flex justify-between",children:[e("div",{children:e("span",{className:"font-semibold text-terracotta font-logo text-3xl",children:"syed faraaz ahmad"})}),e("div",{}),t("div",{className:"space-x-10 pt-2 font-mono text-sm text-independence",children:[t("a",{href:"#about-me",className:"hover:text-terracotta",children:[e("span",{className:"text-terracotta",children:"01. "}),"About Me"]}),t("a",{href:"#experience",className:"hover:text-terracotta",children:[e("span",{className:"text-terracotta",children:"02. "}),"Experience"]}),t("a",{href:"#projects",className:"hover:text-terracotta",children:[e("span",{className:"text-terracotta",children:"03. "}),"Projects"]}),t("a",{href:"#blog-posts",className:"hover:text-terracotta",children:[e("span",{className:"text-terracotta",children:"04. "}),"Blog Posts"]}),t("a",{href:"#contact-me",className:"hover:text-terracotta",children:[e("span",{className:"text-terracotta",children:"05. "}),"Contact Me"]})]})]})}var w="/assets/person.a593f10b.png";function k(){return e("div",{className:"container px-10 py-40",children:t("div",{className:"flex",children:[t("div",{children:[e("span",{className:"font-mono text-lg block text-independence",children:"Hi! I'm"}),e("span",{className:"text-8xl font-bold block text-terracotta font-logo",children:"Faraaz"}),e("span",{className:"text-4xl font-semibold text-champagne-500 block",children:"I like to build cool projects and write about them."}),e("p",{className:"block my-5 w-3/4",children:"I\u2019m fullstack software engineer that builds engaging, responsive frontends and solid, reliable backends. I love to try new technologies and build cool stuff with them."})]}),e("div",{className:"person",children:e("img",{src:w,alt:"person clip art"})})]})})}var I="/assets/faraaz.f6f37853.jpg";function A(){return e("div",{id:"about-me",className:"container p-10 my-10",children:t("div",{className:"flex",children:[e("div",{className:"p-10 w-1/2",children:e("img",{style:{boxShadow:"-1rem -1rem #F2CC8F",borderRadius:"1rem"},src:I,alt:""})}),t("div",{children:[t("p",{children:[e("span",{className:"font-mono text-3xl text-independence",children:"01."}),e("span",{className:"font-logo text-5xl text-terracotta",children:"\xA0about me"})]}),t("p",{className:"block my-5 w-3/4",children:["Hello! My name is Faraaz and I enjoy building interesting things with new (or old) tech. My interest in software engineering started when in high school I started editing config files in video games \u2014 and in that process made farmers drive expensive sports cars by default and rich people drive tractors! - Fast-forward to today, and so far I\u2019ve had the privilege of working at a\xA0",e("a",{href:"https://prifina.com",target:"_blank",className:"text-terracotta",children:"start-up"})," ","and a"," ",e("a",{href:"https://optum.com",target:"_blank",className:"text-terracotta",children:"large company"}),"."]}),e("p",{className:"block my-5 w-3/4",children:"My main focus these days is building well-tested products while maintaining or introducing development processes that make it easy to do so. Here are a few technologies I\u2019ve been working with recently:"}),t("div",{className:"flex justify-between text-terracotta text-l font-mono w-3/4",children:[e("a",{children:"Javascript"}),e("a",{children:"Python"}),e("a",{children:"Java"}),e("a",{children:"Rust"}),e("a",{children:"React"}),e("a",{children:"Spring Boot"}),e("a",{children:"MySQL"})]})]})]})})}function j(){return t("div",{id:"experience",className:"container p-10 my-10",children:[t("p",{children:[e("span",{className:"font-mono text-3xl text-independence",children:"02."}),e("span",{className:"font-logo text-5xl text-terracotta",children:"\xA0where i've worked"})]}),t("div",{className:"block my-5 w-3/4",children:[t("p",{className:"my-10 bg-white p-10 border-solid border-4 border-champagne-200 hover:border-champagne-500 rounded-lg",children:[t("h3",{className:"text-xl",children:["Software Engineer at"," ",e("a",{target:"_blank",href:"https://optum.com",className:"text-terracotta font-bold",children:"Optum"})]}),e("span",{className:"font-mono",children:"Aug 2020 - Present"}),e("br",{}),e("br",{}),"Optum is a company that builds products and services for UnitedHealth Group, a major health care and insurance company in the USA. ",e("br",{})," ",e("br",{}),t("ul",{className:"list-disc",children:[e("li",{children:"Built Backend with microservice architecture using Spring Boot"}),e("li",{children:"Built micro frontends in React, which share a common session using Redis"}),e("li",{children:"Took initiative to add UI integration testing using Cypress"}),e("li",{children:"Improved frontend performance using Workbox service worker library"}),e("li",{children:"Used code splitting and tree shaking to reduce frontend bundle sizes and improve website load times"}),e("li",{children:"Took initiatives to make the codebase more streamlined by introducing standardised code style to the team"})]})]}),t("p",{className:"my-10 bg-white p-10 border-solid border-4 border-champagne-200 hover:border-champagne-500 rounded-lg",children:[t("h3",{className:"text-xl",children:["Software Engineering Intern at\xA0",e("a",{target:"_blank",href:"https://prifina.com",className:"text-terracotta font-bold",children:"Prifina"})]}),e("span",{className:"font-mono",children:"Jul 2019 - Oct 2019"}),e("br",{}),e("br",{}),"Prifina is a venture-backed company offering resources for developers to build apps that run on top of user-held data.",e("br",{})," ",e("br",{}),t("ul",{className:"list-disc",children:[e("li",{children:"Worked on Data request API for 3rd parties, using Serverless framework on AWS Lambda"}),e("li",{children:"Introduced the need for a GraphQL API for such a project, which has now been released"})]})]})]})]})}var S="/assets/tisp.e79f3d81.png",z="/assets/apiland.4d455b4f.png",P="/assets/loop.1a74b619.png";function F(){return t("div",{id:"projects",className:"container p-10 mt-10",children:[t("p",{children:[e("span",{className:"font-mono text-3xl text-independence",children:"03."}),e("span",{className:"font-logo text-5xl text-terracotta",children:"\xA0some things i've built"})]}),t("div",{className:"flex m-10 justify-between",children:[t("div",{className:"w-1/2",children:[e("p",{children:e("span",{className:"font-logo font-black text-3xl text-independence",children:"tisp (programming language)"})}),e("p",{className:"mr-5 mt-5",children:"Tisp is a functional programming language whose syntax is based on Lisp. It is built using Rust programming language and LLVM (a compiler framework). Unlike popular iterations of Lisp, Tisp is compiled to machine code instead of being interpreted directly."}),e("br",{}),t("p",{children:["If you're interested, I wrote a blog post\xA0",e("a",{className:"text-terracotta",target:"_blank",href:"https://bit.ly/tisp-lang",children:"here"}),"\xA0about how I did it."]}),e("a",{target:"_blank",href:"https://asciinema.org/a/401435",children:e("button",{className:"text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"View Demo"})}),"\u2003",e("a",{target:"_blank",href:"https://github.com/faraazahmad/tisp",children:e("button",{className:"text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"View Repository"})})]}),e("div",{className:"w-1/2",children:e("img",{style:{boxShadow:"1rem -1rem #F2CC8F"},src:S,alt:"tisp code screenshot",className:"rounded-lg"})})]}),t("div",{className:"flex m-10 mt-20 justify-between",children:[e("div",{className:"w-1/2",children:e("img",{style:{boxShadow:"-1rem -1rem #F2CC8F"},src:z,alt:"tisp code screenshot",className:"rounded-lg"})}),t("div",{className:"w-1/2 pl-10",children:[e("p",{children:e("span",{className:"font-logo font-black text-3xl text-independence",children:"API land"})}),e("p",{className:"mt-5",children:"API land is an interative web app to explore freely available public APIs, that you can use to build your side projects. It's built using Vue.js and you can interactively filter the topics on which you want your APIs, for example: Weather, Animals, Health etc."}),e("a",{target:"_blank",href:"https://faraazahmad.github.io/apiland",children:e("button",{className:"text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"View Demo"})}),"\u2003",e("a",{target:"_blank",href:"https://github.com/faraazahmad/apiland",children:e("button",{className:"text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"View Repository"})})]})]}),t("div",{className:"flex m-10 mt-20 justify-between",children:[t("div",{className:"w-1/2",children:[e("p",{children:e("span",{className:"font-logo font-black text-3xl text-independence",children:"loop (text editor)"})}),e("p",{className:"mr-5 mt-5",children:"Loop is a (simple) text editor than runs in your terminal, built in Rust. It can open files, edit, and search through them."}),e("br",{}),e("a",{target:"_blank",href:"https://asciinema.org/a/317801",children:e("button",{className:"text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"View Demo"})}),"\u2003",e("a",{target:"_blank",href:"https://github.com/faraazahmad/loop",children:e("button",{className:"text-white my-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"View Repository"})})]}),e("div",{className:"w-1/2",children:e("img",{style:{boxShadow:"1rem -1rem #F2CC8F"},src:P,alt:"loop editor screenshot",className:"rounded-lg"})})]}),e("p",{className:"p-5 text-center text-l",children:e("a",{href:"https://github.com/faraazahmad",target:"_blank",children:t("button",{className:"text-gray-800 px-7 py-4 bg-champagne-200 rounded hover:bg-champagne-500",children:[e(o,{icon:m,className:"text-xl align-bottom"}),"\u2003 View more projects at Github"]})})})]})}function d(i){const{title:n,link:s,description:l}=i;return e("a",{href:s,target:"_blank",children:t("div",{className:"bg-white m-5 p-5 rounded-lg border-solid border-4 border-champagne-200 hover:border-champagne-500",children:[e("p",{children:e("span",{className:"font-logo text-3xl text-independence",children:n})}),e("p",{className:"mr-5 mt-5",children:l})]})})}function L(){return t("div",{id:"blog-posts",className:"container p-10 pb-20",children:[t("p",{children:[e("span",{className:"font-mono text-3xl text-independence",children:"04."}),e("span",{className:"font-logo text-5xl text-terracotta",children:"\xA0a few of my ramblings"})]}),t("div",{className:"flex pt-10",children:[e(d,{title:"I was bored, so I built a programming language",link:"https://bit.ly/tisp-lang",description:"A fun blog post detailing how I built a programming language in\r the first lockdown of 2020"}),e(d,{title:"Writing your first package in Elixir",link:"https://bit.ly/elixir-pkg-tut",description:"A tutorial on how to build and submit a package for the Elixir programming language"}),e(d,{title:"An introduction to Neural Networks",link:"https://bit.ly/intro-to-nn",description:"Introductory article about Neural Networks for someone that is unfamiliar with the concept"})]})]})}function _(){return e("div",{className:"w-full bg-greensheen-500 text-white",children:t("div",{id:"contact-me",className:"text-center md:container md:mx-auto px-40 py-20",children:[e("h1",{className:"text-7xl font-logo",children:"Get in touch!"}),e("p",{className:"mt-10 text-xl w-1/2 md:mx-auto",children:"My inbox is always open. Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!"}),e("a",{href:"mailto:faraaz98@live.com",children:e("button",{className:"m-10 px-7 py-4 bg-terracotta rounded hover:bg-red-400",children:"Say Hello"})}),t("p",{children:["(Or if you just want to copy the email address)",e("br",{}),e("span",{className:"font-bold",children:"faraaz98@live.com"})]})]})})}function R(){return t("div",{className:"social p-5 pl-10 text-independence",children:[e("span",{className:"block my-5 hover:text-terracotta",children:e("a",{href:"https://linkedin.com/in/syedfaraazahmad",target:"_blank",children:e(o,{icon:p,className:"text-xl align-bottom"})})}),e("span",{className:"block my-5 hover:text-terracotta",children:e("a",{href:"https://twitter.com/Faraaz98",target:"_blank",children:e(o,{icon:u,className:"text-xl align-bottom"})})}),e("span",{className:"block my-5 hover:text-terracotta",children:e("a",{href:"https://github.com/faraazahmad",target:"_blank",children:e(o,{icon:m,className:"text-xl align-bottom"})})})]})}function M(){return e("div",{className:"email text-independence hover:text-terracotta",children:t("a",{href:"mailto:faraaz98@live.com",children:[e(o,{icon:g,className:"text-xl align-bottom"}),e("span",{className:"ml-4",children:"faraaz98@live.com"})]})})}function C(i){const{scrollY:n}=i;return n!==0?t("a",{className:"scroll-top bg-terracotta hover:bg-red-400 text-white px-4 py-2 m-5 rounded-md",href:"#navbar",children:[e(o,{icon:f}),e("span",{className:"top-desc",children:"\u2003Go to Top"})]}):null}function E(){const[i,n]=b.exports.useState(0);return document.addEventListener("scroll",s=>{n(window.scrollY)}),t("div",{className:"bg-eggshell",children:[t("div",{className:"md:container md:mx-auto px-40 bg-eggshell min-h-screen",children:[e(y,{}),e(k,{}),e(A,{}),e(j,{}),e(F,{}),e(L,{})]}),e(_,{}),e(R,{}),e(M,{}),e(C,{scrollY:i})]})}x.render(e(N.StrictMode,{children:e(E,{})}),document.getElementById("root"));