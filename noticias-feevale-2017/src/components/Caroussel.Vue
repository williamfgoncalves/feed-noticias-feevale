<template>
    <div>
    <carousel :perPage="1" :autoplay="true" :autoplayTimeout="3000">
        <slide v-for="notice in news" :key="notice.id">
            <h3>{{notice.title}}</h3>
            <img style="height: 500px; width: 100%; display: block;" class="card-img-top" :src="notice.urlToImage">
        </slide>
    </carousel>
    </div>
</template>

<script>
    import axios from 'axios';
    import NewsService from '../service/NewsService'
    import { Carousel, Slide } from 'vue-carousel';
    
    export default {
        name: 'Carrousel',
        data: function() {
            return{
                news: {}
            }
        },
        components: {
            Carousel,
            Slide
        },
        methods:{
            getAllNews: function(){
                const service = new NewsService();
                service.getTenNews(1).then((response) => {
                    this.news = response.data;
                });
            }
        },
        created() {
            this.getAllNews();
        }
    }
</script>

<style scoped>
    h3{
        text-align: center;
        margin-bottom: 15px;
    }
</style>