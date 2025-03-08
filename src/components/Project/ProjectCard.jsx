import React from 'react'

function ProjectCard({title,description,bannerimg}) {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-black shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={bannerimg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{description}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#a5f8de]">
          Demo
        </button>
        <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-2xl bg-[#a5f8de]">
          Source Code
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
