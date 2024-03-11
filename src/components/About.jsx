import React from "react";
import Layout from "./Layout";
const Mainpage = () => {
  return (
    <Layout>
      <div className="flex flex-col text-white px-10 pt-10">
        <p>
        Hi there! I'm Prem Mittal, a passionate web developer currently pursuing my Bachelor's in Technology in Computer Science Engineering in the bustling city of New Delhi. With a keen interest in crafting dynamic and interactive web experiences, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
        </p>
        <br />
        <p>
        Over the course of my journey, I've delved into various projects, honing my skills and bringing creative ideas to life in the digital realm. Looking forward to leveraging technology to make a positive impact!
        </p>
        <h1 className="text-3xl font-bold mt-3">Skills</h1>
        <div className="bg-[#232325] text-7xl rounded-2xl mx-10 my-4 py-5 px-5 space-y-10">
          <div className="flex space-x-4 justify-between">
            <i class="devicon-cplusplus-line"></i>
            <i class="devicon-c-line-wordmark"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
          </div>
          <div className="flex space-x-4 justify-between">
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-express-original-wordmark"></i>

            <i class="devicon-nodejs-plain-wordmark"></i>
            <i class="devicon-tailwindcss-plain-wordmark"></i>
            <i class="devicon-react-original-wordmark"></i>
          </div>
          <div className="flex space-x-4 justify-between">
            <i class="devicon-mongodb-plain-wordmark"></i>
            <i class="devicon-git-plain-wordmark"></i>
            <i class="devicon-visualstudio-plain"></i>
            <i class="devicon-postman-plain"></i>
            <i class="devicon-github-original-wordmark"></i>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mainpage;
