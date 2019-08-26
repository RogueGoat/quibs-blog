<template>
    <div class="container mx-auto">
        <main class="rounded-lg">
            <ul class="blog-posts-all" v-if="posts && posts.length">
                <li v-for="post of posts" v-bind:key="post.id">
                    <p class="post-title">{{post.title}}</p>
                    <p class="post-body">{{post.body}}</p>
                    <p class="post-author">{{post.username}}</p>
                    <a class="read-more" href="#">Read More</a>
                </li>
            </ul>
        </main>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Posts',
        data () {
            return {
                posts: []
            }
        },
        created() {
            axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
                this.posts = response.data
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

