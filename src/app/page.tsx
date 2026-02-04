import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Gift, Check, Star, Download, Facebook, Instagram, Youtube, Award } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function TopBar() {
  return (
    <div className="bg-blue-800 text-white text-center py-1 text-sm">
      <p>🔥 ÚLTIMAS VAGAS COM VALOR PROMOCIONAL 🔥</p>
    </div>
  );
}

function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "heroPudding");
  return (
    <section className="bg-background py-8 sm:py-12 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 uppercase tracking-wide">
          Fature até 2 mil reais por semana com pudins sem forno!
        </h1>
        <p className="mt-4 text-sm sm:text-base text-black/80">
          DESCUBRA AS RECEITAS DE PUDINS SEM FORNO QUE ESTÃO VIRANDO FEBRE E CONQUISTE SUA INDEPENDÊNCIA FINANCEIRA!
        </p>
        <div className="mt-6 flex justify-center">
          {heroImage && (
             <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={400}
                height={400}
                className="rounded-lg shadow-xl border-4 border-white"
                data-ai-hint={heroImage.imageHint}
              />
          )}
        </div>
        <div className="mt-8 max-w-3xl mx-auto">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg sm:text-xl py-6 px-10 w-full sm:w-auto uppercase shadow-lg transform hover:scale-105 transition-transform">
            EU QUERO FATURAR ALTO COM PUDINS!
          </Button>
          <p className="text-xs text-black/60 mt-2">Acesso imediato por apenas R$10</p>
        </div>
        <div className="mt-12 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Já imaginou faturar alto com uma sobremesa que todo mundo ama, de forma prática, rápida e altamente lucrativa?</h2>
            <p className="mt-4 text-gray-700">Esqueça o gás, o forno e a complicação! Com nosso e-book, você terá acesso a um método inovador que vai transformar sua cozinha em uma fonte de renda.</p>
        </div>
      </div>
    </section>
  )
}

function Benefits() {
    const items = [
        "Apostila com as receitas mais vendidas. Para você faturar muito.",
        "Planilha de precificação. Para você calcular seus custos e lucros.",
        "Bônus surpresa 01. Para te ajudar a dar os primeiros passos nas vendas.",
        "Bônus surpresa 02. Para te ajudar a divulgar seu negócio e atrair clientes.",
        "Embalagens e adesivos. Todos prontos para você imprimir e usar.",
    ]
    return (
        <section className="bg-background py-8 sm:py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                <Card className="shadow-2xl">
                    <div className="bg-primary text-primary-foreground text-center p-4 rounded-t-lg">
                        <h2 className="text-xl sm:text-2xl font-bold">VEJA O QUE VOCÊ VAI RECEBER AO GARANTIR SUA VAGA HOJE:</h2>
                    </div>
                    <CardContent className="p-6 sm:p-8">
                        <ul className="space-y-4">
                            {items.map(item => (
                                <li key={item} className="flex items-start">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-base sm:text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-center mt-6 font-bold text-red-600">... e mais 02 bônus surpresas para você lucrar ainda mais.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

function ProblemSolution() {
    return (
        <section className="bg-background py-8 sm:py-12 text-center">
            <div className="container mx-auto px-4 max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-bold">A pergunta é: você vai ficar de fora?</h3>
                <p className="mt-2 text-gray-700">Essa pode ser a grande virada de chave da sua vida financeira!</p>
                <div className="mt-6">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg sm:text-xl py-6 px-10 w-full sm:w-auto uppercase shadow-lg transform hover:scale-105 transition-transform">
                        QUERO MINHAS RECEITAS LUCRATIVAS
                    </Button>
                </div>
            </div>
        </section>
    )
}

function EbookContent() {
  const contentItems = {
    "Apostila de Pudins": "Todas as receitas detalhadas para você começar a produzir e vender.",
    "Bônus de Geladinhos": "Aprenda a fazer geladinhos gourmet para diversificar seus produtos.",
    "Bônus de Trufas": "Receitas de trufas deliciosas que vendem o ano todo.",
    "Certificado de Conclusão": "Receba seu certificado e mostre sua qualificação.",
  }
  const authorImage = PlaceHolderImages.find(img => img.id === "author");

  return (
    <section className="bg-secondary py-12 sm:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center gap-2">
            <Download className="h-8 w-8" />
            São 30 receitas que vão transformar seu Dezembro
        </h2>
        <Card className="max-w-xl mx-auto mt-8 text-left shadow-2xl">
          <CardContent className="p-6 sm:p-10">
            <h3 className="text-center text-xl font-bold mb-6">01 E-BOOK DE PUDIM</h3>
            <ul className="space-y-5">
              {Object.entries(contentItems).map(([title, desc]) => (
                <li key={title}>
                  <h4 className="font-bold text-primary flex items-center gap-2"><Award className="h-5 w-5" /> {title}</h4>
                  <p className="text-sm text-gray-600 pl-7">{desc}</p>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8">
              {authorImage && <Image src={authorImage.imageUrl} alt={authorImage.description} data-ai-hint={authorImage.imageHint} width={80} height={80} className="rounded-full mx-auto border-4 border-primary" />}
               <p className="font-bold mt-4">BÔNUS EXCLUSIVOS PARA AS PRIMEIRAS COMPRAS</p>
               <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
                    <li>Apostila de adesivos e embalagens</li>
                    <li>Guia de vendas nas redes sociais</li>
                    <li>Planilha de precificação completa</li>
                    <li>Acesso a grupo VIP de alunas</li>
               </ul>
            </div>
            <div className="text-center mt-8">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    QUERO MEU E-BOOK
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function Bonuses() {
    const bonusItems = [
        "Apostila com 30 receitas.",
        "Adesivos prontos para impressão.",
        "Planilha de precificação.",
        "Certificado.",
        "Embalagens.",
        "Três Bônus Secretos (copos da felicidade, trufas e geladinho gourmet).",
    ]
    return (
        <section className="bg-primary py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-white text-center flex items-center justify-center gap-2">
                    <Gift className="h-8 w-8" /> BÔNUS: 11 Copias Que Desvalorizam R$ 20 em R$ 40
                </h2>
                <Card className="mt-6 bg-yellow-100 border-yellow-200">
                    <CardContent className="p-6">
                        <ul className="space-y-2">
                           {bonusItems.map(item => (
                               <li key={item} className="flex items-center">
                                   <Star className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

function SocialProof() {
  const testimonialImage = PlaceHolderImages.find(img => img.id === "whatsappTestimonial");
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">O Que Diz Quem Já Comprou:</h2>
        <div className="mt-8 flex justify-center">
          {testimonialImage && (
            <Image
              src={testimonialImage.imageUrl}
              alt={testimonialImage.description}
              width={300}
              height={600}
              className="rounded-xl shadow-lg"
              data-ai-hint={testimonialImage.imageHint}
            />
          )}
        </div>
         <div className="mt-6 text-left bg-yellow-100 p-4 rounded-lg border-yellow-200">
             <p className="font-bold">"Nossa apostila é um sucesso!"</p>
             <ul className="list-disc list-inside mt-2 text-sm">
                 <li>"Já fiz 1500 reais."</li>
                 <li>"Superou minhas expectativas"</li>
                 <li>"Estou amando, já vendi 50."</li>
                 <li>"Que material maravilhoso! Muito obrigada! Já garanti o dinheiro do aluguel."</li>
             </ul>
             <p className="mt-2 text-xs">Muitos outros depoimentos como este na nossa comunidade.</p>
         </div>
      </div>
    </section>
  );
}

function Pricing() {
    return (
        <section className="bg-destructive text-destructive-foreground py-12 sm:py-20 text-center">
            <div className="container mx-auto px-4 max-w-2xl">
                 <p className="font-bold">GARANTA JÁ O SEU E-BOOK COM VALOR PROMOCIONAL DE LANÇAMENTO</p>
                <div className="bg-white text-red-600 font-bold inline-block px-4 py-1 rounded-md mt-4">
                    APENAS HOJE DE <span className="line-through">R$47,90</span>
                </div>
                <h2 className="text-7xl sm:text-8xl font-extrabold my-4">
                    R$ 10,00
                </h2>
                 <ul className="text-left max-w-xs mx-auto space-y-2">
                     <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-400" /> Acesso vitalício ao e-book</li>
                     <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-400" /> Todos os bônus inclusos</li>
                     <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-400" /> Grupo de alunas no Telegram</li>
                     <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-400" /> Certificado de conclusão</li>
                 </ul>
                <Button className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl py-6 px-10 w-full sm:w-auto uppercase shadow-lg transform hover:scale-105 transition-transform mt-8">
                    EU QUERO MEU E-BOOK DE PUDIM
                </Button>
                <p className="text-xs mt-2 opacity-80">Compra 100% segura</p>
            </div>
        </section>
    )
}

function Author() {
  const authorImage = PlaceHolderImages.find(img => img.id === "author");
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">QUEM É A AUTORA?</h2>
         {authorImage && <Image src={authorImage.imageUrl} alt={authorImage.description} data-ai-hint={authorImage.imageHint} width={150} height={150} className="rounded-full mx-auto border-4 border-white shadow-xl" />}
        <p className="mt-6 text-gray-700">Sou a Ana, especialista em confeitaria e criadora de conteúdo digital. Já transformei a vida de milhares de alunas com meus cursos e apostilas. Tenho certeza que essa apostila vai ser um divisor de águas para você também.</p>
        <p className="mt-4 font-bold">"Meu grupo aumenta todo dia!"</p>
        <p className="mt-1 text-gray-700">As alunas estão amando e eu também!</p>
        <div className="mt-8">
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl py-6 px-10 w-full sm:w-auto uppercase shadow-lg transform hover:scale-105 transition-transform">
                EU QUERO MEU E-BOOK DE PUDIM
            </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
    return (
        <footer className="bg-background py-8 text-center">
            <div className="container mx-auto px-4">
                 <div className="mb-4">
                    <p className="font-bold">CONTATO</p>
                    <div className="flex justify-center gap-4 mt-2">
                        <a href="#" className="hover:text-primary"><Facebook /></a>
                        <a href="#" className="hover:text-primary"><Instagram /></a>
                        <a href="#" className="hover:text-primary"><Youtube /></a>
                    </div>
                    <a href="#" className="text-sm text-red-600 hover:underline mt-2 inline-block">Clique aqui e tire suas dúvidas pelo nosso canal!</a>
                </div>
                <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Pudins Sem Forno. Todos os direitos reservados.</p>
                <p className="text-xs text-gray-500 mt-1">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.</p>
            </div>
        </footer>
    )
}

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <ProblemSolution />
        <EbookContent />
        <Bonuses />
        <SocialProof />
        <Pricing />
        <Author />
      </main>
      <Footer />
    </>
  );
}
