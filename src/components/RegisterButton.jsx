// RegisterButton.jsx
import { SVGIcon } from './SVGIcon';
import { Link } from 'react-router-dom';



export function RegisterButton() {

  return (
    <Link to="/register">
    <button className="relative px-7 py-3 bg-black rounded-lg leading-none flex items-center">
      <span className="flex items-center space-x-5">
        <SVGIcon />
      </span>
      <span className=" pl-4 text-white group-hover:text-gray-400 transition duration-200">Register &rarr;</span>
    </button>
    </Link>
  );
}