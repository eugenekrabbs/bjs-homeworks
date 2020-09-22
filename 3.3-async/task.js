class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerID;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Идентификатор звонка не задан');
    }

    const foundAlarm = this.alarmCollection.find(alarm => alarm.id === id);

    if (foundAlarm) {
      console.error("Такой звонок уже существует");
      throw new Error("Такой звонок уже существует");
    }

    this.alarmCollection.push({
      time: time,
      callback: callback,
      id: id
    })
  }

  removeClock(id) {
    const foundAlarm = this.alarmCollection.find(alarm => alarm.id === id);
    if (foundAlarm) {
      const index = this.alarmCollection.findIndex(alarm => alarm.id === id);
      this.alarmCollection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime() {
    const hours = new Date().getHours().toString();
    const minutes = new Date().getMinutes().toString();
    return `${hours}:${minutes}`;

  }

  start() {
    function checkClock() {
      const currentFormattedTime = getCurrentFormattedTime();
      if (currentFormattedTime === this.time) {
        return this.callback;
      } else {
        return currentFormattedTime;
      }
    }

    if (!this.timerID) {
      const newInterval = setInterval(() => {
        timerID = this.alarmCollection.forEach(alarm => checkClock())
      }, 500);
      return newInterval;
    }
  }

  stop() {
    if (this.timerID) {
      clearInterval(newInterval);
      timerID = undefined;
    }
  }

  printAlarms() {
    return this.alarmCollection.forEach(alarm => console.log(`Звонок с идентификатором ${alarm.id} установлен на время ${alarm.time}`));
  }

  clearAlarms() {
    clearInterval(this.newInterval);
    this.alarmCollection = [];
  }
}

function testCase() {
  const alarm1 = new AlarmClock();
  alarm1.addClock("09:00", () => console.log("09:00 Пора вставать"), 1);
  alarm1.addClock("09:05", () => console.log("09:05 ПОРА ВСТАВАТЬ!"), 2);
  alarm1.addClock("09:20", () => console.log("09:20 Поздравляю, ты проспала"), 3);
  alarm1.start();
  alarm1.stop();
  alarm1.printAlarms();
  alarm1.clearAlarms();
  alarm1.printAlarms();
}