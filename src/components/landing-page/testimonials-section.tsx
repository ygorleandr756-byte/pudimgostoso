import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Mariana Costa",
    title: "Dona de Casa",
    quote: "Nunca imaginei que fazer pudim pudesse ser tão fácil e prazeroso. As dicas desse e-book são de ouro! Meu pudim agora é o maior sucesso nos almoços de família.",
    avatarId: "testimonial1",
  },
  {
    name: "Pedro Almeida",
    title: "Chef Amador",
    quote: "Como amante da culinária, eu buscava a perfeição. Encontrei neste guia. A técnica para a calda de caramelo é simplesmente infalível. Recomendo de olhos fechados!",
    avatarId: "testimonial2",
  },
  {
    name: "Julia Santos",
    title: "Estudante",
    quote: "Comprei o e-book para fazer uma surpresa para minha mãe e foi incrível! Ela amou o pudim. O passo a passo é super didático, até para quem não tem experiência.",
    avatarId: "testimonial3",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">
            O que Nossos Alunos Dizem
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de quem transformou a sobremesa com nosso método.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatarImage = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                           {avatarImage && (
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint}/>
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                           )}
                           <div className="ml-4 text-left">
                              <p className="font-bold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
