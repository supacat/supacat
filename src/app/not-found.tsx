export default function NotFound() {
  return (
    <section className="flex flex-col gap-1">
      <h1 className="text-foreground font-medium">404: Page Not Found</h1>
      <p className="text-muted-foreground">
        The page you are looking for does not exist.
      </p>
    </section>
  );
}
