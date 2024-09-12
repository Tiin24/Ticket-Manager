import { Button } from "@/components/ui/button";

function CallToActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Comienza a usar TicketMaster hoy
        </h2>
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            Únete a miles de equipos que ya están mejorando su gestión de
            tickets con nuestra plataforma.
          </p>
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700"
            size="lg"
          >
            Crear una cuenta
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
