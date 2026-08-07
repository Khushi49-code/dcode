// app/components/SchemaScripts.js
'use client';

import { 
  OrganizationSchema, 
  LocalBusinessSchema, 
  WebsiteSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema
} from '@/lib/schema';

export default function SchemaScripts({ pageType, customData = {} }) {
  
  // Homepage Schema
  if (pageType === 'homepage') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema) }}
        />
      </>
    );
  }

  // Service Page Schema
  if (pageType === 'service') {
    const serviceSchema = ServiceSchema(
      customData.serviceName,
      customData.serviceDescription,
      customData.serviceUrl
    );
    
    const faqSchema = customData.faqs ? FAQSchema(customData.faqs) : null;
    
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
      </>
    );
  }

  // Contact Page Schema
  if (pageType === 'contact') {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
        />
      </>
    );
  }

  return null;
}