<template>
    <div>
        <h5>Giriş Sayfası</h5>
        <p><input v-model="email" placeholder="kullanıcı adı/email" /></p>
        <p><input v-model="password" placeholder="şifre" /></p>
        <button @click="login(username,password)">Giriş</button>
    </div>
</template>

<script>
    import {
        useRouter
    } from 'vue-router';
    const router = useRouter();

    export default {
        name: "Login",
        methods: {
            loginVisibility: function () {

            },
            async login(email, password) {
                //const user = await User.findOne({email});
                this.$router.push("/home");
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>