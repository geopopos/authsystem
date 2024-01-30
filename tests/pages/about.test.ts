import { mount } from '@vue/test-utils'
import _sut from '../../pages/about.vue'

describe('about page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})