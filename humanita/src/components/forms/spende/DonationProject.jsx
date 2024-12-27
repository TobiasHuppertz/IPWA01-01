import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { projects } from '../../../constants';

export default function PageDonationProject() {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(state);
  }, [state, reset]);

  const onSubmit = handleSubmit((data) => {
    navigate("../Confirm", { state: data }); 
  });
  
  return (
    <form onSubmit={onSubmit} className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl pb-2 bg-white m-4 p-4">
        <ol className="flex items-center justify-between w-full mb-4 sm:mb-5">
            <li className="flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-green-700 after:border-4 after:inline-block ">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                <p>1</p>
            </div>
            </li>
            <li className="flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-green-700 after:border-4 after:inline-block">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                <p>2</p>
            </div>
            </li>
            <li className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                <p>3</p>
            </div>
            </li>
        </ol>
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">
            Wähle dein Spendenland aus:
        </h3>
        <div className="grid gap-4 mb-4 justify-center lg:grid-cols-3 sm:grid-cols-2">
            {projects.map((item) => (
            <div
                key={item.id}
                className="max-w-xs bg-white border border-gray-200 rounded-lg shadow hover:text-gray-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => document.getElementById(`radio-${item.id}`).click()}
            >
                <input
                type="radio"
                id={`radio-${item.id}`}
                name="project"
                value={item.name}
                className="hidden peer cursor-pointer"
                {...register("country", { required: "Bitte eine Option auswählen." })}
                />
                <label
                htmlFor={`radio-${item.id}`}
                className="inline-flex items-center justify-center w-full p-5 text-gray-500 cursor-pointer"
                >
                <img
                    alt={item.imgFlagAlt}
                    src={item.imgFlagSrc}
                    className="max-h-28 h-max w-3/4 sm:w-5/6 rounded-lg cursor-pointer"
                />
                </label>
                <h2 className="mb-2 text-md text-center text-gray-700 peer-checked:text-green-600">
                {item.name}
                </h2>
            </div>
            ))}
        </div>
        <div className="flex justify-between w-full mt-8">
            <Link to="../DonationItems" state={state}>
            <button className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
            </button>
            </Link>
            <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
            Weiter
            </button>
        </div>
    </form>
  );
}
