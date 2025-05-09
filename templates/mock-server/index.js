import Vue from 'vue';
import axios from 'axios';
import useAdapter from 'miragejs-axios-adapter';
import { createServer } from 'miragejs';
import {
  BALM_API_REGEX,
  NAMESPACE,
  PROXY_API_REGEX,
  MOCK_API_REGEX
} from './config';
import createApis from './modules';

export function mockServer() {
  useAdapter(axios, MOCK_API_REGEX);

  const server = createServer({
    models: {},

    seeds(server) {
      // More data
    },

    routes() {
      this.namespace = NAMESPACE;

      createApis(this);
    }
  });

  server.passthrough(
    ({ url }) => BALM_API_REGEX.test(url) || PROXY_API_REGEX.test(url)
  );

  return server;
}

if (process.env.NODE_ENV === 'development') {
  mockServer();
}
