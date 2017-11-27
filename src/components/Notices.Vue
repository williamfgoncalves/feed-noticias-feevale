<template>
    <div>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <div class="col-1"></div>
                    <div class="col-10">
                        <div class="card" v-for="notice in notices">
                            <img class="card-img-top" :src="notice.urlToImage" alt="Card image cap">
                                <div class="card-block">
                                    <h4 class="card-title">{{notice.title}}</h4>
                                    <p class="card-text">{{notice.description}}</p>
                                    <a :href="notice.url" class="btn btn-primary" target="_blank">Noticia original</a>
                                </div>
                        </div>
                    </div>
                <div class="col-1"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import NewsService from '../service/NewsService'
    import Menu from '../components/Menu'

    export default{
        name: 'notices',
        data: function() {
            return{
                notices: []
            }
        },
        components:{
            Menu
        },
        methods:{
            getNoticesByType: function(type) {
                const service = new NewsService();
                service.getNoticeByType(type).then((response) =>{
                    this.notices = response.data;
                })
            }
        },
        mounted(){
            this.getNoticesByType(this.$route.params.type);
        },
        updated(){
            this.getNoticesByType(this.$route.params.type);
        }
    }
</script>

<style>
    .card{
        margin: 50px 0px;
    }
</style>