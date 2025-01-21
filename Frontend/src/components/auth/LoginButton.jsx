import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function LoginButton() {

  return (
    <Link to={"/dashboard"}>
      <Button
        variant="outline"
        className="bg-white text-purple-600 hover:bg-gray-100"
        size="lg"
      >
        Iniciar sesión
      </Button>
    </Link>
  );
};

export default LoginButton;