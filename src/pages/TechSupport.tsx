import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Battery, HardDrive, Mail, MemoryStick, MessageCircle, Phone, Printer, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { Currency } from "@/lib/pricing";
import { formatSupportPrice, supportBookingUrl, techSupportServices } from "@/data/techSupport";
import hardwareImage from "@/assets/tech-support-hardware.jpg";

const icons = { ram: MemoryStick, ssd: HardDrive, battery: Battery, printer: Printer, email: Mail, software: Download };
const pageUrl = "https://mtechcorpja.com/tech-support";

export default function TechSupport() {
  const [currency, setCurrency] = useState<Currency>("JMD");
  return (
    <>
      <Helmet>
        <title>Tech Support & Hardware Services in Jamaica | MTech Corp</title>
        <meta name="description" content="RAM upgrades, SSD installation, laptop battery replacement, printer setup, email setup and software installation in Jamaica. Contact MTech Corp for tech support." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Tech Support & Hardware Services | MTech Corp" />
        <meta property="og:description" content="Hardware upgrades and everyday device support in Jamaica. View service rates and book with MTech Corp." />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "Service", name: "Tech Support & Hardware Services", url: pageUrl,
          provider: { "@type": "Organization", name: "MTech Corp", url: "https://mtechcorpja.com/", telephone: "+18768331524" },
          areaServed: { "@type": "Country", name: "Jamaica" },
          hasOfferCatalog: { "@type": "OfferCatalog", name: "Tech Support Services", itemListElement: techSupportServices.map(service => ({ "@type": "Offer", priceCurrency: "JMD", ...(service.id === "software" ? { priceSpecification: { "@type": "PriceSpecification", minPrice: service.jmd, priceCurrency: "JMD" } } : { price: service.jmd }), itemOffered: { "@type": "Service", name: service.name, description: service.description } })) },
        })}</script>
      </Helmet>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://mtechcorpja.com/" }, { name: "Services", url: "https://mtechcorpja.com/services" }, { name: "Tech Support", url: pageUrl }]} />

      <section className="relative isolate overflow-hidden bg-support-brand text-support-foreground">
        <img src={hardwareImage} alt="RAM installation inside an open laptop" width={1600} height={912} loading="eager" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-right" />
        <div className="support-image-overlay absolute inset-0 -z-10" />
        <div className="container mx-auto px-5 py-12 sm:px-8 md:py-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">Services <ArrowRight className="h-3 w-3" /> Tech Support</Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-widest">MTech Corp · Jamaica</p>
          <h1 className="mt-3 max-w-xl text-4xl font-bold leading-tight md:text-5xl">Tech Support &amp; Hardware Services</h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed">Reliable hardware upgrades and everyday device setup, so you can get back to what matters.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="support" size="lg"><a href={supportBookingUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle />Book via WhatsApp</a></Button>
            <Button asChild variant="outline" size="lg" className="border-support-foreground/60 bg-transparent text-support-foreground hover:bg-support-foreground/10 hover:text-support-foreground"><a href="tel:876-833-1524"><Phone />Call Now</a></Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0"><p className="text-sm font-semibold uppercase tracking-widest text-support-action">Practical help. Clear rates.</p><h2 className="mt-2 max-w-xs text-2xl font-bold text-foreground sm:max-w-none md:text-3xl">Our tech support services</h2></div>
            <div role="group" aria-label="Tech support currency" className="flex w-fit gap-1 rounded-md border border-border p-1">
              {(["JMD", "USD"] as Currency[]).map(value => <Button key={value} size="sm" variant={currency === value ? "default" : "ghost"} aria-pressed={currency === value} onClick={() => setCurrency(value)} className={currency === value ? "bg-support-brand text-support-foreground hover:bg-support-brand/90" : ""}>{value}</Button>)}
            </div>
          </div>
          {currency === "USD" && <p className="mt-4 text-sm text-muted-foreground">USD prices are approximate. Billing rates are listed in JMD.</p>}
          {([{ id: "hardware", title: "Hardware Upgrades" }, { id: "basic", title: "Basic Setup Services" }] as const).map(category => (
            <div key={category.id} className="mt-10">
              <h3 className="mb-5 text-xl font-bold text-foreground">{category.title}</h3>
              <div className="grid gap-5 md:grid-cols-3">
                {techSupportServices.filter(service => service.category === category.id).map(service => {
                  const Icon = icons[service.id];
                  return <article key={service.id} className="flex min-w-0 flex-col rounded-lg border border-border bg-card p-6 text-card-foreground">
                    <Icon className="mb-5 h-7 w-7 text-support-action" aria-hidden="true" />
                    <h4 className="text-xl font-semibold">{service.name}</h4>
                    <p className="mt-3 flex-grow text-muted-foreground">{service.description}</p>
                    <p className="mt-6 text-2xl font-bold">{formatSupportPrice(service.jmd, currency)}{service.id === "software" ? "+" : ""}</p>
                    {service.id === "software" && <p className="mt-1 text-sm text-muted-foreground">Starting price</p>}
                    <Button asChild variant="outline" className="mt-5 w-full"><a href={supportBookingUrl(service.name)} target="_blank" rel="noopener noreferrer">Enquire <ArrowRight /></a></Button>
                  </article>;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-5 sm:px-8">
          <h2 className="text-3xl font-bold text-foreground">From enquiry to ready-to-use</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[{ title: "Tell us what you need", text: "Send your device model and the service you’re interested in." }, { title: "Confirm the details", text: "We’ll discuss compatibility, the final quote, and arrangements for your service." }, { title: "Upgrade, test, and go", text: "Your upgrade or setup is checked so your device is ready to use." }].map((step, i) => <div key={step.title}><p className="text-sm font-bold text-support-action">0{i + 1}</p><h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3><p className="mt-3 text-muted-foreground">{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-support-brand py-12 text-support-foreground md:py-16">
        <div className="container mx-auto px-5 sm:px-8">
          <CheckCircle2 className="mb-4 h-8 w-8" />
          <h2 className="text-3xl font-bold">Let’s get your device sorted.</h2>
          <p className="mt-4 max-w-xl text-lg">Tell us what’s needed and we’ll confirm the next steps.</p>
          <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild variant="support" size="lg"><a href={supportBookingUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle />Book via WhatsApp</a></Button>
            <a href="tel:876-833-1524" className="inline-flex items-center gap-2 underline underline-offset-4"><Phone className="h-4 w-4" />876-833-1524</a>
            <a href="mailto:info@mtechcorpja.com" className="inline-flex items-center gap-2 break-all underline underline-offset-4"><Mail className="h-4 w-4 shrink-0" />info@mtechcorpja.com</a>
          </div>
        </div>
      </section>
    </>
  );
}