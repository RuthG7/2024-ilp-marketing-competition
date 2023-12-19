import { RegisterButton } from "./RegisterButton";
import './LandingPage.css'
import Header from './Header'; 
import { Link } from "react-router-dom";

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
<Header />


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

<footer className="container items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:space-y-0">
      <p className='text-sm text-gray-500 leading-snug text-justify'> NO PURCHASE NECESSARY. Void where prohibited. Samsung Galaxy Marketing Case Competition is sponsored by Samsung Electronics America, Inc. Open to college/university students currently enrolled in an accredited college or university pursuing an undergraduate or graduate degree, who reside in the 50 United States & D.C., 18 or older, and are willing to travel at their own expense to New York on dates surrounding 8/17/23-8/18/23. Begins 7:00 p.m. ET on 7/20/23 & ends 11:59 p.m. ET 7/30/23 & Register by 7/23/23. For official rules, visit <Link to="rules" className="text-purple-500 underline hover:text-purple-800">SamsungMarketingCase.com/rules.</Link></p>
  </footer>



    </div>
  );
}