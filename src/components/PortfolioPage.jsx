import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hi there! I’m a passionate MERN Stack developer, currently pursuing
            a BSc in Computer Science and Engineering at Premier University,
            Chattogram. With my skills in web development, I specialize in
            building websites that are both functional and tailored to your
            specific needs. As a Codeforces{""}
            <a
              className="text-[#4ECCA3] px-2"
              target="_blank"
              href="https://codeforces.com/profile/Hafiz_Sakib"
            >
              Pupil
            </a>
            {""}
            and a LeetCode user with a rating of 1500+, I enjoy solving coding
            challenges and applying problem-solving techniques to my projects.
            I’m a creative thinker with the ability to manage multiple tasks at
            once, always delivering quality results. With a positive attitude
            and a love for learning new technologies, I’m excited to bring your
            ideas to life and create exceptional digital experiences!
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
