import { callMCPTool, MCPToolResult } from '../client.js';

/**
 * Facebook Marketplace Scraper
 * Actor ID: apify/facebook-marketplace-scraper
 * Cost: ~$2.60 / 1,000 results
 */

interface MarketplaceInput {
  /** Facebook Marketplace URLs to scrape */
  startUrls: string[];
  /** Max listings to scrape */
  maxItems?: number;
  /** Proxy configuration */
  proxyConfiguration?: {
    useApifyProxy?: boolean;
  };
}

/**
 * Scrape Facebook Marketplace listings
 *
 * @example
 * // By location
 * scrapeMarketplace({ startUrls: ['https://www.facebook.com/marketplace/sanfrancisco/'] })
 *
 * // By category
 * scrapeMarketplace({ startUrls: ['https://www.facebook.com/marketplace/sanfrancisco/instruments'] })
 *
 * // By search
 * scrapeMarketplace({ startUrls: ['https://www.facebook.com/marketplace/sanfrancisco/search/?query=guitar'] })
 *
 * @returns Listings with: title, url, price, location, photos, seller, status, delivery type
 */
export async function scrapeMarketplace(input: MarketplaceInput): Promise<MCPToolResult> {
  return callMCPTool('mcp__apify__actor_run', {
    actorId: 'apify/facebook-marketplace-scraper',
    input: {
      startUrls: input.startUrls.map(url => ({ url })),
      maxItems: input.maxItems || 100,
      proxyConfiguration: input.proxyConfiguration || { useApifyProxy: true }
    }
  });
}
