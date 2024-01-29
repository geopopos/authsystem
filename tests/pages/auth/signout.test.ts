import { mount } from '@vue/test-utils'
import _sut from '../../../pages/auth/signout.vue'
import { createTestingPinia } from '@pinia/testing'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

vi.mock('vue-router', () => ({
    useRouter: vi.fn(),
}))

describe('signout page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
        const pinia = createTestingPinia()

        const routerPush = vi.fn()
        useRouter.mockReturnValue({ push: routerPush })

        const wrapper = mount(_sut, {
            global: {
              plugins: [pinia],
              mocks: {
                $router: {
                  push: routerPush,
                },
              },
            },
          })
    })
})