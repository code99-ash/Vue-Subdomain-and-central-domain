<template>
    <section class="w-[400px] p-2 mx-auto bg-white shadow">
        <h1>Root Domain</h1>
        <form @submit.prevent="login" class="space-y-3">
            <input 
                v-model="email" 
                class="w-full h-[38px] rounded outline-0 border border-slate-200" 
                placeholder="Email Address"
            />
            <input 
                v-model="password" 
                class="w-full h-[38px] rounded outline-0 border border-slate-200" 
                placeholder="Email Address"
            />
            <button type="submit" class="px-[10px] py-[4px] bg-sky-700 text-sky-50 float-right">Login</button>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: 'oyetikh1@gmail.com',
            password: 'password'
        }
    },
    methods: {
        async login() {
            try {
                const resp = await this.$axios.$get('http://tenancy.test/api', {email: this.email, password: this.password})
                console.log("response", resp)
            }catch(err) {
                console.log("Error: ", err)
            }
        }
    }
}
</script>