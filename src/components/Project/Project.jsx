import ProjectCard from "./ProjectCard";
import { description } from "../../data/description";

function Project() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white bg-white">
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center">
        Projects
      </h1>
      <div className="py-12 px-8 flex flex-wrap gap-15 justify-center">{description.map(item=>(
        <ProjectCard
        key={item.id}
        title={item.title}
        description={item.description}
        bannerimg={item.bannerimg}
        />

      ))}</div>
    </div>
  );
}

export default Project;
