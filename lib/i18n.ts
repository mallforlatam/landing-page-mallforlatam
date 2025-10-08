// Configuración de internacionalización para Mall for Latam
// Soporte para español, inglés y portugués

export type Locale = 'es' | 'en' | 'pt';

export const defaultLocale: Locale = 'es';

export const locales: Locale[] = ['es', 'en', 'pt'];

export interface Translations {
  // Navigation
  nav: {
    login: string;
    getStarted: string;
    home: string;
    products: string;
    cart: string;
    orders: string;
    support: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    emailPlaceholder: string;
    joinWaitlist: string;
    stats: {
      stores: string;
      countries: string;
      uptime: string;
      support: string;
    };
  };
  
  // Features
  features: {
    title: string;
    subtitle: string;
    globalShopping: {
      title: string;
      description: string;
    };
    localPayments: {
      title: string;
      description: string;
    };
    smartLogistics: {
      title: string;
      description: string;
    };
    secureReliable: {
      title: string;
      description: string;
    };
  };
  
  // How it works
  howItWorks: {
    title: string;
    subtitle: string;
    discover: {
      title: string;
      description: string;
    };
    checkout: {
      title: string;
      description: string;
    };
    receive: {
      title: string;
      description: string;
    };
  };
  
  // Social Proof
  socialProof: {
    title: string;
    reviewsCount: string;
    testimonials: {
      maria: {
        name: string;
        location: string;
        review: string;
      };
      carlos: {
        name: string;
        location: string;
        review: string;
      };
      ana: {
        name: string;
        location: string;
        review: string;
      };
    };
  };
  
  // CTA
  cta: {
    title: string;
    subtitle: string;
    joinBeta: string;
    downloadExtension: string;
  };
  
  // Footer
  footer: {
    description: string;
    product: {
      title: string;
      howItWorks: string;
      pricing: string;
      chromeExtension: string;
      mobileApp: string;
    };
    support: {
      title: string;
      helpCenter: string;
      contact: string;
      shipping: string;
      returns: string;
    };
    company: {
      title: string;
      about: string;
      careers: string;
      privacy: string;
      terms: string;
    };
    copyright: string;
  };
}

export const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      login: 'Iniciar Sesión',
      getStarted: 'Comenzar',
      home: 'Inicio',
      products: 'Productos',
      cart: 'Carrito',
      orders: 'Pedidos',
      support: 'Soporte',
    },
    hero: {
      badge: 'Ahora en Beta - Únete a la Revolución',
      title: 'Compra Globalmente,\nPaga Localmente',
      subtitle: 'Accede a millones de productos internacionales con métodos de pago locales, envíos consolidados y precios transparentes. No más barreras para las compras globales.',
      emailPlaceholder: 'Ingresa tu email',
      joinWaitlist: 'Unirse a Lista de Espera',
      stats: {
        stores: 'Tiendas Internacionales',
        countries: 'Países Soportados',
        uptime: 'Garantía de Disponibilidad',
        support: 'Soporte al Cliente',
      },
    },
    features: {
      title: '¿Por qué elegir Mall for Latam?',
      subtitle: 'Eliminamos la complejidad de las compras internacionales con tecnología inteligente y experiencia local.',
      globalShopping: {
        title: 'Compras Globales',
        description: 'Accede a productos de Amazon, AliExpress, Zara y más',
      },
      localPayments: {
        title: 'Pagos Locales',
        description: 'Paga con MercadoPago, PagoEfectivo y métodos locales',
      },
      smartLogistics: {
        title: 'Logística Inteligente',
        description: 'Envíos consolidados con seguimiento en tiempo real',
      },
      secureReliable: {
        title: 'Seguro y Confiable',
        description: 'Transacciones protegidas con garantía del comprador',
      },
    },
    howItWorks: {
      title: 'Cómo funciona nuestra plataforma',
      subtitle: 'Comprar internacionalmente nunca ha sido tan simple',
      discover: {
        title: '1. Descubre Productos',
        description: 'Navega o usa nuestra extensión de Chrome para agregar productos de cualquier tienda internacional',
      },
      checkout: {
        title: '2. Checkout Inteligente',
        description: 'Nuestra IA calcula todos los costos por adelantado: producto + envío + impuestos + comisiones',
      },
      receive: {
        title: '3. Recibe y Rastrea',
        description: 'Nos encargamos de todo desde la compra hasta la entrega con seguimiento en tiempo real',
      },
    },
    socialProof: {
      title: 'Confiado por miles en América Latina',
      reviewsCount: '4.9/5 de más de 2,000 reseñas',
      testimonials: {
        maria: {
          name: 'María González',
          location: 'Lima, Perú',
          review: '¡Finalmente puedo comprar en Amazon US con mi tarjeta local. El proceso es muy fluido!',
        },
        carlos: {
          name: 'Carlos Mendoza',
          location: 'Bogotá, Colombia',
          review: 'Me ahorré cientos en costos de envío consolidando mis pedidos. ¡Muy recomendado!',
        },
        ana: {
          name: 'Ana Silva',
          location: 'São Paulo, Brasil',
          review: 'La extensión de Chrome hace que comprar sea muy fácil. ¡Solo haz clic y agrega a mi carrito Mall!',
        },
      },
    },
    cta: {
      title: 'Empieza hoy a comprar globalmente',
      subtitle: 'Únete a miles de latinoamericanos que ya están comprando de manera más inteligente con Mall for Latam.',
      joinBeta: 'Unirse al Programa Beta',
      downloadExtension: 'Descargar Extensión',
    },
    footer: {
      description: 'Democratizando el acceso a productos globales para Latinoamérica.',
      product: {
        title: 'Producto',
        howItWorks: 'Cómo funciona',
        pricing: 'Precios',
        chromeExtension: 'Extensión Chrome',
        mobileApp: 'App Móvil',
      },
      support: {
        title: 'Soporte',
        helpCenter: 'Centro de Ayuda',
        contact: 'Contáctanos',
        shipping: 'Info de Envíos',
        returns: 'Devoluciones',
      },
      company: {
        title: 'Empresa',
        about: 'Acerca de Nosotros',
        careers: 'Carreras',
        privacy: 'Política de Privacidad',
        terms: 'Términos de Servicio',
      },
      copyright: '© 2025 Mall for Latam. Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      login: 'Login',
      getStarted: 'Get Started',
      home: 'Home',
      products: 'Products',
      cart: 'Cart',
      orders: 'Orders',
      support: 'Support',
    },
    hero: {
      badge: 'Now in Beta - Join the Revolution',
      title: 'Shop Globally,\nPay Locally',
      subtitle: 'Access millions of international products with local payment methods, consolidated shipping, and transparent pricing. No more barriers to global shopping.',
      emailPlaceholder: 'Enter your email',
      joinWaitlist: 'Join Waitlist',
      stats: {
        stores: 'International Stores',
        countries: 'Countries Supported',
        uptime: 'Uptime Guarantee',
        support: 'Customer Support',
      },
    },
    features: {
      title: 'Why choose Mall for Latam?',
      subtitle: 'We eliminate the complexity of international shopping with smart technology and local expertise.',
      globalShopping: {
        title: 'Global Shopping',
        description: 'Access products from Amazon, AliExpress, Zara and more',
      },
      localPayments: {
        title: 'Local Payments',
        description: 'Pay with MercadoPago, PagoEfectivo, and local methods',
      },
      smartLogistics: {
        title: 'Smart Logistics',
        description: 'Consolidated shipping with real-time tracking',
      },
      secureReliable: {
        title: 'Secure & Reliable',
        description: 'Protected transactions with buyer guarantee',
      },
    },
    howItWorks: {
      title: 'How our platform works',
      subtitle: 'Shopping internationally has never been this simple',
      discover: {
        title: '1. Discover Products',
        description: 'Browse or use our Chrome extension to add products from any international store',
      },
      checkout: {
        title: '2. Smart Checkout',
        description: 'Our AI calculates all costs upfront: product + shipping + taxes + fees',
      },
      receive: {
        title: '3. Receive & Track',
        description: 'We handle everything from purchase to delivery with real-time tracking',
      },
    },
    socialProof: {
      title: 'Trusted by thousands in Latin America',
      reviewsCount: '4.9/5 from 2,000+ reviews',
      testimonials: {
        maria: {
          name: 'María González',
          location: 'Lima, Peru',
          review: 'Finally I can buy from Amazon US with my local card. The process is so smooth!',
        },
        carlos: {
          name: 'Carlos Mendoza',
          location: 'Bogotá, Colombia',
          review: 'Saved me hundreds on shipping costs by consolidating my orders. Highly recommend!',
        },
        ana: {
          name: 'Ana Silva',
          location: 'São Paulo, Brazil',
          review: 'The Chrome extension makes shopping so easy. Just click and add to my Mall cart!',
        },
      },
    },
    cta: {
      title: 'Start shopping globally today',
      subtitle: 'Join thousands of Latin Americans who are already shopping smarter with Mall for Latam.',
      joinBeta: 'Join Beta Program',
      downloadExtension: 'Download Extension',
    },
    footer: {
      description: 'Democratizing access to global products for Latin America.',
      product: {
        title: 'Product',
        howItWorks: 'How it works',
        pricing: 'Pricing',
        chromeExtension: 'Chrome Extension',
        mobileApp: 'Mobile App',
      },
      support: {
        title: 'Support',
        helpCenter: 'Help Center',
        contact: 'Contact Us',
        shipping: 'Shipping Info',
        returns: 'Returns',
      },
      company: {
        title: 'Company',
        about: 'About Us',
        careers: 'Careers',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      copyright: '© 2025 Mall for Latam. All rights reserved.',
    },
  },
  pt: {
    nav: {
      login: 'Entrar',
      getStarted: 'Começar',
      home: 'Início',
      products: 'Produtos',
      cart: 'Carrinho',
      orders: 'Pedidos',
      support: 'Suporte',
    },
    hero: {
      badge: 'Agora em Beta - Junte-se à Revolução',
      title: 'Compre Globalmente,\nPague Localmente',
      subtitle: 'Acesse milhões de produtos internacionais com métodos de pagamento locais, frete consolidado e preços transparentes. Chega de barreiras para compras globais.',
      emailPlaceholder: 'Digite seu email',
      joinWaitlist: 'Entrar na Lista de Espera',
      stats: {
        stores: 'Lojas Internacionais',
        countries: 'Países Suportados',
        uptime: 'Garantia de Disponibilidade',
        support: 'Suporte ao Cliente',
      },
    },
    features: {
      title: 'Por que escolher Mall for Latam?',
      subtitle: 'Eliminamos a complexidade das compras internacionais com tecnologia inteligente e expertise local.',
      globalShopping: {
        title: 'Compras Globais',
        description: 'Acesse produtos da Amazon, AliExpress, Zara e mais',
      },
      localPayments: {
        title: 'Pagamentos Locais',
        description: 'Pague com MercadoPago, PagoEfectivo e métodos locais',
      },
      smartLogistics: {
        title: 'Logística Inteligente',
        description: 'Frete consolidado com rastreamento em tempo real',
      },
      secureReliable: {
        title: 'Seguro e Confiável',
        description: 'Transações protegidas com garantia do comprador',
      },
    },
    howItWorks: {
      title: 'Como nossa plataforma funciona',
      subtitle: 'Comprar internacionalmente nunca foi tão simples',
      discover: {
        title: '1. Descubra Produtos',
        description: 'Navegue ou use nossa extensão do Chrome para adicionar produtos de qualquer loja internacional',
      },
      checkout: {
        title: '2. Checkout Inteligente',
        description: 'Nossa IA calcula todos os custos antecipadamente: produto + frete + impostos + taxas',
      },
      receive: {
        title: '3. Receba e Rastreie',
        description: 'Cuidamos de tudo desde a compra até a entrega com rastreamento em tempo real',
      },
    },
    socialProof: {
      title: 'Confiado por milhares na América Latina',
      reviewsCount: '4.9/5 de mais de 2.000 avaliações',
      testimonials: {
        maria: {
          name: 'María González',
          location: 'Lima, Peru',
          review: 'Finalmente posso comprar na Amazon US com meu cartão local. O processo é muito fluido!',
        },
        carlos: {
          name: 'Carlos Mendoza',
          location: 'Bogotá, Colômbia',
          review: 'Economizei centenas em custos de frete consolidando meus pedidos. Altamente recomendado!',
        },
        ana: {
          name: 'Ana Silva',
          location: 'São Paulo, Brasil',
          review: 'A extensão do Chrome torna as compras muito fáceis. Apenas clique e adicione ao meu carrinho Mall!',
        },
      },
    },
    cta: {
      title: 'Comece a comprar globalmente hoje',
      subtitle: 'Junte-se a milhares de latino-americanos que já estão comprando de forma mais inteligente com Mall for Latam.',
      joinBeta: 'Entrar no Programa Beta',
      downloadExtension: 'Baixar Extensão',
    },
    footer: {
      description: 'Democratizando o acesso a produtos globais para a América Latina.',
      product: {
        title: 'Produto',
        howItWorks: 'Como funciona',
        pricing: 'Preços',
        chromeExtension: 'Extensão Chrome',
        mobileApp: 'App Móvel',
      },
      support: {
        title: 'Suporte',
        helpCenter: 'Central de Ajuda',
        contact: 'Fale Conosco',
        shipping: 'Info de Frete',
        returns: 'Devoluções',
      },
      company: {
        title: 'Empresa',
        about: 'Sobre Nós',
        careers: 'Carreiras',
        privacy: 'Política de Privacidade',
        terms: 'Termos de Serviço',
      },
      copyright: '© 2025 Mall for Latam. Todos os direitos reservados.',
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations[defaultLocale];
}

export function formatCurrency(amount: number, currency: string, locale: Locale): string {
  const localeMap = {
    es: 'es-PE',
    en: 'en-US',
    pt: 'pt-BR',
  };

  return new Intl.NumberFormat(localeMap[locale], {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function formatDate(date: Date, locale: Locale): string {
  const localeMap = {
    es: 'es-PE',
    en: 'en-US',
    pt: 'pt-BR',
  };

  return new Intl.DateTimeFormat(localeMap[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}