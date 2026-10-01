import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function LegalPage({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" aria-label="Mall for Latam — Inicio">
            <Image
              src="/logo-horizontal.png"
              alt="Mall for Latam"
              width={448}
              height={148}
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-sm text-gray-500 mb-10">Última actualización: {updatedAt}</p>

        <div className="flex flex-col gap-6 text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-gray-900 [&_h2]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1 [&_a]:text-brand-blue [&_a]:hover:underline [&_strong]:text-gray-900">
          {children}
        </div>
      </main>

      <footer className="border-t bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mall for Latam. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
