
import React from 'react';
import { Helmet } from 'react-helmet-async';
import LogoExport from '@/components/LogoExport';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoDownload = () => {
  const variants = ['default', 'code', 'terminal', 'brackets', 'git'] as const;
  const sizes = [64, 128, 256, 512, 1024];

  const downloadAllLogos = () => {
    // This will trigger multiple downloads - browsers may block this
    // Better to create a zip file, but for now we'll do individual downloads
    variants.forEach((variant) => {
      sizes.forEach((size) => {
        setTimeout(() => {
          const event = new CustomEvent('downloadLogo', { 
            detail: { variant, size, format: 'png' } 
          });
          window.dispatchEvent(event);
        }, 100);
      });
    });
  };

  return (
    <>
      <Helmet>
        <title>Logo Downloads - M Tech Corp</title>
        <meta name="description" content="Download M Tech Corp logos in various formats and sizes for your projects and marketing materials." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            
            <h1 className="text-4xl font-bold text-mtechNavy mb-4">
              M Tech Corp Logo Downloads
            </h1>
            <p className="text-lg text-mtechGray-600 max-w-3xl">
              Download our logo in various formats and sizes. All logos are available in SVG (vector) and PNG (raster) formats. 
              Use these official logos for business cards, letterheads, presentations, and other marketing materials.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-mtechNavy mb-4">Usage Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-mtechNavy mb-2">Recommended Uses:</h3>
                <ul className="list-disc list-inside text-mtechGray-700 space-y-1">
                  <li>Business cards and letterheads</li>
                  <li>Website headers and footers</li>
                  <li>Social media profiles</li>
                  <li>Presentations and proposals</li>
                  <li>Marketing materials</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-mtechNavy mb-2">Brand Colors:</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-mtechOrange"></div>
                    <span className="text-mtechGray-700">M Tech Orange: #F05A28</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-mtechNavy"></div>
                    <span className="text-mtechGray-700">M Tech Navy: #1E407C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Variants */}
          <div className="space-y-12">
            {variants.map((variant) => (
              <div key={variant} className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-mtechNavy mb-6 capitalize">
                  {variant} Logo Variant
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {sizes.map((size) => (
                    <LogoExport
                      key={`${variant}-${size}`}
                      variant={variant}
                      size={size}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Download Section */}
          <div className="bg-mtechNavy text-white rounded-lg p-8 mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Need All Logos?</h2>
            <p className="mb-6 opacity-90">
              Download all logo variants and sizes at once for your convenience.
            </p>
            <Button 
              onClick={downloadAllLogos}
              className="bg-mtechOrange hover:bg-mtechOrange-dark"
              size="lg"
            >
              Download All Logos
            </Button>
            <p className="text-sm opacity-75 mt-2">
              Note: Multiple downloads will start. Please allow pop-ups for this site.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-lg p-6 mt-8 shadow-sm text-center">
            <h2 className="text-xl font-semibold text-mtechNavy mb-2">
              Need Custom Logo Sizes or Formats?
            </h2>
            <p className="text-mtechGray-600 mb-4">
              Contact us if you need specific sizes, formats, or have questions about logo usage.
            </p>
            <Button variant="outline" className="border-mtechOrange text-mtechOrange hover:bg-mtechOrange/10" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoDownload;
