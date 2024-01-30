import { mount } from '@vue/test-utils'
import _sut from '../../../pages/auth/reset_password.vue'

describe('signup page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})