<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu" ref="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element">
              <span>
                <img alt="image" class="img-circle" src="/static/img/profile_small.jpg"/>
              </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="javascript:;">
                <span class="clear"> <span class="block m-t-xs">
                  <strong class="font-bold">David Williams</strong>
                </span>
                  <span class="text-muted text-xs block">
                    前端 <b class="caret"></b></span>
                </span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="javascript:;">个人中心</a></li>
              <li><a href="javascript:;">与我联系</a></li>
              <li><a href="javascript:;">邮箱</a></li>
              <li class="divider"></li>
              <li @click="Logout()"><a href="javascript:;">退出</a></li>
            </ul>
          </div>
          <div class="logo-element">
            IN+
          </div>
        </li>
        <li v-for="(list,index) in navList" key="index" :class="{active:list.active}">
          <template v-if="list.childern && list.childern.length!=0">
            <a href="javascript:;">
              <i :class="list.icon"></i>
              <span class="nav-label">{{list.name}}</span>
              <span class="label pull-right" :class="list.hasNew.icon" v-if="list.hasNew.type">{{list.hasNew.value}}</span>
              <span class="fa arrow" v-else></span>
            </a>
            <ul class="nav nav-second-level collapse">
              <li v-for="(item,index) in list.childern" key="index">
                <a href="javascript:;">{{item.name}}
                  <span class="label pull-right" :class="item.hasNew.icon"
                        v-if="item.hasNew.type">{{item.hasNew.value}}</span>
                </a>
              </li>
            </ul>
          </template>
          <template v-else>
            <a href="javascript:;">
              <i :class="list.icon"></i>
              <span class="nav-label">{{list.name}}</span>
              <span class="label pull-right" :class="list.hasNew.icon" v-if="list.hasNew.type">{{list.hasNew.value}}</span>
            </a>
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'LeftSlideMenu',
    mounted() {
      // MetsiMenu
      $(this.$refs['side-menu']).metisMenu();
      
      // Collapse ibox function
      $('.collapse-link').click(function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
          ibox.resize();
          ibox.find('[id^=map-]').resize();
        }, 50);
      });
      
      // Close ibox function
      $('.close-link').click(function () {
        var content = $(this).closest('div.ibox');
        content.remove();
      });
      
      // Fullscreen ibox function
      $('.fullscreen-link').click(function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
          $(window).trigger('resize');
        }, 100);
      });
      
      // Close menu in canvas mode
      $('.close-canvas-menu').click(function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
      });
      
      // Run menu of canvas
      $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
      });
      
      // Open close right sidebar
      $('.right-sidebar-toggle').click(function () {
        $('#right-sidebar').toggleClass('sidebar-open');
      });
      
      // Initialize slimscroll for right sidebar
      $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
      });
      $('.navbar-minimalize').click(function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
        
      });
    },
    props: {
      navList: {
        type: Array,
        default() {
          return [
            {
              name: '主页',
              link: '',
              icon: 'fa fa-th-large',
              active: true,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
              childern: [
                {
                  name: '主页 v.1',
                  link: '',
                  active: false,
                  hasNew: {
                    type: true,
                    icon: 'label-primary',
                    value: '16/24'
                  },
                }, {
                  name: '主页 v.2',
                  link: '',
                  active: false,
                  hasNew: {
                    type: false,
                    icon: '',
                    value: 'New'
                  },
                }, {
                  name: '主页 v.3',
                  link: '',
                  active: false,
                  hasNew: {
                    type: false,
                    icon: '',
                    value: 'New'
                  },
                }, {
                  name: '主页 v.4',
                  link: '',
                  active: false,
                  hasNew: {
                    type: false,
                    icon: '',
                    value: 'New'
                  },
                },
              ]
            }, {
              name: '其他页面',
              link: '',
              icon: 'fa fa-files-o',
              active: false,
              hasNew: {
                type: true,
                icon: 'label-danger',
                value: 'New'
              },
            }, {
              name: '布局',
              link: '',
              icon: 'fa fa-diamond',
              active: false,
              hasNew: {
                type: true,
                icon: 'label-warning',
                value: '16/24'
              },
            }, {
              name: '邮箱',
              link: '',
              icon: 'fa fa-envelope',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '图表',
              link: '',
              icon: 'fa fa-bar-chart-o',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '指标',
              link: '',
              icon: 'fa fa-pie-chart',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '部件',
              link: '',
              icon: 'fa fa-flask',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '表单',
              link: '',
              icon: 'fa fa-edit',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '应用',
              link: '',
              icon: 'fa fa-desktop',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '杂项',
              link: '',
              icon: 'fa fa-globe',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: 'UI 组件',
              link: '',
              icon: 'fa fa-flask',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '网格',
              link: '',
              icon: 'fa fa-laptop',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '电子商务',
              link: '',
              icon: 'fa fa-shopping-cart',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '走廊',
              link: '',
              icon: 'fa fa-picture-o',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '菜单',
              link: '',
              icon: 'fa fa-sitemap',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            }, {
              name: '动画',
              link: '',
              icon: 'fa fa-magic',
              active: false,
              hasNew: {
                type: false,
                icon: '',
                value: ''
              },
            },
          
          ]
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      Logout() {
        Cookies.remove('Auth_token', {path: '/'})
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
