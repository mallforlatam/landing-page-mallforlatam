import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { LEGAL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Política de Privacidad — Mall for Latam',
  description: 'Cómo Mall for Latam recopila, usa y protege tus datos personales.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Política de Privacidad" updatedAt="1 de octubre de 2026">
      <p>
        En Mall for Latam (&ldquo;M4L&rdquo;, &ldquo;nosotros&rdquo;) te ayudamos a comprar en tiendas
        internacionales (como Amazon, eBay, Walmart, Shein, Tommy Hilfiger y
        Jomashop) y a recibir tus productos en Latinoamérica, pagando en tu
        moneda local. Esta política explica qué datos recopilamos, para qué los
        usamos y qué derechos tienes sobre ellos.
      </p>

      <h2>Identificación del responsable</h2>
      <p>
        {LEGAL.titular}, con RUC {LEGAL.ruc}, que opera bajo el nombre
        comercial «{LEGAL.nombreComercial}», con domicilio en{' '}
        {LEGAL.direccion}.
      </p>

      <h2>1. Qué datos recopilamos</h2>
      <ul>
        <li>
          <strong>Datos de contacto y cuenta:</strong> nombre, correo
          electrónico y teléfono cuando te registras en el dashboard o te
          unes a la lista de espera desde este sitio.
        </li>
        <li>
          <strong>Datos de envío:</strong> dirección, distrito, provincia y
          departamento de entrega en tu país, necesarios para coordinar el
          envío de Miami a tu ciudad.
        </li>
        <li>
          <strong>Datos de los productos que agregas:</strong> cuando usas
          nuestra extensión de Chrome, guardamos el título, precio, imagen y
          enlace de los productos que agregas a tu carrito, para poder
          mostrártelos en el checkout del dashboard.
        </li>
        <li>
          <strong>Datos del pedido:</strong> productos comprados, montos,
          método de pago elegido (Yape, Plin o tarjeta) y el estado de tu
          envío, incluyendo el código de guía que te asignamos.
        </li>
      </ul>
      <p>
        <strong>No almacenamos datos de tarjetas ni cuentas bancarias.</strong>{' '}
        Los pagos con Yape y Plin se coordinan manualmente por nuestro equipo
        (por ejemplo, por WhatsApp), y el pago con tarjeta se procesa a
        través de una pasarela de pagos externa cuando esté disponible — M4L
        nunca ve ni guarda el número completo de tu tarjeta.
      </p>

      <h2>2. Para qué usamos tus datos</h2>
      <ul>
        <li>Procesar y dar seguimiento a tus pedidos, de la compra a la entrega.</li>
        <li>Calcular costos de productos, comisión de servicio y envío.</li>
        <li>Contactarte sobre el estado de tu pedido, pagos o entregas.</li>
        <li>Responder tus consultas de soporte.</li>
        <li>Enviarte novedades si te uniste a nuestra lista de espera (puedes darte de baja cuando quieras).</li>
        <li>Mejorar la plataforma y prevenir fraude o uso indebido del servicio.</li>
      </ul>

      <h2>3. Con quién compartimos tus datos</h2>
      <p>
        Compartimos la información mínima necesaria con: transportistas
        internacionales (ej. FedEx, UPS, DHL) para el tramo Miami–tu ciudad, y
        proveedores de infraestructura (hosting, base de datos, envío de
        correos transaccionales) que procesan datos en nuestro nombre bajo
        acuerdos de confidencialidad. No vendemos tus datos personales a
        terceros.
      </p>

      <h2>4. Extensión de Chrome y almacenamiento local</h2>
      <p>
        La extensión guarda tu carrito temporalmente en el almacenamiento
        local de tu navegador (<code>chrome.storage.local</code>), que no es
        accesible por los sitios web que visitas. Al agregar un producto,
        también lo registramos en nuestra base de datos para que puedas
        completar la compra desde el dashboard en cualquier momento.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        De acuerdo con la Ley de Protección de Datos Personales (Ley N.º
        29733) de Perú y normas equivalentes en otros países donde operamos,
        puedes solicitar acceso, rectificación, cancelación u oposición
        (derechos ARCO) sobre tus datos personales escribiéndonos a{' '}
        <a href="mailto:privacidad@mallforlatam.com">privacidad@mallforlatam.com</a>.
      </p>

      <h2>6. Conservación de datos</h2>
      <p>
        Conservamos los datos de tu cuenta y pedidos mientras mantengas una
        cuenta activa con nosotros, y por el tiempo adicional necesario para
        cumplir obligaciones legales, contables o de resolución de disputas.
      </p>

      <h2>7. Menores de edad</h2>
      <p>
        Mall for Latam no está dirigido a menores de 18 años y no
        recopilamos intencionalmente datos de menores.
      </p>

      <h2>8. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política conforme evoluciona el servicio.
        Publicaremos cualquier cambio relevante en esta misma página con su
        nueva fecha de actualización.
      </p>

      <h2>9. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta política, escríbenos a{' '}
        <a href="mailto:privacidad@mallforlatam.com">privacidad@mallforlatam.com</a>.
      </p>
    </LegalPage>
  );
}
