import "../globals.css";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex bg-red-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
