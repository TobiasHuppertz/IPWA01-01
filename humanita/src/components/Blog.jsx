import { blog } from "../constants"

export default function Blog() {
  return (
    <section className="p-4 py-20">
      <h2 className="font-Merriweather text-4xl font-bold text-gray-900 text-center mb-16">
        Aktuelles
      </h2>
      <div className="flex justify-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
        {blog.map((item) => (
          <div key={item.id} className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl hover:bg-gray-100">
              <div className="flex item-center">
                  <img src={item.imgSrc} alt={item.imgAlt} className="rounded-t-2xl w-full object-cover"></img>
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl">
                  <span className="text-green-600 font-medium mb-3 block">{item.date}</span>
                  <h4 className="font-Merriweather text-lg text-gray-900 text-pretty font-medium mb-5">{item.blogHeader}</h4>
                  <p className="font-SourceSans text-gray-500 line-clamp-3 leading-6 mb-10">{item.blogText}</p>
                  <a href={item.blogUrl} className="cursor-pointer text-lg text-green-600 font-semibold">
                    Weiterlesen..
                  </a>
              </div>
          </div>
        ))}
      </div>
    </section>
                                        
  )
}
