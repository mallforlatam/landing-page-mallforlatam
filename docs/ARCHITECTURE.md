# Mall for Latam - Arquitectura Técnica

## 🏗️ Resumen de la Arquitectura del Sistema

### Arquitectura de Alto Nivel
```
┌─────────────────────────────────────────────────────────────────┐
│                        Capa Cliente                             │
├─────────────────┬─────────────────┬─────────────────────────────┤
│   App Web       │   App Móvil     │   Extensión Chrome          │
│   (Next.js)     │ (React Native)  │   (Manifest V3)             │
│   - Dashboard   │   - UI Nativa   │   - Scraper Productos       │
│   - Checkout    │   - Push Notif  │   - Rastreador Precios      │
│   - Seguimiento │   - Biométricos │   - Agregar Rápido Carrito  │
└─────────────────┴─────────────────┴─────────────────────────────┘
                                │
                    ┌─────────────────┐
                    │   CDN/Borde     │
                    │   (Vercel)      │
                    └─────────────────┘
                                │
                    ┌─────────────────┐
                    │   Gateway API   │
                    │   (FastAPI)     │
                    │   - Límite Tasa │
                    │   - Autenticación│
                    │   - Enrutamiento│
                    └─────────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         │                      │                      │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Servicios Core  │    │ Servicios de    │    │ Servicios IA/ML │
│                 │    │ Integración     │    │                 │
│ • Gestión Users │    │ • Scraping      │    │ • Chatbot       │
│ • Cat Productos │    │ • Pagos         │    │ • Recomendaciones│
│ • Carrito/Pedidos│   │ • Logística     │    │ • Predicción    │
│ • Notificaciones│    │ • Webhooks      │    │ • Detección Fraude│
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                      │                      │
         └──────────────────────┼──────────────────────┘
                                │
                    ┌─────────────────┐
                    │   Capa de Datos │
                    │                 │
                    │ • PostgreSQL    │
                    │ • Redis Cache   │
                    │ • Almacenamiento│
                    │ • BD Vectorial  │
                    └─────────────────┘
```

## 🔧 Stack Tecnológico

### Stack Frontend
```typescript
// Aplicación Web
- Framework: Next.js 14+ (App Router)
- Lenguaje: TypeScript 5.0+
- Estilos: TailwindCSS + shadcn/ui
- Estado: Zustand + React Query
- Formularios: React Hook Form + Zod
- Gráficos: Recharts
- Iconos: Lucide React

// Aplicación Móvil  
- Framework: React Native + Expo
- Navegación: Expo Router
- Estilos: NativeWind (Tailwind para RN)
- Estado: Zustand + React Query
- Push: Expo Notifications

// Extensión Chrome
- Manifest: V3
- Framework: React + TypeScript
- Build: Vite
- Almacenamiento: Chrome Storage API
- Mensajería: Chrome Runtime API
```

### Stack Backend
```python
# API Central
- Framework: FastAPI 0.104+
- Lenguaje: Python 3.11+
- ASGI: Uvicorn
- Validación: Pydantic V2
- ORM: SQLAlchemy 2.0 + Alembic
- Autenticación: Supabase Auth + JWT

# Base de Datos y Cache
- BD Principal: PostgreSQL 15+
- Cache: Redis 7.0+
- BD Vectorial: Pinecone (para IA)
- Almacenamiento: Supabase Storage

# Trabajos en Segundo Plano
- Cola: Celery + Redis
- Programador: Celery Beat
- Monitoreo: Flower
```

### Infraestructura y DevOps
```yaml
# Despliegue
- Frontend: Vercel (Edge Functions)
- Backend: Railway/Render (Docker)
- Base de Datos: Supabase (PostgreSQL Gestionado)
- Cache: Upstash Redis
- CDN: Vercel Edge Network

# Monitoreo y Observabilidad
- APM: Sentry (Seguimiento de Errores)
- Analytics: PostHog (Analytics de Producto)
- Disponibilidad: Uptime Robot
- Logs: JSON Estructurado + Sentry

# CI/CD
- Control de Versiones: Git + GitHub
- CI/CD: GitHub Actions
- Pruebas: Pytest + Playwright
- Calidad de Código: Black + Ruff + mypy
```

## 📊 Esquema de Base de Datos

### Entidades Principales
```sql
-- Usuarios y Autenticación
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    phone VARCHAR(20),
    country_code VARCHAR(2) DEFAULT 'PE',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Direcciones de Usuario
CREATE TABLE user_addresses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) DEFAULT 'shipping', -- shipping, billing
    street_address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(2) NOT NULL,
    is_default BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Productos (Extraídos de fuentes externas)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    external_id VARCHAR(255) NOT NULL, -- Amazon ASIN, etc.
    source_store VARCHAR(50) NOT NULL, -- amazon, aliexpress, zara
    source_url TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    brand VARCHAR(255),
    category VARCHAR(255),
    images JSONB, -- Array of image URLs
    variants JSONB, -- Size, color, etc.
    base_price DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) NOT NULL,
    availability VARCHAR(20) DEFAULT 'in_stock',
    last_scraped_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(external_id, source_store)
);

-- Carrito de Compras
CREATE TABLE cart_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    selected_variant JSONB, -- Selected size, color, etc.
    added_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, product_id, selected_variant)
);

-- Pedidos
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, confirmed, shipped, delivered
    subtotal DECIMAL(10,2) NOT NULL,
    shipping_cost DECIMAL(10,2) NOT NULL,
    tax_amount DECIMAL(10,2) NOT NULL,
    service_fee DECIMAL(10,2) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    shipping_address JSONB NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'pending',
    payment_method VARCHAR(50),
    tracking_number VARCHAR(255),
    estimated_delivery DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Artículos de Pedido
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    selected_variant JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seguimiento de Envío
CREATE TABLE shipping_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    event_type VARCHAR(50) NOT NULL, -- picked_up, in_transit, delivered
    description TEXT,
    location VARCHAR(255),
    timestamp TIMESTAMPTZ NOT NULL,
    carrier VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔄 Diseño de API

### Endpoints RESTful
```python
# Autenticación
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
GET    /api/v1/auth/me
PUT    /api/v1/auth/profile

# Productos
GET    /api/v1/products/search?q={query}&store={store}
POST   /api/v1/products/import    # Importar desde URL
GET    /api/v1/products/{id}
PUT    /api/v1/products/{id}/refresh  # Re-extraer datos

# Gestión de Carrito
GET    /api/v1/cart
POST   /api/v1/cart/items
PUT    /api/v1/cart/items/{id}
DELETE /api/v1/cart/items/{id}
POST   /api/v1/cart/calculate     # Calcular costos totales

# Pedidos
POST   /api/v1/orders             # Crear pedido
GET    /api/v1/orders
GET    /api/v1/orders/{id}
GET    /api/v1/orders/{id}/tracking

# Envío
POST   /api/v1/shipping/calculate
GET    /api/v1/shipping/carriers
POST   /api/v1/shipping/track

# Pagos
POST   /api/v1/payments/intent    # Crear intención de pago
POST   /api/v1/payments/confirm   # Confirmar pago
GET    /api/v1/payments/methods   # Métodos de pago disponibles

# Asistente IA
POST   /api/v1/ai/chat
GET    /api/v1/ai/recommendations
```

### Eventos WebSocket
```typescript
// Actualizaciones en tiempo real
interface WebSocketEvents {
  // Actualizaciones de estado de pedido
  'order:status_changed': {
    orderId: string;
    status: OrderStatus;
    timestamp: string;
  };
  
  // Cambios de precio
  'product:price_changed': {
    productId: string;
    oldPrice: number;
    newPrice: number;
    currency: string;
  };
  
  // Actualizaciones de envío
  'shipping:tracking_update': {
    orderId: string;
    event: ShippingEvent;
    location: string;
  };
}
```

## 🔐 Arquitectura de Seguridad

### Autenticación y Autorización
```typescript
// Estructura del Token JWT
interface JWTPayload {
  sub: string;        // ID de Usuario
  email: string;      // Email de Usuario
  role: 'user' | 'admin';
  iat: number;        // Emitido en
  exp: number;        // Expira en
  aud: string;        // Audiencia
  iss: string;        // Emisor
}

// Control de Acceso Basado en Roles
const permissions = {
  user: [
    'cart:read', 'cart:write',
    'orders:read', 'orders:create',
    'profile:read', 'profile:write'
  ],
  admin: [
    'users:read', 'users:write',
    'products:read', 'products:write',
    'orders:read', 'orders:write',
    'analytics:read'
  ]
};
```

### Protección de Datos
```python
# Cifrado en Reposo
- Base de Datos: Cifrado AES-256 (Supabase)
- Almacenamiento de Archivos: Cifrado del lado del servidor
- Secretos: Variables de entorno + Vault

# Cifrado en Tránsito
- HTTPS/TLS 1.3 para todas las llamadas API
- WSS para conexiones WebSocket
- Certificate pinning para apps móviles

# Manejo de Datos PII
- Datos de tarjeta de crédito: Nunca almacenados (tokenizados vía Stripe)
- Direcciones: Cifradas en base de datos
- Números de teléfono: Hash para búsqueda
- Email: Cifrado para almacenamiento
```

## 📈 Estrategia de Escalabilidad

### Escalado Horizontal
```yaml
# Balanceador de Carga
- Gateway API: Múltiples instancias detrás del balanceador
- Base de Datos: Réplicas de lectura para distribución de consultas
- Cache: Redis Cluster para alta disponibilidad
- CDN: Ubicaciones edge globales para assets estáticos

# Descomposición de Microservicios
services:
  - user-service:     # Gestión de usuarios y autenticación
  - product-service:  # Catálogo de productos y scraping
  - cart-service:     # Gestión de carrito de compras
  - order-service:    # Procesamiento y seguimiento de pedidos
  - payment-service:  # Procesamiento de pagos
  - shipping-service: # Logística y seguimiento
  - ai-service:       # Asistente IA y recomendaciones
  - notification-service: # Email, SMS, push notifications
```

### Optimización de Rendimiento
```python
# Estrategia de Cache
cache_layers = {
    'L1': 'Cache de aplicación (en memoria)',
    'L2': 'Cache Redis (distribuido)',
    'L3': 'Cache CDN (ubicaciones edge)'
}

# Optimización de Base de Datos
- Indexación: Índices estratégicos en columnas consultadas frecuentemente
- Particionado: Tabla de pedidos particionada por fecha
- Pool de Conexiones: PgBouncer para gestión de conexiones
- Optimización de Consultas: Planes de explicación y análisis de consultas

# Optimización de API
- Compresión de Respuesta: Compresión Gzip/Brotli
- Paginación: Paginación basada en cursor para grandes conjuntos de datos
- Límite de Tasa: Límites por usuario y por IP
- Cache de Respuesta: Cache de datos solicitados frecuentemente
```

## 🔍 Monitoreo y Observabilidad

### Monitoreo de Aplicación
```python
# Recolección de Métricas
metrics = {
    'negocio': [
        'orders_created_per_minute',
        'revenue_per_hour',
        'cart_abandonment_rate',
        'payment_success_rate'
    ],
    'técnicas': [
        'api_response_time_p95',
        'database_connection_pool_usage',
        'cache_hit_ratio',
        'error_rate_per_endpoint'
    ],
    'infraestructura': [
        'cpu_usage_percentage',
        'memory_usage_percentage',
        'disk_io_operations',
        'network_throughput'
    ]
}

# Reglas de Alertas
alerts = {
    'críticas': [
        'api_error_rate > 5%',
        'payment_failure_rate > 10%',
        'database_connection_pool > 90%'
    ],
    'advertencia': [
        'api_response_time_p95 > 500ms',
        'cache_hit_ratio < 80%',
        'disk_usage > 85%'
    ]
}
```

### Estrategia de Logging
```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "INFO",
  "service": "order-service",
  "trace_id": "abc123",
  "span_id": "def456",
  "user_id": "user_789",
  "event": "order_created",
  "order_id": "order_123",
  "amount": 150.00,
  "currency": "USD",
  "payment_method": "mercadopago",
  "metadata": {
    "user_agent": "Mozilla/5.0...",
    "ip_address": "192.168.1.1",
    "country": "PE"
  }
}
```

Esta arquitectura proporciona una base sólida para el MVP de Mall for Latam mientras asegura escalabilidad, seguridad y mantenibilidad para el crecimiento futuro.