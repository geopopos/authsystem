import { mount } from '@vue/test-utils'
import _sut from '../../../pages/auth/forgotpassword.vue'

describe('forgotpassword page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})