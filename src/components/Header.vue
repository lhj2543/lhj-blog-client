<template>
    <header id="index-header">
      <Row>
        <Col span="4">
          <Icon title="liuhaijiang.top" id="logo" class="logo cursor-pointer"  color="" custom="iconfont icon-icon-logo" />
        </Col>
        <Col span="20">

          <span class="mnue-more-r cursor-pointer" @click="moreMnueOpen"><Icon title="菜单" class="mnue-more " type="md-list" color=""  /></span>

          <span class="mnue-more-r top-mnues">

            <router-link target="_blank" :to="{path:'/welcome'}" :style="{color:'#000'}">后台管理</router-link>
            
          </span>
        </Col>
      </Row>
    </header>
</template>


<script>


export default {
  name: 'index-header',
  data(){
    return {
    }
  },
  mounted () {//钩子
  },
  methods: {
    moreMnueOpen(ev){
      this.$emit('openMnue',ev);//调用父级openMnue
    }
  },
  destroyed () {
  },

}
</script>


<style scoped>
  #index-header{
    padding: 2rem;
  }
  .logo{
    font-size: 3rem;
  }
  .mnue-more-r{
    float: right;
  }
  .mnue-more{
    font-size: 2rem;
    vertical-align:middle;
  }
  .top-mnues{
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.15rem 1rem;
  }
  
</style>
