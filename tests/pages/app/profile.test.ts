import { mount } from '@vue/test-utils'
import _sut from '../../../pages/app/profile.vue'

describe('profile app page Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})