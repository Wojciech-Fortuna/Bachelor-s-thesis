<template>
  <button class="quiz-button">
    <div class="quiz-title">Quiz</div>
    <div class="quiz-label">{{ userText }}</div>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  userText: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.quiz-button {
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: none;
  background-color: #007bff; /* niebieski */
  color: white;
  font-family: sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
}

.quiz-button:hover {
  background-color: #0056b3;
}

.quiz-title {
  font-weight: bold;
  font-size: 1.2em;
}

.quiz-label {
  font-size: 1em;
}
</style>