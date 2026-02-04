import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { PuddingIcon } from "@/components/pudding-icon";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "heroPudding");

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      <div className="relative h-full flex flex-col items-center justify-end text-center p-8 text-foreground">
        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-3xl">
          <PuddingIcon className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-md">
            Desvende o Segredo do Pudim Perfeito
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Aprenda a fazer um pudim com textura aveludada, sabor inesquecível e uma calda de caramelo divina. Surpreenda a todos!
          </p>
          <Button
            size="lg"
            className="mt-8 text-lg font-bold animate-subtle-pulse transition-transform hover:scale-105"
            asChild
          >
            <a href="#pricing">Quero meu e-book agora!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
