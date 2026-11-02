import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Extensión de Chrome — Mall for Latam',
  description: 'Agrega productos de tus tiendas internacionales favoritas a tu carrito Mall for Latam con un clic.',
};

export default function ExtensionPage() {
  return (
    <LegalPage title="Extensión de Chrome" updatedAt="2 de noviembre de 2026">
      <p>
        Nuestra extensión de Chrome te permite agregar productos a tu
        carrito de Mall for Latam directamente desde la página del producto,
        sin copiar y pegar enlaces ni cambiar de pestaña.
      </p>

      <h2>Tiendas compatibles</h2>
      <ul>
        <li>Amazon</li>
        <li>eBay</li>
        <li>Walmart</li>
        <li>Shein</li>
        <li>Tommy Hilfiger</li>
        <li>Jomashop</li>
        <li>Macy&apos;s</li>
        <li>Sephora</li>
      </ul>
      <p>Seguimos agregando más tiendas conforme avanzamos.</p>

      <h2>Cómo funciona</h2>
      <ul>
        <li>Navega en cualquiera de las tiendas compatibles y abre el producto que quieres comprar.</li>
        <li>Elige la talla, el color u otras opciones en la página de la tienda.</li>
        <li>Abre el panel flotante &ldquo;M4L&rdquo;: verás el producto con las opciones que elegiste. Si quieres, agrega detalles y haz clic en &ldquo;Agregar al Carrito&rdquo;.</li>
        <li>Si el precio aparece en una moneda distinta al dólar (por ejemplo soles), la extensión lo detecta y lo convierte automáticamente, mostrándote ambos montos para que no haya sorpresas.</li>
        <li>Cuando termines de agregar productos, ve al dashboard para completar tu dirección y tu pago.</li>
      </ul>

      <h2>Disponibilidad</h2>
      <p>
        La extensión es gratuita y está disponible en la{' '}
        <a
          href="https://chromewebstore.google.com/detail/mall-for-latam/bjikknniacbklmndgaiepoipcahffjal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome Web Store
        </a>
        . Haz clic en &ldquo;Agregar a Chrome&rdquo; y confirma la instalación.
      </p>
    </LegalPage>
  );
}
