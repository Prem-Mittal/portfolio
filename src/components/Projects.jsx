import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "./Layout";
const Projects = () => {
  const [git, setGit] = useState("");
  const [live, setLive] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      title: "Ecommerce App",
      github: "https://github.com/Prem-Mittal/ecommerce-website.git",
      live: "https://eager-crow-trench-coat.cyclic.cloud/",
      image_url: "ecommerce.png",
    },
    {
      id: 2,
      title: "Order Sweets",
      github: "https://github.com/Prem-Mittal/meals-project-react.git",
      live: "https://prem-mittal.github.io/meals-project-react/",
      image_url: "sweets.png",
    },
    {
      id: 3,
      title: "Simon Game",
      github: "https://github.com/Prem-Mittal/simon-game.git",
      live: "https://prem-mittal.github.io/simon-game/",
      image_url: "simon-game.png",
    },
    {
      id: 4,
      title: "Expense Tracker",
      github: "https://github.com/Prem-Mittal/expenses-project.git",
      live: "https://prem-mittal.github.io/expenses-project/",
      image_url: "expense.png",
    },
  ]);
  return (
    <Layout>
      <div className="bg-[#232325] h-[90%]  mx-10 my-10 rounded-3xl flex flex-wrap px-2 py-2 justify-between">
        {data.map((item) => (
          <div
            key={item.id}
            className="px-2 py-3 rounded-xl  flex flex-col w-[30%] h-fit mb-5"
          >
            <div className="bg-white rounded-xl h-[10rem] px-1 py-1">
              <img
                src={item.image_url}
                className="w-full h-full object-contain "
              />
            </div>
            <div className="text-white font-bold text-2xl mx-auto my-3">
              {item.title}
            </div>
            <div className="flex justify-between px-8 space-x-2">
              <Link to={git} target="_blank">
                <button
                  className="border px-2 py-1 rounded-2xl text-white"
                  onClick={() => {
                    setGit(item.github);
                  }}
                >
                  <i className="devicon-github-original mx-1 text-lg"></i>Github
                </button>
              </Link>
              <Link to={live} target="_blank">
                <button
                  className="border px-3 py-1.5 rounded-2xl text-white flex"
                  onClick={() => {
                    setLive(item.live);
                  }}
                >
                  <FaEye className="mx-1 mt-1 text-xl" /> Live
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
