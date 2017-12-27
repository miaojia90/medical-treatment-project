<!--suppress ALL -->
<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li,
form,
input,
table,
th,
td {
    margin: 0;
    padding: 0;
    line-height: 1;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
    font-weight: 400;
}

i,
em {
    font-style: normal;
}

ul,
ol {
    list-style-type: none;
}

a {
    text-decoration: none;
}

img {
    display: block;
    width: 100%;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

body {
    background-color: #F4F5F7;
}

.two-line-break {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
}

.three-line-break {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-break: break-all;
}

$r_750:640/750/2/32;
@function rem($px) {
    @return $px * $r_750 *1rem;
}

.operate-box {
    padding: rem(40) rem(30);
    a {
        display: block;
        width: 100%;
        height: rem(94);
        line-height: rem(94);
        color: #FFF;
        font-size: rem(36);
        opacity: 0.4;
        background: #164DBA;
        border-radius: rem(10);
        text-align: center;
        &.active {
            opacity: 1;
        }
        &.white {
            background: #FFF;
            color: #F54949;
            opacity: 1;
            border: 1px solid rgba(5, 5, 5, 0.10);
        }
    }
}

.weui-cells__title {
    font-size: rem(28);
    line-height: rem(40);
    color: #888888;
    padding: rem(33) rem(30) rem(14) rem(30);
}

.weui-cell {
    padding: rem(34) rem(44);
    &.no-padding {
        padding: 0;
    }
}

.weui-vcode-btn {
    &.spe {
        height: rem(40);
        line-height: rem(40);
        color: #164DBA;
        font-size: rem(30);
    }
}

.weui-cell__bd {
    font-size: rem(30);
    color: #000;
}

.weui-cell__ft {
    font-size: rem(30);
    color: #888888;
}

.weui-cell__hd {
    .weui-label{
       font-size: rem(30);
       color: #000;
    }
    img {
        width: rem(40);
        height: rem(40);
        margin-right: rem(22);
        display: block
    }
}
</style>