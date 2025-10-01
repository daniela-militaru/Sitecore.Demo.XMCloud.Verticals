import { NextRequest, NextResponse } from 'next/server';
import { RedirectsMiddleware } from '@sitecore-jss/sitecore-jss-nextjs/middleware';
import { MiddlewarePlugin } from '..';
import { siteResolver } from 'lib/site-resolver';
import clientFactory from 'lib/graphql-client-factory';
import config from 'temp/config';

class RedirectsPlugin implements MiddlewarePlugin {
  private redirectsMiddleware: RedirectsMiddleware | null = null;
  order = 0;

  private getRedirectsMiddleware(): RedirectsMiddleware | null {
    // Guard: only create when Edge config or valid GraphQL endpoint is available
    const hasValidGraphQLConfig =
      !!config.sitecoreEdgeContextId ||
      (!!config.graphQLEndpoint &&
        !!config.sitecoreApiKey &&
        (config.graphQLEndpoint.startsWith('http') ||
          (config.graphQLEndpoint.startsWith('/') && !!config.sitecoreApiHost)));

    if (!hasValidGraphQLConfig) {
      return null;
    }

    if (!this.redirectsMiddleware) {
      this.redirectsMiddleware = new RedirectsMiddleware({
        // Client factory implementation
        clientFactory,
        // These are all the locales you support in your application.
        // These should match those in your next.config.js (i18n.locales).
        locales: ['en'],
        // This function determines if a route should be excluded from RedirectsMiddleware.
        // Certain paths are ignored by default (e.g. Next.js API routes), but you may wish to exclude more.
        // This is an important performance consideration since Next.js Edge middleware runs on every request.
        excludeRoute: () => false,
        // This function determines if the middleware should be turned off.
        // By default it is disabled while in development mode.
        disabled: () => process.env.NODE_ENV === 'development',
        // Site resolver implementation
        siteResolver,
      });
    }

    return this.redirectsMiddleware;
  }

  /**
   * exec async method - to find coincidence in url.pathname and redirects of site
   * @param req<NextRequest>
   * @returns Promise<NextResponse>
   */
  async exec(req: NextRequest, res?: NextResponse): Promise<NextResponse> {
    const middleware = this.getRedirectsMiddleware();
    if (!middleware) {
      return NextResponse.next();
    }
    return middleware.getHandler()(req, res);
  }
}

export const redirectsPlugin = new RedirectsPlugin();
