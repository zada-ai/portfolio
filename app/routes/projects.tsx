import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";
import React from "react";

const Projects = () => {

  const projects = [
    {
      title: "Fullstack Developer",
      description: "Full online shopping website using Full Stack technologies",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      tags: ["React","Laravel","Next js ","Php","javascript","tailwind css","jquery","Bootstrap","MySQL"],
      livePage: "/projects/fullstack",
      githubLink: "#",
      gradient:"from-blue-500 to-cyan-500"
    },
    {
      title: "WordPress Site",
      description: "Business website with WordPress",
      image:"https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
      tags:["WordPress","PHP","MySQL"],
      livePage: "/projects/wordpress",
      githubLink: "#",
      gradient:"from-green-500 to-teal-500"
    },
    {
      title:"Portfolio Figma Design",
      description:"UI/UX design using Figma",
      image:"https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      tags:["Figma","UI Design","UX Design"],
      livePage: "/projects/figma",
      githubLink: "#",
      gradient:"from-orange-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="bg-black text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              {/* Image */}
              <Link to={project.livePage} className="relative block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition flex justify-center items-center gap-4">
                  <ExternalLink size={20} className="text-white"/>
                  <Github size={20} className="text-white"/>
                </div>
              </Link>

              {/* Text */}
              <div className="p-5">
                <h2 className="text-lg md:text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag,i)=>(
                    <span key={i} className="bg-gray-800 px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;