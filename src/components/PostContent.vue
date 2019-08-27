<template>
    <div class="container mx-auto">
        <router-link to="/blog">Go Back</router-link>

        <main class="rounded-lg">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
            <h4>Written by: <router-link :to="'/user/' + user.id">{{user.username}}</router-link></h4>


            <h3>The Peanut Gallery</h3>
            <section class="comments">
                <ul v-for="comment of comments" v-bind:key="comment.id">
                    <li>{{comment.name}}</li>
                    <li>{{comment.body}}</li>
                    <li>{{comment.email}}</li>
                </ul>
            </section>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'PostContent',
        data() {
            return {
                id: this.$route.params.id,
                post: [],
                user: [],
                comments: []
            };
        },
        created() {
            axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
                this.comments = response.data
            })

            axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
                .then(response => {
                    this.user = response.data;
                })

            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
                .then(response => {
                    this.post = response.data;
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

