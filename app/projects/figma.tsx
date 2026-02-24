import React from "react";

export default function FigmaProject() {
  return (
    <section className="bg-black text-white min-h-screen py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome To My Figma Project
        </h1>


        {/* Description */}
        <p className="text-gray-400 text-center mb-12 text-lg">

          This project is a Portfolio UI Design created in Figma.
          It includes modern layout, responsive design,
          and clean user interface.

        </p>


        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-6">


          <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/Screenshot (495).png"
              alt="figma"
              className="w-full"
            />

          </div>
 <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/Screenshot (496).png"
              alt="figma"
              className="w-full"
            />

          </div>
           <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/Screenshot (497).png"
              alt="figma"
              className="w-full"
            />

          </div>
           <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/Screenshot (498).png"
              alt="figma"
              className="w-full"
            />

          </div>



         

        </div>


        {/* Features */}

        <div className="mt-16">

          <h2 className="text-2xl font-bold mb-6">

            Project Features

          </h2>


          <ul className="space-y-3 text-gray-400">

            <li>✔ Custom Ecommerce Website</li>

            <li>✔ using LARRAVEL OR PHP</li>

            <li>✔ Modern UI</li>

            <li>✔ Clean Layout</li>

            <li>✔ Professional Colors</li>

          </ul>


        </div>

        {/* Back Button */}

        <div className="mt-12 text-center">

          <a
            href="/"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >

            Back To Home

          </a>

        </div>



      </div>

    </section>
  );
}
