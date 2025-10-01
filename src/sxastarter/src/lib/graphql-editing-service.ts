import { GraphQLEditingService } from '@sitecore-jss/sitecore-jss-nextjs/editing';
import clientFactory from 'lib/graphql-client-factory';

/**
 * GraphQL Editing Service instance. Used to fetch editing data in Pages preview (editing) Metadata Edit Mode.
 * Uses lazy initialization to avoid instantiation during build time.
 */
let _graphQLEditingService: GraphQLEditingService | null = null;

export const graphQLEditingService = {
  fetchEditingData: (...args: Parameters<GraphQLEditingService['fetchEditingData']>) => {
    if (!_graphQLEditingService) {
      _graphQLEditingService = new GraphQLEditingService({
        clientFactory,
      });
    }
    return _graphQLEditingService.fetchEditingData(...args);
  },
};
