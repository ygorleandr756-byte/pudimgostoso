export function AppFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-6 px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Pudim Perfeito Vendas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
