import Logo from "@/assets/Logo.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import ReactDOM from "react-dom";
import { SocialIcon } from 'react-social-icons';



const Footer = () => {

  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          NoMoreMeetings facilita la gestión eficiente de reuniones en entornos laborales, 
          optimizando la programación, invitaciones y seguimiento de acciones. 
          Simplifica la coordinación y comunicación entre equipos para impulsar la productividad en el ámbito profesional.
          </p>
          <p>© UC All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Social Media</h4>
          <p>
            <a
              href="https://www.instagram.com/facultadciencias.unican/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              
            <SocialIcon url="https://instagram.com/jaketrent" className="h-6 w-6 inline-block mr-1" />
               @facultadciencias.unican
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/cienciasunican"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >             
            <SocialIcon url="https://twitter.com/jaketrent" className="h-6 w-6 inline-block mr-1" />
               @cienciasunican
            </a>
          </p>
        </div>
        <div>
          <p className="my-5">
            <EnvelopeIcon className="h-5 w-5 inline-block mr-2" />
             jrev@gmail.com
          </p>
          <p className="my-5">
            <EnvelopeIcon className="h-5 w-5 inline-block mr-2" />
             uc@gmail.com
          </p>
          <p>
            <PhoneIcon className="h-5 w-5 inline-block mr-2" />
              (942) 89-52-34
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
