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
    timeStamp: 1687703948.389,
    name: "PAGE_EVENT",
    type: "RELOAD",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649851e1a9da3f3a62432ab7",
  },
  {
    timeStamp: 1687703950.765,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 732, Y: 57, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649851e1a9da3f3a62432ab8",
  },
  {
    timeStamp: 1687703955.725,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 638,
      Y: 28,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>',
    },
    _id: "649851e1a9da3f3a62432ab9",
  },
  {
    timeStamp: 1687703957.273,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 652,
      Y: 31,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>',
    },
    _id: "649851e1a9da3f3a62432aba",
  },
  {
    timeStamp: 1687703958.715,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 652,
      Y: 31,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>',
    },
    _id: "649851e1a9da3f3a62432abb",
  },
  {
    timeStamp: 1687703958.842,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 652,
      Y: 31,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432abc",
  },
  {
    timeStamp: 1687703960.055,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 358,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="/store/" class="elementor-item" tabindex="0">Outcome Store</a>',
    },
    _id: "649851e1a9da3f3a62432abd",
  },
  {
    timeStamp: 1687703960.162,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 358,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="/store/" class="elementor-item" tabindex="-1">Outcome Store</a>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432abe",
  },
  {
    timeStamp: 1687703960.163,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 11.786 },
    _id: "649851e1a9da3f3a62432abf",
  },
  {
    timeStamp: 1687703961.063,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 358,
      Y: 187,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h2 class="elementor-heading-title elementor-size-default">Turn Your Buildings into Smart Spaces</h2>',
    },
    _id: "649851e1a9da3f3a62432ac0",
  },
  {
    timeStamp: 1687703962.161,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649851e1a9da3f3a62432ac1",
  },
  {
    timeStamp: 1687703962.668,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/", DOMLoadTime: 0 },
    _id: "649851e1a9da3f3a62432ac2",
  },
  {
    timeStamp: 1687703964.282,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 732, Y: 39, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649851e1a9da3f3a62432ac3",
  },
  {
    timeStamp: 1687703965.29,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 732, Y: 39, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649851e1a9da3f3a62432ac4",
  },
  {
    timeStamp: 1687703969.186,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 749,
      Y: 5048,
      scrollX: 0,
      scrollY: 4696.66650390625,
      HTMLElement: null,
    },
    _id: "649851e1a9da3f3a62432ac5",
  },
  {
    timeStamp: 1687703969.833,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 361,
      Y: 4962,
      scrollX: 0,
      scrollY: 4696.66650390625,
      HTMLElement: '<span class="elementor-button-text">Browse Devices</span>',
    },
    _id: "649851e1a9da3f3a62432ac6",
  },
  {
    timeStamp: 1687703969.981,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 7.315 },
    _id: "649851e1a9da3f3a62432ac7",
  },
  {
    timeStamp: 1687703970.834,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 361,
      Y: 4962,
      scrollX: 0,
      scrollY: 4696.66650390625,
      HTMLElement: '<span class="elementor-button-text">Browse Devices</span>',
    },
    _id: "649851e1a9da3f3a62432ac8",
  },
  {
    timeStamp: 1687703972.122,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649851e1a9da3f3a62432ac9",
  },
  {
    timeStamp: 1687703972.569,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/device/", DOMLoadTime: 0 },
    _id: "649851e1a9da3f3a62432aca",
  },
  {
    timeStamp: 1687703975.668,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 728, Y: 41, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649851e1a9da3f3a62432acb",
  },
  {
    timeStamp: 1687703976.672,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 728, Y: 41, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649851e1a9da3f3a62432acc",
  },
  {
    timeStamp: 1687703980.622,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 745,
      Y: 5903,
      scrollX: 0,
      scrollY: 5392.66650390625,
      HTMLElement: null,
    },
    _id: "649851e1a9da3f3a62432acd",
  },
  {
    timeStamp: 1687703981.876,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 212,
      Y: 5583,
      scrollX: 0,
      scrollY: 5392.66650390625,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649851e1a9da3f3a62432ace",
  },
  {
    timeStamp: 1687703982.013,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 9.445 },
    _id: "649851e1a9da3f3a62432acf",
  },
  {
    timeStamp: 1687703982.89,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 212,
      Y: 5583,
      scrollX: 0,
      scrollY: 5392.66650390625,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649851e1a9da3f3a62432ad0",
  },
  {
    timeStamp: 1687703984.042,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649851e1a9da3f3a62432ad1",
  },
  {
    timeStamp: 1687703984.433,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/store/product/hibou-air-quality-pm/",
      DOMLoadTime: 0,
    },
    _id: "649851e1a9da3f3a62432ad2",
  },
  {
    timeStamp: 1687703985.758,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 720,
      Y: 321,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1752410a elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading animated fadeInUp" data-id="1752410a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;100&quot;}" data-widget_type="woocommerce-product-title.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce.min.css"><h1 class="product_title entry-title elementor-heading-title elementor-size-default">Hibou Air Quality PM</h1>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-106065db elementor-widget-divider--view-line elementor-widget elementor-widget-divider animated fadeIn" data-id="106065db" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:&quot;175&quot;}" data-widget_type="divider.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-bottom:0;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}</style>\t\t<div class="elementor-divider">\n\t\t\t<span class="elementor-divider-separator">\n\t\t\t\t\t\t</span>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-1f15f4e elementor-widget elementor-widget-woocommerce-product-price animated fadeInUp" data-id="1f15f4e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;200&quot;}" data-widget_type="woocommerce-product-price.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>139.00</bdi></span></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6143a5ad elementor-align-justify elementor-widget elementor-widget-button" data-id="6143a5ad" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-93075f7 elementor-align-justify elementor-widget elementor-widget-button" data-id="93075f7" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6778664 elementor-widget elementor-widget-html" data-id="6778664" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\n\nAlready have DNA Spaces? <div class="login"><span style="text-decoration:underline">Login here</span><ul class="login_list"> <li><a href="https://dnaspaces.io/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1" target="_blank">Global</a></li>\n \t<li><a href="https://dnaspaces.eu/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1" target="_blank">Europe</a></li></ul></div> \n<p></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6d2f58a2 elementor-widget elementor-widget-text-editor" data-id="6d2f58a2" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649851e1a9da3f3a62432ad3",
  },
  {
    timeStamp: 1687703990.429,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 321,
      Y: 410,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649851e1a9da3f3a62432ad4",
  },
  {
    timeStamp: 1687703990.562,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 321,
      Y: 410,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432ad5",
  },
  {
    timeStamp: 1687703990.564,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 6.132 },
    _id: "649851e1a9da3f3a62432ad6",
  },
  {
    timeStamp: 1687703991.435,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 321,
      Y: 410,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649851e1a9da3f3a62432ad7",
  },
  {
    timeStamp: 1687703992.31,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649851e1a9da3f3a62432ad8",
  },
  {
    timeStamp: 1687703992.706,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/free-trial/", DOMLoadTime: 0 },
    _id: "649851e1a9da3f3a62432ad9",
  },
  {
    timeStamp: 1687703994.298,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 84,
      Y: 468,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649851e1a9da3f3a62432ada",
  },
  {
    timeStamp: 1687703994.412,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 84,
      Y: 468,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="cname">Company name*</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432adb",
  },
  {
    timeStamp: 1687703995.416,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 78,
      Y: 385,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="jtitle">Job title</label>',
    },
    _id: "649851e1a9da3f3a62432adc",
  },
  {
    timeStamp: 1687703995.498,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 78,
      Y: 385,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="jtitle">Job title</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432add",
  },
  {
    timeStamp: 1687703995.501,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 78,
      Y: 385,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="jtitle">Job title</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432ade",
  },
  {
    timeStamp: 1687703995.84,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 94,
      Y: 385,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432adf",
  },
  {
    timeStamp: 1687703995.947,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 94,
      Y: 385,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432ae0",
  },
  {
    timeStamp: 1687703996.711,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae1",
  },
  {
    timeStamp: 1687703996.828,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae2",
  },
  {
    timeStamp: 1687703996.922,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae3",
  },
  {
    timeStamp: 1687703997.005,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae4",
  },
  {
    timeStamp: 1687703997.062,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae5",
  },
  {
    timeStamp: 1687703997.15,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae6",
  },
  {
    timeStamp: 1687703997.186,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae7",
  },
  {
    timeStamp: 1687703997.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae8",
  },
  {
    timeStamp: 1687703997.27,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432ae9",
  },
  {
    timeStamp: 1687703997.357,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432aea",
  },
  {
    timeStamp: 1687703997.41,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432aeb",
  },
  {
    timeStamp: 1687703997.425,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 94,
      Y: 385,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432aec",
  },
  {
    timeStamp: 1687703997.464,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432aed",
  },
  {
    timeStamp: 1687703997.534,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 94,
      Y: 385,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649851e1a9da3f3a62432aee",
  },
  {
    timeStamp: 1687703998.93,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 196,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432aef",
  },
  {
    timeStamp: 1687703999.008,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 196,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432af0",
  },
  {
    timeStamp: 1687703999.352,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af1",
  },
  {
    timeStamp: 1687703999.631,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "C",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af2",
  },
  {
    timeStamp: 1687703999.767,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af3",
  },
  {
    timeStamp: 1687703999.79,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af4",
  },
  {
    timeStamp: 1687703999.927,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af5",
  },
  {
    timeStamp: 1687704000.028,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af6",
  },
  {
    timeStamp: 1687704000.311,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af7",
  },
  {
    timeStamp: 1687704000.373,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af8",
  },
  {
    timeStamp: 1687704000.465,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432af9",
  },
  {
    timeStamp: 1687704000.534,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432afa",
  },
  {
    timeStamp: 1687704001.098,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 196,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432afb",
  },
  {
    timeStamp: 1687704001.196,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 196,
      Y: 467,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432afc",
  },
  {
    timeStamp: 1687704001.351,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432afd",
  },
  {
    timeStamp: 1687704001.478,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "C",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432afe",
  },
  {
    timeStamp: 1687704001.604,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432aff",
  },
  {
    timeStamp: 1687704001.607,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b00",
  },
  {
    timeStamp: 1687704001.775,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b01",
  },
  {
    timeStamp: 1687704001.853,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b02",
  },
  {
    timeStamp: 1687704001.88,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b03",
  },
  {
    timeStamp: 1687704001.943,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b04",
  },
  {
    timeStamp: 1687704001.965,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b05",
  },
  {
    timeStamp: 1687704002.046,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 196,
      Y: 467,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b06",
  },
  {
    timeStamp: 1687704002.066,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b07",
  },
  {
    timeStamp: 1687704002.13,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 196,
      Y: 467,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649851e1a9da3f3a62432b08",
  },
  {
    timeStamp: 1687704002.938,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 89,
      Y: 566,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b09",
  },
  {
    timeStamp: 1687704003.018,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 89,
      Y: 566,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b0a",
  },
  {
    timeStamp: 1687704003.245,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 89,
      Y: 562,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b0b",
  },
  {
    timeStamp: 1687704003.352,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 89,
      Y: 562,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b0c",
  },
  {
    timeStamp: 1687704003.649,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b0d",
  },
  {
    timeStamp: 1687704004.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b0e",
  },
  {
    timeStamp: 1687704004.168,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b0f",
  },
  {
    timeStamp: 1687704004.278,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 89,
      Y: 562,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b10",
  },
  {
    timeStamp: 1687704004.297,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 89,
      Y: 562,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b11",
  },
  {
    timeStamp: 1687704004.395,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b12",
  },
  {
    timeStamp: 1687704004.474,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 89,
      Y: 562,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b13",
  },
  {
    timeStamp: 1687704004.495,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b14",
  },
  {
    timeStamp: 1687704004.577,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b15",
  },
  {
    timeStamp: 1687704004.612,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 89,
      Y: 562,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b16",
  },
  {
    timeStamp: 1687704004.659,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 89,
      Y: 562,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b17",
  },
  {
    timeStamp: 1687704004.683,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 89,
      Y: 562,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b18",
  },
  {
    timeStamp: 1687704004.828,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 89,
      Y: 562,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649851e1a9da3f3a62432b19",
  },
  {
    timeStamp: 1687704005.692,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 205,
      Y: 608,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649851e1a9da3f3a62432b1a",
  },
  {
    timeStamp: 1687704005.804,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 205,
      Y: 608,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<fieldset class="msforms-fieldset show">\n            <h6>How can we reach you?</h6>\n            <p style="padding-bottom:10px;">We will use this information to set up a Free Trial or Demo session and send information about DNA Spaces</p>\n            <div class="form-group">\n                \n              <input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">\n              <label class="msforms-form-text-label" for="bemail">Business Email* </label>\n              <div class="msforms-form-error">Please enter your business email id</div>\n            </div>\n            <div class="form-group">\n              <input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">\n                <label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>\n              <div class="msforms-form-error">Please enter your phone number</div>\n            </div>\n           <div class="form-group">\n              <input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">\n                <label class="msforms-form-text-label" for="fname">First Name*</label>\n              <div class="msforms-form-error">Please enter your first name</div>\n            </div>\n            <div class="form-group">\n              <input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">\n                <label class="msforms-form-text-label" for="lname">Last Name*</label>\n              <div class="msforms-form-error">Please enter your last name</div>\n            </div>\n            \n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <button id="freetrial">Submit</button>\n            </div>\n        </fieldset>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b1b",
  },
  {
    timeStamp: 1687704006.418,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 142,
      Y: 388,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b1c",
  },
  {
    timeStamp: 1687704006.489,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 142,
      Y: 388,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="bemail">Business Email* </label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b1d",
  },
  {
    timeStamp: 1687704007.559,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 132,
      Y: 401,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b1e",
  },
  {
    timeStamp: 1687704008.383,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "v",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b1f",
  },
  {
    timeStamp: 1687704008.455,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "v",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b20",
  },
  {
    timeStamp: 1687704009.218,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b21",
  },
  {
    timeStamp: 1687704009.316,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b22",
  },
  {
    timeStamp: 1687704009.346,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b23",
  },
  {
    timeStamp: 1687704009.402,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b24",
  },
  {
    timeStamp: 1687704009.447,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b25",
  },
  {
    timeStamp: 1687704009.495,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b26",
  },
  {
    timeStamp: 1687704009.594,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b27",
  },
  {
    timeStamp: 1687704009.689,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b28",
  },
  {
    timeStamp: 1687704009.713,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b29",
  },
  {
    timeStamp: 1687704009.767,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b2a",
  },
  {
    timeStamp: 1687704010.056,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b2b",
  },
  {
    timeStamp: 1687704010.134,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b2c",
  },
  {
    timeStamp: 1687704010.238,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b2d",
  },
  {
    timeStamp: 1687704010.3,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b2e",
  },
  {
    timeStamp: 1687704010.389,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b2f",
  },
  {
    timeStamp: 1687704010.512,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b30",
  },
  {
    timeStamp: 1687704010.638,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b31",
  },
  {
    timeStamp: 1687704010.691,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b32",
  },
  {
    timeStamp: 1687704010.819,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b33",
  },
  {
    timeStamp: 1687704010.922,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b34",
  },
  {
    timeStamp: 1687704010.958,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b35",
  },
  {
    timeStamp: 1687704011.014,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b36",
  },
  {
    timeStamp: 1687704011.053,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b37",
  },
  {
    timeStamp: 1687704011.108,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b38",
  },
  {
    timeStamp: 1687704011.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b39",
  },
  {
    timeStamp: 1687704011.203,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b3a",
  },
  {
    timeStamp: 1687704011.223,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b3b",
  },
  {
    timeStamp: 1687704011.263,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b3c",
  },
  {
    timeStamp: 1687704011.6,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b3d",
  },
  {
    timeStamp: 1687704011.731,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b3e",
  },
  {
    timeStamp: 1687704011.732,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b3f",
  },
  {
    timeStamp: 1687704011.841,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b40",
  },
  {
    timeStamp: 1687704011.844,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b41",
  },
  {
    timeStamp: 1687704011.893,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 132,
      Y: 401,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b42",
  },
  {
    timeStamp: 1687704011.909,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b43",
  },
  {
    timeStamp: 1687704011.97,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 132,
      Y: 401,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649851e1a9da3f3a62432b44",
  },
  {
    timeStamp: 1687704012.974,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 116,
      Y: 482,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>',
    },
    _id: "649851e1a9da3f3a62432b45",
  },
  {
    timeStamp: 1687704013.061,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 116,
      Y: 482,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b46",
  },
  {
    timeStamp: 1687704013.065,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 116,
      Y: 482,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b47",
  },
  {
    timeStamp: 1687704013.31,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 92,
      Y: 483,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b48",
  },
  {
    timeStamp: 1687704013.453,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 92,
      Y: 483,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b49",
  },
  {
    timeStamp: 1687704013.921,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b4a",
  },
  {
    timeStamp: 1687704014.023,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b4b",
  },
  {
    timeStamp: 1687704014.135,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b4c",
  },
  {
    timeStamp: 1687704014.161,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b4d",
  },
  {
    timeStamp: 1687704014.216,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b4e",
  },
  {
    timeStamp: 1687704014.251,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b4f",
  },
  {
    timeStamp: 1687704014.319,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b50",
  },
  {
    timeStamp: 1687704014.437,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b51",
  },
  {
    timeStamp: 1687704014.537,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b52",
  },
  {
    timeStamp: 1687704014.599,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b53",
  },
  {
    timeStamp: 1687704014.689,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b54",
  },
  {
    timeStamp: 1687704014.775,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b55",
  },
  {
    timeStamp: 1687704014.898,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b56",
  },
  {
    timeStamp: 1687704014.968,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b57",
  },
  {
    timeStamp: 1687704015.123,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b58",
  },
  {
    timeStamp: 1687704015.198,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b59",
  },
  {
    timeStamp: 1687704015.324,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b5a",
  },
  {
    timeStamp: 1687704015.403,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b5b",
  },
  {
    timeStamp: 1687704015.475,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b5c",
  },
  {
    timeStamp: 1687704015.57,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b5d",
  },
  {
    timeStamp: 1687704015.586,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 92,
      Y: 483,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b5e",
  },
  {
    timeStamp: 1687704015.643,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 92,
      Y: 483,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649851e1a9da3f3a62432b5f",
  },
  {
    timeStamp: 1687704016.554,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 77,
      Y: 569,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="fname">First Name*</label>',
    },
    _id: "649851e1a9da3f3a62432b60",
  },
  {
    timeStamp: 1687704016.638,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 88,
      Y: 570,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="fname">First Name*</label>',
    },
    _id: "649851e1a9da3f3a62432b61",
  },
  {
    timeStamp: 1687704016.971,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 103,
      Y: 553,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="fname">First Name*</label>',
    },
    _id: "649851e1a9da3f3a62432b62",
  },
  {
    timeStamp: 1687704017.064,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 103,
      Y: 553,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="fname">First Name*</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b63",
  },
  {
    timeStamp: 1687704017.072,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 103,
      Y: 553,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="fname">First Name*</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b64",
  },
  {
    timeStamp: 1687704017.504,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 107,
      Y: 575,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b65",
  },
  {
    timeStamp: 1687704017.608,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 107,
      Y: 575,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b66",
  },
  {
    timeStamp: 1687704017.821,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 107,
      Y: 575,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b67",
  },
  {
    timeStamp: 1687704018.016,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 107,
      Y: 575,
      key: "V",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b68",
  },
  {
    timeStamp: 1687704018.123,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 107,
      Y: 575,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b69",
  },
  {
    timeStamp: 1687704018.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 107,
      Y: 575,
      key: "v",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b6a",
  },
  {
    timeStamp: 1687704018.294,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 107,
      Y: 575,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b6b",
  },
  {
    timeStamp: 1687704018.357,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 107,
      Y: 575,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b6c",
  },
  {
    timeStamp: 1687704018.41,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 107,
      Y: 575,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b6d",
  },
  {
    timeStamp: 1687704018.489,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 107,
      Y: 575,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b6e",
  },
  {
    timeStamp: 1687704018.525,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 107,
      Y: 575,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b6f",
  },
  {
    timeStamp: 1687704018.603,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 107,
      Y: 575,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b70",
  },
  {
    timeStamp: 1687704018.604,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 107,
      Y: 575,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b71",
  },
  {
    timeStamp: 1687704018.673,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 107,
      Y: 575,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649851e1a9da3f3a62432b72",
  },
  {
    timeStamp: 1687704019.621,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 104,
      Y: 652,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<label class="msforms-form-text-label" for="lname">Last Name*</label>',
    },
    _id: "649851e1a9da3f3a62432b73",
  },
  {
    timeStamp: 1687704019.721,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 104,
      Y: 652,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<label class="msforms-form-text-label" for="lname">Last Name*</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b74",
  },
  {
    timeStamp: 1687704019.724,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 104,
      Y: 652,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<label class="msforms-form-text-label" for="lname">Last Name*</label>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b75",
  },
  {
    timeStamp: 1687704020.004,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 86,
      Y: 633,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b76",
  },
  {
    timeStamp: 1687704020.1,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 86,
      Y: 633,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b77",
  },
  {
    timeStamp: 1687704020.404,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b78",
  },
  {
    timeStamp: 1687704020.741,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "S",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b79",
  },
  {
    timeStamp: 1687704020.804,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b7a",
  },
  {
    timeStamp: 1687704020.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b7b",
  },
  {
    timeStamp: 1687704020.936,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b7c",
  },
  {
    timeStamp: 1687704021.016,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b7d",
  },
  {
    timeStamp: 1687704021.035,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b7e",
  },
  {
    timeStamp: 1687704021.092,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b7f",
  },
  {
    timeStamp: 1687704021.203,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b80",
  },
  {
    timeStamp: 1687704021.273,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b81",
  },
  {
    timeStamp: 1687704021.307,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b82",
  },
  {
    timeStamp: 1687704021.4,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b83",
  },
  {
    timeStamp: 1687704021.403,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b84",
  },
  {
    timeStamp: 1687704021.439,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b85",
  },
  {
    timeStamp: 1687704021.531,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b86",
  },
  {
    timeStamp: 1687704021.642,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 86,
      Y: 633,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b87",
  },
  {
    timeStamp: 1687704021.664,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b88",
  },
  {
    timeStamp: 1687704021.734,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 86,
      Y: 633,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649851e1a9da3f3a62432b89",
  },
  {
    timeStamp: 1687704022.933,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 407,
      Y: 343,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<p style="padding-bottom:10px;">We will use this information to set up a Free Trial or Demo session and send information about DNA Spaces</p>',
    },
    _id: "649851e1a9da3f3a62432b8a",
  },
  {
    timeStamp: 1687704023.036,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 407,
      Y: 343,
      scrollX: 0,
      scrollY: 86,
      HTMLElement:
        '<p style="padding-bottom:10px;">We will use this information to set up a Free Trial or Demo session and send information about DNA Spaces</p>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b8b",
  },
  {
    timeStamp: 1687704023.872,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 734, Y: 250, scrollX: 0, scrollY: 86, HTMLElement: null },
    _id: "649851e1a9da3f3a62432b8c",
  },
  {
    timeStamp: 1687704024.403,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 724, Y: 103, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649851e1a9da3f3a62432b8d",
  },
  {
    timeStamp: 1687704024.635,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 489,
      Y: 182,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-37d8512d elementor-widget elementor-widget-spacer" data-id="37d8512d" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}</style>\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-4f6c9470 elementor-widget elementor-widget-heading" data-id="4f6c9470" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-3308a6d3 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-html" data-id="3308a6d3" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<section class="msforms-section">\n<div class="msform">\n     <form id="contact" action="https://api.hsforms.com/submissions/v2/post/upload/5010372/90d127dd-3f03-49d6-a23a-b92453cad4b2" method="post" data-gtm-form-interact-id="0">\n        <fieldset class="msforms-fieldset">\n            <h6>How can we help you today?</h6>\n            <div class="form-group">\n              <input type="checkbox" name="how_can_we_help_you_today_" id="freetrial" value="Get a 30-day Free Trial" checked=""> \n              <label for="freetrial" class="">Get a 30-day Free Trial</label>\n            </div>\n            <div class="form-group">\n              <input type="checkbox" name="how_can_we_help_you_today_" id="consultation" value="Book a Demo session with a Spaces Expert"> \n              <label for="consultation" class="">Book a Demo session with a Spaces Expert</label>\n            </div>\n            <div class="form-group">\n              <input type="checkbox" name="how_can_we_help_you_today_" id="smartbuildings" value="Receive our E-books &amp; Guides"> \n              <label for="smartbuildings" class="">Receive our E-books &amp; Guides\n</label>\n            </div>\n            <div class="form-group">\n        <input type="text" value="FreeTrial" name="outcome_store_trialdemo_source" hidden="">\n                            </div>\n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-next-btn float-right">Next</a>\n            </div>\n        </fieldset> \n        <fieldset class="msforms-fieldset">\n            <h6>Tell us more about yourself:</h6>\n            <p style="padding-bottom:10px;">We will use this information to check if your company has existing DNA Spaces licenses</p>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle" data-gtm-form-interact-field-id="0">\n              <label class="msforms-form-text-label" for="jtitle">Job title</label>\n            </div>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="" data-gtm-form-interact-field-id="1">\n              <label class="msforms-form-text-label" for="cname">Company name*</label>\n              <div class="msforms-form-error">Please enter company name</div>\n            </div>\n            <div class="form-group focus-input">\n               \n              <input placeholder="" name="country" type="text" class="form-control" id="countryn" data-gtm-form-interact-field-id="2">\n               <label class="msforms-form-text-label" for="countryn">Country</label>\n            </div>\n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <a href="javascript:;" class="msform-next-btn float-right">Next</a>\n            </div>\n        </fieldset> \n        <fieldset class="msforms-fieldset show">\n            <h6>How can we reach you?</h6>\n            <p style="padding-bottom:10px;">We will use this information to set up a Free Trial or Demo session and send information about DNA Spaces</p>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="" data-gtm-form-interact-field-id="3">\n              <label class="msforms-form-text-label" for="bemail">Business Email* </label>\n              <div class="msforms-form-error">Please enter your business email id</div>\n            </div>\n            <div class="form-group focus-input">\n              <input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="" data-gtm-form-interact-field-id="4">\n                <label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>\n              <div class="msforms-form-error">Please enter your phone number</div>\n            </div>\n           <div class="form-group focus-input">\n              <input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="" data-gtm-form-interact-field-id="5">\n                <label class="msforms-form-text-label" for="fname">First Name*</label>\n              <div class="msforms-form-error">Please enter your first name</div>\n            </div>\n            <div class="form-group focus-input">\n              <input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="" data-gtm-form-interact-field-id="6">\n                <label class="msforms-form-text-label" for="lname">Last Name*</label>\n              <div class="msforms-form-error">Please enter your last name</div>\n            </div>\n            \n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <button id="freetrial">Submit</button>\n            </div>\n        </fieldset> \n    </form>\n    \n</div>\n</section>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-2730934c elementor-widget elementor-widget-html" data-id="2730934c" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js"></script>\n<script type="text/javascript">\njQuery(document).ready(function() {\n    \n    // click on next button\n    jQuery(\'.msform-next-btn\').click(function() {\n        var parentFieldset = jQuery(this).parents(\'.msforms-fieldset\');\n        var currentActiveStep = jQuery(this).parents(\'.msform\').find(\'.msform-steps .active\');\n        var next = jQuery(this);\n        var nextmsformsStep = true;\n        parentFieldset.find(\'.msforms-required\').each(function(){\n            var thisValue = jQuery(this).val();\n\n            if( thisValue == "") {\n                jQuery(this).siblings(".msforms-form-error").slideDown();\n                nextmsformsStep = false;\n            }\n            else {\n                jQuery(this).siblings(".msforms-form-error").slideUp();\n            }\n        });\n        if( nextmsformsStep) {\n            next.parents(\'.msforms-fieldset\').removeClass("show","400");\n            currentActiveStep.removeClass(\'active\').addClass(\'activated\').next().addClass(\'active\',"400");\n            next.parents(\'.msforms-fieldset\').next(\'.msforms-fieldset\').addClass("show","400");\n            jQuery(document).find(\'.msforms-fieldset\').each(function(){\n                if(jQuery(this).hasClass(\'show\')){\n                    var formAtrr = jQuery(this).attr(\'data-tab-content\');\n                    jQuery(document).find(\'.msform-steps .msform-step-item\').each(function(){\n                        if(jQuery(this).attr(\'data-attr\') == formAtrr){\n                            jQuery(this).addClass(\'active\');\n                            var innerWidth = jQuery(this).innerWidth();\n                            var position = jQuery(this).position();\n                            jQuery(document).find(\'.msform-step-move\').css({"left": position.left, "width": innerWidth});\n                        }else{\n                            jQuery(this).removeClass(\'active\');\n                        }\n                    });\n                }\n            });\n        }\n    });\n    //click on previous button\n    jQuery(\'.msform-previous-btn\').click(function() {\n        var counter = parseInt(jQuery(".msforms-counter").text());;\n        var prev =jQuery(this);\n        var currentActiveStep = jQuery(this).parents(\'.msform\').find(\'.msform-steps .active\');\n        prev.parents(\'.msforms-fieldset\').removeClass("show","400");\n        prev.parents(\'.msforms-fieldset\').prev(\'.msforms-fieldset\').addClass("show","400");\n        currentActiveStep.removeClass(\'active\').prev().removeClass(\'activated\').addClass(\'active\',"400");\n        jQuery(document).find(\'.msforms-fieldset\').each(function(){\n            if(jQuery(this).hasClass(\'show\')){\n                var formAtrr = jQuery(this).attr(\'data-tab-content\');\n                jQuery(document).find(\'.msform-steps .msform-step-item\').each(function(){\n                    if(jQuery(this).attr(\'data-attr\') == formAtrr){\n                        jQuery(this).addClass(\'active\');\n                        var innerWidth = jQuery(this).innerWidth();\n                        var position = jQuery(this).position();\n                        jQuery(document).find(\'.msform-step-move\').css({"left": position.left, "width": innerWidth});\n                    }else{\n                        jQuery(this).removeClass(\'active\');\n                    }\n                });\n            }\n        });\n    });\n    //click on form submit button\n    jQuery(document).on("click",".msform .msform-submit" , function(){\n        window.location = \'/store/thank-you/\';\n        var parentFieldset = jQuery(this).parents(\'.msforms-fieldset\');\n        var currentActiveStep = jQuery(this).parents(\'.msform\').find(\'.msform-steps .active\');\n        parentFieldset.find(\'.msforms-required\').each(function() {\n            var thisValue = jQuery(this).val();\n            if( thisValue == "" ) {\n                jQuery(this).siblings(".msforms-form-error").slideDown();\n            }\n            else {\n                jQuery(this).siblings(".msforms-form-error").slideUp();\n            }\n        });\n                window.location.replace("http://stackoverflow.com");\n\n    });\n    // focus on input field check empty or not\n    jQuery(".form-control").on(\'focus\', function(){\n        var tmpThis = jQuery(this).val();\n        if(tmpThis == \'\' ) {\n            jQuery(this).parent().addClass("focus-input");\n        }\n        else if(tmpThis !=\'\' ){\n            jQuery(this).parent().addClass("focus-input");\n        }\n    }).on(\'blur\', function(){\n        var tmpThis = jQuery(this).val();\n        if(tmpThis == \'\' ) {\n            jQuery(this).parent().removeClass("focus-input");\n            jQuery(this).siblings(\'.msforms-form-error\').slideDown("3000");\n        }\n        else if(tmpThis !=\'\' ){\n            jQuery(this).parent().addClass("focus-input");\n            jQuery(this).siblings(\'.msforms-form-error\').slideUp("3000");\n        }\n    });\n   \n  \n \njQuery(\'#contact\').submit(function() {\n    var form = jQuery("#contact");\n    var actionURL = form.attr("action");\n    jQuery.ajax({\n        type: \'POST\',\n        url: actionURL,\n        data: form.serialize(),\n        dataType: \'json\',\n        success: function(json) {\n           window.location.href = "/store/thank-you/";\n        }\n    })\n    return false;\n});\n    \n});\n\n\n\n</script>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-2ee5c52d elementor-widget elementor-widget-spacer" data-id="2ee5c52d" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649851e1a9da3f3a62432b8e",
  },
  {
    timeStamp: 1687704025.914,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 278,
      Y: 118,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="Search..." class="elementor-search-form__input" type="search" name="s" title="Search" value="">',
    },
    _id: "649851e1a9da3f3a62432b8f",
  },
  {
    timeStamp: 1687704025.99,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 278,
      Y: 118,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="Search..." class="elementor-search-form__input" type="search" name="s" title="Search" value="">',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b90",
  },
  {
    timeStamp: 1687704026.962,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 278,
      Y: 118,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="Search..." class="elementor-search-form__input" type="search" name="s" title="Search" value="">',
    },
    _id: "649851e1a9da3f3a62432b91",
  },
  {
    timeStamp: 1687704027.852,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 331,
      Y: 217,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649851e1a9da3f3a62432b92",
  },
  {
    timeStamp: 1687704027.937,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 331,
      Y: 217,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
      button: 0,
    },
    _id: "649851e1a9da3f3a62432b93",
  },
  {
    timeStamp: 1687704029.543,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 717,
      Y: 98,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3da8a611 elementor-search-form--skin-minimal elementor-widget__width-inherit elementor-widget elementor-widget-search-form" data-id="3da8a611" data-element_type="widget" data-settings="{&quot;skin&quot;:&quot;minimal&quot;}" data-widget_type="search-form.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css">\t\t<form class="elementor-search-form" role="search" action="https://spaces.cisco.com/store" method="get">\n\t\t\t\t\t\t\t\t\t<div class="elementor-search-form__container">\n\t\t\t\t\t\t\t\t\t<div class="elementor-search-form__icon">\n\t\t\t\t\t\t<i aria-hidden="true" class="fas fa-search"></i>\t\t\t\t\t\t<span class="elementor-screen-only">Search</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input placeholder="Search..." class="elementor-search-form__input" type="search" name="s" title="Search" value="">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649851e1a9da3f3a62432b94",
  },
  {
    timeStamp: 1687704030.848,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 651,
      Y: 167,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<div class="elementor-spacer-inner"></div>',
    },
    _id: "649851e1a9da3f3a62432b95",
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
  await page.setDefaultNavigationTimeout(0);
  const context = browser.defaultBrowserContext();
  await context.overridePermissions(
    events[0].data.URL + "?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 742,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto(events[0].data.URL + "?session-replay=true", {
    waitUntil: "networkidle0",
  });

  // await page.evaluate(() => {
  //     const pre = document.createElement("pre");
  //     pre.id = "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo";
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
  // });

  // const updateTimer = () => {
  //     let seconds = 0;

  //     setInterval(() => {
  //     seconds++;
  //     page.evaluate((time) => {
  //         const pre = document.getElementById(
  //         "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo"
  //         );
  //         if (pre === null || pre === undefined) {
  //         const pre = document.createElement("pre");
  //         pre.id = "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo";
  //         pre.style.fontSize = "0.75rem";
  //         pre.style.pointerEvents = "none";
  //         pre.style.position = "fixed";
  //         pre.style.backgroundColor = "black";
  //         pre.style.borderRadius = "0.2em";
  //         pre.style.padding = "0.2em";
  //         pre.style.color = "white";
  //         pre.style.zIndex = "999";
  //         pre.style.top = "0em";
  //         pre.style.right = "0em";
  //         pre.style.opacity = "0.5";
  //         document.body.appendChild(pre);
  //         pre.textContent =
  //             "Session : abc_user/test-dna-spaces-1 \n"  +
  //             "Elapsed : " +
  //             time;
  //         } else {
  //         pre.textContent =
  //             "Session : abc_user/test-dna-spaces-1 \n"  +
  //             "Elapsed : " +
  //             time;
  //         }
  //     }, seconds);
  //     }, 1000);
  // };

  // // Start the timer
  // updateTimer();

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
