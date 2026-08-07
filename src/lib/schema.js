// app/lib/schema.js

// Tamari actual details (EDIT KARO)
const BUSINESS_INFO = {
  name: "Dcodes Technologies",
  url: "https://dcodes.com",
  logo: "https://dcodes.com/logo5.png",
  description: "Web development, mobile app development, ERP solutions and digital marketing company in Ahmedabad, India",
  phone: "63536 53977", // YOUR NUMBER
  email: "info@dcodes.com",
  address: {
    street: "E 914, Ganesh Glory 11,<br />Jagatpur Road, SG Highway", // YOUR ADDRESS
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380001",
    country: "IN"
  },
  coordinates: {
    latitude: "23.0225",
    longitude: "72.5714"
  },
  socialMedia: [
    "https://www.linkedin.com/company/dcodestech",
    "https://twitter.com/dcodestech",
    "https://github.com/dcodestech"
  ],
  workingHours: {
    opens: "09:00",
    closes: "18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  }
};

// 1. Organization Schema
export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": BUSINESS_INFO.name,
  "url": BUSINESS_INFO.url,
  "logo": BUSINESS_INFO.logo,
  "description": BUSINESS_INFO.description,
  "email": BUSINESS_INFO.email,
  "telephone": BUSINESS_INFO.phone,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": BUSINESS_INFO.address.locality,
    "addressRegion": BUSINESS_INFO.address.region,
    "addressCountry": BUSINESS_INFO.address.country,
    "postalCode": BUSINESS_INFO.address.postalCode,
    "streetAddress": BUSINESS_INFO.address.street
  },
  "sameAs": BUSINESS_INFO.socialMedia
};

// 2. LocalBusiness Schema
export const LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BUSINESS_INFO.url}/#localbusiness`,
  "name": BUSINESS_INFO.name,
  "image": BUSINESS_INFO.logo,
  "description": BUSINESS_INFO.description,
  "priceRange": "$$",
  "telephone": BUSINESS_INFO.phone,
  "email": BUSINESS_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address.street,
    "addressLocality": BUSINESS_INFO.address.locality,
    "addressRegion": BUSINESS_INFO.address.region,
    "postalCode": BUSINESS_INFO.address.postalCode,
    "addressCountry": BUSINESS_INFO.address.country
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": BUSINESS_INFO.coordinates.latitude,
    "longitude": BUSINESS_INFO.coordinates.longitude
  },
  "url": BUSINESS_INFO.url,
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": BUSINESS_INFO.workingHours.days,
    "opens": BUSINESS_INFO.workingHours.opens,
    "closes": BUSINESS_INFO.workingHours.closes
  }
};

// 3. Website Schema with SearchBox
export const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": BUSINESS_INFO.name,
  "url": BUSINESS_INFO.url,
  "description": BUSINESS_INFO.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BUSINESS_INFO.url}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

// 4. Service Schema Generator
export const ServiceSchema = (serviceName, serviceDescription, serviceUrl) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "url": BUSINESS_INFO.url
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${serviceName} Services`,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Support & Maintenance"
        }
      }
    ]
  },
  "url": serviceUrl
});

// 5. FAQ Schema Generator
export const FAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// 6. BreadcrumbList Schema
export const BreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});