import { Link }  from "react-router-dom";

export default function PageSubmit() {

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-70">
      <form className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl pb-2 bg-white border m-4 p-4 text-center">
        <h3 className="mb-4 text-2xl font-medium leading-none text-gray-900">
          Vielen Dank für Ihre Spende!
        </h3>
        <p className="mb-4 px-10 text-wrap">
          Ihre Spende ist erfolgreich eingegangen. Eine Spendenbestätigung wird Ihnen in den nächsten Tagen per E-Mail zugesandt.
        </p>
        <div className="flex justify-center w-full mt-8">
        <Link to="../">
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Neue Spende
          </button>
        </Link>  
        </div>
      </form>
    </div>  
  )
}
