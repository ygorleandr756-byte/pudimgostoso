import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
    const guaranteeImage = PlaceHolderImages.find((img) => img.id === "guaranteeBadge");

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="flex-shrink-0">
             <ShieldCheck className="h-32 w-32 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Garantia de Satisfação de 7 Dias!
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Seu risco é zero. Você tem 7 dias para experimentar todo o conteúdo do e-book. Se por qualquer motivo você não ficar 100% satisfeito, basta nos enviar um e-mail e nós devolveremos todo o seu investimento, sem perguntas e sem ressentimentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
