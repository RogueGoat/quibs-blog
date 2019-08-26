<template>
    <div class="container mx-auto">
        <main class="rounded-lg">
            <h1>Users</h1>
            <ul class="users-all" v-if="users && users.length">
                <li v-for="user of users" v-bind:key="user.id">
                    <p class="username">{{user.username}}</p>
                    <p class="name">{{user.name}}</p>
                    <p class="email"><a href="mailto:">{{user.email}}</a></p>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Userlist',
        data: function(){
            return {
                users: []
            }
        },
        created() {
            axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
                this.users = response.data
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
