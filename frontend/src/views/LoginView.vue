<template>
    <div v-if:="visibility!=true">
        <button @click="loginVisibility()">Bilgilerini gir</button>
    </div>

    <div v-if:="visibility==true">
        <h1>Giriş Sayfası</h1>
        <p><input v-model="email" id="email" email="email" placeholder="kullanıcı adı/email" /></p>
        <p><input v-model="password" id="password" name="password" placeholder="şifre" /></p>
        <button @click="login(email,password)">Giriş</button>
        <button @click="register()">Kayıt Ol</button>
    </div>

    <!--
        <input v-model.number="quantity" type="number">
        <input v-model.sting="quantity" type="string">
        <button @click="loginVisibility()">Giriş</button>
    -->


    <!--
    <div>
        <h1>Giriş Sayfası</h1>
        <input v-model.string="email"type="string" placeholder="kullanıcı adı/email">
        <input v-model.string="password"type="password" placeholder="şifre">
        <button @click="login(email,password)">Giriş</button>
    </div>
    -->
</template>

<script>
    import {
        useRouter
    } from 'vue-router';

    const router = useRouter();

    export default {
        name: "Login",
        data() {
            return {
                visibility: false,
            }
        },
        methods: {
            async fetchUser() {
                try {
                    const response = await fetch("http://localhost:3000/api/v1/user/")
                    const data = await response.json();
                    console.log("DATA", data);
                    return data;
                } catch (error) {
                    console.log(error);
                }
            },
            loginVisibility: function () {
                this.visibility = !this.visibility;
            },
            register: function () {
                this.$router.push("/register");
            },
            login: async function (email, password) {
                if (email.length > 0 && password.length > 0) {
                    const userList = await this.fetchUser();

                    for (var i = 0; i < userList.length; i++) {
                        if ((userList[i].name == email) && (userList[i].password == password)) {
                            this.$router.push("/home");
                        }
                    }
                }
            },
            created() {
                this.fetchUser();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>