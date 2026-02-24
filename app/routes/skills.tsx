import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90, color: 'bg-blue-500' },
      { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
      { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
      { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Laravel', level: 90, color: 'bg-red-500' },
      { name: 'PHP', level: 88, color: 'bg-indigo-500' },
      { name: 'MySQL', level: 85, color: 'bg-blue-600' },
      { name: 'Supabase', level: 80, color: 'bg-green-500' },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'WordPress', level: 88, color: 'bg-blue-700' },
      { name: 'Figma UI/UX', level: 85, color: 'bg-pink-500' },
      { name: 'Responsive Design', level: 93, color: 'bg-purple-500' },
      { name: 'Git/GitHub', level: 90, color: 'bg-gray-600' },
    ],
  },
];

const Skills = () => {

const [isVisible,setIsVisible] = useState(false)

const sectionRef = useRef<HTMLElement | null>(null)



useEffect(()=>{

if(typeof window === "undefined") return

const observer = new IntersectionObserver(

([entry])=>{

if(entry.isIntersecting){

setIsVisible(true)

}

},

{threshold:0.2}

)

if(sectionRef.current){

observer.observe(sectionRef.current)

}

return ()=>{

if(sectionRef.current){

observer.unobserve(sectionRef.current)

}

}

},[])



return (

<section
id="skills"
ref={sectionRef}
className="py-16 md:py-24 bg-black"
>


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


{/* Heading */}

<div className="text-center mb-12 md:mb-16">

<h2 className="

text-3xl
sm:text-4xl
md:text-5xl
font-bold
text-white
mb-4
">

My

<span className="
bg-gradient-to-r
from-blue-500
to-cyan-400
bg-clip-text
text-transparent
ml-3
">

Skills

</span>

</h2>

<p className="text-gray-400 text-base sm:text-lg">

Technologies I work with

</p>

</div>



{/* Grid */}

<div className="

grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
md:gap-8

">

{skillCategories.map((category,catIndex)=>(

<div

key={catIndex}

className="

bg-gray-900
border
border-gray-800
rounded-2xl
p-6
md:p-8
shadow-xl
hover:scale-105
transition
duration-500

"

style={{

opacity:isVisible?1:0,

transform:isVisible
?"translateY(0px)"
:"translateY(40px)",

transitionDelay:`${catIndex*200}ms`

}}

>


<h3 className="

text-xl
md:text-2xl
font-bold
text-white
mb-6
text-center

">

{category.category}

</h3>



<div className="space-y-5">

{category.skills.map((skill,skillIndex)=>(

<div key={skillIndex}>


<div className="flex justify-between mb-2">

<span className="text-gray-300 font-medium">

{skill.name}

</span>


<span className="text-gray-400">

{skill.level}%

</span>


</div>



<div className="

w-full
bg-gray-800
rounded-full
h-3
overflow-hidden

">

<div

className={`

h-full
${skill.color}
rounded-full
transition-all
duration-1000

`}

style={{

width:isVisible
?`${skill.level}%`
:"0%",

transitionDelay:`${skillIndex*150}ms`

}}

/>


</div>


</div>

))}

</div>



</div>

))}

</div>



</div>


</section>

)

}

export default Skills