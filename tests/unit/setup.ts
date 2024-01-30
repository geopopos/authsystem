import { config } from '@vue/test-utils';

config.global.stubs = {
  NuxtLink: true,
  UAuthForm: true,
  UAlert: true,
  UCard: true
};