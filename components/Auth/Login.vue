<template>
    <Dialog 
            :modal="true"
            :dismissableMask="false"
            :visible.sync="authDialog"
            :closable="false"
    >
        <template #header>
            <div class="flex items-center justify-between w-full">
                <h1 class="text-teal-300 text-2xl md:text-3xl">Login</h1>
                <i 
                    class="pi pi-times text-base text-slate-400 px-2 py-1"
                    @click="hideDialog"
                ></i>
            </div>
        </template>
        <section class="w-full sm:max-w-[350px] h-auto bg-white space-y-2">
            <div 
                :class="[feedback.severity=='error'? 'bg-red-200 text-red-500':'text-blue-200 text-blue-400']"
                class="rounded px-[20px] py-[8px] text-xs mb-2 font-medium" 
                v-if="feedback.severity"
            >
            {{feedback.msg}}
            <i 
                class="pi pi-times float-right ml-3" @click="feedback.severity=undefined"
            ></i>
            </div>
            <div class="space-y-1">
                <label for="name" class="text-xs text-slate-300">Username / Email</label>
                <input 
                    id="name" 
                    class="text-slate-400 text-sm w-full h-[40px] border border-slate-200 rounded px-2 outline-0" 
                    v-model="username"
                />
            </div>
            <div class="space-y-1">
                <label for="pass" class="text-xs text-slate-300">Password</label>
                <input 
                    id="pass" 
                    type="password"
                    class="text-slate-400 text-sm w-full h-[40px] border border-slate-200 rounded px-2 outline-0" 
                    v-model="password"
                />
            </div>
            <button 
                class="outline-0 bg-transparent my-2 text-xs text-cyan-400"
                @click="$emit('setAuthType', 'signup')"
            >Don't have an account?</button>
            <button class="px-[15px] py-[4px] rounded border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-teal-50 float-right" @click="loginUser">
                Login <i class="pi pi-spin pi-spinner text-xs ml-2" v-if="loading"></i>
            </button>
        </section>
        <template #footer>
            <section class="space-y-3 pb-3">
                <div class="flex justify-center items-center space-x-3">
                    <div class="h-[2px] bg-slate-100 grow"></div>
                    <span class="text-sm text-slate-200 flex-none w-max">Or login with</span>
                    <div class="h-[2px] bg-slate-100 grow"></div>
                </div>
                <div class="flex justify-center items-center space-x-2">
                    <button class="px-[15px] py-[6px] rounded-sm bg-red-500 text-rose-50 text-xs lg:text-base">
                        Google <i class="pi pi-google"></i>
                    </button>
                    <button class="px-[15px] py-[6px] rounded-sm bg-blue-500 text-blue-50 text-xs lg:text-base">
                        Facebook <i class="pi pi-facebook"></i>
                    </button>
                </div>
            </section>
        </template>
    </Dialog>
</template>

<script>
import AlertMessage from '@/mixins/alert-message'
export default {
    props: ['authType'],
    mixins: [AlertMessage],
    computed: {
        authDialog: {
            get() {
                return this.authType == 'login'
            },
            set(newVal) {
                return newVal
            }
        }
    },
    watch: {
        authType(to, from) {
            this.authDialog = (to == 'login')
            this.reset()
        }
    },
    data() {
        return {
            loading: false,
            username: '',
            password: '',
            feedback: {severity: undefined, msg: ''}
        }
    },
    methods: {
        hideDialog() {
            if(this.loading) return;
            this.authDialog = false;
            this.reset();
            this.$emit('resetAuthType')
        },
        reset() {
            this.username = '';
            this.password = '';
            this.feedback = {severity: undefined, msg: ''}
        },
        async loginUser() {
            if(!(this.username && this.password)) {
                this.feedback = {severity: 'error', msg: 'All fields are required'};
                return;
            }
            this.loading = true;
            try {
                this.feedback.severity = undefined
                
                const data = {identity: this.username, password: this.password}
                await this.$auth.loginWith('local', {data})
                // console.log(this.$auth)
                this.hideDialog();
                this.$emit('setAuthType', 'null')
                if(this.$route.query?.redirect && this.$auth.user.role == 'admin') {
                    this.$router.push(this.$route.query?.redirect)
                }else {
                    this.$router.push(this.$route.path)
                }
            }catch(err) {
                console.log(err)
                this.feedback = {severity: 'error', msg: this.handleError(err)}
                this.password = '';
            }
            this.loading = false;
        }
    }
}
</script>