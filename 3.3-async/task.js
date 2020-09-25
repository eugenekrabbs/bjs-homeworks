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
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    if (hours < 10) {
      hours = `0${hours}`;
    } else if (minutes < 10) {
      minutes = `0${minutes}`
    }
    return `${hours}:${minutes}`;
  }

  start() {
    const checkClock = (clock) => {
      if (this.getCurrentFormattedTime() === clock.time) {
        return callback();
      }
    }

    if (!this.timerID) {
      this.timerID = setInterval(() => {
        return this.alarmCollection.forEach(clock => checkClock(clock))
      }, 500);
    }
  }

  stop() {
    if (this.timerID) {
      clearInterval(timerID);
      timerID = undefined;
    }
  }

  printAlarms() {
    return this.alarmCollection.forEach(alarm => console.log(`Звонок с идентификатором ${alarm.id} установлен на время ${alarm.time}`));
  }

  clearAlarms() {
    stop();
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

testCase();