import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    getters: {
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        setAuthenticated(isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
        },
        async signin(email, password) {
            const client = useSupabaseClient();
            try {
                const { data, error } = await client.auth.signInWithPassword({ email, password });
                if (error) throw error;
                this.setUser(data.user);
                this.setAuthenticated(true);
            } catch(error) {
                throw error;
            }
        },
        async signup(email, password) {
            const client = useSupabaseClient();
            try {
                const { data, error } = await client.auth.signUp({ email, password });
                if (error) throw error;
                const response = {
                    success: true,
                    message: "Registration successful! Please check your email to confirm your account."
                }
                return response;
            } catch(error) {
                throw error;
            }
        },
        async signout() {
            const client = useSupabaseClient();
            try {
                const { error } = await client.auth.signOut();
                if (error) throw error;
                this.setUser(null);
                this.setAuthenticated(false);
            } catch(error) {
                throw error;
            }
        },
        async sendPasswordResetEmail(email) {
            const client = useSupabaseClient();
            try{
                const { data, error } = await client.auth.resetPasswordForEmail(email, {
                    redirectTo: `http://localhost:3000/auth/loginotp`,
                })
                if (error) throw error;
                return data;
            } catch(error) {
                throw error;
            }
        },
        async verifyOtp(type, token) {
            console.log(token)
            const client = useSupabaseClient();
            try {
                const { data, error } = await client.auth.verifyOtp({
                    type: 'recovery',
                    token_hash: token,
                });
               
                if (error) throw error;
                console.log(data);
                this.setUser(data.user);
                this.setAuthenticated(true);
                return data;
            } catch(error) {
                throw error;
            }
        },
        async checkSession() {
            const client = useSupabaseClient();
            const user = client.auth.user();

            if (user) {
                this.setUser(user);
                this.setAuthenticated(true);
            }
        },
    },
    persist: true,
});
