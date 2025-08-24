import { useState } from "react";
import { FaInfoCircle, FaReact, FaPython, FaGithubSquare, FaLocationArrow } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { GiMaterialsScience } from "react-icons/gi";
import { SiNextdotjs, SiRedux, SiSass, SiJavascript, SiFlask, SiOpencv, SiTensorflow } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma, IoLogoNodejs } from "react-icons/io5";
import { SiExpress, SiCloudinary } from "react-icons/si";

const projects = [
  {
    name: "Human Activity Detection in Superstore (FYP)",
    image: "/FYP.png",
    Glink: "https://github.com/ahmadullah11/human-activity-detection-superstore.git",
    technologies: [
      { icon: <FaPython className="text-blue-500" />, name: "Python" },
      { icon: <SiFlask className="text-gray-700" />, name: "Flask" },
      { icon: <SiOpencv className="text-blue-700" />, name: "OpenCV" },
      { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow/PyTorch" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js / Next.js" },
      { icon: <RiTailwindCssFill className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    ],
  },
  {
    name: "DARK HAIR SALON",
    image: "/darkINK.png",
    Glink: "https://github.com/ahmadullah11/dark-ink-hair-salon.git",
    Wlink: "https://github.com/ahmadullah11/dark-ink-hair-salon.git",
    technologies: [
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiExpress className="text-yellow-400" />, name: "Express.js" },
      { icon: <IoLogoNodejs className="text-green-500" />, name: "Node.js" },
      { icon: <GiMaterialsScience className="text-blue-500" />, name: "Material UI" },
      { icon: <RiTailwindCssFill className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    ],
  },
  {
    name: "AML FOR CRYPTO",
    image: "/AML.png",
    Glink: "https://github.com/ahmadullah11/trust-aml-ui.git",
    Wlink: "https://github.com/ahmadullah11/trust-aml-ui.git",
    technologies: [
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <IoLogoFigma className="text-pink-500" />, name: "Figma" },
      { icon: <RiTailwindCssFill className="text-blue-500" />, name: "Tailwind CSS" },
      { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    ],
  },
  {
    name: "OAKRIDGE DATASET",
    image: "/dataset.png",
    Wlink: "https://github.com/ahmadullah11/real-estate-datasets-ui.git",
    technologies: [
      { icon: <GiMaterialsScience className="text-blue-500" />, name: "Material UI" },
      { icon: <FaReact className="text-blue-500" />, name: "React.js" },
      { icon: <SiSass className="text-pink-500" />, name: "SCSS" },
      { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
    ],
  },
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const startIndex = page * itemsPerPage;
  const displayedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen dark:bg-gray-900 bg-gray-200 py-16 px-10 text-center">
      <h2 className="text-4xl flex items-center justify-center gap-3 font-extrabold font-sans mb-8 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent">
        <GrSystem className="text-orange-500 font-extrabold text-4xl font-mono animate-bounce transition-all duration-300 ease-in-out group-hover:translate-y-1" />
        Projects
      </h2>

      <div className="space-y-8 max-w-4xl mx-auto">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="text-white w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-yellow-500 shadow-gray-500"
          >
            <div className="flex flex-col md:flex-row items-center w-full">
              <img
                src={project.image}
                alt={project.name}
                className="w-full md:w-1/3 rounded-lg shadow-md object-cover max-h-64"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-left w-full">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-2xl font-bold text-yellow-500 font-sans">{project.name}</h3>
                  <FaInfoCircle className="text-xl cursor-pointer text-gray-400 dark:text-gray-200 hover:text-yellow-400" />
                </div>
                <p className="mt-2 text-sm opacity-80 font-mono">Website</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex font-mono items-center gap-2 px-3 py-1 my-0.5 bg-gray-300 dark:bg-gray-600 text-white rounded-full text-xs font-semibold shadow-md shadow-gray-400"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  {project.Glink && (
                    <a
                      href={project.Glink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex lg:text-base text-[.6rem] items-center lg:px-4 px-2 gap-2 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-mono text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                      <FaGithubSquare className="lg:text-2xl text-xl animate-bounce" /> Go to Github
                    </a>
                  )}
                  {project.Wlink && (
                    <a
                      href={project.Wlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:text-base text-[.6rem] inline-flex items-center lg:px-4 px-2 py-2 bg-transparent hover:bg-gray-700 shadow-md border border-yellow-400 text-yellow-400 font-bold rounded-lg relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-yellow-500 to-orange-500 hover:text-white hover:scale-105 hover:rotate-6"
                    >
                      Go to {project.name} <FaLocationArrow className="lg:ml-2 ml-1 text-xl animate-bounce" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center space-x-3">
        {Array.from({ length: Math.ceil(projects.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`px-4 py-2 rounded-full ${
              page === index
                ? "bg-gradient-to-t from-yellow-500 to-orange-500 text-black"
                : "dark:bg-gray-600 bg-gray-400 text-white"
            } hover:bg-gradient-to-t from-yellow-500 to-orange-500 transition`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
