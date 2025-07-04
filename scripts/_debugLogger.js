function dev_Help() {
  // These are the codes you can use.
  console.info("dev_logSwitch(): (Shortcut -> Crtl + MetaKey) Let's you enable/disable the rest of the commands.");
  console.info("_log(): Gives you a log of whatever was hard-coded to shown on repeat (every 3 seconds).");
  console.info("_logRepeat: Do `_logRepeat = [Boolean]` do enable/disable the cycle of logging.");
  console.info("setInterval([Repeated Function], [Cycle Interval], [Any Other Stuff]): [ID Number]: You can change the cycle time of any function by setting the Function and setting the cycle interval in milliseconds. You can also add some more stuff optionally, as well as and ID.");
  console.info("dev_variableAlert(): Gives you a log of whatever variable was hard-coded to be logged by the _log() by it's set repeat cycle.");
}

document.addEventListener("DOMContentLoaded", () => {
  globalThis.dev_log = false;
  globalThis.dev_shortCut = true; // Make it "false" to disable this.
  globalThis._logRepeat = true;
  globalThis._logRepeatInterval = null;


  if (dev_shortCut) {
    document.addEventListener("keydown", function (event) {
      if (event.ctrlKey && event.metaKey) {
        event.preventDefault();
        dev_logSwitch();
      }
    });
  }
});

function dev_logSwitch() {
  dev_log = !dev_log;
  console.log(`[Debug] Logging is now ${dev_log ? "ON" : "OFF"}`);

  _log()
}

function _log() {
  if (!dev_log) return;

  if (_logRepeat && !_logRepeatInterval) {
    _logRepeatInterval = setInterval(() => {
      dev_variableAlert();
    }, 3000); // 3000 milliseconds -> 3 seconds
    console.log("[Debug] Started repeating log.");
  } else if (!_logRepeat && _logRepeatInterval) {
    clearInterval(_logRepeatInterval);
    _logRepeatInterval = null;
    console.log("[Debug] Stopped repeating log.");
  }

  _logRepeat = !_logRepeat;
}

function dev_variableAlert() {
  if (!dev_log) return;

  if (typeof calculationMode !== "undefined") {
    console.log("calculationMode:", calculationMode);
  }

  if (typeof finalResult !== "undefined") {
    console.log("finalResult:", finalResult);
  }

  // add any other variables that might need logging
}
