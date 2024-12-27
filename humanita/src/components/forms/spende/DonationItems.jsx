import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { donation_items } from '../../../constants';
import NumberIndicator from '../../../components/NumberIndicator';

export default function PageDonationItems() {
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: state,
  });

  useEffect(() => {
    const itemsWithQuantity = state?.donation_items || [];
    itemsWithQuantity.forEach(item => {
      if (item.quantity !== undefined) {
        setValue(`quantity-${item.id}`, item.quantity);
      }
    });
  }, [state, setValue]);

  const onSubmit = handleSubmit((data) => {
    const itemsWithQuantity = donation_items.map((product) => ({
      ...product,
      quantity: data[`quantity-${product.id}`],
    }));
  
    console.log("donation_items:", itemsWithQuantity);

    navigate("../DonationProject", {
      state: {
        ...state,
        donation_items: itemsWithQuantity,
      },
    });
  });
  

  return (
    <form onSubmit={onSubmit} className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl pb-2 bg-white m-4 p-4">
      <ol className="flex items-center justify-between w-full mb-4 sm:mb-5">
        <li className="flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-green-700 after:border-4 after:inline-block ">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 shrink-0">
            <p>1</p>
          </div>
        </li>
        <li className="flex items-center w-full after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block">
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full lg:h-12 lg:w-12 shrink-0">
            <p>2</p>
          </div>
        </li>
        <li className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
            <p>3</p>
          </div>
        </li>
      </ol>
      <h3 className="mb-4 text-lg font-medium leading-none text-gray-900">Was wird gespendet:</h3>
      <div className="grid gap-4 mb-4 justify-center lg:grid-cols-3 sm:grid-cols-2">
        {donation_items.map((item) => (
          <div key={item.id} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
            <a href={item.href} className="group">
              <img
                alt={item.imgAlt}
                src={item.imgSrc}
                className="rounded-t-lg"
              />
              <h2 className="mt-4 text-md text-center text-gray-700">{item.name}</h2>
            </a>
            <NumberIndicator id={item.id} register={register} setValue={setValue} />
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full mt-8">
        <Link to="../" state={state}>
          <button className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Back
          </button>
        </Link>
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Weiter
        </button>
      </div>
    </form>
  );
}
