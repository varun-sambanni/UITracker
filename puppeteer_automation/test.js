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
    timeStamp: 1687752616.522,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443abb",
  },
  {
    timeStamp: 1687752616.523,
    name: "ERROR",
    type: "RUNTIME_CRASH",
    data: {
      errorMessage:
        "Uncaught SyntaxError: Identifier 'mouseEvents' has already been declared",
      source: "https://spaces.cisco.com/",
      lineNo: 1,
      colNo: 1,
    },
    _id: "649922e8a9da3f3a62443abc",
  },
  {
    timeStamp: 1687752621.146,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 562,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
    },
    _id: "649922e8a9da3f3a62443abd",
  },
  {
    timeStamp: 1687752621.377,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 562,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443abe",
  },
  {
    timeStamp: 1687752621.378,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 4.864 },
    _id: "649922e8a9da3f3a62443abf",
  },
  {
    timeStamp: 1687752622.146,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 562,
      Y: 33,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
    },
    _id: "649922e8a9da3f3a62443ac0",
  },
  {
    timeStamp: 1687752623.424,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443ac1",
  },
  {
    timeStamp: 1687752625.197,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443ac2",
  },
  {
    timeStamp: 1687752626.99,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 622,
      Y: 397,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-51018ca elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp" data-id="51018ca" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b01f378" data-id="b01f378" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-f49bc34 elementor-widget elementor-widget-heading" data-id="f49bc34" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">Discover Outcomes</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-738a67 elementor-widget elementor-widget-text-editor" data-id="738a67" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t<p>The world’s most powerful smart building cloud is at your finger tips.</p><p>Start leveraging your network infrastructure to drive business outcomes with Spaces.</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-124a9316 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="124a9316" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="/store/outcomes/">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Browse Outcomes</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-250f6084" data-id="250f6084" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443ac3",
  },
  {
    timeStamp: 1687752629.174,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 624,
      Y: 1666,
      scrollX: 0,
      scrollY: 1264,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1a8cc7d4 elementor-widget elementor-widget-heading" data-id="1a8cc7d4" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h3 class="elementor-heading-title elementor-size-default">Discover Apps</h3>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-38446d92 elementor-widget elementor-widget-text-editor" data-id="38446d92" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Your Spaces dashboard comes packed with powerful native apps build by Cisco. But that’s not all! Browse through industry-specific apps built by our leading partners.</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-10edb05f elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="10edb05f" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="/store/apps/">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Browse Apps</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443ac4",
  },
  {
    timeStamp: 1687752632.467,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 160,
      Y: 1468,
      scrollX: 0,
      scrollY: 1107.3333740234375,
      HTMLElement: '<span class="elementor-button-text">Browse Outcomes</span>',
    },
    _id: "649922e8a9da3f3a62443ac5",
  },
  {
    timeStamp: 1687752632.702,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 160,
      Y: 1468,
      scrollX: 0,
      scrollY: 1107.3333740234375,
      HTMLElement: '<span class="elementor-button-text">Browse Outcomes</span>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443ac6",
  },
  {
    timeStamp: 1687752632.703,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 7.507 },
    _id: "649922e8a9da3f3a62443ac7",
  },
  {
    timeStamp: 1687752633.479,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 160,
      Y: 1468,
      scrollX: 0,
      scrollY: 1107.3333740234375,
      HTMLElement: '<span class="elementor-button-text">Browse Outcomes</span>',
    },
    _id: "649922e8a9da3f3a62443ac8",
  },
  {
    timeStamp: 1687752634.463,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443ac9",
  },
  {
    timeStamp: 1687752635.205,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/outcomes/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443aca",
  },
  {
    timeStamp: 1687752637.833,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 30,
      Y: 569,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<input id="wpf_outcomes_90" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">',
    },
    _id: "649922e8a9da3f3a62443acb",
  },
  {
    timeStamp: 1687752638.049,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 30,
      Y: 569,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<input id="wpf_outcomes_90" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443acc",
  },
  {
    timeStamp: 1687752638.058,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 30,
      Y: 569,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<form data-post-id="6868" data-slug="outcomes" action="https://spaces.cisco.com/store/outcomes/" data-shop="" method="get" class="wpf_form wpf_form_outcomes wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="outcomes">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_outcomesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesindustry_52">\n                                                                    <input id="wpf_outcomes_52" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_outcomes_52">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_72">\n                                                                    <input id="wpf_outcomes_72" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_outcomes_72">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_77">\n                                                                    <input id="wpf_outcomes_77" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_outcomes_77">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_99">\n                                                                    <input id="wpf_outcomes_99" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_outcomes_99">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_131">\n                                                                    <input id="wpf_outcomes_131" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_outcomes_131">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_158">\n                                                                    <input id="wpf_outcomes_158" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_outcomes_158">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_outcomesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesfunction_67">\n                                                                    <input id="wpf_outcomes_67" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_outcomes_67">\n                            Facilities &amp; Workspace                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_81">\n                                                                    <input id="wpf_outcomes_81" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_outcomes_81">\n                            HR                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_90">\n                                                                    <input id="wpf_outcomes_90" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_outcomes_90">\n                            IT                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_102">\n                                                                    <input id="wpf_outcomes_102" type="checkbox" name="wpf_browse-by-job-functions[]" value="marketing">\n                        <label for="wpf_outcomes_102">\n                            Marketing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_114">\n                                                                    <input id="wpf_outcomes_114" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_outcomes_114">\n                            Operations                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_143">\n                                                                    <input id="wpf_outcomes_143" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_outcomes_143">\n                            Strategy &amp; Data                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443acd",
  },
  {
    timeStamp: 1687752638.836,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 30,
      Y: 569,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<form data-post-id="6868" data-slug="outcomes" action="https://spaces.cisco.com/store/outcomes/" data-shop="" method="get" class="wpf_form wpf_form_outcomes wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="outcomes">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_outcomesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesindustry_52">\n                                                                    <input id="wpf_outcomes_52" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_outcomes_52">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_72">\n                                                                    <input id="wpf_outcomes_72" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_outcomes_72">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_77">\n                                                                    <input id="wpf_outcomes_77" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_outcomes_77">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_99">\n                                                                    <input id="wpf_outcomes_99" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_outcomes_99">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_131">\n                                                                    <input id="wpf_outcomes_131" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_outcomes_131">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_158">\n                                                                    <input id="wpf_outcomes_158" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_outcomes_158">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_outcomesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesfunction_67">\n                                                                    <input id="wpf_outcomes_67" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_outcomes_67">\n                            Facilities &amp; Workspace                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_81">\n                                                                    <input id="wpf_outcomes_81" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_outcomes_81">\n                            HR                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_90">\n                                                                    <input id="wpf_outcomes_90" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_outcomes_90">\n                            IT                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_102">\n                                                                    <input id="wpf_outcomes_102" type="checkbox" name="wpf_browse-by-job-functions[]" value="marketing">\n                        <label for="wpf_outcomes_102">\n                            Marketing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_114">\n                                                                    <input id="wpf_outcomes_114" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_outcomes_114">\n                            Operations                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_143">\n                                                                    <input id="wpf_outcomes_143" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_outcomes_143">\n                            Strategy &amp; Data                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443ace",
  },
  {
    timeStamp: 1687752642.441,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 27,
      Y: 231,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<input id="wpf_outcomes_72" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">',
    },
    _id: "649922e8a9da3f3a62443acf",
  },
  {
    timeStamp: 1687752642.657,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 27,
      Y: 231,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<input id="wpf_outcomes_72" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443ad0",
  },
  {
    timeStamp: 1687752642.665,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 27,
      Y: 231,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<form data-post-id="6868" data-slug="outcomes" action="https://spaces.cisco.com/store/outcomes/" data-shop="" method="get" class="wpf_form wpf_form_outcomes wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="outcomes">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_outcomesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesindustry_52">\n                                                                    <input id="wpf_outcomes_52" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_outcomes_52">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_72">\n                                                                    <input id="wpf_outcomes_72" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare" data-gtm-form-interact-field-id="1">\n                        <label for="wpf_outcomes_72">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_77">\n                                                                    <input id="wpf_outcomes_77" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_outcomes_77">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_99">\n                                                                    <input id="wpf_outcomes_99" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_outcomes_99">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_131">\n                                                                    <input id="wpf_outcomes_131" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_outcomes_131">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_158">\n                                                                    <input id="wpf_outcomes_158" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_outcomes_158">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_outcomesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesfunction_67">\n                                                                    <input id="wpf_outcomes_67" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_outcomes_67">\n                            Facilities &amp; Workspace                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_81">\n                                                                    <input id="wpf_outcomes_81" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_outcomes_81">\n                            HR                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_90">\n                                                                    <input id="wpf_outcomes_90" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_outcomes_90">\n                            IT                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_102">\n                                                                    <input id="wpf_outcomes_102" type="checkbox" name="wpf_browse-by-job-functions[]" value="marketing">\n                        <label for="wpf_outcomes_102">\n                            Marketing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_114">\n                                                                    <input id="wpf_outcomes_114" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_outcomes_114">\n                            Operations                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_143">\n                                                                    <input id="wpf_outcomes_143" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_outcomes_143">\n                            Strategy &amp; Data                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443ad1",
  },
  {
    timeStamp: 1687752643.444,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 27,
      Y: 231,
      scrollX: 0,
      scrollY: 22,
      HTMLElement:
        '<form data-post-id="6868" data-slug="outcomes" action="https://spaces.cisco.com/store/outcomes/" data-shop="" method="get" class="wpf_form wpf_form_outcomes wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="outcomes">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_outcomesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesindustry_52">\n                                                                    <input id="wpf_outcomes_52" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_outcomes_52">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_72">\n                                                                    <input id="wpf_outcomes_72" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare" data-gtm-form-interact-field-id="1">\n                        <label for="wpf_outcomes_72">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_77">\n                                                                    <input id="wpf_outcomes_77" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_outcomes_77">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_99">\n                                                                    <input id="wpf_outcomes_99" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_outcomes_99">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_131">\n                                                                    <input id="wpf_outcomes_131" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_outcomes_131">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesindustry_158">\n                                                                    <input id="wpf_outcomes_158" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_outcomes_158">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_outcomesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_outcomes_item_pa_outcomesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_outcomesfunction_67">\n                                                                    <input id="wpf_outcomes_67" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_outcomes_67">\n                            Facilities &amp; Workspace                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_81">\n                                                                    <input id="wpf_outcomes_81" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_outcomes_81">\n                            HR                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_90">\n                                                                    <input id="wpf_outcomes_90" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_outcomes_90">\n                            IT                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_102">\n                                                                    <input id="wpf_outcomes_102" type="checkbox" name="wpf_browse-by-job-functions[]" value="marketing">\n                        <label for="wpf_outcomes_102">\n                            Marketing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_114">\n                                                                    <input id="wpf_outcomes_114" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_outcomes_114">\n                            Operations                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_outcomesfunction_143">\n                                                                    <input id="wpf_outcomes_143" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_outcomes_143">\n                            Strategy &amp; Data                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443ad2",
  },
  {
    timeStamp: 1687752646.552,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 650,
      Y: 672,
      scrollX: 8,
      scrollY: 240,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding.png 640w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649922e8a9da3f3a62443ad3",
  },
  {
    timeStamp: 1687752646.785,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 650,
      Y: 672,
      scrollX: 8,
      scrollY: 240,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding.png 640w" sizes="(max-width: 300px) 100vw, 300px">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443ad4",
  },
  {
    timeStamp: 1687752646.787,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 11.583 },
    _id: "649922e8a9da3f3a62443ad5",
  },
  {
    timeStamp: 1687752647.554,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 650,
      Y: 672,
      scrollX: 8,
      scrollY: 240,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/10/Outcome-SeamlessOnboarding.png 640w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649922e8a9da3f3a62443ad6",
  },
  {
    timeStamp: 1687752648.699,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443ad7",
  },
  {
    timeStamp: 1687752649.485,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/store/product/seamless-wi-fi-onboarding/",
      DOMLoadTime: 0,
    },
    _id: "649922e8a9da3f3a62443ad8",
  },
  {
    timeStamp: 1687752650.943,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 700,
      Y: 507,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div data-elementor-type="product" data-elementor-id="6774" class="elementor elementor-6774 elementor-location-single post-3588 product type-product status-publish has-post-thumbnail product_cat-outcomes product_tag-guest-onboarding product_tag-marketing first instock shipping-taxable product-type-simple product">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-397e022c elementor-section-content-bottom elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="397e022c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-no">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-46de9f98" data-id="46de9f98" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-23f707d1 elementor-widget elementor-widget-template" data-id="23f707d1" data-element_type="widget" data-widget_type="template.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-template">\n\t\t\t\t\t<div data-elementor-type="header" data-elementor-id="6751" class="elementor elementor-6751 elementor-location-single">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-34bc35ab elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="34bc35ab" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-2078817" data-id="2078817" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-7e715581 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7e715581" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4598a304" data-id="4598a304" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5763b038 elementor-widget__width-initial elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="5763b038" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/">\n\t\t\t\t\t\t\t<img width="300" height="114" src="https://spaces.cisco.com/store/wp-content/uploads/2022/01/cisco-spaces-whte.svg" class="attachment-medium size-medium wp-image-7342" alt="" loading="lazy">\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-5fad8a47 elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-hidden-mobile elementor-view-default elementor-widget elementor-widget-icon" data-id="5fad8a47" data-element_type="widget" data-widget_type="icon.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-icon-wrapper">\n\t\t\t<div class="elementor-icon">\n\t\t\t<i aria-hidden="true" class="fas fa-chevron-right"></i>\t\t\t</div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-22c0ebb elementor-widget__width-initial elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="22c0ebb" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/">\n\t\t\t\t\t\t\t<img width="300" height="114" src="https://spaces.cisco.com/store/wp-content/uploads/2022/01/cisco-spaces-whte.svg" class="attachment-medium size-medium wp-image-7342" alt="" loading="lazy">\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-424b3b19 elementor-widget__width-initial elementor-widget elementor-widget-image" data-id="424b3b19" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="/store">\n\t\t\t\t\t\t\t<img width="201" height="23" src="https://spaces.cisco.com/store/wp-content/uploads/2022/01/Outcome-Store-Full.svg" class="attachment-full size-full wp-image-63" alt="" loading="lazy">\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-14436bdc" data-id="14436bdc" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3239e7c9 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget__width-auto elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="3239e7c9" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\\&quot;fas fa-angle-down\\&quot;><\\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css">\t\t\t<nav class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-drop-in">\n\t\t\t\t<ul id="menu-1-3239e7c9" class="elementor-nav-menu" data-smartmenus-id="16877526493821765"><li class="hide-desktop menu-item menu-item-type-custom menu-item-object-custom menu-item-6177"><a href="/" class="elementor-item">Go to Spaces website</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6171"><a href="/store" class="elementor-item">Discover</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6957"><a href="https://spaces.cisco.com/store/apps/" class="elementor-item">Applications</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6958"><a href="https://spaces.cisco.com/store/device/" class="elementor-item">Devices</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6959"><a href="https://spaces.cisco.com/store/outcomes/" class="elementor-item">Outcomes</a></li>\n</ul>\t\t\t</nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open eicon-menu-bar"></i><i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close eicon-close"></i>\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style="width: 1263px; left: 0px; top: 33px; --menu-height: 0;">\n\t\t\t\t<ul id="menu-2-3239e7c9" class="elementor-nav-menu" data-smartmenus-id="16877526493834937"><li class="hide-desktop menu-item menu-item-type-custom menu-item-object-custom menu-item-6177"><a href="/" class="elementor-item" tabindex="-1">Go to Spaces website</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6171"><a href="/store" class="elementor-item" tabindex="-1">Discover</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6957"><a href="https://spaces.cisco.com/store/apps/" class="elementor-item" tabindex="-1">Applications</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6958"><a href="https://spaces.cisco.com/store/device/" class="elementor-item" tabindex="-1">Devices</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6959"><a href="https://spaces.cisco.com/store/outcomes/" class="elementor-item" tabindex="-1">Outcomes</a></li>\n</ul>\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5e1270c2" data-id="5e1270c2" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-170f5a4d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="170f5a4d" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-19569b74 elementor-hidden-mobile" data-id="19569b74" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7141e73d" data-id="7141e73d" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3da8a611 elementor-search-form--skin-minimal elementor-widget__width-inherit elementor-widget elementor-widget-search-form" data-id="3da8a611" data-element_type="widget" data-settings="{&quot;skin&quot;:&quot;minimal&quot;}" data-widget_type="search-form.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css">\t\t<form class="elementor-search-form" role="search" action="https://spaces.cisco.com/store" method="get">\n\t\t\t\t\t\t\t\t\t<div class="elementor-search-form__container">\n\t\t\t\t\t\t\t\t\t<div class="elementor-search-form__icon">\n\t\t\t\t\t\t<i aria-hidden="true" class="fas fa-search"></i>\t\t\t\t\t\t<span class="elementor-screen-only">Search</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<input placeholder="Search..." class="elementor-search-form__input" type="search" name="s" title="Search" value="">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-32525c6e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="32525c6e" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-10b20b4f" data-id="10b20b4f" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-65a02baa elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="65a02baa" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css">\t\t<ul class="elementor-icon-list-items elementor-inline-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item elementor-inline-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Home /</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item elementor-inline-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/outcomes-2/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Outcomes /</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item elementor-inline-item">\n\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Seamless Wi-Fi Onboarding</span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-5840044b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5840044b" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-64aee5a" data-id="64aee5a" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3531b92c elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="3531b92c" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="https://spaces.cisco.com/store/wp-content/uploads/elementor/thumbs/Outcome-SeamlessOnboarding-pk6766jld6fmf3n0yevcmw7yvs9pfpgwfaee7ay994.png" title="Outcome-[SeamlessOnboarding]" alt="Outcome-[SeamlessOnboarding]" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-3559db15 elementor-widget__width-auto elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading" data-id="3559db15" data-element_type="widget" data-widget_type="woocommerce-product-title.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce.min.css"><h1 class="product_title entry-title elementor-heading-title elementor-size-default">Seamless Wi-Fi Onboarding</h1>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-3ffe5a9e elementor-widget elementor-widget-woocommerce-product-short-description" data-id="3ffe5a9e" data-element_type="widget" data-widget_type="woocommerce-product-short-description.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<div class="woocommerce-product-details__short-description">\n\t<p>Drive differentiated loyalty experiences and zero-touch Wi-Fi onboarding via OpenRoaming</p>\n</div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-16e97032" data-id="16e97032" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-7b951841 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7b951841" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1fb74eb0" data-id="1fb74eb0" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-48bc8955 elementor-align-justify elementor-widget elementor-widget-button" data-id="48bc8955" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-3cddf89c elementor-align-justify elementor-widget elementor-widget-button" data-id="3cddf89c" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-74ddbad4 elementor-widget elementor-widget-html" data-id="74ddbad4" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\n\nAlready have DNA Spaces? <div class="login"><span style="text-decoration:underline">Login here</span><ul class="login_list"> <li><a href="https://dnaspaces.io/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1&amp;__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.14.1687751844798&amp;__hsfp=524412920" target="_blank">Global</a></li>\n \t<li><a href="https://dnaspaces.eu/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1&amp;__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.14.1687751844798&amp;__hsfp=524412920" target="_blank">Europe</a></li></ul></div> \n<p></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3906c815 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3906c815" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a19d798" data-id="4a19d798" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5e5abd55 elementor-widget elementor-widget-heading" data-id="5e5abd55" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">About Seamless Wi-Fi Onboarding</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-512cfd67 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="512cfd67" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3049cdb5" data-id="3049cdb5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69a0de0 outcomesdescr elementor-widget elementor-widget-woocommerce-product-content" data-id="69a0de0" data-element_type="widget" data-widget_type="woocommerce-product-content.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h5><span style="color: #00bceb"><strong>Why Seamless Wi-Fi Onboarding?</strong></span></h5>\n<p>Wi-Fi onboarding can become&nbsp; a unique touchpoint for you to deliver a seamless experience for your (new &amp; repeat) customers while collecting value data for your CRM</p>\n<p>&nbsp;</p>\n<h5><span style="color: #00bceb"><strong>What do we offer?</strong></span></h5>\n<p>From zero touch onboarding to differentiated loyalty experiences; from full indoor coverage to new revenue streams – make your Wi-Fi work for you. Take back control with easy to use apps from Cisco DNA Spaces</p>\n<ul>\n<li><span lang="EN-US" data-contrast="none" data-usefontface="true">A zero touch, seamless and secure&nbsp;</span><span lang="EN-US" data-contrast="none" data-usefontface="true">onboarding&nbsp;</span><span lang="EN-US" data-contrast="none" data-scheme-color="@FFFFFF,," data-usefontface="true">experience for people in your buildings</span></li>\n<li>Reliable and full indoor coverage with an opportunity to monetize your Wi-Fi</li>\n</ul>\n<p>You can achieve all of this with our native applications!</p>\n<p>&nbsp;</p>\n<h5><span style="color: #00bceb"><strong>How does it work?</strong></span></h5>\n<p>With a combination of Captive Portals and OpenRoaming (native apps available with Cisco DNA Spaces), you can unlock Next-Gen Seamless Onboarding for your customers</p>\n<ul>\n<li>Choose a readymade template from Instant Captive Portals, upload your company logo and save to deploy your instant captive portals</li>\n<li>Acquire new customers, provide differentiated onboarding experiences &amp;&nbsp;contextually engage with them</li>\n<li>Gets insights into customer behavior with increased Wi-Fi attach rate</li>\n</ul>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-75adecc5 elementor-widget elementor-widget-spacer" data-id="75adecc5" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}</style>\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-86168d7 elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp" data-id="86168d7" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4fbc8e70" data-id="4fbc8e70" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated e-swiper-container">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-58236a0 elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-id="58236a0" data-element_type="widget" data-settings="{&quot;slides_to_show&quot;:&quot;1&quot;,&quot;navigation&quot;:&quot;both&quot;,&quot;autoplay&quot;:&quot;yes&quot;,&quot;pause_on_hover&quot;:&quot;yes&quot;,&quot;pause_on_interaction&quot;:&quot;yes&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;yes&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500}" data-widget_type="image-carousel.default" aria-roledescription="carousel" aria-label="Carousel | Horizontal scrolling: Arrow Left &amp; Right">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-image-carousel .swiper,.elementor-widget-image-carousel .swiper-container{position:static}.elementor-widget-image-carousel .swiper-container .swiper-slide figure,.elementor-widget-image-carousel .swiper .swiper-slide figure{line-height:inherit}.elementor-widget-image-carousel .swiper-slide{text-align:center}.elementor-image-carousel-wrapper:not(.swiper-container-initialized):not(.swiper-initialized) .swiper-slide{max-width:calc(100% / var(--e-image-carousel-slides-to-show, 3))}</style>\t\t<div class="elementor-image-carousel-wrapper swiper-container swiper-container-initialized swiper-container-horizontal" dir="ltr">\n\t\t\t<div class="elementor-image-carousel swiper-wrapper" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-1203px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate swiper-slide-prev" role="group" aria-roledescription="slide" aria-label="4 of 4" data-swiper-slide-index="3" style="width: 1203px;" aria-hidden="true" inert=""><figure class="swiper-slide-inner"><img class="swiper-slide-image" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/DNA-Spaces-Openroaming-Screenshot.png" alt="DNA-Spaces-Openroaming-Screenshot"></figure></div>\n\t\t\t\t\t\t\t\t<div class="swiper-slide swiper-slide-active" role="group" aria-roledescription="slide" aria-label="1 of 4" data-swiper-slide-index="0" style="width: 1203px;"><figure class="swiper-slide-inner"><img class="swiper-slide-image" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/DNA-Spaces-Instant-Captive-Portals.png" alt="DNA-Spaces-Instant-Captive-Portals"></figure></div><div class="swiper-slide swiper-slide-next" role="group" aria-roledescription="slide" aria-label="2 of 4" data-swiper-slide-index="1" style="width: 1203px;" aria-hidden="true" inert=""><figure class="swiper-slide-inner"><img class="swiper-slide-image" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/DNA-Spaces-Openroaming-Screenshot-3.png" alt="DNA-Spaces-Openroaming-Screenshot-3"></figure></div><div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="3 of 4" data-swiper-slide-index="2" style="width: 1203px;" aria-hidden="true" inert=""><figure class="swiper-slide-inner"><img class="swiper-slide-image" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/DNA-Spaces-Openroaming-Screenshot-2.png" alt="DNA-Spaces-Openroaming-Screenshot-2"></figure></div><div class="swiper-slide swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="4 of 4" data-swiper-slide-index="3" style="width: 1203px;" aria-hidden="true" inert=""><figure class="swiper-slide-inner"><img class="swiper-slide-image" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/DNA-Spaces-Openroaming-Screenshot.png" alt="DNA-Spaces-Openroaming-Screenshot"></figure></div>\t\t\t<div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-roledescription="slide" aria-label="1 of 4" data-swiper-slide-index="0" style="width: 1203px;" aria-hidden="true" inert=""><figure class="swiper-slide-inner"><img class="swiper-slide-image" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/DNA-Spaces-Instant-Captive-Portals.png" alt="DNA-Spaces-Instant-Captive-Portals"></figure></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0" aria-label="Previous slide">\n\t\t\t\t\t\t<i aria-hidden="true" class="eicon-chevron-left"></i>\t\t\t\t\t</div>\n\t\t\t\t\t<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0" aria-label="Next slide">\n\t\t\t\t\t\t<i aria-hidden="true" class="eicon-chevron-right"></i>\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" data-bullet-index="0" aria-label="Go to slide 1" tabindex="0" role="button"></span><span class="swiper-pagination-bullet" data-bullet-index="1" aria-label="Go to slide 2" role="button"></span><span class="swiper-pagination-bullet" data-bullet-index="2" aria-label="Go to slide 3" role="button"></span><span class="swiper-pagination-bullet" data-bullet-index="3" aria-label="Go to slide 4" role="button"></span></div>\n\t\t\t\t\t\t\t\t\t<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-23a3c877 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23a3c877" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2cc0438b" data-id="2cc0438b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5633b122 elementor-widget elementor-widget-heading" data-id="5633b122" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">Use Cases</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-217deeab elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="217deeab" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6e9da005" data-id="6e9da005" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-ae55be0 elementor-widget elementor-widget-text-editor" data-id="ae55be0" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t<ul>\n<li>Monetize through sponsors/events/concessions &amp; other tenants</li>\n<li>Actively engage with loyalty members to create differentiated experiences through app notifications (welcome message, credit card offering, etc)</li>\n<li>Better indoor coverage with Wi-Fi connections</li>\n<li>Customer &amp; operational insights</li>\n<li>Additional revenue for Wi-Fi offload</li>\n</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-5291ecf2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5291ecf2" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e71ab8e" data-id="1e71ab8e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-59f7bee3 elementor-widget elementor-widget-heading" data-id="59f7bee3" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">Setup requirements</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-e1a1a99 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e1a1a99" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-19120f83" data-id="19120f83" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-78086ed3 elementor-widget elementor-widget-text-editor" data-id="78086ed3" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>You can deploy this outcome with our native apps – Openroaming &amp; Captive Portals and a host of our partner apps. You will need:</p>\n<ul>\n<li>DNA Spaces licenses –\n<ul>\n<li>ACT license to use native apps</li>\n<li>Extend License to use partner apps</li>\n</ul>\n</li>\n<li>Spaces Connector Deployment</li>\n</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-6753ef46 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6753ef46" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5371611f" data-id="5371611f" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5815e49e elementor-widget elementor-widget-heading" data-id="5815e49e" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">FAQs</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3f25df51 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3f25df51" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-29838f0f" data-id="29838f0f" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-30490665 elementor-widget elementor-widget-text-editor" data-id="30490665" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-5718bc10 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5718bc10" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4883f22e" data-id="4883f22e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1e2a05e elementor-invisible elementor-widget elementor-widget-heading" data-id="1e2a05e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h3 class="elementor-heading-title elementor-size-default">Related Apps &amp; Devices</h3>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-5ab648a2 elementor-grid-5 elementor-product-loop-item--align-center elementor-grid-tablet-3 elementor-grid-mobile-2 elementor-products-grid elementor-wc-products elementor-widget elementor-widget-woocommerce-product-upsell" data-id="5ab648a2" data-element_type="widget" data-widget_type="woocommerce-product-upsell.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\n\t<section class="up-sells upsells products">\n\t\t\t\t\t<h2>You may also like…</h2>\n\t\t\n\t\t<ul class="products elementor-grid columns-5">\n\n\t\t\t\n\t\t\t\t<li class="product type-product post-2200 status-publish first instock product_cat-apps product_tag-carrier-offload product_tag-guest-onboarding has-post-thumbnail shipping-taxable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/googles-orion-wi-fi/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="156" height="156" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Partner-Logo-Stanley-1-1.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Partner-Logo-Stanley-1-1.png 156w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Partner-Logo-Stanley-1-1-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Partner-Logo-Stanley-1-1-150x150.png 150w" sizes="(max-width: 156px) 100vw, 156px"><h2 class="woocommerce-loop-product__title">Google’s Orion Wi-Fi</h2>\n</a>Seamless guest onboarding and Carrier Wifi Offload<a href="https://spaces.cisco.com/store/product/googles-orion-wi-fi/" data-quantity="1" class="button product_type_simple" data-product_id="2200" data-product_sku="" aria-label="Read more about “Google\'s Orion Wi-Fi”" aria-describedby="" rel="nofollow">Read more</a></li>\n\n\t\t\t\n\t\t\t\t<li class="product type-product post-118 status-publish instock product_cat-apps product_tag-apps product_tag-educationcampus product_tag-guest-onboarding product_tag-hospitalityvenue product_tag-it product_tag-marketing product_tag-seamless product_tag-workspaces has-post-thumbnail shipping-taxable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/open-roaming/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="152" height="152" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/Open-Roaming-icon.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/08/Open-Roaming-icon.png 152w, https://spaces.cisco.com/store/wp-content/uploads/2021/08/Open-Roaming-icon-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/08/Open-Roaming-icon-100x100.png 100w" sizes="(max-width: 152px) 100vw, 152px"><h2 class="woocommerce-loop-product__title">Open Roaming</h2>\n</a>Connect quickly, automatically, and securely to your trusted Wi-Fi <span style="color: #00c9f1;"> <strong>(By Cisco Spaces)</strong></span><a href="https://spaces.cisco.com/store/product/open-roaming/" data-quantity="1" class="button product_type_simple" data-product_id="118" data-product_sku="" aria-label="Read more about “Open Roaming”" aria-describedby="" rel="nofollow">Read more</a></li>\n\n\t\t\t\n\t\t\t\t<li class="product type-product post-117 status-publish instock product_cat-apps product_tag-apps product_tag-educationcampus product_tag-guest-onboarding product_tag-healthcare product_tag-hospitalityvenue product_tag-it product_tag-marketing product_tag-retail product_tag-workspaces has-post-thumbnail shipping-taxable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/instant-captive-portals/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="152" height="152" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/InstantCaptivePortals-icon.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/08/InstantCaptivePortals-icon.png 152w, https://spaces.cisco.com/store/wp-content/uploads/2021/08/InstantCaptivePortals-icon-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/08/InstantCaptivePortals-icon-100x100.png 100w" sizes="(max-width: 152px) 100vw, 152px"><h2 class="woocommerce-loop-product__title">Instant Captive Portals</h2>\n</a>Achieve additional value when visitors connect to your Wi-Fi <span style="color: #00c9f1;"> <strong>(By Cisco Spaces)</strong></span><a href="https://spaces.cisco.com/store/product/instant-captive-portals/" data-quantity="1" class="button product_type_simple" data-product_id="117" data-product_sku="" aria-label="Read more about “Instant Captive Portals”" aria-describedby="" rel="nofollow">Read more</a></li>\n\n\t\t\t\n\t\t\t\t<li class="product type-product post-64 status-publish instock product_cat-apps product_tag-employee-experience product_tag-guest-onboarding product_tag-it has-post-thumbnail shipping-taxable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/captive-portals/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="152" height="152" src="https://spaces.cisco.com/store/wp-content/uploads/2021/08/Captive-Portals-icon.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/08/Captive-Portals-icon.png 152w, https://spaces.cisco.com/store/wp-content/uploads/2021/08/Captive-Portals-icon-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/08/Captive-Portals-icon-100x100.png 100w" sizes="(max-width: 152px) 100vw, 152px"><h2 class="woocommerce-loop-product__title">Captive Portals</h2>\n</a>Maximize the value of the wi-fi onboarding process for your visitors <span style="color: #00c9f1;"><strong>(By Cisco Spaces)</strong></span><a href="https://spaces.cisco.com/store/product/captive-portals/" data-quantity="1" class="button product_type_simple" data-product_id="64" data-product_sku="" aria-label="Read more about “Captive Portals”" aria-describedby="" rel="nofollow">Read more</a></li>\n\n\t\t\t\n\t\t</ul>\n\n\t</section>\n\n\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3195df84 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3195df84" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-59d47ea6" data-id="59d47ea6" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-a56470d elementor-widget elementor-widget-template" data-id="a56470d" data-element_type="widget" data-widget_type="template.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-template">\n\t\t\t\t\t<div data-elementor-type="footer" data-elementor-id="6799" class="elementor elementor-6799 elementor-location-single">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-1a660467 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1a660467" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-3e065844 elementor-invisible" data-id="3e065844" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t<div class="elementor-background-overlay"></div>\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-2f6ef101 elementor-widget elementor-widget-heading" data-id="2f6ef101" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">Industry Solutions​</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-1726f24f elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1726f24f" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<ul class="elementor-icon-list-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/workspaces/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Workspaces</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/healthcare/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Healthcare</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/manufacturing/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Manufacturing</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/education-and-campus/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Education &amp; Campuses</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/retail/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Retail</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-3349d27 elementor-invisible" data-id="3349d27" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t<div class="elementor-background-overlay"></div>\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1007cc34 elementor-widget elementor-widget-heading" data-id="1007cc34" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">Job Functions</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-2c72a9bb elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="2c72a9bb" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<ul class="elementor-icon-list-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/it/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">IT Teams</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/facilities/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Facilities Teams</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/marketing/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Marketing Teams</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/operations/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Operations Teams</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/strategy-data/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Strategy &amp; Data Teams</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-311da5c6 elementor-invisible" data-id="311da5c6" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t<div class="elementor-background-overlay"></div>\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-28b670a8 elementor-widget elementor-widget-heading" data-id="28b670a8" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">About Cisco Spaces</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-69cbaff3 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="69cbaff3" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<ul class="elementor-icon-list-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/why-cisco-dna-spaces/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Why Spaces</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/packages/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Packages</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/setupguide">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Setup Guide</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/support/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Support</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/faqs/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">FAQs</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-bb334eb elementor-invisible" data-id="bb334eb" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3859bea3 elementor-widget elementor-widget-heading" data-id="3859bea3" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">Outcome Store​</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-5e48d553 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5e48d553" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<ul class="elementor-icon-list-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Store</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/apps/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Applications</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/device/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Devices</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/store/outcomes/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Outcomes</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/device-partner-sign-up/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Become a Partner</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-21a95f04 elementor-invisible" data-id="21a95f04" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeIn&quot;,&quot;animation_delay&quot;:100}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-55fd5c57 elementor-align-center elementor-widget__width-inherit elementor-widget elementor-widget-button" data-id="55fd5c57" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="#storetop">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-icon elementor-align-icon-right">\n\t\t\t\t<i aria-hidden="true" class="fas fa-arrow-up"></i>\t\t\t</span>\n\t\t\t\t\t\t<span class="elementor-button-text">Back to top</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-76f976c elementor-widget elementor-widget-text-editor" data-id="76f976c" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>© 2023 Cisco. All Rights Reserved.&nbsp;&nbsp;</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443ad9",
  },
  {
    timeStamp: 1687752656.006,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1021,
      Y: 393,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649922e8a9da3f3a62443ada",
  },
  {
    timeStamp: 1687752656.226,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1021,
      Y: 393,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443adb",
  },
  {
    timeStamp: 1687752656.228,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 6.744 },
    _id: "649922e8a9da3f3a62443adc",
  },
  {
    timeStamp: 1687752657.007,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 1021,
      Y: 393,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649922e8a9da3f3a62443add",
  },
  {
    timeStamp: 1687752658.98,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443ade",
  },
  {
    timeStamp: 1687752659.429,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/free-demo/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443adf",
  },
  {
    timeStamp: 1687752661.572,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 332,
      Y: 551,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649922e8a9da3f3a62443ae0",
  },
  {
    timeStamp: 1687752661.792,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 332,
      Y: 551,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcname">Company name*</label>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443ae1",
  },
  {
    timeStamp: 1687752662.948,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 365,
      Y: 478,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443ae2",
  },
  {
    timeStamp: 1687752663.161,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 365,
      Y: 478,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443ae3",
  },
  {
    timeStamp: 1687752663.346,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 365,
      Y: 478,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443ae4",
  },
  {
    timeStamp: 1687752663.567,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 365,
      Y: 478,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443ae5",
  },
  {
    timeStamp: 1687752663.733,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443ae6",
  },
  {
    timeStamp: 1687752664.246,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443ae7",
  },
  {
    timeStamp: 1687752664.275,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443ae8",
  },
  {
    timeStamp: 1687752664.309,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443ae9",
  },
  {
    timeStamp: 1687752664.403,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443aea",
  },
  {
    timeStamp: 1687752664.462,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443aeb",
  },
  {
    timeStamp: 1687752664.533,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443aec",
  },
  {
    timeStamp: 1687752664.644,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443aed",
  },
  {
    timeStamp: 1687752664.808,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443aee",
  },
  {
    timeStamp: 1687752664.849,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443aef",
  },
  {
    timeStamp: 1687752665.111,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af0",
  },
  {
    timeStamp: 1687752665.236,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af1",
  },
  {
    timeStamp: 1687752665.238,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af2",
  },
  {
    timeStamp: 1687752665.333,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af3",
  },
  {
    timeStamp: 1687752665.337,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af4",
  },
  {
    timeStamp: 1687752665.419,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af5",
  },
  {
    timeStamp: 1687752665.457,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af6",
  },
  {
    timeStamp: 1687752665.488,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 365,
      Y: 478,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af7",
  },
  {
    timeStamp: 1687752665.527,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af8",
  },
  {
    timeStamp: 1687752665.557,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 365,
      Y: 478,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="djtitle">',
    },
    _id: "649922e8a9da3f3a62443af9",
  },
  {
    timeStamp: 1687752666.501,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 395,
      Y: 551,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcname">Company name*</label>',
    },
    _id: "649922e8a9da3f3a62443afa",
  },
  {
    timeStamp: 1687752666.724,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 395,
      Y: 551,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcname">Company name*</label>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443afb",
  },
  {
    timeStamp: 1687752666.73,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 395,
      Y: 551,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcname">Company name*</label>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443afc",
  },
  {
    timeStamp: 1687752667.194,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 368,
      Y: 541,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443afd",
  },
  {
    timeStamp: 1687752667.4,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 541,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443afe",
  },
  {
    timeStamp: 1687752667.408,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 368,
      Y: 541,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443aff",
  },
  {
    timeStamp: 1687752667.574,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 541,
      key: "C",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b00",
  },
  {
    timeStamp: 1687752667.7,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 541,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b01",
  },
  {
    timeStamp: 1687752667.713,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 541,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b02",
  },
  {
    timeStamp: 1687752667.828,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 541,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b03",
  },
  {
    timeStamp: 1687752667.927,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 541,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b04",
  },
  {
    timeStamp: 1687752667.986,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 541,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b05",
  },
  {
    timeStamp: 1687752668.057,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 541,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b06",
  },
  {
    timeStamp: 1687752668.124,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 541,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b07",
  },
  {
    timeStamp: 1687752668.167,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 368,
      Y: 541,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b08",
  },
  {
    timeStamp: 1687752668.203,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 541,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b09",
  },
  {
    timeStamp: 1687752668.228,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 368,
      Y: 541,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="dcname" required="">',
    },
    _id: "649922e8a9da3f3a62443b0a",
  },
  {
    timeStamp: 1687752669.215,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 355,
      Y: 623,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcountryn">Country</label>',
    },
    _id: "649922e8a9da3f3a62443b0b",
  },
  {
    timeStamp: 1687752669.433,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 355,
      Y: 623,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcountryn">Country</label>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b0c",
  },
  {
    timeStamp: 1687752669.437,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 355,
      Y: 623,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<label class="msforms-form-text-label" for="dcountryn">Country</label>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b0d",
  },
  {
    timeStamp: 1687752670.002,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 345,
      Y: 625,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b0e",
  },
  {
    timeStamp: 1687752670.19,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 345,
      Y: 625,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b0f",
  },
  {
    timeStamp: 1687752670.222,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 345,
      Y: 625,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b10",
  },
  {
    timeStamp: 1687752670.333,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 345,
      Y: 625,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b11",
  },
  {
    timeStamp: 1687752670.399,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 345,
      Y: 625,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b12",
  },
  {
    timeStamp: 1687752670.47,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 345,
      Y: 625,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b13",
  },
  {
    timeStamp: 1687752670.545,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 345,
      Y: 625,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b14",
  },
  {
    timeStamp: 1687752670.653,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 345,
      Y: 625,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b15",
  },
  {
    timeStamp: 1687752670.658,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 345,
      Y: 625,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b16",
  },
  {
    timeStamp: 1687752670.741,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 345,
      Y: 625,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b17",
  },
  {
    timeStamp: 1687752670.761,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 345,
      Y: 625,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b18",
  },
  {
    timeStamp: 1687752670.801,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 345,
      Y: 625,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b19",
  },
  {
    timeStamp: 1687752670.836,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 345,
      Y: 625,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b1a",
  },
  {
    timeStamp: 1687752670.895,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 345,
      Y: 625,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="dcountryn">',
    },
    _id: "649922e8a9da3f3a62443b1b",
  },
  {
    timeStamp: 1687752672.104,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 449,
      Y: 709,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649922e8a9da3f3a62443b1c",
  },
  {
    timeStamp: 1687752672.337,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 449,
      Y: 709,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b1d",
  },
  {
    timeStamp: 1687752673.148,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 420,
      Y: 464,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b1e",
  },
  {
    timeStamp: 1687752673.572,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 434,
      Y: 495,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b1f",
  },
  {
    timeStamp: 1687752673.745,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 434,
      Y: 495,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b20",
  },
  {
    timeStamp: 1687752673.878,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b21",
  },
  {
    timeStamp: 1687752673.961,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 434,
      Y: 495,
      scrollX: 0,
      scrollY: 100,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b22",
  },
  {
    timeStamp: 1687752674.386,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b23",
  },
  {
    timeStamp: 1687752674.42,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b24",
  },
  {
    timeStamp: 1687752674.454,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b25",
  },
  {
    timeStamp: 1687752674.489,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b26",
  },
  {
    timeStamp: 1687752674.523,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b27",
  },
  {
    timeStamp: 1687752674.555,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b28",
  },
  {
    timeStamp: 1687752674.589,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b29",
  },
  {
    timeStamp: 1687752674.623,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b2a",
  },
  {
    timeStamp: 1687752674.656,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b2b",
  },
  {
    timeStamp: 1687752674.679,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b2c",
  },
  {
    timeStamp: 1687752674.777,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b2d",
  },
  {
    timeStamp: 1687752674.848,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b2e",
  },
  {
    timeStamp: 1687752675.019,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "y",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b2f",
  },
  {
    timeStamp: 1687752675.054,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "y",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b30",
  },
  {
    timeStamp: 1687752675.131,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b31",
  },
  {
    timeStamp: 1687752675.24,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b32",
  },
  {
    timeStamp: 1687752675.562,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b33",
  },
  {
    timeStamp: 1687752675.648,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b34",
  },
  {
    timeStamp: 1687752675.715,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b35",
  },
  {
    timeStamp: 1687752675.81,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b36",
  },
  {
    timeStamp: 1687752675.846,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b37",
  },
  {
    timeStamp: 1687752675.871,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b38",
  },
  {
    timeStamp: 1687752675.989,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "l",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b39",
  },
  {
    timeStamp: 1687752676.024,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b3a",
  },
  {
    timeStamp: 1687752676.05,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "L",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b3b",
  },
  {
    timeStamp: 1687752676.22,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b3c",
  },
  {
    timeStamp: 1687752676.306,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b3d",
  },
  {
    timeStamp: 1687752676.351,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b3e",
  },
  {
    timeStamp: 1687752676.455,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b3f",
  },
  {
    timeStamp: 1687752676.572,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b40",
  },
  {
    timeStamp: 1687752676.575,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b41",
  },
  {
    timeStamp: 1687752676.627,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b42",
  },
  {
    timeStamp: 1687752676.649,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b43",
  },
  {
    timeStamp: 1687752676.711,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b44",
  },
  {
    timeStamp: 1687752676.757,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b45",
  },
  {
    timeStamp: 1687752676.79,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b46",
  },
  {
    timeStamp: 1687752676.827,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b47",
  },
  {
    timeStamp: 1687752676.867,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b48",
  },
  {
    timeStamp: 1687752676.996,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b49",
  },
  {
    timeStamp: 1687752677.09,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b4a",
  },
  {
    timeStamp: 1687752677.11,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b4b",
  },
  {
    timeStamp: 1687752677.191,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b4c",
  },
  {
    timeStamp: 1687752677.228,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b4d",
  },
  {
    timeStamp: 1687752677.268,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 495,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b4e",
  },
  {
    timeStamp: 1687752677.306,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b4f",
  },
  {
    timeStamp: 1687752677.351,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 495,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="dbemail" required="">',
    },
    _id: "649922e8a9da3f3a62443b50",
  },
  {
    timeStamp: 1687752678.316,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 434,
      Y: 559,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b51",
  },
  {
    timeStamp: 1687752678.533,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 434,
      Y: 559,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b52",
  },
  {
    timeStamp: 1687752678.672,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 434,
      Y: 559,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b53",
  },
  {
    timeStamp: 1687752678.888,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 434,
      Y: 559,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b54",
  },
  {
    timeStamp: 1687752678.94,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b55",
  },
  {
    timeStamp: 1687752678.986,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b56",
  },
  {
    timeStamp: 1687752679.151,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b57",
  },
  {
    timeStamp: 1687752679.157,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b58",
  },
  {
    timeStamp: 1687752679.172,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b59",
  },
  {
    timeStamp: 1687752679.187,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b5a",
  },
  {
    timeStamp: 1687752679.473,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b5b",
  },
  {
    timeStamp: 1687752679.614,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b5c",
  },
  {
    timeStamp: 1687752679.643,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b5d",
  },
  {
    timeStamp: 1687752679.705,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b5e",
  },
  {
    timeStamp: 1687752679.979,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b5f",
  },
  {
    timeStamp: 1687752680.049,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b60",
  },
  {
    timeStamp: 1687752680.203,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b61",
  },
  {
    timeStamp: 1687752680.272,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b62",
  },
  {
    timeStamp: 1687752680.378,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b63",
  },
  {
    timeStamp: 1687752680.448,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b64",
  },
  {
    timeStamp: 1687752680.585,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b65",
  },
  {
    timeStamp: 1687752680.655,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b66",
  },
  {
    timeStamp: 1687752680.788,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b67",
  },
  {
    timeStamp: 1687752680.857,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b68",
  },
  {
    timeStamp: 1687752681.373,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b69",
  },
  {
    timeStamp: 1687752681.438,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b6a",
  },
  {
    timeStamp: 1687752681.533,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b6b",
  },
  {
    timeStamp: 1687752681.59,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b6c",
  },
  {
    timeStamp: 1687752681.891,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b6d",
  },
  {
    timeStamp: 1687752681.954,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b6e",
  },
  {
    timeStamp: 1687752682.025,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b6f",
  },
  {
    timeStamp: 1687752682.068,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 434,
      Y: 559,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b70",
  },
  {
    timeStamp: 1687752682.086,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b71",
  },
  {
    timeStamp: 1687752682.128,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 434,
      Y: 559,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="dphonenumber" required="">',
    },
    _id: "649922e8a9da3f3a62443b72",
  },
  {
    timeStamp: 1687752683.027,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 433,
      Y: 640,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b73",
  },
  {
    timeStamp: 1687752683.253,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 433,
      Y: 640,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b74",
  },
  {
    timeStamp: 1687752683.37,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 433,
      Y: 640,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b75",
  },
  {
    timeStamp: 1687752683.449,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 640,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b76",
  },
  {
    timeStamp: 1687752683.599,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 433,
      Y: 640,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b77",
  },
  {
    timeStamp: 1687752683.644,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 640,
      key: "V",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b78",
  },
  {
    timeStamp: 1687752683.728,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 640,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b79",
  },
  {
    timeStamp: 1687752683.753,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 640,
      key: "v",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b7a",
  },
  {
    timeStamp: 1687752683.836,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 640,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b7b",
  },
  {
    timeStamp: 1687752683.909,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 640,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b7c",
  },
  {
    timeStamp: 1687752683.96,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 640,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b7d",
  },
  {
    timeStamp: 1687752683.964,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 640,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b7e",
  },
  {
    timeStamp: 1687752684.021,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 640,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b7f",
  },
  {
    timeStamp: 1687752684.027,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 640,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b80",
  },
  {
    timeStamp: 1687752684.03,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 640,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b81",
  },
  {
    timeStamp: 1687752684.083,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 640,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="dfname" required="">',
    },
    _id: "649922e8a9da3f3a62443b82",
  },
  {
    timeStamp: 1687752685.241,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 487,
      Y: 736,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b83",
  },
  {
    timeStamp: 1687752685.465,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 487,
      Y: 736,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b84",
  },
  {
    timeStamp: 1687752685.533,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 487,
      Y: 736,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b85",
  },
  {
    timeStamp: 1687752685.656,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b86",
  },
  {
    timeStamp: 1687752685.758,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 487,
      Y: 736,
      scrollX: 0,
      scrollY: 162,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b87",
  },
  {
    timeStamp: 1687752685.766,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "S",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b88",
  },
  {
    timeStamp: 1687752685.842,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b89",
  },
  {
    timeStamp: 1687752685.891,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b8a",
  },
  {
    timeStamp: 1687752685.967,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b8b",
  },
  {
    timeStamp: 1687752686.047,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b8c",
  },
  {
    timeStamp: 1687752686.091,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b8d",
  },
  {
    timeStamp: 1687752686.116,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b8e",
  },
  {
    timeStamp: 1687752686.235,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b8f",
  },
  {
    timeStamp: 1687752686.318,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b90",
  },
  {
    timeStamp: 1687752686.322,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b91",
  },
  {
    timeStamp: 1687752686.437,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b92",
  },
  {
    timeStamp: 1687752686.444,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b93",
  },
  {
    timeStamp: 1687752686.49,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b94",
  },
  {
    timeStamp: 1687752686.577,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b95",
  },
  {
    timeStamp: 1687752686.693,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 487,
      Y: 736,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b96",
  },
  {
    timeStamp: 1687752686.7,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b97",
  },
  {
    timeStamp: 1687752686.747,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 487,
      Y: 736,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="dlname" required="">',
    },
    _id: "649922e8a9da3f3a62443b98",
  },
  {
    timeStamp: 1687752687.859,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 362,
      Y: 951,
      scrollX: 0,
      scrollY: 400,
      HTMLElement: '<div class="elementor-spacer-inner"></div>',
    },
    _id: "649922e8a9da3f3a62443b99",
  },
  {
    timeStamp: 1687752688.076,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 362,
      Y: 951,
      scrollX: 0,
      scrollY: 400,
      HTMLElement: '<div class="elementor-spacer-inner"></div>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443b9a",
  },
  {
    timeStamp: 1687752689.905,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 648,
      Y: 283,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces</h4>',
    },
    _id: "649922e8a9da3f3a62443b9b",
  },
  {
    timeStamp: 1687752709.05,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 825,
      Y: 65,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="https://spaces.cisco.com/store/outcomes/" class="elementor-item">Outcomes</a>',
    },
    _id: "649922e8a9da3f3a62443b9c",
  },
  {
    timeStamp: 1687752709.23,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 49.803 },
    _id: "649922e8a9da3f3a62443b9d",
  },
  {
    timeStamp: 1687752709.248,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443b9e",
  },
  {
    timeStamp: 1687754735.149,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/?__hstc=181336504.738553f858dd2e355ac101ead3bbdbc5.1687754689434.1687754689434.1687754689434.1&__hssc=181336504.1.1687754689435&__hsfp=524412920",
      DOMLoadTime: 0,
    },
    _id: "649922e8a9da3f3a62443b9f",
  },
  {
    timeStamp: 1687754736.493,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 613,
      Y: 459,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/elementor/thumbs/sjsu-op-1-px7q3jdr2feiaxwoitsaxlo5cscyfrcwjq2f3x8lru.png" title="sjsu-op-1.png" alt="sjsu-op-1.png" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443ba0",
  },
  {
    timeStamp: 1687754738.157,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443ba1",
  },
  {
    timeStamp: 1687754739.098,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 757,
      Y: 7,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu" data-smartmenus-id="1687754735128711"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11318"><a href="/" class="elementor-item has-submenu" id="sm-1687754735128711-1" aria-haspopup="true" aria-controls="sm-1687754735128711-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687754735128711-2" role="group" aria-hidden="true" aria-labelledby="sm-1687754735128711-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.2.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.2.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style="width: 1263px; left: 0px; top: 39px;"><ul id="menu-2-69895735" class="elementor-nav-menu" data-smartmenus-id="16877547351292087"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11318"><a href="/" class="elementor-item has-submenu" tabindex="-1" id="sm-16877547351292087-1" aria-haspopup="true" aria-controls="sm-16877547351292087-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877547351292087-2" role="group" aria-hidden="true" aria-labelledby="sm-16877547351292087-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.2.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.2.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443ba2",
  },
  {
    timeStamp: 1687755003.472,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 265315.6999999881 },
    _id: "649922e8a9da3f3a62443ba3",
  },
  {
    timeStamp: 1687755004.262,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443ba4",
  },
  {
    timeStamp: 1687755005.177,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 915.9000000357628 },
    _id: "649922e8a9da3f3a62443ba5",
  },
  {
    timeStamp: 1687755005.822,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 710,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "649922e8a9da3f3a62443ba6",
  },
  {
    timeStamp: 1687755005.962,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 710,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "649922e8a9da3f3a62443ba7",
  },
  {
    timeStamp: 1687755006.823,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 710,
      Y: 175,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "649922e8a9da3f3a62443ba8",
  },
  {
    timeStamp: 1687755008.455,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 1014, Y: 51, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649922e8a9da3f3a62443ba9",
  },
  {
    timeStamp: 1687755011.3,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 276.162 },
    _id: "649922e8a9da3f3a62443baa",
  },
  {
    timeStamp: 1687755011.316,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443bab",
  },
  {
    timeStamp: 1687755050.907,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443bac",
  },
  {
    timeStamp: 1687755054.059,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 630,
      Y: 97,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<ul id="menu-1-5155cc2f" class="elementor-nav-menu" data-smartmenus-id="16877550494416206"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item has-submenu" id="sm-16877550494416206-1" aria-haspopup="true" aria-controls="sm-16877550494416206-2" aria-expanded="false">Solutions<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-2" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-1" aria-expanded="false">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item has-submenu" id="sm-16877550494416206-3" aria-haspopup="true" aria-controls="sm-16877550494416206-4" aria-expanded="false">By Business Need<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-4" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-3" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item has-submenu" id="sm-16877550494416206-5" aria-haspopup="true" aria-controls="sm-16877550494416206-6" aria-expanded="false">By Industry<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-6" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-5" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item has-submenu" id="sm-16877550494416206-7" aria-haspopup="true" aria-controls="sm-16877550494416206-8" aria-expanded="false">By Use Case<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-8" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-7" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item has-submenu" id="sm-16877550494416206-9" aria-haspopup="true" aria-controls="sm-16877550494416206-10" aria-expanded="false">Resources<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-10" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-9" aria-expanded="false">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item has-submenu" id="sm-16877550494416206-11" aria-haspopup="true" aria-controls="sm-16877550494416206-12" aria-expanded="false">LEARN<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-12" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-11" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item has-submenu" id="sm-16877550494416206-13" aria-haspopup="true" aria-controls="sm-16877550494416206-14" aria-expanded="false">EXPLORE<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-14" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-13" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" id="sm-16877550494416206-15" aria-haspopup="true" aria-controls="sm-16877550494416206-16" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877550494416206-16" role="group" aria-hidden="true" aria-labelledby="sm-16877550494416206-15" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.3.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.3.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul>',
    },
    _id: "649922e8a9da3f3a62443bad",
  },
  {
    timeStamp: 1687755055.171,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 535,
      Y: 32,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
    },
    _id: "649922e8a9da3f3a62443bae",
  },
  {
    timeStamp: 1687755055.401,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 535,
      Y: 32,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443baf",
  },
  {
    timeStamp: 1687755055.409,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 4.514 },
    _id: "649922e8a9da3f3a62443bb0",
  },
  {
    timeStamp: 1687755056.171,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 535,
      Y: 32,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
    },
    _id: "649922e8a9da3f3a62443bb1",
  },
  {
    timeStamp: 1687755057.448,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443bb2",
  },
  {
    timeStamp: 1687755057.781,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443bb3",
  },
  {
    timeStamp: 1687755059.608,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 624,
      Y: 391,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-727a448e animated fadeInUp" data-id="727a448e" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;fadeInUp&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-51018ca elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp" data-id="51018ca" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;animation&quot;:&quot;fadeInUp&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b01f378" data-id="b01f378" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-f49bc34 elementor-widget elementor-widget-heading" data-id="f49bc34" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">Discover Outcomes</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-738a67 elementor-widget elementor-widget-text-editor" data-id="738a67" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t<p>The world’s most powerful smart building cloud is at your finger tips.</p><p>Start leveraging your network infrastructure to drive business outcomes with Spaces.</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-124a9316 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="124a9316" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-sm" href="/store/outcomes/">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Browse Outcomes</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-250f6084" data-id="250f6084" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443bb4",
  },
  {
    timeStamp: 1687755067.97,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 587,
      Y: 4773,
      scrollX: 0,
      scrollY: 4644.66650390625,
      HTMLElement:
        '<div class="elementor-cta__content">\n\t\t\t\t\t\t\t\t\t<div class="elementor-content-item elementor-cta__content-item elementor-icon-wrapper elementor-cta__icon elementor-view-default elementor-animated-item--grow">\n\t\t\t\t\t\t<div class="elementor-icon">\n\t\t\t\t\t\t\t<i aria-hidden="true" class="fas fa-desktop"></i>\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<h5 class="elementor-cta__title elementor-cta__content-item elementor-content-item elementor-animated-item--grow">Workspaces</h5>\n\t\t\t\t\t\t\t\t\t<div class="elementor-cta__description elementor-cta__content-item elementor-content-item elementor-animated-item--grow">\n\t\t\t\t\t\tCreate safe and intelligent workspaces with an engaged and empowered workforce.\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443bb5",
  },
  {
    timeStamp: 1687755069.286,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 628,
      Y: 3435,
      scrollX: 0,
      scrollY: 3192,
      HTMLElement: '<span class="elementor-button-text">Browse Devices</span>',
    },
    _id: "649922e8a9da3f3a62443bb6",
  },
  {
    timeStamp: 1687755069.507,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 628,
      Y: 3435,
      scrollX: 0,
      scrollY: 3192,
      HTMLElement: '<span class="elementor-button-text">Browse Devices</span>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bb7",
  },
  {
    timeStamp: 1687755069.513,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 11.736 },
    _id: "649922e8a9da3f3a62443bb8",
  },
  {
    timeStamp: 1687755070.293,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 628,
      Y: 3435,
      scrollX: 0,
      scrollY: 3192,
      HTMLElement: '<span class="elementor-button-text">Browse Devices</span>',
    },
    _id: "649922e8a9da3f3a62443bb9",
  },
  {
    timeStamp: 1687755071.369,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443bba",
  },
  {
    timeStamp: 1687755071.893,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/device/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443bbb",
  },
  {
    timeStamp: 1687755074.886,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 243,
      Y: 307,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-6af39599 sticky-column elementor-widget elementor-widget-shortcode" data-id="6af39599" data-element_type="widget" data-widget_type="shortcode.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-shortcode">        <form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax" style="visibility: visible;" data-infinitybuffer="600">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="1">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>\n        </div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443bbc",
  },
  {
    timeStamp: 1687755076.17,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 24,
      Y: 357,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">',
    },
    _id: "649922e8a9da3f3a62443bbd",
  },
  {
    timeStamp: 1687755076.403,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 24,
      Y: 357,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bbe",
  },
  {
    timeStamp: 1687755076.414,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 24,
      Y: 357,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443bbf",
  },
  {
    timeStamp: 1687755077.184,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 24,
      Y: 357,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443bc0",
  },
  {
    timeStamp: 1687755080.549,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 16,
      Y: 735,
      scrollX: 0,
      scrollY: 200,
      HTMLElement:
        '<input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">',
    },
    _id: "649922e8a9da3f3a62443bc1",
  },
  {
    timeStamp: 1687755080.768,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 16,
      Y: 735,
      scrollX: 0,
      scrollY: 200,
      HTMLElement:
        '<input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bc2",
  },
  {
    timeStamp: 1687755080.779,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 16,
      Y: 735,
      scrollX: 0,
      scrollY: 200,
      HTMLElement:
        '<form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="1">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443bc3",
  },
  {
    timeStamp: 1687755081.556,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 16,
      Y: 735,
      scrollX: 0,
      scrollY: 200,
      HTMLElement:
        '<form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="1">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e8a9da3f3a62443bc4",
  },
  {
    timeStamp: 1687755084.193,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 660,
      Y: 699,
      scrollX: 0,
      scrollY: 200,
      HTMLElement:
        '<ul class="products elementor-grid columns-5">\n<li class="product type-product post-2437 status-publish first instock product_cat-devices has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/anchor-beacon-2/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">Anchor Beacon 2</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></span>\n</a><a href="?add-to-cart=2437" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2437" data-product_sku="" aria-label="Add “Anchor Beacon 2” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2825 status-publish instock product_cat-devices product_tag-asset-management product_tag-equipment-tracking product_tag-high-value-asset-management product_tag-infrared product_tag-motion-sensor has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/asset-tag-2/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">Asset Tag 2</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></span>\n</a><a href="?add-to-cart=2825" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2825" data-product_sku="" aria-label="Add “Asset Tag 2” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2446 status-publish instock product_cat-devices product_tag-asset-management product_tag-high-value-asset-management product_tag-space-utilisation product_tag-space-utilization product_tag-visitor-analytics product_tag-visitor-tracking has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/emsib-cs/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/emsib-logo.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">EMSIB – CS</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>65.42</bdi></span></span>\n</a><a href="?add-to-cart=2446" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2446" data-product_sku="" aria-label="Add “EMSIB - CS” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2453 status-publish instock product_cat-devices product_tag-analytics product_tag-space-utilisation product_tag-space-utilization product_tag-visitor-analytics product_tag-visitor-tracking has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/h3-card-beacon/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/h3-beacon-logo.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">H3 Card Beacon</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>10.00</bdi></span></span>\n</a><a href="?add-to-cart=2453" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2453" data-product_sku="" aria-label="Add “H3 Card Beacon” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2831 status-publish last instock product_cat-devices product_tag-analytics product_tag-asset-management product_tag-environment product_tag-environmental-monitoring product_tag-facilities product_tag-space-occupancy product_tag-temperature product_tag-visitor-tracking has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/h4-temperature-sensor/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/H4-temp.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">H4 Temperature Sensor</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>15.00</bdi></span></span>\n</a><a href="?add-to-cart=2831" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2831" data-product_sku="" aria-label="Add “H4 Temperature Sensor” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2440 status-publish first instock product_cat-devices product_tag-air-quality product_tag-co2 product_tag-environment product_tag-environmental-monitoring product_tag-humidity product_tag-space-occupancy product_tag-space-utilization has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/hibou-air-quality-co2/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">Hibou Air Quality CO2</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>149.00</bdi></span></span>\n</a><a href="?add-to-cart=2440" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2440" data-product_sku="" aria-label="Add “Hibou Air Quality CO2” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2443 status-publish instock product_cat-devices product_tag-co2 product_tag-environment product_tag-environmental-monitoring product_tag-humidity product_tag-space-occupancy product_tag-space-utilization product_tag-visitor-analytics has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/hibou-air-quality-pm/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/hibou-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">Hibou Air Quality PM</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>139.00</bdi></span></span>\n</a><a href="?add-to-cart=2443" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2443" data-product_sku="" aria-label="Add “Hibou Air Quality PM” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2431 status-publish instock product_cat-devices product_tag-asset-management product_tag-equipment-tracking product_tag-indoor-wayfinding product_tag-navigation product_tag-proximity-marketing product_tag-proximity-notifications product_tag-wayfinding has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/m1-tag-beacon/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/M1-with-logo.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">M1 tag Beacon</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>10.00</bdi></span></span>\n</a><a href="?add-to-cart=2431" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2431" data-product_sku="" aria-label="Add “M1 tag Beacon” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2434 status-publish instock product_cat-devices product_tag-campus-safety product_tag-contact-tracing product_tag-employee-tracking product_tag-safety product_tag-visitor-tracking has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/nano-tag/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Nano-Tag-3.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">Nano Tag</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>7.99</bdi></span></span>\n</a><a href="?add-to-cart=2434" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2434" data-product_sku="" aria-label="Add “Nano Tag” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n<li class="product type-product post-2805 status-publish last instock product_cat-devices product_tag-environment product_tag-environmental-monitoring product_tag-indoor-wayfinding product_tag-temperature product_tag-wayfinding has-post-thumbnail shipping-taxable purchasable product-type-simple">\n\t<a href="https://spaces.cisco.com/store/product/portal-beam-2/" class="woocommerce-LoopProduct-link woocommerce-loop-product__link"><img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Portal-Beam-Room-Level-1.png 1024w" sizes="(max-width: 300px) 100vw, 300px"><h2 class="woocommerce-loop-product__title">Portal Beam</h2>\n\t<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>379.00</bdi></span></span>\n</a><a href="?add-to-cart=2805" data-quantity="1" class="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="2805" data-product_sku="" aria-label="Add “Portal Beam” to your cart" aria-describedby="" rel="nofollow">Add to cart</a></li>\n</ul>',
    },
    _id: "649922e8a9da3f3a62443bc5",
  },
  {
    timeStamp: 1687755086.235,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 654,
      Y: 284,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1.png 1024w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649922e8a9da3f3a62443bc6",
  },
  {
    timeStamp: 1687755086.464,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 654,
      Y: 284,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1.png 1024w" sizes="(max-width: 300px) 100vw, 300px">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bc7",
  },
  {
    timeStamp: 1687755086.471,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 14.581 },
    _id: "649922e8a9da3f3a62443bc8",
  },
  {
    timeStamp: 1687755087.25,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 654,
      Y: 284,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-2-1-1.png 1024w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649922e8a9da3f3a62443bc9",
  },
  {
    timeStamp: 1687755088.361,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443bca",
  },
  {
    timeStamp: 1687755088.845,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/store/product/asset-tag-2/",
      DOMLoadTime: 0,
    },
    _id: "649922e8a9da3f3a62443bcb",
  },
  {
    timeStamp: 1687755091.356,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 300,
      Y: 289,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1752410a elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading animated fadeInUp" data-id="1752410a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;100&quot;}" data-widget_type="woocommerce-product-title.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce.min.css"><h1 class="product_title entry-title elementor-heading-title elementor-size-default">Asset Tag 2</h1>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-106065db elementor-widget-divider--view-line elementor-widget elementor-widget-divider animated fadeIn" data-id="106065db" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:&quot;175&quot;}" data-widget_type="divider.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-bottom:0;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}</style>\t\t<div class="elementor-divider">\n\t\t\t<span class="elementor-divider-separator">\n\t\t\t\t\t\t</span>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-1f15f4e elementor-widget elementor-widget-woocommerce-product-price animated fadeInUp" data-id="1f15f4e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;200&quot;}" data-widget_type="woocommerce-product-price.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6143a5ad elementor-align-justify elementor-widget elementor-widget-button" data-id="6143a5ad" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-93075f7 elementor-align-justify elementor-widget elementor-widget-button" data-id="93075f7" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6778664 elementor-widget elementor-widget-html" data-id="6778664" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\n\nAlready have DNA Spaces? <div class="login"><span style="text-decoration:underline">Login here</span><ul class="login_list"> <li><a href="https://dnaspaces.io/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1&amp;__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.6.1687754689435&amp;__hsfp=524412920" target="_blank">Global</a></li>\n \t<li><a href="https://dnaspaces.eu/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1&amp;__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.6.1687754689435&amp;__hsfp=524412920" target="_blank">Europe</a></li></ul></div> \n<p></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6d2f58a2 elementor-widget elementor-widget-text-editor" data-id="6d2f58a2" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-66a8b8b4 elementor-widget elementor-widget-woocommerce-product-content" data-id="66a8b8b4" data-element_type="widget" data-widget_type="woocommerce-product-content.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p><strong>Features</strong>: Infrared (5 years battery life with IR), 2 buttons, LEDs, motion sensor</p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443bcc",
  },
  {
    timeStamp: 1687755094.307,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 288,
      Y: 353,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649922e8a9da3f3a62443bcd",
  },
  {
    timeStamp: 1687755095.382,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 288,
      Y: 353,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649922e8a9da3f3a62443bce",
  },
  {
    timeStamp: 1687755095.437,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 288,
      Y: 353,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649922e8a9da3f3a62443bcf",
  },
  {
    timeStamp: 1687755096.328,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 244,
      Y: 371,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>',
    },
    _id: "649922e8a9da3f3a62443bd0",
  },
  {
    timeStamp: 1687755096.538,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 244,
      Y: 372,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<span class="elementor-button-text">Get a Free Trial</span>',
    },
    _id: "649922e8a9da3f3a62443bd1",
  },
  {
    timeStamp: 1687755096.55,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 7.709 },
    _id: "649922e8a9da3f3a62443bd2",
  },
  {
    timeStamp: 1687755099.019,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 544,
      Y: 303,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1752410a elementor-widget elementor-widget-woocommerce-product-title elementor-page-title elementor-widget-heading animated fadeInUp" data-id="1752410a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;100&quot;}" data-widget_type="woocommerce-product-title.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-woocommerce.min.css"><h1 class="product_title entry-title elementor-heading-title elementor-size-default">Asset Tag 2</h1>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-106065db elementor-widget-divider--view-line elementor-widget elementor-widget-divider animated fadeIn" data-id="106065db" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;,&quot;_animation_delay&quot;:&quot;175&quot;}" data-widget_type="divider.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#0c0d0e;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:"";border-bottom:0;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{flex-grow:0;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}.e-con-inner>.elementor-widget-divider,.e-con>.elementor-widget-divider{width:var(--container-widget-width,100%);--flex-grow:var(--container-widget-flex-grow)}</style>\t\t<div class="elementor-divider">\n\t\t\t<span class="elementor-divider-separator">\n\t\t\t\t\t\t</span>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-1f15f4e elementor-widget elementor-widget-woocommerce-product-price animated fadeInUp" data-id="1f15f4e" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;200&quot;}" data-widget_type="woocommerce-product-price.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>24.00</bdi></span></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6143a5ad elementor-align-justify elementor-widget elementor-widget-button" data-id="6143a5ad" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-trial">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Get a Free Trial</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-93075f7 elementor-align-justify elementor-widget elementor-widget-button" data-id="93075f7" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a class="elementor-button elementor-button-link elementor-size-lg" href="/store/free-demo">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Book a demo</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6778664 elementor-widget elementor-widget-html" data-id="6778664" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\n\nAlready have DNA Spaces? <div class="login"><span style="text-decoration:underline">Login here</span><ul class="login_list"> <li><a href="https://dnaspaces.io/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1&amp;__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.6.1687754689435&amp;__hsfp=524412920" target="_blank">Global</a></li>\n \t<li><a href="https://dnaspaces.eu/login?utm_campaign=FY22AdoptionRightNow&amp;utm_source=email&amp;utm_medium=Email&amp;utm_content=FY22-B2B-Adoption-RN-1&amp;__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.6.1687754689435&amp;__hsfp=524412920" target="_blank">Europe</a></li></ul></div> \n<p></p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6d2f58a2 elementor-widget elementor-widget-text-editor" data-id="6d2f58a2" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.14.0 - 18-06-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-66a8b8b4 elementor-widget elementor-widget-woocommerce-product-content" data-id="66a8b8b4" data-element_type="widget" data-widget_type="woocommerce-product-content.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p><strong>Features</strong>: Infrared (5 years battery life with IR), 2 buttons, LEDs, motion sensor</p>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e8a9da3f3a62443bd3",
  },
  {
    timeStamp: 1687755099.044,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e8a9da3f3a62443bd4",
  },
  {
    timeStamp: 1687755099.486,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/free-trial/", DOMLoadTime: 0 },
    _id: "649922e8a9da3f3a62443bd5",
  },
  {
    timeStamp: 1687755101.395,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 349,
      Y: 547,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649922e8a9da3f3a62443bd6",
  },
  {
    timeStamp: 1687755101.628,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 349,
      Y: 547,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<label class="msforms-form-text-label" for="cname">Company name*</label>',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bd7",
  },
  {
    timeStamp: 1687755102.4,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 349,
      Y: 547,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<label class="msforms-form-text-label" for="cname">Company name*</label>',
    },
    _id: "649922e8a9da3f3a62443bd8",
  },
  {
    timeStamp: 1687755104.286,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 426,
      Y: 477,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443bd9",
  },
  {
    timeStamp: 1687755104.51,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 426,
      Y: 477,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bda",
  },
  {
    timeStamp: 1687755104.701,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 426,
      Y: 477,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443bdb",
  },
  {
    timeStamp: 1687755104.917,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 426,
      Y: 477,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bdc",
  },
  {
    timeStamp: 1687755105.093,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443bdd",
  },
  {
    timeStamp: 1687755105.473,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443bde",
  },
  {
    timeStamp: 1687755105.582,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443bdf",
  },
  {
    timeStamp: 1687755105.633,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be0",
  },
  {
    timeStamp: 1687755106.453,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be1",
  },
  {
    timeStamp: 1687755106.562,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be2",
  },
  {
    timeStamp: 1687755106.786,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be3",
  },
  {
    timeStamp: 1687755106.859,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be4",
  },
  {
    timeStamp: 1687755107.017,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be5",
  },
  {
    timeStamp: 1687755107.087,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be6",
  },
  {
    timeStamp: 1687755107.182,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be7",
  },
  {
    timeStamp: 1687755107.259,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be8",
  },
  {
    timeStamp: 1687755107.59,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443be9",
  },
  {
    timeStamp: 1687755107.668,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443bea",
  },
  {
    timeStamp: 1687755107.999,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 426,
      Y: 477,
      key: "Tab",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e8a9da3f3a62443beb",
  },
  {
    timeStamp: 1687755108.053,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 426,
      Y: 477,
      key: "Tab",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle" data-gtm-form-interact-field-id="0">',
    },
    _id: "649922e8a9da3f3a62443bec",
  },
  {
    timeStamp: 1687755109.07,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 407,
      Y: 543,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bed",
  },
  {
    timeStamp: 1687755109.294,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 407,
      Y: 543,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bee",
  },
  {
    timeStamp: 1687755109.662,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bef",
  },
  {
    timeStamp: 1687755110.17,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf0",
  },
  {
    timeStamp: 1687755110.196,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "C",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf1",
  },
  {
    timeStamp: 1687755110.3,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 407,
      Y: 543,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf2",
  },
  {
    timeStamp: 1687755110.307,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 407,
      Y: 543,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf3",
  },
  {
    timeStamp: 1687755110.639,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf4",
  },
  {
    timeStamp: 1687755110.717,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 407,
      Y: 543,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf5",
  },
  {
    timeStamp: 1687755110.98,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf6",
  },
  {
    timeStamp: 1687755111.057,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 407,
      Y: 543,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf7",
  },
  {
    timeStamp: 1687755111.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf8",
  },
  {
    timeStamp: 1687755111.227,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 407,
      Y: 543,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bf9",
  },
  {
    timeStamp: 1687755111.479,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 407,
      Y: 543,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bfa",
  },
  {
    timeStamp: 1687755111.54,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 407,
      Y: 543,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e8a9da3f3a62443bfb",
  },
  {
    timeStamp: 1687755112.543,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 406,
      Y: 645,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e8a9da3f3a62443bfc",
  },
  {
    timeStamp: 1687755112.77,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 406,
      Y: 645,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bfd",
  },
  {
    timeStamp: 1687755112.97,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 406,
      Y: 645,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e8a9da3f3a62443bfe",
  },
  {
    timeStamp: 1687755113.188,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 406,
      Y: 645,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
      button: 0,
    },
    _id: "649922e8a9da3f3a62443bff",
  },
  {
    timeStamp: 1687755113.431,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 406,
      Y: 644,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e8a9da3f3a62443c00",
  },
  {
    timeStamp: 1687755113.779,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 406,
      Y: 644,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e8a9da3f3a62443c01",
  },
  {
    timeStamp: 1687755113.857,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 406,
      Y: 644,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e8a9da3f3a62443c02",
  },
  {
    timeStamp: 1687755113.875,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 406,
      Y: 644,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c03",
  },
  {
    timeStamp: 1687755114.053,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 406,
      Y: 644,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c04",
  },
  {
    timeStamp: 1687755114.139,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 406,
      Y: 644,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c05",
  },
  {
    timeStamp: 1687755114.35,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 406,
      Y: 644,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c06",
  },
  {
    timeStamp: 1687755114.406,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 406,
      Y: 644,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c07",
  },
  {
    timeStamp: 1687755114.719,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 406,
      Y: 644,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c08",
  },
  {
    timeStamp: 1687755114.79,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 406,
      Y: 644,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c09",
  },
  {
    timeStamp: 1687755115.095,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 406,
      Y: 644,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c0a",
  },
  {
    timeStamp: 1687755115.173,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 406,
      Y: 644,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443c0b",
  },
  {
    timeStamp: 1687755116.021,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 753,
      Y: 685,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<fieldset class="msforms-fieldset show">\n            <h6>Tell us more about yourself:</h6>\n            <p style="padding-bottom:10px;">We will use this information to check if your company has existing DNA Spaces licenses</p>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle" data-gtm-form-interact-field-id="0">\n              <label class="msforms-form-text-label" for="jtitle">Job title</label>\n            </div>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="" data-gtm-form-interact-field-id="1">\n              <label class="msforms-form-text-label" for="cname">Company name*</label>\n              <div class="msforms-form-error">Please enter company name</div>\n            </div>\n            <div class="form-group focus-input">\n               \n              <input placeholder="" name="country" type="text" class="form-control" id="countryn">\n               <label class="msforms-form-text-label" for="countryn">Country</label>\n            </div>\n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <a href="javascript:;" class="msform-next-btn float-right">Next</a>\n            </div>\n        </fieldset>',
    },
    _id: "649922e9a9da3f3a62443c0c",
  },
  {
    timeStamp: 1687755116.246,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 753,
      Y: 685,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<fieldset class="msforms-fieldset show">\n            <h6>Tell us more about yourself:</h6>\n            <p style="padding-bottom:10px;">We will use this information to check if your company has existing DNA Spaces licenses</p>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle" data-gtm-form-interact-field-id="0">\n              <label class="msforms-form-text-label" for="jtitle">Job title</label>\n            </div>\n            <div class="form-group focus-input">\n                \n              <input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="" data-gtm-form-interact-field-id="1">\n              <label class="msforms-form-text-label" for="cname">Company name*</label>\n              <div class="msforms-form-error">Please enter company name</div>\n            </div>\n            <div class="form-group focus-input">\n               \n              <input placeholder="" name="country" type="text" class="form-control" id="countryn" data-gtm-form-interact-field-id="2">\n               <label class="msforms-form-text-label" for="countryn">Country</label>\n            </div>\n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <a href="javascript:;" class="msform-next-btn float-right">Next</a>\n            </div>\n        </fieldset>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c0d",
  },
  {
    timeStamp: 1687755116.979,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 474,
      Y: 705,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649922e9a9da3f3a62443c0e",
  },
  {
    timeStamp: 1687755117.204,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 474,
      Y: 705,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<fieldset class="msforms-fieldset show">\n            <h6>How can we reach you?</h6>\n            <p style="padding-bottom:10px;">We will use this information to set up a Free Trial or Demo session and send information about DNA Spaces</p>\n            <div class="form-group">\n                \n              <input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">\n              <label class="msforms-form-text-label" for="bemail">Business Email* </label>\n              <div class="msforms-form-error">Please enter your business email id</div>\n            </div>\n            <div class="form-group">\n              <input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">\n                <label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>\n              <div class="msforms-form-error">Please enter your phone number</div>\n            </div>\n           <div class="form-group">\n              <input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">\n                <label class="msforms-form-text-label" for="fname">First Name*</label>\n              <div class="msforms-form-error">Please enter your first name</div>\n            </div>\n            <div class="form-group">\n              <input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">\n                <label class="msforms-form-text-label" for="lname">Last Name*</label>\n              <div class="msforms-form-error">Please enter your last name</div>\n            </div>\n            \n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <button id="freetrial">Submit</button>\n            </div>\n        </fieldset>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c0f",
  },
  {
    timeStamp: 1687755118.129,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 433,
      Y: 492,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c10",
  },
  {
    timeStamp: 1687755118.355,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 433,
      Y: 492,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c11",
  },
  {
    timeStamp: 1687755118.562,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 433,
      Y: 492,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c12",
  },
  {
    timeStamp: 1687755118.786,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 433,
      Y: 492,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c13",
  },
  {
    timeStamp: 1687755118.862,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c14",
  },
  {
    timeStamp: 1687755118.971,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c15",
  },
  {
    timeStamp: 1687755119.178,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "y",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c16",
  },
  {
    timeStamp: 1687755119.226,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "y",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c17",
  },
  {
    timeStamp: 1687755119.4,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c18",
  },
  {
    timeStamp: 1687755119.469,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c19",
  },
  {
    timeStamp: 1687755119.736,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c1a",
  },
  {
    timeStamp: 1687755119.799,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c1b",
  },
  {
    timeStamp: 1687755120.059,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c1c",
  },
  {
    timeStamp: 1687755120.122,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c1d",
  },
  {
    timeStamp: 1687755120.484,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c1e",
  },
  {
    timeStamp: 1687755120.556,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c1f",
  },
  {
    timeStamp: 1687755120.648,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "l",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c20",
  },
  {
    timeStamp: 1687755120.724,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "l",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c21",
  },
  {
    timeStamp: 1687755121.071,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c22",
  },
  {
    timeStamp: 1687755121.228,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c23",
  },
  {
    timeStamp: 1687755121.313,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c24",
  },
  {
    timeStamp: 1687755121.323,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c25",
  },
  {
    timeStamp: 1687755121.793,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c26",
  },
  {
    timeStamp: 1687755121.848,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c27",
  },
  {
    timeStamp: 1687755122.178,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c28",
  },
  {
    timeStamp: 1687755122.241,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c29",
  },
  {
    timeStamp: 1687755122.496,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c2a",
  },
  {
    timeStamp: 1687755122.558,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c2b",
  },
  {
    timeStamp: 1687755122.655,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c2c",
  },
  {
    timeStamp: 1687755122.726,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c2d",
  },
  {
    timeStamp: 1687755123.052,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c2e",
  },
  {
    timeStamp: 1687755123.122,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c2f",
  },
  {
    timeStamp: 1687755123.277,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c30",
  },
  {
    timeStamp: 1687755123.332,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c31",
  },
  {
    timeStamp: 1687755123.613,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c32",
  },
  {
    timeStamp: 1687755123.659,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c33",
  },
  {
    timeStamp: 1687755123.952,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c34",
  },
  {
    timeStamp: 1687755124.031,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c35",
  },
  {
    timeStamp: 1687755124.14,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 433,
      Y: 492,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c36",
  },
  {
    timeStamp: 1687755124.202,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 433,
      Y: 492,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443c37",
  },
  {
    timeStamp: 1687755126.201,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 460,
      Y: 568,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c38",
  },
  {
    timeStamp: 1687755126.42,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 460,
      Y: 568,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c39",
  },
  {
    timeStamp: 1687755126.802,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 460,
      Y: 568,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c3a",
  },
  {
    timeStamp: 1687755127.025,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 460,
      Y: 568,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c3b",
  },
  {
    timeStamp: 1687755127.804,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 460,
      Y: 568,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c3c",
  },
  {
    timeStamp: 1687755129.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c3d",
  },
  {
    timeStamp: 1687755129.542,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c3e",
  },
  {
    timeStamp: 1687755129.641,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c3f",
  },
  {
    timeStamp: 1687755129.711,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c40",
  },
  {
    timeStamp: 1687755129.818,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c41",
  },
  {
    timeStamp: 1687755129.911,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c42",
  },
  {
    timeStamp: 1687755130.01,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c43",
  },
  {
    timeStamp: 1687755130.103,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c44",
  },
  {
    timeStamp: 1687755130.212,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c45",
  },
  {
    timeStamp: 1687755130.297,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c46",
  },
  {
    timeStamp: 1687755131.307,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 460,
      Y: 568,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c47",
  },
  {
    timeStamp: 1687755132.687,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c48",
  },
  {
    timeStamp: 1687755132.757,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c49",
  },
  {
    timeStamp: 1687755132.924,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c4a",
  },
  {
    timeStamp: 1687755132.977,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c4b",
  },
  {
    timeStamp: 1687755133.24,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c4c",
  },
  {
    timeStamp: 1687755133.311,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c4d",
  },
  {
    timeStamp: 1687755133.42,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c4e",
  },
  {
    timeStamp: 1687755133.49,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c4f",
  },
  {
    timeStamp: 1687755133.604,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c50",
  },
  {
    timeStamp: 1687755133.665,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c51",
  },
  {
    timeStamp: 1687755134.529,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c52",
  },
  {
    timeStamp: 1687755134.583,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "Backspace",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c53",
  },
  {
    timeStamp: 1687755135.069,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c54",
  },
  {
    timeStamp: 1687755135.107,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c55",
  },
  {
    timeStamp: 1687755135.666,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 460,
      Y: 568,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c56",
  },
  {
    timeStamp: 1687755135.731,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 460,
      Y: 568,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443c57",
  },
  {
    timeStamp: 1687755136.819,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 447,
      Y: 673,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c58",
  },
  {
    timeStamp: 1687755137.042,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 447,
      Y: 673,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c59",
  },
  {
    timeStamp: 1687755137.164,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 447,
      Y: 673,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c5a",
  },
  {
    timeStamp: 1687755137.386,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 447,
      Y: 673,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c5b",
  },
  {
    timeStamp: 1687755137.638,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 673,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c5c",
  },
  {
    timeStamp: 1687755137.835,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 673,
      key: "V",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c5d",
  },
  {
    timeStamp: 1687755137.981,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 673,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c5e",
  },
  {
    timeStamp: 1687755137.998,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 673,
      key: "v",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c5f",
  },
  {
    timeStamp: 1687755138.381,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 673,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c60",
  },
  {
    timeStamp: 1687755138.452,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 673,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c61",
  },
  {
    timeStamp: 1687755138.678,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 673,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c62",
  },
  {
    timeStamp: 1687755138.74,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 673,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c63",
  },
  {
    timeStamp: 1687755139.075,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 673,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c64",
  },
  {
    timeStamp: 1687755139.153,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 673,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c65",
  },
  {
    timeStamp: 1687755139.73,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 673,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c66",
  },
  {
    timeStamp: 1687755139.785,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 673,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443c67",
  },
  {
    timeStamp: 1687755140.793,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 447,
      Y: 673,
      scrollX: 0,
      scrollY: 135.3333282470703,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c68",
  },
  {
    timeStamp: 1687755140.857,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 447,
      Y: 739,
      scrollX: 0,
      scrollY: 202,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c69",
  },
  {
    timeStamp: 1687755141.073,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 447,
      Y: 739,
      scrollX: 0,
      scrollY: 202,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c6a",
  },
  {
    timeStamp: 1687755141.248,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 447,
      Y: 739,
      scrollX: 0,
      scrollY: 202,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c6b",
  },
  {
    timeStamp: 1687755141.468,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 447,
      Y: 739,
      scrollX: 0,
      scrollY: 202,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c6c",
  },
  {
    timeStamp: 1687755141.655,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c6d",
  },
  {
    timeStamp: 1687755141.821,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "S",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c6e",
  },
  {
    timeStamp: 1687755141.9,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c6f",
  },
  {
    timeStamp: 1687755141.929,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c70",
  },
  {
    timeStamp: 1687755142.066,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c71",
  },
  {
    timeStamp: 1687755142.122,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c72",
  },
  {
    timeStamp: 1687755142.566,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c73",
  },
  {
    timeStamp: 1687755142.637,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c74",
  },
  {
    timeStamp: 1687755142.767,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c75",
  },
  {
    timeStamp: 1687755142.844,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c76",
  },
  {
    timeStamp: 1687755143.067,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c77",
  },
  {
    timeStamp: 1687755143.128,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c78",
  },
  {
    timeStamp: 1687755143.507,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c79",
  },
  {
    timeStamp: 1687755143.549,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c7a",
  },
  {
    timeStamp: 1687755143.628,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c7b",
  },
  {
    timeStamp: 1687755143.697,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c7c",
  },
  {
    timeStamp: 1687755143.765,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 447,
      Y: 739,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c7d",
  },
  {
    timeStamp: 1687755143.828,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 447,
      Y: 739,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443c7e",
  },
  {
    timeStamp: 1687755144.68,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 785,
      Y: 473,
      scrollX: 0,
      scrollY: 202,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="" data-gtm-form-interact-field-id="3">',
    },
    _id: "649922e9a9da3f3a62443c7f",
  },
  {
    timeStamp: 1687755144.904,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 785,
      Y: 473,
      scrollX: 0,
      scrollY: 202,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="" data-gtm-form-interact-field-id="3">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c80",
  },
  {
    timeStamp: 1687755145.52,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 966,
      Y: 312,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649922e9a9da3f3a62443c81",
  },
  {
    timeStamp: 1687755145.729,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 966,
      Y: 312,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c82",
  },
  {
    timeStamp: 1687755146.523,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 966,
      Y: 312,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649922e9a9da3f3a62443c83",
  },
  {
    timeStamp: 1687755148.827,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 754,
      Y: 23,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3239e7c9 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget__width-auto elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="3239e7c9" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;<i class=\\&quot;fas fa-angle-down\\&quot;><\\/i>&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/store/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css">\t\t\t<nav class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-underline e--animation-drop-in">\n\t\t\t\t<ul id="menu-1-3239e7c9" class="elementor-nav-menu" data-smartmenus-id="16877550994380044"><li class="hide-desktop menu-item menu-item-type-custom menu-item-object-custom menu-item-6177"><a href="/" class="elementor-item">Go to Spaces website</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6171"><a href="/store" class="elementor-item">Discover</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6957"><a href="https://spaces.cisco.com/store/apps/" class="elementor-item">Applications</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6958"><a href="https://spaces.cisco.com/store/device/" class="elementor-item">Devices</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6959"><a href="https://spaces.cisco.com/store/outcomes/" class="elementor-item">Outcomes</a></li>\n</ul>\t\t\t</nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open eicon-menu-bar"></i><i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close eicon-close"></i>\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" aria-hidden="true" style="width: 1263px; left: 0px; top: 33px; --menu-height: 0;">\n\t\t\t\t<ul id="menu-2-3239e7c9" class="elementor-nav-menu" data-smartmenus-id="1687755099438429"><li class="hide-desktop menu-item menu-item-type-custom menu-item-object-custom menu-item-6177"><a href="/" class="elementor-item" tabindex="-1">Go to Spaces website</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-6171"><a href="/store" class="elementor-item" tabindex="-1">Discover</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6957"><a href="https://spaces.cisco.com/store/apps/" class="elementor-item" tabindex="-1">Applications</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6958"><a href="https://spaces.cisco.com/store/device/" class="elementor-item" tabindex="-1">Devices</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6959"><a href="https://spaces.cisco.com/store/outcomes/" class="elementor-item" tabindex="-1">Outcomes</a></li>\n</ul>\t\t\t</nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e9a9da3f3a62443c84",
  },
  {
    timeStamp: 1687755149.106,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443c85",
  },
  {
    timeStamp: 1687755153.141,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 53.659 },
    _id: "649922e9a9da3f3a62443c86",
  },
  {
    timeStamp: 1687755835.633,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443c87",
  },
  {
    timeStamp: 1687755835.64,
    name: "ERROR",
    type: "RUNTIME_CRASH",
    data: {
      errorMessage:
        "Uncaught SyntaxError: Identifier 'mouseEvents' has already been declared",
      source: "https://spaces.cisco.com/",
      lineNo: 1,
      colNo: 1,
    },
    _id: "649922e9a9da3f3a62443c88",
  },
  {
    timeStamp: 1687755835.831,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 889,
      Y: 81,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu" data-smartmenus-id="16877558356588333"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" id="sm-16877558356588333-1" aria-haspopup="true" aria-controls="sm-16877558356588333-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877558356588333-2" role="group" aria-hidden="true" aria-labelledby="sm-16877558356588333-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style="width: 1263px; left: 0px; top: 39px;"><ul id="menu-2-69895735" class="elementor-nav-menu" data-smartmenus-id="1687755835659065"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" tabindex="-1" id="sm-1687755835659065-1" aria-haspopup="true" aria-controls="sm-1687755835659065-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687755835659065-2" role="group" aria-hidden="true" aria-labelledby="sm-1687755835659065-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e9a9da3f3a62443c89",
  },
  {
    timeStamp: 1687755835.957,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 889,
      Y: 81,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu" data-smartmenus-id="16877558356588333"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" id="sm-16877558356588333-1" aria-haspopup="true" aria-controls="sm-16877558356588333-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877558356588333-2" role="group" aria-hidden="true" aria-labelledby="sm-16877558356588333-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style="width: 1263px; left: 0px; top: 39px;"><ul id="menu-2-69895735" class="elementor-nav-menu" data-smartmenus-id="1687755835659065"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" tabindex="-1" id="sm-1687755835659065-1" aria-haspopup="true" aria-controls="sm-1687755835659065-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687755835659065-2" role="group" aria-hidden="true" aria-labelledby="sm-1687755835659065-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e9a9da3f3a62443c8a",
  },
  {
    timeStamp: 1687755836.832,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 889,
      Y: 81,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu" data-smartmenus-id="16877558356588333"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" id="sm-16877558356588333-1" aria-haspopup="true" aria-controls="sm-16877558356588333-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877558356588333-2" role="group" aria-hidden="true" aria-labelledby="sm-16877558356588333-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.8.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.8.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style="width: 1263px; left: 0px; top: 39px;"><ul id="menu-2-69895735" class="elementor-nav-menu" data-smartmenus-id="1687755835659065"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" tabindex="-1" id="sm-1687755835659065-1" aria-haspopup="true" aria-controls="sm-1687755835659065-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687755835659065-2" role="group" aria-hidden="true" aria-labelledby="sm-1687755835659065-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.8.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.8.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>',
    },
    _id: "649922e9a9da3f3a62443c8b",
  },
  {
    timeStamp: 1687755837.374,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 940,
      Y: 435,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<p>A cloud platform that&nbsp;connects&nbsp;<strong><span style="color: #5fbf3c;">people</span></strong> &amp;&nbsp;<strong><span style="color: #10b2da;">things</span></strong> with spaces&nbsp;</p>',
    },
    _id: "649922e9a9da3f3a62443c8c",
  },
  {
    timeStamp: 1687755837.59,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 940,
      Y: 435,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: null,
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c8d",
  },
  {
    timeStamp: 1687755838.558,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 940, Y: 435, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "649922e9a9da3f3a62443c8e",
  },
  {
    timeStamp: 1687755852.792,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 17.174 },
    _id: "649922e9a9da3f3a62443c8f",
  },
  {
    timeStamp: 1687755852.837,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443c90",
  },
  {
    timeStamp: 1687756055.618,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443c91",
  },
  {
    timeStamp: 1687756057.135,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 875,
      Y: 271,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div data-elementor-type="wp-page" data-elementor-id="4248" class="elementor elementor-4248">\n\t\t\t\t\t\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-6ae28527 elementor-section-full_width elementor-section-content-top elementor-section-height-default elementor-section-height-default" data-id="6ae28527" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;video&quot;,&quot;background_video_link&quot;:&quot;https:\\/\\/spaces.cisco.com\\/wp-content\\/uploads\\/2022\\/11\\/Spaceswhitebg_1.webm&quot;}">\n\t\t\t\t\t\t\t\t<div class="elementor-background-video-container elementor-hidden-phone">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<video class="elementor-background-video-hosted elementor-html5-video" autoplay="" muted="" playsinline="" loop="" src="https://spaces.cisco.com/wp-content/uploads/2022/11/Spaceswhitebg_1.webm" style="width: 1541.76px; height: 867.24px;"></video>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="elementor-background-overlay"></div>\n\t\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-no">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-168629c0" data-id="168629c0" data-element_type="column" data-settings="{&quot;background_motion_fx_mouseTrack_effect&quot;:&quot;yes&quot;,&quot;background_motion_fx_mouseTrack_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1,&quot;sizes&quot;:[]}}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated" style="position: relative;">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-51377d elementor-widget elementor-widget-template elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects" data-id="51377d" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;sticky_parent&quot;:&quot;yes&quot;,&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="template.default" style="position: absolute; width: 1263.33px; margin-top: 0px; margin-bottom: 0px; bottom: 0px;">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-template">\n\t\t\t\t\t<div data-elementor-type="header" data-elementor-id="1845" class="elementor elementor-1845">\n\t\t<div class="elementor-section-wrap">\n\t\t\t\t\t<header class="elementor-section elementor-top-section elementor-element elementor-element-167764b6 elementor-section-content-middle animated-fast elementor-section-full_width blurheader elementor-section-height-default elementor-section-height-default elementor-sticky elementor-sticky--active elementor-section--handles-inside elementor-sticky--effects animated fadeIn" data-id="167764b6" data-element_type="section" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;animation&quot;:&quot;fadeIn&quot;,&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" style="position: fixed; width: 1263.32px; margin-top: 0px; margin-bottom: 0px; top: 0px;">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ce1d3b3" data-id="ce1d3b3" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-51aad3c6 elementor-widget elementor-widget-image" data-id="51aad3c6" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://spaces.cisco.com">\n\t\t\t\t\t\t\t<img decoding="async" width="300" height="114" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/cisco-spaces.svg" class="attachment-medium size-medium wp-image-11321" alt="" loading="lazy">\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-62a8aee0" data-id="62a8aee0" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5155cc2f elementor-nav-menu__align-left elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit newmenu elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="5155cc2f" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css">\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-5155cc2f" class="elementor-nav-menu" data-smartmenus-id="16877560556516597"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item has-submenu" id="sm-16877560556516597-1" aria-haspopup="true" aria-controls="sm-16877560556516597-2" aria-expanded="false">Solutions<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-2" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-1" aria-expanded="false">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item has-submenu" id="sm-16877560556516597-3" aria-haspopup="true" aria-controls="sm-16877560556516597-4" aria-expanded="false">By Business Need<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-4" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-3" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item has-submenu" id="sm-16877560556516597-5" aria-haspopup="true" aria-controls="sm-16877560556516597-6" aria-expanded="false">By Industry<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-6" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-5" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item has-submenu" id="sm-16877560556516597-7" aria-haspopup="true" aria-controls="sm-16877560556516597-8" aria-expanded="false">By Use Case<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-8" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-7" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item has-submenu" id="sm-16877560556516597-9" aria-haspopup="true" aria-controls="sm-16877560556516597-10" aria-expanded="false">Resources<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-10" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-9" aria-expanded="false">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item has-submenu" id="sm-16877560556516597-11" aria-haspopup="true" aria-controls="sm-16877560556516597-12" aria-expanded="false">LEARN<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-12" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-11" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item has-submenu" id="sm-16877560556516597-13" aria-haspopup="true" aria-controls="sm-16877560556516597-14" aria-expanded="false">EXPLORE<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-14" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-13" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" id="sm-16877560556516597-15" aria-haspopup="true" aria-controls="sm-16877560556516597-16" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-16877560556516597-16" role="group" aria-hidden="true" aria-labelledby="sm-16877560556516597-15" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style="width: 1263px; left: 0px; top: 39px;"><ul id="menu-2-5155cc2f" class="elementor-nav-menu" data-smartmenus-id="1687756055653014"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item" tabindex="-1">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item has-submenu" tabindex="-1" id="sm-1687756055653014-1" aria-haspopup="true" aria-controls="sm-1687756055653014-2" aria-expanded="false">Solutions<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-2" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-1" aria-expanded="false">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item has-submenu" tabindex="-1" id="sm-1687756055653014-3" aria-haspopup="true" aria-controls="sm-1687756055653014-4" aria-expanded="false">By Business Need<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-4" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-3" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item" tabindex="-1">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item" tabindex="-1">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item" tabindex="-1">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item" tabindex="-1">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item has-submenu" tabindex="-1" id="sm-1687756055653014-5" aria-haspopup="true" aria-controls="sm-1687756055653014-6" aria-expanded="false">By Industry<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-6" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-5" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item" tabindex="-1">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item" tabindex="-1">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item" tabindex="-1">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item" tabindex="-1">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item" tabindex="-1">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item" tabindex="-1">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item" tabindex="-1">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item" tabindex="-1">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item has-submenu" tabindex="-1" id="sm-1687756055653014-7" aria-haspopup="true" aria-controls="sm-1687756055653014-8" aria-expanded="false">By Use Case<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-8" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-7" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item" tabindex="-1">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item" tabindex="-1">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item" tabindex="-1">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item" tabindex="-1">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item" tabindex="-1">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item" tabindex="-1">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item" tabindex="-1">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item" tabindex="-1">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item" tabindex="-1">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item" tabindex="-1">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item has-submenu" tabindex="-1" id="sm-1687756055653014-9" aria-haspopup="true" aria-controls="sm-1687756055653014-10" aria-expanded="false">Resources<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-10" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-9" aria-expanded="false">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item has-submenu" tabindex="-1" id="sm-1687756055653014-11" aria-haspopup="true" aria-controls="sm-1687756055653014-12" aria-expanded="false">LEARN<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-12" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-11" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item" tabindex="-1">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item" tabindex="-1">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item" tabindex="-1">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item" tabindex="-1">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item" tabindex="-1">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item has-submenu" tabindex="-1" id="sm-1687756055653014-13" aria-haspopup="true" aria-controls="sm-1687756055653014-14" aria-expanded="false">EXPLORE<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-14" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-13" aria-expanded="false">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item" tabindex="-1">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item" tabindex="-1">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" tabindex="-1" id="sm-1687756055653014-15" aria-haspopup="true" aria-controls="sm-1687756055653014-16" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055653014-16" role="group" aria-hidden="true" aria-labelledby="sm-1687756055653014-15" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2263be8 elementor-hidden-mobile elementor-hidden-tablet" data-id="2263be8" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu" data-smartmenus-id="168775605565868"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" id="sm-168775605565868-1" aria-haspopup="true" aria-controls="sm-168775605565868-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-168775605565868-2" role="group" aria-hidden="true" aria-labelledby="sm-168775605565868-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false" style="">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true" style="width: 1263px; left: 0px; top: 39px;"><ul id="menu-2-69895735" class="elementor-nav-menu" data-smartmenus-id="1687756055659022"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active has-submenu" tabindex="-1" id="sm-1687756055659022-1" aria-haspopup="true" aria-controls="sm-1687756055659022-2" aria-expanded="false">Login<span class="sub-arrow"><i class="fas fa-angle-down"></i></span></a>\n<ul class="sub-menu elementor-nav-menu--dropdown" id="sm-1687756055659022-2" role="group" aria-hidden="true" aria-labelledby="sm-1687756055659022-1" aria-expanded="false">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5f8d5dd5 elementor-hidden-phone elementor-hidden-tablet" data-id="5f8d5dd5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1a0e96f elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="1a0e96f" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="/start-for-free/" class="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow" role="button" id="header-start-for-free">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Start for free</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</header><header class="elementor-section elementor-top-section elementor-element elementor-element-167764b6 elementor-section-content-middle animated-fast elementor-section-full_width blurheader elementor-section-height-default elementor-section-height-default elementor-invisible elementor-sticky elementor-sticky__spacer" data-id="167764b6" data-element_type="section" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;animation&quot;:&quot;fadeIn&quot;,&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" style="visibility: hidden; transition: none 0s ease 0s; animation: 0s ease 0s 1 normal none running none;">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ce1d3b3" data-id="ce1d3b3" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-51aad3c6 elementor-widget elementor-widget-image" data-id="51aad3c6" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://spaces.cisco.com">\n\t\t\t\t\t\t\t<img decoding="async" width="300" height="114" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/cisco-spaces.svg" class="attachment-medium size-medium wp-image-11321" alt="" loading="lazy">\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-62a8aee0" data-id="62a8aee0" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5155cc2f elementor-nav-menu__align-left elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit newmenu elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="5155cc2f" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css">\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-5155cc2f" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item">Solutions</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item">By Business Need</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item">By Industry</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item">By Use Case</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item">Resources</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item">LEARN</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item">EXPLORE</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true"><ul id="menu-2-5155cc2f" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item" tabindex="-1">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item" tabindex="-1">Solutions</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item" tabindex="-1">By Business Need</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item" tabindex="-1">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item" tabindex="-1">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item" tabindex="-1">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item" tabindex="-1">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item" tabindex="-1">By Industry</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item" tabindex="-1">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item" tabindex="-1">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item" tabindex="-1">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item" tabindex="-1">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item" tabindex="-1">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item" tabindex="-1">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item" tabindex="-1">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item" tabindex="-1">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item" tabindex="-1">By Use Case</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item" tabindex="-1">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item" tabindex="-1">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item" tabindex="-1">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item" tabindex="-1">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item" tabindex="-1">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item" tabindex="-1">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item" tabindex="-1">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item" tabindex="-1">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item" tabindex="-1">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item" tabindex="-1">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item" tabindex="-1">Resources</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item" tabindex="-1">LEARN</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item" tabindex="-1">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item" tabindex="-1">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item" tabindex="-1">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item" tabindex="-1">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item" tabindex="-1">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item" tabindex="-1">EXPLORE</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item" tabindex="-1">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item" tabindex="-1">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active" tabindex="-1">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2263be8 elementor-hidden-mobile elementor-hidden-tablet" data-id="2263be8" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true"><ul id="menu-2-69895735" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active" tabindex="-1">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5f8d5dd5 elementor-hidden-phone elementor-hidden-tablet" data-id="5f8d5dd5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1a0e96f elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="1a0e96f" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="/start-for-free/" class="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow" role="button" id="header-start-for-free">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Start for free</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</header>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3173b6ed elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3173b6ed" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61df9974" data-id="61df9974" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div><div class="elementor-element elementor-element-51377d elementor-widget elementor-widget-template elementor-sticky elementor-sticky__spacer" data-id="51377d" data-element_type="widget" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;sticky_parent&quot;:&quot;yes&quot;,&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" data-widget_type="template.default" style="visibility: hidden; transition: none 0s ease 0s; animation: 0s ease 0s 1 normal none running none;">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-template">\n\t\t\t\t\t<div data-elementor-type="header" data-elementor-id="1845" class="elementor elementor-1845">\n\t\t<div class="elementor-section-wrap">\n\t\t\t\t\t<header class="elementor-section elementor-top-section elementor-element elementor-element-167764b6 elementor-section-content-middle animated-fast elementor-section-full_width blurheader elementor-section-height-default elementor-section-height-default elementor-invisible" data-id="167764b6" data-element_type="section" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;animation&quot;:&quot;fadeIn&quot;,&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ce1d3b3" data-id="ce1d3b3" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-51aad3c6 elementor-widget elementor-widget-image" data-id="51aad3c6" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=".svg"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}</style>\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="https://spaces.cisco.com">\n\t\t\t\t\t\t\t<img decoding="async" width="300" height="114" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/cisco-spaces.svg" class="attachment-medium size-medium wp-image-11321" alt="" loading="lazy">\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-62a8aee0" data-id="62a8aee0" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5155cc2f elementor-nav-menu__align-left elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit newmenu elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="5155cc2f" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css">\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-5155cc2f" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item">Solutions</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item">By Business Need</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item">By Industry</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item">By Use Case</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item">Resources</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item">LEARN</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item">EXPLORE</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true"><ul id="menu-2-5155cc2f" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11293"><a href="https://spaces.cisco.com/why-cisco-spaces/" class="elementor-item" tabindex="-1">Why Spaces</a></li>\n<li class="multi-column-menu-1 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11294"><a class="elementor-item" tabindex="-1">Solutions</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11939"><a class="elementor-sub-item" tabindex="-1">By Business Need</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11295"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item" tabindex="-1">Smart Workspaces for hybrid work</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11296"><a href="https://spaces.cisco.com/iot-services/" class="elementor-sub-item" tabindex="-1">Smart Operations for Indoor IoT &amp; BLE</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11297"><a href="https://spaces.cisco.com/digital-experience/" class="elementor-sub-item" tabindex="-1">Smart Venues for visitor experiences</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11298"><a href="https://spaces.cisco.com/indoor-location-services/" class="elementor-sub-item" tabindex="-1">Smart Location Cloud for location analytics</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11940"><a class="elementor-sub-item" tabindex="-1">By Industry</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11301"><a href="https://spaces.cisco.com/smart-healthcare/" class="elementor-sub-item" tabindex="-1">Healthcare</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11299"><a href="https://spaces.cisco.com/retail/" class="elementor-sub-item" tabindex="-1">Retail</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11300"><a href="https://spaces.cisco.com/education/" class="elementor-sub-item" tabindex="-1">Education</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12155"><a href="https://spaces.cisco.com/smart-workspaces/" class="elementor-sub-item" tabindex="-1">Workspaces</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12611"><a href="https://spaces.cisco.com/manufacturing/" class="elementor-sub-item" tabindex="-1">Manufacturing</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12612"><a href="https://spaces.cisco.com/airport/" class="elementor-sub-item" tabindex="-1">Airport</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12613"><a href="https://spaces.cisco.com/stadium-venue-solutions/" class="elementor-sub-item" tabindex="-1">Stadium &amp; Venue</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12614"><a href="https://spaces.cisco.com/hospitality/" class="elementor-sub-item" tabindex="-1">Hospitality</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11941"><a class="elementor-sub-item" tabindex="-1">By Use Case</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11942"><a href="/occupancy-monitoring/" class="elementor-sub-item" tabindex="-1">Occupancy Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11944"><a href="/asset-tracking/" class="elementor-sub-item" tabindex="-1">Asset Tracking</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11945"><a href="/contextual-engagements/" class="elementor-sub-item" tabindex="-1">Contextual Engagements</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11946"><a href="/location-analytics/" class="elementor-sub-item" tabindex="-1">Location Analytics</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11947"><a href="/density-monitoring/" class="elementor-sub-item" tabindex="-1">Density Monitoring</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11948"><a href="/detect-locate/" class="elementor-sub-item" tabindex="-1">Detect &amp; Locate</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12124"><a href="https://spaces.cisco.com/sustainable-buildings/" class="elementor-sub-item" tabindex="-1">Sustainability</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13481"><a href="https://spaces.cisco.com/meeting-room-finder/" class="elementor-sub-item" tabindex="-1">Meeting Room Finder</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13410"><a href="https://spaces.cisco.com/platform/" class="elementor-item" tabindex="-1">Platform</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11302"><a href="/store/" class="elementor-item" tabindex="-1">Outcome Store</a></li>\n<li class="multi-column-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11303"><a class="elementor-item" tabindex="-1">Resources</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11950"><a class="elementor-sub-item" tabindex="-1">LEARN</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11304"><a href="/resources" class="elementor-sub-item" tabindex="-1">Resource Center</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11305"><a href="/stories-from-spaces/" class="elementor-sub-item" tabindex="-1">Stories from Spaces</a></li>\n\t\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11306"><a href="/guide-to-smarter-buildings/" class="elementor-sub-item" tabindex="-1">Guide to Hybrid Workplace</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11308"><a href="https://spaces.cisco.com/packages/" class="elementor-sub-item" tabindex="-1">Cisco Spaces Packages</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11307"><a href="https://spaces.cisco.com/faqs/" class="elementor-sub-item" tabindex="-1">FAQs</a></li>\n\t</ul>\n</li>\n\t<li class="submenuheading menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11951"><a class="elementor-sub-item" tabindex="-1">EXPLORE</a>\n\t<ul class="sub-menu elementor-nav-menu--dropdown">\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11310"><a href="https://spaces.cisco.com/roi-calculator/" class="elementor-sub-item" tabindex="-1">ROI calculator (Smart Workspaces)</a></li>\n\t\t<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-12123"><a href="https://spaces.cisco.com/sustainability-calculator/" class="elementor-sub-item" tabindex="-1">Energy Savings Estimator​</a></li>\n\t</ul>\n</li>\n</ul>\n</li>\n<li class="sec-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-11311"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-11312"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="sec-menu menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11313"><a href="/" aria-current="page" class="elementor-item elementor-item-active" tabindex="-1">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11314"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11315"><a href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12497"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-2263be8 elementor-hidden-mobile elementor-hidden-tablet" data-id="2263be8" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-69895735 elementor-nav-menu__align-right elementor-nav-menu__text-align-center elementor-nav-menu--stretch elementor-widget-mobile__width-inherit elementor-nav-menu--dropdown-tablet elementor-nav-menu--toggle elementor-nav-menu--burger elementor-widget elementor-widget-nav-menu" data-id="69895735" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_mouse&quot;:&quot;yes&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-angle-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;full_width&quot;:&quot;stretch&quot;,&quot;layout&quot;:&quot;horizontal&quot;,&quot;toggle&quot;:&quot;burger&quot;}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-horizontal e--pointer-none"><ul id="menu-1-69895735" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true"><ul id="menu-2-69895735" class="elementor-nav-menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11316"><a href="https://spaces.cisco.com/support/" class="elementor-item" tabindex="-1">Support</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11317"><a href="/setupguide/" class="elementor-item" tabindex="-1">Setup Guide</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-has-children menu-item-11318"><a href="/" aria-current="page" class="elementor-item elementor-item-active" tabindex="-1">Login</a>\n<ul class="sub-menu elementor-nav-menu--dropdown">\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11319"><a target="_blank" rel="noopener" href="https://dnaspaces.io/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Global</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-11320"><a target="_blank" rel="noopener" href="https://dnaspaces.eu/login?__hstc=105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687710252587.1687751844798.10&amp;__hssc=105720540.9.1687754689435&amp;__hsfp=524412920" class="elementor-sub-item" tabindex="-1">Europe</a></li>\n\t<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-12496"><a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item" tabindex="-1">APAC (Singapore)</a></li>\n</ul>\n</li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5f8d5dd5 elementor-hidden-phone elementor-hidden-tablet" data-id="5f8d5dd5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1a0e96f elementor-align-left elementor-mobile-align-justify elementor-widget elementor-widget-button" data-id="1a0e96f" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="/start-for-free/" class="elementor-button-link elementor-button elementor-size-sm elementor-animation-grow" role="button" id="header-start-for-free">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Start for free</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</header>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3173b6ed elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3173b6ed" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-61df9974" data-id="61df9974" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-6b158eb9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6b158eb9" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-39c9594d" data-id="39c9594d" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-39cc1b2a elementor-widget elementor-widget-heading" data-id="39cc1b2a" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}</style><h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-4c528997 elementor-widget elementor-widget-heading" data-id="4c528997" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h2 class="elementor-heading-title elementor-size-default">Turn Your Buildings into Smart Spaces</h2>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-3ef4cd0a elementor-widget elementor-widget-text-editor" data-id="3ef4cd0a" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}</style>\t\t\t\t<p>A cloud platform that&nbsp;connects&nbsp;<strong><span style="color: #5fbf3c;">people</span></strong> &amp;&nbsp;<strong><span style="color: #10b2da;">things</span></strong> with spaces&nbsp;</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-632ecf1d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="632ecf1d" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1764bdbd" data-id="1764bdbd" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-4949b7cc elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button animated fadeInUp" data-id="4949b7cc" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;250&quot;}" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="/start-for-free/" class="elementor-button-link elementor-button elementor-size-lg" role="button">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Start for free</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-71d99396 elementor-widget elementor-widget-heading" data-id="71d99396" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">no credit card required</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-357420a5" data-id="357420a5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-499a2b" data-id="499a2b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-34e55444 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button animated fadeInUp" data-id="34e55444" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;250&quot;}" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjExODU2IiwidG9nZ2xlIjpmYWxzZX0%3D" class="elementor-button-link elementor-button elementor-size-lg" role="button">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t\t<span class="elementor-button-icon elementor-align-icon-right">\n\t\t\t\t<i aria-hidden="true" class="fas fa-play-circle"></i>\t\t\t</span>\n\t\t\t\t\t\t<span class="elementor-button-text">Watch our video</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-6d66d3b0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6d66d3b0" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-65544c0b" data-id="65544c0b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-78f16b44 elementor-widget elementor-widget-text-editor" data-id="78f16b44" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Trusted by <strong><span style="color: #0d3065;">8,000+</span></strong> enterprise customers worldwide</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-336b3a1e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="336b3a1e" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-2dbe323e elementor-hidden-mobile" data-id="2dbe323e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-1927c644" data-id="1927c644" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-12068500 elementor-widget elementor-widget-image" data-id="12068500" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/elementor/thumbs/ihg-op-1-px7q3jdqtnnc2nqsi9ck7t2h837gyl3zw28ya8g5i8.png" title="ihg-op-1.png" alt="ihg-op-1.png" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-214c398b" data-id="214c398b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-2366e71a elementor-widget elementor-widget-image" data-id="2366e71a" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/elementor/thumbs/nhs-op-1-px7q3jdr2feiaxwoitsaxlo5cscyfrcwjq2f3x8lrk.png" title="nhs-op-1.png" alt="nhs-op-1.png" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-5370fca1" data-id="5370fca1" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-60d2791b elementor-widget elementor-widget-image" data-id="60d2791b" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/elementor/thumbs/sjsu-op-1-px7q3jdr2feiaxwoitsaxlo5cscyfrcwjq2f3x8lru.png" title="sjsu-op-1.png" alt="sjsu-op-1.png" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-28ca49f0" data-id="28ca49f0" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1f077705 elementor-widget elementor-widget-image" data-id="1f077705" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="260" height="58" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/11/wework-op-1.png" class="attachment-large size-large wp-image-11864" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-4e87f7b" data-id="4e87f7b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-25ab4ddc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="25ab4ddc" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-narrow">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e9b1ad6" data-id="e9b1ad6" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-61c4787f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="61c4787f" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4bb65afa" data-id="4bb65afa" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-56b45c0c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="56b45c0c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4d008f31" data-id="4d008f31" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-6467d032 elementor-widget elementor-widget-image" data-id="6467d032" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="300" height="250" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/gartner-choice-2022-300x250.png" class="attachment-medium size-medium wp-image-10929" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/gartner-choice-2022-300x250.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/gartner-choice-2022.png 356w" sizes="(max-width: 300px) 100vw, 300px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-13426b82" data-id="13426b82" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-766b6e0d elementor-widget elementor-widget-heading" data-id="766b6e0d" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">Gartner Customers’ Choice distinction 2020, 2021 &amp; 2022</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-afa6a26 elementor-widget elementor-widget-heading" data-id="afa6a26" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">Cisco Spaces is the highest ranked indoor location and IoT services platform reviewed by customers on Gartner Peer Insights, three years in a row.</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-1243b797 homepanel elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1243b797" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2e64f856" data-id="2e64f856" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-43ff3231 elementor-flip-box--effect-fade elementor-widget elementor-widget-flip-box" data-id="43ff3231" data-element_type="widget" data-widget_type="flip-box.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/wp-content/plugins/elementor-pro/assets/css/widget-flip-box.min.css">\t\t<div class="elementor-flip-box">\n\t\t\t<div class="elementor-flip-box__layer elementor-flip-box__front">\n\t\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-icon-wrapper elementor-view-default">\n\t\t\t\t\t\t\t\t<div class="elementor-icon">\n\t\t\t\t\t\t\t\t\t<i class="far fa-arrow-alt-circle-right"></i>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="elementor-flip-box__layer__title">\n\t\t\t\t\t\t\t\t<p class="hybrid-work-intro-text">INTRODUCING</p> <p class="smart-wspaces-heading"><span>Cisco Smart Workspaces</span></p>Make your workspace ready for <span class="text-red-gradient">hybrid work</span>\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\t\t<span class="spaces-tags-grey">Wi-Fi</span><span class="spaces-tags-grey"> IoT</span> <span class="spaces-tags-grey">COLLAB</span>\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class="elementor-flip-box__layer elementor-flip-box__back" href="/smart-workspaces/">\n\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\tAlert employees about building occupancy levels and indoor air quality through interactive rich maps. Enjoy the benefits of our meeting room finder and make optimal use of real estate with space utilization analytics.\n\n<p style="margin-top:40px">\n<img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/hybrid-work-logo.png">\n</p>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-flip-box__button elementor-button elementor-size-md">\n\t\t\t\t\t\tKnow more\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-5d5e08fc homepanel elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5d5e08fc" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-622a56a1" data-id="622a56a1" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-58367b42 elementor-flip-box--effect-fade homepanel elementor-widget elementor-widget-flip-box" data-id="58367b42" data-element_type="widget" data-widget_type="flip-box.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-flip-box">\n\t\t\t<div class="elementor-flip-box__layer elementor-flip-box__front">\n\t\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-icon-wrapper elementor-view-default">\n\t\t\t\t\t\t\t\t<div class="elementor-icon">\n\t\t\t\t\t\t\t\t\t<i class="far fa-arrow-alt-circle-right"></i>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="elementor-flip-box__layer__title">\n\t\t\t\t\t\t\t\tHypercharge your buildings with  <span class="text-green-gradient">cloud-powered IoT</span>\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\t\t<span class="spaces-tags-grey">BLE</span> <span class="spaces-tags-grey">SWITCHES</span> <span class="spaces-tags-grey">IoT</span>\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class="elementor-flip-box__layer elementor-flip-box__back" href="/iot-services-eble/">\n\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\tSimplify IoT with eBLE powered by Cisco Spaces. Manage the entire lifecycle of your BLE devices without the need for expensive and complex IoT gateways.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-flip-box__button elementor-button elementor-size-md">\n\t\t\t\t\t\tKnow more\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-44bf8cd" data-id="44bf8cd" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-2a842cfa elementor-flip-box--effect-fade homepanel elementor-widget elementor-widget-flip-box" data-id="2a842cfa" data-element_type="widget" data-widget_type="flip-box.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-flip-box">\n\t\t\t<div class="elementor-flip-box__layer elementor-flip-box__front">\n\t\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-icon-wrapper elementor-view-default">\n\t\t\t\t\t\t\t\t<div class="elementor-icon">\n\t\t\t\t\t\t\t\t\t<i class="far fa-arrow-alt-circle-right"></i>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="elementor-flip-box__layer__title">\n\t\t\t\t\t\t\t\tOffer personalized at-location <span class="text-orange-gradient">digital experiences</span> \t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\t\t<span class="spaces-tags-grey">Wi-Fi</span> <span class="spaces-tags-grey">MOBILE SDK</span>\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class="elementor-flip-box__layer elementor-flip-box__back" href="/visitor-experiences/">\n\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\tMake Wi-Fi onboarding seamless. Engage customers with personalized, contextual messages, based on their at-location behavior and loyalty status.\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-flip-box__button elementor-button elementor-size-md">\n\t\t\t\t\t\tKnow more\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3b79a31 homepanel elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3b79a31" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1e995b48" data-id="1e995b48" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-10cb9307 elementor-flip-box--effect-fade elementor-widget elementor-widget-flip-box" data-id="10cb9307" data-element_type="widget" data-widget_type="flip-box.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-flip-box">\n\t\t\t<div class="elementor-flip-box__layer elementor-flip-box__front">\n\t\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-icon-wrapper elementor-view-default">\n\t\t\t\t\t\t\t\t<div class="elementor-icon">\n\t\t\t\t\t\t\t\t\t<i class="far fa-arrow-alt-circle-right"></i>\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="elementor-flip-box__layer__title">\n\t\t\t\t\t\t\t\tKickstart indoor <span class="text-blue-gradient">location services &amp;  analytics</span>\t\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\t\t<span class="spaces-tags-grey">Wi-Fi</span> <span class="spaces-tags-grey">CAMERA</span> <span class="spaces-tags-grey">COLLAB</span>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class="elementor-flip-box__layer elementor-flip-box__back" href="/location-services/">\n\t\t\t<div class="elementor-flip-box__layer__overlay">\n\t\t\t\t<div class="elementor-flip-box__layer__inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-flip-box__layer__description">\n\t\t\t\t\t\t\tHarness location data with our cloud, location compute engine. Track and locate devices connected to the network on an indoor map and detect rogue devices. Gain analytics on device and people behavior. With a location-based firehose API,  integrate with third-party apps and enterprise systems.\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-flip-box__button elementor-button elementor-size-md">\n\t\t\t\t\t\tKnow more\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-19cdc49 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="19cdc49" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-wider">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6bb8aada" data-id="6bb8aada" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-5cea3c36 elementor-widget elementor-widget-text-editor" data-id="5cea3c36" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p><strong>Connect&nbsp;<span style="color: #30d557;">people</span> &amp; <span style="color: #00bceb;">things</span> in your buildings</strong></p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-6ad3a392 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="6ad3a392" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="800" height="833" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Group-1511-984x1024.png" class="attachment-large size-large wp-image-11064" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Group-1511-984x1024.png 984w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Group-1511-288x300.png 288w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Group-1511-768x799.png 768w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Group-1511-1477x1536.png 1477w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Group-1511.png 1570w" sizes="(max-width: 800px) 100vw, 800px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-1d3c4bb8 elementor-widget elementor-widget-text-editor" data-id="1d3c4bb8" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Cisco Spaces captures location signals from people and things within your buildings. By leveraging their Cisco infrastructure – access points, switches, cameras, collab devices and third-party IoT sensors – enterprises can make buildings smarter, at a low TCO (Total Cost of Ownership) and at an unprecedented scale.</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-71435c79 elementor-widget elementor-widget-button" data-id="71435c79" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="/why-cisco-dna-spaces/" class="elementor-button-link elementor-button elementor-size-md" role="button">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t\t<span class="elementor-button-icon elementor-align-icon-right">\n\t\t\t\t<i aria-hidden="true" class="far fa-arrow-alt-circle-right"></i>\t\t\t</span>\n\t\t\t\t\t\t<span class="elementor-button-text">Know more</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-70bb8b20 elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="70bb8b20" data-element_type="section" id="indoorlocationservices" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;background_motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;stretch_section&quot;:&quot;section-stretched&quot;,&quot;background_motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" style="width: 1263px; left: 0px;">\n\t\t\t\t\t\t\t<div class="elementor-background-overlay"></div>\n\t\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7fb6e178" data-id="7fb6e178" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1acb9cfd elementor-widget elementor-widget-spacer" data-id="1acb9cfd" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-column .elementor-spacer-inner{height:var(--spacer-size)}.e-con{--container-widget-width:100%}.e-con-inner>.elementor-widget-spacer,.e-con>.elementor-widget-spacer{width:var(--container-widget-width,var(--spacer-size));--align-self:var(--container-widget-align-self,initial);--flex-shrink:0}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,.e-con>.elementor-widget-spacer>.elementor-widget-container,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer{height:100%}.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner{height:var(--container-widget-height,var(--spacer-size))}</style>\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-e0950d6 elementor-widget elementor-widget-heading" data-id="e0950d6" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h3 class="elementor-heading-title elementor-size-default">Drive business outcomes</h3>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-781d39e elementor-section-full_width elementor-section-content-top elementor-section-height-default elementor-section-height-default" data-id="781d39e" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-no">\n\t\t\t\t\t<div class="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-3487685" data-id="3487685" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-9fce89a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9fce89a" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0ecfb74" data-id="0ecfb74" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b6e0a64 elementor-hidden-phone" data-id="b6e0a64" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-13d1055 elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="13d1055" data-element_type="widget" data-settings="{&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;_animation&quot;:&quot;none&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Right-Now-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4471" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Right-Now-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Right-Now-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Right-Now.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-9000286 elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="9000286" data-element_type="widget" data-settings="{&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;88&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Open-Romaing-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4469" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Open-Romaing-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Open-Romaing-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Open-Romaing.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-9b77043 elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="9b77043" data-element_type="widget" data-settings="{&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;75&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 0px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Camera-Metrics-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4460" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Camera-Metrics-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Camera-Metrics-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Camera-Metrics.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-f08209f elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="f08209f" data-element_type="widget" data-settings="{&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateX: 0px; transform: translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Space-Utilization-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4470" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Space-Utilization-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Space-Utilization-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Space-Utilization.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8f3031c elementor-hidden-phone" data-id="8f3031c" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-e884d92 elementor-widget elementor-widget-spacer" data-id="e884d92" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-124dd6e elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="124dd6e" data-element_type="widget" data-settings="{&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4459" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-f351321 elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="f351321" data-element_type="widget" data-settings="{&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;75&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Captive-Portals-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4462" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Captive-Portals-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Captive-Portals-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Captive-Portals.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-03f1adc elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="03f1adc" data-element_type="widget" data-settings="{&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateX: 0px; transform: translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-1-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4745" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-1-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-1-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Behavior-Metrics-1.png 398w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-bfe54a9" data-id="bfe54a9" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3faa9b0 elementor-invisible elementor-widget elementor-widget-text-editor" data-id="3faa9b0" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<h6><span style="font-size: 16px;">Using location-powered native apps, third-party apps and devices on a single-pane dashboard. </span></h6>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-62cda1c elementor-hidden-phone elementor-widget elementor-widget-spacer" data-id="62cda1c" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-5b14280 animated-slow elementor-invisible elementor-widget elementor-widget-image" data-id="5b14280" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;400&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;]}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="800" height="483" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Device-dashboard.png" class="attachment-large size-large wp-image-11065" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Device-dashboard.png 1024w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Device-dashboard-300x181.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/Device-dashboard-768x464.png 768w" sizes="(max-width: 800px) 100vw, 800px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-55eb50d" data-id="55eb50d" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-d392c3b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d392c3b" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-29496b5" data-id="29496b5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-76c95f1 elementor-hidden-phone elementor-widget elementor-widget-spacer" data-id="76c95f1" data-element_type="widget" data-widget_type="spacer.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-spacer">\n\t\t\t<div class="elementor-spacer-inner"></div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-cb7ae72 elementor-hidden-phone elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="cb7ae72" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Location-Persona-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4468" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Location-Persona-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Location-Persona-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Location-Persona.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-58cc891 elementor-hidden-phone elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="58cc891" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;73&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Engagements-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4465" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Engagements-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Engagements-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Engagements.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-e262718 elementor-hidden-phone elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="e262718" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateX: 0px; transform: translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Impact-Analysis-1-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4744" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Impact-Analysis-1-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Impact-Analysis-1-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Impact-Analysis-1.png 398w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-11f9af5 elementor-hidden-phone" data-id="11f9af5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-569fd94 elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="569fd94" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Detect-Locate-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4463" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Detect-Locate-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Detect-Locate-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Detect-Locate.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-312134e elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="312134e" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;88&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Environment-Monitor-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4466" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Environment-Monitor-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Environment-Monitor-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Environment-Monitor.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-235aba8 elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="235aba8" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateY_direction&quot;:&quot;negative&quot;,&quot;motion_fx_translateY_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;8.6&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateY_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;53&quot;,&quot;end&quot;:&quot;75&quot;}},&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateY: 25.799999999999997px; --translateX: 0px; transform: translateY(var(--translateY))translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Indoor-IoT-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4467" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Indoor-IoT-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Indoor-IoT-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Indoor-IoT.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-cdc941b elementor-widget elementor-widget-image elementor-motion-effects-parent" data-id="cdc941b" data-element_type="widget" data-settings="{&quot;motion_fx_motion_fx_scrolling&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_effect&quot;:&quot;yes&quot;,&quot;motion_fx_translateX_speed&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;10&quot;,&quot;sizes&quot;:[]},&quot;motion_fx_translateX_affectedRange&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;50&quot;,&quot;end&quot;:&quot;92&quot;}},&quot;motion_fx_opacity_effect&quot;:&quot;yes&quot;,&quot;motion_fx_opacity_direction&quot;:&quot;in-out&quot;,&quot;motion_fx_opacity_range&quot;:{&quot;unit&quot;:&quot;%&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:{&quot;start&quot;:&quot;81&quot;,&quot;end&quot;:&quot;100&quot;}},&quot;motion_fx_range&quot;:&quot;viewport&quot;,&quot;motion_fx_devices&quot;:[&quot;desktop&quot;,&quot;tablet&quot;],&quot;motion_fx_opacity_level&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:10,&quot;sizes&quot;:[]}}" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container elementor-motion-effects-element" style="--translateX: 0px; transform: translateX(var(--translateX)); opacity: 1; will-change: opacity;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="150" height="150" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Employee-safety-150x150.png" class="attachment-thumbnail size-thumbnail wp-image-4464" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Employee-safety-150x150.png 150w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Employee-safety-300x300.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/Employee-safety.png 624w" sizes="(max-width: 150px) 100vw, 150px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-59e0956 elementor-hidden-phone" data-id="59e0956" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-50f48c2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="50f48c2" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5827537d" data-id="5827537d" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-37b7fca3 elementor-widget elementor-widget-heading" data-id="37b7fca3" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h3 class="elementor-heading-title elementor-size-default">Cisco Spaces in a nutshell</h3>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-1cc3ae72 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1cc3ae72" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1f038d3a" data-id="1f038d3a" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-95cdd47 elementor-widget elementor-widget-heading" data-id="95cdd47" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">Native Apps</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-11963360 elementor-widget elementor-widget-text-editor" data-id="11963360" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Location-powered apps built by Cisco to help you derive quick value</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-792358bd" data-id="792358bd" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3cdc5a10" data-id="3cdc5a10" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-79abba26 elementor-widget elementor-widget-heading" data-id="79abba26" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">App Center</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-def1da4 elementor-widget elementor-widget-text-editor" data-id="def1da4" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Ready-to-install apps, built by industry-leading app developers</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-163cdf75 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="163cdf75" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5981c066" data-id="5981c066" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-4768bdbd elementor-widget elementor-widget-heading" data-id="4768bdbd" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">Meta API</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-b4df4c6 elementor-widget elementor-widget-text-editor" data-id="b4df4c6" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>A multi-sensor, location firehose API designed for high-volume data streaming</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-595c7dbb" data-id="595c7dbb" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-358697cb" data-id="358697cb" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-667cadd8 elementor-widget elementor-widget-heading" data-id="667cadd8" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">Device Marketplace</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-155d7859 elementor-widget elementor-widget-text-editor" data-id="155d7859" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Discover and purchase devices from a multi-vendor, IoT Device Marketplace</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-3819c490 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3819c490" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-74a3ae07" data-id="74a3ae07" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-58a67b23 elementor-widget elementor-widget-heading" data-id="58a67b23" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">24/7 Monitoring </h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-76d35289 elementor-widget elementor-widget-text-editor" data-id="76d35289" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Full-stack visibility across the platform, devices and apps. 24/7 use case monitoring and SLAs</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-21c90375" data-id="21c90375" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f0f6da2" data-id="f0f6da2" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-122032e6 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="122032e6" data-element_type="section" data-settings="{&quot;animation&quot;:&quot;none&quot;,&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-da2ccc0" data-id="da2ccc0" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-96f88aa elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="96f88aa" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-a87d29c" data-id="a87d29c" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-4f2848e elementor-widget elementor-widget-heading" data-id="4f2848e" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">6.6</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-ab61029 elementor-widget elementor-widget-heading" data-id="ab61029" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">Billion</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-2bb0619 elementor-widget elementor-widget-text-editor" data-id="2bb0619" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Enterprise square feet digitized</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-67e93fc elementor-hidden-mobile" data-id="67e93fc" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-bacbc3e" data-id="bacbc3e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-a942eae elementor-widget elementor-widget-heading" data-id="a942eae" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">8.8</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-52f9448 elementor-widget elementor-widget-heading" data-id="52f9448" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">Trillion</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-020ccff elementor-widget elementor-widget-text-editor" data-id="020ccff" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Location data points processed till date</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-4d4b803" data-id="4d4b803" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-de42792" data-id="de42792" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-26cce76 elementor-widget elementor-widget-heading" data-id="26cce76" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">2.1</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-2864b9a elementor-widget elementor-widget-heading" data-id="2864b9a" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h6 class="elementor-heading-title elementor-size-default">Million</h6>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-e06e67d elementor-widget elementor-widget-text-editor" data-id="e06e67d" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Access points connected to the Cisco Spaces cloud</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-412bc31 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="412bc31" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-8c4b545" data-id="8c4b545" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-b9f574e elementor-widget elementor-widget-heading" data-id="b9f574e" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">193,781+</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-c8cc52b elementor-widget elementor-widget-text-editor" data-id="c8cc52b" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Buildings digitized</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-29371ca" data-id="29371ca" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-2996459" data-id="2996459" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3a07707 elementor-widget elementor-widget-heading" data-id="3a07707" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">72,836+</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-55693e5 elementor-widget elementor-widget-text-editor" data-id="55693e5" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Devices digitized&nbsp;</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-ea106df" data-id="ea106df" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-20 elementor-inner-column elementor-element elementor-element-ab9c622" data-id="ab9c622" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-537cd22 elementor-widget elementor-widget-heading" data-id="537cd22" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h4 class="elementor-heading-title elementor-size-default">8,000+</h4>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-be3d113 elementor-widget elementor-widget-text-editor" data-id="be3d113" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\tGlobal enterprise customers\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-8571f69 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8571f69" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-35f89c1" data-id="35f89c1" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8fdb287" data-id="8fdb287" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-eca264a elementor-widget elementor-widget-image" data-id="eca264a" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="356" height="297" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/gartner-choice-2022.png" class="attachment-large size-large wp-image-10929" alt="" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/gartner-choice-2022.png 356w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/gartner-choice-2022-300x250.png 300w" sizes="(max-width: 356px) 100vw, 356px">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-a082f38" data-id="a082f38" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-3b1a68e elementor-widget elementor-widget-text-editor" data-id="3b1a68e" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Gartner Customers’ Choice<span style="color: #00ccff;"> award winner</span> 2020, 2021 &amp; 2022</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-b29be65 elementor-widget elementor-widget-text-editor" data-id="b29be65" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>Highest-ranked indoor location and IoT services platform in the industry for three years in a row.</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-40518b9" data-id="40518b9" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1ffdea8" data-id="1ffdea8" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-face61f elementor-widget elementor-widget-html" data-id="face61f" data-element_type="widget" data-widget_type="html.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<div id="gartnereviews"><div id="gartner-pi-widget-MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk" data-size="large" data-theme="light"><a id="gartner-pi-link-MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk" href="https://www.gartner.com/reviews/market/indoor-location-services/vendor/cisco?utm_source=cisco&amp;utm_medium=referral&amp;utm_campaign=widget&amp;utm_content=MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk" class="gartner-pi-link" target="_blank" rel="nofollow"><div id="gartner-pi-datacontainer-MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk"><div class="gartner-pi-gradient"></div><div class="gartner-pi-card"><div class="gartner-pi-logo"></div><div class="gartner-pi-header"><div class="gartner-pi-h1">Cisco</div><div class="gartner-pi-h2">Indoor Location Services</div></div><div class="gartner-pi-stats"><div class="gartner-pi-alignLeft"><div class="gartner-pi-overall-rating"><span class="gartner-pi-score">4.5</span><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:90%"></span></span></div><div class="gartner-pi-reviews-link"><span>145 Ratings <span class="gartner-pi-chevron"></span></span></div></div><div class="gartner-pi-alignRight"><div class="gartner-pi-sourcing-link"><a id="https://gtnr.io/8Muo9cW2X" href="https://gtnr.io/8Muo9cW2X" target="_blank">Submit a review</a><span class="gartner-pi-chevron"></span></div></div><div class="gartner-pi-as-of-date" title="As of 26 Jun 2023">As of 26 Jun 2023</div></div></div><div class="gartner-pi-reviews"><ul><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed June 19, 2023</span></div><p class="gartner-pi-quote">"Cisco Spaces Review: A Promising Platform with a Lot of Potential. ..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed June 13, 2023</span></div><p class="gartner-pi-quote">"The future of this product is promising..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed June 5, 2023</span></div><p class="gartner-pi-quote">"Enhance productivity and connectivity with Cisco Spaces..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed May 29, 2023</span></div><p class="gartner-pi-quote">"A comprehensive location service tool..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed May 15, 2023</span></div><p class="gartner-pi-quote">"A game changing experience with Cisco spaces..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed May 2, 2023</span></div><p class="gartner-pi-quote">"Cisco Spaces is the mobility solution for enterprise size business...." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed April 29, 2023</span></div><p class="gartner-pi-quote">"Seamless connection to WiFi ..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 28, 2023</span></div><p class="gartner-pi-quote">"we can now use wireless networks to pinpoint our exact location indoors...." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed April 27, 2023</span></div><p class="gartner-pi-quote">"Cisco Spaces Indoor Location Services - Review..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 27, 2023</span></div><p class="gartner-pi-quote">"Informative..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 27, 2023</span></div><p class="gartner-pi-quote">"Good product if you implement properly..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 26, 2023</span></div><p class="gartner-pi-quote">"Satisfied with Cisco Spaces..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 26, 2023</span></div><p class="gartner-pi-quote">"Cisco Spaces and amazing product for device and IOT management..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed April 26, 2023</span></div><p class="gartner-pi-quote">"Cisco Spaces is a useful tool for business environment...." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed April 26, 2023</span></div><p class="gartner-pi-quote">"All in one app to manage spaces..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 25, 2023</span></div><p class="gartner-pi-quote">"Good Quality and secure collobration of your team on Cisco Spaces..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:100%"></span></span><span class="gartner-pi-datestamp">Reviewed April 25, 2023</span></div><p class="gartner-pi-quote">"Awesome cloud based tool for location services!..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 24, 2023</span></div><p class="gartner-pi-quote">"Good product to manage a lot of site to reduce the business blindspots..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 24, 2023</span></div><p class="gartner-pi-quote">"Great for those familiar with Cisco..." <span>(read more)</span></p></li><li><div class="gartner-pi-rating-container"><span class="gartner-pi-star-rating"><span class="gartner-pi-star-rating-score" style="width:80%"></span></span><span class="gartner-pi-datestamp">Reviewed April 24, 2023</span></div><p class="gartner-pi-quote">"indoor location services does work..." <span>(read more)</span></p></li></ul></div></div></a></div><iframe src="https://www.gartner.com/reviews/public/Widget/data?widget_id=MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk&amp;size=large" width="0" height="0" frameborder="0" id="gartner-pi-widget-data-MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk" title="Read reviews on Gartner Peer Insights" aria-label="Read reviews on Gartner Peer Insights"></iframe></div>\n\n<script type="text/javascript" src="https://www.gartner.com/reviews/public/Widget/js/widget.js">\n</script>\n<script type="text/javascript">\n    GartnerPI_Widget({\n        size: "large",\n        theme: "light",\n        sourcingLink: "https://gtnr.io/8Muo9cW2X",\n        widget_id: "MDNjMDlhZDMtMjIwOS00OTg2LWEyNjctOTA1NWE2ODk2YzJk",\n        version: "2",\n    container: document.querySelector("#gartnereviews"),\n    })\n</script> \n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-70285748 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="70285748" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-198c4d0e" data-id="198c4d0e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-18702f90 elementor-widget elementor-widget-heading" data-id="18702f90" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h3 class="elementor-heading-title elementor-size-default">Don\'t just take our word for it!</h3>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-31122b8d elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="31122b8d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-no">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-2da264b1" data-id="2da264b1" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-630e6fb5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="630e6fb5" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-64d672ea" data-id="64d672ea" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-50a7f006 elementor-hidden-phone" data-id="50a7f006" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1dea376 elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="1dea376" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="111" height="90" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/QUOTES.png" class="attachment-medium size-medium wp-image-4775" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-16acf46" data-id="16acf46" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<div class="elementor-element elementor-element-253a7887 elementor-widget elementor-widget-testimonial" data-id="253a7887" data-element_type="widget" data-widget_type="testimonial.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<style>/*! elementor - v3.13.3 - 22-05-2023 */\n.elementor-testimonial-wrapper{overflow:hidden;text-align:center}.elementor-testimonial-wrapper .elementor-testimonial-content{font-size:1.3em;margin-bottom:20px}.elementor-testimonial-wrapper .elementor-testimonial-name{line-height:1.5;display:block}.elementor-testimonial-wrapper .elementor-testimonial-job{font-size:.85em;display:block}.elementor-testimonial-wrapper .elementor-testimonial-meta{width:100%;line-height:1}.elementor-testimonial-wrapper .elementor-testimonial-meta-inner{display:inline-block}.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image{display:table-cell;vertical-align:middle}.elementor-testimonial-wrapper .elementor-testimonial-meta .elementor-testimonial-image img{width:60px;height:60px;border-radius:50%;-o-object-fit:cover;object-fit:cover;max-width:none}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-image{padding-right:15px}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-aside .elementor-testimonial-details{text-align:left}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-details,.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{display:block}.elementor-testimonial-wrapper .elementor-testimonial-meta.elementor-testimonial-image-position-top .elementor-testimonial-image{margin-bottom:20px}</style>\t\t<div class="elementor-testimonial-wrapper">\n\t\t\t\t\t\t\t<div class="elementor-testimonial-content">Cisco Spaces is easy to install and brings good value for money</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-testimonial-meta">\n\t\t\t\t<div class="elementor-testimonial-meta-inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-details">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-name">IT Manager </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-job">Healthcare Industry</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-11a6f458" data-id="11a6f458" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-728c689b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="728c689b" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a65f4a8" data-id="a65f4a8" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4b7684a9 elementor-hidden-phone" data-id="4b7684a9" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-60f445c elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="60f445c" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="111" height="90" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/QUOTES.png" class="attachment-medium size-medium wp-image-4775" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4dcfee54" data-id="4dcfee54" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<div class="elementor-element elementor-element-3ebfd526 elementor-widget elementor-widget-testimonial" data-id="3ebfd526" data-element_type="widget" data-widget_type="testimonial.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-testimonial-wrapper">\n\t\t\t\t\t\t\t<div class="elementor-testimonial-content">Cisco Spaces leverages more out of your wireless network infrastructure</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-testimonial-meta">\n\t\t\t\t<div class="elementor-testimonial-meta-inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-details">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-name">Director Of Network Services</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-job">Education Industry</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4d06fb08" data-id="4d06fb08" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-6544756c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6544756c" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5121ea8c" data-id="5121ea8c" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-760fa33b elementor-hidden-phone" data-id="760fa33b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-34be42c elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="34be42c" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="111" height="90" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/QUOTES.png" class="attachment-medium size-medium wp-image-4775" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5f5f95b3" data-id="5f5f95b3" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<div class="elementor-element elementor-element-1cfc86aa elementor-widget elementor-widget-testimonial" data-id="1cfc86aa" data-element_type="widget" data-widget_type="testimonial.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-testimonial-wrapper">\n\t\t\t\t\t\t\t<div class="elementor-testimonial-content">Intuitive, easy to use, web based tool with integrated dashboards</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-testimonial-meta">\n\t\t\t\t<div class="elementor-testimonial-meta-inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-details">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-name">Sr. Business Partner</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-job">Real Estate in the Communications Industry</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-75a6de5a elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="75a6de5a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-no">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4ad3bd62" data-id="4ad3bd62" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-4e8e2606 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4e8e2606" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5cf75c35" data-id="5cf75c35" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4252a711 elementor-hidden-phone" data-id="4252a711" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-78ab20d elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="78ab20d" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="111" height="90" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/QUOTES.png" class="attachment-medium size-medium wp-image-4775" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-feae100" data-id="feae100" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<div class="elementor-element elementor-element-52c78ef0 elementor-widget elementor-widget-testimonial" data-id="52c78ef0" data-element_type="widget" data-widget_type="testimonial.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-testimonial-wrapper">\n\t\t\t\t\t\t\t<div class="elementor-testimonial-content">The Wi-Fi platform of the future</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-testimonial-meta">\n\t\t\t\t<div class="elementor-testimonial-meta-inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-details">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-name">Customer Experience Manager</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-job">Airport Industry</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1bdfa5b2" data-id="1bdfa5b2" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-61ca642c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="61ca642c" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4225f60e" data-id="4225f60e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6a55fdae elementor-hidden-phone" data-id="6a55fdae" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-a373848 elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="a373848" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="111" height="90" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/QUOTES.png" class="attachment-medium size-medium wp-image-4775" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-23b51f77" data-id="23b51f77" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<div class="elementor-element elementor-element-123eddc1 elementor-widget elementor-widget-testimonial" data-id="123eddc1" data-element_type="widget" data-widget_type="testimonial.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-testimonial-wrapper">\n\t\t\t\t\t\t\t<div class="elementor-testimonial-content">Cisco Spaces is a must-have for 5-10 feet asset tracking\n</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-testimonial-meta">\n\t\t\t\t<div class="elementor-testimonial-meta-inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-details">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-name">IT Architect</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-job">Healthcare Facility</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c505732" data-id="c505732" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-17345519 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="17345519" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3840e832" data-id="3840e832" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-77738e8b elementor-hidden-phone" data-id="77738e8b" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-6211c32 elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="6211c32" data-element_type="widget" data-widget_type="image.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img decoding="async" width="111" height="90" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2021/07/QUOTES.png" class="attachment-medium size-medium wp-image-4775" alt="" loading="lazy">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-495e585e" data-id="495e585e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<div class="elementor-element elementor-element-22f18593 elementor-widget elementor-widget-testimonial" data-id="22f18593" data-element_type="widget" data-widget_type="testimonial.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-testimonial-wrapper">\n\t\t\t\t\t\t\t<div class="elementor-testimonial-content">An amazing tool to improve operational efficiency</div>\n\t\t\t\n\t\t\t\t\t\t<div class="elementor-testimonial-meta">\n\t\t\t\t<div class="elementor-testimonial-meta-inner">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-details">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-name">Facility Manager</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="elementor-testimonial-job">Internationally Acclaimed Venue</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-62226aff elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="62226aff" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-161f9e78" data-id="161f9e78" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-517b4620 elementor-widget elementor-widget-heading" data-id="517b4620" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h3 class="elementor-heading-title elementor-size-default">Ready to get started? </h3>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-1c016ae1 elementor-align-center elementor-mobile-align-center elementor-invisible elementor-widget elementor-widget-button" data-id="1c016ae1" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;,&quot;_animation_delay&quot;:&quot;250&quot;}" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="/start-for-free/" class="elementor-button-link elementor-button elementor-size-xl elementor-animation-grow" role="button">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t<span class="elementor-button-text">Start for free</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-56691837 elementor-widget elementor-widget-text-editor" data-id="56691837" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>no credit card required</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-c49c04f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c49c04f" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20cf4d2" data-id="20cf4d2" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-0f08dc7 elementor-widget elementor-widget-template" data-id="0f08dc7" data-element_type="widget" data-widget_type="template.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-template">\n\t\t\t\t\t<div data-elementor-type="section" data-elementor-id="10749" class="elementor elementor-10749">\n\t\t<div class="elementor-section-wrap">\n\t\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-3dd1a0b elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3dd1a0b" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6405932" data-id="6405932" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-dc19228 elementor-widget elementor-widget-heading" data-id="dc19228" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<h5 class="elementor-heading-title elementor-size-default">Our latest resources</h5>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-element elementor-element-208dfa8 elementor-grid-4 elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-posts" data-id="208dfa8" data-element_type="widget" data-settings="{&quot;cards_columns&quot;:&quot;4&quot;,&quot;cards_columns_tablet&quot;:&quot;2&quot;,&quot;cards_columns_mobile&quot;:&quot;1&quot;,&quot;cards_row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:35,&quot;sizes&quot;:[]}}" data-widget_type="posts.cards">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css">\t\t<div class="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid elementor-has-item-ratio">\n\t\t\t\t<article class="elementor-post elementor-grid-item post-13524 post type-post status-publish format-standard has-post-thumbnail hentry category-ebookwhitepapers">\n\t\t\t<div class="elementor-post__card">\n\t\t\t\t<a class="elementor-post__thumbnail__link" href="https://spaces.cisco.com/e-book-driving-sustainability-in-buildings/">\n\t\t\t<div class="elementor-post__thumbnail"><img width="300" height="195" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/12/sustainability-webinar-300x195.jpg" class="attachment-medium size-medium wp-image-12008" alt="" decoding="async" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/12/sustainability-webinar-300x195.jpg 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/12/sustainability-webinar-768x500.jpg 768w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/12/sustainability-webinar.jpg 840w" sizes="(max-width: 300px) 100vw, 300px"></div>\n\t\t</a>\n\t\t\t\t<div class="elementor-post__badge">eBook/White Paper</div>\n\t\t\t\t<div class="elementor-post__text">\n\t\t\t\t<h3 class="elementor-post__title">\n\t\t\t<a href="https://spaces.cisco.com/e-book-driving-sustainability-in-buildings/">\n\t\t\t\te-book: Driving sustainability in buildings\t\t\t</a>\n\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-post__meta-data">\n\t\t\t\t\t<span class="elementor-post-date">\n\t\t\tJune 21, 2023\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</article>\n\t\t\t\t<article class="elementor-post elementor-grid-item post-13517 post type-post status-publish format-standard has-post-thumbnail hentry category-articlesblogs">\n\t\t\t<div class="elementor-post__card">\n\t\t\t\t<a class="elementor-post__thumbnail__link" href="https://spaces.cisco.com/contextual-engagement-how-to-improve-the-in-store-customer-experience/">\n\t\t\t<div class="elementor-post__thumbnail"><img width="300" height="192" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/retail-cover-bg-300x192.png" class="attachment-medium size-medium wp-image-11275" alt="" decoding="async" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/retail-cover-bg-300x192.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/retail-cover-bg-1024x655.png 1024w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/retail-cover-bg-768x491.png 768w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/10/retail-cover-bg.png 1201w" sizes="(max-width: 300px) 100vw, 300px"></div>\n\t\t</a>\n\t\t\t\t<div class="elementor-post__badge">Articles / Blogs</div>\n\t\t\t\t<div class="elementor-post__text">\n\t\t\t\t<h3 class="elementor-post__title">\n\t\t\t<a href="https://spaces.cisco.com/contextual-engagement-how-to-improve-the-in-store-customer-experience/">\n\t\t\t\tContextual engagement: How to improve the in-store customer experience\t\t\t</a>\n\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-post__meta-data">\n\t\t\t\t\t<span class="elementor-post-date">\n\t\t\tJune 16, 2023\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</article>\n\t\t\t\t<article class="elementor-post elementor-grid-item post-13502 post type-post status-publish format-standard has-post-thumbnail hentry category-articlesblogs">\n\t\t\t<div class="elementor-post__card">\n\t\t\t\t<a class="elementor-post__thumbnail__link" href="https://spaces.cisco.com/an-introduction-to-secure-wi-fi-onboarding/">\n\t\t\t<div class="elementor-post__thumbnail"><img width="300" height="200" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/WiFi-onboarding-300x200.jpg" class="attachment-medium size-medium wp-image-13503" alt="" decoding="async" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/WiFi-onboarding-300x200.jpg 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/WiFi-onboarding-1024x683.jpg 1024w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/WiFi-onboarding-768x512.jpg 768w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/WiFi-onboarding-1536x1024.jpg 1536w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/WiFi-onboarding-2048x1365.jpg 2048w" sizes="(max-width: 300px) 100vw, 300px"></div>\n\t\t</a>\n\t\t\t\t<div class="elementor-post__badge">Articles / Blogs</div>\n\t\t\t\t<div class="elementor-post__text">\n\t\t\t\t<h3 class="elementor-post__title">\n\t\t\t<a href="https://spaces.cisco.com/an-introduction-to-secure-wi-fi-onboarding/">\n\t\t\t\tAn introduction to secure Wi-Fi onboarding\t\t\t</a>\n\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-post__meta-data">\n\t\t\t\t\t<span class="elementor-post-date">\n\t\t\tJune 12, 2023\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</article>\n\t\t\t\t<article class="elementor-post elementor-grid-item post-13495 post type-post status-publish format-standard has-post-thumbnail hentry category-ondemandwebinar">\n\t\t\t<div class="elementor-post__card">\n\t\t\t\t<a class="elementor-post__thumbnail__link" href="https://spaces.cisco.com/setup-spaces-for-success-series2/">\n\t\t\t<div class="elementor-post__thumbnail"><img width="300" height="169" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/setupforsucces-ondemand-300x169.png" class="attachment-medium size-medium wp-image-13529" alt="" decoding="async" loading="lazy" srcset="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/setupforsucces-ondemand-300x169.png 300w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/setupforsucces-ondemand-768x432.png 768w, https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2023/06/setupforsucces-ondemand.png 860w" sizes="(max-width: 300px) 100vw, 300px"></div>\n\t\t</a>\n\t\t\t\t<div class="elementor-post__badge">On-demand webinar</div>\n\t\t\t\t<div class="elementor-post__text">\n\t\t\t\t<h3 class="elementor-post__title">\n\t\t\t<a href="https://spaces.cisco.com/setup-spaces-for-success-series2/">\n\t\t\t\tSeries II: Set up Spaces for success\t\t\t</a>\n\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class="elementor-post__meta-data">\n\t\t\t\t\t<span class="elementor-post-date">\n\t\t\tJune 2, 2023\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</article>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-94a7920 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="94a7920" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-47308b4" data-id="47308b4" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-c08c97f elementor-widget elementor-widget-template" data-id="c08c97f" data-element_type="widget" data-widget_type="template.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-template">\n\t\t\t\t\t<div data-elementor-type="footer" data-elementor-id="1925" class="elementor elementor-1925">\n\t\t<div class="elementor-section-wrap">\n\t\t\t\t\t<section class="elementor-section elementor-top-section elementor-element elementor-element-77154f3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="77154f3" data-element_type="section">\n\t\t\t\t\t\t\t<div class="elementor-background-overlay"></div>\n\t\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f8d9c0e" data-id="f8d9c0e" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-1a2e712 elementor-nav-menu--dropdown-tablet elementor-nav-menu__text-align-aside elementor-widget elementor-widget-nav-menu" data-id="1a2e712" data-element_type="widget" data-settings="{&quot;layout&quot;:&quot;vertical&quot;,&quot;submenu_icon&quot;:{&quot;value&quot;:&quot;fas fa-caret-down&quot;,&quot;library&quot;:&quot;fa-solid&quot;}}" data-widget_type="nav-menu.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t<nav migration_allowed="1" migrated="0" role="navigation" class="elementor-nav-menu--main elementor-nav-menu__container elementor-nav-menu--layout-vertical e--pointer-underline e--animation-fade"><ul id="menu-1-1a2e712" class="elementor-nav-menu sm-vertical" data-smartmenus-id="16877560556607773"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5782"><a href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html" class="elementor-item">Terms &amp; Conditions</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5783"><a href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html" class="elementor-item">Privacy Statement</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5784"><a href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies" class="elementor-item elementor-item-anchor">Cookies</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5785"><a href="https://www.cisco.com/c/en/us/about/legal/trademarks.html" class="elementor-item">Trademarks</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13412"><a href="https://spaces.cisco.com/partners/" class="elementor-item">For Partners</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5940"><a href="/contact-us/" class="elementor-item">Contact us</a></li>\n</ul></nav>\n\t\t\t\t\t<div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">\n\t\t\t<i class="eicon-menu-bar" aria-hidden="true" role="presentation"></i>\n\t\t\t<span class="elementor-screen-only">Menu</span>\n\t\t</div>\n\t\t\t<nav class="elementor-nav-menu--dropdown elementor-nav-menu__container" role="navigation" aria-hidden="true"><ul id="menu-2-1a2e712" class="elementor-nav-menu sm-vertical" data-smartmenus-id="16877560556602454"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5782"><a href="https://www.cisco.com/c/en/us/about/legal/terms-conditions.html" class="elementor-item" tabindex="-1">Terms &amp; Conditions</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5783"><a href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html" class="elementor-item" tabindex="-1">Privacy Statement</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5784"><a href="https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies" class="elementor-item elementor-item-anchor" tabindex="-1">Cookies</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5785"><a href="https://www.cisco.com/c/en/us/about/legal/trademarks.html" class="elementor-item" tabindex="-1">Trademarks</a></li>\n<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-13412"><a href="https://spaces.cisco.com/partners/" class="elementor-item" tabindex="-1">For Partners</a></li>\n<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5940"><a href="/contact-us/" class="elementor-item" tabindex="-1">Contact us</a></li>\n</ul></nav>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-dbf1882" data-id="dbf1882" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-a38eb8f elementor-widget elementor-widget-heading" data-id="a38eb8f" data-element_type="widget" data-widget_type="heading.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<p class="elementor-heading-title elementor-size-default">Featured Outcomes</p>\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<section class="elementor-section elementor-inner-section elementor-element elementor-element-85a9819 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="85a9819" data-element_type="section">\n\t\t\t\t\t\t<div class="elementor-container elementor-column-gap-default">\n\t\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9b7bf58" data-id="9b7bf58" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-a50dfea elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="a50dfea" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t<link rel="stylesheet" href="https://spaces.cisco.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css">\t\t<ul class="elementor-icon-list-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/indoor-location-services/" target="_blank">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Indoor Location Services</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/occupancy_monitoring/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Occupancy Monitoring</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/contact-tracing/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Contact Tracing</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/asset-tracking/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Asset Tracking</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/indoor-navigation/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Indoor Navigation</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/contactless-experience/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Contactless Experience</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-746b0ad" data-id="746b0ad" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-84a3130 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="84a3130" data-element_type="widget" data-widget_type="icon-list.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<ul class="elementor-icon-list-items">\n\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/smart-logistics/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Smart Logistics</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/smart-hospitals/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Smart Hospitals</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/location-analytics/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Location Analytics</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/density-monitoring/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Density Monitoring</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/detect-locate/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Detect &amp; Locate</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class="elementor-icon-list-item">\n\t\t\t\t\t\t\t\t\t\t\t<a href="/smart-healthcare/">\n\n\t\t\t\t\t\t\t\t\t\t\t<span class="elementor-icon-list-text">Smart Healthcare</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-ca947c5" data-id="ca947c5" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-eaaf2a7 elementor-widget elementor-widget-text-editor" data-id="eaaf2a7" data-element_type="widget" data-widget_type="text-editor.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t\t\t<p>© 2022 Cisco. All Rights Reserved.&nbsp;&nbsp;</p>\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-39ae103" data-id="39ae103" data-element_type="column">\n\t\t\t<div class="elementor-widget-wrap elementor-element-populated">\n\t\t\t\t\t\t\t\t<div class="elementor-element elementor-element-a4a0fae elementor-align-center elementor-widget elementor-widget-button" data-id="a4a0fae" data-element_type="widget" data-widget_type="button.default">\n\t\t\t\t<div class="elementor-widget-container">\n\t\t\t\t\t<div class="elementor-button-wrapper">\n\t\t\t<a href="#siteheader" class="elementor-button-link elementor-button elementor-size-sm" role="button">\n\t\t\t\t\t\t<span class="elementor-button-content-wrapper">\n\t\t\t\t\t\t\t<span class="elementor-button-icon elementor-align-icon-right">\n\t\t\t\t<i aria-hidden="true" class="fas fa-arrow-up"></i>\t\t\t</span>\n\t\t\t\t\t\t<span class="elementor-button-text">Back to top</span>\n\t\t</span>\n\t\t\t\t\t</a>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t</section>\n\t\t\t\t\t\t\t</div>',
    },
    _id: "649922e9a9da3f3a62443c92",
  },
  {
    timeStamp: 1687756059.84,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1061,
      Y: 6599,
      scrollX: 0,
      scrollY: 6544,
      HTMLElement:
        '<span class="sub-arrow"><i class="fas fa-angle-down"></i></span>',
    },
    _id: "649922e9a9da3f3a62443c93",
  },
  {
    timeStamp: 1687756060.06,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1061,
      Y: 6599,
      scrollX: 0,
      scrollY: 6544,
      HTMLElement:
        '<span class="sub-arrow"><i class="fas fa-angle-down"></i></span>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c94",
  },
  {
    timeStamp: 1687756060.082,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 4.477 },
    _id: "649922e9a9da3f3a62443c95",
  },
  {
    timeStamp: 1687756060.378,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443c96",
  },
  {
    timeStamp: 1687756060.839,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443c97",
  },
  {
    timeStamp: 1687756064.892,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 1052,
      Y: 174,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a>',
    },
    _id: "649922e9a9da3f3a62443c98",
  },
  {
    timeStamp: 1687756064.959,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1052,
      Y: 174,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a>',
    },
    _id: "649922e9a9da3f3a62443c99",
  },
  {
    timeStamp: 1687756065.185,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1052,
      Y: 174,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443c9a",
  },
  {
    timeStamp: 1687756065.213,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443c9b",
  },
  {
    timeStamp: 1687756066.092,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 1052,
      Y: 174,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a target="_blank" rel="noopener" href="https://ciscospaces.sg/login" class="elementor-sub-item">APAC (Singapore)</a>',
    },
    _id: "649922e9a9da3f3a62443c9c",
  },
  {
    timeStamp: 1687756072.805,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 7592.100000023842 },
    _id: "649922e9a9da3f3a62443c9d",
  },
  {
    timeStamp: 1687756073.562,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443c9e",
  },
  {
    timeStamp: 1687756122.82,
    name: "PAGE_EVENT",
    type: "TAB_ACTIVE",
    data: { duration: 49256.5 },
    _id: "649922e9a9da3f3a62443c9f",
  },
  {
    timeStamp: 1687756124.168,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 63.343 },
    _id: "649922e9a9da3f3a62443ca0",
  },
  {
    timeStamp: 1687756124.209,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443ca1",
  },
  {
    timeStamp: 1687757487.123,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443ca2",
  },
  {
    timeStamp: 1687757489.582,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 761,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "649922e9a9da3f3a62443ca3",
  },
  {
    timeStamp: 1687757489.876,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 761,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "649922e9a9da3f3a62443ca4",
  },
  {
    timeStamp: 1687757490.111,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 761,
      Y: 173,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443ca5",
  },
  {
    timeStamp: 1687757490.866,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 594,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
    },
    _id: "649922e9a9da3f3a62443ca6",
  },
  {
    timeStamp: 1687757491.09,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 594,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443ca7",
  },
  {
    timeStamp: 1687757491.111,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 4.014 },
    _id: "649922e9a9da3f3a62443ca8",
  },
  {
    timeStamp: 1687757491.866,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 594,
      Y: 39,
      scrollX: 0,
      scrollY: 0,
      HTMLElement: '<a href="/store/" class="elementor-item">Outcome Store</a>',
    },
    _id: "649922e9a9da3f3a62443ca9",
  },
  {
    timeStamp: 1687757493.411,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443caa",
  },
  {
    timeStamp: 1687757493.777,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443cab",
  },
  {
    timeStamp: 1687757495.282,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 698,
      Y: 44,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="https://spaces.cisco.com/store/device/" class="elementor-item">Devices</a>',
    },
    _id: "649922e9a9da3f3a62443cac",
  },
  {
    timeStamp: 1687757495.507,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 698,
      Y: 44,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="https://spaces.cisco.com/store/device/" class="elementor-item">Devices</a>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cad",
  },
  {
    timeStamp: 1687757495.527,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 1.767 },
    _id: "649922e9a9da3f3a62443cae",
  },
  {
    timeStamp: 1687757496.286,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 698,
      Y: 44,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="https://spaces.cisco.com/store/device/" class="elementor-item">Devices</a>',
    },
    _id: "649922e9a9da3f3a62443caf",
  },
  {
    timeStamp: 1687757497.441,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443cb0",
  },
  {
    timeStamp: 1687757497.778,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/device/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443cb1",
  },
  {
    timeStamp: 1687757499.537,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 24,
      Y: 197,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">',
    },
    _id: "649922e9a9da3f3a62443cb2",
  },
  {
    timeStamp: 1687757499.766,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 24,
      Y: 197,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cb3",
  },
  {
    timeStamp: 1687757499.787,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 24,
      Y: 197,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e9a9da3f3a62443cb4",
  },
  {
    timeStamp: 1687757502.826,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 22,
      Y: 585,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">',
    },
    _id: "649922e9a9da3f3a62443cb5",
  },
  {
    timeStamp: 1687757503.046,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 22,
      Y: 585,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cb6",
  },
  {
    timeStamp: 1687757503.065,
    name: "USER_EVENT",
    type: "ON_CHANGE",
    data: {
      X: 22,
      Y: 585,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<form data-post-id="6871" data-slug="devices" action="https://spaces.cisco.com/store/device/" data-shop="" method="get" class="wpf_form wpf_form_devices wpf_submit_on_change wpf_form_ajax wpf-search-submit" style="visibility: visible;" data-infinitybuffer="600" data-gtm-form-interact-id="0">\n            <input type="hidden" name="wpf" value="devices">\n\t\t\t<input type="hidden" name="orderby" value="">\n\t\t\t<input type="hidden" name="wpf_cols" value="5">\n\t\t\t<input type="hidden" name="wpf_page" value="">\n\t\t\t                        <div class="wpf_items_wrapper wpf_layout_vertical">\n                                                                                                                <div class="wpf_item wpf_item_pa_devicesindustry">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesindustry">Browse by Industry</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesindustry_51">\n                                                                    <input id="wpf_devices_51" type="checkbox" name="wpf_browse-by-industry[]" value="educationcampus" data-gtm-form-interact-field-id="0">\n                        <label for="wpf_devices_51">\n                            Education &amp; Campus                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_71">\n                                                                    <input id="wpf_devices_71" type="checkbox" name="wpf_browse-by-industry[]" value="healthcare">\n                        <label for="wpf_devices_71">\n                            Healthcare                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_76">\n                                                                    <input id="wpf_devices_76" type="checkbox" name="wpf_browse-by-industry[]" value="hospitalityvenue">\n                        <label for="wpf_devices_76">\n                            Hospitality &amp; Venue​                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_98">\n                                                                    <input id="wpf_devices_98" type="checkbox" name="wpf_browse-by-industry[]" value="manufacturing">\n                        <label for="wpf_devices_98">\n                            Manufacturing                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_130">\n                                                                    <input id="wpf_devices_130" type="checkbox" name="wpf_browse-by-industry[]" value="retail">\n                        <label for="wpf_devices_130">\n                            Retail                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesindustry_157">\n                                                                    <input id="wpf_devices_157" type="checkbox" name="wpf_browse-by-industry[]" value="workspaces">\n                        <label for="wpf_devices_157">\n                            Workspaces                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesfunction">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesfunction">Browse by Job functions</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesfunction_66">\n                                                                    <input id="wpf_devices_66" type="checkbox" name="wpf_browse-by-job-functions[]" value="facilitiesworkspace">\n                        <label for="wpf_devices_66">\n                            Facilities &amp; Real-estate teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_84">\n                                                                    <input id="wpf_devices_84" type="checkbox" name="wpf_browse-by-job-functions[]" value="hr">\n                        <label for="wpf_devices_84">\n                            HR teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_93">\n                                                                    <input id="wpf_devices_93" type="checkbox" name="wpf_browse-by-job-functions[]" value="it" data-gtm-form-interact-field-id="1">\n                        <label for="wpf_devices_93">\n                            IT teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_117">\n                                                                    <input id="wpf_devices_117" type="checkbox" name="wpf_browse-by-job-functions[]" value="operations">\n                        <label for="wpf_devices_117">\n                            Operations teams                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesfunction_146">\n                                                                    <input id="wpf_devices_146" type="checkbox" name="wpf_browse-by-job-functions[]" value="strategydata">\n                        <label for="wpf_devices_146">\n                            Strategy &amp; Data teams                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                                                                                                            <div class="wpf_item wpf_item_pa_devicesoutcomes">\n                                                                    <label class="wpf_item_name" for="wpf_devices_item_pa_devicesoutcomes">Browse by Outcomes</label>\n                                                                                                <ul class="wpf_column_vertical">\n                                                                                        \n                    \n                            <li class="wpf_pa_devicesoutcomes_33">\n                                                                    <input id="wpf_devices_33" type="checkbox" name="wpf_browse-by-outcomes[]" value="analytics-inisghts">\n                        <label for="wpf_devices_33">\n                            Analytics &amp; Inisghts                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_46">\n                                                                    <input id="wpf_devices_46" type="checkbox" name="wpf_browse-by-outcomes[]" value="contextual-people-experiences">\n                        <label for="wpf_devices_46">\n                            Contextual People Experiences                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_113">\n                                                                    <input id="wpf_devices_113" type="checkbox" name="wpf_browse-by-outcomes[]" value="operational-efficiency">\n                        <label for="wpf_devices_113">\n                            Operational Efficiency                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_128">\n                                                                    <input id="wpf_devices_128" type="checkbox" name="wpf_browse-by-outcomes[]" value="real-time-monitoring">\n                        <label for="wpf_devices_128">\n                            Real-time Monitoring                                                    </label>\n                    \n                                                        </li>\n                                \n                            <li class="wpf_pa_devicesoutcomes_135">\n                                                                    <input id="wpf_devices_135" type="checkbox" name="wpf_browse-by-outcomes[]" value="safety-compliance">\n                        <label for="wpf_devices_135">\n                            Safety &amp; Compliance                                                    </label>\n                    \n                                                        </li>\n                                                                                                            </ul>\t\t\t\t\t\t\t\t\t                                                            </div>\n                                                                        </div>\n            \n\t\t\t<div class="wpf-no-products-found" style="display: none;">\n\t\t\t\t<p class="woocommerce-info">No products were found matching your selection.</p>\n\t\t\t</div>\n        </form>',
    },
    _id: "649922e9a9da3f3a62443cb7",
  },
  {
    timeStamp: 1687757505.407,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 402,
      Y: 281,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3.png 1024w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649922e9a9da3f3a62443cb8",
  },
  {
    timeStamp: 1687757505.63,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 402,
      Y: 281,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3.png 1024w" sizes="(max-width: 300px) 100vw, 300px">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cb9",
  },
  {
    timeStamp: 1687757505.652,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 7.883 },
    _id: "649922e9a9da3f3a62443cba",
  },
  {
    timeStamp: 1687757506.42,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 402,
      Y: 281,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<img width="300" height="300" src="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" decoding="async" loading="lazy" srcset="https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-300x300.png 300w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-100x100.png 100w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-600x600.png 600w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-150x150.png 150w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3-768x768.png 768w, https://spaces.cisco.com/store/wp-content/uploads/2021/09/Asset-Tag-3.png 1024w" sizes="(max-width: 300px) 100vw, 300px">',
    },
    _id: "649922e9a9da3f3a62443cbb",
  },
  {
    timeStamp: 1687757507.571,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443cbc",
  },
  {
    timeStamp: 1687757507.872,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/store/product/anchor-beacon-2/",
      DOMLoadTime: 0,
    },
    _id: "649922e9a9da3f3a62443cbd",
  },
  {
    timeStamp: 1687757509.359,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 280,
      Y: 448,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<span class="elementor-button-text">Get a Free Trial</span>',
    },
    _id: "649922e9a9da3f3a62443cbe",
  },
  {
    timeStamp: 1687757509.58,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 280,
      Y: 448,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<span class="elementor-button-text">Get a Free Trial</span>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cbf",
  },
  {
    timeStamp: 1687757509.599,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 1.738 },
    _id: "649922e9a9da3f3a62443cc0",
  },
  {
    timeStamp: 1687757510.363,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 280,
      Y: 448,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<span class="elementor-button-text">Get a Free Trial</span>',
    },
    _id: "649922e9a9da3f3a62443cc1",
  },
  {
    timeStamp: 1687757511.295,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "649922e9a9da3f3a62443cc2",
  },
  {
    timeStamp: 1687757511.552,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/store/free-trial/", DOMLoadTime: 0 },
    _id: "649922e9a9da3f3a62443cc3",
  },
  {
    timeStamp: 1687757512.641,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 321,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649922e9a9da3f3a62443cc4",
  },
  {
    timeStamp: 1687757512.868,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 321,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cc5",
  },
  {
    timeStamp: 1687757513.644,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 321,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443cc6",
  },
  {
    timeStamp: 1687757514.431,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 366,
      Y: 495,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cc7",
  },
  {
    timeStamp: 1687757514.661,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 366,
      Y: 495,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cc8",
  },
  {
    timeStamp: 1687757514.82,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 366,
      Y: 495,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cc9",
  },
  {
    timeStamp: 1687757515.041,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cca",
  },
  {
    timeStamp: 1687757515.051,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 366,
      Y: 495,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443ccb",
  },
  {
    timeStamp: 1687757515.256,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443ccc",
  },
  {
    timeStamp: 1687757515.309,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "I",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443ccd",
  },
  {
    timeStamp: 1687757515.383,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cce",
  },
  {
    timeStamp: 1687757515.477,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443ccf",
  },
  {
    timeStamp: 1687757515.555,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd0",
  },
  {
    timeStamp: 1687757515.668,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd1",
  },
  {
    timeStamp: 1687757515.728,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "t",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd2",
  },
  {
    timeStamp: 1687757515.737,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd3",
  },
  {
    timeStamp: 1687757515.829,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd4",
  },
  {
    timeStamp: 1687757515.938,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 366,
      Y: 495,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd5",
  },
  {
    timeStamp: 1687757515.952,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd6",
  },
  {
    timeStamp: 1687757515.964,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd7",
  },
  {
    timeStamp: 1687757515.992,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 366,
      Y: 495,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="jobtitle" class="form-control" id="jtitle">',
    },
    _id: "649922e9a9da3f3a62443cd8",
  },
  {
    timeStamp: 1687757516.937,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 388,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443cd9",
  },
  {
    timeStamp: 1687757517.162,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 388,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cda",
  },
  {
    timeStamp: 1687757517.354,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 388,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443cdb",
  },
  {
    timeStamp: 1687757517.517,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 388,
      Y: 543,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443cdc",
  },
  {
    timeStamp: 1687757517.581,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 388,
      Y: 543,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cdd",
  },
  {
    timeStamp: 1687757517.667,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 388,
      Y: 543,
      key: "C",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443cde",
  },
  {
    timeStamp: 1687757517.779,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 388,
      Y: 543,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443cdf",
  },
  {
    timeStamp: 1687757517.791,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 388,
      Y: 543,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce0",
  },
  {
    timeStamp: 1687757517.913,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 388,
      Y: 543,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce1",
  },
  {
    timeStamp: 1687757517.982,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 388,
      Y: 543,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce2",
  },
  {
    timeStamp: 1687757518.008,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 388,
      Y: 543,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce3",
  },
  {
    timeStamp: 1687757518.078,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 388,
      Y: 543,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce4",
  },
  {
    timeStamp: 1687757518.14,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 388,
      Y: 543,
      key: "s",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce5",
  },
  {
    timeStamp: 1687757518.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 388,
      Y: 543,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce6",
  },
  {
    timeStamp: 1687757518.201,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 388,
      Y: 543,
      key: "c",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce7",
  },
  {
    timeStamp: 1687757518.221,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 388,
      Y: 543,
      key: "o",
      HTMLElement:
        '<input placeholder="" name="company" type="text" class="form-control msforms-required" id="cname" required="">',
    },
    _id: "649922e9a9da3f3a62443ce8",
  },
  {
    timeStamp: 1687757519.378,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 391,
      Y: 631,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443ce9",
  },
  {
    timeStamp: 1687757519.601,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 391,
      Y: 631,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cea",
  },
  {
    timeStamp: 1687757519.764,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 391,
      Y: 631,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443ceb",
  },
  {
    timeStamp: 1687757519.991,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 391,
      Y: 631,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cec",
  },
  {
    timeStamp: 1687757520.001,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 391,
      Y: 631,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443ced",
  },
  {
    timeStamp: 1687757520.124,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 391,
      Y: 631,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cee",
  },
  {
    timeStamp: 1687757520.193,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 391,
      Y: 631,
      key: "I",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cef",
  },
  {
    timeStamp: 1687757520.284,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 391,
      Y: 631,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf0",
  },
  {
    timeStamp: 1687757520.335,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 391,
      Y: 631,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf1",
  },
  {
    timeStamp: 1687757520.413,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 391,
      Y: 631,
      key: "n",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf2",
  },
  {
    timeStamp: 1687757520.465,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 391,
      Y: 631,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf3",
  },
  {
    timeStamp: 1687757520.569,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 391,
      Y: 631,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf4",
  },
  {
    timeStamp: 1687757520.622,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 391,
      Y: 631,
      key: "d",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf5",
  },
  {
    timeStamp: 1687757520.637,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 391,
      Y: 631,
      key: "i",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf6",
  },
  {
    timeStamp: 1687757520.692,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 391,
      Y: 631,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf7",
  },
  {
    timeStamp: 1687757520.889,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 391,
      Y: 631,
      key: "a",
      HTMLElement:
        '<input placeholder="" name="country" type="text" class="form-control" id="countryn">',
    },
    _id: "649922e9a9da3f3a62443cf8",
  },
  {
    timeStamp: 1687757521.943,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 432,
      Y: 693,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<a href="javascript:;" class="msform-next-btn float-right">Next</a>',
    },
    _id: "649922e9a9da3f3a62443cf9",
  },
  {
    timeStamp: 1687757522.183,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 432,
      Y: 693,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<fieldset class="msforms-fieldset show">\n            <h6>How can we reach you?</h6>\n            <p style="padding-bottom:10px;">We will use this information to set up a Free Trial or Demo session and send information about DNA Spaces</p>\n            <div class="form-group">\n                \n              <input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">\n              <label class="msforms-form-text-label" for="bemail">Business Email* </label>\n              <div class="msforms-form-error">Please enter your business email id</div>\n            </div>\n            <div class="form-group">\n              <input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">\n                <label class="msforms-form-text-label" for="phonenumber">Phone Number* </label>\n              <div class="msforms-form-error">Please enter your phone number</div>\n            </div>\n           <div class="form-group">\n              <input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">\n                <label class="msforms-form-text-label" for="fname">First Name*</label>\n              <div class="msforms-form-error">Please enter your first name</div>\n            </div>\n            <div class="form-group">\n              <input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">\n                <label class="msforms-form-text-label" for="lname">Last Name*</label>\n              <div class="msforms-form-error">Please enter your last name</div>\n            </div>\n            \n            <div class="form-group clearfix">\n                <a href="javascript:;" class="msform-previous-btn float-left">Previous</a>\n                <button id="freetrial">Submit</button>\n            </div>\n        </fieldset>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cfa",
  },
  {
    timeStamp: 1687757522.924,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 472,
      Y: 499,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443cfb",
  },
  {
    timeStamp: 1687757523.144,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 472,
      Y: 499,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cfc",
  },
  {
    timeStamp: 1687757523.321,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 472,
      Y: 499,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443cfd",
  },
  {
    timeStamp: 1687757523.555,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 472,
      Y: 499,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443cfe",
  },
  {
    timeStamp: 1687757523.617,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443cff",
  },
  {
    timeStamp: 1687757523.689,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d00",
  },
  {
    timeStamp: 1687757523.848,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "y",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d01",
  },
  {
    timeStamp: 1687757523.916,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "y",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d02",
  },
  {
    timeStamp: 1687757523.994,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d03",
  },
  {
    timeStamp: 1687757524.088,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "e",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d04",
  },
  {
    timeStamp: 1687757524.102,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d05",
  },
  {
    timeStamp: 1687757524.173,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d06",
  },
  {
    timeStamp: 1687757524.25,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d07",
  },
  {
    timeStamp: 1687757524.418,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d08",
  },
  {
    timeStamp: 1687757524.434,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d09",
  },
  {
    timeStamp: 1687757524.505,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d0a",
  },
  {
    timeStamp: 1687757524.629,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "l",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d0b",
  },
  {
    timeStamp: 1687757524.708,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d0c",
  },
  {
    timeStamp: 1687757524.719,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "L",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d0d",
  },
  {
    timeStamp: 1687757524.877,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d0e",
  },
  {
    timeStamp: 1687757524.97,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "@",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d0f",
  },
  {
    timeStamp: 1687757525.055,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d10",
  },
  {
    timeStamp: 1687757525.245,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d11",
  },
  {
    timeStamp: 1687757525.368,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d12",
  },
  {
    timeStamp: 1687757525.379,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d13",
  },
  {
    timeStamp: 1687757525.426,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d14",
  },
  {
    timeStamp: 1687757525.453,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d15",
  },
  {
    timeStamp: 1687757525.509,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d16",
  },
  {
    timeStamp: 1687757525.564,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d17",
  },
  {
    timeStamp: 1687757525.593,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d18",
  },
  {
    timeStamp: 1687757525.621,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d19",
  },
  {
    timeStamp: 1687757525.658,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d1a",
  },
  {
    timeStamp: 1687757525.796,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d1b",
  },
  {
    timeStamp: 1687757525.842,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: ".",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d1c",
  },
  {
    timeStamp: 1687757525.899,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d1d",
  },
  {
    timeStamp: 1687757526.001,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "c",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d1e",
  },
  {
    timeStamp: 1687757526.029,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d1f",
  },
  {
    timeStamp: 1687757526.083,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 472,
      Y: 499,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d20",
  },
  {
    timeStamp: 1687757526.106,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "o",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d21",
  },
  {
    timeStamp: 1687757526.184,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 472,
      Y: 499,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="email" name="email" class="form-control msforms-required" id="bemail" required="">',
    },
    _id: "649922e9a9da3f3a62443d22",
  },
  {
    timeStamp: 1687757527.071,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 480,
      Y: 584,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d23",
  },
  {
    timeStamp: 1687757527.302,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 480,
      Y: 584,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d24",
  },
  {
    timeStamp: 1687757527.466,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 480,
      Y: 584,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d25",
  },
  {
    timeStamp: 1687757527.687,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d26",
  },
  {
    timeStamp: 1687757527.703,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 480,
      Y: 584,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d27",
  },
  {
    timeStamp: 1687757527.725,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d28",
  },
  {
    timeStamp: 1687757527.819,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d29",
  },
  {
    timeStamp: 1687757527.895,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d2a",
  },
  {
    timeStamp: 1687757527.919,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "3",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d2b",
  },
  {
    timeStamp: 1687757527.93,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "2",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d2c",
  },
  {
    timeStamp: 1687757528.007,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d2d",
  },
  {
    timeStamp: 1687757528.167,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "4",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d2e",
  },
  {
    timeStamp: 1687757528.178,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d2f",
  },
  {
    timeStamp: 1687757528.228,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "5",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d30",
  },
  {
    timeStamp: 1687757528.426,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d31",
  },
  {
    timeStamp: 1687757528.491,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "6",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d32",
  },
  {
    timeStamp: 1687757528.669,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d33",
  },
  {
    timeStamp: 1687757528.734,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "7",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d34",
  },
  {
    timeStamp: 1687757528.849,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d35",
  },
  {
    timeStamp: 1687757528.926,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "8",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d36",
  },
  {
    timeStamp: 1687757529.03,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d37",
  },
  {
    timeStamp: 1687757529.1,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "9",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d38",
  },
  {
    timeStamp: 1687757529.155,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d39",
  },
  {
    timeStamp: 1687757529.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 480,
      Y: 584,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d3a",
  },
  {
    timeStamp: 1687757529.268,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "1",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d3b",
  },
  {
    timeStamp: 1687757529.296,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 480,
      Y: 584,
      key: "0",
      HTMLElement:
        '<input placeholder="" type="text" name="phone" class="form-control msforms-required" id="phonenumber" required="">',
    },
    _id: "649922e9a9da3f3a62443d3c",
  },
  {
    timeStamp: 1687757530.227,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 444,
      Y: 651,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d3d",
  },
  {
    timeStamp: 1687757530.443,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 444,
      Y: 651,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d3e",
  },
  {
    timeStamp: 1687757530.538,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 444,
      Y: 651,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d3f",
  },
  {
    timeStamp: 1687757530.603,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 444,
      Y: 651,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d40",
  },
  {
    timeStamp: 1687757530.756,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 444,
      Y: 651,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d41",
  },
  {
    timeStamp: 1687757530.816,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 444,
      Y: 651,
      key: "V",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d42",
  },
  {
    timeStamp: 1687757530.933,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 444,
      Y: 651,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d43",
  },
  {
    timeStamp: 1687757530.943,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 444,
      Y: 651,
      key: "v",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d44",
  },
  {
    timeStamp: 1687757531.051,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 444,
      Y: 651,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d45",
  },
  {
    timeStamp: 1687757531.122,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 444,
      Y: 651,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d46",
  },
  {
    timeStamp: 1687757531.193,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 444,
      Y: 651,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d47",
  },
  {
    timeStamp: 1687757531.203,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 444,
      Y: 651,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d48",
  },
  {
    timeStamp: 1687757531.247,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 444,
      Y: 651,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d49",
  },
  {
    timeStamp: 1687757531.257,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 444,
      Y: 651,
      key: "r",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d4a",
  },
  {
    timeStamp: 1687757531.277,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 444,
      Y: 651,
      key: "u",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d4b",
  },
  {
    timeStamp: 1687757531.306,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 444,
      Y: 651,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="firstname" class="form-control msforms-required" id="fname" required="">',
    },
    _id: "649922e9a9da3f3a62443d4c",
  },
  {
    timeStamp: 1687757532.186,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 450,
      Y: 749,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d4d",
  },
  {
    timeStamp: 1687757532.402,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 450,
      Y: 749,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d4e",
  },
  {
    timeStamp: 1687757532.588,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 450,
      Y: 749,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d4f",
  },
  {
    timeStamp: 1687757532.637,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d50",
  },
  {
    timeStamp: 1687757532.809,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 450,
      Y: 749,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d51",
  },
  {
    timeStamp: 1687757532.835,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "S",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d52",
  },
  {
    timeStamp: 1687757532.903,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "Shift",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d53",
  },
  {
    timeStamp: 1687757532.942,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "s",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d54",
  },
  {
    timeStamp: 1687757533.032,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d55",
  },
  {
    timeStamp: 1687757533.119,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d56",
  },
  {
    timeStamp: 1687757533.133,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d57",
  },
  {
    timeStamp: 1687757533.172,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "m",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d58",
  },
  {
    timeStamp: 1687757533.293,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d59",
  },
  {
    timeStamp: 1687757533.377,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "b",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d5a",
  },
  {
    timeStamp: 1687757533.391,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d5b",
  },
  {
    timeStamp: 1687757533.472,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d5c",
  },
  {
    timeStamp: 1687757533.483,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "a",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d5d",
  },
  {
    timeStamp: 1687757533.525,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d5e",
  },
  {
    timeStamp: 1687757533.615,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d5f",
  },
  {
    timeStamp: 1687757533.771,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 450,
      Y: 749,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d60",
  },
  {
    timeStamp: 1687757533.781,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "n",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d61",
  },
  {
    timeStamp: 1687757533.864,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 450,
      Y: 749,
      key: "i",
      HTMLElement:
        '<input placeholder="" type="text" name="lastname" class="form-control msforms-required" id="lname" required="">',
    },
    _id: "649922e9a9da3f3a62443d62",
  },
  {
    timeStamp: 1687757534.844,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 730,
      Y: 306,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649922e9a9da3f3a62443d63",
  },
  {
    timeStamp: 1687757535.037,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 730,
      Y: 306,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
      button: 0,
    },
    _id: "649922e9a9da3f3a62443d64",
  },
  {
    timeStamp: 1687757535.079,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 730,
      Y: 306,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649922e9a9da3f3a62443d65",
  },
  {
    timeStamp: 1687757535.207,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 730,
      Y: 306,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649922e9a9da3f3a62443d66",
  },
  {
    timeStamp: 1687757536.081,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 730,
      Y: 306,
      scrollX: 0,
      scrollY: 168,
      HTMLElement:
        '<h4 class="elementor-heading-title elementor-size-default">Re-imagine your buildings with Cisco DNA Spaces​</h4>',
    },
    _id: "649922e9a9da3f3a62443d67",
  },
  {
    timeStamp: 1687757537.823,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 882, Y: 408, scrollX: 0, scrollY: 168, HTMLElement: null },
    _id: "649922e9a9da3f3a62443d68",
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
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto(events[0].data.URL + "?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    localStorage.setItem("session-replay", "Yes");
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
