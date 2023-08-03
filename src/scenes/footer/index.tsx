import Logo from "@/assets/Logo.png";

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
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">jesus.revuelta009@gmail.com</p>
          <p>(942) 89-52-34</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
