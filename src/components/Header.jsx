import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className="relative container mx-auto mt-8">
            <div className="flex items-center justify-between">
                <div className="">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <hr className=" relative mt-3 border-t-1 border-white opacity-50" />
        </div>
    );
};

export default Header;