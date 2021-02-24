<template>
    <div class="container">
        <b-field>
            <b-input v-model="search" @input="handleSearch"></b-input>
        </b-field>
        <div v-for="photo in photos" :key="photo.id">
        <a :href="photo.urls.full" target="_blank">{{photo.alt_description}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: null,
                photos: []
            }
        },
        mounted() {
          this.$api.get('photos').then(({data}) => {
            console.log('res--', data)
            this.photos = data
          })
        },
        methods: {
          handleSearch: (val) => {
            console.log('search ---', val)
          }
        }
    }
</script>