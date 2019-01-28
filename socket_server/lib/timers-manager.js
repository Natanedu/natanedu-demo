class TimerManager {
  constructor() {
    this.timers = new Map();
  }

  static initialize() {
    if (this.instance) return this.instance;

    this.instance = new TimerManager();

    return this.instance;
  }

  setTimeout(socket_id, time, cb) {
    console.log(`Setting timeout for socket ${socket_id} with ${time} time`);
    const timer = setTimeout(cb, time);

    this.timers.set(socket_id, timer);
    console.log("Timer succesfully saved");
  }

  clearTimeout(socket_id) {
    console.log(`Clearing timeout for socket ${socket_id}`);

    const timer = this.timers.get(socket_id);

    if (!timer) {
      console.log("timer not found for this socket");
      return;
    }

    clearTimeout(timer);
    console.log("Timer cleared");
  }
}

module.exports = TimerManager;
