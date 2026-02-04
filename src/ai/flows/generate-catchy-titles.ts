'use server';
/**
 * @fileOverview Flow for generating catchy titles for a pudding product.
 *
 * - generateCatchyTitles - A function that generates catchy titles for a pudding product.
 * - GenerateCatchyTitlesInput - The input type for the generateCatchyTitles function.
 * - GenerateCatchyTitlesOutput - The return type for the generateCatchyTitles function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCatchyTitlesInputSchema = z.object({
  productName: z.string().describe('The name of the pudding product.'),
  productDescription: z.string().describe('A brief description of the pudding product.'),
});

export type GenerateCatchyTitlesInput = z.infer<typeof GenerateCatchyTitlesInputSchema>;

const GenerateCatchyTitlesOutputSchema = z.object({
  titles: z.array(z.string()).describe('An array of catchy titles for the pudding product.'),
});

export type GenerateCatchyTitlesOutput = z.infer<typeof GenerateCatchyTitlesOutputSchema>;

export async function generateCatchyTitles(input: GenerateCatchyTitlesInput): Promise<GenerateCatchyTitlesOutput> {
  return generateCatchyTitlesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCatchyTitlesPrompt',
  input: {schema: GenerateCatchyTitlesInputSchema},
  output: {schema: GenerateCatchyTitlesOutputSchema},
  prompt: `You are a creative marketing expert specializing in generating catchy titles for food products.

  Generate 5 catchy titles for the following pudding product:

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}

  Titles:
  `,
});

const generateCatchyTitlesFlow = ai.defineFlow(
  {
    name: 'generateCatchyTitlesFlow',
    inputSchema: GenerateCatchyTitlesInputSchema,
    outputSchema: GenerateCatchyTitlesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
