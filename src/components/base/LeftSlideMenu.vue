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
                    Art Director <b class="caret"></b></span>
                </span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="javascript:;">Profile</a></li>
              <li><a href="javascript:;">Contacts</a></li>
              <li><a href="javascript:;">Mailbox</a></li>
              <li class="divider"></li>
              <li><a href="javascript:;">退出</a></li>
            </ul>
          </div>
          <div class="logo-element">
            IN+
          </div>
        </li>
        <li class="active">
          <a href="javascript:;"><i class="fa fa-th-large"></i> <span class="nav-label">Dashboards</span> <span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <li class="active"><a href="javascript:;">Dashboard v.1</a></li>
            <li><a href="javascript:;">Dashboard v.2</a></li>
            <li><a href="javascript:;">Dashboard v.3</a></li>
            <li><a href="javascript:;">Dashboard v.4</a></li>
            <li><a href="javascript:;">Dashboard v.5 <span class="label label-primary pull-right">NEW</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;"><i class="fa fa-diamond"></i> <span class="nav-label">Layouts</span></a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-bar-chart-o"></i>
            <span class="nav-label">Graphs</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Flot Charts</a></li>
            <li><a href="javascript:;">Morris.js Charts</a></li>
            <li><a href="javascript:;">Rickshaw Charts</a></li>
            <li><a href="javascript:;">Chart.js</a></li>
            <li><a href="javascript:;">Chartist</a></li>
            <li><a href="c3."></a></li>
            <li><a href="javascript:;">Peity Charts</a></li>
            <li><a href="javascript:;">Sparkline Charts</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-envelope"></i>
            <span class="nav-label">Mailbox </span>
            <span class="label label-warning pull-right">16/24</span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Inbox</a></li>
            <li><a href="javascript:;">Email view</a></li>
            <li><a href="javascript:;">Compose email</a></li>
            <li><a href="javascript:;">Email templates</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-pie-chart"></i>
            <span class="nav-label">Metrics</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-flask"></i>
            <span class="nav-label">Widgets</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-edit"></i>
            <span class="nav-label">Forms</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Basic form</a></li>
            <li><a href="javascript:;">Advanced Plugins</a></li>
            <li><a href="javascript:;">Wizard</a></li>
            <li><a href="javascript:;">File Upload</a></li>
            <li><a href="javascript:;">Text Editor</a></li>
            <li><a href="javascript:;">Markdown</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-desktop"></i>
            <span class="nav-label">App Views</span>
            <span class="pull-right label label-primary">SPECIAL</span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Contacts</a></li>
            <li><a href="javascript:;">Profile</a></li>
            <li><a href="javascript:;">Profile v.2</a></li>
            <li><a href="javascript:;">Contacts v.2</a></li>
            <li><a href="javascript:;">Projects</a></li>
            <li><a href="javascript:;">Project detail</a></li>
            <li><a href="javascript:;">Teams board</a></li>
            <li><a href="javascript:;">Social feed</a></li>
            <li><a href="javascript:;">Clients</a></li>
            <li><a href="javascript:;">Outlook view</a></li>
            <li><a href="javascript:;">Vote list</a></li>
            <li><a href="javascript:;">File manager</a></li>
            <li><a href="javascript:;">Calendar</a></li>
            <li><a href="javascript:;">Issue tracker</a></li>
            <li><a href="javascript:;">Blog</a></li>
            <li><a href="javascript:;">Article</a></li>
            <li></li>
            <li><a href="javascript:;">Timeline</a></li>
            <li><a href="javascript:;">Pin board</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-files-o"></i>
            <span class="nav-label">Other Pages</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Search results</a></li>
            <li><a href="javascript:;">Lockscreen</a></li>
            <li><a href="javascript:;">Invoice</a></li>
            <li><a href="javascript:;">Login</a></li>
            <li><a href="javascript:;">Login v.2</a></li>
            <li><a href="javascript:;">Forget password</a></li>
            <li><a href="javascript:;">Register</a></li>
            <li><a href="404."></a></li>
            <li><a href="500."></a></li>
            <li><a href="javascript:;">Empty page</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-globe"></i>
            <span class="nav-label">Miscellaneous</span>
            <span class="label label-info pull-right">NEW</span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Notification</a></li>
            <li><a href="javascript:;">Nestable list</a></li>
            <li><a href="javascript:;">Agile board</a></li>
            <li><a href="javascript:;">Timeline v.2</a></li>
            <li><a href="javascript:;">Diff</a></li>
            <li><a href="javascript:;">i18 support</a></li>
            <li><a href="javascript:;">Sweet alert</a></li>
            <li><a href="javascript:;">Idle timer</a></li>
            <li><a href="javascript:;">Truncate</a></li>
            <li><a href="javascript:;">Spinners</a></li>
            <li><a href="javascript:;">Live favicon</a></li>
            <li><a href="javascript:;">Google maps</a></li>
            <li><a href="javascript:;">Code editor</a></li>
            <li><a href="javascript:;">Modal window</a></li>
            <li><a href="javascript:;">Clipboard</a></li>
            <li><a href="javascript:;">Forum view</a></li>
            <li><a href="javascript:;">Validation</a></li>
            <li><a href="javascript:;">Tree view</a></li>
            <li><a href="javascript:;">Loading buttons</a></li>
            <li><a href="javascript:;">Chat view</a></li>
            <li><a href="javascript:;">Masonry</a></li>
            <li><a href="javascript:;">Tour</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-flask"></i>
            <span class="nav-label">UI Elements</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Typography</a></li>
            <li><a href="javascript:;">Icons</a></li>
            <li><a href="javascript:;">Draggable Panels</a></li>
            <li><a href="javascript:;">Resizeable Panels</a></li>
            <li><a href="javascript:;">Buttons</a></li>
            <li><a href="javascript:;">Video</a></li>
            <li><a href="javascript:;">Panels</a></li>
            <li><a href="javascript:;">Tabs</a></li>
            <li><a href="javascript:;">Notifications & Tooltips</a></li>
            <li><a href="javascript:;">Badges, Labels, Progress</a></li>
          </ul>
        </li>
        
        <li>
          <a href="javascript:;">
            <i class="fa fa-laptop"></i>
            <span class="nav-label">Grid options</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-table"></i>
            <span class="nav-label">Tables</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Static Tables</a></li>
            <li><a href="javascript:;">Data Tables</a></li>
            <li><a href="javascript:;">Foo Tables</a></li>
            <li><a href="javascript:;">jqGrid</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-shopping-cart"></i>
            <span class="nav-label">E-commerce</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Products grid</a></li>
            <li><a href="javascript:;">Products list</a></li>
            <li><a href="javascript:;">Product edit</a></li>
            <li><a href="javascript:;">Product detail</a></li>
            <li><a href="javascript:;">Cart</a></li>
            <li><a href="javascript:;">Orders</a></li>
            <li><a href="javascript:;">Credit Card form</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-picture-o"></i>
            <span class="nav-label">Gallery</span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li><a href="javascript:;">Lightbox Gallery</a></li>
            <li><a href="javascript:;">Slick Carousel</a></li>
            <li><a href="javascript:;">Bootstrap Carousel</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-sitemap"></i>
            <span class="nav-label">Menu Levels </span>
            <span class="fa arrow"></span>
          </a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="javascript:;">Third Level <span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li>
                  <a href="javascript:;">Third Level Item</a>
                </li>
                <li>
                  <a href="javascript:;">Third Level Item</a>
                </li>
                <li>
                  <a href="javascript:;">Third Level Item</a>
                </li>
              </ul>
            </li>
            <li><a href="javascript:;">Second Level Item</a></li>
            <li>
              <a href="javascript:;">Second Level Item</a></li>
            <li>
              <a href="javascript:;">Second Level Item</a></li>
          </ul>
        </li>
        <li>
          <a href="javascript:;">
            <i class="fa fa-magic"></i>
            <span class="nav-label">CSS Animations </span>
            <span class="label label-info pull-right">62</span>
          </a>
        </li>
        <li class="landing_link">
          <a target="_blank" href="javascript:;">
            <i class="fa fa-star"></i>
            <span class="nav-label">Landing Page</span>
            <span class="label label-warning pull-right">NEW</span>
          </a>
        </li>
        <li class="special_link">
          <a href="javascript:;">
            <i class="fa fa-database"></i>
            <span class="nav-label">Package</span>
          </a>
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
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
