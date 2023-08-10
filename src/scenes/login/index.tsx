import { useContext, useState } from 'react';
import { GoogleLogo } from "phosphor-react";

import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from '../../services/firebase';

import './styles.scss';
import logoImage  from "@/assets/Logo.png";


interface LocalUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface SignInProps {
    onLogin: (userData: User) => void;
  }

export function SignIn({ onLogin }: SignInProps) {
  const [user, setUser] = useState<User>({} as User);
  

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

  

    provider.addScope('https://www.googleapis.com/auth/calendar.readonly');

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        onLogin(result.user);
        localStorage.setItem("googleUser", JSON.stringify(result));

        
        
      }).catch((error) => {
        console.log(error);
      });

    
  }

  const googleUserString = localStorage.getItem("googleUser");
  if (googleUserString) {
    const googleUser = JSON.parse(googleUserString);
    onLogin(googleUser.user);
  }


  return (
    <div className="container">

    <div className="flex justify-center items-center">
      <img
        src={logoImage} // Ruta de la imagen de tu logo
        alt="Logo"
        className="w-40 h-40 object-contain" // Ajusta el tamaño y estilo según tus necesidades
      />
    </div>

      <h1>Accede a tu cuenta</h1>

      <span>
        Autenticate con Google <br />
        
      </span>

      <button type="button" onClick={signInWithGoogle} className="button">
        <GoogleLogo />
        SignIn with Google
      </button>
    </div>
  )
}
export default SignIn;