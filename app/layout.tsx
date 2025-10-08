import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Compra Globalmente, Paga Localmente con Mall for Latam',
  description:
    'Accede a miles de productos internacionales pagando en tu moneda local. Sin tarjetas internacionales, sin trámites. Compra global, paga local.',
  keywords: [
    // Head keywords
    'mall for latam',
    'compras internacionales LATAM',
    'ecommerce internacional América Latina',
    'comprar en amazon desde latinoamérica',
    'comprar en eeuu desde perú',
    'comprar en eeuu desde méxico',
    'comprar en eeuu desde colombia',
    'pagar en moneda local compras internacionales',
    'importación fácil y segura',
    'plataforma cross-border ecommerce',
    'cómo comprar en tiendas internacionales',
    'envío internacional con pago local',

    // Long tail keywords
    'cómo comprar en amazon USA sin tarjeta internacional',
    'comprar en tiendas de eeuu pagando con yape o mercado pago',
    'comprar productos internacionales sin tarjeta de crédito',
    'cómo importar productos desde china a latinoamérica',
    'mejores tiendas internacionales para latinoamericanos',
    'envío rápido desde eeuu a latinoamérica',
    'pagar compras internacionales con moneda local',
    'plataformas para importar productos fácilmente',
    'compras globales sin barreras',
    'mall for latam opiniones',
    'mall for latam reseñas',

    // Brand SEO
    'Mall for Latam opiniones',
    'Mall for Latam app',
    'Mall for Latam chrome extension',
    'garantía M4L',
    'M4L Academy',
    'M4L cross-border',
    'comprar seguro con Mall for Latam',
    'importar productos globales con M4L',

    // Geo keywords
    'comprar en amazon desde perú',
    'envío internacional perú',
    'pagar con yape compras globales',
    'comprar en eeuu desde colombia',
    'importación fácil colombia',
    'pagar con nequi',
    'comprar en tiendas internacionales desde méxico',
    'pagar con oxxo',
    'envío seguro méxico',
    'comprar no exterior com PIX',
    'importação fácil',
    'ecommerce internacional brasil',
    'comprar en amazon desde chile',
    'envío internacional chile',
    'ecommerce global chile',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
