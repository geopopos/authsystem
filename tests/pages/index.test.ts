import { mount } from '@vue/test-utils'
import _sut from '../../pages/index.vue'

describe('index page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})