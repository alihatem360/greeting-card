import React, { useEffect } from "react";
import imageEid from "../assets/eid.png";
import imageEid2 from "../assets/eid (1).png";
import imageEid3 from "../assets/eid (2).png";
import imageEid4 from "../assets/eid (3).png";
import html2canvas from "html2canvas";
import BackCountainer from "./BackCountainer";
function Home({ handlePartyModeClick }) {
  const [name, setName] = React.useState("اسمك");
  const [message, setMessage] = React.useState("");
  const [background, setBackground] = React.useState("bg-gradient-135");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGenerateImage = () => {
    const element = document.getElementById("image-container");

    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });

    handlePartyModeClick();
  };

  return (
    <div class="flex justify-center items-center h-screen flex-wrap  min-h-screen min-w-0 mx-10 px-10 ">
      <div class="text-center flex-1">
        <div
          class={`shadow-md rounded flex flex-col my-2 flex-1 px-8 py-6 text-center h-96 items-center justify-center relative  ${background} `}
          id="image-container"
        >
          <img
            src={imageEid}
            alt="eid"
            class="absolute top-0 w-12 sm:w-10 md:w-16 lg:w-20 xl:w-15 right-32 rotate-[25deg]"
          />
          <img
            src={imageEid2}
            alt="eid"
            class="absolute w-100 h-100 top-0 right-0 rotate-[25deg] sm:rotate-[15deg]"
          />
          <img
            src={imageEid3}
            alt="eid"
            class="absolute top-0 left-0 rotate-[-25deg]"
          />
          <img
            src={imageEid4}
            alt="eid"
            class="absolute top-20 left-10 rotate-[-15deg] sm:rotate-[-25deg]"
          />
          <h1 class="text-2xl font-bold sm:text-3xl my-8 text-primary z-[2]">
            عيدكم مبارك
          </h1>
          <p class="text-sm text-secondary text-right">
            أتمنى لأخي الغالي{" "}
            <span class="text-primary font-bold FONT-ARABIC">{name}</span> عيد
            مبارك وكل عام وأنتم بألف خير
          </p>
          <p class="text-sm text-secondary text-right mt-4">{message}</p>
        </div>

        <BackCountainer background={background} setBackground={setBackground} />
      </div>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 flex-1 mx-4">
        <input
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder-right mt-4 p-4"
          placeholder="ادخل اسمك"
          onChange={handleNameChange}
          value={name}
        />
        <textarea
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-right placeholder-right mt-4 h-40"
          placeholder="ادخل رسالتك"
          onChange={handleMessageChange}
          value={message}
        ></textarea>

        <button
          class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring mt-4"
          type="button"
          onClick={handleGenerateImage}
        >
          تنزيل الصورة <i class="ml-2 text-sm fas fa-download"></i>
        </button>
      </div>
    </div>
  );
}

export default Home;
