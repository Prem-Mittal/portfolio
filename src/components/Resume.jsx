import React from "react";
import Layout from "./Layout";
import { FaBookReader } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
const Resume = () => {
  const downloadfile=()=>{
    fetch("latest resume.pdf").then((response) => {
      response.blob().then((blob) => {
          const fileURL =
            window.URL.createObjectURL(blob);
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "PremResume.pdf";
          alink.click();
      });
  });
  }
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex">
          <div className="h-[45%] w-1 rounded-lg bg-white mx-10 mt-[5.1rem]"></div>
          <div className="flex flex-col mx-[-4.2rem] mt-10 ">
            <div className="flex text-3xl font-bold text-white">
              <FaBookReader className="text-4xl mr-2 -mt-[5px] ml-2" />
              Education
            </div>
            <div className="flex mt-5">
              <div className="bg-orange-300 w-3 h-3 rounded-3xl mt-2 ml-5"></div>
              <div className="flex flex-col text-white ml-5">
                <div className="text-xl font-bold">
                  Maharaja Surajmal Institute of Technology
                </div>
                <div className="text-orange-300">2021-2025</div>
                <div>B.Tech in Computer Science and Engineering</div>
              </div>
            </div>
            <div className="flex mt-5">
              <div className="bg-orange-300 w-3 h-3 rounded-3xl mt-2 ml-5"></div>
              <div className="flex flex-col text-white ml-5">
                <div className="text-xl font-bold">Goshen School</div>
                <div className="text-orange-300">2018-2020</div>
                <div>Senior Secondary </div>
              </div>
            </div>
          </div>
          <div className="mt-8 ml-[14rem]">
            <button className="text-white flex border px-3 py-3 bg-gray-700 rounded-2xl font-bold" onClick={downloadfile}><FaFileDownload className="mx-2 text-2xl" />Download Resume</button>
          </div>
        </div>
        <div className="flex">
        <div className="h-[20%] w-1 rounded-lg bg-white mx-10 mt-[3.8rem]"></div>
        <div className="mt-5 mx-[-4.2rem]">
          <div className="flex text-3xl font-bold text-white">
            <FaBookReader className="text-4xl mr-2 -mt-[5px] ml-2" />
            Experience
          </div>
          <div className="flex mt-5">
              <div className="bg-orange-300 w-3 h-3 rounded-3xl mt-2 ml-5"></div>
              <div className="flex flex-col text-white ml-5">
                <div className="text-xl font-bold">
                  Graphic Designer
                </div>
                <div className="text-MD font-bold">
                 IEEE MSIT
                </div>
                <div className="text-orange-300">Dec 2022-present</div>
                <div>Developed various posters and design for College Events</div>
              </div>
            </div>
        </div>
        </div>
       
      </div>
    </Layout>
  );
};

export default Resume;
