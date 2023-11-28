<template>
  <div class="calendar-box">
    <h2 class="calendar-title">Select a Date</h2>
    <input
      type="text"
      id="dateInput"
      v-model="selectedDate"
      @click="toggleCalendar"
      placeholder="Select a date"
    />
    <div class="calendar" id="calendar" v-show="showCalendar">
      <div class="header">
        <button id="prevBtn" @click="prevMonth">&lt;</button>
        <h2 id="monthYear">{{ formattedCurrentDate }}</h2>
        <button id="nextBtn" @click="nextMonth">&gt;</button>
      </div>
      <div class="days" id="daysContainer">
        <div
          class="day"
          v-for="day in daysInMonth"
          :key="day"
          @click="handleDayClick(day)"
          :class="{ current: isCurrentDay(day), selected: isSelectedDay(day) }"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      selectedDate: null,
      showCalendar: false,
    };
  },
  computed: {
    formattedCurrentDate() {
      return (
        this.currentDate.toLocaleString("default", { month: "long" }) +
        " " +
        this.currentDate.getFullYear()
      );
    },
    daysInMonth() {
      // const firstDay = new Date(
      //   this.currentDate.getFullYear(),
      //   this.currentDate.getMonth(),
      //   1
      // );
      const lastDay = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      );
      return Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
    },
  },
  methods: {
    handleDayClick(day) {
      this.selectedDate = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        day
      );
      this.toggleCalendar();
    },
    isCurrentDay(day) {
      const today = new Date();
      return (
        today.getDate() === day &&
        today.getMonth() === this.currentDate.getMonth() &&
        today.getFullYear() === this.currentDate.getFullYear()
      );
    },
    isSelectedDay(day) {
      if (this.selectedDate) {
        return (
          this.selectedDate.getDate() === day &&
          this.selectedDate.getMonth() === this.currentDate.getMonth() &&
          this.selectedDate.getFullYear() === this.currentDate.getFullYear()
        );
      }
      return false;
    },
    toggleCalendar() {
      this.showCalendar = !this.showCalendar;
    },
    prevMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    },
    nextMonth() {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.calendar-box {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.calendar-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.calendar {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  position: absolute;
  z-index: 1;
  display: none;
}

.header {
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

#prevBtn,
#nextBtn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 16px;
}

#monthYear {
  font-size: 18px;
  font-weight: bold;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  padding: 10px;
}

.day {
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.day.current {
  background-color: #3498db;
  color: white;
}

.day.selected {
  background-color: #2ecc71;
  color: white;
}

#dateInput {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}

</style>
