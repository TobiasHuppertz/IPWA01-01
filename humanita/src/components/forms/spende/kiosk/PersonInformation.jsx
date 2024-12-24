import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { personFields, addressFields, addressOptions } from '../../../../constants';

export default function PagePersonInformation() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, reset, setValue, watch, handleSubmit } = useForm();
  const watchAbgabe = watch("abgabe");

  const onSubmit = handleSubmit((data) => {
    const combinedData = {
      ...state,
      ...data,
    };
    navigate("./DonationItems", { state: combinedData });
  });
  

  useEffect(() => {
    reset(state);
  }, [reset, state]);

  const handleAddressChange = (event) => {
    if (event.target.value === 'abgabe') {
      setValue('street', '');
      setValue('housenumber', '');
      setValue('zipcode', '');
      setValue('city', '');
      setValue('abgabe', true);
    } else if (event.target.value === 'abholung') {
      setValue('abgabe', false);
    }
  };

  return (
      <form onSubmit={onSubmit} className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl pb-2 bg-white m-4 p-4">
        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">Persönliche Informationen</h3>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          {personFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-900">
                {field.label}
              </label>
              <input
                type={field.type}
                {...register(field.id, { required: true })}
                className="bg-gray-50 border border-gray-300 max-w-md text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>

        <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">Adresse</h3>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          {addressOptions.map((option) => (
            <div key={option.id} className="mb-4 w-full">
              <div className="flex items-center">
                <input
                  id={option.id}
                  type="radio"
                  name="address"
                  value={option.value}
                  {...register("address", { required: "Bitte eine Option auswählen." })}
                  className="w-5 h-5 border-gray-300"
                  onChange={handleAddressChange}
                />
                <label htmlFor={option.id} className="block ms-2 text-sm font-medium text-gray-900">
                  {option.label}
                </label>
              </div>
            </div>
          ))}
          {addressFields.map((field) => (
            <div key={field.id} style={{ display: watchAbgabe === true ? 'none' : 'block' }}>
              <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-900">
                {field.label}
              </label>
              <input
                type={field.type}
                {...register(field.id, {
                  required: true,
                  pattern: field.id === "zipcode" ? /^55[0-9]{3}$/ : undefined,
                  maxLength: field.id === "zipcode" ? 5 : undefined,
                  minLength: field.id === "zipcode" ? 5 : undefined,
                  disabled: watchAbgabe === true,
                })}
                className="bg-gray-50 border border-gray-300 max-w-md text-gray-900 text-sm rounded-lg disabled:bg-gray-200 block w-full p-2.5"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full mt-4">
          <button
            type="submit"
            className="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Weiter
          </button>
        </div>
      </form>
  )
}
