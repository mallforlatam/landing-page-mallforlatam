import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Centro de Ayuda — Mall for Latam',
  description: 'Preguntas frecuentes sobre cómo comprar, pagar y recibir tus pedidos con Mall for Latam.',
};

export default function HelpCenterPage() {
  return (
    <LegalPage title="Centro de Ayuda" updatedAt="30 de septiembre de 2026">
      <p>
        Respuestas a las preguntas más comunes sobre Mall for Latam. Si no
        encuentras lo que buscas, escríbenos desde la página de{' '}
        <a href="/contacto">Contacto</a>.
      </p>

      <h2>¿Cómo compro con Mall for Latam?</h2>
      <p>
        Instala nuestra extensión de Chrome, agrega productos desde Amazon,
        eBay, Walmart, Shein, Tommy Hilfiger o Jomashop, y luego ve al{' '}
        <a href="https://app.mallforlatam.com">dashboard</a> para confirmar
        tu dirección y tu pago.
      </p>

      <h2>¿Hay un límite de compra?</h2>
      <p>
        Sí, mientras estamos en esta primera etapa, el subtotal de productos
        de un mismo pedido no puede superar los $200 USD. Puedes dividir
        compras más grandes en varios pedidos.
      </p>

      <h2>¿Cómo pago?</h2>
      <p>
        Con Yape, Plin o tarjeta. Te mostramos el total en soles antes de
        confirmar. Más detalles en <a href="/precios">Precios</a>.
      </p>

      <h2>¿Cómo sé en qué estado está mi pedido?</h2>
      <p>
        Cuando validamos tu pago, te asignamos un código de guía único
        (formato M4L-00001-2026) que puedes ver en el dashboard. Tu pedido
        pasa por: en almacén del proveedor → en tránsito de Miami a Lima →
        entregado. Más detalles en <a href="/envios">Información de Envíos</a>.
      </p>

      <h2>¿Qué pasa si el precio aparece en otra moneda?</h2>
      <p>
        Nuestra extensión detecta cuando una tienda muestra el precio en una
        moneda distinta al dólar (por ejemplo, soles en Shein) y lo convierte
        automáticamente, mostrándote ambos montos para que siempre sepas qué
        estás pagando.
      </p>

      <h2>¿Puedo cancelar mi pedido?</h2>
      <p>
        Sí, mientras no hayamos comprado el producto en la tienda de origen.
        Una vez comprado, la cancelación depende de la política de
        devolución de cada tienda — más detalles en{' '}
        <a href="/devoluciones">Devoluciones</a>.
      </p>

      <h2>¿Dónde queda el almacén de consolidación?</h2>
      <p>
        En Miami, Estados Unidos. Ahí recibimos tus productos comprados en
        distintas tiendas, los consolidamos en un solo envío y los enviamos
        a tu ciudad en Perú.
      </p>
    </LegalPage>
  );
}
