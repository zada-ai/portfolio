import React from "react";

export default function FullstackProject() {
  return (
    <section className="bg-black text-white min-h-screen py-16">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Welcome To My Full Stack  Projects
        </h1>


        {/* Description */}
        <p className="text-gray-400 text-center mb-12 text-lg">

          This project is a Full Stack E-commerce Website.
          It includes modern layout, responsive design,
          and clean user interface.

        </p>


        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-6">


          <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-127-0-0-1-8000-buy-2026-02-20-15_57_00 (1).png"
              alt="figma"
              className="w-full"
            />

          </div>



          <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-127-0-0-1-8000-2026-02-20-15_56_12.png"
              alt="figma"
              className="w-full"
            />

          </div>
           <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-127-0-0-1-8000-admin-placed-orders-2026-02-20-15_58_09.png"
              alt="figma"
              className="w-full"
            />

          </div>

           <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-localhost-Ecommerce-site-2026-02-20-22_10_01.png"
              alt="figma"
              className="w-full"
            />

          </div>
           <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-localhost-Ecommerce-site-UserView-AllBracelets-php-2026-02-20-19_36_27 (1).png"
              alt="figma"
              className="w-full"
            />

          </div>
                     <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-localhost-Ecommerce-site-UserView-AllCandle-php-2026-02-20-22_11_59.png"
              alt="figma"
              className="w-full"
            />

          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-localhost-Ecommerce-site-UserView-AllCandle-php-2026-02-20-22_11_59.png"
              alt="figma"
              className="w-full"
            />

          </div>
  <div className="bg-gray-900 rounded-xl overflow-hidden">

            <img
              src="/img for portfolio/screencapture-portfolio-bitzsol-2026-02-20-22_16_15.png"
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

            <ul className="space-y-3 text-gray-400">

            <li>✔ Custom Ecommerce Website</li>

            <li>✔ using LARRAVEL OR PHP</li>

            <li>✔ Modern UI</li>

            <li>✔ Clean Layout</li>

            <li>✔ Professional Colors</li>

          </ul>

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
