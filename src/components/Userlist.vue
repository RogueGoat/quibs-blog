<template>
    <div class="container mx-auto">
        <main class="rounded-lg">
            <h1>Users</h1>
            <ul class="users-all" v-if="users && users.length">
                <li v-for="user of users" v-bind:key="user.id">
                    <p class="username"><router-link :to="'/user/' + user.id">{{user.username}}</router-link></p>
                    <p class="name">{{user.name}}</p>
                    <p class="email">{{user.email}}</p>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Userlist',
//Set user as a parameter in case I need it
        params: {
            users: []
        },
        data: function(){
            return {
//User is the data model I need for this component
                users: []
            }
        },
        created() {
// Get the user information
            axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
                this.users = response.data
            })
        }
    }
</script>

