# Mall for Latam — Landing Page

## 🚀 Resumen del Proyecto

Landing page del MVP de Mall for Latam. Sitio público en Next.js que presenta la propuesta de valor “Compra globalmente, paga localmente”, formulario de waitlist y contenido SEO multilenguaje (ES/EN/PT).

## 📝 Changelog

### v2 — Rebranding, contenido real y páginas legales (30 sep 2026)

**Marca**
- Colores corporativos (`#5b66ff` / `#cc00ff`) en lugar del gradiente genérico azul/morado/rosa.
- Logos reales (header, footer, favicon, apple-touch-icon e imagen Open Graph generada dinámicamente) en vez del ícono placeholder.

**Navegación y CTAs**
- Un solo botón "Comenzar" en el header (antes duplicaba "Iniciar Sesión" + "Comenzar" hacia el mismo destino).
- "Comenzar" / "Unirse al Programa Beta" enlazan al dashboard (`app.mallforlatam.com`).
- Botón "Descargar Extensión de Chrome" con estado "Próximamente" (aviso vía toast) mientras la extensión está en revisión en la Chrome Web Store.
- Selector de idioma simplificado: solo ícono de globo + código (ES/EN/PT), sin banderas.

**Contenido honesto**
- Reemplazadas las cifras inventadas (50+ tiendas, 15 países, 99.9% uptime, "4.9/5 de 2,000+ reseñas") por cifras reales (+10 tiendas, +50 pedidos entregados).
- Reemplazados los 3 testimonios ficticios por testimonios reales de clientes (Alejandra, César, Gloria), traducidos a los 3 idiomas.
- Corregida la mención de tiendas no soportadas (AliExpress, Zara) por las tiendas reales integradas (Amazon, eBay, Walmart, Shein, Tommy Hilfiger, Jomashop).

**Páginas nuevas (antes texto muerto en el footer)**
- Legales: Política de Privacidad, Términos y Condiciones, Política de Cookies.
- Producto: Precios (comisión 15%, envío nacional $10, límite $200/pedido), Extensión de Chrome, App Móvil (honesto: aún no existe, está en el roadmap).
- Soporte: Centro de Ayuda (FAQ), Contáctanos, Información de Envíos (ciclo de tracking M4L-00001-2026), Devoluciones.
- Empresa: Acerca de Nosotros, Carreras (honesto: sin vacantes abiertas por ahora).
- "Cómo funciona" ahora enlaza a la sección correspondiente del home en vez de ser texto sin acción.

**Accesibilidad y SEO**
- Label visible en el input de email del hero (antes solo placeholder).
- "Iniciar Sesión"/"Comenzar" ya no desaparece en mobile.
- Metadata Open Graph/Twitter + `viewport` export (antes ausentes).
- Limpieza de repo: eliminado el scaffold duplicado de Bolt.new (`project_mall4latam/`, `.bolt/`).

## 🏗️ Arquitectura

### Arquitectura de Microservicios (visión producto)
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   App Web       │    │   App Móvil     │    │ Extensión Chrome│
│   (Next.js)     │    │ (React Native)  │    │   (Manifest V3) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │   Gateway API   │
                    │   (FastAPI)     │
                    └─────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Gestión de      │    │ Catálogo de     │    │ Servicio de     │
│ Usuarios        │    │ Productos       │    │ Pedidos         │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Servicio de     │    │ Servicio de     │    │ Asistente IA    │
│ Pagos           │    │ Logística       │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Stack Tecnológico
- **Frontend**: Next.js 14 + TypeScript + TailwindCSS + shadcn/ui
- **Landing**: App Router, i18n simple en `lib/i18n.ts`, toasts, formulario de waitlist con API en `/app/api/waitlist`.
- **Despliegue**: Vercel (recomendado)

## 📅 Hoja de Ruta de Desarrollo (3 Semanas)

### Semana 1: Fundación Central
- [x] Configuración del proyecto y arquitectura
- [ ] Sistema de autenticación de usuarios
- [ ] Catálogo básico de productos
- [ ] Endpoints principales de API
- [ ] Esquema de base de datos

### Semana 2: Descubrimiento de Productos y Carrito
- [ ] Desarrollo de extensión Chrome
- [ ] Motor de web scraping
- [ ] Sistema de carrito unificado
- [ ] Motor de cálculo de precios
- [ ] Integración multi-tienda

### Semana 3: Pagos y Logística
- [ ] Procesamiento de pagos
- [ ] Calculadora de envíos
- [ ] Sistema de seguimiento de pedidos
- [ ] PWA móvil
- [ ] Pruebas y despliegue

## 🚀 Comenzando

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🔗 Repositorio y Git

Este proyecto se publica en GitHub bajo la organización `mallforlatam`:

- Remoto: `https://github.com/mallforlatam/landing-page-mallforlatam`
- Rama principal: `main`

Flujo sugerido:

```bash
# Inicializar Git (si no existe)
git init
git checkout -b main

# Configurar remoto
git remote add origin https://github.com/mallforlatam/landing-page-mallforlatam.git

# Commit inicial
git add .
git commit -m "chore: initial landing page setup"
git push -u origin main
```

## 🚀 Despliegue en Vercel

1. Importa el repo en Vercel.
2. Framework: `Next.js`.
3. Variables de entorno (si aplica).
4. Deploy automático en cada push a `main`.

## 📊 Métricas de Éxito
- **Técnicas**: Build estable, Lighthouse >90 en Performance/SEO/Accesibilidad
- **Negocio**: CTR y conversiones de waitlist por país
- **SEO**: Keywords head y long tail posicionadas por región