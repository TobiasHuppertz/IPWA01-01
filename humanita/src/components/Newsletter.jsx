import { newsletter } from "../constants"

export default function PageNewsletter() {
    return (
      <div className="relative isolate overflow-hidden bg-teal-50 py-16 sm:py-24 lg:py-32 flex justify-center items-center">
        <div className="max-w-lg lg:max-w-xl">
            <h2 className="font-Merriweather text-xl md:text-3xl text-center font-semibold tracking-tight">
                {newsletter.header}
            </h2>
            <p className="mt-4 px-6 text-sm text-center lg:text-base text-pretty text-gray-600">
                {newsletter.paragraph}
            </p>
            <div className="mt-6 px-6 flex gap-x-4 justify-center">
                <label htmlFor="email-address" className="sr-only">
                    E-Mail-Adresse
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="E-Mail-Adresse eingeben"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md bg-white/20 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 placeholder:text-sm focus:outline-green-500 lg:text-lg/6 sm:text-sm/6"
                />
                <button
                    type="submit"
                    className="flex-none rounded-md bg-green-600 px-3.5 py-2.5 text-white text-sm lg:text-medium font-semibold shadow-sm hover:bg-green-800"
                >
                Abonniere
                </button>
            </div>
        </div>
      </div>
    )
  }
  