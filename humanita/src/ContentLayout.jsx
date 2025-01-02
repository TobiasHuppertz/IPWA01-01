export default function ContentLayout({ children }) {
  return (
    <main className="mx-auto min-h-dvh max-w-4xl px-6 lg:max-w-7xl lg:px-8">
      {children}
    </main>
  );
}

