import { contact } from "../constants"

export default function Contact() {
  return (

    <section className="bg-white">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="font-Merriweather mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">{contact.header}</h2>
        <p className="mb-8 lg:mb-16 font-SourceSans font-light text-wrap text-gray-500 sm:text-lg text-center">{contact.paragraph}</p>
        <form action="#" className="space-y-8">
            <div>
                <label for="email" className="block mb-2 font-SourceSans text-sm font-medium text-gray-900 ">{contact.emailHeader}</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder={contact.emailPlaceholder} required/>
            </div>
            <div>
                <label for="subject" className="block mb-2 font-SourceSans text-sm font-medium text-gray-900 ">{contact.subjectHeader}</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm f" placeholder={contact.subjectPlaceholder} required/>
            </div>
            <div className="sm:col-span-2">
                <label for="message" className="block mb-2 font-SourceSans text-sm font-medium text-gray-900 ">{contact.messageHeader}</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder={contact.messagePlaceholder}></textarea>
            </div>
            <button type="submit" className="text-white bg-green-600 hover:bg-green-800 font-semibold rounded-lg text-sm px-4 py-2 text-center">Sende Nachricht</button>
        </form>
    </div>
    </section>
  )
}

