import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white bg-white">
      <h1 className="text-2xl md:text-4xl text-black font-bold text-center">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-15 justify-center">
        <ProjectCard
          title="Blogging Website"
          description="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Youtube Clone"
          description="this is a bloggin website created in next js and used some component library used some component library"
        />
        <ProjectCard
          title="Netflix Clone"
          description="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
      </div>
    </div>
  )
}

export default Project
