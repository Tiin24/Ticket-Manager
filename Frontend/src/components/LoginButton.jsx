import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import {useNavigate} from "react-router-dom"

const LoginButton = () => {
  const { loginWithRedirect , isAuthenticated} = useAuth0();
  const navigate = useNavigate();

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (isAuthenticated) {
    navigate("/dashboard");
  }

  return (
    <Button
      variant="outline"
      className="bg-white text-purple-600 hover:bg-gray-100"
      size="lg"
      onClick={handleLogin}
    >
      Iniciar sesión
    </Button>
  );
};

export default LoginButton;
