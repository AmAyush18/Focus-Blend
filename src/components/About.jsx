import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="container w-[95%] mx-auto mt-10 mb-10 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">About Serene</h2>

      <p className="text-[#283618] leading-loose text-lg font-semibold text-center">
        "Welcome to Serene – Where Focus Finds Harmony"
      </p>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Our Mission:</h3>
        <p className="text-[#283618] leading-loose">
          At Serene, we believe that the key to unlocking your full potential lies in creating an environment that fosters focus, creativity, and tranquility.
          In a world filled with constant distractions, we have crafted a unique space for coders and corporate professionals to reclaim their productivity and immerse themselves in a symphony of ambient sounds.
        </p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">What Sets Us Apart:</h3>
        <p className="text-[#283618] leading-loose">
          Serene goes beyond the ordinary. We understand that every individual is unique, and so is their preferred work atmosphere.
          With our innovative ambient sound mixer, users can tailor their environment by blending various sounds – be it the gentle pitter-patter of raindrops, the rhythmic hum of a train, the serene whispers of a forest, or the crisp freshness of the air. Your work, your mix, your Serene.
        </p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Key Features:</h3>
        <ul className="list-disc list-inside text-[#283618] leading-loose">
          <li>Immersive Soundscapes: Choose from a diverse array of ambient sounds to create your personalized work sanctuary.</li>
          <li>Mix and Match: Blend different sounds seamlessly to design an atmosphere that suits your mood and enhances your focus.</li>
          <li>Individual Volume Controls: Fine-tune the intensity of each sound, finding the perfect balance for your work session.</li>
          <li>Seamless Integration: Serene effortlessly integrates into your coding or work routine, ensuring a distraction-free experience.</li>
          <li>Cross-Platform Accessibility: Enjoy Serene on your desktop, laptop, or tablet – wherever your work takes you.</li>
        </ul>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Why Serene?</h3>
        <p className="text-[#283618] leading-loose">
          Serene is more than just a tool; it's a mindset. We empower you to take control of your environment, allowing you to curate a space that fuels your creativity and boosts your productivity.
          Whether you're deep into coding or tackling corporate tasks, Serene accompanies you on your journey, creating a serene backdrop for your every endeavor.
        </p>
      </div>

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Serene is Open Source:</h3>
        <p className="text-[#283618] leading-loose">
          Serene is an open-source project, built with collaboration in mind. Join our community of developers, contribute to the codebase, and help shape the future of Serene. We believe in the power of collective innovation and welcome contributors from all backgrounds.
        </p>
        <p className="text-[#283618] leading-loose">
          Check out our GitHub repository at <Link to="https://github.com/AmAyush18/Serene" target="_blank" className="text-[#DDA15E] font-semibold">https://github.com/AmAyush18/Serene</Link>.
        </p>
      </div>

      {/* <div className="my-8">
        <h3 className="text-xl font-bold mb-4">Join the Serene Community:</h3>
        <p className="text-[#283618] leading-loose">
          Embark on a transformative journey with Serene. Join a community of like-minded individuals who appreciate the importance of a focused and harmonious workspace.
          Experience the blend of technology and tranquility, where every click brings you closer to your most productive self.
        </p>
      </div> */}

      <p className="text-[#283618] text-xl font-semibold leading-loose text-center">
        "Welcome to Serene – Where your work finds its calm, and your focus finds its harmony"
      </p>
    </div>
  )
}

export default About