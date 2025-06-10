document.addEventListener("DOMContentLoaded", () => {
  globalThis.dev_log = false;
  globalThis.dev_shortCut = true;
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
