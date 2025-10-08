# Mall for Latam — Landing Page

## 🚀 Resumen del Proyecto

Landing page del MVP de Mall for Latam. Sitio público en Next.js que presenta la propuesta de valor “Compra globalmente, paga localmente”, formulario de waitlist y contenido SEO multilenguaje (ES/EN/PT).

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