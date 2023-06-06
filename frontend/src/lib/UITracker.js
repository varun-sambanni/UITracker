const mouseEvents = ["click", "contextmenu"];
const keyEvents = ["keyup", "keydown"];

let self;

function getScrollbarWidth() {
  // Creating invisible container
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll"; // forcing scrollbar to appear
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement("div");
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

class UITracker {
  constructor() {
    self = this;
    this.idleFlag = false;
    this.idleTimer = null;
    this.isSocketConnected = false;
    this.oldX = -1;
    this.oldY = -1;
    this.mouseCoordRecorder = 100000; // The interval at which cursor coordinates are recorded
    this.idleTimeDectection = 1000; // The interval at which idle event is recorded
    this.dragStartX = -1;
    this.dragStartY = -1;
    this.location = null;
    this.URL = window.location.href;
    this.eventsList = [];
    this.sessionStartTime = 0;
    this.tabHiddenStart = 0; // Stores the timeStamp of when the most recent 'TAB_HIDDEN' event is recorded
    sessionStorage.setItem("session-id", UITracker.getUID());
    this.sessionId = sessionStorage.getItem("session-id");
    this.dataTransmissionInterval = 15000;
    this.reportOnError = false;
    this.socketInterval = null;
    console.log("h ", window.innerHeight);
    console.log("w ", window.innerWidth);
    console.log("screen height ", window.screen.height);
    console.log("screen width ", window.screen.width);
    console.log("screen avail height ", window.screen.availHeight);
    console.log("screen avail width ", window.screen.availWidth);
    console.log("scroll bar width ", getScrollbarWidth());
  }

  /**
   *  Function called to add the required configurations
   *  @param {*} dataTransmissionInterval The interval at which the data is to be transmitted
   *  @param {*} reportOnError Boolean value, whether to send data immediately on error or not
   */
  config(dataTransmissionInterval, reportOnError) {
    this.dataTransmissionInterval = dataTransmissionInterval;
    this.reportOnError = reportOnError;
  }

  /**
   *  Called from App.js
   */
  start() {
    UITracker.getLocation(); // Starts obtaining user location and eventually stores in this.location var
    this.startDataTransmissionHTTP();
    //this.startDataTransmissionSockets();
    this.startSession();
    this.recordPageEvents();
    this.recordErrors();
    this.recordAlerts();
    this.addMouseEventListners();
    this.addKeyEventListeners();
    this.recordHTTPRequests();
    this.recordConsoleErrors();
    this.endSession();
  }

  /**
   *  Setting up regular data transmision at every dataTransmissionInterval, using HTTP requests
   */
  startDataTransmissionHTTP() {
    setInterval(() => {
      console.log("Sending data length -> ", self.eventsList.length);
      fetch("http://localhost:5000/postData", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            URL: self.URL,
            location: self.location,
            sessionId: self.sessionId,
            events: self.eventsList,
            timeStamp: UITracker.getTimeStamp(),
          },
          this.replacerFunc()
        ),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Response ->", data);
        })
        .catch((err) => {
          console.log("Error sending data to server ", err);
        });
    }, this.dataTransmissionInterval);
  }

  /**
   *  Setting up regular data transmision at every dataTransmissionInterval, using web sockets
   */
  startDataTransmissionSockets() {
    self.ws = new WebSocket("ws://localhost:8082");
    self.ws.addEventListener("open", () => {
      console.log("Server Connected");
      self.isSocketConnected = true;

      self.socketInterval = setInterval(() => {
        console.log("Attempting to send data");
        if (self.isSocketConnected === false) {
          return;
        }
        self.ws.send(
          JSON.stringify(
            {
              URL: self.URL,
              location: self.location,
              sessionId: self.sessionId,
              events: self.eventsList,
              timeStamp: UITracker.getTimeStamp(),
            },
            this.replacerFunc()
          )
        );
      }, this.dataTransmissionInterval);
    });

    self.ws.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      console.log("Message From Server -> ", data);
    });

    self.ws.onclose = function (e) {
      console.log("Socket connection closed, Reconnecting...");
      self.isSocketConnected = false;
      clearInterval(self.socketInterval);
      self.startDataTransmissionSockets();
    };

    self.ws.onerror = function (e) {
      console.log("Error encountered with socket");
      self.isSocketConnected = false;
      self.ws.close();
    };
  }

  /**
   *  Util function to obtain location
   */
  static getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const accuracy = position.coords.accuracy;
          console.log("Accuracy ", accuracy);
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          self.location = { latitude, longitude };
        },
        (error) => {
          console.error("Error:", error.message);
          this.location = { error: "Unable to fetch" };
        }
      );
    } else {
      this.location = { error: "Geolocation Unsupported" };
    }
  }

  /**
   *  Util function to generate unique identifier
   */
  static getUID() {
    const alphaNum = Array.from(Array(26)).map((e, i) =>
      String.fromCharCode(i + 97)
    );
    for (let i = 0; i < 10; i++) {
      alphaNum.push(i.toString());
    }
    const format = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
    let uuid = "";
    for (let i = 0; i < format.length; i++) {
      if (format[i] === "-") {
        uuid += "-";
        continue;
      }
      let dt = new Date().getTime();
      const num = Math.floor(Math.random() * 36);
      uuid += alphaNum[(dt + num) % 36];
    }
    return uuid;
  }

  /**
   *  The first eventLog object containing user session info is sent
   */
  startSession() {
    let eventLog;
    self.sessionStartTime = new Date().getTime();
    eventLog = {
      URL: this.URL,
      location: this.location,
      sessionId: this.sessionId,
      events: this.eventsList,
      timeStamp: UITracker.getTimeStamp(),
    };
    console.log(eventLog);
  }

  /**
   *  Event listener for session end
   */
  endSession() {
    window.addEventListener("unload", () => {
      const sessionEndTime = new Date().getTime();
      const currEventObj = {
        name: "USER_EVENT",
        type: "PAGE_CLOSE",
        data: {
          sessionTime: sessionEndTime - self.sessionStartTime,
        },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };
      console.table(JSON.parse(JSON.stringify(eventLog, this.replacerFunc())));
    });
  }

  /**
   *  Util function to deal with circular objects
   */
  replacerFunc = () => {
    const visited = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (visited.has(value)) {
          return;
        }
        visited.add(value);
      }
      return value;
    };
  };

  /**
   *  Util function to get time stamp
   */
  static getTimeStamp() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    return dateTime;
  }

  /**
   *  Resets the idle timer, and start a new one
   */
  resetTimer() {
    this.idleFlag = false;
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.idleFlag = true;

      const currEventObj = {
        name: "USER_EVENT",
        type: "IDLE",
        data: {
          X: this.oldX,
          Y: this.oldY,
          HTMLElement:
            document.elementFromPoint(this.oldX, this.oldY) !== null
              ? document.elementFromPoint(this.oldX, this.oldY).outerHTML
              : null,
        },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLog);
    }, self.idleTimeDectection);
  }

  /**
   *  Alert function to override the original alert function
   *  As there is no event listener for alert
   *  @param {String} message The original alert message
   */
  alertFunc(message) {
    var alertEvent = new CustomEvent("alert", { detail: { message: message } });
    window.dispatchEvent(alertEvent);
    window.originalAlert(message);
  }

  /**
   *  Recording window alerts on a page
   */
  recordAlerts() {
    window.originalAlert = window.alert;
    window.alert = this.alertFunc;
    window.addEventListener("alert", function (event) {
      const currEventObj = {
        name: "USER_EVENT",
        type: "ALERT",
        data: { message: event.detail.message },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLog);
    });
  }

  /**
   *  Recording page events : reload, navigate, back_forward, prerender
   */
  recordPageEvents() {
    // Capturing tab hidden and active events
    if (typeof document.hidden !== undefined) {
      document.addEventListener("visibilitychange", (event) => {
        const currEventObj = {
          name: "PAGE_EVENT",
          type: "TAB_ACTIVE",
          data: {},
          timeStamp: UITracker.getTimeStamp(),
        };

        if (document.hidden) {
          this.tabHiddenStart = event.timeStamp;
          currEventObj.type = "TAB_HIDDEN";
        } else {
          currEventObj.data.duration = event.timeStamp - this.tabHiddenStart;
        }

        self.eventsList.push(currEventObj);

        const eventLog = {
          URL: self.URL,
          location: self.location,
          sessionId: self.sessionId,
          events: self.eventsList,
          timeStamp: UITracker.getTimeStamp(),
        };

        console.log(eventLog);
      });
    }

    const currEventObj = {
      name: "PAGE_EVENT",
      type: performance.getEntriesByType("navigation")[0].type.toUpperCase(),
      data: {
        URL: window.location.href,
        DOMLoadTime:
          performance.getEntriesByType("navigation")[0].domComplete / 1000,
      },
      timeStamp: UITracker.getTimeStamp(),
    };

    self.eventsList.push(currEventObj);

    const eventLog = {
      URL: self.URL,
      location: self.location,
      sessionId: self.sessionId,
      events: self.eventsList,
      timeStamp: UITracker.getTimeStamp(),
    };

    console.log(eventLog);
  }

  /**
   * Recording errors which are uncaught
   */
  recordErrors() {
    window.onerror = (event, source, lineNo, colNo, error) => {
      const currEventObj = {
        name: "ERROR",
        type: "RUNTIME_CRASH",
        data: {
          errorMessage: event,
          source: source,
          lineNo: lineNo,
          colNo: colNo,
          error: error,
        },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };
      console.log("Attempting to send data");
      if (self.reportOnError === true) {
        self.ws.send(
          JSON.stringify(
            {
              URL: self.URL,
              location: self.location,
              sessionId: self.sessionId,
              events: self.eventsList,
              timeStamp: UITracker.getTimeStamp(),
            },
            this.replacerFunc()
          )
        );
      }
      console.log(eventLog);
    };

    // Unhandled promises
    window.onunhandledrejection = (event) => {
      const currEventObj = {
        name: "ERROR",
        type: "UNHANDLED_PROMISE_REJECTION",
        data: { errorMessage: event.reason.message, stack: event.reason.stack },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      if (self.reportOnError === true) {
        self.ws.send(
          JSON.stringify(
            {
              URL: self.URL,
              location: self.location,
              sessionId: self.sessionId,
              events: self.eventsList,
              timeStamp: UITracker.getTimeStamp(),
            },
            this.replacerFunc()
          )
        );
      }
      console.log(eventLog);
    };
  }

  /**
   *  Records errors printed by console.error()
   */
  recordConsoleErrors() {
    // Monkey patching console.error
    const origConsoleError = console.error;
    console.error = (...args) => {
      origConsoleError.apply(console, args);

      const currEventObj = {
        name: "ERROR",
        type: "CONSOLE_ERROR",
        data: { errorMessage: args[0] },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLog);
    };
  }

  /**
   * Adds the mouse events present in the global mouseEvents list
   */
  addMouseEventListners() {
    for (let mouseEvent of mouseEvents) {
      window.addEventListener(mouseEvent, (event) =>
        this.mouseEventHandler(event)
      );
    }
    window.addEventListener("mousemove", (event) =>
      this.mouseMoveEventHandler(event)
    );
    window.addEventListener("mousedown", (event) => {
      this.mouseDownEventHandler(event);
    });
    window.addEventListener("mouseup", (event) => {
      this.mouseUpEventHandler(event);
    });

    setInterval(() => {
      if (this.idleFlag === true) return; // If idleFlag is true, no need to print the below statements

      const currEventObj = {
        name: "USER_EVENT",
        type: "CURSOR_MOVE",
        data: {
          X: this.oldX,
          Y: this.oldY,
          HTMLElement:
            document.elementFromPoint(this.oldX, this.oldY) !== null
              ? document.elementFromPoint(this.oldX, this.oldY).outerHTML
              : null,
        },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObj);

      const eventLog = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLog);
    }, this.mouseCoordRecorder);
  }

  /**
   *  Adds the mouse events present in the global mouseEvents list
   */
  addKeyEventListeners() {
    for (let keyEvent of keyEvents) {
      window.addEventListener(keyEvent, (event) => {
        this.keyEventHandler(event);
      });
    }
  }

  /**
   *  event handler for key related events
   *  @param {Object} event The event object
   */
  keyEventHandler(event) {
    this.resetTimer();

    const currEventObj = {
      name: "USER_EVENT",
      type: event.type.toUpperCase(),
      data: {
        X: this.oldX,
        Y: this.oldY,
        key: event.key,
        HTMLElement:
          document.elementFromPoint(this.oldX, this.oldY) !== null
            ? document.elementFromPoint(this.oldX, this.oldY).outerHTML
            : null,
      },
      timeStamp: UITracker.getTimeStamp(),
    };

    self.eventsList.push(currEventObj);

    const eventLog = {
      URL: self.URL,
      location: self.location,
      sessionId: self.sessionId,
      events: self.eventsList,
      timeStamp: UITracker.getTimeStamp(),
    };

    console.log(eventLog);
  }

  /**
   *  event handler for mousemove event
   *  @param {Object} event The event object
   */
  mouseMoveEventHandler(event) {
    this.resetTimer();
    const x = event.pageX;
    const y = event.pageY;
    this.oldX = x;
    this.oldY = y;
  }

  /**
   *  The start of a potential mouse drag event
   *  @param {Object} event The event object
   */
  mouseDownEventHandler(event) {
    // Could be any mouse button
    this.dragStartX = event.pageX;
    this.dragStartY = event.pageY;
  }

  /**
   *  The end of a potential mouse drag event
   *  @param {Object} event The event object
   */
  mouseUpEventHandler(event) {
    // Check for double click
    if (event.pageX === this.dragStartX && event.pageY === this.dragStartY)
      return;

    const currEventObj = {
      name: "USER_EVENT",
      type: "MOUSE_DRAG",
      data: {
        startX: this.dragStartX,
        startY: this.dragStartY,
        endX: event.pageX,
        endY: event.pageY,
      },
      timeStamp: UITracker.getTimeStamp(),
    };

    self.eventsList.push(currEventObj);

    const eventLog = {
      URL: self.URL,
      location: self.location,
      sessionId: self.sessionId,
      events: self.eventsList,
      timeStamp: UITracker.getTimeStamp(),
    };

    console.log(eventLog);
  }

  /**
   *  event handler for mouseevents event
   *  @param {Object} event The event object
   */
  mouseEventHandler(event) {
    const x = event.pageX;
    const y = event.pageY;
    var scrollX = document.documentElement.scrollLeft;
    var scrollY = document.documentElement.scrollTop;
    var clientX = x - document.documentElement.scrollLeft;
    var clientY = y - document.documentElement.scrollTop;
    const element = document.elementFromPoint(clientX, clientY);

    const currEventType =
      element &&
      element.tagName === "A" &&
      element.href &&
      element.hasAttribute("download")
        ? "DOWNLOAD"
        : event.type === "click" &&
          element &&
          element.getAttribute("type") === "submit"
        ? "FORM_SUBMISSION"
        : event.type.toUpperCase();

    const currEventObj = {
      name: "USER_EVENT",
      type: currEventType,
      data: {
        X: x,
        Y: y,
        scrollX: scrollX,
        scrollY: scrollY, // Imp everywhere where (x, y) is being recorded
        HTMLElement: element !== null ? element.outerHTML : null,
      },
      timeStamp: UITracker.getTimeStamp(),
    };

    if (event.type === "click") {
      // 0 -> LMB, 1 -> Middle Button, 2 -> RMB
      currEventObj.data.button = event.button;
    }

    self.eventsList.push(currEventObj);

    const eventLog = {
      URL: self.URL,
      location: self.location,
      sessionId: self.sessionId,
      events: self.eventsList,
      timeStamp: UITracker.getTimeStamp(),
    };

    if (currEventType === "FORM SUBMISSION") {
      console.table(eventLog);
    }
    console.log(eventLog);
  }

  /**
   *  Recording HTTP Requests
   */
  recordHTTPRequests() {
    // Monkey patching Fetch and XMLHttpRequest APIs

    const origFetch = window.fetch;
    window.fetch = async (...args) => {
      let resource = args[0],
        config = args[1];
      const startTime = new Date().getTime();
      const currentRequestId = UITracker.getUID();

      const requestObj = new Request(resource, config);

      const currEventObjReq = {
        name: "REQUEST",
        type: "FETCH",
        data: {
          resource: resource,
          method: requestObj.method,
          id: currentRequestId,
        },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObjReq);

      const eventLogReq = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLogReq);

      const response = await origFetch(resource, config);
      const endTime = new Date().getTime();

      const responseCloned = response.clone();
      const ReaderClone = responseCloned.body.getReader();
      const chunks = [];
      let chunk;
      while (!(chunk = await ReaderClone.read()).done) {
        chunks.push(chunk.value);
      }
      const dataCloned = new Blob(chunks);
      const dataClonedReader = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsText(dataCloned);
      });

      const currEventObjRes = {
        name: "RESPONSE",
        type: "FETCH",
        data: {
          resource: response.url,
          status: response.status,
          responseData: dataClonedReader,
          id: currentRequestId,
          duration: endTime - startTime,
        },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObjRes);

      const eventLogRes = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLogRes);
      return response;
    };

    // Axios uses XMLHttpRequest internally so works fine with Axios as well (and most other 3rd party libraries)

    // Store the references to the original methods
    var originalOpen = window.XMLHttpRequest.prototype.open;
    var originalSend = window.XMLHttpRequest.prototype.send;

    // Requests Interception
    window.XMLHttpRequest.prototype.open = function (method, resource) {
      const currentRequestId = UITracker.getUID();
      const startTime = new Date().getTime();

      const currEventObjReq = {
        name: "REQUEST",
        type: "XMLHttpRequest",
        data: { resource: resource, method: method, id: currentRequestId },
        timeStamp: UITracker.getTimeStamp(),
      };

      self.eventsList.push(currEventObjReq);

      const eventLogReq = {
        URL: self.URL,
        location: self.location,
        sessionId: self.sessionId,
        events: self.eventsList,
        timeStamp: UITracker.getTimeStamp(),
      };

      console.log(eventLogReq);
      originalOpen.apply(this, arguments);

      // Responses Interception
      window.XMLHttpRequest.prototype.send = function () {
        var xhr = this;
        var originalOnReadyStateChange = xhr.onreadystatechange;
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            const endTime = new Date().getTime();
            const duration = endTime - startTime;
            const currEventObjRes = {
              name: "RESPONSE",
              type: "XMLHttpRequest",
              data: {
                resource: xhr.responseURL,
                status: xhr.status,
                responseData: xhr.response,
                duration: duration,
                id: currentRequestId,
              },
              timeStamp: UITracker.getTimeStamp(),
            };

            self.eventsList.push(currEventObjRes);

            const eventLogRes = {
              URL: self.URL,
              location: self.location,
              sessionId: self.sessionId,
              events: self.eventsList,
              timeStamp: UITracker.getTimeStamp(),
            };

            console.log(eventLogRes);
          }

          if (originalOnReadyStateChange) {
            originalOnReadyStateChange.apply(this, arguments);
          }
        };
        originalSend.apply(this, arguments);
      };
    };
  }
}
export default UITracker;
