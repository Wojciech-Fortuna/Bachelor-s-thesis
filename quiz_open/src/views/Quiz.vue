<template>
  <div class="quiz-container">
    <div class="status-bar">
      <div>Pytanie: {{ currentIndex + 1 }}/{{ questions.length }}</div>
      <div>Punkty: {{ score }}/{{ questions.length }}</div>
    </div>

    <div class="quiz-box" v-if="currentQuestion" >
      <h2>{{ currentQuestion.question }}</h2>

      <input
        v-model="userAnswer"
        :class="inputClass"
        :readonly="answered"
        placeholder="Wpisz odpowiedź..."
        @keyup.enter="handleEnter"
      />

      <div v-if="answered && !isCorrect" class="correct-answer">
        Poprawna odpowiedź: <strong>{{ currentQuestion.answer[0] }}</strong>
      </div>

      <button
        v-if="!answered"
        @click="submitAnswer"
        :disabled="!userAnswer"
      >
        Potwierdź
      </button>

      <button
        v-if="answered && currentIndex < questions.length - 1"
        @click="nextQuestion"
        @keyup.enter.prevent="nextQuestion"
        class="next-button"
      >
        Następne pytanie
      </button>
    </div>

    <div v-else class="quiz-box">
      <h2>Koniec quizu!</h2>
      <p>Twój wynik: {{ score }} / {{ questions.length }}</p>
    </div>
  </div>
</template>

<script>
import questions from '../../resources/open_questions.json'

export default {
  name: 'QuizView',
  data() {
    return {
      questions,
      currentIndex: 0,
      userAnswer: '',
      answered: false,
      isCorrect: false,
      score: 0
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex]
    },
    inputClass() {
      if (!this.answered) return ''
      return this.isCorrect ? 'correct' : 'incorrect'
    }
  },
  methods: {
    handleEnter() {
      console.log('Enter pressed', { answered: this.answered, userAnswer: this.userAnswer, currentIndex: this.currentIndex });
      if (!this.answered && this.userAnswer) {
        this.submitAnswer()
      } else if (this.answered && this.currentIndex < this.questions.length - 1) {
        this.nextQuestion()
      }
    },
    submitAnswer() {
      this.answered = true
      const normalizedUserAnswer = this.userAnswer.trim().toLowerCase()

      const possibleAnswers = Array.isArray(this.currentQuestion.answer)
        ? this.currentQuestion.answer
        : [this.currentQuestion.answer]

      this.isCorrect = possibleAnswers.some(
        correct =>
          normalizedUserAnswer === correct.trim().toLowerCase()
      )

      if (this.isCorrect) {
        this.score++
      }
    },
    nextQuestion() {
      this.currentIndex++
      this.userAnswer = ''
      this.answered = false
      this.isCorrect = false
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

input {
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

input.correct {
  border-color: #4caf50;
  background-color: #e7f9e7;
}

input.incorrect {
  border-color: #f44336;
  background-color: #fde7e7;
}

.correct-answer {
  color: #333;
  margin-bottom: 12px;
  font-size: 16px;
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

.next-button {
  margin-left: 10px;
  background-color: #007bff;
}

.next-button:hover {
  background-color: #0056b3;
}
</style>

