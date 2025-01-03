import { hero } from '../constants';

export default function Hero() {
  return (
    <div 
      className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center h-[70vh]" 
      style={{ backgroundImage: `url(${hero.bgSrc})` }}
    >
      <div className="mx-auto max-w-2xl py-16 sm:py-18 lg:py-18 rounded-3xl bg-black bg-opacity-50">
        <div className="text-center">
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-Merriweather font-medium tracking-tight text-white">
            {hero.header}
          </h1>
          <p className="mt-8 px-3 text-wrap font-SourceSans font-medium md:text-lg text-white">
            {hero.text}
          </p>
        </div>
      </div>
    </div>
  )
}
