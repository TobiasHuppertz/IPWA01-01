import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";

export default function pagePersonInformation() {

  const navigate = useNavigate();
  const { state } = useLocation();
  const { register, reset, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    navigate("./Confirm", { state: data });
  });

  useEffect(() => {
    reset(state);
  }, []);

  return (
  <form onSubmit={onSubmit} className="p-8">
    <div>
      Vorname: <input type="text" {...register("firstName")} />
    </div>
    <div>
      Nachname: <input type="text" {...register("lastName")} />
    </div>
    <div>
      Geschlecht:
      <input type="radio" value="Herr" {...register("gender")} /> Herr
      <input type="radio" value="Frau" {...register("gender")} /> Frau
    </div>
    <div>
      Land:
      <select {...register("country")}>
        <option value="Deutschland">Deutschland</option>
        <option value="Austria">Österreich</option>
        <option value="Swiss">Schweiz</option>
      </select>
    </div>
    <button type="submit">Weiter</button>
  </form>
  )
}