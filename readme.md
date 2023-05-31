# Event tracking library for UI

## Usage

The javascript file responsible for tracking the events is present in ./frontend/src/lib folder. After the UITracker class is import, follow these steps to start the tracking.

1. Initialize the UITracker object
2. Call config on the object to configure the options.
   ```js
   //  @param {*} dataTransmissionInterval The interval at which the data is to be transmitted
   //  @param {*} reportOnError Boolean value, whether to send data immediately on error or not
   config(interval, reportOnError);
   ```
3. Call the start function on the object.

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
      uiTracker.config(10000, false);
      uiTracker.start();
    </script>
  </head>
  <body>
    <!-- Body Content -->
  </body>
</html>
```

### 2. React

Instead of importing the file in the index.html in the public folder. It can direcly be imported in App.js of the react app. The UseEffect will make sure the start function is called after the DOM has been rendered.

#### EXAMPLE

```jsx
import UITracker from "./lib/UITracker";

function App() {
  useEffect(() => {
    const uiTracker = new UITracker();
    uiTracker.config(10000, false);
    uiTracker.start();
  }, []);

  return <div className="App"></div>;
}

export default App;
```
