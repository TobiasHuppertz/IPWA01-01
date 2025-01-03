import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

import { personFields, addressFields, addressOptions } from '../../../constants';

export default function PagePersonInformation() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, reset, formState: { errors }, setValue, watch, handleSubmit } = useForm();
  const watchAbgabe = watch("abgabe");

  const onSubmit = handleSubmit((data) => { 
    navigate("./DonationItems", { state: data }); 
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
      <form onSubmit={onSubmit} className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl mb-16 bg-white m-4 p-4">
        <ol className="flex items-center justify-between w-full mb-4 sm:mb-5">
          <li className="flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ">
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <p>1</p>
            </div>
          </li>
          <li className="flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <p>2</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <p>3</p>
            </div>
          </li>
        </ol>
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
              {errors[field.id] && errors[field.id].type === "required" && (
                <p className="text-red-500 before:inline before:content-['⚠_']">{field.errorMessage}</p>
              )}
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
              {errors.address && (
                <p className="text-red-500 before:inline before:content-['⚠_']">
                  {errors.address.message}
                </p>
              )}
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
              {errors[field.id] && (
                  <>
                    {errors[field.id].type === 'required' && (
                      <p className="text-red-500 before:inline before:content-['⚠_']">
                        {field.errorMessages ? field.errorMessages.required : field.errorMessage}
                      </p>
                    )}
                    {(errors[field.id].type === 'maxLength' || errors[field.id].type === 'minLength') && field.errorMessages && (
                      <p className="text-red-500 before:inline before:content-['⚠_']">
                        {field.errorMessages.length}
                      </p>
                    )}
                    {errors[field.id].type === 'pattern' && field.errorMessages && (
                      <p className="text-red-500 before:inline before:content-['⚠_']">
                        {field.errorMessages.pattern}
                      </p>
                    )}
                  </>
                )}
            </div>
          ))}
        </div>
        <div className="flex justify-end w-full mt-8">
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
