import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, BookOpenCheck, Award, Smile } from "lucide-react";

const benefits = [
  {
    icon: <ChefHat className="h-10 w-10 text-primary" />,
    title: "Técnicas Profissionais",
    description: "Domine os segredos dos grandes confeiteiros para um pudim sempre perfeito.",
  },
  {
    icon: <BookOpenCheck className="h-10 w-10 text-primary" />,
    title: "Passo a Passo Detalhado",
    description: "Receitas claras e fáceis de seguir, com fotos de cada etapa do processo.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Resultados Garantidos",
    description: "Siga nosso método e prepare-se para receber elogios em todas as ocasiões.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "Mais Confiança na Cozinha",
    description: "Perca o medo de errar e sinta prazer em criar sobremesas incríveis.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            Por que este E-book é para Você?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme sua cozinha e suas sobremesas com um método simples e eficaz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
