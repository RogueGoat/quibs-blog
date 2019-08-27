<template>
    <div class="post-content">
        <PostContent/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PostContent from '@/components/PostContent.vue'

    export default {
        name: 'post',
        components: {
            PostContent
        }
    }
</script>
