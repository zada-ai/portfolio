import type { Route } from "./+types/home";
import React, { useState } from "react";
import { FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import Navbar from "./navbar";
import About from "./about";
import Skills from './skills';  // extension .tsx hatao
import Projects from "./projects";
import  Testimonials from "./testimonials";
import Contact from "./contact";
import Footer from "./footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sohaib's Portfolio" },
    { name: "description", content: "Full stack, WordPress and Figma developer." },
  ];
}

// const skillsFullStack = [
//   "React",
//   "Next.js",
//   "PHP",
//   "Laravel",
//   "Tailwind CSS",
//   "HTML",
//   "Bootstrap",
//   "jQuery",
//   "JavaScript",
// ];
// const skillsWordPress = [
//   "Theme Customization",
//   "Plugin Development",
//   "WooCommerce",
//   "Page Builders",
// ];
// const skillsFigma = ["UI Design", "UX Design", "Wireframing", "Prototyping"];

// const projects = {
//   fullstack: [
//     {
//       title: "E-commerce Website",
//       desc: "Built with React, Tailwind CSS & Laravel backend.",
//     },
//   ],
//   wordpress: [
//     {
//       title: "WordPress Website",
//       desc: "Custom theme and plugin development for clients.",
//     },
//   ],
//   figma: [
//     {
//       title: "Landing Page Design",
//       desc: "Click the link to open the Figma prototype.",
//       link: "https://www.figma.com/proto/EXAMPLE",
//     },
//   ],
// };

// const Card = ({ icon, title, skills, onClick }) => (
//   <div
//     onClick={onClick}
//     className="cursor-pointer bg-black shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transform transition-all duration-300"
//   >
//     <div className="text-5xl text-blue-500 mb-4">{icon}</div>
//     <h2 className="text-xl font-bold mb-2">{title}</h2>
//     <ul className="text-gray-700 text-sm space-y-1">
//       {skills.map((skill, index) => (
//         <li key={index}>• {skill}</li>
//       ))}
//     </ul>
//   </div>
// );



export default function Home() {
  const [selected, setSelected] = useState<null | keyof typeof projects>(null);

  return (
    <div className="bg-black flex flex-col items-center">
     
      {/* Intro Section */}
    <section id="home" className="w-full bg-black py-16 md:py-24 text-white">

<div className="max-w-6xl mx-auto px-5">

<div className="
flex 
flex-col-reverse 
md:flex-row 
items-center 
justify-between 
gap-12
">


{/* Left Text */}

<div className="
text-center 
md:text-left
w-full
md:w-1/2
animate-fadeIn
">

<h1 className="
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
font-bold
mb-4
">

Hi, I'm 

<span className="
text-blue-500
ml-2
animate-pulse
">
Sohaib
</span>

</h1>


<h2 className="
text-lg
sm:text-xl
md:text-2xl
font-semibold
mb-4
">
Full Stack Developer
</h2>


<p className="
text-gray-300
mb-6
text-sm
sm:text-base
md:text-lg
leading-relaxed
">

I build modern websites and web apps using
React.js, Next.js, Tailwind CSS, PHP,
Laravel and WordPress.
I also design UI/UX in Figma.

</p>


{/* Skills */}

<div className="
flex 
flex-wrap 
gap-3 
justify-center 
md:justify-start
">

<span className="skill">React JS</span>
<span className="skill">Next JS</span>
<span className="skill">Tailwind</span>
<span className="skill">Laravel</span>
<span className="skill">WordPress</span>
<span className="skill">MySQL</span>
<span className="skill">Supabase</span>
<span className="skill">Figma</span>

</div>

</div>



{/* Image */}

<div className="
w-full
md:w-1/2
flex
justify-center
animate-zoom
">

<img
src="/img for portfolio/portfolio.jpg"
className="
w-40
h-40
sm:w-52
sm:h-52
md:w-64
md:h-64
lg:w-72
lg:h-72
object-cover
rounded-full
border-4
border-blue-500
shadow-2xl
hover:scale-110
duration-500
"
/>

</div>


</div>

</div>
<div className="">
  <About />
</div>
<div className="bg-black">
  <Skills />
</div>
<div className="">
  <Projects />
</div>
<div className="">
  <Testimonials />
</div>
<div className="">
  <Contact />
</div>

</section>
    </div>
  );
}
