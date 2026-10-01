import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Carreras — Mall for Latam',
  description: 'Oportunidades de trabajo en Mall for Latam.',
};

export default function CareersPage() {
  return (
    <LegalPage title="Carreras" updatedAt="30 de septiembre de 2026">
      <p>
        Mall for Latam está en etapa beta y por ahora no tenemos vacantes
        abiertas de forma formal.
      </p>
      <p>
        Si te interesa ser parte del equipo más adelante, escríbenos a{' '}
        <a href="mailto:soporte@mallforlatam.com">soporte@mallforlatam.com</a>{' '}
        contándonos en qué te gustaría colaborar — guardamos tu información
        para cuando abramos nuevas posiciones.
      </p>
    </LegalPage>
  );
}
