<template>
    <div class="notification">
        <b>This is Notification Component</b>
        <div class="border">
            <p>Some one Liked your status</p>
            <h4> {{ message }} </h4>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            message: 'Hello World'
        }; 
    }
}
</script>

<style lang="scss">
    .notification {
        background-color: rgb(204, 204, 204);
        padding: 3px;
    }
</style>
