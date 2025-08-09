<template>
    <!-- Bouton "+" -->
    <div class="avatar add-button">
        <span>+</span>
    </div>
    
    <!-- Liste des avatars (limités à 6) -->
    <div
    v-for="(avatar, index) in avatars.slice(0, 6)"
    :key="index"
    class="avatar"
    :style="{
        zIndex: avatars.length - index,
        backgroundImage: `url(${avatar})`
    }"
        ></div>
        <!-- <div class="avatar-group">
    </div> -->
</template>

<script setup>
defineProps({
    avatars: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
/* .avatar-group {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -46px;
    */
/* } */

.avatar {
    width: 50px;
    height: 50px;
    bottom: 24px;
    left: 12px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    border: 2px solid white;
    margin-left: -12px;
    position: relative;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    z-index: 4;
}

/* Premier élément (le +) n'est pas décalé */
.avatar:first-child {
    margin-left: 0;
}

/* Style spécial pour le bouton + */
.add-button {
    background: #a18aff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
}

.add-button span {
    color: #fff;
}
</style>