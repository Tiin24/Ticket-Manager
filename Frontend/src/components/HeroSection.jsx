import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Bienvenido a TicketMaster
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Tu plataforma de gestión de tickets. Simplifica tu flujo de
              trabajo y mejora la atención al cliente.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              variant="outline"
              className="bg-white text-purple-600 hover:bg-gray-100"
              size="lg"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
