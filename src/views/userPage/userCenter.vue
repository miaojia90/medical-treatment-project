<template>
    <section class="userCenter">
       <UserCard :userCenterInfo="userCenterInfo"></UserCard>
       <UserListItem :userCenterInfo="userCenterInfo"></UserListItem>
    </section>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import UserCard from 'components/userCenter/userCard';
import UserListItem from 'components/userCenter/userListItem';
export default {
    data() {
        return {
            headTitle: ''
        }
    },
    computed: {
        ...mapState([
            'userCenterInfo'
        ])
    },
    created() {
        //获取接口数据
        this.getUserCenterData();
    },
    methods: {
        async getUserCenterData() {
            let userId = this.$route.params.userId;
            await this.getUserCenterInfo(userId);
        },
        ...mapActions([
            'getUserCenterInfo'
        ])
    },
    mounted() {
       
    },
    components: {UserCard,UserListItem}
} 
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 * 2rem;
}

</style>