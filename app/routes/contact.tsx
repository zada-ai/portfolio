import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {

const [formData,setFormData]=useState({
name:"",
email:"",
subject:"",
message:"",
});


const handleSubmit=(e)=>{
e.preventDefault();
alert("Message Sent Successfully!");

setFormData({
name:"",
email:"",
subject:"",
message:"",
});
};


const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value,
});
};



const contactInfo=[

{
icon:Mail,
title:"Email",
value:"sohaibmehmood0067@gmail.com",
link:"mailto:sohaibmehmood0067@gmail.com"
},

{
icon:Phone,
title:"Phone",
value:"+92 324 5032005",
link:"tel:+923245032005"
},

{
icon:MapPin,
title:"Location",
value:"Pakistan",
link:"#"
}

];



return(

<section
id="contact"
className="bg-black text-white py-16 md:py-24"
>


<div className="max-w-7xl mx-auto px-5">


{/* Title */}

<div className="text-center mb-12">

<h1 className="
text-3xl
md:text-5xl
font-bold
mb-3
">

Contact <span className="text-blue-500">Me</span>

</h1>


<p className="
text-gray-400
text-sm
md:text-base
">

Let's build something amazing together

</p>


</div>




<div className="

grid
grid-cols-1
lg:grid-cols-2
gap-10

">



{/* LEFT */}

<div className="space-y-8">


<div>

<h2 className="
text-2xl
md:text-3xl
font-bold
mb-3
">

Let's Work Together

</h2>


<p className="
text-gray-400
text-sm
md:text-base
">

Need a website or web apps?

I am available for freelance projects.

</p>

</div>



{/* Cards */}

<div className="space-y-4">


{contactInfo.map((item,index)=>(


<a

key={index}

href={item.link}

className="

flex
items-center
gap-4

bg-gray-900
p-4
md:p-5

rounded-xl

hover:bg-gray-800
transition

"

>



<div className="
bg-blue-600
p-3
rounded-lg
">

<item.icon className="w-5 h-5 md:w-6 md:h-6"/>

</div>


<div>

<p className="
text-gray-400
text-sm
">

{item.title}

</p>


<p className="
font-semibold
text-sm
md:text-base
">

{item.value}

</p>

</div>


</a>


))}


</div>


</div>





{/* RIGHT FORM */}

<div>


<form
onSubmit={handleSubmit}
className="space-y-5"
>



<input
type="text"
name="name"
placeholder="Your Name"
value={formData.name}
onChange={handleChange}

className="

w-full

bg-gray-900

p-3
md:p-4

rounded-xl

border
border-gray-700

focus:border-blue-500
outline-none

"
/>




<input
type="email"
name="email"
placeholder="Your Email"
value={formData.email}
onChange={handleChange}

className="

w-full

bg-gray-900

p-3
md:p-4

rounded-xl

border
border-gray-700

focus:border-blue-500
outline-none

"
/>




<input
type="text"
name="subject"
placeholder="Subject"
value={formData.subject}
onChange={handleChange}

className="

w-full

bg-gray-900

p-3
md:p-4

rounded-xl

border
border-gray-700

focus:border-blue-500
outline-none

"
/>




<textarea

name="message"

rows="5"

placeholder="Your Message"

value={formData.message}

onChange={handleChange}


className="

w-full

bg-gray-900

p-3
md:p-4

rounded-xl

border
border-gray-700

focus:border-blue-500
outline-none

"

/>




<button

className="

w-full

bg-blue-600

py-3
md:py-4

rounded-xl

font-semibold

hover:bg-blue-700

transition

flex
justify-center
items-center
gap-2

"

>


<Send size={20}/>

Send Message


</button>



</form>



</div>




</div>


</div>


</section>

);

};

export default Contact;