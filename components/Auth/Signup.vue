<template>
    <Dialog 
            :modal="true"
            :dismissableMask="false"
            :visible.sync="authDialog"
            :closable="false"
    >
        <template #header>
            <div class="flex items-center justify-between w-full">
                <h1 class="text-cyan-400 text-2xl md:text-3xl">Signup</h1>
                <i 
                    class="pi pi-times text-base text-slate-400 px-2 py-1"
                    @click="hideDialog"
                ></i>
            </div>
        </template>
        <section class="w-full sm:max-w-[400px] h-auto bg-white space-y-2">
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
                <label for="name" class="text-xs text-slate-300">Username</label>
                <input 
                    id="name" 
                    class="text-slate-400 text-sm w-full h-[40px] border border-slate-200 rounded px-2 outline-0" 
                    v-model="username"
                />
            </div>
            <div class="space-y-1">
                <label for="email" class="text-xs text-slate-300">Email</label>
                <input 
                    id="email" 
                    class="text-slate-400 text-sm w-full h-[40px] border border-slate-200 rounded px-2 outline-0" 
                    v-model="email"
                />
            </div>
            <div class="md:flex md:items-center md:justify-between md:space-x-2 space-y-1">
                <div class="space-y-1">
                    <label for="pass" class="text-xs text-slate-300">Password</label>
                    <input 
                        id="pass" 
                        type="password"
                        class="text-slate-400 text-sm w-full h-[40px] border border-slate-200 rounded px-2 outline-0" 
                        v-model="password"
                    />
                </div>
                <div class="space-y-1">
                    <label for="pass2" class="text-xs text-slate-300">Password Again</label>
                    <input 
                        id="pass2" 
                        type="password"
                        class="text-slate-400 text-sm w-full h-[40px] border border-slate-200 rounded px-2 outline-0" 
                        v-model="password2"
                    />
                </div>
            </div>
            <button 
                class="outline-0 bg-transparent mt-2 mb-3 text-xs text-orange-400"
                @click="$emit('setAuthType', 'login')"
            >Already have an account?</button>
            <button class="px-[15px] py-[4px] rounded border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-cyan-50 float-right" @click="signupUser">
                Signup <i class="pi pi-spin pi-spinner text-xs ml-1" v-if="loading"></i>
            </button>
        </section>
        <template #footer>
            <section class="space-y-3 pb-3">
                <div class="flex justify-center items-center space-x-3">
                    <div class="h-[2px] bg-slate-100 grow"></div>
                    <span class="text-sm text-slate-200 flex-none w-max">Or signup with</span>
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
                return this.authType == 'signup'
            },
            set(newVal) {
                return newVal
            }
        }
    },
    watch: {
        authType(to, from) {
            this.authDialog = (to == 'signup')
            this.reset()
        }
    },
    data() {
        return {
            loading: false,
            username: '',
            email: '',
            password: '',
            password2: '',
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
            this.email = '';
            this.password = '';
            this.password2 = '';
            this.feedback = {severity: undefined, msg: ''}
        },
        async signupUser() {
            const {email, username, password, password2} = this;
            if(!(email && username && password && password2)) {
                return this.feedback = {severity: 'error', msg:'All fields are required'};
            }
            if(password !== password2) {
                return this.feedback = {severity: 'error', msg:'Passwords do not match'};
            }
            this.loading = true;
            try {
                this.feedback.severity = undefined

                await this.$axios.$post('/authorize/register', {email, username, password})
                this.hideDialog();
                this.$emit('setAuthType', 'login')
            }catch(err) {
                console.log(err)
                this.feedback = {severity: 'error', msg: this.handleError(err)}
            }
            this.loading = false;
        }
    }
}
</script>