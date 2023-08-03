import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import OurClasses from "@/scenes/ourClasses";
import Benefits from "@/scenes/benefits";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";
import Login from "@/scenes/login";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import {User} from "@/types/user";
import '@/scenes/login/styles.scss'; // Asegúrate de que la ruta sea correcta
import { auth, signOut } from './services/firebase';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [user, setUser] = useState< User | null>(null); // Agrega una variable de estado para el usuario
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex-center">
      {user ? ( // Si el usuario ha iniciado sesión, muestra el contenido normal
        <>
          <div className="app bg-gray-20">
            <Navbar
              isTopOfPage={isTopOfPage}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setUser={setUser} // Pasa la función setUser al componente Navbar
            />    
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
            <Footer />
          </div>
        </>
      ) : ( // Si el usuario no ha iniciado sesión, muestra la página de inicio de sesión
      
          <Login onLogin={(userData) => setUser(userData)} />
      
      )}
    </div>
  );
}

export default App;
