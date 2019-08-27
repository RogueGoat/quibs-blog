<template>
    <div class="container mx-auto">
        <main class="rounded-lg user flex-wrapper">
            <div>
                <h1>Username: {{ user.username }}</h1>
                <p class="user-email">Email: {{ user.email }}</p>
                <p class="user-id">User ID: {{ user.id }}</p>
            </div>
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
        created() {
//Get information for specific user
            axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then(response => {
                    this.user = response.data;
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
