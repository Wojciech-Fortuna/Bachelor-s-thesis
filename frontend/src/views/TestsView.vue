<script setup>
import QButton from '@/components/QButton.vue'
</script>

<template>
  <div class="button-container">
    <QButton user-text="Test 1" />
    <QButton user-text="Test 2" />
    <QButton user-text="Test 3" />
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}
</style>