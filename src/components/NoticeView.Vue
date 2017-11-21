<template>
    <div>
        <div class="card">
          <h3 class="card-header">{{notice.title}}</h3>
            <div class="card-body">
              <h6 class="card-subtitle text-muted">{{notice.author}}</h6>
            </div>
          <img style="height: 400px; width: 100%; display: block;" :src="notice.urlToImage" alt="Card image">
          <div class="card-body">
            <p class="card-text">{{notice.description}}</p>
            <a :href="notice.url" class="card-link">Fonte da noticia</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
    </div>
</template>

<script>
  import NewsService from '../service/NewsService'
  export default {
    name: 'NoticeVue',
    data: function () {
      return {
        notice: {}
      }
    },
    methods:{
      getNotice: function () {
        const service = new NewsService();
        service.getNotice(this.$route.params.id)
        .then((response) => {
          this.notice = response.data;
          console.log(response.data);
        })
      }
    },
    mounted() {
      this.getNotice();
    }
  }
</script>

<style scoped>

</style>