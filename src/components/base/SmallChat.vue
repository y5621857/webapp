<template>
  <div>
    <div class="small-chat-box fadeInRight animated" ref="small-chat-box">
      <div class="heading" draggable="true">
        <small class="chat-date pull-right">
          02.19.2015
        </small>
        聊天框
      </div>
      <div class="content" ref="small-chat-box-content">
        <div class="left">
          <div class="author-name">
            路人甲
            <small class="chat-date">
              10:02 am
            </small>
          </div>
          <div class="chat-message active">
            你好！
          </div>
        </div>
        <div class="right">
          <div class="author-name">
            路人乙
            <small class="chat-date">
              11:24 am
            </small>
          </div>
          <div class="chat-message">
            你好啊~
          </div>
        </div>
        <div class="left">
          <div class="author-name">
            路人甲
            <small class="chat-date">
              08:45 pm
            </small>
          </div>
          <div class="chat-message active">
            测试一下聊天~
          </div>
        </div>
        <div class="right">
          <div class="author-name">
            路人乙
            <small class="chat-date">
              11:24 am
            </small>
          </div>
          <div class="chat-message">
            收到！
          </div>
        </div>
        <div class="left">
          <div class="author-name">
            路人甲
            <small class="chat-date">
              08:45 pm
            </small>
          </div>
          <div class="chat-message active">
            我相信，这样可以~
          </div>
        </div>
      </div>
      <div class="form-chat">
        <div class="input-group input-group-sm">
          <input type="text" class="form-control">
          <span class="input-group-btn">
            <button class="btn btn-primary" type="button">发送</button>
          </span>
        </div>
      </div>
    </div>
    <div id="small-chat" @click="toggleSmallChatBox('small-chat','small-chat-box')" ref="small-chat">
      <span class="badge badge-warning pull-right">5</span>
      <a class="open-small-chat">
        <i class="fa fa-comments"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmallChat',
    mounted() {
      $(this.$refs['small-chat-box-content']).slimScroll({
        height: '234px',
        railOpacity: 0.4
      });
    },
    data() {
      return {}
    },
    methods: {
      toggleSmallChatBox(btn,box) {
        $(this.$refs[btn]).find('i').toggleClass('fa-comments').toggleClass('fa-remove');
        $(this.$refs[box]).toggleClass('active');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
