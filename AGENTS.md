# Architecture
- Keep Tech Support service data and JMD-based pricing in a dedicated module shared by the page and tests, so flyer rates remain exact without USD conversion rounding.
- Register public service pages in the existing React router and use Helmet plus BreadcrumbSchema for route-specific metadata, preserving the site's established SEO approach.