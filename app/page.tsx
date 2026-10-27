'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LanguageSelector } from '@/components/language-selector';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations, type Translations } from '@/lib/i18n';
import { toast } from 'sonner';
import {
  ShoppingCart,
  Store,
  CreditCard,
  Truck,
  Tag,
  Search,
  Star,
  ArrowRight,
  Chrome
} from 'lucide-react';

// Pegar acá el enlace de la ficha en Chrome Web Store cuando la extensión
// esté publicada. Mientras esté vacío, el botón avisa que llega pronto.
const CHROME_WEB_STORE_URL = '';

// Tarjetas no lleva label fijo: usa el texto traducido.
const PAYMENT_METHODS: { src: string; width: number; height: number; label?: string }[] = [
  { src: '/payments/yape-2026.png', width: 240, height: 211, label: 'Yape' },
  { src: '/payments/plin-2026.png', width: 240, height: 240, label: 'Plin' },
  { src: '/payments/tarjetas-2026.png', width: 240, height: 193 },
];

const STORES = [
  { name: 'Amazon', src: '/stores/amazon.png', width: 286, height: 32 },
  { name: 'eBay', src: '/stores/ebay.png', width: 239, height: 32 },
  { name: 'Walmart', src: '/stores/walmart.png', width: 401, height: 29 },
  { name: 'Shein', src: '/stores/shein.png', width: 460, height: 27 },
  { name: 'Tommy Hilfiger', src: '/stores/tommy-hilfiger.png', width: 1707, height: 14 },
  { name: 'Jomashop', src: '/stores/jomashop.png', width: 792, height: 21 },
  { name: "Macy's", src: '/stores/macys.png', width: 336, height: 32 },
  { name: 'Sephora', src: '/stores/sephora.png', width: 741, height: 22 },
];

// Alturas calculadas para que todos los logos ocupen un área parecida
// (~3600 px²): los muy anchos, como Tommy Hilfiger, quedan más bajos.
// La lista va duplicada para que el desplazamiento sea continuo; la copia
// queda oculta a lectores de pantalla. Con movimiento reducido se detiene.
function StoresCarousel({ label, srLabel }: { label: string; srLabel: string }) {
  return (
    <div className="mt-6 sm:mt-7">
      <p className="mb-3 text-sm sm:text-base font-bold uppercase tracking-widest text-gray-700">{label}</p>
      <p className="sr-only">{srLabel}</p>
      <div className="group relative mx-auto max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden="true">
              {STORES.map((store) => (
                <li key={store.name} className="flex h-12 items-center px-6 sm:px-10">
                  <Image
                    src={store.src}
                    alt={copy === 0 ? store.name : ''}
                    width={store.width}
                    height={96}
                    style={{ height: store.height }}
                    className="w-auto object-contain"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mismo degradado que el título del hero. Sobre la sección CTA (que ya
// tiene ese degradado de fondo) el botón va oscuro para no perderse.
const BRAND_GRADIENT_BUTTON =
  'bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md shadow-brand-purple/20 hover:opacity-90';
const BUTTON_BASE =
  'h-auto max-w-full rounded-full font-semibold gap-2 px-6 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base transition-opacity';

function DownloadExtensionButton({ t, onGradient = false }: { t: Translations; onGradient?: boolean }) {
  const BUTTON_CLASSES = `${BUTTON_BASE} ${onGradient ? 'bg-slate-900 text-white hover:bg-slate-800' : BRAND_GRADIENT_BUTTON}`;
  const content = (
    <>
      <Chrome className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
      <span className="whitespace-nowrap">{t.cta.downloadExtension}</span>
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
    </>
  );

  if (CHROME_WEB_STORE_URL) {
    return (
      <Button className={BUTTON_CLASSES} asChild>
        <a href={CHROME_WEB_STORE_URL} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </Button>
    );
  }

  return (
    <Button onClick={() => toast.info(t.cta.downloadExtensionToast)} className={BUTTON_CLASSES}>
      {content}
    </Button>
  );
}

export default function Home() {
  const { locale, changeLocale } = useLocale();
  const t = getTranslations(locale);

  const features = [
    {
      icon: <Store className="h-6 w-6" />,
      title: t.features.originalStores.title,
      description: t.features.originalStores.description
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: t.features.localPayments.title,
      description: t.features.localPayments.description
    },
    {
      icon: <Tag className="h-6 w-6" />,
      title: t.features.storeInfo.title,
      description: t.features.storeInfo.description
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: t.features.delivery.title,
      description: t.features.delivery.description
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
          <div className="flex items-center flex-1 min-w-0">
            <Image
              src="/logo-horizontal.png"
              alt="Mall for Latam"
              width={448}
              height={148}
              priority
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <LanguageSelector currentLocale={locale} onLocaleChange={changeLocale} />
            <Button className={`rounded-full px-4 py-2 text-sm sm:px-5 sm:text-base font-semibold ${BRAND_GRADIENT_BUTTON}`} asChild>
              <a href="https://app.mallforlatam.com">{t.nav.getStarted}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-6 pb-10 sm:pt-8 sm:pb-12 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[-0.01em] leading-[1.15] pb-2 mb-4 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent whitespace-pre-line">
          {t.hero.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col items-center gap-4">
          <DownloadExtensionButton t={t} />
          {/* Propuesta de valor: los medios de pago locales, grandes y a la
              vista, justo debajo del botón principal. */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <p className="text-base sm:text-lg font-semibold text-gray-900">{t.hero.paymentsLabel}</p>
            <ul className="flex items-start justify-center gap-4 sm:gap-6">
              {PAYMENT_METHODS.map((method) => {
                const label = method.label ?? t.hero.cards;
                return (
                  <li key={method.src} className="flex flex-col items-center gap-2">
                    <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl border border-gray-100 bg-white p-2.5 sm:p-3 shadow-md">
                      <Image
                        src={method.src}
                        alt={label}
                        width={method.width}
                        height={method.height}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <StoresCarousel label={t.hero.storesCarouselLabel} srLabel={t.hero.compatibleStores} />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-14 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-brand-blue">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="bg-gray-50 py-14 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.discover.title}</h3>
              <p className="text-gray-600">
                {t.howItWorks.discover.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.checkout.title}</h3>
              <p className="text-gray-600">
                {t.howItWorks.checkout.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{t.howItWorks.receive.title}</h3>
              <p className="text-gray-600">
                {t.howItWorks.receive.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-4 py-14 sm:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.socialProof.title}
          </h2>
          <p className="text-gray-600">{t.socialProof.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: t.socialProof.testimonials.alejandra.name,
              location: t.socialProof.testimonials.alejandra.location,
              review: t.socialProof.testimonials.alejandra.review
            },
            {
              name: t.socialProof.testimonials.cesar.name,
              location: t.socialProof.testimonials.cesar.location,
              review: t.socialProof.testimonials.cesar.review
            },
            {
              name: t.socialProof.testimonials.gloria.name,
              location: t.socialProof.testimonials.gloria.location,
              review: t.socialProof.testimonials.gloria.review
            }
          ].map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&ldquo;{testimonial.review}&rdquo;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-purple py-14 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex justify-center">
            <DownloadExtensionButton t={t} onGradient />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-horizontal.png"
                alt="Mall for Latam"
                width={448}
                height={148}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                {t.footer.description}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footer.product.title}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/#como-funciona" className="hover:text-white">
                    {t.footer.product.howItWorks}
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="hover:text-white">
                    {t.footer.product.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="/extension" className="hover:text-white">
                    {t.footer.product.chromeExtension}
                  </Link>
                </li>
                <li>
                  <Link href="/app-movil" className="hover:text-white">
                    {t.footer.product.mobileApp}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.support.title}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/ayuda" className="hover:text-white">
                    {t.footer.support.helpCenter}
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-white">
                    {t.footer.support.contact}
                  </Link>
                </li>
                <li>
                  <Link href="/envios" className="hover:text-white">
                    {t.footer.support.shipping}
                  </Link>
                </li>
                <li>
                  <Link href="/devoluciones" className="hover:text-white">
                    {t.footer.support.returns}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t.footer.company.title}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/nosotros" className="hover:text-white">
                    {t.footer.company.about}
                  </Link>
                </li>
                <li>
                  <Link href="/carreras" className="hover:text-white">
                    {t.footer.company.careers}
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-white">
                    {t.footer.company.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="hover:text-white">
                    {t.footer.company.terms}
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    {t.footer.company.cookies}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}