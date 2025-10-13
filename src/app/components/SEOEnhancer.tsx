'use client';

import { useEffect } from 'react';

interface SEOEnhancerProps {
  keywords?: string[];
  focusKeyword?: string;
  pageType?: 'homepage' | 'pricing' | 'about' | 'contact' | 'blog' | 'legal';
}

export default function SEOEnhancer({ 
  keywords = [], 
  focusKeyword = 'free travel website',
  pageType = 'homepage' 
}: SEOEnhancerProps) {
  
  useEffect(() => {
    // Add dynamic meta tags for better targeting
    const addMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Enhanced keyword targeting based on page type
    const baseKeywords = [
      'free travel website',
      'free travel site builder', 
      'free travel platform',
      'free AI travel tools',
      'voyage forge'
    ];

    const pageSpecificKeywords: Record<string, string[]> = {
      homepage: [
        'build free travel website',
        'create travel site free',
        'free travel website maker',
        'free tour operator platform',
        'free travel agency software'
      ],
      pricing: [
        'free travel website pricing',
        'free travel platform cost',
        'free travel site plans',
        'travel website builder free plan'
      ],
      about: [
        'about free travel platform',
        'free travel website company', 
        'travel technology free'
      ],
      contact: [
        'contact free travel platform',
        'free travel website support',
        'help travel website free'
      ],
      blog: [
        'free travel blog',
        'travel content free',
        'travel blogging platform'
      ],
      legal: [
        'free travel platform terms',
        'travel website legal'
      ]
    };

    const allKeywords = [
      ...baseKeywords,
      ...keywords,
      ...(pageSpecificKeywords[pageType] || [])
    ].join(', ');

    addMetaTag('keywords', allKeywords);
    addMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    addMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    addMetaTag('bingbot', 'index, follow');
    
    // Add language and content targeting
    addMetaTag('language', 'English');
    addMetaTag('content-language', 'en-US');
    addMetaTag('geo.region', 'US');
    addMetaTag('geo.placename', 'Global');
    
    // Enhanced semantic targeting
    addMetaTag('semantic-keywords', focusKeyword);
    addMetaTag('target-audience', 'travel businesses, tour operators, travel agencies, travel guides');
    addMetaTag('business-category', 'Travel Technology, SaaS, Website Builder');
    
    // Add structured data breadcrumbs dynamically
    const breadcrumbScript = document.getElementById('dynamic-breadcrumb');
    if (!breadcrumbScript) {
      const script = document.createElement('script');
      script.id = 'dynamic-breadcrumb';
      script.type = 'application/ld+json';
      
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Free Travel Website Builder",
            "item": "https://voyage-forge.com"
          }
        ]
      };

      // Add page-specific breadcrumb
      if (pageType !== 'homepage') {
        const pageNames: Record<string, string> = {
          pricing: 'Free Travel Platform Pricing',
          about: 'About Our Free Travel Platform',
          contact: 'Contact Free Travel Website Support',
          blog: 'Free Travel Blog & Resources',
          legal: 'Legal Information'
        };
        
        if (pageNames[pageType]) {
          breadcrumbData.itemListElement.push({
            "@type": "ListItem", 
            "position": 2,
            "name": pageNames[pageType],
            "item": `https://voyage-forge.com/${pageType === 'about' ? 'about-us' : pageType}`
          });
        }
      }

      script.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    }

  }, [keywords, focusKeyword, pageType]);

  // Hidden SEO content for crawlers
  return (
    <div className="sr-only" aria-hidden="true">
      {/* Enhanced semantic content for free travel site targeting */}
      <h2>Free Travel Website Builder Features</h2>
      <p>
        Create your completely free travel website with our AI-powered platform. 
        Build a professional travel site at no cost with advanced features including 
        AI content generation, booking integration, and SEO optimization.
      </p>
      
      <h3>Why Choose Our Free Travel Platform?</h3>
      <ul>
        <li>100% Free travel website creation - no hidden costs</li>
        <li>AI-powered content generation for travel businesses</li>
        <li>Free travel site templates and designs</li>
        <li>Integrated booking system for tour operators</li>
        <li>Free travel SEO tools and optimization</li>
        <li>Mobile-responsive free travel website design</li>
        <li>Free travel agency management tools</li>
        <li>No coding required - easy drag-and-drop builder</li>
      </ul>

      <h3>Free Travel Site Builder Benefits</h3>
      <p>
        Our free travel website platform empowers travel professionals to create 
        stunning, functional travel websites without any upfront investment. 
        Perfect for new travel agencies, independent travel guides, and 
        tour operators looking to establish their online presence.
      </p>

      <h4>Free Travel Business Tools Included</h4>
      <ul>
        <li>Free travel content management system</li>
        <li>Free travel booking widget integration</li> 
        <li>Free travel analytics and reporting</li>
        <li>Free travel customer management tools</li>
        <li>Free travel marketing automation</li>
        <li>Free travel SEO optimization tools</li>
        <li>Free travel social media integration</li>
        <li>Free travel payment gateway options</li>
      </ul>

      {/* Page-specific hidden content */}
      {pageType === 'pricing' && (
        <>
          <h4>Free Travel Website Pricing</h4>
          <p>Start completely free with our travel website builder. No credit card required, no setup fees, no hidden costs. Build your travel website for free and upgrade only when you need advanced features.</p>
        </>
      )}

      {pageType === 'homepage' && (
        <>
          <h4>Start Your Free Travel Website Today</h4>
          <p>Join thousands of travel professionals who trust our free platform to power their online presence. Create, customize, and launch your travel website in minutes - completely free.</p>
        </>
      )}

      <div itemScope itemType="https://schema.org/SoftwareApplication">
        <meta itemProp="name" content="Voyage Forge Free Travel Website Builder" />
        <meta itemProp="applicationCategory" content="Travel Website Builder" />
        <meta itemProp="operatingSystem" content="Web Browser" />
        <meta itemProp="price" content="0" />
        <meta itemProp="priceCurrency" content="USD" />
      </div>
    </div>
  );
}