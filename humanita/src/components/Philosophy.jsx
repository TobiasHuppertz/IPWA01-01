import { philosophy } from "../constants"

export default function section1() {
  return (
    <section className="p-4 py-20">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
              <h2 className="mb-4 font-Merriweather text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900">
                {philosophy.header}
              </h2>
              <p className="mb-4 font-SourceSans">
                {philosophy.paragraph1}
              </p>
              <p className="font-SourceSans">
                {philosophy.paragraph2}
              </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
              <img class="w-full rounded-lg" src={philosophy.img1Scr} alt={philosophy.img1Alt}></img>
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src={philosophy.img2Scr} alt={philosophy.img2Alt}></img>
          </div>
      </div>
    </section>
  )
}