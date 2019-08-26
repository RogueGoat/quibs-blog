<template>
    <div class="users">
        <Userlist/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Userlist from '@/components/Userlist.vue'

    export default {
        name: 'user',
        components: {
           Userlist
        }
    }
</script>
