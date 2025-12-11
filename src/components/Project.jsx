import React from "react";
import Card from "./Card";
import Nav from "./Nav";

const Project = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Nav />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10 text-center inline-block">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-10 p-10">
          <Card
            image="https://c8.alamy.com/comp/2RE9BF8/question-marks-seamless-pattern-background-faq-2RE9BF8.jpg"
            title="Quiz App - Quiz App"
            description=" Developed quiz platform using React.js. Implemented event-driven UI,
scoring system, and responsive layouts for seamless user experience."
            tags={["React", "Tailwind"]}
          />

          <Card
            image="https://www.shutterstock.com/image-vector/weather-flat-vector-icons-set-260nw-1935681103.jpg"
            title="Weather App"
            description="Built with HTML, CSS, JS; integrated OpenWeather API for live weather
data. Enhanced UI with responsive design and improved load speed."
            tags={["Html", "API", "CSS", "JS"]}
          />
          <Card
            image="https://external-preview.redd.it/numxUg9xI0_K-Y-5Mmm9lEZTO9UApv4NJCsZRovXXuc.png?format=pjpg&auto=webp&s=581f81ac76191c9cdcf5a4ca72725cfc42769e71"
            title="To-Do List"
            description="Created CRUD-based app with localStorage for persistent data.
Demonstrated DOM manipulation and modular code."
            tags={["Html", "CSS", "JS"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
