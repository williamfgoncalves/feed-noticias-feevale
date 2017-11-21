/* eslint-disable */
<template>
    <div>
        <Menu></Menu>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <Carrousel></Carrousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from '../components/Menu'
    import Pagination from '../components/Pagination'
    import Carrousel from '../components/Caroussel'
    export default {
        name: 'Home',
        components:{
            Menu,
            Pagination,
            Carrousel
        }
    }
</script>

<style lang="sass" scoped>

</style>