import React, { useState, useEffect } from "react";
import Nav from "./Nav";

const Home = () => {
  const greetings = ["Hello 👋", "Namaste 🙏", "Hola ✨", "Bonjour 🌟"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % greetings.length);
        setFade(true); 
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Nav />

      <div className="pt-20 flex flex-col items-center gap-15 max-w-3xl px-4 text-center">
        <h2
          className={`text-6xl font-bold transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {greetings[index]}
        </h2>

        <p className="text-2xl leading-relaxed">I’m {" "}
          <span className="text-3xl font-bold">
            Akansha Gusain — a Frontend Developer
          </span>{" "}
          building clean, modern, and meaningful digital experiences.
          Based in the beautiful hills of Dehradun, Uttarakhand, I’m currently a
          Software Engineer at 12th Wonder, leveling up my frontend expertise
          while exploring new technologies to grow as a versatile developer.
        </p>
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-4 w-full">
            <a href="https://www.instagram.com/akansha_7385?igsh=bG4xbTEyOTJtbjZs
 ">
              <img
                className="h-6 w-6 hover:color-green-200"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqmnrSZ9QfciXhD4iQCUV2zc1TM6CwWU225Q&s"
                alt=""
              />
            </a>

            <a href="https://www.linkedin.com/in/akansha-gusain-0a2888222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <img
                className="h-6 w-6"
                src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
                alt=""
              />
            </a>

            <a href="https://github.com/Akansha7385">
              <img
                className="h-6 w-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtGg2RJvvrzmUi4BXEWzpEwLc2XkJndppcgQ&s"
                alt=""
              />
            </a>

            <a href="mailto:gusainakansha2003@gmail.com">
              <img
                className="h-6 w-6"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQipCRWYSq7Zuh-WlG0JuIKEeLSrzZSTPGWJg&s"
                alt=""
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
