# Event tracking library for websites

## Usage

The javascript file responsible for tracking the events is present in ./lib folder. Follow these steps to start the tracking.

1. Import the library into the required file

   ```js
   import UITracker from "./lib/UITracker";
   ```

2. Initialize the UITracker object
   ```js
   const uiTracker = new UITracker();
   ```
3. Call config on the object to configure the options
   ```js
   /**
    *  Function called to add the required configurations, throws error if argument count is not 3
    *  @param {*} options Options : dataTransmissionInterval, reportOnError, and sessionId that need to be configured
    */
   uiTracker.config({
     dataTransmissionInterval: 10000,
     reportOnError: false,
     sessionId: `abc_user/${generated_id}`,
   });
   ```
4. Call the start function on the object
   ```js
   uiTracker.start();
   ```

## Ways to import

### 1. Importing directly in index.html

The UITracker.js file can be imported in the index.html file, within a script tag.

#### EXAMPLE

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module">
      import UITracker from "./UITracker.js";
      const uiTracker = new UITracker();
      uiTracker.config({
        // Send data every 10s, do not report immediately on error
        dataTransmissionInterval: 10000,
        reportOnError: false,
        sessionId: `abc_user/${1232141}`,
      });

      uiTracker.start();
    </script>
  </head>
  <body>
    <!-- Body Content -->
  </body>
</html>
```

### 2. React

Instead of importing the file in the index.html in the public folder. It can direcly be imported in App.js of the React app. The UseEffect will make sure the start function is called after the DOM has been rendered.

#### EXAMPLE

```jsx
import UITracker from "./lib/UITracker";

function App() {
  useEffect(() => {
    const uiTracker = new UITracker();

    uiTracker.config({
      // Send data every 10s, do not report immediately on error
      dataTransmissionInterval: 10000,
      reportOnError: false,
      sessionId: `abc_user/${1232141}`,
    });

    uiTracker.start();
  }, []);

  return <div className="App"></div>;
}

export default App;
```

## Events Tracked

Following are the list of events that are tracked by the library.

### PAGE_EVENT

1. RELOAD
2. TAB_ACTIVE
3. TAB_HIDDEN
4. NAVIGATE
5. BACK_FORWARD
6. PRERENDER
7. PAGE_CLOSE

### USER_EVENT

1. IDLE
2. KEYDOWN
3. KEYUP
4. CLICK
5. CONTEXTMENU
6. MOUSEDOWN
7. MOUSEUP
8. PAGE_CLOSE
9. ALERT
10. FORM_SUBMISSION
11. DOWNLOAD

### RESPONSE

1. FETCH
2. XMLHttpRequest

### REQUEST

1. FETCH
2. XMLHttpRequest

### ERROR

1. RUNTIME_CRASH
2. UNHANDLED_PROMISE_REJECTION
3. CONSOLE_ERROR
