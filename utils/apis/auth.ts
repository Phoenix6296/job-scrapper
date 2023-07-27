import { toast } from "react-hot-toast";
import { auth } from "@/components/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const handleCreateUser = async (
  email: string,
  password: string,
  confirmPassword: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }
  setLoading(true);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setLoading(false);
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    setLoading(false);
    toast.error(error.message);
  }
};

export const handleSignIn = async (
  email: string,
  password: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setLoading(false);
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    setLoading(false);
    toast.error(error.message);
  }
};

export const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    console.log(user);
    return user;
  } catch (error: any) {
    toast.error(error.message);
  }
};
