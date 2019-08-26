<template>
    <div class="post-content">

    </div>
</template>

<script>
    // @ is an alias to /src
    import Posts from '@/components/Posts.vue'

    import axios from 'axios'


    export default {
        name: 'post',
        components: {
            Posts
        },
        created() {
            axios.get('http://jsonplaceholder.typicode.com/posts').then((response) => {
                this.posts = response.data
            });

            axios.get('http://jsonplaceholder.typicode.com/users').then((response) => {
                this.users = response.data
            });
        }
    }
</script>
