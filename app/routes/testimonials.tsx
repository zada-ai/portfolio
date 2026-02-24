import React from "react";

const Testimonials = () => {

const testimonials = [

{
name:"Ali Khan",
role:"Business Owner",
text:"Sohaib built my website professionally. Fast delivery and clean design.",
image:"/img for portfolio/Ali Khan.jfif"
},

{
name:"John Smith",
role:"Startup Founder",
text:"Amazing developer. React and Laravel work was excellent.",
image:"/img for portfolio/John Smith.jfif"
},

{
name:"Ahmed Raza",
role:"Client",
text:"Very responsive developer. Highly recommended.",
image:"/img for portfolio/Ahmed Raza.jfif"
}

];

return (

<section
id="testimonials"
className="bg-black text-white py-16 md:py-24"
>

<div className="max-w-6xl mx-auto px-5">


{/* Title */}

<div className="text-center mb-12">

<h1 className="
text-3xl
md:text-4xl
font-bold
mb-3
">

Testimonials

</h1>

<p className="text-gray-400">

What Clients Say

</p>

</div>



{/* Cards */}

<div className="

grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6

">


{testimonials.map((item,index)=>(

<div

key={index}

className="

bg-gray-900
rounded-2xl
p-6
text-center
shadow-lg
hover:scale-105
transition

"

>


{/* Image */}

<div className="flex justify-center mb-4">

<img

src={item.image}

alt="user"

className="

w-16
h-16
md:w-20
md:h-20
rounded-full
object-cover
border
border-blue-500

"

/>

</div>



{/* Text */}

<p className="
text-gray-400
text-sm
md:text-base
mb-4
">

"{item.text}"

</p>



{/* Name */}

<h3 className="
font-semibold
text-lg
">

{item.name}

</h3>



<p className="
text-gray-500
text-sm
">

{item.role}

</p>


</div>

))}


</div>


</div>

</section>

);

};

export default Testimonials;