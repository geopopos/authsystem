import { mount } from '@vue/test-utils'
import _sut from '../../pages/contact.vue'

describe('contact page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})