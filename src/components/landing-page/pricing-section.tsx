import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { CreditCard, ShieldCheck } from "lucide-react";

const includedFeatures = [
  "Acesso vitalício ao e-book completo",
  "Todas as receitas e variações",
  "Guia de solução de problemas comuns",
  "Bônus: E-book de Caldas Especiais",
  "Acesso a atualizações futuras",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-primary/50">
          <CardHeader className="text-center p-8">
            <CardTitle className="font-headline text-4xl md:text-5xl">
              Acesso Imediato a Tudo Isso!
            </CardTitle>
            <CardDescription className="text-lg pt-2">
              Invista em você e na felicidade de quem você ama.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-8">
            <div className="text-center mb-8">
              <p className="text-lg line-through text-muted-foreground">De R$99,90</p>
              <p className="text-5xl md:text-7xl font-bold text-primary">Por apenas R$49,90</p>
              <p className="text-muted-foreground mt-2">ou 5x de R$10,74</p>
            </div>
            <ul className="space-y-3 mb-8">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex-col gap-4 p-8 bg-secondary/50">
            <Button size="lg" className="w-full h-14 text-xl font-bold animate-subtle-pulse transition-transform hover:scale-105">
              Comprar Agora e Fazer Pudins Incríveis!
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Pagamento seguro via Cartão de Crédito, PIX e Boleto.</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
