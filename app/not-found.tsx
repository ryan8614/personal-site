// app/not-found.tsx
export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="opacity-80 mt-2">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-4 rounded-full border px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Go back home
        </a>
      </div>
    </main>
  );
}