<template>
    <div>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <div class="col-1"></div>
                  <div class="col-10">
                      <NoticeView></NoticeView>
                  </div>
                <div class="col-1"></div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import Menu from '../components/Menu'
    import NoticeView from '../components/NoticeView'
    export default {
        name:'Notice',
        components:{
            Menu,
            NoticeView
        }
    }
</script>

<style scoped>

</style>