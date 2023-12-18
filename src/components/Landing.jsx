import { RegisterButton } from "./RegisterButton";
import './LandingPage.css'
import logo from '../assets/logo.png'

export default function SamsungMarketingContent() {
  const listItems = [
    'Selected semi-finalists will present their ideas to top tech firms and advertising agencies at a Samsung launch event in NYC on August 17th.',
    'All semi-finalists and finalists are welcome to attend a networking happy hour on August 18th with executives from Samsung Electronics America, Google, Qualcomm, Publicis Groupe, Cheil Worldwide, and more industry leaders!',
    'The grand prize? A Google mentorship!',
  ];
  const TextElement = ({ children }) => (
    <p className="text-white-400 text-left m-3 font-palanquin text-xl leading-relaxed">{children}</p>
  );

  return (
    <div className="landing-page">
<div className="relative container mx-auto mt-8">
        <div className="flex items-center justify-between">
            <div className="">
                <img src={logo} alt="" />
            </div>
        </div>
        <hr className=" relative mt-3 border-t-1 border-pink-600 opacity-50" />
    </div>


<section className='max-containers text-left mt-4 md:mt-16 max-w-3xl'>
  <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-pink-600 font-palanquin">
    Channel your passion into a major pitch opportunity
  </h1>
</section>
    
<main className="container px-6 py-8 bg-gray-900 bg-opacity-50 m-8 max-w-4xl">
  <h1 className="text-white-400 mb-3 text-left font-palanquin text-xl leading-relaxed">Introducing the Samsung Marketing Case Competition for college students of all majors.</h1>
  <ul className="text-white-400 pl-5 list-disc space-y-3 text-left text-lg font-palanquin leading-relaxed">
    {listItems.map((item, index) => <li key={index} className="text-xl leading-relaxed">{item}</li>)}
  </ul>
  <TextElement >Registration will be open until July 23rd (11:59 PM ET) via the Google Form link below. Remember, if you are selected as a semi-finalist and then finalist you must present live in person in NYC!</TextElement>
 
  <TextElement>Once registered, you'll receive a detailed brief to ideate against. Don't miss out on this opportunity to flex your talent.</TextElement>
  
  <div className="grid gap-8 items-start justify-start mt-9">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <RegisterButton />
    </div>
  </div>
  <div className="mt-8">
    <TextElement >We appreciate your interest in this program, but registration closed at 11:59 ET on July 23rd.</TextElement>
  </div>
</main>





    </div>
  );
}