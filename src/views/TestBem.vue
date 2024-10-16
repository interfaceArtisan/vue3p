<template>
    <div class="xx-block">
        <div class="xx-block__header">xx-block__header</div>
        <div class="xx-block__body">
            <div class="xx-block__body--success">xx-block__body--success</div>
            <div class="xx-block__body--error">xx-block__body--error</div>

        </div>

        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>

@include b(block) {
    @include pinkbg;
    @include e(header) {
        text-align: center;
    }
    @include e(body) {
        @include m(success) {
            color: green;
        }
        @include m(error) {
            color: red;
        }
    }
}

</style>