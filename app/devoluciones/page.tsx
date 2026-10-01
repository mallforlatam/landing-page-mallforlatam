import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Devoluciones — Mall for Latam',
  description: 'Política de cancelaciones y devoluciones de Mall for Latam.',
};

export default function ReturnsPage() {
  return (
    <LegalPage title="Devoluciones" updatedAt="30 de septiembre de 2026">
      <p>
        Mall for Latam actúa como intermediario de compra: compramos tu
        producto en la tienda de origen y lo enviamos hasta tu ciudad. Por
        eso, las devoluciones dependen en gran parte de la política de la
        tienda donde se compró el producto.
      </p>

      <h2>Antes de comprar el producto</h2>
      <p>
        Si tu pedido todavía está en estado &ldquo;pendiente de pago&rdquo; o
        &ldquo;verificando pago&rdquo;, puedes solicitar la cancelación sin costo
        escribiéndonos a{' '}
        <a href="mailto:soporte@mallforlatam.com">soporte@mallforlatam.com</a>.
      </p>

      <h2>Después de comprar el producto</h2>
      <p>
        Una vez que compramos el producto en la tienda de origen, una
        cancelación o devolución depende de la política de esa tienda:
      </p>
      <ul>
        <li>Si la tienda acepta la devolución, coordinamos el proceso contigo, pero los costos de envío de vuelta a Estados Unidos corren por tu cuenta.</li>
        <li>Si la tienda no acepta devoluciones (algo común en productos en oferta o de ciertas categorías), lamentablemente no podemos reembolsar el costo del producto.</li>
      </ul>

      <h2>Producto dañado o incorrecto</h2>
      <p>
        Si tu producto llega dañado o es distinto al que compraste,
        escríbenos con fotos a{' '}
        <a href="mailto:soporte@mallforlatam.com">soporte@mallforlatam.com</a>{' '}
        dentro de las 48 horas de recibido, y te ayudamos a gestionar el
        reclamo con la tienda de origen o el transportista correspondiente.
      </p>

      <h2>Comisión de servicio y envío</h2>
      <p>
        La comisión de servicio y los costos de envío ya ejecutados
        (producto comprado, consolidado o despachado) no son reembolsables,
        salvo que el problema se deba a un error de nuestra parte.
      </p>

      <p className="text-sm text-gray-400 mt-6">
        Nota: este documento es un borrador inicial redactado para la etapa
        beta de Mall for Latam. Antes del lanzamiento público recomendamos
        que sea revisado por un asesor legal.
      </p>
    </LegalPage>
  );
}
