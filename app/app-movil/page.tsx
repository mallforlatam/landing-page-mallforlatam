import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'App Móvil — Mall for Latam',
  description: 'La app móvil de Mall for Latam está en nuestra hoja de ruta.',
};

export default function MobileAppPage() {
  return (
    <LegalPage title="App Móvil" updatedAt="30 de septiembre de 2026">
      <p>
        Hoy puedes usar Mall for Latam desde nuestra extensión de Chrome
        (para agregar productos) y desde el dashboard web en{' '}
        <a href="https://app.mallforlatam.com">app.mallforlatam.com</a> (para
        pagar, hacer seguimiento de tu pedido y gestionar tu cuenta) — ambos
        funcionan perfectamente desde el navegador de tu celular.
      </p>

      <h2>¿Y la app móvil?</h2>
      <p>
        Una app nativa está en nuestra hoja de ruta de producto, pero{' '}
        <strong>todavía no está disponible</strong>. Estamos enfocados en
        afinar la experiencia web y la extensión de Chrome en esta primera
        etapa.
      </p>
      <p>
        Únete a nuestra lista de espera desde la página principal y te
        avisaremos apenas tengamos novedades.
      </p>
    </LegalPage>
  );
}
