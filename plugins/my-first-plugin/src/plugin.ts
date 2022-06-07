import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const myFirstPluginPlugin = createPlugin({
  id: 'my-first-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const MyFirstPluginPage = myFirstPluginPlugin.provide(
  createRoutableExtension({
    name: 'MyFirstPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
