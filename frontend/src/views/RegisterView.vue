<template>
    <div>
        <h1>Kayıt Sayfası</h1>
        <p><input v-model="name" id="name" name="name" placeholder="kullanıcı adı" /></p>
        <p><input v-model="email" id="email" name="email" placeholder="email" /></p>
        <p><input v-model="password" id="password" name="password" placeholder="şifre" /></p>
        <button @click="register(name,email,password)">Kayıt</button>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                visibility: false,
                user: []
            }
        },
        methods: {
            register: async function (name, email, password) {
                try {
                    const requestOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: name,
                            username: email,
                            password: password
                        })
                    };

                    const response = await fetch("http://localhost:3000/api/v1/user/", requestOptions);
                    const data = await response.json();
                    console.log("DATA", data);
                    this.user = data;

                    if (data.state) {
                        this.$router.push("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>