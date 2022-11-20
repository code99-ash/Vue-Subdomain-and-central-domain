<template>
    <section class="bg-green-50 min-h-[100vh]">
        <div class="max-w-[1200px] mx-auto">
            <header class="bg-teal-100 p-2 flex items-center justify-between">
                <h1 class="text-xl text-teal-400 font-medium">Forum & Discussions</h1>
                <button v-if="!$auth.loggedIn" class="outline-0 px-[10px] py-[4px] text-teal-500 rounded hover:bg-teal-400 hover:text-white" @click="setAuthType('login')">Signin</button>

                <button v-else class="outline-0 px-[10px] py-[4px] text-teal-500 rounded hover:bg-teal-400 hover:text-white" @click="logout">Logout</button>
            </header>
            <div class="px-2 py-2 md:px-0">
                <nuxt-child @setAuthType="setAuthType"></nuxt-child>
            </div>
            <Login
            :authType="authType"
                @resetAuthType="setAuthType('null')"
                @handleFeedback="handleFeedback"
                @setAuthType="setAuthType"
            />
            <Signup
                :authType="authType"
                @resetAuthType="setAuthType('null')"
                @handleFeedback="handleFeedback"
                @setAuthType="setAuthType"
            />
        </div>
    </section>
</template>

<script>
import Login from "@/components/Auth/Login";
import Signup from "@/components/Auth/Signup";
import AlertMessage from "@/mixins/alert-message";

export default {
    components: { Login , Signup},
    mixins: [AlertMessage],
    data() {
        return {
            authType: "null", // login, signup, forgot, verifyEmail
        };
    },
    mounted() {
        const {auth} = this.$route.query;
        if(auth == 'login') this.setAuthType('login')
    },
    methods: {
        setAuthType(type) {
          this.authType = type;
        },
        handleFeedback({ severity, msg }) {
            if (severity == "error") {
                this.toastMessage("error", this.handleError(msg), 3000);
                return;
            }
            this.toastMessage(severity, msg, 3000);
        },
        logout() {
            this.$auth.logout()
        }
    }
}
</script>