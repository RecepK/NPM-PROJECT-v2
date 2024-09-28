<template>
    <table>
        <tr>
            <th>No</th>
            <th>Başlık</th>
            <th>Mesaj</th>
        </tr>
        <tr v-for="(item,index) in users" :key="index">
            <th>{{(index+1)}}.</th>
            <th>{{item.name}}</th>
            <th>{{item.username}}</th>
        </tr>
    </table>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                users: [],
            }
        },
        methods: {
            async fetchUser() {
                try {
                    const response = await fetch("http://localhost:3000/api/v1/user/")
                    const data = await response.json();
                    console.log("DATA", data);
                    this.users = data;
                } catch (error) {
                    console.log(error);
                }
            }
        },
        created() {
            this.fetchUser();
        }
    }
</script>


<style>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 2px solid #e3940c;
        text-align: left;
        padding: 12px;
    }

    tr:nth-child(even) {
        background-color: #fbfb00;
    }
</style>