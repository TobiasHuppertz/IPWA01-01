import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { donation_items } from '../../../constants';
import NumberIndicator from '../../../components/NumberIndicator';

export default function pageDonationItems() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: state,
  });

  const onSubmit = handleSubmit((data) => {
    const itemsWithQuantity = donation_items.map(product => ({
      ...product,
      quantity: data[`quantity-${product.id}`]
    }));
    navigate("../Confirm", { 
      state: { 
        donation_items: itemsWithQuantity,
        formFields: state 
      } 
    });
  });

  return (
        <form onSubmit={onSubmit} className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl pb-2 bg-white m-4 p-4">
          <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">Persönliche Informationen</h3>
          <div className="grid gap-4 mb-4 justify-center lg:grid-cols-3 sm:grid-cols-2">
            {donation_items.map((items) => (
              <div key={items.id} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
                <a href={items.href} className="group">
                  <img
                    alt={items.imageAlt}
                    src={items.imageSrc}
                    className="rounded-t-lg"
                  />
                  <h2 className="mt-4 text-md text-center text-gray-700">{items.name}</h2>
                </a>
                <NumberIndicator id={items.id} register={register} setValue={setValue} /> {/* Weitergabe von setValue */}
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4">
            <Link to="/spende" state={state}>
              <button className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Back
              </button>
            </Link>
            <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Weiter
            </button>
          </div>
        </form>
  )
}

