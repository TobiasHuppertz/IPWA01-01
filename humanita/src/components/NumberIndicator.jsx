import { useState, useEffect } from 'react';

export default function NumberIndicator({ id, register, setValue }) {
  const [value, setValueState] = useState(0);

  const increment = () => setValueState(prevValue => prevValue + 1);
  const decrement = () => setValueState(prevValue => Math.max(0, prevValue - 1));

  const handleChange = (e) => {
    const newValue = Math.max(0, Number(e.target.value));
    setValueState(newValue);
  };

  useEffect(() => {
    setValue(`quantity-${id}`, value);
  }, [value, id, setValue]);

  return (
    <div className="p-5">
      <label htmlFor={`quantity-${id}`} className="block mb-2 text-sm text-gray-900">Anzahl:</label>
      <div className="flex">
        <button type="button" onClick={decrement} className="w-20 text-white text-xl bg-green-700 hover:bg-green-800 rounded-lg">-</button>
        <input
          {...register(`quantity-${id}`)}
          id={`quantity-${id}`}
          type="number"
          value={value}
          onChange={handleChange}
          className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
        />
        <button type="button" onClick={increment} className="w-20 text-white text-xl bg-green-700 hover:bg-green-800 rounded-lg">+</button>
      </div>
    </div>
  );
}
