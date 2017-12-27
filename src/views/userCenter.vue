<template>
    <section class="userCenter">
       <UserCard></UserCard>
       <UserListItem></UserListItem>
    </section>
</template>
<script>
import UserCard from 'components/userCenter/userCard';
import UserListItem from 'components/userCenter/userListItem';
export default {
    data() {
        return {
            headTitle: ''
        }
    },
    methods: {
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