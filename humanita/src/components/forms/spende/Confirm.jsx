import { Link, useLocation } from "react-router-dom";

export default function pageConfirm() {
  const { state } = useLocation();

  return (
    <div className="p-8">
      <p>Vorname: {state.firstName}</p>
      <p>Nachname: {state.lastName}</p>
      <p>Geschlecht: {state.gender}</p>
      <p>Country: {state.country}</p>
      <Link to="../" state={state}>
        <button>Zurück</button>
      </Link>
      <Link to="#">
        <button>Bestätigen</button>
      </Link>
    </div>
  )
}
