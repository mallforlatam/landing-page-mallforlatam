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
    paymentsLabel: string;
    cards: string;
    compatibleStores: string;
    storesCarouselLabel: string;
  };

  // Features
  features: {
    title: string;
    subtitle: string;
    originalStores: {
      title: string;
      description: string;
    };
    localPayments: {
      title: string;
      description: string;
    };
    storeInfo: {
      title: string;
      description: string;
    };
    delivery: {
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
      title: 'Compra global,\npaga local',
      subtitle: 'Explora productos en tiendas internacionales compatibles desde sus páginas originales con la extensión M4L. Revisa tu pedido y accede a medios de pago adaptados a Perú.',
      paymentsLabel: 'Paga en soles con',
      cards: 'Tarjetas',
      compatibleStores: 'Compatible con Amazon, eBay, Walmart, Shein, Tommy Hilfiger, Jomashop, Macy\'s y Sephora',
      storesCarouselLabel: 'Tiendas compatibles',
    },
    features: {
      title: '¿Por qué elegir Mall for Latam?',
      subtitle: 'Simplificamos las compras internacionales con tecnología y experiencia local.',
      originalStores: {
        title: 'Compra en tiendas originales compatibles',
        description: 'Navega desde las páginas de los comercios compatibles con M4L.',
      },
      localPayments: {
        title: 'Pagos locales',
        description: 'Utiliza los medios de pago habilitados para tu compra.',
      },
      storeInfo: {
        title: 'Consulta información de origen',
        description: 'Revisa precios, disponibilidad y promociones publicados por la tienda; pueden cambiar.',
      },
      delivery: {
        title: 'Entrega hacia Perú',
        description: 'Conoce los cargos y las condiciones de envío aplicables a tu pedido.',
      },
    },
    howItWorks: {
      title: 'Cómo funciona nuestra plataforma',
      subtitle: 'En tres pasos, desde la tienda original',
      discover: {
        title: '1. Explora',
        description: 'Visita una tienda compatible desde Google Chrome.',
      },
      checkout: {
        title: '2. Elige y revisa',
        description: 'Selecciona el producto con M4L y consulta el resumen de cargos.',
      },
      receive: {
        title: '3. Paga y recibe',
        description: 'Utiliza un medio de pago habilitado y consulta la información disponible de tu pedido.',
      },
    },
    socialProof: {
      title: 'Lo que dicen quienes ya compraron con nosotros',
      subtitle: 'Testimonios reales de nuestros primeros compradores.',
      testimonials: {
        alejandra: {
          name: 'Alejandra',
          location: 'Lima, Perú',
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
      title: 'Tu próxima compra internacional empieza aquí.',
      subtitle: 'Únete a los latinoamericanos que ya están comprando de manera más inteligente con Mall for Latam.',
      downloadExtension: 'Descargar Extensión de Chrome',
      downloadExtensionToast: 'La extensión estará disponible muy pronto en Chrome Web Store.',
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
      title: 'Shop global,\npay local',
      subtitle: 'Explore products in compatible international stores, right from their original pages, with the M4L extension. Review your order and use payment methods adapted to Peru.',
      paymentsLabel: 'Pay in soles with',
      cards: 'Cards',
      compatibleStores: 'Works with Amazon, eBay, Walmart, Shein, Tommy Hilfiger, Jomashop, Macy\'s and Sephora',
      storesCarouselLabel: 'Compatible stores',
    },
    features: {
      title: 'Why choose Mall for Latam?',
      subtitle: 'We simplify international shopping with technology and local expertise.',
      originalStores: {
        title: 'Shop in compatible original stores',
        description: 'Browse from the pages of the stores compatible with M4L.',
      },
      localPayments: {
        title: 'Local payments',
        description: 'Use the payment methods enabled for your purchase.',
      },
      storeInfo: {
        title: 'Check the store information',
        description: 'Review prices, availability and promotions published by the store; they may change.',
      },
      delivery: {
        title: 'Delivery to Peru',
        description: 'See the charges and shipping conditions that apply to your order.',
      },
    },
    howItWorks: {
      title: 'How our platform works',
      subtitle: 'Three steps, starting from the original store',
      discover: {
        title: '1. Explore',
        description: 'Visit a compatible store using Google Chrome.',
      },
      checkout: {
        title: '2. Choose and review',
        description: 'Select the product with M4L and check the summary of charges.',
      },
      receive: {
        title: '3. Pay and receive',
        description: 'Use an enabled payment method and check the available information about your order.',
      },
    },
    socialProof: {
      title: 'What people who already bought with us are saying',
      subtitle: 'Real testimonials from our first buyers.',
      testimonials: {
        alejandra: {
          name: 'Alejandra',
          location: 'Lima, Peru',
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
      title: 'Your next international purchase starts here.',
      subtitle: 'Join the Latin Americans who are already shopping smarter with Mall for Latam.',
      downloadExtension: 'Download Chrome Extension',
      downloadExtensionToast: 'The extension will be available very soon on the Chrome Web Store.',
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
      title: 'Compre global,\npague local',
      subtitle: 'Explore produtos em lojas internacionais compatíveis, direto das páginas originais, com a extensão M4L. Revise seu pedido e use meios de pagamento adaptados ao Peru.',
      paymentsLabel: 'Pague em soles com',
      cards: 'Cartões',
      compatibleStores: 'Compatível com Amazon, eBay, Walmart, Shein, Tommy Hilfiger, Jomashop, Macy\'s e Sephora',
      storesCarouselLabel: 'Lojas compatíveis',
    },
    features: {
      title: 'Por que escolher Mall for Latam?',
      subtitle: 'Simplificamos as compras internacionais com tecnologia e experiência local.',
      originalStores: {
        title: 'Compre em lojas originais compatíveis',
        description: 'Navegue pelas páginas das lojas compatíveis com a M4L.',
      },
      localPayments: {
        title: 'Pagamentos locais',
        description: 'Use os meios de pagamento habilitados para sua compra.',
      },
      storeInfo: {
        title: 'Consulte as informações da loja',
        description: 'Revise preços, disponibilidade e promoções publicados pela loja; podem mudar.',
      },
      delivery: {
        title: 'Entrega no Peru',
        description: 'Conheça as taxas e as condições de envio aplicáveis ao seu pedido.',
      },
    },
    howItWorks: {
      title: 'Como nossa plataforma funciona',
      subtitle: 'Três passos, a partir da loja original',
      discover: {
        title: '1. Explore',
        description: 'Visite uma loja compatível pelo Google Chrome.',
      },
      checkout: {
        title: '2. Escolha e revise',
        description: 'Selecione o produto com a M4L e consulte o resumo das taxas.',
      },
      receive: {
        title: '3. Pague e receba',
        description: 'Use um meio de pagamento habilitado e consulte as informações disponíveis do seu pedido.',
      },
    },
    socialProof: {
      title: 'O que dizem quem já comprou com a gente',
      subtitle: 'Depoimentos reais dos nossos primeiros compradores.',
      testimonials: {
        alejandra: {
          name: 'Alejandra',
          location: 'Lima, Peru',
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
      title: 'Sua próxima compra internacional começa aqui.',
      subtitle: 'Junte-se aos latino-americanos que já estão comprando de forma mais inteligente com Mall for Latam.',
      downloadExtension: 'Baixar Extensão do Chrome',
      downloadExtensionToast: 'A extensão estará disponível muito em breve na Chrome Web Store.',
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