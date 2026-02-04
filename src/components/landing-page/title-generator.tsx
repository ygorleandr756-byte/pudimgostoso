"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateCatchyTitles, GenerateCatchyTitlesInput } from "@/ai/flows/generate-catchy-titles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WandSparkles, LoaderCircle, Lightbulb } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const formSchema = z.object({
  productName: z.string().min(2, "O nome do produto deve ter pelo menos 2 caracteres."),
  productDescription: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres."),
});

export function TitleGenerator() {
  const [generatedTitles, setGeneratedTitles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "E-book Pudim Perfeito",
      productDescription: "Um guia completo para fazer o melhor pudim da sua vida, com receitas, técnicas e segredos de confeiteiro.",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedTitles([]);
    try {
      const result = await generateCatchyTitles(values as GenerateCatchyTitlesInput);
      setGeneratedTitles(result.titles);
    } catch (error) {
      console.error("Error generating titles:", error);
      // Here you could use the toast component to show an error
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3">
                  <WandSparkles className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-3xl">Gere Títulos Chamativos</CardTitle>
                </div>
                <CardDescription className="pt-2 text-base">
                  Use nossa ferramenta de IA para criar títulos criativos para o seu produto.
                </CardDescription>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do Produto</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: E-book de Pudim" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Descrição do Produto</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Descreva seu produto..." {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                        Gerando...
                      </>
                    ) : (
                      "Gerar Títulos"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            <div className="bg-background/50 p-8">
              <h3 className="font-headline text-2xl mb-4">Títulos Sugeridos</h3>
              <div className="space-y-3">
                {isLoading && (
                  <>
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-5/6" />
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-8 w-4/6" />
                    <Skeleton className="h-8 w-5/6" />
                  </>
                )}
                {!isLoading && generatedTitles.length === 0 && (
                  <div className="text-center text-muted-foreground py-10">
                    <Lightbulb className="mx-auto h-12 w-12 mb-4" />
                    <p>Seus títulos gerados por IA aparecerão aqui.</p>
                  </div>
                )}
                <ul className="space-y-3">
                  {generatedTitles.map((title, index) => (
                    <li key={index} className="flex items-start p-3 rounded-md bg-card border transition-all animate-in fade-in-50">
                      <WandSparkles className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
