import { mount } from '@vue/test-utils'
import {useAuthStore as _sut} from '../../stores/auth.js'

describe('store auth Tests', () => {
    afterEach(()=> {
        vi.unstubAllGlobals()
    })
    test('can be amounted', ()=> {
        expect(_sut).toBeTruthy()
    })
})