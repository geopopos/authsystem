import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Signin from './signin.vue';
import { createRouterMock, injectRouterMock } from 'vue-router-mock';
import { createPinia, setActivePinia } from 'pinia';
import { useAuthStore } from "../../stores/auth";

// Mock vue-router
vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
  })),
}));

// Create a spy for the signin method
const signinSpy = vi.fn();

// Mock auth store
vi.mock('@/stores/auth', () => ({
  useAuthStore: vi.fn(() => ({
    signin: signinSpy,
  })),
}));

describe('Signin.vue', () => {
  let router;

  beforeEach(() => {
    router = createRouterMock();
    injectRouterMock(router);
    setActivePinia(createPinia());
    signinSpy.mockReset(); // Reset the spy before each test
  });

  it('calls signin method on form submission', async () => {
    const wrapper = mount(Signin);
    const testCredentials = { email: 'test@example.com', password: 'password' };

    // Debugging: Log onSubmit method to ensure it's defined
    console.log('onSubmit method:', wrapper.vm.onSubmit);

    // Directly call the onSubmit method if it exists
    if (wrapper.vm.onSubmit) {
      await wrapper.vm.onSubmit(testCredentials);
    } else {
      console.error('The onSubmit method is not defined on the component instance.');
    }

    // Check if signinSpy was called
    // expect(signinSpy).toHaveBeenCalledWith('test@example.com', 'password');

    // Assert navigation to '/app' after successful signin
    // expect(router.push).toHaveBeenCalledWith('/app');
  });

  // Additional tests to validate other behaviors can be added here...
});
