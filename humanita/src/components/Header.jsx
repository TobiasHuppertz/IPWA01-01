import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
    <div className="h-20 w-full bg-slate-200">
        Header
        <Link to="./forms/spende"> 
        <button className="mx-4 my-4 bg-cyan-300 rounded-md">
            Spende
        </button>
        </Link>
    </div>
    </> 
  )
}
