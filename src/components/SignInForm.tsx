import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import {
  auth,
  db,
  facebookProvier,
  githubProvider,
  googleProvider,
} from "../config/firebase";
import { setDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

interface SignInFormProps {
  handleClose: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ handleClose }) => {
  const handleSignIn = async (provider: any) => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL, uid } = user;
      const userRef = doc(db, "users", uid);
      setDoc(userRef, { displayName, email, photoURL, uid });
      handleClose();
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      handleClose();
    }
  };

  return (
    <div className="w-[400px] max-w-full bg-[#F0F2F5] p-4 rounded-md modalFadeIn">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-semibold text-2xl text-text-color">Đăng nhập</h1>
        <button onClick={handleClose} title="Quay lại trang chủ">
          <BsArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
      </div>

      <div>
        <div>
          <button
            onClick={() => handleSignIn(googleProvider)}
            className="flex items-center text-black bg-white p-2 rounded-md w-full mb-4"
          >
            <FcGoogle className="w-6 h-6 mr-5" /> Đăng nhập với Google
          </button>
        </div>
        <div>
          <button
            onClick={() => handleSignIn(githubProvider)}
            className="flex items-center text-white bg-black p-2 rounded-md w-full mb-4"
          >
            <BsGithub className="w-6 h-6 mr-5" /> Đăng nhập với Github
          </button>
        </div>
        <div>
          <button
            onClick={() => handleSignIn(facebookProvier)}
            className="flex items-center text-white bg-blue-500 p-2 rounded-md w-full"
          >
            <FaFacebook className="w-6 h-6 mr-5" /> Đăng nhập với Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
