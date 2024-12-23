import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageConfirm() { 
  const { state } = useLocation();
  const [formFields, setFormFields] = useState(state?.formFields || {});
  const [textAbgabe, setTextAbgabe] = useState(""); 
  const country = state?.country;
  const donation_items = state?.donation_items || [];
  const filteredItems = donation_items.filter((item) => item.quantity > 0);

  // Datum erzeugen und formatieren
  const date = new Date();
  const modifiedDate = date.toLocaleDateString('de-DE');
  const optionTime =  { hour: '2-digit', minute: '2-digit' };
  const modifiedTime = date.toLocaleTimeString('de-DE', optionTime); 

  // Funktion zum Zurücksetzen der Adressfelder
  const resetAddressFields = () => {
    if (formFields.abgabe) {
      setFormFields((prev) => ({
        ...prev,
        street: "Musterstraße",
        housenumber: "35",
        zipcode: "55118",
        city: "Mainz",
      }));
      setTextAbgabe("Die Spende wird in der Geschäftsstelle abgegeben.");
    } else {
      setTextAbgabe("Die Spende wird abgeholt.");
    }
  };

  useEffect(() => {
    resetAddressFields();
  }, [formFields.abgabe]);

  return (
      <form className="md:w-2/3 mx-auto max-w-6xl shadow-xl rounded-2xl pb-2 bg-white m-4 p-4">
        <section className="bg-white py-8 antialiased md:py-8">
          <div className="mx-auto max-w-2xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-6">Zusammenfassung</h2>
            <h3 className="text-sm font-medium text-gray-900 sm:text-base mb-1">Persönliche Informationen</h3>
            <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
              <dl>
                <dt className="block font-normal text-gray-500">Name</dt>
                <dd className="font-medium text-gray-900 ">{formFields?.firstName} {formFields?.lastName}</dd>
                <hr class="mt-2 border-gray-300"/>
              </dl>
              <dl>
                <dt className="block font-normal text-gray-500">E-Mail</dt>
                <dd className="mt-1 font-medium text-gray-900">{formFields?.email}</dd>
                <hr class="mt-2 border-gray-300"/>
              </dl>
              <dl>
                <dt className="block font-normal text-gray-500">Telefonnummer</dt>
                <dd className="mt-1 font-medium text-gray-900">{formFields?.phone}</dd>
                <hr class="mt-2 border-gray-300"/>
              </dl>
            </div>
            <h3 className="text-sm font-medium text-gray-900 sm:text-base mb-1">Spende</h3>
            <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
              <dl>
                {filteredItems.map((item) => (
                  <div key={item.id} className="flex gap-1 w-full">
                    <dt className="block font-normal text-gray-500">{item.name}:</dt>
                    <dd className="block font-medium text-gray-900">{item.quantity}</dd>
                  </div>
                ))}
                <hr class="mt-2 border-gray-300"/>
              </dl>
              <dl>
                <dt className="block font-normal text-gray-500">Empfängerland</dt>
                <dd className="mt-1 font-medium text-gray-900">{country}</dd>
                <hr class="mt-2 border-gray-300"/>
              </dl>
            </div>
            <h3 className="text-sm font-medium text-gray-900 sm:text-base mb-1">Adressdaten</h3>
            <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 mb-6 md:mb-8">
              <dl>
                <dd className="py-2 mt-1 font-medium text-gray-900">{textAbgabe}</dd>
                <dt className="block font-normal text-gray-500">Adresse</dt>
                <dd className="mt-1 font-medium text-gray-900">{formFields?.street} {formFields?.housenumber}</dd>
                <dd className="mt-1 font-medium text-gray-900">{formFields?.zipcode} , {formFields?.city}</dd>
                <hr class="mt-2 border-gray-300"/>
              </dl>
              <dl>
                <dt className="block font-normal text-gray-500">Spendendatum</dt>
                <dd className="mt-1 font-medium text-gray-900">{modifiedDate} um {modifiedTime} Uhr</dd>
                <hr class="mt-2 border-gray-300"/>
              </dl>
            </div>
          </div>
        </section>

        <div className="flex justify-between w-full mt-4">
          <Link to="/spende/country" state={state}>
            <button className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Back
            </button>
          </Link>
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Abschicken
          </button>
        </div>
      </form>
  )
}
