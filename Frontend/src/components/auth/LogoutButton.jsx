import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

function LogoutButton() {
  return (
    <Link to={"/"}>
      <Button variant="ghost" className="w-full justify-start text-red-600">
        <LogOut className="mr-2 h-4 w-4" />
        Logout
      </Button>
    </Link>
  );
}

export default LogoutButton;
