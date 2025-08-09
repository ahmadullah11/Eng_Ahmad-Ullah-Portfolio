// Top imports (same as your code)
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGit, FaFigma, FaGithub, FaGitlab,
} from "react-icons/fa";
import { SiAdobexd, SiMaterialdesign, SiJquery, SiRedux, SiFirebase, SiNextdotjs, SiAmp, SiTailwindcss, SiChakraui, SiSemanticui, SiAntdesign, SiGraphql, SiApollographql, SiFramer, SiStyledcomponents, SiReactquery, SiPostman, SiNotion } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiReadCvLogoFill } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
import { MdDesignServices, MdDeveloperMode } from "react-icons/md";
import { IoIosConstruct } from "react-icons/io";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Skills data
const skills = {
  "Design Tools I Use": [
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-600" /> },
    { name: "Figma", icon: <FaFigma className="text-purple-600" /> },
  ],
  "Technologies I Use": [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "JQuery", icon: <SiJquery className="text-blue-500" /> },
    { name: "SCSS", icon: <BsFiletypeScss className="text-pink-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "AMP", icon: <SiAmp className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-blue-600" /> },
    { name: "Chakra UI", icon: <SiChakraui className="text-teal-500" /> },
    { name: "Semantic UI", icon: <SiSemanticui className="text-blue-500" /> },
    { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
    { name: "Apollo GraphQL", icon: <SiApollographql className="text-purple-600" /> },
    { name: "Framer Motion", icon: <SiFramer className="text-blue-500" /> },
    { name: "Styled Components", icon: <SiStyledcomponents className="text-pink-500" /> },
    { name: "React Query", icon: <SiReactquery className="text-red-500" /> },
    { name: "Git", icon: <FaGit className="text-orange-600" /> },
  ],
  "Development & Productivity Tools I Use": [
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" /> },
    { name: "GitLab", icon: <FaGitlab className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "Notion", icon: <SiNotion className="text-black" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ],
};

export default function Skills() {
  const controlsTitle = useAnimation();
  const controlsCategories = useAnimation();

  const [refTitle, inViewTitle] = useInView({ triggerOnce: true });
  const [refCategories, inViewCategories] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inViewTitle) controlsTitle.start({ opacity: 1, y: 0 });
    if (inViewCategories) controlsCategories.start({ opacity: 1, y: 0 });
  }, [controlsTitle, controlsCategories, inViewTitle, inViewCategories]);

  return (
    <div className="min-h-screen flex flex-col items-center py-14 dark:bg-gray-800 px-4">
      {/* Section Title */}
      <motion.h2
        ref={refTitle}
        initial={{ opacity: 0, y: -50 }}
        animate={controlsTitle}
        transition={{ duration: 0.8 }}
        className="text-4xl flex gap-3 font-extrabold font-sans mb-8 text-center bg-gradient-to-t from-yellow-500 to-orange-500 bg-clip-text text-transparent"
      >
        <GiSkills className="text-orange-500 text-5xl animate-bounce" />
        Skills
      </motion.h2>

      {/* Skills */}
      <motion.div
        ref={refCategories}
        initial={{ opacity: 0, y: 50 }}
        animate={controlsCategories}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="text-2xl flex items-center justify-center gap-2 font-bold text-yellow-400 text-center mb-5">
              {category === "Design Tools I Use" && <MdDesignServices className="text-3xl text-purple-500 animate-bounce" />}
              {category === "Technologies I Use" && <MdDeveloperMode className="text-3xl text-blue-500 animate-bounce" />}
              {category === "Development & Productivity Tools I Use" && <IoIosConstruct className="text-3xl text-orange-500 animate-bounce" />}
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 font-mono">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 bg-gray-200 shadow-gray-600 dark:bg-gray-900 dark:text-gray-300 px-4 py-2 rounded-full shadow-lg hover:shadow-yellow-500 hover:bg-gray-300 dark:hover:bg-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Download Button */}
      <motion.a
        href="/CV_ahmad.pdf"
        download="CV_ahmad.pdf"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
      >
        <PiReadCvLogoFill className="text-2xl" />
        Download Resume
      </motion.a>
    </div>
  );
}
