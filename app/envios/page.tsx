import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Información de Envíos — Mall for Latam',
  description: 'Cómo funciona el envío consolidado de Mall for Latam desde Miami hasta tu ciudad en Perú.',
};

export default function ShippingInfoPage() {
  return (
    <LegalPage title="Información de Envíos" updatedAt="30 de septiembre de 2026">
      <p>
        Mall for Latam consolida tus compras de distintas tiendas
        internacionales en nuestro almacén de Miami y las envía en un solo
        paquete hasta tu ciudad en Perú.
      </p>

      <h2>El recorrido de tu pedido</h2>
      <ul>
        <li>
          <strong>En almacén del proveedor:</strong> compramos tu producto y
          lo recibimos directamente de la tienda de origen (Amazon, eBay,
          Walmart, Shein, Tommy Hilfiger o Jomashop) en nuestro almacén de
          Miami.
        </li>
        <li>
          <strong>En tránsito de Miami a Lima:</strong> una vez que el
          paquete sale de Miami, te asignamos el transportista (por ejemplo
          FedEx, UPS o DHL) y su número de tracking.
        </li>
        <li>
          <strong>Entregado:</strong> tu pedido llega a la dirección que
          registraste en el checkout.
        </li>
      </ul>
      <p>
        Puedes seguir cada paso desde tu pedido en el{' '}
        <a href="https://app.mallforlatam.com">dashboard</a>, usando el
        código de guía (formato M4L-00001-2026) que te asignamos cuando
        validamos tu pago.
      </p>

      <h2>Costos de envío</h2>
      <ul>
        <li>
          <strong>Envío nacional:</strong> tarifa plana de $10 USD
          (aprox. S/ 35) a cualquier departamento del Perú.
        </li>
        <li>
          <strong>Envío internacional (Miami → Perú):</strong> se calcula
          según el peso y volumen de tu paquete consolidado, y te lo
          mostramos antes de que salga de Miami.
        </li>
      </ul>

      <h2>Tiempos estimados</h2>
      <p>
        Los tiempos varían según la tienda de origen, la disponibilidad del
        producto y los procesos de aduana — son estimados, no garantizados.
        Te mantenemos informado en cada cambio de estado desde el dashboard.
      </p>
    </LegalPage>
  );
}
