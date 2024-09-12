import { Link } from "react-router-dom";
import { BarChart2 } from "lucide-react";

function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <BarChart2 className="h-6 w-6 mr-2 text-purple-600" />
        <span className="font-bold">TicketMaster</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Inicio
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Documentación
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Soporte
        </Link>
      </nav>
    </header>
  );
}

export default Header;
