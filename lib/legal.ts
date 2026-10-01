// Datos de identificación del titular del negocio. Única fuente de verdad —
// todas las páginas legales importan de aquí en vez de repetir los datos.
//
// El RUC empieza en 10 (persona natural con negocio), así que "Mall for
// Latam" es nombre comercial, NO razón social — no usar ese término en
// ningún texto legal.
export const LEGAL = {
  titular: "Salomé Alayo",
  ruc: "10413034367",
  nombreComercial: "Mall for Latam",
  direccion:
    "Calle 1 Nro. 141, Urb. Los Precursores 4A, Santiago de Surco, Lima, Perú",
  emailSoporte: "soporte@mallforlatam.com",
  emailPrivacidad: "privacidad@mallforlatam.com",
} as const;
