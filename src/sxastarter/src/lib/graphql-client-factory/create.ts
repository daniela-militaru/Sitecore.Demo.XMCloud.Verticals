import {
  GraphQLRequestClientFactoryConfig,
  GraphQLRequestClient,
  getEdgeProxyContentUrl,
} from '@sitecore-jss/sitecore-jss-nextjs/graphql';
import { JssConfig } from 'lib/config';

/**
 * Creates a new GraphQLRequestClientFactory instance
 * @param config jss config
 * @returns GraphQLRequestClientFactory instance
 */
export const createGraphQLClientFactory = (config: JssConfig) => {
  let clientConfig: GraphQLRequestClientFactoryConfig;

  if (config.sitecoreEdgeContextId) {
    clientConfig = {
      endpoint: getEdgeProxyContentUrl(config.sitecoreEdgeContextId, config.sitecoreEdgeUrl),
    };
  } else if (config.graphQLEndpoint && config.sitecoreApiKey) {
    // If graphQLEndpoint is a relative path, combine it with sitecoreApiHost
    let endpoint = config.graphQLEndpoint;
    if (endpoint.startsWith('/') && config.sitecoreApiHost) {
      endpoint = `${config.sitecoreApiHost}${endpoint}`;
    }

    clientConfig = {
      endpoint: endpoint,
      apiKey: config.sitecoreApiKey,
    };
  } else {
    throw new Error(
      'Please configure either your sitecoreEdgeContextId, or your graphQLEndpoint and sitecoreApiKey.'
    );
  }

  return GraphQLRequestClient.createClientFactory(clientConfig);
};
