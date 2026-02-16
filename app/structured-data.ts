export const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Tribal Welfare Society',
  alternateName: 'TWS',
  url: 'https://tribalwelfaresociety.org',
  logo: 'https://tribalwelfaresociety.org/logo.png',
  description: 'Empowering the displaced and underprivileged since 1993. Restoring human dignity through craftsmanship and justice.',
  foundingDate: '1993',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'New Delhi',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-11-2345-6789',
    contactType: 'General Inquiry',
    email: 'info@tribalwelfaresociety.org',
  },
  sameAs: [
    'https://www.facebook.com/tribalwelfaresociety',
    'https://www.twitter.com/tribalwelfaresociety',
    'https://www.instagram.com/tribalwelfaresociety',
  ],
  areaServed: {
    '@type': 'Place',
    name: 'North East India',
  },
};
