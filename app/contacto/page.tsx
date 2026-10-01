import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';
import { LEGAL } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Contacto — Mall for Latam',
  description: 'Escríbenos si tienes preguntas sobre tu pedido o sobre Mall for Latam.',
};

export default function ContactPage() {
  return (
    <LegalPage title="Contáctanos" updatedAt="1 de octubre de 2026">
      <p>
        Estamos en etapa beta y nuestro equipo responde personalmente cada
        mensaje. Escríbenos y te contestamos a la brevedad.
      </p>

      <h2>Identificación del responsable</h2>
      <p>
        {LEGAL.titular}, con RUC {LEGAL.ruc}, que opera bajo el nombre
        comercial «{LEGAL.nombreComercial}», con domicilio en{' '}
        {LEGAL.direccion}.
      </p>

      <h2>Soporte y pedidos</h2>
      <p>
        Para consultas sobre un pedido, pagos o el estado de tu envío:{' '}
        <a href="mailto:soporte@mallforlatam.com">soporte@mallforlatam.com</a>
      </p>

      <h2>Privacidad y datos personales</h2>
      <p>
        Para solicitudes sobre tus datos personales (acceso, rectificación,
        cancelación u oposición):{' '}
        <a href="mailto:privacidad@mallforlatam.com">privacidad@mallforlatam.com</a>
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

      <h2>¿Primera vez comprando con nosotros?</h2>
      <p>
        Revisa primero nuestro <a href="/ayuda">Centro de Ayuda</a> — ahí
        respondemos las preguntas más comunes sobre cómo funciona el
        servicio, precios y envíos.
      </p>
    </LegalPage>
  );
}
