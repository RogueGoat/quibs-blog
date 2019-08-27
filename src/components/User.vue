<template>
    <div class="container mx-auto">
        <main class="rounded-lg user">
            <p>Username: {{ user.username }}</p>
            <p>Email: {{ user.email }}</p>
            <p>User ID: {{ user.id }}</p>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Profile',
        data() {
            return {
                id: this.$route.params.id,
                user: []
            };
        },
        // actions: {
        //     async byId({ commit }, id) {
        //         const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        //         commit('set', user);
        //     },
        // },
        created() {
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then(res => {
                    this.user = res.data;
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
