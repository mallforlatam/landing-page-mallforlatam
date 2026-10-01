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
    stats: {
      stores: string;
      orders: string;
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
    subtitle: string;
    testimonials: {
      alejandra: {
        name: string;
        location: string;
        review: string;
      };
      cesar: {
        name: string;
        location: string;
        review: string;
      };
      gloria: {
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
    downloadExtension: string;
    downloadExtensionBadge: string;
    downloadExtensionToast: string;
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
      cookies: string;
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
      stats: {
        stores: 'Tiendas Internacionales',
        orders: 'Pedidos Entregados',
      },
    },
    features: {
      title: '¿Por qué elegir Mall for Latam?',
      subtitle: 'Eliminamos la complejidad de las compras internacionales con tecnología inteligente y experiencia local.',
      globalShopping: {
        title: 'Compras Globales',
        description: 'Accede a productos de Amazon, eBay, Walmart, Shein y más',
      },
      localPayments: {
        title: 'Pagos Locales',
        description: 'Paga con Yape, Plin y tarjetas de crédito o débito',
      },
      smartLogistics: {
        title: 'Envío Consolidado',
        description: 'Envíos consolidados con seguimiento de tu pedido',
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
        title: '2. Pago sin Sorpresas',
        description: 'Calculamos todos los costos por adelantado: producto, comisión y envío. Sin sorpresas al final.',
      },
      receive: {
        title: '3. Recibe y Rastrea',
        description: 'Nos encargamos de todo desde la compra hasta la entrega, con seguimiento de tu envío',
      },
    },
    socialProof: {
      title: 'Lo que dicen quienes ya compraron con nosotros',
      subtitle: 'Testimonios reales de nuestros primeros compradores.',
      testimonials: {
        alejandra: {
          name: 'Alejandra',
          location: 'Estados Unidos',
          review: 'Pude enviarle regalos a mi familia en muy poco tiempo y con un solo pago. Todo mucho más simple de lo que esperaba.',
        },
        cesar: {
          name: 'César',
          location: 'Lima, Perú',
          review: 'Compré productos que no encontraba en mi ciudad. Mall for Latam me los consiguió sin complicaciones.',
        },
        gloria: {
          name: 'Gloria',
          location: 'Trujillo, Perú',
          review: 'Adquirí productos de distintas marcas y llegaron muy rápido a mi ciudad. Lo mejor es que pagué con Yape, sin complicaciones.',
        },
      },
    },
    cta: {
      title: 'Empieza hoy a comprar globalmente',
      subtitle: 'Únete a los latinoamericanos que ya están comprando de manera más inteligente con Mall for Latam.',
      downloadExtension: 'Descargar Extensión de Chrome',
      downloadExtensionBadge: 'Próximamente',
      downloadExtensionToast: 'La extensión está en revisión en Chrome Web Store. ¡Muy pronto podrás descargarla!',
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
        cookies: 'Política de Cookies',
      },
      copyright: 'Mall for Latam. Todos los derechos reservados.',
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
      stats: {
        stores: 'International Stores',
        orders: 'Orders Delivered',
      },
    },
    features: {
      title: 'Why choose Mall for Latam?',
      subtitle: 'We eliminate the complexity of international shopping with smart technology and local expertise.',
      globalShopping: {
        title: 'Global Shopping',
        description: 'Access products from Amazon, eBay, Walmart, Shein and more',
      },
      localPayments: {
        title: 'Local Payments',
        description: 'Pay with Yape, Plin, and credit or debit cards',
      },
      smartLogistics: {
        title: 'Consolidated Shipping',
        description: 'Consolidated shipping with order tracking',
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
        title: '2. No-Surprises Checkout',
        description: 'We calculate all costs upfront: product, fee, and shipping. No surprises at the end.',
      },
      receive: {
        title: '3. Receive & Track',
        description: 'We handle everything from purchase to delivery, with order tracking',
      },
    },
    socialProof: {
      title: 'What people who already bought with us are saying',
      subtitle: 'Real testimonials from our first buyers.',
      testimonials: {
        alejandra: {
          name: 'Alejandra',
          location: 'United States',
          review: 'I was able to send gifts to my family in very little time, with a single payment. Much simpler than I expected.',
        },
        cesar: {
          name: 'César',
          location: 'Lima, Peru',
          review: "I bought products I couldn't find in my city. Mall for Latam got them for me without any hassle.",
        },
        gloria: {
          name: 'Gloria',
          location: 'Trujillo, Peru',
          review: 'I got products from different brands and they arrived very fast. Best part: I paid with Yape, no hassle at all.',
        },
      },
    },
    cta: {
      title: 'Start shopping globally today',
      subtitle: 'Join the Latin Americans who are already shopping smarter with Mall for Latam.',
      downloadExtension: 'Download Chrome Extension',
      downloadExtensionBadge: 'Coming soon',
      downloadExtensionToast: 'The extension is under review on the Chrome Web Store. You will be able to download it very soon!',
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
        cookies: 'Cookie Policy',
      },
      copyright: 'Mall for Latam. All rights reserved.',
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
      stats: {
        stores: 'Lojas Internacionais',
        orders: 'Pedidos Entregues',
      },
    },
    features: {
      title: 'Por que escolher Mall for Latam?',
      subtitle: 'Eliminamos a complexidade das compras internacionais com tecnologia inteligente e expertise local.',
      globalShopping: {
        title: 'Compras Globais',
        description: 'Acesse produtos da Amazon, eBay, Walmart, Shein e mais',
      },
      localPayments: {
        title: 'Pagamentos Locais',
        description: 'Pague com Yape, Plin e cartões de crédito ou débito',
      },
      smartLogistics: {
        title: 'Frete Consolidado',
        description: 'Frete consolidado com rastreamento do seu pedido',
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
        title: '2. Pagamento sem Surpresas',
        description: 'Calculamos todos os custos antecipadamente: produto, taxa de serviço e frete. Sem surpresas no final.',
      },
      receive: {
        title: '3. Receba e Rastreie',
        description: 'Cuidamos de tudo desde a compra até a entrega, com rastreamento do seu pedido',
      },
    },
    socialProof: {
      title: 'O que dizem quem já comprou com a gente',
      subtitle: 'Depoimentos reais dos nossos primeiros compradores.',
      testimonials: {
        alejandra: {
          name: 'Alejandra',
          location: 'Estados Unidos',
          review: 'Consegui enviar presentes para minha família em muito pouco tempo, com um único pagamento. Tudo muito mais simples do que eu esperava.',
        },
        cesar: {
          name: 'César',
          location: 'Lima, Peru',
          review: 'Comprei produtos que não encontrava na minha cidade. A Mall for Latam conseguiu para mim sem complicações.',
        },
        gloria: {
          name: 'Gloria',
          location: 'Trujillo, Peru',
          review: 'Adquiri produtos de marcas diferentes e chegaram muito rápido na minha cidade. O melhor é que paguei com Yape, sem complicações.',
        },
      },
    },
    cta: {
      title: 'Comece a comprar globalmente hoje',
      subtitle: 'Junte-se aos latino-americanos que já estão comprando de forma mais inteligente com Mall for Latam.',
      downloadExtension: 'Baixar Extensão do Chrome',
      downloadExtensionBadge: 'Em breve',
      downloadExtensionToast: 'A extensão está em revisão na Chrome Web Store. Você poderá baixá-la muito em breve!',
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
        cookies: 'Política de Cookies',
      },
      copyright: 'Mall for Latam. Todos os direitos reservados.',
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