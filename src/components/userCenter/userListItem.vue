<template>
    <section class="user-item weui-cells">
        <router-link class="weui-cell weui-cell_access"  :to="{ name: 'userInfo', params: { userId: 123 }}">
            <div class="weui-cell__hd">
              <img src="../../assets/images/user_info.png" alt="">
            </div>
            <div class="weui-cell__bd">
                <p>个人信息</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access"  :to="{ name: 'otherUserCard', params: { userId: 123 }}">
            <div class="weui-cell__hd">
              <img src="../../assets/images/manage.png" alt="">
            </div>
            <div class="weui-cell__bd">
                <p>就诊人管理</p>
            </div>
            <div class="weui-cell__ft">3</div>
        </router-link>
        <router-link class="weui-cell weui-cell_access" :to="{ name: 'healthRecords', params: { userId: 123 }}">
            <div class="weui-cell__hd">
              <img src="../../assets/images/health_records.png" alt="" >
            </div>
            <div class="weui-cell__bd">
                <p>健康档案</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
    </section>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {},
    mounted() {
        //生成二维码
    },
    components: {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 *1rem;
}



/*列表样式*/
.user-item {
    font-size: rem(30);
    color: #000;
    .weui-cell {
        padding: rem(34) rem(44);
    }
    .weui-cell__hd{
        img{
           width:rem(40);
           height: rem(40);
           margin-right:rem(22);
           display:block
        }
    }
}
</style>