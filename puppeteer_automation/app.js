 
    const puppeteer = require("puppeteer");
  
    async function installMouseHelper(page) {

    await page.evaluateOnNewDocument(() => {
        // Install mouse helper only for top-level frame.
        if (window !== window.parent) return;
        window.addEventListener(
        "DOMContentLoaded",
        () => {
            const box = document.createElement("puppeteer-mouse-pointer");
            const styleElement = document.createElement("style");
            styleElement.innerHTML =  `
            puppeteer-mouse-pointer {
            pointer-events: none;
            position: absolute;
            top: 0;
            z-index: 10000;
            left: 0;
            width: 20px;
            height: 20px;
            background: rgba(0,0,0,.4);
            border: 1px solid white;
            border-radius: 10px;
            margin: -10px 0 0 -10px;
            padding: 0;
            transition: background .2s, border-radius .2s, border-color .2s;
            }
            puppeteer-mouse-pointer.button-1 {
            transition: none;
            background: rgba(0,0,0,0.9);
            }
            puppeteer-mouse-pointer.button-2 {
            transition: none;
            border-color: rgba(0,0,255,0.9);
            }
            puppeteer-mouse-pointer.button-3 {
            transition: none;
            border-radius: 4px;
            }
            puppeteer-mouse-pointer.button-4 {
            transition: none;
            border-color: rgba(255,0,0,0.9);
            }
            puppeteer-mouse-pointer.button-5 {
            transition: none;
            border-color: rgba(0,255,0,0.9);
            }`
        ;
            document.head.appendChild(styleElement);
            document.body.appendChild(box);
            document.addEventListener(
            "mousemove",
            (event) => {
                box.style.left = event.pageX + "px";
                box.style.top = event.pageY + "px";
                updateButtons(event.buttons);
            },
            true
            );
            document.addEventListener(
            "mousedown",
            (event) => {
                updateButtons(event.buttons);
                box.classList.add("button-" + event.which);
            },
            true
            );
            document.addEventListener(
            "mouseup",
            (event) => {
                updateButtons(event.buttons);
                box.classList.remove("button-" + event.which);
            },
            true
            );
            function updateButtons(buttons) {
            for (let i = 0; i < 5; i++)
                box.classList.toggle("button-" + i, buttons & (1 << i));
            }
        },
        false
        );
    });
    }

    let events = [{"timeStamp":1687419747.991,"name":"PAGE_EVENT","type":"NAVIGATE","data":{"URL":"http://localhost:3001/","DOMLoadTime":0.4807999999970198},"_id":"6493fb7052172c7c1bbac8b4"},{"timeStamp":1687419748.717,"name":"USER_EVENT","type":"MOUSEDOWN","data":{"X":619,"Y":213,"scrollX":0,"scrollY":0,"HTMLElement":"<div class=\"field\"><p>Name : </p><input></div>"},"_id":"6493fb7052172c7c1bbac8b5"},{"timeStamp":1687419748.938,"name":"USER_EVENT","type":"CLICK","data":{"X":619,"Y":213,"scrollX":0,"scrollY":0,"HTMLElement":"<div class=\"field\"><p>Name : </p><input></div>","button":0},"_id":"6493fb7052172c7c1bbac8b6"},{"timeStamp":1687419749.285,"name":"USER_EVENT","type":"MOUSEDOWN","data":{"X":624,"Y":225,"scrollX":0,"scrollY":0,"HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8b7"},{"timeStamp":1687419749.516,"name":"USER_EVENT","type":"CLICK","data":{"X":624,"Y":225,"scrollX":0,"scrollY":0,"HTMLElement":"<input>","button":0},"_id":"6493fb7052172c7c1bbac8b8"},{"timeStamp":1687419749.649,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8b9"},{"timeStamp":1687419749.758,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ba"},{"timeStamp":1687419749.938,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8bb"},{"timeStamp":1687419750.008,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8bc"},{"timeStamp":1687419750.048,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"2","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8bd"},{"timeStamp":1687419750.177,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8be"},{"timeStamp":1687419750.199,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"2","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8bf"},{"timeStamp":1687419750.253,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c0"},{"timeStamp":1687419750.308,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"3","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c1"},{"timeStamp":1687419750.426,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"3","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c2"},{"timeStamp":1687419750.443,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c3"},{"timeStamp":1687419750.536,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c4"},{"timeStamp":1687419750.581,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"4","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c5"},{"timeStamp":1687419750.713,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c6"},{"timeStamp":1687419750.715,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"4","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c7"},{"timeStamp":1687419750.794,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c8"},{"timeStamp":1687419751.03,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"5","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8c9"},{"timeStamp":1687419751.047,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ca"},{"timeStamp":1687419751.132,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8cb"},{"timeStamp":1687419751.168,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"5","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8cc"},{"timeStamp":1687419751.677,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"6","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8cd"},{"timeStamp":1687419751.763,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"6","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ce"},{"timeStamp":1687419751.986,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8cf"},{"timeStamp":1687419752.076,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d0"},{"timeStamp":1687419752.216,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"7","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d1"},{"timeStamp":1687419752.309,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"7","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d2"},{"timeStamp":1687419752.456,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d3"},{"timeStamp":1687419752.542,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d4"},{"timeStamp":1687419752.601,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"8","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d5"},{"timeStamp":1687419752.718,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"8","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d6"},{"timeStamp":1687419752.844,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d7"},{"timeStamp":1687419752.961,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d8"},{"timeStamp":1687419753.242,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"9","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8d9"},{"timeStamp":1687419753.288,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"9","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8da"},{"timeStamp":1687419753.684,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8db"},{"timeStamp":1687419753.762,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8dc"},{"timeStamp":1687419753.902,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8dd"},{"timeStamp":1687419753.956,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8de"},{"timeStamp":1687419754.573,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"0","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8df"},{"timeStamp":1687419754.643,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"0","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e0"},{"timeStamp":1687419754.812,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e1"},{"timeStamp":1687419754.904,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e2"},{"timeStamp":1687419755.018,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e3"},{"timeStamp":1687419755.088,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e4"},{"timeStamp":1687419755.107,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e5"},{"timeStamp":1687419755.177,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e6"},{"timeStamp":1687419755.279,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e7"},{"timeStamp":1687419755.365,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e8"},{"timeStamp":1687419755.431,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8e9"},{"timeStamp":1687419755.501,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ea"},{"timeStamp":1687419755.684,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8eb"},{"timeStamp":1687419755.748,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ec"},{"timeStamp":1687419755.848,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ed"},{"timeStamp":1687419755.973,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"2","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ee"},{"timeStamp":1687419756.01,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ef"},{"timeStamp":1687419756.073,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"2","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f0"},{"timeStamp":1687419756.155,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f1"},{"timeStamp":1687419756.233,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f2"},{"timeStamp":1687419756.339,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f3"},{"timeStamp":1687419756.424,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f4"},{"timeStamp":1687419756.448,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f5"},{"timeStamp":1687419756.642,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"3","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f6"},{"timeStamp":1687419756.643,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f7"},{"timeStamp":1687419756.765,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"3","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f8"},{"timeStamp":1687419756.857,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8f9"},{"timeStamp":1687419756.938,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8fa"},{"timeStamp":1687419757.214,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8fb"},{"timeStamp":1687419757.317,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8fc"},{"timeStamp":1687419757.378,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8fd"},{"timeStamp":1687419757.457,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"4","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8fe"},{"timeStamp":1687419757.493,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac8ff"},{"timeStamp":1687419757.558,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"4","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac900"},{"timeStamp":1687419757.633,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac901"},{"timeStamp":1687419757.728,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac902"},{"timeStamp":1687419757.826,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac903"},{"timeStamp":1687419757.92,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac904"},{"timeStamp":1687419757.98,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac905"},{"timeStamp":1687419758.121,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac906"},{"timeStamp":1687419758.195,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"5","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac907"},{"timeStamp":1687419758.282,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"5","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac908"},{"timeStamp":1687419758.372,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac909"},{"timeStamp":1687419758.474,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac90a"},{"timeStamp":1687419758.577,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac90b"},{"timeStamp":1687419758.69,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"Backspace","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac90c"},{"timeStamp":1687419758.727,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac90d"},{"timeStamp":1687419758.881,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"1","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac90e"},{"timeStamp":1687419758.953,"name":"USER_EVENT","type":"KEYDOWN","data":{"X":624,"Y":225,"key":"6","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac90f"},{"timeStamp":1687419759.031,"name":"USER_EVENT","type":"KEYUP","data":{"X":624,"Y":225,"key":"6","HTMLElement":"<input>"},"_id":"6493fb7052172c7c1bbac910"}]    

    
    function isClickPresentAhead(events, i) {
    for (let j = i; j < events.length; j++) {
        if (events[j].name === "USER_EVENT") {
        if (events[j].type === "CLICK") {
            return true;
        } else if (events[j].type === "MOUSEUP" || events[j].type === "KEYDOWN") {
            return false;
        }
        }
    }
    return false;
    }

    function filterEvents(events) {
    // Make this more efficient
    let i = 0,
        filteredEvents = [];
    while (i < events.length) {
        if (
        events[i].name === "USER_EVENT" &&
        events[i].type === "MOUSEDOWN" &&
        isClickPresentAhead(events, i + 1)
        ) {
        // Ignore this mousedown event
        i++;
        continue;
        }
        filteredEvents.push(events[i]);
        i++;
    }

    return filteredEvents;
    }
    
    function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function wait(seconds) {
    const milliseconds = seconds * 1000;
    await delay(milliseconds);
    }

    const timeStampToSeconds = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.getTime() / 1000;
    };

    async function start() {
    events = filterEvents(events);

    const browser = await puppeteer.launch({
        headless: false,
        args: ["--start-maximized"],
        ignoreDefaultArgs: ["--enable-automation"],
        defaultViewport: null,
        ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    const context = browser.defaultBrowserContext();
    await context.overridePermissions("http://localhost:3001/?session-replay=true", ["geolocation"]);

    await installMouseHelper(page);

    await page.setViewport({
        width: 1280,
        height: 681,
        hasTouch: true, // Enable touch events if needed
    });

    await page.goto("http://localhost:3001/?session-replay=true", { waitUntil: "networkidle0" });

//     await page.evaluate(() => {
//     const pre = document.createElement("pre");
//     pre.id = "id-abc_user/p79dsy19-5jxb-5mpb-odm3-uk22cq5dtmx3";
//     pre.style.fontSize = "0.75rem";
//     pre.style.pointerEvents = "none";
//     pre.style.position = "fixed";
//     pre.style.backgroundColor = "black";
//     pre.style.borderRadius = "0.2em";
//     pre.style.padding = "0.2em";
//     pre.style.color = "white";
//     pre.style.zIndex = "999";
//     pre.style.top = "0em";
//     pre.style.right = "0em";
//     pre.style.opacity = "0.5";
//     document.body.appendChild(pre);
//   });

//     const updateTimer = () => {
//         let seconds = 0;

//         setInterval(() => {
//         seconds++;
//         page.evaluate((time) => {
//             const pre = document.getElementById("id-abc_user/p79dsy19-5jxb-5mpb-odm3-uk22cq5dtmx3");
//             pre.textContent =
//             "Session : abc_user/p79dsy19-5jxb-5mpb-odm3-uk22cq5dtmx3 \n"  + 
//             "Elapsed : " +
//             time;
//         }, seconds);
//         }, 1000);
//     };

//     // Start the timer
//     updateTimer();

    await page.addStyleTag({
    content: "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 16px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}"
    });

    let prevTimeStamp = events[0].timeStamp;
    let lastClickX, lastClickY, lastClickScrollX, lastClickScrollY;
    for (let event of events) {
        try {
            if (event.name === "USER_EVENT") {
                let scrollX = event.data.scrollX,
                scrollY = event.data.scrollY;
                let X = event.data.X,
                Y = event.data.Y;
                const delay = event.timeStamp - prevTimeStamp;

                let key = "",
                value,
                htmlElement,
                checked,
                button;
                if (event.type.includes("KEY")) {
                key = event.data.key;
                }
                if (event.type.includes("CLICK")) {
                button = event.data.button;
                }
                if (event.type.includes("ON_CHANGE")) {
                value = event.data.value;
                htmlElement = event.data.HTMLElement;
                checked = event.data.checked;
                }

                await wait(delay);

                switch (event.type) {
                case "CLICK":
                    await page.evaluate(
                    async (scrollX, scrollY) => {
                        await new Promise((resolve) => {
                        window.scrollTo(scrollX, scrollY);
                        resolve();
                        });
                    },
                    scrollX,
                    scrollY
                    );
                    let options = {};
                    if (button === 0) {
                    options.button = "left";
                    } else if (button === 2) {
                    options.button = "right";
                    } else {
                    options.button = "middle";
                    }
                    //await page.mouse.up();
                    lastClickX = X;
                    lastClickY = Y;
                    lastClickScrollX = scrollX;
                    lastClickScrollY = scrollY;
                    await page.mouse.click(X - scrollX, Y - scrollY);
                    break;
                case "IDLE":
                    await page.evaluate(
                    async (scrollX, scrollY) => {
                        await new Promise((resolve) => {
                        window.scrollTo(scrollX, scrollY);
                        resolve();
                        });
                    },
                    scrollX,
                    scrollY
                    );

                    await page.mouse.move(X - scrollX, Y - scrollY);
                    break;
                case "KEYDOWN":
                    await page.keyboard.down(event.data.key);
                    break;
                case "KEYUP":
                    await page.keyboard.up(event.data.key);
                    break;
                case "MOUSEDOWN":
                    await page.evaluate(
                    async (scrollX, scrollY) => {
                        await new Promise((resolve) => {
                        window.scrollTo(scrollX, scrollY);
                        resolve();
                        });
                    },
                    scrollX,
                    scrollY
                    );

                    await page.mouse.move(X - scrollX, Y - scrollY);
                    await page.mouse.down();
                    break;
                case "MOUSEUP":
                    await page.evaluate(
                    async (scrollX, scrollY) => {
                        await new Promise((resolve) => {
                        window.scrollTo(scrollX, scrollY);
                        resolve();
                        });
                    },
                    scrollX,
                    scrollY
                    );

                    await page.mouse.move(X - scrollX, Y - scrollY);
                    await page.mouse.up();

                    break;
                case "CONTEXTMENU":
                    await page.evaluate(
                    async (scrollX, scrollY) => {
                        await new Promise((resolve) => {
                        window.scrollTo(scrollX, scrollY);
                        resolve();
                        });
                    },
                    scrollX,
                    scrollY
                    );

                    //await page.mouse.up();
                    await page.mouse.click(X - scrollX, Y - scrollY, {
                    button: "right",
                    });
                    break;
                case "ON_CHANGE":
                    await page.evaluate(
                    async (
                        lastClickScrollX,
                        lastClickScrollY,
                        lastClickX,
                        lastClickY,
                        value,
                        checked,
                        htmlElement
                    ) => {
                        await new Promise((resolve) => {
                        window.scrollTo(lastClickScrollX, lastClickScrollY);
                        document.elementFromPoint(
                            lastClickX - lastClickScrollX,
                            lastClickY - lastClickScrollY
                        ).value = value;

                        document.elementFromPoint(
                            lastClickX - lastClickScrollX,
                            lastClickY - lastClickScrollY
                        ).checked = checked;

                        document
                            .elementFromPoint(
                            lastClickX - lastClickScrollX,
                            lastClickY - lastClickScrollY
                            )
                            .dispatchEvent(new Event("change", { bubbles: true }));
                        resolve();
                });
                    },
                    lastClickScrollX,
                    lastClickScrollY,
                    lastClickX,
                    lastClickY,
                    value,
                    checked,
                    htmlElement
                    );

                    break;
                }
            }
            else if (event.name === "PAGE_EVENT") {
                if (prevTimeStamp === event.timeStamp) continue;
                const delay = event.timeStamp - prevTimeStamp;
                console.log("delay ", delay);
                await wait(delay);
                const newURL = event.data.URL;
                await page.goto(newURL + "?session-replay=true", {
                waitUntil: "networkidle0",
                });
            }
            prevTimeStamp = event.timeStamp;
            } catch (e) {
            console.log("Exception executing event ", event);
            console.log("Exception : ", e);
            }
    }

    await browser.close();
    }

    start();
    