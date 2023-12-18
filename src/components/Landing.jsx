import { RegisterButton } from "./RegisterButton";
import './LandingPage.css'
import logo from '../assets/logo.png'

export default function SamsungMarketingContent() {
  const listItems = [
    'Selected semi-finalists will present their ideas to top tech firms and advertising agencies at a Samsung launch event in NYC on August 17th.',
    'All semi-finalists and finalists are welcome to attend a networking happy hour on August 18th with executives from Samsung Electronics America, Google, Qualcomm, Publicis Groupe, Cheil Worldwide, and more industry leaders!',
    'The grand prize? A Google mentorship!',
  ];

  return (
    <>
<div className="relative container mx-auto mt-8">
        <div className="flex items-center justify-between">
            <div className="">
                <img src={logo} alt="" />
            </div>
        </div>
        <hr className=" relative mt-3 border-t-1 border-pink-600 opacity-50" />
    </div>
<section className='max-containers text-left mt-4 md:mt-16 max-w-3xl'>
  <h1 className='text-4xl font-palanquin font-bold text-white-400 '>
    Chanel your <span className='text-pink-400'> passion </span> into a major pitch opportunity
  </h1>
</section>
    
      <main className="container px-6 py-8 bg-gray-900 bg-opacity-50 mt-8 max-w-4xl">
        <h2 className="text-white-400 mb-3 text-left font-palanquin">Introducing the Samsung Marketing Case Competition for college students of all majors.</h2>
        <ul className="text-slate-500 pl-5 list-disc space-y-3 text-left text-lg font-palanquin">
          {listItems.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        <div className="grid gap-8 items-start justify-start mt-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <RegisterButton />
          </div>
        </div>
        <div className="mt-5">
          <p className="text-white-400 mb-3 text-left font-palanquin">We appreciate your interest in this program, but registration closed at 11:59 ET on July 23rd.</p>
        </div>
      </main>
    </>
  );
}