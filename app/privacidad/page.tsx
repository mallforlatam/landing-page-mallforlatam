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
          envío, incluyendo el código de pedido que te asignamos.
        </li>
      </ul>
      <p>
        <strong>No almacenamos datos de tarjetas ni cuentas bancarias.</strong>{' '}
        Pagas con Yape, Plin o tarjeta, y nuestro equipo verifica cada pago
        — M4L nunca ve ni guarda el número completo de tu tarjeta ni tus
        datos bancarios.
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
      <p>
        Correo de privacidad en texto plano (por si tu lector no procesa
        enlaces <code>mailto:</code>):{' '}
        <span
          // Cloudflare "Email Address Obfuscation" reescribe cualquier
          // mailto:/email visible como /cdn-cgi/l/email-protection, lo que
          // vuelve el correo ilegible para un bot que no ejecuta JS (como el
          // revisor de Chrome Web Store). Este comentario HTML es el
          // mecanismo que Cloudflare documenta para excluir un bloque
          // puntual de esa reescritura — por eso se inyecta así y no como
          // texto JSX normal (JSX no puede emitir comentarios HTML reales).
          dangerouslySetInnerHTML={{
            __html: `<!--email_off-->${LEGAL.emailPrivacidad}<!--/email_off-->`,
          }}
        />
      </p>

      <h2 id="dominios-extension">10. Dominios donde opera la extensión</h2>
      <p>
        Nuestra extensión de Chrome solo puede ejecutarse en páginas de los
        siguientes dominios (es el permiso exacto declarado en su manifiesto):
      </p>
      <ul>
        <li>ebay.com (eBay)</li>
        <li>amazon.com (Amazon)</li>
        <li>walmart.com (Walmart)</li>
        <li>shein.com (Shein)</li>
        <li>tommy.com (Tommy Hilfiger)</li>
        <li>jomashop.com (Jomashop)</li>
      </ul>
      <p>
        En cualquier otro sitio web, la extensión está inactiva y no se
        ejecuta.
      </p>

      <h2 id="lo-que-no-recopilamos">11. Lo que no recopilamos</h2>
      <p>
        La extensión se activa únicamente en páginas de producto de los
        sitios listados arriba. No lee, almacena ni transmite tu historial de
        navegación, ni el contenido de otras páginas o pestañas que tengas
        abiertas — solo extrae los datos del producto (título, precio,
        imagen, enlace) cuando tú decides agregarlo a tu carrito.
      </p>

      <h2 id="uso-limitado-de-datos">12. Uso limitado de datos</h2>
      <p>
        El uso de los datos que recopilamos se limita exclusivamente al
        propósito declarado en esta política: procesar tus pedidos y
        operar el servicio de compra internacional. En particular:
      </p>
      <ul>
        <li>No vendemos tus datos personales a terceros.</li>
        <li>No los transferimos salvo lo estrictamente necesario para prestar el servicio (ver sección 3).</li>
        <li>No los usamos para publicidad, evaluación crediticia ni para ofrecer préstamos.</li>
      </ul>

      <h2 id="transferencia-internacional">13. Transferencia internacional de datos</h2>
      <p>
        Tus datos se almacenan en servidores de nuestros proveedores de
        infraestructura (base de datos y hosting), ubicados fuera del Perú.
        Esta transferencia internacional se realiza conforme a la Ley de
        Protección de Datos Personales (Ley N.º 29733) y su reglamento, y
        solo para los fines descritos en esta política.
      </p>

      <h2 id="eliminacion-de-datos">14. Eliminación de datos</h2>
      <p>
        Puedes solicitar la eliminación de tu cuenta y de tus datos
        personales escribiéndonos a{' '}
        <a href="mailto:privacidad@mallforlatam.com">privacidad@mallforlatam.com</a>.
        Procesamos estas solicitudes dentro de un plazo máximo de 30 días
        calendario, salvo que debamos conservar cierta información por
        obligaciones legales, contables o de resolución de disputas (ver
        sección 6).
      </p>

      <h2 id="analitica">15. Analítica</h2>
      <p>
        {/* TODO: confirmar en el panel de Vercel (Project → Analytics) si
            Web Analytics está activado a nivel de proyecto; eso no deja
            rastro en el código fuente y no se puede verificar desde aquí.
            Si está activado, esta sección debe actualizarse para
            declararlo. */}
        No utilizamos herramientas de analítica ni seguimiento de terceros en
        este sitio.
      </p>
    </LegalPage>
  );
}
