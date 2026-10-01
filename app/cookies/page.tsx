import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Política de Cookies — Mall for Latam',
  description: 'Qué cookies y almacenamiento local usa Mall for Latam y cómo gestionarlas.',
};

export default function CookiesPolicyPage() {
  return (
    <LegalPage title="Política de Cookies" updatedAt="30 de septiembre de 2026">
      <p>
        Esta página explica qué cookies y tecnologías de almacenamiento
        similares usa Mall for Latam en este sitio, en el dashboard
        (<a href="https://app.mallforlatam.com">app.mallforlatam.com</a>) y en
        nuestra extensión de Chrome.
      </p>

      <h2>1. Cookies esenciales</h2>
      <p>
        Usamos cookies y almacenamiento local estrictamente necesarios para
        que la plataforma funcione: mantener tu sesión iniciada en el
        dashboard, recordar tu idioma preferido en este sitio, y procesar tu
        inscripción a la lista de espera. Sin estas, el servicio no
        funcionaría correctamente, y por eso no requieren tu consentimiento
        previo.
      </p>

      <h2>2. Almacenamiento local de la extensión</h2>
      <p>
        Nuestra extensión de Chrome usa el almacenamiento local del
        navegador (<code>chrome.storage.local</code>) para guardar
        temporalmente los productos que agregas a tu carrito mientras
        navegas. Este almacenamiento vive solo en tu navegador y no es un
        cookie de sitio web ni es accesible por las tiendas que visitas.
      </p>

      <h2>3. Cookies de análisis</h2>
      <p>
        Actualmente este sitio <strong>no utiliza cookies de analítica ni de
        publicidad de terceros</strong>. Si en el futuro incorporamos
        herramientas de analítica (por ejemplo, para entender qué páginas
        visitas y mejorar el sitio), actualizaremos esta política antes de
        activarlas y te pediremos tu consentimiento cuando la ley lo
        requiera.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes eliminar o bloquear cookies desde la configuración de tu
        navegador. Ten en cuenta que bloquear las cookies esenciales puede
        impedir que puedas iniciar sesión o usar el dashboard correctamente.
      </p>

      <h2>5. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política de cookies conforme evoluciona el
        servicio. Publicaremos cualquier cambio relevante en esta misma
        página con su nueva fecha de actualización.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tienes preguntas sobre el uso de cookies, escríbenos a{' '}
        <a href="mailto:privacidad@mallforlatam.com">privacidad@mallforlatam.com</a>.
      </p>

      <p className="text-sm text-gray-400 mt-6">
        Nota: este documento es un borrador inicial redactado para la etapa
        beta de Mall for Latam, y se actualizará si se incorporan nuevas
        herramientas de analítica o marketing.
      </p>
    </LegalPage>
  );
}
