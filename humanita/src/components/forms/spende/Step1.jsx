import { Link } from 'react-router-dom';

export default function Step1() {
  return (
    <div>
      step1
      <Link to="./step2"> 
        <button className="mx-4 my-4 bg-cyan-300 rounded-md">
            Spende
        </button>
        </Link>
    </div>
    
  )
}


