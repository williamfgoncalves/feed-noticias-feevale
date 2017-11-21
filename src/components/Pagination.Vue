<template>
    <div>
        <div>
            <ul class="pagination pagination-lg">
                <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#">4</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pagination'
    }
</script>

<style scoped>
    .page-link:hover{
        color: black;
    }
    .page-item.active .page-link{
        background-color: black;
        border-color: black;
    }
</style>