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
        styleElement.innerHTML = `
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
            }`;
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

let events = [
  {
    timeStamp: 1687398322.788,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6493a7f852172c7c1bba49c2",
  },
  {
    timeStamp: 1687398322.959,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "t1blsyji-mr3q-nool-fis0-rqh70mmkda9k",
    },
    _id: "6493a7f852172c7c1bba49c3",
  },
  {
    timeStamp: 1687398323.691,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 732,
      id: "t1blsyji-mr3q-nool-fis0-rqh70mmkda9k",
    },
    _id: "6493a7f852172c7c1bba49c4",
  },
  {
    timeStamp: 1687398323.691,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15463:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14848:14)",
    },
    _id: "6493a7f852172c7c1bba49c5",
  },
  {
    timeStamp: 1687398323.723,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 394,
      Y: 115,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 613px; width: 719px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 655px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 705px; width: 64px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 64px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "6493a7f852172c7c1bba49c6",
  },
  {
    timeStamp: 1687398323.889,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 394,
      Y: 115,
      key: "Shift",
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 613px; width: 719px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 655px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 705px; width: 64px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 64px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "6493a7f852172c7c1bba49c7",
  },
  {
    timeStamp: 1687398323.947,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 394,
      Y: 115,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 613px; width: 719px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 655px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 705px; width: 64px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 64px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba49c8",
  },
  {
    timeStamp: 1687398324.136,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 394,
      Y: 115,
      key: "Shift",
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 613px; width: 719px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 655px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 705px; width: 64px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 64px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "6493a7f852172c7c1bba49c9",
  },
  {
    timeStamp: 1687398324.655,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 394,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 613px; width: 719px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 655px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 705px; width: 64px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 64px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "6493a7f852172c7c1bba49ca",
  },
  {
    timeStamp: 1687398324.88,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 394,
      Y: 119,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 64px; height: 613px; width: 719px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; width: 655px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 0px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 64px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 705px; width: 64px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="96" height="919" style="position: absolute; left: 0px; width: 64px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 64px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 14px; line-height: 19px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 11.2px;">Enter to Rename, Shift+Enter to Preview</div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba49cb",
  },
  {
    timeStamp: 1687398325.253,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 397,
      Y: 129,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49cc",
  },
  {
    timeStamp: 1687398325.386,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49cd",
  },
  {
    timeStamp: 1687398325.464,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 397,
      Y: 129,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba49ce",
  },
  {
    timeStamp: 1687398325.568,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "T",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49cf",
  },
  {
    timeStamp: 1687398325.636,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">T</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d0",
  },
  {
    timeStamp: 1687398325.686,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">T</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d1",
  },
  {
    timeStamp: 1687398325.785,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">T</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d2",
  },
  {
    timeStamp: 1687398325.855,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tr</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d3",
  },
  {
    timeStamp: 1687398325.87,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "u",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tr</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d4",
  },
  {
    timeStamp: 1687398325.915,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "u",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tru</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d5",
  },
  {
    timeStamp: 1687398326.201,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tr</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d6",
  },
  {
    timeStamp: 1687398326.309,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "y",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tr</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d7",
  },
  {
    timeStamp: 1687398326.386,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "y",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Try</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d8",
  },
  {
    timeStamp: 1687398326.492,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Try</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49d9",
  },
  {
    timeStamp: 1687398326.578,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tryi</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49da",
  },
  {
    timeStamp: 1687398326.624,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tryin</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49db",
  },
  {
    timeStamp: 1687398326.629,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Tryin</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49dc",
  },
  {
    timeStamp: 1687398326.661,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49dd",
  },
  {
    timeStamp: 1687398326.677,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49de",
  },
  {
    timeStamp: 1687398326.705,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49df",
  },
  {
    timeStamp: 1687398326.785,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e0",
  },
  {
    timeStamp: 1687398326.785,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e1",
  },
  {
    timeStamp: 1687398326.897,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;a</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e2",
  },
  {
    timeStamp: 1687398326.901,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;a</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e3",
  },
  {
    timeStamp: 1687398327.006,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;ag</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e4",
  },
  {
    timeStamp: 1687398327.009,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "g",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;ag</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e5",
  },
  {
    timeStamp: 1687398327.009,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;ag</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e6",
  },
  {
    timeStamp: 1687398327.037,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;agia</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e7",
  },
  {
    timeStamp: 1687398327.068,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;agian</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e8",
  },
  {
    timeStamp: 1687398327.096,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "a",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;agian</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49e9",
  },
  {
    timeStamp: 1687398327.121,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: "n",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;agian</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49ea",
  },
  {
    timeStamp: 1687398327.355,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 397,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;agian</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49eb",
  },
  {
    timeStamp: 1687398327.496,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 397,
      Y: 129,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">Trying&nbsp;agian&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba49ec",
  },
  {
    timeStamp: 1687398328.81,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6493a7f852172c7c1bba49ed",
  },
  {
    timeStamp: 1687398328.837,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "e6ev7jef-8cp3-5cen-126v-89t1ta2eeckl",
    },
    _id: "6493a7f852172c7c1bba49ee",
  },
  {
    timeStamp: 1687398329.372,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 535,
      id: "e6ev7jef-8cp3-5cen-126v-89t1ta2eeckl",
    },
    _id: "6493a7f852172c7c1bba49ef",
  },
  {
    timeStamp: 1687398329.372,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15463:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14848:14)",
    },
    _id: "6493a7f852172c7c1bba49f0",
  },
  {
    timeStamp: 1687398330.14,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 994,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba49f1",
  },
  {
    timeStamp: 1687398330.206,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 994,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba49f2",
  },
  {
    timeStamp: 1687398330.232,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/sketch", DOMLoadTime: 0 },
    _id: "6493a7f852172c7c1bba49f3",
  },
  {
    timeStamp: 1687398331.265,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 56,
      Y: 135,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.07125 10.3053C3.18066 10.3053 2.4173 10.3053 1.65394 10.3053C0.763359 10.3053 0.254453 9.79644 0.254453 8.77863C0.254453 6.36132 0.254453 3.94402 0.254453 1.39949C0.254453 0.508906 0.763359 0 1.65394 0C4.19847 0 6.61578 0 9.16031 0C10.0509 0 10.5598 0.508906 10.5598 1.39949C10.5598 2.16285 10.5598 2.92621 10.5598 3.68957V3.81679C20.3562 3.81679 30.1527 3.81679 39.9491 3.81679C39.9491 3.05344 39.9491 2.29008 39.9491 1.52672C39.9491 0.508906 40.458 0 41.4758 0C43.8931 0 46.3104 0 48.7277 0C49.7455 0 50.2545 0.508906 50.2545 1.52672C50.2545 3.94402 50.2545 6.36132 50.2545 8.77863C50.2545 9.79644 49.7455 10.3053 48.7277 10.3053C47.9644 10.3053 47.201 10.3053 46.4377 10.3053C46.4377 20.1018 46.4377 29.8982 46.4377 39.8219C47.201 39.8219 47.9644 39.8219 48.7277 39.8219C49.7455 39.8219 50.2545 40.3308 50.2545 41.3486C50.2545 43.7659 50.2545 46.056 50.2545 48.4733C50.2545 49.6183 49.7455 50 48.6005 50C46.1832 50 43.8931 50 41.4758 50C40.3308 50 39.9491 49.4911 39.8219 48.4733C39.8219 47.7099 39.8219 47.0738 39.8219 46.3104C30.0254 46.3104 20.229 46.3104 10.3053 46.3104C10.3053 47.0738 10.3053 47.8372 10.3053 48.6005C10.3053 49.6183 9.79644 50.1272 8.77863 50.1272C6.36132 50.1272 3.94402 50.1272 1.52672 50.1272C0.508906 50.1272 0 49.6183 0 48.6005C0 46.1832 0 43.7659 0 41.3486C0 40.3308 0.508906 39.8219 1.52672 39.8219C2.29008 39.8219 2.92621 39.8219 3.68957 39.8219H3.81679C4.07125 29.8982 4.07125 20.1018 4.07125 10.3053ZM10.5598 43.6387C20.3562 43.6387 30.1527 43.6387 40.0763 43.6387C40.0763 43.1298 40.0763 42.6209 40.0763 42.112C39.9491 40.2036 40.458 39.6947 42.3664 39.8219C42.8753 39.8219 43.3842 39.8219 44.0204 39.8219C44.0204 29.8982 44.0204 20.1018 44.0204 10.3053C43.257 10.3053 42.4936 10.3053 41.7303 10.3053C40.7125 10.3053 40.2036 9.79644 40.2036 8.77863C40.2036 8.01527 40.2036 7.25191 40.2036 6.48855C30.2799 6.48855 20.4835 6.48855 10.687 6.48855C10.687 6.99746 10.687 7.50636 10.687 8.01527C10.8142 9.79644 10.3053 10.4326 8.39695 10.3053C7.88804 10.3053 7.37913 10.3053 6.87023 10.3053C6.87023 20.229 6.87023 30.0254 6.87023 39.6947C6.99745 39.6947 6.99746 39.6947 6.99746 39.6947C7.63359 39.6947 8.26972 39.6947 9.03308 39.6947C10.3053 39.6947 10.687 40.0763 10.687 41.3486C10.5598 42.112 10.5598 42.8753 10.5598 43.6387Z" fill="#5B5858"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba49f4",
  },
  {
    timeStamp: 1687398331.341,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 56,
      Y: 135,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.07125 10.3053C3.18066 10.3053 2.4173 10.3053 1.65394 10.3053C0.763359 10.3053 0.254453 9.79644 0.254453 8.77863C0.254453 6.36132 0.254453 3.94402 0.254453 1.39949C0.254453 0.508906 0.763359 0 1.65394 0C4.19847 0 6.61578 0 9.16031 0C10.0509 0 10.5598 0.508906 10.5598 1.39949C10.5598 2.16285 10.5598 2.92621 10.5598 3.68957V3.81679C20.3562 3.81679 30.1527 3.81679 39.9491 3.81679C39.9491 3.05344 39.9491 2.29008 39.9491 1.52672C39.9491 0.508906 40.458 0 41.4758 0C43.8931 0 46.3104 0 48.7277 0C49.7455 0 50.2545 0.508906 50.2545 1.52672C50.2545 3.94402 50.2545 6.36132 50.2545 8.77863C50.2545 9.79644 49.7455 10.3053 48.7277 10.3053C47.9644 10.3053 47.201 10.3053 46.4377 10.3053C46.4377 20.1018 46.4377 29.8982 46.4377 39.8219C47.201 39.8219 47.9644 39.8219 48.7277 39.8219C49.7455 39.8219 50.2545 40.3308 50.2545 41.3486C50.2545 43.7659 50.2545 46.056 50.2545 48.4733C50.2545 49.6183 49.7455 50 48.6005 50C46.1832 50 43.8931 50 41.4758 50C40.3308 50 39.9491 49.4911 39.8219 48.4733C39.8219 47.7099 39.8219 47.0738 39.8219 46.3104C30.0254 46.3104 20.229 46.3104 10.3053 46.3104C10.3053 47.0738 10.3053 47.8372 10.3053 48.6005C10.3053 49.6183 9.79644 50.1272 8.77863 50.1272C6.36132 50.1272 3.94402 50.1272 1.52672 50.1272C0.508906 50.1272 0 49.6183 0 48.6005C0 46.1832 0 43.7659 0 41.3486C0 40.3308 0.508906 39.8219 1.52672 39.8219C2.29008 39.8219 2.92621 39.8219 3.68957 39.8219H3.81679C4.07125 29.8982 4.07125 20.1018 4.07125 10.3053ZM10.5598 43.6387C20.3562 43.6387 30.1527 43.6387 40.0763 43.6387C40.0763 43.1298 40.0763 42.6209 40.0763 42.112C39.9491 40.2036 40.458 39.6947 42.3664 39.8219C42.8753 39.8219 43.3842 39.8219 44.0204 39.8219C44.0204 29.8982 44.0204 20.1018 44.0204 10.3053C43.257 10.3053 42.4936 10.3053 41.7303 10.3053C40.7125 10.3053 40.2036 9.79644 40.2036 8.77863C40.2036 8.01527 40.2036 7.25191 40.2036 6.48855C30.2799 6.48855 20.4835 6.48855 10.687 6.48855C10.687 6.99746 10.687 7.50636 10.687 8.01527C10.8142 9.79644 10.3053 10.4326 8.39695 10.3053C7.88804 10.3053 7.37913 10.3053 6.87023 10.3053C6.87023 20.229 6.87023 30.0254 6.87023 39.6947C6.99745 39.6947 6.99746 39.6947 6.99746 39.6947C7.63359 39.6947 8.26972 39.6947 9.03308 39.6947C10.3053 39.6947 10.687 40.0763 10.687 41.3486C10.5598 42.112 10.5598 42.8753 10.5598 43.6387Z" fill="black"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba49f5",
  },
  {
    timeStamp: 1687398331.837,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 198,
      Y: 105,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba49f6",
  },
  {
    timeStamp: 1687398332.203,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 636,
      Y: 486,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba49f7",
  },
  {
    timeStamp: 1687398333.01,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 80,
      Y: 242,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="rectangle" data-toggle="tooltip" data-placement="top" title="Rectangle" style="border: none; width: 73.5px; height: 61.29px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "6493a7f852172c7c1bba49f8",
  },
  {
    timeStamp: 1687398333.105,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 78,
      Y: 243,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<button id="rectangle" data-toggle="tooltip" data-placement="top" title="Rectangle" style="border: none; width: 73.5px; height: 61.29px; background: none; border-radius: 0.1%; outline: none; padding: 0.5%;"><svg width="35%" height="35%" viewBox="0 0 53 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#5B5858"></path></svg></button>',
    },
    _id: "6493a7f852172c7c1bba49f9",
  },
  {
    timeStamp: 1687398333.573,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 201,
      Y: 111,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba49fa",
  },
  {
    timeStamp: 1687398333.884,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 473,
      Y: 445,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba49fb",
  },
  {
    timeStamp: 1687398334.555,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 51,
      Y: 254,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#000"></path>',
    },
    _id: "6493a7f852172c7c1bba49fc",
  },
  {
    timeStamp: 1687398334.639,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 51,
      Y: 254,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.6 0C34.3 0 42 0 49.7 0C53 0 53 0.0999999 53 3.5C53 14.7 53 25.8 53 37C53 39.4 52.6 39.8 50.2 39.8C34.4 39.8 18.6 39.8 2.8 39.8C0.5 39.8 0 39.4 0 37.1C0 25.6 0 14.1 0 2.7C0 0.3 0.3 0 2.8 0C10.7 0 18.6 0 26.6 0Z" fill="#000"></path>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba49fd",
  },
  {
    timeStamp: 1687398335.122,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 365,
      Y: 127,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba49fe",
  },
  {
    timeStamp: 1687398335.386,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 539,
      Y: 437,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba49ff",
  },
  {
    timeStamp: 1687398336.287,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 426,
      Y: 53,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a00",
  },
  {
    timeStamp: 1687398336.653,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 725,
      Y: 613,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a01",
  },
  {
    timeStamp: 1687398337.262,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 615,
      Y: 15,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a02",
  },
  {
    timeStamp: 1687398338.454,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1066,
      Y: 671,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a03",
  },
  {
    timeStamp: 1687398339.375,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 780,
      Y: 56,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4a04",
  },
  {
    timeStamp: 1687398339.453,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 780,
      Y: 57,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4a05",
  },
  {
    timeStamp: 1687398340.357,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 58,
      Y: 303,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "6493a7f852172c7c1bba4a06",
  },
  {
    timeStamp: 1687398340.404,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 59,
      Y: 303,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<path d="M26.9 53.9C11.9 53.9 0 41.9 0 26.8C0 12.1 12.1 0 26.9 0C41.8 0 53.9 12.1 53.9 27.1C53.8 41.9 41.8 53.9 26.9 53.9Z" fill="#5B5858"></path>',
    },
    _id: "6493a7f852172c7c1bba4a07",
  },
  {
    timeStamp: 1687398340.717,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 588,
      Y: 209,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a08",
  },
  {
    timeStamp: 1687398341.051,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 954,
      Y: 435,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a09",
  },
  {
    timeStamp: 1687398342.072,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 66,
      Y: 364,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#5B5858"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4a0a",
  },
  {
    timeStamp: 1687398342.18,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 66,
      Y: 364,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 54 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2822 52.8C18.3822 52.8 10.5822 52.8 2.68223 52.8C-0.117766 52.8 -0.617766 51.9 0.682234 49.4C8.58223 33.5 16.4822 17.6 24.4822 1.7C24.8822 1 25.7822 0 26.4822 0C27.1822 0 28.0822 1 28.4822 1.7C36.4822 17.6 44.3822 33.4 52.3822 49.3C53.6822 51.8 53.0822 52.7 50.3822 52.7C42.2822 52.8 34.2822 52.8 26.2822 52.8Z" fill="#000"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a0b",
  },
  {
    timeStamp: 1687398342.556,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 370,
      Y: 101,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a0c",
  },
  {
    timeStamp: 1687398346.96,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 804,
      Y: 597,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a0d",
  },
  {
    timeStamp: 1687398347.211,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 803,
      Y: 279,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a0e",
  },
  {
    timeStamp: 1687398347.251,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 803,
      Y: 279,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a0f",
  },
  {
    timeStamp: 1687398347.879,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 779,
      Y: 64,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4a10",
  },
  {
    timeStamp: 1687398347.942,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 779,
      Y: 64,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg width="40%" height="40%" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.9948 13.2048C37.906 14.578 37.906 15.768 37.8171 17.0497C37.7283 18.1482 37.0174 18.8806 36.04 18.8806C35.0627 18.8806 34.263 18.0567 34.263 17.0497C34.3518 14.1202 34.4407 11.2823 34.6184 8.35291C34.7072 7.25438 35.5958 6.52202 36.5732 6.61356C39.2388 6.97974 41.8155 7.34592 44.4811 7.7121C45.4585 7.89519 46.0804 8.71909 45.9916 9.63454C45.9027 10.6415 45.1031 11.3739 44.1257 11.2823C43.5925 11.2823 43.0594 11.1908 42.5263 11.0993C41.9932 11.0077 41.4601 11.0077 40.8381 10.9162C41.1047 11.2823 41.2824 11.6485 41.5489 11.9232C44.3034 16.6835 45.4585 21.7185 44.5699 27.2111C43.4148 34.7178 39.5053 40.3021 33.019 43.8723C29.5538 45.7947 25.8219 46.6186 21.9124 46.344C17.0255 46.0694 12.6717 44.33 8.93986 41.126C4.85262 37.8303 2.36474 33.4362 1.38735 28.0351C0.232265 21.3523 1.65391 15.3103 5.74115 10.0007C9.38413 5.24039 14.1822 2.4025 20.0465 1.5786C21.0239 1.48705 21.9124 1.39551 22.8898 1.39551C23.8672 1.39551 24.6669 2.12787 24.6669 3.04331C24.7557 4.05031 24.1337 4.87421 23.0675 4.96576C21.8236 5.14885 20.5796 5.14885 19.3357 5.42348C14.1822 6.43047 10.1838 9.26836 7.34051 13.8456C2.809 21.1692 3.78639 30.7814 9.56184 37.0064C12.6717 40.3936 16.4924 42.316 20.935 42.7738C30.2646 43.7808 38.8833 37.3726 40.7493 27.9435C41.8155 22.817 40.927 17.9651 38.1725 13.571C38.0837 13.4794 38.0837 13.3879 37.9948 13.2963C38.0837 13.2963 38.0837 13.2963 37.9948 13.2048Z" fill="#5B5858" stroke="#5B5858" stroke-miterlimit="10"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a11",
  },
  {
    timeStamp: 1687398350.463,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 22,
      Y: 0,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<canvas id="canvas" class="App" width="1225" height="681" style="cursor: default;">Canvas</canvas>',
    },
    _id: "6493a7f852172c7c1bba4a12",
  },
  {
    timeStamp: 1687398351.84,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "http://localhost:3002/", DOMLoadTime: 0 },
    _id: "6493a7f852172c7c1bba4a13",
  },
  {
    timeStamp: 1687398351.865,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/69",
      method: "GET",
      id: "yk7q5jrm-knn2-65du-fls4-6pkglezjak95",
    },
    _id: "6493a7f852172c7c1bba4a14",
  },
  {
    timeStamp: 1687398352.377,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 512,
      id: "yk7q5jrm-knn2-65du-fls4-6pkglezjak95",
    },
    _id: "6493a7f852172c7c1bba4a15",
  },
  {
    timeStamp: 1687398352.377,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15463:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14848:14)",
    },
    _id: "6493a7f852172c7c1bba4a16",
  },
  {
    timeStamp: 1687398352.681,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 294,
      Y: 151,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a17",
  },
  {
    timeStamp: 1687398352.762,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 294,
      Y: 151,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a18",
  },
  {
    timeStamp: 1687398353.687,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 266,
      Y: 138,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a19",
  },
  {
    timeStamp: 1687398353.782,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 266,
      Y: 138,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a1a",
  },
  {
    timeStamp: 1687398353.911,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a1b",
  },
  {
    timeStamp: 1687398354.196,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "W",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a1c",
  },
  {
    timeStamp: 1687398354.257,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a1d",
  },
  {
    timeStamp: 1687398354.257,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">W</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a1e",
  },
  {
    timeStamp: 1687398354.688,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "Backspace",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a1f",
  },
  {
    timeStamp: 1687398354.782,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a20",
  },
  {
    timeStamp: 1687398354.892,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">d</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a21",
  },
  {
    timeStamp: 1687398354.895,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">d</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a22",
  },
  {
    timeStamp: 1687398354.962,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">di</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a23",
  },
  {
    timeStamp: 1687398354.991,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">di</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a24",
  },
  {
    timeStamp: 1687398355.092,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a25",
  },
  {
    timeStamp: 1687398355.095,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "d",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a26",
  },
  {
    timeStamp: 1687398355.181,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a27",
  },
  {
    timeStamp: 1687398355.516,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a28",
  },
  {
    timeStamp: 1687398355.57,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "i",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;i</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a29",
  },
  {
    timeStamp: 1687398355.825,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;i</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a2a",
  },
  {
    timeStamp: 1687398355.886,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a2b",
  },
  {
    timeStamp: 1687398355.889,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "t",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a2c",
  },
  {
    timeStamp: 1687398355.955,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a2d",
  },
  {
    timeStamp: 1687398356.005,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;w</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a2e",
  },
  {
    timeStamp: 1687398356.05,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;w</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a2f",
  },
  {
    timeStamp: 1687398356.079,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "w",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;wo</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a30",
  },
  {
    timeStamp: 1687398356.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "o",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;wo</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a31",
  },
  {
    timeStamp: 1687398356.133,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;wo</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a32",
  },
  {
    timeStamp: 1687398356.241,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;wor</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a33",
  },
  {
    timeStamp: 1687398356.244,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "r",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;wor</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a34",
  },
  {
    timeStamp: 1687398356.281,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "k",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a35",
  },
  {
    timeStamp: 1687398356.355,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a36",
  },
  {
    timeStamp: 1687398356.471,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: " ",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a37",
  },
  {
    timeStamp: 1687398356.595,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a38",
  },
  {
    timeStamp: 1687398356.683,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "Control",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a39",
  },
  {
    timeStamp: 1687398356.882,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a3a",
  },
  {
    timeStamp: 1687398356.99,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a3b",
  },
  {
    timeStamp: 1687398357.057,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a3c",
  },
  {
    timeStamp: 1687398357.213,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 266,
      Y: 138,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span><span class="mtk9">?</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a3d",
  },
  {
    timeStamp: 1687398357.291,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "?",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;??</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a3e",
  },
  {
    timeStamp: 1687398357.461,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 266,
      Y: 138,
      key: "Shift",
      HTMLElement:
        '<div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;??</span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4a3f",
  },
  {
    timeStamp: 1687398358.345,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 720,
      Y: 34,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "6493a7f852172c7c1bba4a40",
  },
  {
    timeStamp: 1687398358.415,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 722,
      Y: 34,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select>',
    },
    _id: "6493a7f852172c7c1bba4a41",
  },
  {
    timeStamp: 1687398359.107,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 706,
      Y: 112,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 75px; height: 613px; width: 708px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;??</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 107px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 172px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 718px; width: 51px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="76" height="919" style="position: absolute; left: 0px; width: 50.6667px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="76" height="919" style="position: absolute; left: 0px; width: 50.6667px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 51px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 14.4px;">Enter to Rename, Shift+Enter to Preview</div></div><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 18px; line-height: 24px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
      value: "18",
    },
    _id: "6493a7f852172c7c1bba4a42",
  },
  {
    timeStamp: 1687398359.107,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 706,
      Y: 19,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="editor"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium download_button css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DownloadForOfflineIcon" style="fill: rgba(255, 255, 255, 0.8);"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1 8V6h2v4h3l-4 4-4-4h3zm6 7H7v-2h10v2z"></path></svg><section style="display: flex; position: relative; text-align: initial; width: 100%; height: 100%;"><div style="width: 100%; --codelens-font-features_ee1f61: &quot;liga&quot; off, &quot;calt&quot; off;" data-keybinding-context="1" data-mode-id="cpp"><div class="monaco-editor no-user-select  showUnused showDeprecated vs-dark" role="code" data-uri="inmemory://model/1" style="width: 783px; height: 613px;"><div data-mprt="3" class="overflow-guard" style="width: 783px; height: 613px;"><div class="margin" role="presentation" aria-hidden="true" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; height: 632px; width: 64px;"><div class="glyph-margin" style="left: 0px; width: 0px; height: 632px;"></div><div class="margin-view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="margin-view-overlays" role="presentation" aria-hidden="true" style="position: absolute; width: 64px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; height: 632px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line current-line-margin-both" style="width:64px; height:19px;"></div><div class="active-line-number line-numbers" style="left:0px;width:38px;">1</div></div><div style="position:absolute;top:19px;width:100%;height:19px;"><div class="line-numbers" style="left:0px;width:38px;">2</div></div></div></div><div class="monaco-scrollable-element editor-scrollable vs-dark" role="presentation" data-mprt="5" style="position: absolute; overflow: hidden; left: 75px; height: 613px; width: 708px;"><div class="lines-content monaco-editor-background" style="position: absolute; overflow: hidden; width: 1e+06px; height: 1e+06px; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; left: 0px;"><div class="view-overlays" role="presentation" aria-hidden="true" style="position: absolute; height: 0px; width: 655px;"><div style="position:absolute;top:0px;width:100%;height:19px;"><div class="current-line" style="width:655px; height:19px;"></div></div><div style="position:absolute;top:19px;width:100%;height:19px;"></div></div><div role="presentation" aria-hidden="true" class="view-rulers"></div><div class="view-zones" role="presentation" aria-hidden="true" style="position: absolute;"></div><div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 632px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;??</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span></span></span></div></div><div data-mprt="1" class="contentWidgets" style="position: absolute; top: 0px;"></div><div role="presentation" aria-hidden="true" class="cursors-layer cursor-line-style cursor-solid"><div class="cursor monaco-mouse-cursor-text " style="height: 19px; top: 0px; left: 107px; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; display: block; visibility: hidden; width: 2px;"></div></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute; width: 641px; height: 12px; left: 0px; bottom: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 12px; transform: translate3d(0px, 0px, 0px); contain: strict; width: 641px;"></div></div><canvas class="decorationsOverviewRuler" aria-hidden="true" width="21" height="919" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; top: 0px; right: 0px; width: 14px; height: 613px;"></canvas><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical fade" style="position: absolute; width: 14px; height: 613px; right: 0px; top: 0px;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 14px; transform: translate3d(0px, 0px, 0px); contain: strict; height: 594px;"></div></div></div><div role="presentation" aria-hidden="true" style="width: 705px;"></div><textarea data-mprt="6" class="inputarea monaco-mouse-cursor-text" wrap="off" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Editor content;Press Alt+F1 for Accessibility Options." tabindex="0" role="textbox" aria-roledescription="editor" aria-multiline="true" aria-haspopup="false" aria-autocomplete="both" style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 14px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 19px; letter-spacing: 0px; top: 0px; left: 172px; width: 1px; height: 1px;"></textarea><div class="monaco-editor-background textAreaCover line-numbers" style="position: absolute; top: 0px; left: 0px; width: 0px; height: 0px;"></div><div data-mprt="4" class="overlayWidgets" style="width: 783px;"><div class="accessibilityHelpWidget" role="dialog" aria-hidden="true" widgetid="editor.contrib.accessibilityHelpWidget" style="display: none; position: absolute;"><div role="document"></div></div><div widgetid="editor.contrib.quickInputWidget" style="position: absolute; top: 0px; right: 50%;"></div></div><div data-mprt="8" class="minimap slider-mouseover" role="presentation" aria-hidden="true" style="position: absolute; left: 718px; width: 51px; height: 613px;"><div class="minimap-shadow-hidden" style="height: 613px;"></div><canvas width="76" height="919" style="position: absolute; left: 0px; width: 50.6667px; height: 612.667px;"></canvas><canvas class="minimap-decorations-layer" width="76" height="919" style="position: absolute; left: 0px; width: 50.6667px; height: 612.667px;"></canvas><div class="minimap-slider" style="position: absolute; transform: translate3d(0px, 0px, 0px); contain: strict; width: 51px; display: block; top: 0px; height: 43px;"><div class="minimap-slider-horizontal" style="position: absolute; left: 0px; width: 64px; top: 0px; height: 43px;"></div></div></div></div><div data-mprt="2" class="overflowingContentWidgets"><div class="monaco-editor rename-box" widgetid="__renameInputWidget" style="background-color: rgb(37, 37, 38); box-shadow: rgba(0, 0, 0, 0.36) 0px 0px 8px 2px; color: rgb(204, 204, 204); position: absolute; visibility: hidden; max-width: 1225px;"><input class="rename-input" type="text" aria-label="Rename input. Type new name and press Enter to commit." style="font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; background-color: rgb(60, 60, 60); border-width: 0px; border-style: none;"><div class="rename-label" style="font-size: 14.4px;">Enter to Rename, Shift+Enter to Preview</div></div><div class="monaco-hover" tabindex="0" role="tooltip" widgetid="editor.contrib.modesContentHoverWidget" style="position: absolute; visibility: hidden; max-width: 1225px;"><div class="monaco-scrollable-element " role="presentation" style="position: relative; overflow: hidden;"><div class="monaco-hover-content" style="overflow: hidden; font-size: 18px; line-height: 24px; max-height: 250px; max-width: 516.78px;"></div><div role="presentation" aria-hidden="true" class="invisible scrollbar horizontal" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; height: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div role="presentation" aria-hidden="true" class="invisible scrollbar vertical" style="position: absolute;"><div class="slider" style="position: absolute; top: 0px; left: 0px; width: 10px; transform: translate3d(0px, 0px, 0px); contain: strict;"></div></div><div class="shadow"></div><div class="shadow"></div><div class="shadow"></div></div></div></div><div class="context-view" aria-hidden="true" style="display: none;"></div></div></div></section></div>',
    },
    _id: "6493a7f852172c7c1bba4a43",
  },
  {
    timeStamp: 1687398359.439,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 850,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6493a7f852172c7c1bba4a44",
  },
  {
    timeStamp: 1687398359.495,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 850,
      Y: 45,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a45",
  },
  {
    timeStamp: 1687398360.158,
    name: "REQUEST",
    type: "XMLHttpRequest",
    data: {
      resource: "https://hash-ide.herokuapp.com/api/v1/ide/42",
      method: "GET",
      id: "x2jduskm-rtmt-9r06-gxmn-bnuijraoso68",
    },
    _id: "6493a7f852172c7c1bba4a46",
  },
  {
    timeStamp: 1687398360.162,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 850,
      Y: 49,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
      value: "javascript",
    },
    _id: "6493a7f852172c7c1bba4a47",
  },
  {
    timeStamp: 1687398360.162,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 816,
      Y: 19,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select>',
    },
    _id: "6493a7f852172c7c1bba4a48",
  },
  {
    timeStamp: 1687398360.446,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 297,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a49",
  },
  {
    timeStamp: 1687398360.539,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 297,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a4a",
  },
  {
    timeStamp: 1687398360.616,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did&nbsp;it&nbsp;work&nbsp;</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a4b",
  },
  {
    timeStamp: 1687398360.804,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a4c",
  },
  {
    timeStamp: 1687398360.871,
    name: "RESPONSE",
    type: "XMLHttpRequest",
    data: {
      resource: "",
      status: 0,
      responseData: "",
      duration: 713,
      id: "x2jduskm-rtmt-9r06-gxmn-bnuijraoso68",
    },
    _id: "6493a7f852172c7c1bba4a4d",
  },
  {
    timeStamp: 1687398360.871,
    name: "ERROR",
    type: "UNHANDLED_PROMISE_REJECTION",
    data: {
      errorMessage: "Network Error",
      stack:
        "Error: Network Error\n    at createError (http://localhost:3002/static/js/bundle.js:15463:15)\n    at XMLHttpRequest.handleError (http://localhost:3002/static/js/bundle.js:14848:14)",
    },
    _id: "6493a7f852172c7c1bba4a4e",
  },
  {
    timeStamp: 1687398360.89,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "a",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a4f",
  },
  {
    timeStamp: 1687398361.22,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a50",
  },
  {
    timeStamp: 1687398361.732,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a51",
  },
  {
    timeStamp: 1687398361.765,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a52",
  },
  {
    timeStamp: 1687398361.798,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a53",
  },
  {
    timeStamp: 1687398361.832,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a54",
  },
  {
    timeStamp: 1687398361.867,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a55",
  },
  {
    timeStamp: 1687398361.899,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a56",
  },
  {
    timeStamp: 1687398361.933,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a57",
  },
  {
    timeStamp: 1687398361.967,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a58",
  },
  {
    timeStamp: 1687398362.001,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a59",
  },
  {
    timeStamp: 1687398362.035,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a5a",
  },
  {
    timeStamp: 1687398362.072,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a5b",
  },
  {
    timeStamp: 1687398362.103,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a5c",
  },
  {
    timeStamp: 1687398362.136,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a5d",
  },
  {
    timeStamp: 1687398362.144,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "T",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 637px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk1">did</span><span class="mtkw">·</span><span class="mtk1">it</span><span class="mtkw">·</span><span class="mtk1">work</span><span class="mtkw">·</span><span class="mtk9">??</span></span></div><div style="top:24px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a5e",
  },
  {
    timeStamp: 1687398362.196,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">T</span><span>extDecoder</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a5f",
  },
  {
    timeStamp: 1687398362.245,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "t",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">T</span><span>extDecoder</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a60",
  },
  {
    timeStamp: 1687398362.362,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "e",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">T</span><span>extDecoder</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a61",
  },
  {
    timeStamp: 1687398362.463,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "e",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">Te</span><span>xtDecoder</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a62",
  },
  {
    timeStamp: 1687398362.617,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "s",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">Te</span><span>xtDecoder</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a63",
  },
  {
    timeStamp: 1687398362.759,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 297, Y: 177, key: "t", HTMLElement: "<span>tream</span>" },
    _id: "6493a7f852172c7c1bba4a64",
  },
  {
    timeStamp: 1687398362.788,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 297, Y: 177, key: "s", HTMLElement: "<span>ream</span>" },
    _id: "6493a7f852172c7c1bba4a65",
  },
  {
    timeStamp: 1687398362.852,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 297, Y: 177, key: "t", HTMLElement: "<span>ream</span>" },
    _id: "6493a7f852172c7c1bba4a66",
  },
  {
    timeStamp: 1687398363.405,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 297, Y: 177, key: " ", HTMLElement: "<span>ream</span>" },
    _id: "6493a7f852172c7c1bba4a67",
  },
  {
    timeStamp: 1687398363.588,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a68",
  },
  {
    timeStamp: 1687398363.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "s",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a69",
  },
  {
    timeStamp: 1687398363.706,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "u",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">s</span><span>creenLeft</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a6a",
  },
  {
    timeStamp: 1687398363.714,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "s",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">Su</span><span>bmitEvent</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a6b",
  },
  {
    timeStamp: 1687398363.798,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "u",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">Su</span><span>bmitEvent</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a6c",
  },
  {
    timeStamp: 1687398363.798,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "c",
      HTMLElement:
        '<span class="left"><div class="monaco-icon-label"><div class="monaco-icon-label-container"><span class="monaco-icon-name-container"><a class="label-name"><span class="monaco-highlighted-label"><span class="highlight">Su</span><span>bmitEvent</span></span></a></span><span class="monaco-icon-description-container"></span></div></div><span class="signature-label"></span><span class="qualifier-label"></span></span>',
    },
    _id: "6493a7f852172c7c1bba4a6d",
  },
  {
    timeStamp: 1687398363.876,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "c",
      HTMLElement: "<span>rityPolicyViolationEvent</span>",
    },
    _id: "6493a7f852172c7c1bba4a6e",
  },
  {
    timeStamp: 1687398363.972,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "c",
      HTMLElement: "<span>rityPolicyViolationEvent</span>",
    },
    _id: "6493a7f852172c7c1bba4a6f",
  },
  {
    timeStamp: 1687398364.026,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 297, Y: 177, key: "e", HTMLElement: "<span>rityPoli</span>" },
    _id: "6493a7f852172c7c1bba4a70",
  },
  {
    timeStamp: 1687398364.057,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 297, Y: 177, key: "c", HTMLElement: "<span>hed</span>" },
    _id: "6493a7f852172c7c1bba4a71",
  },
  {
    timeStamp: 1687398364.142,
    name: "USER_EVENT",
    type: "KEYUP",
    data: { X: 297, Y: 177, key: "e", HTMLElement: "<span>hed</span>" },
    _id: "6493a7f852172c7c1bba4a72",
  },
  {
    timeStamp: 1687398364.545,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: { X: 297, Y: 177, key: "s", HTMLElement: "<span>hed</span>" },
    _id: "6493a7f852172c7c1bba4a73",
  },
  {
    timeStamp: 1687398364.655,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "s",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;succes</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a74",
  },
  {
    timeStamp: 1687398364.75,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "s",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;succes</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a75",
  },
  {
    timeStamp: 1687398364.869,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "f",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;success</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a76",
  },
  {
    timeStamp: 1687398364.905,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "s",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successf</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a77",
  },
  {
    timeStamp: 1687398364.976,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "f",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successf</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a78",
  },
  {
    timeStamp: 1687398364.992,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "u",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successf</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a79",
  },
  {
    timeStamp: 1687398365.087,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "u",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successfu</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a7a",
  },
  {
    timeStamp: 1687398365.222,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "l",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successfu</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a7b",
  },
  {
    timeStamp: 1687398365.285,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "l",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a7c",
  },
  {
    timeStamp: 1687398365.35,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a7d",
  },
  {
    timeStamp: 1687398365.499,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: " ",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a7e",
  },
  {
    timeStamp: 1687398366.072,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a7f",
  },
  {
    timeStamp: 1687398366.379,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a80",
  },
  {
    timeStamp: 1687398366.425,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a81",
  },
  {
    timeStamp: 1687398366.688,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a82",
  },
  {
    timeStamp: 1687398367.376,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Backspace",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a83",
  },
  {
    timeStamp: 1687398367.879,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a84",
  },
  {
    timeStamp: 1687398367.969,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a85",
  },
  {
    timeStamp: 1687398368.062,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "?",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a86",
  },
  {
    timeStamp: 1687398368.129,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Shift",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a87",
  },
  {
    timeStamp: 1687398368.473,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a88",
  },
  {
    timeStamp: 1687398368.671,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a89",
  },
  {
    timeStamp: 1687398369.178,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "ArrowLeft",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a8a",
  },
  {
    timeStamp: 1687398369.341,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "ArrowLeft",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a8b",
  },
  {
    timeStamp: 1687398369.528,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "ArrowLeft",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a8c",
  },
  {
    timeStamp: 1687398369.778,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Backspace",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successfl&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a8d",
  },
  {
    timeStamp: 1687398370.701,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successfl&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a8e",
  },
  {
    timeStamp: 1687398370.963,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successfl&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a8f",
  },
  {
    timeStamp: 1687398371.36,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successfl&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a90",
  },
  {
    timeStamp: 1687398371.712,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a91",
  },
  {
    timeStamp: 1687398371.713,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "z",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a92",
  },
  {
    timeStamp: 1687398372.244,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "ArrowRight",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a93",
  },
  {
    timeStamp: 1687398372.394,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "ArrowRight",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a94",
  },
  {
    timeStamp: 1687398372.544,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "ArrowRight",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a95",
  },
  {
    timeStamp: 1687398373.005,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtk1">&nbsp;successful&nbsp;</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a96",
  },
  {
    timeStamp: 1687398373.282,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "a",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtkw">·</span><span class="mtk1">successful</span><span class="mtkw">·</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a97",
  },
  {
    timeStamp: 1687398373.317,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Control",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span class="mtk22">Test</span><span class="mtkw">·</span><span class="mtk1">successful</span><span class="mtkw">·</span><span class="mtk9">?</span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a98",
  },
  {
    timeStamp: 1687398373.49,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 297,
      Y: 177,
      key: "Backspace",
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a99",
  },
  {
    timeStamp: 1687398374.089,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 297,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a9a",
  },
  {
    timeStamp: 1687398374.17,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 297,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 657px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a9b",
  },
  {
    timeStamp: 1687398376.194,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 330,
      Y: 2,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "6493a7f852172c7c1bba4a9c",
  },
  {
    timeStamp: 1687398379.942,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1135,
      Y: 37,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4a9d",
  },
  {
    timeStamp: 1687398380.038,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1135,
      Y: 37,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon  moonIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightsStayIcon"><path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4a9e",
  },
  {
    timeStamp: 1687398380.424,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1144,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon  moonIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NightsStayIcon"><path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z"></path><path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4a9f",
  },
  {
    timeStamp: 1687398380.515,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1144,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aa0",
  },
  {
    timeStamp: 1687398380.905,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1174,
      Y: 71,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="subTerminalInput" style="border-bottom: 1px solid white;"><div class="fieldNameInput">Enter Input</div><textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea></div>',
    },
    _id: "6493a7f852172c7c1bba4aa1",
  },
  {
    timeStamp: 1687398380.993,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1176,
      Y: 71,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="subTerminalInput" style="border-bottom: 1px solid white;"><div class="fieldNameInput">Enter Input</div><textarea class="textFieldInput" placeholder="Input Goes Here ..."></textarea></div>',
    },
    _id: "6493a7f852172c7c1bba4aa2",
  },
  {
    timeStamp: 1687398381.139,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aa3",
  },
  {
    timeStamp: 1687398381.223,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aa4",
  },
  {
    timeStamp: 1687398381.427,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aa5",
  },
  {
    timeStamp: 1687398381.504,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aa6",
  },
  {
    timeStamp: 1687398381.603,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aa7",
  },
  {
    timeStamp: 1687398381.687,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aa8",
  },
  {
    timeStamp: 1687398381.765,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aa9",
  },
  {
    timeStamp: 1687398381.857,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aaa",
  },
  {
    timeStamp: 1687398381.922,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aab",
  },
  {
    timeStamp: 1687398382.008,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aac",
  },
  {
    timeStamp: 1687398382.068,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aad",
  },
  {
    timeStamp: 1687398382.129,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4aae",
  },
  {
    timeStamp: 1687398382.215,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4aaf",
  },
  {
    timeStamp: 1687398382.297,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4ab0",
  },
  {
    timeStamp: 1687398382.299,
    name: "ERROR",
    type: "RUNTIME_CRASH",
    data: {
      errorMessage: "ResizeObserver loop limit exceeded",
      source: "http://localhost:3002/",
      lineNo: 0,
      colNo: 0,
      error: null,
    },
    _id: "6493a7f852172c7c1bba4ab1",
  },
  {
    timeStamp: 1687398382.82,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode showCode--collapsed css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
    },
    _id: "6493a7f852172c7c1bba4ab2",
  },
  {
    timeStamp: 1687398382.906,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1181,
      Y: 91,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium showCode false css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path></svg>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4ab3",
  },
  {
    timeStamp: 1687398383.13,
    name: "ERROR",
    type: "RUNTIME_CRASH",
    data: {
      errorMessage: "ResizeObserver loop limit exceeded",
      source: "http://localhost:3002/",
      lineNo: 0,
      colNo: 0,
      error: null,
    },
    _id: "6493a7f852172c7c1bba4ab4",
  },
  {
    timeStamp: 1687398386.309,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 561,
      Y: 149,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 669px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div></div>',
    },
    _id: "6493a7f852172c7c1bba4ab5",
  },
  {
    timeStamp: 1687398386.37,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 561,
      Y: 149,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="view-lines monaco-mouse-cursor-text" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: Consolas, &quot;Courier New&quot;, monospace; font-weight: normal; font-size: 18px; font-feature-settings: &quot;liga&quot; 0, &quot;calt&quot; 0; line-height: 24px; letter-spacing: 0px; width: 669px; height: 613px;"><div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div></div>',
      button: 0,
    },
    _id: "6493a7f852172c7c1bba4ab6",
  },
  {
    timeStamp: 1687398388.488,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "6493a7f852172c7c1bba4ab7",
  },
  {
    timeStamp: 1687398389.165,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 677.0999999940395 },
    _id: "6493a7f852172c7c1bba4ab8",
  },
  {
    timeStamp: 1687398389.167,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 352,
      Y: 0,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="header"><div class="header__left"><div class="header__title">DEFINE IDE</div></div><div class="header__right"><select class="language__select" name="fontSize__choice"><option value="12">12px</option><option value="14">14px</option><option value="16">16px</option><option value="18">18px</option></select><select class="language__select" name="language__choice"><option value="cpp">C++</option><option value="javascript">Javascript</option><option value="java">Java</option><option value="python3">Python3</option><option value="c">C</option><option value="golang">Go</option></select><a class="github--link" href="/sketch"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BrushIcon"><path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37-1.34-1.34a.9959.9959 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"></path></svg></a><a class="github--link" href="https://github.com/hash-define-organization/"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon githubIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="GitHubIcon"><path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path></svg></a><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium icon themeIcon sunIcon css-i4bv87-MuiSvgIcon-root" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LightModeIcon"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg></div></div>',
    },
    _id: "6493a7f852172c7c1bba4ab9",
  },
  {
    timeStamp: 1687398391.043,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 262,
      Y: 139,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div style="top:0px;height:24px;" class="view-line"><span><span></span></span></div>',
    },
    _id: "6493a7f852172c7c1bba4aba",
  },
];

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
  await context.overridePermissions(
    "http://localhost:3002/?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 1225,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("http://localhost:3002/?session-replay=true", {
    waitUntil: "networkidle0",
  });

  //     await page.evaluate(() => {
  //     const pre = document.createElement("pre");
  //     pre.id = "id-abc_user/123";
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
  //             const pre = document.getElementById("id-abc_user/123");
  //             pre.textContent =
  //             "Session : abc_user/123 \n"  +
  //             "Elapsed : " +
  //             time;
  //         }, seconds);
  //         }, 1000);
  //     };

  //     // Start the timer
  //     updateTimer();

  await page.addStyleTag({
    content:
      "/* WebKit-based browsers (Chrome, Safari) */body::-webkit-scrollbar { width: 16px;}::-webkit-scrollbar-track {background-color: #f1f1f1;}::-webkit-scrollbar-thumb {background-color: #888;} ::-webkit-scrollbar-thumb:hover {background-color: #555;}",
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
      } else if (event.name === "PAGE_EVENT") {
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
