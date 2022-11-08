<template>
  <div class="naive-component-container">
    <NCard hoverable>
      <div class="naive-component-button">
        <NButton>Default</NButton>
        <NButton type="tertiary"> Tertiary </NButton>
        <NButton type="primary"> Primary </NButton>
        <NButton type="info"> Info </NButton>
        <NButton type="success"> Success </NButton>
        <NButton type="warning"> Warning </NButton>
        <NButton type="error"> Error </NButton>
        <NButton dashed> Default </NButton>
        <NButton type="primary" dashed> Primary </NButton>
        <NButton type="info" dashed> Info </NButton>
        <NButton type="success" dashed> Success </NButton>
        <NButton type="warning" dashed> Warning </NButton>
        <NButton type="error" dashed> Error </NButton>
        <NButton disabled> 不许点 </NButton>
        <NButton ghost> Default </NButton>
        <NButton type="primary" ghost> Primary </NButton>
        <NButton type="info" ghost> Info </NButton>
        <NButton type="success" ghost> Success </NButton>
        <NButton type="warning" ghost> Warning </NButton>
        <NButton type="error" ghost> Error </NButton>
      </div>
    </NCard>

    <NCard>
      <div class="naive-component-date">
        <NDatePicker type="date" />
        <NDatePicker type="datetime" clearable />
        <NDatePicker type="datetimerange" clearable />
      </div>
    </NCard>

    <NCard hoverable>
      <NCarousel autoplay>
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg" />
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg" />
        <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
      </NCarousel>
    </NCard>

    <NCard hoverable>
      <div class="naive-component-tag">
        <NTag> 爱在西元前 </NTag>
        <NTag type="success"> 不该 </NTag>
        <NTag type="warning"> 超人不会飞 </NTag>
        <NTag type="error"> 手写的从前 </NTag>
        <NTag type="info"> 哪里都是你 </NTag>
        <NTag :bordered="false"> 爱在西元前 </NTag>
        <NTag :bordered="false" type="success"> 不该 </NTag>
        <NTag :bordered="false" type="warning"> 超人不会飞 </NTag>
        <NTag :bordered="false" type="error"> 手写的从前 </NTag>
        <NTag :bordered="false" type="info"> 哪里都是你 </NTag>
        <NTag closable :disabled="false"> 爱在西元前 </NTag>
      </div>
    </NCard>

    <NCard hoverable>
      <NAlert title="Default 类型" type="default"> Gee it's good to be back home </NAlert>
      <NAlert title="Info 类型" type="info"> Gee it's good to be back home </NAlert>
      <NAlert title="Success 类型" type="success"> Leave it till tomorrow to unpack my case </NAlert>
      <NAlert title="Warning 类型" type="warning"> Honey disconnect the phone </NAlert>
      <NAlert title="Error 类型" type="error"> I'm back in the U.S.S.R. </NAlert>
    </NCard>

    <NCard hoverable>
      <NSpin size="small" />
      <NSpin size="medium" />
      <NSpin size="large" />
      <NProgress type="circle" :percentage="20" />
      <NProgress type="circle" status="info" :percentage="42" />
      <NProgress type="circle" status="success" :percentage="98" />
      <NProgress type="circle" status="warning" :percentage="10" />
      <NProgress type="circle" status="error" :percentage="42" />
      <NButton @click="info"> 信息（Hover不消失） </NButton>
      <NButton @click="error"> 错误 </NButton>
      <NButton @click="warning"> 警告 </NButton>
      <NButton @click="success"> 成功 </NButton>
      <NButton @click="loading"> 加载中 </NButton>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import {
  NAlert, NButton, NCard, NCarousel, NDatePicker, NProgress, NSpin, NTag, useMessage,
} from 'naive-ui';

const message = useMessage();
const info = () => {
  message.info("I don't know why nobody told you how to unfold your love", {
    keepAliveOnHover: true,
  });
};
const error = () => {
  message.error('Once upon a time you dressed so fine');
};
const warning = () => {
  message.warning('How many roads must a man walk down');
};
const success = () => {
  message.success("'Cause you walked hand in hand With another man in my place");
};
const loading = () => {
  message.loading('If I were you, I will realize that I love you more than any other guy');
};
</script>

<style scoped lang="scss">
.n-card:not(:last-child) {
  margin-bottom: 12px;
}

.n-tag {
  margin-right: 10px;
}

.n-alert:not(:last-child) {
  margin-bottom: 10px;
}

.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 5px;
}

.naive-component-container {
  display: flex;
  flex-direction: column;
}

.naive-component-button {
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 15px 15px;
}

.naive-component-date {
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px 15px;
}
</style>
