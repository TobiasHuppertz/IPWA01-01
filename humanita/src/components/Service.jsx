import { Link } from 'react-router-dom';
import { service } from '../constants';

export default function pageService() {
  return (
    <section className="p-4 py-20">
        <div className="flex flex-col lg:flex-row gap-4">
          <div
            className="flex w-full rounded-xl p-4 min-h-[400px] md:min-h-[600px] lg:min-h-[800px] bg-cover bg-center border"
            style={{ backgroundImage: `url(${service.imgBigSrc})` }}
            aria-label={service.imgBigAlt}
          >
            <div className="mt-auto flex flex-col items-end justify-end md:flex-row w-full">
              <Link to="./forms/spende" className="#">
                <button className="
                  md:w-[150px] w-[120px] bg-white border-2 border-green-600 h-[50px] my-1 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md 
                  hover:scale-105 hover:shadow-lg hover:border-0
                  before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-green-600 before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 
                  font-SourceSans md:text-lg text-black hover:text-white">
                  Jetzt Spenden
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full h-full rounded-xl p-8 bg-gradient-to-tr from-gray-200 to-gray-100 shadow-xl">
              <h1 className="font-Merriweather text-xl lg:text-3xl mb-auto pb-10">
                {service.header}
              </h1>
              <p className="font-SourceSans">
                {service.paragraph}
              </p>
            </div>
            <div className="h-full flex flex-col md:flex-row gap-4">
              <Link to=""
                className="min-h-[250px] flex w-full overflow-hidden rounded-xl bg-gray-300 bg-cover bg-center border"
                style={{ backgroundImage: `url(${service.imgService1Src})` }}
                aria-label={service.imgService1Alt}
              >
                <p className="text-white text-lg font-bold mt-auto w-full p-2 bg-black bg-opacity-70">
                  #WirKommenZuIhnen
                </p>
              </Link>
              <Link to=""
                className="min-h-[250px] flex w-full overflow-hidden rounded-xl bg-cover bg-center border"
                style={{ backgroundImage: `url(${service.imgService2Src})` }}
                aria-label={service.imgService2Alt}
              >
                <p className="text-white text-lg font-bold mt-auto w-full p-2 bg-black bg-opacity-70">
                  #SpendenSieVorOrt
                </p>
              </Link>
            </div>
          </div>
        </div>
  </section>
  )
}
