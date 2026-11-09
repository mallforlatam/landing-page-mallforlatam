import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Precios — Mall for Latam',
  description: 'Cómo se calcula el costo de tu pedido en Mall for Latam: producto, comisión de servicio y envío.',
};

export default function PricingPage() {
  return (
    <LegalPage title="Precios" updatedAt="8 de noviembre de 2026">
      <p>
        En Mall for Latam no cobramos membresía ni cuotas mensuales. Pagas
        solo cuando compras, y vemos el costo total antes de confirmar tu
        pedido — sin sorpresas en soles.
      </p>

      <h2>¿De qué se compone el costo de tu pedido?</h2>
      <ul>
        <li>
          <strong>Precio del producto:</strong> el precio que la tienda de
          origen (Amazon, eBay, Walmart, Shein, Tommy Hilfiger, Jomashop, Macy&apos;s
          o Sephora)
          muestra en el momento de agregarlo a tu carrito.
        </li>
        <li>
          <strong>Comisión de servicio (15%):</strong> cubre la compra en tu
          nombre, la recepción y consolidación en nuestro almacén de Miami,
          y la coordinación de todo el proceso.
        </li>
        <li>
          <strong>Servicios internacionales ($15 USD por pedido):</strong>{' '}
          incluye la gestión y el procesamiento de tu pedido y el envío
          internacional de Miami a Perú para paquetes de hasta 3.5 kg. Es un
          monto fijo, sin importar cuántos productos incluya. Si tu pedido
          supera los 3.5 kg, coordinamos contigo el costo adicional antes de
          confirmar la compra.
        </li>
        <li>
          <strong>Envío nacional (tarifa plana $10 USD, aprox. S/ 35):</strong>{' '}
          cubre el envío desde que el paquete llega a Perú hasta la puerta de
          tu casa, sin importar el departamento.
        </li>
      </ul>

      <h2>Límite por pedido</h2>
      <p>
        Mientras estamos en esta primera etapa, el subtotal de productos de
        un mismo pedido no puede superar los <strong>$200 USD</strong>. Si
        quieres comprar productos por un monto mayor, puedes dividirlos en
        más de un pedido.
      </p>

      <h2>¿En qué moneda pago?</h2>
      <p>
        Todos los precios se calculan en dólares y se te muestra el
        equivalente en soles al tipo de cambio del día antes de confirmar el
        pago, para que sepas exactamente cuánto vas a pagar con Yape, Plin o
        tarjeta.
      </p>

      <h2>Métodos de pago</h2>
      <p>
        Aceptamos <strong>Yape</strong>, <strong>Plin</strong> y{' '}
        <strong>tarjetas de crédito o débito</strong>. Nuestro equipo
        verifica cada pago y te confirma por este medio. No almacenamos
        datos de tu tarjeta — más detalles en nuestra{' '}
        <a href="/privacidad">Política de Privacidad</a>.
      </p>
    </LegalPage>
  );
}
