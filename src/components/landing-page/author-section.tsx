import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, UtensilsCrossed } from "lucide-react";

export function AuthorSection() {
  const authorImage = PlaceHolderImages.find((img) => img.id === "author");

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            {authorImage && (
              <Image
                src={authorImage.imageUrl}
                alt="Foto do autor"
                width={250}
                height={250}
                className="rounded-full object-cover aspect-square shadow-xl border-4 border-card"
                data-ai-hint={authorImage.imageHint}
              />
            )}
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Sobre a Criadora: Chef Ana Pereira
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Com mais de 15 anos de experiência em confeitaria, Chef Ana Pereira dedicou sua carreira a simplificar a alta gastronomia para cozinheiros domésticos.
            </p>
            <p className="mt-2 text-lg text-muted-foreground">
              Sua paixão por sobremesas clássicas a levou a desenvolver um método à prova de erros para o pudim perfeito, uma receita guardada por gerações e agora compartilhada com você.
            </p>
            <div className="mt-6 flex gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                <span className="font-semibold">Confeiteira Premiada</span>
              </div>
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                <span className="font-semibold">+10.000 Alunos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
