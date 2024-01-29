import { mount } from '@vue/test-utils'
import _sut from '../../../pages/auth/signin.vue'
import { createTestingPinia } from '@pinia/testing'

describe('signin page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        // vi.stubGlobal('definePageMeta', vi.fn())
        expect(_sut).toBeTruthy()
        const pinia = createTestingPinia()
        const wrapper = mount(_sut)
        
        expect(wrapper.html()).toContain('uauthform')
    })

    test('signin failed test', ()=> {
        vi.stubGlobal('errorAlert', ()=>({show: true, title: "Signin Error"}))
        const pinia = createTestingPinia()
        const wrapper = mount(_sut)
        expect(wrapper.html()).toContain('ualert')
    })
})