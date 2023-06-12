from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
from time import sleep

# Create Firefox profile
profile = webdriver.FirefoxProfile()

# Enable location access
profile.set_preference("geo.enabled", True)
profile.set_preference("geo.prompt.testing", True)
profile.set_preference("geo.prompt.testing.allow", True)

driver = webdriver.Firefox(
    executable_path=r"C:\Users\vsambann\OneDrive - Cisco\Desktop\Personal\proj\project\selenium_automation\geckodriver.exe",
    firefox_profile=profile,
)


def displayCursor(driver, x, y):
    driver.execute_script(
        """
    var dot = document.createElement("div");
    dot.style.position = "absolute";
    dot.style.left = arguments[0] + "px";
    dot.style.top = arguments[1] + "px";
    dot.style.width = "20px";
    dot.style.height = "20px";
    dot.style.background = "black";
    dot.style.borderRadius = "50%";
    dot.style.opacity = "50%";
    document.body.appendChild(dot);
    setTimeout(function() {
        dot.remove();
    }, 400);
    """,
        x,
        y,
    )


def set_viewport_size(driver, width, height):
    window_size = driver.execute_script(
        """
        return [window.outerWidth - window.innerWidth + arguments[0],
          window.outerHeight - window.innerHeight + arguments[1]];
        """,
        width,
        height,
    )
    driver.set_window_size(*window_size)


events = [
    {
        "timeStamp": 0,
        "name": "PAGE_EVENT",
        "type": "RELOAD",
        "data": {"URL": "http://localhost:3000/", "DOMLoadTime": 0.0945},
        "_id": "64818f734188c262924008c4",
    },
    {
        "timeStamp": 4,
        "name": "USER_EVENT",
        "type": "CLICK",
        "data": {
            "X": 565,
            "Y": 852,
            "scrollX": 0,
            "scrollY": 269,
            "HTMLElement": "<input>",
            "button": 0,
        },
        "_id": "64818f734188c262924008c5",
    },
]

driver.maximize_window()

driver.get("http://localhost:3000/")

prevTimeStamp = events[0]["timeStamp"]

for event in events:
    if event["name"] == "USER_EVENT":
        scrollX = event["data"]["scrollX"]
        scrollY = event["data"]["scrollY"]
        X = event["data"]["X"]
        Y = event["data"]["Y"]
        delay = event["timeStamp"] - prevTimeStamp

        key = ""
        button = ""

        if "KEY" in event["type"]:
            key = event["data"]["key"]

        if "CLICK" in event["type"]:
            button = event["data"]["button"]
        print("delay sleep ", delay)
        sleep(delay)

        if event["type"] == "CLICK":
            print("click")
            driver.execute_script(f"window.scrollTo({scrollX}, {scrollY})")
            displayCursor(driver, X, Y)
            driver.execute_script(
                f"document.elementFromPoint({X}-{scrollX}, {Y}-{scrollY}).click()"
            )

        elif event["type"] == "IDLE":
            print("idle")

        elif event["type"] == "KEYDOWN":
            print("keydown")

        elif event["type"] == "KEYUP":
            print("keyup")

        elif event["type"] == "MOUSE_DRAG":
            print("mouse_drag")

# driver.execute_script("window.scrollTo(0, 269)")
# displayCursor(driver, 601, 842)
# driver.execute_script("document.elementFromPoint(601-0, 842-269).click()")
sleep(2)

driver.execute_script("window.scrollTo(0,0)")
# action_chains = ActionChains(driver)
# driver.execute_script("window.scrollTo(0, 269)")
# action_chains.move_by_offset(565 - 0, 852 - 269).click().perform()
# current_mouse_position = action_chains.move_by_offset(0, 0).perform().location
# print(current_mouse_position["x"], " ", current_mouse_position["y"])
# sleep(2)
# driver.execute_script("window.scrollTo(0, 269)")
# action_chains.move_by_offset(568 - 0, 529 - 269).click().perform()
# print(current_mouse_position["x"], " ", current_mouse_position["y"])
sleep(200)
driver.close()
