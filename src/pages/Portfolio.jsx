import React, { useEffect, useState } from "react"; // Importing useEffect and useState
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectImage1 from "../Image/backgroundimage/junkshooter.png";
import ProjectImage2 from "../Image/backgroundimage/websitejunkshooter.png";
import ProjectVideo1 from "../Video/Arkadia.mp4";
import HTMLImage from "../Image/logo/html.png";
import CSSImage from "../Image/logo/css.png";
import JavaScriptImage from "../Image/logo/javascript.png";
import ReactImage from "../Image/logo/react.png";
import AdobeImage from "../Image/logo/adobephotoshop.png";
import BlenderImage from "../Image/logo/blender.png";
import GithubImage from "../Image/logo/githublogo.png";
import JavaImage from "../Image/logo/javalogo.png";
import UnityImage from "../Image/logo/unity.png";
import PythonImage from "../Image/logo/pythonlogo.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Junk Shooter",
      description:
        "The game is a top-down and educational game. “Junk Shooter” is a game that teaches children especially ages 9-12 about different facts about healthy foods while raising awareness about unhealthy foods. It is a two-dimensional game that is played in landscape. It has controls to maneuver the character, to shoot, and use powerups.The target audience for the game are children ages 9-12. At this young age, the children would be able to know how to differentiate healthy foods from unhealthy foods and their importance and facts.  ",
      imageUrl: ProjectImage1,
    },
    {
      title: "Website For JunkShooter",
      description:
        "Website for Junk Shooter so that they can check the update or new in the game app also for advertising the game.",
      imageUrl: ProjectImage2,
    },
    {
      title: "Arkadia- Mobile Game App",
      description:
        "Arkadia is an educational adventure game set on an island called ‘Arkadia’. The player embarks on a journey, tackling many different challenges and tasks on the island. They get to explore the island and encounter different critically endangered animals that reside there. The player must protect the animals against poachers and their habitats from illegal loggers. The game is designed for children aged 10 to 15 and offers educational content about critically endangered animals in the Philippines. Arkadia provides a fun and educational experience for users. It has elements of 3D and 2D graphics, a fantasy theme, and is available on Android mobile devices.",
      videoUrl: ProjectVideo1,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Set fade animation
    cssEase: "linear", // Set linear easing for smoother animation
  };

  const skills = [
    { name: "HTML", image: HTMLImage },
    { name: "CSS", image: CSSImage },
    { name: "JavaScript", image: JavaScriptImage },
    { name: "React", image: ReactImage },
    { name: "Adobe Photoshop", image: AdobeImage },
    { name: "Blender", image: BlenderImage },
    { name: "Github", image: GithubImage },
    { name: "Java", image: JavaImage },
    { name: "Unity", image: UnityImage },
    { name: "Python", image: PythonImage },
  ];

  // State to track if the animation should be triggered
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    // Trigger the animation after a short delay when the component mounts
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 100);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-8 bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
      <Slider {...sliderSettings}>
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-300 shadow-md rounded-lg p-4">
            {project.videoUrl ? (
              <video controls className="w-full h-auto rounded-lg mb-4">
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-41 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-bold mb-2 text-justify">
              {project.title}
            </h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-8">
        <p className="text-2xl font-bold">More projects coming soon...</p>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Skills</h1>

      <div className="flex justify-center mt-8 flex-wrap">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`max-w-xs w-54 h-54 rounded overflow-hidden shadow-lg m-4 transition duration-300 transform hover:scale-105 ${
              animateSkills ? "animate__animated animate__zoomIn" : ""
            }`}
          >
            <img src={skill.image} alt={skill.name} className="w-full h-48" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{skill.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
