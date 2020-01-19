<style scoped>

</style>

<template>
  <div class="layout">
      <Layout :style="{height:'100%'}">
        <!-- =====================左侧菜单开始===================== -->
        <Sider hide-trigger :style="{background: '#fff',height:'100%'}">
            <Menu :active-name="menuActiveName" theme="light"  :open-names="openMenus" :style="{height:'100%'}"  width="auto" >
                <template v-for="(menu,index) in leftMenus">
                <Submenu v-if="menu.nextMenus && menu.nextMenus.length>0" :name="menu.id"  :key="index+'-'+menu.id">
                    <template slot="title">
                        <Icon :type="menu.icon"></Icon>
                        {{menu.name}}
                    </template>
                    <MenuItem :to="{path:nextMenu.url}"  v-for="(nextMenu,nextIndex) in menu.nextMenus" :key="index+'-'+nextMenu.id" :name="nextMenu.urlName">
                        {{nextMenu.name}}
                    </MenuItem>
                </Submenu>

                <MenuItem v-else :to="{path:menu.url}" :key="index+'-'+menu.id" :name="menu.urlName">
                    <Icon :type="menu.icon"></Icon>
                    {{menu.name}}
                </MenuItem>

                </template>
            </Menu>
        </Sider>
        <!-- =====================左侧菜单结束===================== -->

        <!-- =====================右侧主体内容开始===================== -->
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <router-view/>
        </Content>
        <!-- =====================右侧主体内容结束===================== -->
        
    </Layout>
  </div>
</template>


<script>
  export default {
    name: 'Home',
    data () {
      return {
          
      }
      
    },
    computed:{
    
    },
    created(){

        alert(this.menus);

        //展开所以菜单节点
        //this.openMenus=this.getOpenMenus();

        //设置默认菜单
        //this.setDefaultMenu();

        //页面刷新时自动定位到菜单栏
        //this.autoSelectMenu();

    },
    methods:{
        getOpenMenus(){//展开所以菜单节点
            var result=[];
            this.leftMenus.forEach((menu) => {
                if(menu.nextMenus!=undefined && menu.nextMenus!=null && menu.nextMenus.length>0){
                    result.push(menu.id);
                }
            });
            return result;
        },
        autoSelectMenu(){////页面刷新时自动定位到菜单栏
            var routePath=this.$route.path;
            var routeName=this.$route.name;
            this.leftMenus.some((menu) => {

                if(menu.nextMenus!=undefined && menu.nextMenus!=null && menu.nextMenus.length>0){
                    menu.nextMenus.some((nextMenu)=>{
                        if(routeName==nextMenu.urlName){ 
                            this.openMenus=[menu.id];
                            this.menuActiveName=nextMenu.urlName;
                            return true;
                        }    
                    });
                }else if(routeName==menu.urlName){ 
                    this.menuActiveName=menu.urlName;
                    return true;
                }
            });
        },
        topSelectMenu(name){//顶部菜单选中事件
           this.leftMenus=this.menus[name].leftMenus==undefined || null?[]:this.menus[name].leftMenus;
        },
        setDefaultMenu(){//设置默认菜单
            for(var i in this.menus){
                var menu=this.menus[i];
                this.topMenuActiveName=menu.id;
                this.leftMenus=menu.leftMenus;
                break;
            }
        }
    },
    mounted(){
       
    }

  }
</script>
