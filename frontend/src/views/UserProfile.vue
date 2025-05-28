<template>
  <div class="profile-container">
    <h1 class="section-title">Profil użytkownika</h1>

    <div class="profile-box">
      <div class="profile-photo"></div>
      <div class="profile-details">
        <p><strong>Imię:</strong> Jan</p>
        <p><strong>Nazwisko:</strong> Kowalski</p>
        <p><strong>Nick:</strong> jankowal</p>
        <p><strong>Email:</strong> jan.kowalski@example.com</p>
      </div>
    </div>

    <div class="stats-section">
      <h2 class="section-title">Statystyki ogólne</h2>
      <div class="stat-row">
        <div class="stat-box correct">Poprawne odpowiedzi: {{ totalCorrect }}</div>
        <div class="stat-box incorrect">Błędne odpowiedzi: {{ totalIncorrect }}</div>
        <div class="stat-box accuracy">Skuteczność: {{ overallAccuracy }}%</div>
      </div>
    </div>

    <div class="stats-section">
      <h2 class="section-title">Statystyki szczegółowe</h2>
      <div
        class="quiz-box"
        v-for="quiz in quizStats"
        :key="quiz.name"
      >
        <h3 class="quiz-title">{{ quiz.name }}</h3>
        <div class="stat-row">
          <div class="stat-box correct">Poprawne: {{ quiz.correct }}</div>
          <div class="stat-box incorrect">Błędne: {{ quiz.incorrect }}</div>
          <div class="stat-box accuracy">
            Skuteczność: {{ calculateAccuracy(quiz.correct, quiz.incorrect) }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const quizStats = [
  { name: 'Quiz ABCD', correct: 12, incorrect: 3 },
  { name: 'Quiz Open', correct: 5, incorrect: 5 },
  { name: 'Quiz z Poprawianiem Błędów', correct: 8, incorrect: 2 },
]

const calculateAccuracy = (correct, incorrect) => {
  const total = correct + incorrect
  return total === 0 ? 0 : ((correct / total) * 100).toFixed(1)
}

const totalCorrect = computed(() =>
  quizStats.reduce((sum, quiz) => sum + quiz.correct, 0)
)
const totalIncorrect = computed(() =>
  quizStats.reduce((sum, quiz) => sum + quiz.incorrect, 0)
)
const overallAccuracy = computed(() =>
  calculateAccuracy(totalCorrect.value, totalIncorrect.value)
)
</script>

<style scoped>
.profile-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
}

.section-title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 16px;
}

.profile-box {
  background-color: #f3f4f6;
  display: flex;
  gap: 24px;
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 32px;
  align-items: center;
}

.profile-photo {
  width: 150px;
  height: 150px;
  background-color: #d1d5db;
  border-radius: 50%;
}

.profile-details p {
  margin: 6px 0;
}

.stats-section {
  margin-bottom: 40px;
}

.quiz-box {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
}

.quiz-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.stat-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.stat-box {
  flex: 1;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  text-align: center;
  min-width: 200px;
}

.correct {
  background-color: #d1fae5;
  color: #065f46;
}

.incorrect {
  background-color: #fee2e2;
  color: #991b1b;
}

.accuracy {
  background-color: #dbeafe;
  color: #1e3a8a;
}
</style>
