import React from "react";
import Layout from "./Layout";
const Contact = () => {
  return (
    <Layout>
      <div>
        <form action="https://api.web3forms.com/submit" method="POST" className="bg-[#232325] shadow-md border mt-10 mx-10 rounded-2xl px-8 pt-6 pb-8">
        <input type="hidden" name="access_key" value="fa16cde8-d9d7-4333-a8d8-75cec2240988"/>
          <div className="mb-4 flex justify-between ">
            <input
              className="  mx-2 w-full border rounded py-2 px-3 bg-inherit text-white"
              type="text"
              name="Name"
              placeholder="Username"
            />
            <input
              className="  mx-2 w-full border rounded py-2 px-3 bg-inherit text-white "
              type="email"
              name="Email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6 px-2">
            <textarea
              className="border bg-inherit rounded w-full py-5 px-3 h-[25%]  text-white mb-3"
              cols="30"
              name="Message"
              rows="10"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <button
            className="bg-orange-400 justify-end hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
