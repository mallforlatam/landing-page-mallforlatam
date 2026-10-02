import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { LEGAL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Términos y Condiciones — Mall for Latam',
  description: 'Condiciones de uso del servicio de compra internacional de Mall for Latam.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Términos y Condiciones" updatedAt="1 de octubre de 2026">
      <p>
        Estos Términos y Condiciones regulan el uso de Mall for Latam (&ldquo;M4L&rdquo;),
        la extensión de Chrome y el dashboard en{' '}
        <a href="https://app.mallforlatam.com">app.mallforlatam.com</a>. Al
        crear una cuenta o usar nuestros servicios, aceptas estos términos.
      </p>

      <h2>Identificación del responsable</h2>
      <p>
        {LEGAL.titular}, con RUC {LEGAL.ruc}, que opera bajo el nombre
        comercial «{LEGAL.nombreComercial}», con domicilio en{' '}
        {LEGAL.direccion}, es la parte prestadora del servicio y contratante
        frente al usuario bajo estos Términos y Condiciones.
      </p>

      <h2>1. Qué es Mall for Latam</h2>
      <p>
        M4L es un servicio de intermediación de compras: compramos productos
        por ti en tiendas internacionales que no aceptan tarjetas o envíos
        directos a tu país, los recibimos en nuestro almacén en Miami, y
        coordinamos su envío consolidado hasta tu dirección en Latinoamérica
        (actualmente Perú). Pagas en soles a través de Yape, Plin o tarjeta.
      </p>

      <h2>2. Cómo funciona el pedido</h2>
      <ul>
        <li>Agregas productos a tu carrito desde la extensión de Chrome, en las tiendas compatibles.</li>
        <li>Completas tu dirección de envío y confirmas el pago en el dashboard.</li>
        <li>El subtotal de productos de un mismo pedido no puede superar los $200 USD — es un límite operativo mientras estamos en etapa inicial.</li>
        <li>Verificamos tu pago y te asignamos un código de pedido único (formato M4L-00001-2026).</li>
        <li>Compramos los productos, los consolidamos en Miami y los enviamos a tu ciudad; puedes seguir el estado de tu envío desde el dashboard.</li>
      </ul>

      <h2>3. Precios y comisiones</h2>
      <p>
        El costo total de tu pedido incluye: el precio de los productos, una
        comisión de servicio del 15% sobre ese subtotal, una tarifa de envío
        internacional (Miami → tu país) de $10 USD para paquetes de hasta 3.5
        kg, y una tarifa plana de envío nacional (actualmente $10 USD, aprox.
        S/ 35) dentro de Perú. Para pedidos que superen los 3.5 kg,
        coordinamos contigo el costo adicional antes de confirmar la compra.
        Te mostramos el total estimado en soles antes de confirmar el pago.
      </p>

      <h2>4. Pagos</h2>
      <p>
        Aceptamos Yape, Plin y tarjetas de crédito o débito. Nuestro equipo
        verifica cada pago en un plazo máximo de 48 horas hábiles; en cuanto
        lo confirmamos, tu pedido pasa a &ldquo;pago verificado&rdquo; y se
        te asigna tu código de pedido (formato M4L-00001-2026).
      </p>

      <h2>5. Envío y entrega</h2>
      <p>
        Una vez comprado el producto, tu pedido pasa por los siguientes
        estados: en almacén del proveedor, en tránsito de Miami a Lima (una
        vez asignado el transportista y número de tracking), y entregado.
        Los tiempos de entrega son estimados y pueden variar por factores
        fuera de nuestro control (aduanas, transportista, disponibilidad del
        producto en la tienda de origen).
      </p>

      <h2>6. Productos que no transportamos</h2>
      <p>
        Por disposición de Aduanas y de las normas de transporte aéreo, no
        podemos gestionar la compra ni el envío de:
      </p>
      <ul>
        <li>Productos inflamables</li>
        <li>Armas, municiones y explosivos</li>
        <li>Perfumes: máximo 4 unidades por pedido</li>
      </ul>
      {/* TODO: Lista pendiente de completar por César. No agregar restricciones por cuenta propia. */}
      <p>
        Si un pedido incluye productos no transportables, M4L lo notificará y
        procederá con la devolución del importe correspondiente a tu mismo
        método de pago en un plazo de 5 días hábiles.
      </p>

      <h2>7. Cancelaciones</h2>
      <p>
        Puedes solicitar la cancelación de tu pedido antes de que confirmemos
        la compra en la tienda de origen. Una vez comprado el producto, la
        cancelación depende de la política de devolución de cada tienda, y
        podría no ser posible o generar costos adicionales.
      </p>

      <h2>8. Uso aceptable</h2>
      <p>
        No debes usar M4L para comprar productos ilegales, falsificados, o
        prohibidos de importar a tu país. Nos reservamos el derecho de
        cancelar pedidos que incumplan esta condición o las políticas de las
        tiendas de origen.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        M4L actúa como intermediario de compra y envío. No somos responsables
        por defectos de fabricación de los productos (sujetos a la garantía
        del fabricante o la tienda de origen), ni por retrasos atribuibles a
        aduanas, transportistas o terceros. Estamos en etapa beta: el
        servicio puede presentar cambios o interrupciones mientras seguimos
        desarrollándolo.
      </p>

      <h2>10. Cambios a estos términos</h2>
      <p>
        Podemos actualizar estos términos conforme evoluciona el servicio.
        El uso continuado de M4L después de un cambio implica tu aceptación
        de los nuevos términos.
      </p>

      <h2>11. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú.
        Cualquier controversia se resolverá ante los tribunales competentes
        de Lima, Perú, salvo que la ley aplicable disponga lo contrario.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Para consultas sobre estos términos, escríbenos a{' '}
        <a href="mailto:soporte@mallforlatam.com">soporte@mallforlatam.com</a>.
      </p>
    </LegalPage>
  );
}
