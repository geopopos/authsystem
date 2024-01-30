import { mount } from '@vue/test-utils'
import _sut from '../../../pages/auth/signup.vue'

describe('signup page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})