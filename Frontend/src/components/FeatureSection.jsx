import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CheckCircle, Users, Clock } from "lucide-react";

function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Características principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CheckCircle className="w-8 h-8 mb-2 text-green-500" />
              <CardTitle>Gestión eficiente</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Organiza y prioriza tickets fácilmente para una resolución
                rápida de problemas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2 text-blue-500" />
              <CardTitle>Colaboración en equipo</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Trabaja en conjunto con tu equipo para resolver tickets de
                manera eficiente.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 mb-2 text-purple-500" />
              <CardTitle>Seguimiento en tiempo real</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Mantén a tus clientes informados con actualizaciones en tiempo
                real sobre el estado de sus tickets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
