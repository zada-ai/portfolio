import { useState } from "react";

const Navbar = () => {

const [open,setOpen] = useState(false)

return (

<div className="w-full flex justify-center mt-6">
  

<nav className="
bg-black
text-white
rounded-full
shadow-lg
px-6
py-3
flex
items-center
justify-between
border
border-gray-700
relative
w-[95%]
md:w-auto
">


{/* Logo */}





{/* Desktop Menu */}

<div className="
hidden
md:flex
gap-8
items-center
">

<a href="/#home" className="hover:text-blue-500">
Home
</a>

<a href="/#about" className="hover:text-blue-500">
About
</a>

<a href="/#projects" className="hover:text-blue-500">
Projects
</a>

<a href="/#skills" className="hover:text-blue-500">
Skills
</a>

<a href="/#testimonials" className="hover:text-blue-500">
Testimonials
</a>

<a href="/#contact" className="hover:text-blue-500">
Contact
</a>

</div>



{/* Mobile Button */}

<div className="md:hidden">

<button
onClick={()=>setOpen(!open)}
className="text-3xl"
>

☰

</button>

</div>




{/* Mobile Menu */}

{
open && (

<div className="

fixed
top-0
left-0
w-full
h-screen
bg-black
flex
flex-col
items-center
justify-center
gap-8
text-2xl
z-50
">

<button
onClick={()=>setOpen(false)}
className="absolute top-6 right-6 text-3xl"
>

✕
</button>



<a onClick={()=>setOpen(false)} href="/#home">
Home
</a>

<a onClick={()=>setOpen(false)} href="/#about">
About
</a>

<a onClick={()=>setOpen(false)} href="/#projects">
Projects
</a>

<a onClick={()=>setOpen(false)} href="/#skills">
Skills
</a>

<a onClick={()=>setOpen(false)} href="/#testimonials">
Testimonials
</a>

<a onClick={()=>setOpen(false)} href="/#contact">
Contact
</a>


</div>

)

}


</nav>

</div>

)

};

export default Navbar;