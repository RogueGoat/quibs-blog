<template>
    <div class="container mx-auto post-content">
        <main class="rounded-lg">
            <h1>{{post.title}}</h1>
            <article>
                <p>{{post.body}}</p>
                <strong>Written by: <router-link :to="'/user/' + post.userId">{{post.userId}} - {{user.username}}</router-link></strong>
            </article>

            <h2>The Peanut Gallery Says:</h2>
            <section class="comments">
                <ul class="comment-content" v-for="comment of comments" v-bind:key="comment.id">
                    <li>{{comment.postId}}</li>
                    <li><strong>{{comment.name}}</strong></li>
                    <li>{{comment.body}}</li>
                    <li class="comment-email">{{comment.email}}</li>
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
            // axios.get(`https://jsonplaceholder.typicode.com/comments/${this.id}`)
            //     .then(response => {
            //         this.comments = response.data;
            //     })

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

