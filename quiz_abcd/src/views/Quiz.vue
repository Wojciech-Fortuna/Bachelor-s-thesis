<template>
  <div class="quiz-container">
    <div class="status-bar">
      <div>Pytanie: {{ currentIndex + 1 }}/{{ questions.length }}</div>
      <div>Punkty: {{ score }}/{{ questions.length }}</div>
    </div>

    <div class="quiz-box" v-if="currentQuestion">
      <h2>{{ currentQuestion.question }}</h2>
      <ul>
        <li
            v-for="(text, key) in currentQuestion.options"
            :key="key"
            :class="getOptionClass(key)"
            @click="selectOption(key)"
            class="option-item"
        >
            <span class="option-label">{{ key.toUpperCase() }}.</span>
            <span class="option-value">
            <span v-if="text === ''" class="empty-box">□</span>
            <span v-else class="symbol">{{ text }}</span>
            </span>
        </li>
      </ul>

      <button @click="submitAnswer" :disabled="!selected || answered">
        Potwierdź
      </button>
    </div>

    <div v-else class="quiz-box">
      <h2>Koniec quizu!</h2>
      <p>Twój wynik: {{ score }} / {{ questions.length }}</p>
    </div>
  </div>
</template>

<script>
import questions from '../../resources/questions.json'

export default {
  name: 'QuizView',
  data() {
    return {
      questions,
      currentIndex: 0,
      selected: null,
      answered: false,
      score: 0
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex]
    }
  },
  methods: {
    selectOption(option) {
      if (!this.answered) {
        this.selected = option
      }
    },
    submitAnswer() {
      this.answered = true
      if (this.selected === this.currentQuestion.correct) {
        this.score++
      }
      setTimeout(() => {
        this.currentIndex++
        this.selected = null
        this.answered = false
      }, 2000)
    },
    getOptionClass(option) {
      if (!this.answered) {
        return option === this.selected ? 'selected' : ''
      }
      if (option === this.currentQuestion.correct) return 'correct'
      if (option === this.selected) return 'incorrect'
      return ''
    }
  }
}
</script>

<style scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  font-family: sans-serif;
  position: relative;
}

.status-bar {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 14px;
  text-align: right;
  line-height: 1.4;
}

.quiz-box {
  max-width: 600px;
  width: 100%;
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

li {
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: left;
}

li:hover {
  background-color: #f0f0f0;
}

.selected {
  background-color: #e0e0e0;
}

.correct {
  background-color: #c8f7c5;
}

.incorrect {
  background-color: #f7c5c5;
}

.option-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 18px;
  margin-bottom: 10px;
}


.option-label {
  font-weight: bold;
  margin-right: -10px;
}

.option-value {
  font-weight: bold;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.symbol {
  text-align: center;
  width: 100%;
}

.empty-box {
  font-size: 28px;
  color: #999;
}


button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 4px;
  transition: background 0.3s ease;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #555;
}
</style>
