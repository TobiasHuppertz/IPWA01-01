import { legals, socials } from "../constants"

export default function Footer() {
  return (

  <footer className="bottom-0 py-10 text-center border-t border-gray-200">
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-500 text-sm font-medium mb-6">
      {legals.map((item) => (
        <div key={item.id}>
          <a href={item.href} className="font-SourceSans hover:text-gray-700">{item.label}</a>
        </div>
      ))}
    </div> 
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-500 mb-6">
      {socials.map((item) => (
        <a href={item.href} aria-label={item.label} key={item.id} className="flex items-center justify-center w-8 h-8">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            className="w-6 h-6"
          >
          <image href={item.imgSrc} width="100%" height="100%" />
          </svg>
      </a>
        ))}
    </div>
    <p className="font-SourceSans text-gray-500 text-xs md:text-sm">
      &copy; 2024 Humanita 
    </p>
  </footer>

  )
}

