import { Link } from 'react-router-dom';

import { projectsText, projects } from '../constants';


export default function PageProjects() {
  return (
    <section className="p-4 py-20">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-Merriweather font-semibold tracking-tight sm:text-5xl">
            {projectsText.header}
          </h1>
          <p className="mt-8 px-3 pb-8 font-SourceSans text-lg sm:text-lg font-light text-gray-500 text-pretty mx-auto lg:w-3/4">
            {projectsText.paragraph}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          {projects.map((item) => (
            <Link to="" key={item.id} className="w-full flex flex-col mb-4 rounded-lg bg-gray-100">
              <div className="max-h-[300px] overflow-hidden rounded-lg shadow-xl relative">
                <img className="w-full" src={item.imgProjectSrc} alt={item.imgProjectAlt} />
              </div>
              <div className="flex items-baseline w-full">
                <h3 className="font-Merriweather text-2xl p-4">{item.name}</h3>
                <img className="w-8 h-5 rounded-sm" src={item.imgFlagSrc} alt={item.imgFlagAlt} />
              </div>
              <p className="font-SourceSans text-pretty p-4">{item.projectText}</p>
            </Link>
          ))}
        </div>
    </section>
  )
}


