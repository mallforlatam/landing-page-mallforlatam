import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal-page';

export const metadata: Metadata = {
  title: 'Acerca de Nosotros — Mall for Latam',
  description: 'La misión de Mall for Latam: compra globalmente, paga localmente.',
};

export default function AboutPage() {
  return (
    <LegalPage title="Acerca de Nosotros" updatedAt="30 de septiembre de 2026">
      <p>
        Mall for Latam nació de un problema muy concreto: millones de
        personas en Latinoamérica no pueden comprar en tiendas como Amazon,
        eBay o Walmart porque no tienen una tarjeta internacional, ni una
        dirección en Estados Unidos a dónde recibir sus productos.
      </p>

      <h2>Nuestra misión</h2>
      <p>
        <strong>Compra globalmente, paga localmente.</strong> Eliminamos las
        barreras de las compras internacionales: compramos el producto por
        ti, lo consolidamos en nuestro almacén de Miami, y lo enviamos hasta
        tu puerta — pagando en soles, con Yape, Plin o tarjeta.
      </p>

      <h2>Por qué empezamos en Perú</h2>
      <p>
        Empezamos por Perú porque es donde mejor entendemos las barreras
        reales: el acceso limitado a tarjetas internacionales, el alto costo
        del envío internacional directo, y la preferencia por pagar con
        billeteras digitales locales como Yape y Plin. Estamos en etapa
        beta, construyendo el producto junto a nuestros primeros
        compradores antes de expandirnos a más países de la región.
      </p>

      <h2>Cómo lo hacemos</h2>
      <p>
        Nuestra extensión de Chrome te deja agregar productos de tus tiendas
        favoritas con un clic. Nuestro dashboard calcula el costo total por
        adelantado — producto, comisión de servicio y envío — sin
        sorpresas. Y nuestro equipo se encarga de todo el proceso: compra,
        consolidación en Miami y envío hasta tu ciudad, con seguimiento en
        cada paso.
      </p>
    </LegalPage>
  );
}
