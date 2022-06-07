import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myFirstPluginPlugin, MyFirstPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myFirstPluginPlugin)
  .addPage({
    element: <MyFirstPluginPage />,
    title: 'Root Page',
    path: '/my-first-plugin'
  })
  .render();
