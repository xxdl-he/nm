<template>
  <div class="search-wrap">
    <div class="banner layer">
      <div class="search-inner">
        <div class="search-box flex-row">
          <input v-model="keyword" maxlength="128" type="text" placeholder="搜索音乐/MV/歌单/歌手" class="search">
          <i class="iconfont nicesearch-o search-icon"></i>
        </div>
        <div class="list hot">
          <div class="item" v-if="searchResult.songs && searchResult.songs.length > 0">
            <div class="title flex-row"> <i class="iconfont niceyinfu3"></i> 单曲</div>
            <ul>
              <li v-for="item of searchResult.songs" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
          <div class="item" v-if="searchResult.artists && searchResult.artists.length > 0">
            <div class="title flex-row"> <i class="iconfont niceicon-4"></i> 歌手</div>
            <ul>
              <li v-for="item of searchResult.artists" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
          <div class="item" v-if="searchResult.albums && searchResult.albums.length > 0">
            <div class="title flex-row"> <i class="iconfont niceRaidobox-selectedRai1"></i> 专辑</div>
            <ul>
              <li v-for="item of searchResult.albums" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
          <div class="item" v-if="searchResult.playlists && searchResult.playlists.length > 0">
            <div class="title flex-row"> <i class="iconfont nicebofangliebiao24" style="font-size: 20px;"></i> 歌单</div>
            <ul>
              <li v-for="item of searchResult.playlists" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: '想',
        searchResult: {}
      };
    },
    components: {},
    computed: {},
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.searchResult = {}
          return
        }
        this.timer = setTimeout(() => {
          this.searchSuggest()
        }, 100)
      }
    },
    methods: {
      async searchSuggest() {
        let res = await this.$api.searchSuggest(this.keyword)
        console.log(res)
        this.searchResult = res.result
      }
    },
    created() {

    },
    mounted() {

    },
  }
</script>
<style lang='stylus' scoped>
.search-wrap {
  margin-top: -20px;
  .banner {
    width: 100%;
    height: 250px;
    background: url(../../assets/images/personal.jpg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    .search-inner {
      width: 720px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .search-box {
        position: relative;
        z-index: 10;
        padding-left: 8px;
        border-radius: 2px;
        background: #f5f5f5;
        input {
          display: inline-block;
          height: 54px;
          flex: 1;
          line-height: 54px;
          border: none;
          margin-right: 24px;
          padding-left: 10px;
          background: #f5f5f5;
        }
        .search-icon {
          font-size: 20px;
          padding: 16px;
          cursor: pointer;
        }
      }
      .list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 18px 0 15px;
        transition-property: top;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        opacity: 0;
        z-index: 0;
        box-shadow: 0 10px 30px 0 rgba(65,67,70,.08);
        border-radius: 4px;
        &.hot {
          top: 110%;
          opacity: 1;
        }
        .item {
          .title {
            height: 30px;
            padding: 0 18px;
            font-size: 12px;
            color: #909399;
            line-height: 30px;
            i {
              font-size: 18px;
              margin-right: 5px;
              font-weight: bold;
              color: $color-theme;
            }
          }
        }
        ul {
          li {
            height: 38px;
            line-height: 38px;
            padding: 0 18px;
            font-weight: 300;
            background: #ffffff;
            transition: background 0.1s;
            cursor: pointer;
            &:hover {
              background: #f5f5f5;
            }
          }
        }
      }
    }
  }
}
</style>