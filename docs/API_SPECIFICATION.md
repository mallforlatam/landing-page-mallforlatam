# Mall for Latam - API Specification

## 🔗 Base URL
```
Production: https://api.mallforlatam.com/v1
Staging: https://staging-api.mallforlatam.com/v1
Development: http://localhost:8000/v1
```

## 🔐 Authentication

### Bearer Token Authentication
```http
Authorization: Bearer <jwt_token>
```

### API Key Authentication (for webhooks)
```http
X-API-Key: <api_key>
```

## 📋 Core API Endpoints

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "full_name": "John Doe",
  "phone": "+51987654321",
  "country_code": "PE"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "full_name": "John Doe",
      "country_code": "PE",
      "created_at": "2024-01-15T10:30:00Z"
    },
    "access_token": "jwt_token_here",
    "refresh_token": "refresh_token_here",
    "expires_in": 3600
  }
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Get Current User
```http
GET /auth/me
Authorization: Bearer <token>
```

### Product Management

#### Import Product from URL
```http
POST /products/import
Authorization: Bearer <token>
Content-Type: application/json

{
  "url": "https://www.amazon.com/dp/B08N5WRWNW",
  "store": "amazon",
  "user_notes": "For my birthday gift"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "product": {
      "id": "uuid",
      "external_id": "B08N5WRWNW",
      "source_store": "amazon",
      "source_url": "https://www.amazon.com/dp/B08N5WRWNW",
      "title": "Echo Dot (4th Gen) | Smart speaker with Alexa",
      "description": "Meet Echo Dot - Our most popular smart speaker...",
      "brand": "Amazon",
      "category": "Electronics > Smart Home",
      "images": [
        "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1000_.jpg"
      ],
      "variants": [
        {
          "id": "variant_1",
          "name": "Charcoal",
          "type": "color",
          "value": "charcoal",
          "price_modifier": 0
        }
      ],
      "base_price": 49.99,
      "currency": "USD",
      "availability": "in_stock",
      "estimated_shipping_days": 7,
      "last_scraped_at": "2024-01-15T10:30:00Z"
    },
    "pricing": {
      "base_price": 49.99,
      "base_currency": "USD",
      "local_price": 185.50,
      "local_currency": "PEN",
      "exchange_rate": 3.71,
      "shipping_cost": 25.00,
      "tax_amount": 15.20,
      "service_fee": 8.50,
      "total_cost": 234.20
    }
  }
}
```

#### Search Products
```http
GET /products/search?q=iphone&store=amazon&category=electronics&min_price=100&max_price=1000&page=1&limit=20
Authorization: Bearer <token>
```

#### Get Product Details
```http
GET /products/{product_id}
Authorization: Bearer <token>
```

#### Refresh Product Data
```http
PUT /products/{product_id}/refresh
Authorization: Bearer <token>
```

### Shopping Cart Management

#### Get Cart
```http
GET /cart
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "cart": {
      "id": "uuid",
      "user_id": "uuid",
      "items": [
        {
          "id": "uuid",
          "product_id": "uuid",
          "product": {
            "title": "Echo Dot (4th Gen)",
            "images": ["https://..."],
            "base_price": 49.99,
            "currency": "USD"
          },
          "quantity": 2,
          "selected_variant": {
            "color": "charcoal",
            "size": null
          },
          "unit_price": 49.99,
          "total_price": 99.98,
          "added_at": "2024-01-15T10:30:00Z"
        }
      ],
      "summary": {
        "items_count": 2,
        "subtotal": 99.98,
        "estimated_shipping": 35.00,
        "estimated_taxes": 20.40,
        "service_fee": 12.00,
        "estimated_total": 167.38,
        "currency": "PEN"
      },
      "updated_at": "2024-01-15T10:30:00Z"
    }
  }
}
```

#### Add Item to Cart
```http
POST /cart/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "product_id": "uuid",
  "quantity": 1,
  "selected_variant": {
    "color": "charcoal",
    "size": "medium"
  }
}
```

#### Update Cart Item
```http
PUT /cart/items/{item_id}
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 3
}
```

#### Remove Cart Item
```http
DELETE /cart/items/{item_id}
Authorization: Bearer <token>
```

#### Calculate Cart Totals
```http
POST /cart/calculate
Authorization: Bearer <token>
Content-Type: application/json

{
  "shipping_address": {
    "country": "PE",
    "state": "Lima",
    "city": "Lima",
    "postal_code": "15001"
  },
  "shipping_method": "standard"
}
```

### Order Management

#### Create Order
```http
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "shipping_address": {
    "street_address": "Av. Javier Prado Este 1234",
    "city": "Lima",
    "state": "Lima",
    "postal_code": "15001",
    "country": "PE",
    "recipient_name": "John Doe",
    "recipient_phone": "+51987654321"
  },
  "payment_method": "mercadopago",
  "shipping_method": "standard",
  "notes": "Please handle with care"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "order": {
      "id": "uuid",
      "order_number": "MFL-2024-001234",
      "status": "pending_payment",
      "items": [...],
      "subtotal": 99.98,
      "shipping_cost": 35.00,
      "tax_amount": 20.40,
      "service_fee": 12.00,
      "total_amount": 167.38,
      "currency": "PEN",
      "shipping_address": {...},
      "estimated_delivery": "2024-01-25",
      "created_at": "2024-01-15T10:30:00Z"
    },
    "payment": {
      "payment_intent_id": "pi_1234567890",
      "client_secret": "pi_1234567890_secret_xyz",
      "payment_url": "https://checkout.mercadopago.com/..."
    }
  }
}
```

#### Get Orders
```http
GET /orders?status=pending&page=1&limit=10
Authorization: Bearer <token>
```

#### Get Order Details
```http
GET /orders/{order_id}
Authorization: Bearer <token>
```

#### Get Order Tracking
```http
GET /orders/{order_id}/tracking
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "tracking": {
      "order_id": "uuid",
      "tracking_number": "1Z999AA1234567890",
      "carrier": "UPS",
      "status": "in_transit",
      "estimated_delivery": "2024-01-25",
      "events": [
        {
          "timestamp": "2024-01-15T10:30:00Z",
          "status": "picked_up",
          "description": "Package picked up from sender",
          "location": "Miami, FL, US"
        },
        {
          "timestamp": "2024-01-16T08:15:00Z",
          "status": "in_transit",
          "description": "Package in transit to destination",
          "location": "Lima, PE"
        }
      ]
    }
  }
}
```

### Shipping & Logistics

#### Calculate Shipping Costs
```http
POST /shipping/calculate
Authorization: Bearer <token>
Content-Type: application/json

{
  "items": [
    {
      "product_id": "uuid",
      "quantity": 1,
      "weight": 0.5,
      "dimensions": {
        "length": 10,
        "width": 8,
        "height": 5
      }
    }
  ],
  "destination": {
    "country": "PE",
    "state": "Lima",
    "city": "Lima",
    "postal_code": "15001"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "shipping_options": [
      {
        "id": "standard",
        "name": "Standard Shipping",
        "description": "5-7 business days",
        "cost": 25.00,
        "currency": "USD",
        "estimated_days": 7,
        "carrier": "DHL"
      },
      {
        "id": "express",
        "name": "Express Shipping",
        "description": "2-3 business days",
        "cost": 45.00,
        "currency": "USD",
        "estimated_days": 3,
        "carrier": "FedEx"
      }
    ]
  }
}
```

#### Track Shipment
```http
POST /shipping/track
Authorization: Bearer <token>
Content-Type: application/json

{
  "tracking_number": "1Z999AA1234567890",
  "carrier": "ups"
}
```

### Payment Processing

#### Create Payment Intent
```http
POST /payments/intent
Authorization: Bearer <token>
Content-Type: application/json

{
  "order_id": "uuid",
  "payment_method": "mercadopago",
  "return_url": "https://app.mallforlatam.com/orders/success",
  "cancel_url": "https://app.mallforlatam.com/orders/cancel"
}
```

#### Confirm Payment
```http
POST /payments/confirm
Authorization: Bearer <token>
Content-Type: application/json

{
  "payment_intent_id": "pi_1234567890",
  "payment_method_id": "pm_1234567890"
}
```

#### Get Payment Methods
```http
GET /payments/methods?country=PE
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "payment_methods": [
      {
        "id": "mercadopago",
        "name": "MercadoPago",
        "type": "digital_wallet",
        "currencies": ["PEN", "USD"],
        "fees": {
          "percentage": 3.5,
          "fixed": 0
        },
        "logo": "https://..."
      },
      {
        "id": "pagoefectivo",
        "name": "PagoEfectivo",
        "type": "cash",
        "currencies": ["PEN"],
        "fees": {
          "percentage": 2.5,
          "fixed": 2.00
        },
        "logo": "https://..."
      }
    ]
  }
}
```

### AI Assistant

#### Chat with AI Assistant
```http
POST /ai/chat
Authorization: Bearer <token>
Content-Type: application/json

{
  "message": "I'm looking for a good laptop under $1000",
  "context": {
    "conversation_id": "uuid",
    "user_preferences": {
      "budget": 1000,
      "currency": "USD",
      "categories": ["electronics"]
    }
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "response": {
      "message": "I'd be happy to help you find a great laptop under $1000! Based on your budget, I recommend checking out these options...",
      "suggestions": [
        {
          "product_id": "uuid",
          "title": "ASUS VivoBook 15",
          "price": 699.99,
          "reason": "Great performance for the price"
        }
      ],
      "conversation_id": "uuid",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  }
}
```

#### Get AI Recommendations
```http
GET /ai/recommendations?category=electronics&budget=500&currency=USD
Authorization: Bearer <token>
```

### User Profile Management

#### Get User Profile
```http
GET /users/profile
Authorization: Bearer <token>
```

#### Update User Profile
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "full_name": "John Doe Updated",
  "phone": "+51987654321",
  "preferences": {
    "currency": "PEN",
    "language": "es",
    "notifications": {
      "email": true,
      "sms": false,
      "push": true
    }
  }
}
```

#### Get User Addresses
```http
GET /users/addresses
Authorization: Bearer <token>
```

#### Add User Address
```http
POST /users/addresses
Authorization: Bearer <token>
Content-Type: application/json

{
  "type": "shipping",
  "street_address": "Av. Javier Prado Este 1234",
  "city": "Lima",
  "state": "Lima",
  "postal_code": "15001",
  "country": "PE",
  "is_default": true
}
```

## 🔄 Webhook Endpoints

### Order Status Updates
```http
POST /webhooks/orders/status
X-API-Key: <webhook_secret>
Content-Type: application/json

{
  "event": "order.status_changed",
  "data": {
    "order_id": "uuid",
    "old_status": "pending",
    "new_status": "confirmed",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### Payment Confirmations
```http
POST /webhooks/payments/confirmed
X-API-Key: <webhook_secret>
Content-Type: application/json

{
  "event": "payment.confirmed",
  "data": {
    "payment_id": "uuid",
    "order_id": "uuid",
    "amount": 167.38,
    "currency": "PEN",
    "payment_method": "mercadopago",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### Shipping Updates
```http
POST /webhooks/shipping/tracking
X-API-Key: <webhook_secret>
Content-Type: application/json

{
  "event": "shipping.tracking_update",
  "data": {
    "tracking_number": "1Z999AA1234567890",
    "carrier": "ups",
    "status": "delivered",
    "location": "Lima, PE",
    "timestamp": "2024-01-25T14:30:00Z",
    "order_id": "uuid"
  }
}
```

## 📊 Error Handling

### Standard Error Response
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ],
    "request_id": "req_1234567890",
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict
- `422` - Validation Error
- `429` - Rate Limited
- `500` - Internal Server Error
- `503` - Service Unavailable

### Error Codes
- `VALIDATION_ERROR` - Input validation failed
- `AUTHENTICATION_ERROR` - Invalid or expired token
- `AUTHORIZATION_ERROR` - Insufficient permissions
- `RESOURCE_NOT_FOUND` - Requested resource not found
- `DUPLICATE_RESOURCE` - Resource already exists
- `RATE_LIMIT_EXCEEDED` - Too many requests
- `PAYMENT_FAILED` - Payment processing failed
- `SHIPPING_ERROR` - Shipping calculation failed
- `EXTERNAL_SERVICE_ERROR` - Third-party service error

## 🔒 Rate Limiting

### Rate Limits by Endpoint Type
- **Authentication**: 5 requests per minute
- **Product Import**: 10 requests per minute
- **Cart Operations**: 60 requests per minute
- **Order Creation**: 5 requests per minute
- **General API**: 100 requests per minute

### Rate Limit Headers
```http
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642248000
```

## 📝 API Versioning

### Version Header
```http
API-Version: 2024-01-15
```

### Deprecation Notice
```http
Deprecation: true
Sunset: 2024-12-31T23:59:59Z
Link: <https://api.mallforlatam.com/v2>; rel="successor-version"
```

This API specification provides a comprehensive foundation for the Mall for Latam platform, ensuring clear communication between frontend and backend systems while maintaining scalability and security standards.