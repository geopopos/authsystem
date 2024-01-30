describe('import vue components', () => {
    test('logo imports as expected', async () => {
        const cmp = await import('../components/Logo.vue')
        expect(cmp).toBeDefined()
    })
    test('layout app imports as expected', async () => {
        const cmp = await import('../layouts/app.vue')
        expect(cmp).toBeDefined()
    })
    test('layout default imports as expected', async () => {
        const cmp = await import('../layouts/default.vue')
        expect(cmp).toBeDefined()
    })
    test('pages index imports as expected', async () => {
        const cmp = await import('../pages/index.vue')
        expect(cmp).toBeDefined()
    })
    test('pages about imports as expected', async () => {
        const cmp = await import('../pages/about.vue')
        expect(cmp).toBeDefined()
    })
    test('pages contact imports as expected', async () => {
        const cmp = await import('../pages/contact.vue')
        expect(cmp).toBeDefined()
    })
    test('pages app index imports as expected', async () => {
        const cmp = await import('../pages/app/index.vue')
        expect(cmp).toBeDefined()
    })
    test('pages app profile imports as expected', async () => {
        const cmp = await import('../pages/app/profile.vue')
        expect(cmp).toBeDefined()
    })
    test('auth signin imports as expected', async () => {
        const cmp = await import('../pages/auth/signin.vue')
        expect(cmp).toBeDefined()
    })
    test('auth forgotpassword imports as expected', async () => {
        const cmp = await import('../pages/auth/forgotpassword.vue')
        expect(cmp).toBeDefined()
    })
    test('auth reset password imports as expected', async () => {
        const cmp = await import('../pages/auth/reset_password.vue')
        expect(cmp).toBeDefined()
    })
    test('auth signout imports as expected', async () => {
        const cmp = await import('../pages/auth/signout.vue')
        expect(cmp).toBeDefined()
    })
    test('auth signup imports as expected', async () => {
        const cmp = await import('../pages/auth/signup.vue')
        expect(cmp).toBeDefined()
    })
    test('auth stores as expected', async () => {
        const cmp = await import('../stores/auth')
        expect(cmp).toBeDefined()
    })
})