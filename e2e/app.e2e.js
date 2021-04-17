/* eslint-disable no-undef */
import {by, device, element, expect} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should import image file', async () => {
    await expect(element(by.id('button'))).toBeVisible();
    await element(by.id('button')).tap();
  });
});
