import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/signin");
    }, 2000); // Redirect to Sign In after 2 seconds
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
      Tillashroad
    </div>
  );
};

export default SplashScreen;
