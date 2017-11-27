<template>
    <div>
    <carousel :perPage="1" :autoplay="true" :autoplayTimeout="3000">
        <slide v-for="notice in news" :key="notice.id">
            <h3>{{notice.title}}</h3>
            <img style="height: 500px; width: 100%; display: block;" class="card-img-top" :src="notice.urlToImage">
            <router-link :to="{ name: 'Notice', params: { id: notice.id }}">Veja mais...</router-link>
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
    .VueCarousel-pagination {
        width: 100%;
        float: left;
        text-align: center;
        background-color: black;
        border-radius: 50px;
    }
    h3{
        text-align: center;
        margin-bottom: 15px;
    }
    .VueCarousel-dot{
        background-color: black;
        border-radius: 15px;
    }
    .VueCarousel-slide{
        margin: 15px 0px;
    }
    .VueCarousel-slide img{
        margin-bottom: 10px;
    }
    a{
        background-color:black;
        padding: 10px 30px;
        border-radius: 20px;
    }
    a:hover{
        background-color:white;
        border: 1px solid #EB6864;
        font-weight: bold;
    }
</style>