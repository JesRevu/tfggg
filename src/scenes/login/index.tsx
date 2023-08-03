import { useState } from 'react';
import { GoogleLogo } from "phosphor-react";

import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from '../../services/firebase';

import './styles.scss';


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

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
        onLogin(result.user); // Llama a onLogin aquí
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">

      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto de usuario" />}

        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
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