import { mount } from '@vue/test-utils'
import _sut from '../../../pages/app/index.vue'

describe('index app page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        vi.stubGlobal('definePageMeta', vi.fn())
        expect(_sut).toBeTruthy()
        const wrapper = mount(_sut)
        expect(wrapper.html()).toContain('yo')
    })
})