<template>
  <div>
    <NCard title="YRoam Admin" bordered hoverable>
      YRoam Admin 是一款基于Vue3 + TypeScript + NaiveUI等技术栈搭建的后台系统
    </NCard>

    <NCard title="生成环境相关依赖" bordered hoverable>
      <NDescriptions label-placement="left" bordered>
        <NDescriptionsItem v-for="(item, index) in DependenciesArr" :key="index" :label="item.name">
          {{ item.version }}
        </NDescriptionsItem>
      </NDescriptions>
    </NCard>

    <NCard title="开发环境相关依赖" bordered hoverable>
      <NDescriptions label-placement="left" bordered>
        <NDescriptionsItem v-for="(item, index) in DevDependenciesArr" :key="index" :label="item.name">
          {{ item.version }}
        </NDescriptionsItem>
      </NDescriptions>
    </NCard>
  </div>
</template>

<script setup lang="ts">
import { NCard, NDescriptions, NDescriptionsItem } from 'naive-ui';

import projectConfigJson from '../../package.json';

  interface PackJson {
    name: string
    version: string
    dependencies: Record<string, string>
    devDependencies: Record<string, string>
    [key: string]: any
  }

  interface PackItem {
    name: string
    version: string
  }

const { dependencies, devDependencies } = projectConfigJson as PackJson;

const DependenciesArr: PackItem[] = [];
const DevDependenciesArr: PackItem[] = [];

Object.keys(dependencies).forEach((key) => {
    const dependenciesObj: PackItem = { name: '', version: '' };
    dependenciesObj.name = key;
    dependenciesObj.version = dependencies[key];
    DependenciesArr.push(dependenciesObj);
});

Object.keys(devDependencies).forEach((key) => {
    const dependenciesObj: PackItem = { name: '', version: '' };
    dependenciesObj.name = key;
    dependenciesObj.version = devDependencies[key];
    DevDependenciesArr.push(dependenciesObj);
});
</script>

<style scoped lang="scss">
  .n-card:not(:last-child) {
    margin-bottom: 10px;
  }
</style>
