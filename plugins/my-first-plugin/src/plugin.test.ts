import { myFirstPluginPlugin } from './plugin';

describe('my-first-plugin', () => {
  it('should export plugin', () => {
    expect(myFirstPluginPlugin).toBeDefined();
  });
});
