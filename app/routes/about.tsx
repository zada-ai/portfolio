import React from "react";

const About = () => {
  return (

<section id="about" className="w-full bg-black py-16 md:py-24">

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


{/* Heading */}

<h1 className="
text-3xl
sm:text-4xl
md:text-5xl
font-bold
text-white
text-center
mb-12
">

About Me

</h1>



<div className="
flex
flex-col
md:flex-row
items-center
gap-10
md:gap-16
">


{/* Image */}

<div className="
w-full
md:w-1/2
flex
justify-center
">

<img
src="/img for portfolio/portfolio.jpg"
alt="Sohaib"
className="
w-40
h-40
sm:w-52
sm:h-52
md:w-64
md:h-64
rounded-2xl
object-cover
shadow-2xl
border
border-gray-700
hover:scale-105
transition
duration-300
"
/>

</div>



{/* Text */}

<div className="
w-full
md:w-1/2
text-center
md:text-left
space-y-6
">


<h2 className="
text-2xl
sm:text-3xl
md:text-4xl
font-semibold
text-white
">

I'm Sohaib

</h2>



<p className="
text-gray-300
text-base
sm:text-lg
leading-relaxed
">

I am a Full Stack Developer with experience in modern web development.
I build websites using React.js, Next.js, Tailwind CSS and Laravel.

</p>



<p className="
text-gray-300
text-base
sm:text-lg
leading-relaxed
">

I also work with WordPress, MySQL and Supabase.
I design UI/UX in Figma.

</p>



{/* Buttons */}

<div className="
flex
flex-wrap
gap-4
justify-center
md:justify-start
">

<a
href="#contact"
className="
px-6
py-3
bg-blue-600
rounded-xl
text-white
font-medium
hover:bg-blue-700
transition
"
>

Hire Me

</a>



<a
href="#projects"
className="
px-6
py-3
border
border-gray-600
rounded-xl
text-white
font-medium
hover:bg-gray-800
transition
"
>

View Projects

</a>


</div>


</div>



</div>


</div>

</section>

  );
};

export default About;