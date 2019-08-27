<template>
    <div class="container mx-auto">
        <main class="rounded-lg">
            <ul class="blog-posts-all" v-if="posts && posts.length">
                <li class="post" v-for="post of posts" v-bind:key="post.id">
                    <p class="post-title">{{post.id}} <span>{{post.title}}</span></p>
                    <router-link class="read-more" :to="'/post/' + post.id">Read More</router-link>
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
                id: this.$route.params.id,
                posts: [],
            }
        },
        created() {
//Populate all the posts, no filter
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                this.posts = response.data
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

