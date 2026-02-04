import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contentItems = [
  "A escolha dos ingredientes: a base de tudo.",
  "O ponto perfeito do caramelo: sem amargar.",
  "Mistura da massa: o segredo da textura aveludada.",
  "Cozimento ideal: em banho-maria no forno ou na panela.",
  "Como desenformar sem quebrar: a técnica infalível.",
  "Variações da receita: pudim de chocolate, café e mais.",
  "Dicas de armazenamento e conservação.",
];

export function ContentSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            O que Você Vai Aprender?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Um guia completo que te levará do básico ao avançado na arte de fazer pudins.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardContent className="p-8 md:p-12">
            <ul className="space-y-4">
              {contentItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mr-4 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
