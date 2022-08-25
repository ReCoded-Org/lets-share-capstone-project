import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import { getDownloadURL, ref, uploadString, getStorage, uploadBytes } from 'firebase/storage'
import { storage , Provider } from '../firebaseConfig'

import { auth } from '../firebaseConfig'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export function AuthProvider ({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = async (email, password) => {
   return await createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const  logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser)
      } else {
        setUser(null)
      }
      // setLoading(false)
    })

    return () => unsubscribe()
  }, [])


const upload = async  (file, email,user, setLoading) => {
    const fileRef = ref(storage, email + '.png');
  
    setLoading(true);
    
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
  
    
    
    setLoading(false);
    alert("Uploaded file!");
    return photoURL
  }

  const provider = new GoogleAuthProvider()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    })
  }


  return (
    <AuthContext.Provider value={{user,signup,login,logout, upload, signInWithGoogle}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}    





