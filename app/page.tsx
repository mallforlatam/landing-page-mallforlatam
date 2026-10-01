'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { LanguageSelector } from '@/components/language-selector';
import { useLocale } from '@/hooks/use-locale';
import { getTranslations } from '@/lib/i18n';
import { toast } from 'sonner';
import { 
  ShoppingCart, 
  Globe, 
  CreditCard, 
  Truck, 
  Shield, 
  Zap,
  Search,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { locale, changeLocale } = useLocale();
  const t = getTranslations(locale);

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: t.features.globalShopping.title,
      description: t.features.globalShopping.description
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: t.features.localPayments.title,
      description: t.features.localPayments.description
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: t.features.smartLogistics.title,
      description: t.features.smartLogistics.description
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t.features.secureReliable.title,
      description: t.features.secureReliable.description
    }
  ];

  const stats = [
    { value: "+10", label: t.hero.stats.stores },
    { value: "+50", label: t.hero.stats.orders }
  ];

  const handleJoinWaitlist = async () => {
    if (!email) {
      toast.error('Por favor ingresa tu email.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success('Te hemos agregado a la lista de espera.');
        setEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        toast.error(data?.error ?? 'No se pudo procesar tu registro.');
      }
    } catch (err) {
      toast.error('Error de red. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <Button className="px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base" asChild>
              <a href="https://app.mallforlatam.com">{t.nav.getStarted}</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-4 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">
          <Zap className="h-3 w-3 mr-1" aria-hidden="true" />
          {t.hero.badge}
        </Badge>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent whitespace-pre-line">
          {t.hero.title}
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col items-center mb-12">
          <label htmlFor="hero-email" className="mb-2 text-sm font-medium text-gray-700">
            {t.hero.emailLabel}
          </label>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-0">
            <Input
              id="hero-email"
              type="email"
              placeholder={t.hero.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:rounded-r-none min-w-[300px]"
            />
            <Button onClick={handleJoinWaitlist} disabled={isSubmitting || !email} className="sm:rounded-l-none bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90">
              {t.hero.joinWaitlist}
              <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
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
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
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
      <section className="bg-gradient-to-r from-brand-blue to-brand-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
              <a href="https://app.mallforlatam.com">
                <CheckCircle className="h-5 w-5 mr-2" />
                {t.cta.joinBeta}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-brand-blue relative"
              onClick={() => toast.info(t.cta.downloadExtensionToast)}
            >
              {t.cta.downloadExtension}
              <Badge className="ml-2 bg-white/20 text-white hover:bg-white/20">
                {t.cta.downloadExtensionBadge}
              </Badge>
            </Button>
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
                <li>{t.footer.product.howItWorks}</li>
                <li>{t.footer.product.pricing}</li>
                <li>{t.footer.product.chromeExtension}</li>
                <li>{t.footer.product.mobileApp}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footer.support.title}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.footer.support.helpCenter}</li>
                <li>{t.footer.support.contact}</li>
                <li>{t.footer.support.shipping}</li>
                <li>{t.footer.support.returns}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t.footer.company.title}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.footer.company.about}</li>
                <li>{t.footer.company.careers}</li>
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
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}