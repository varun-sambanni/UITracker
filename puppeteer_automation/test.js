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
    timeStamp: 1687610727.049,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 1.233699999988079 },
    _id: "6496ebbda9da3f3a624200b6",
  },
  {
    timeStamp: 1687610730.256,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: { X: 1279, Y: 40, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "6496ebbda9da3f3a624200b7",
  },
  {
    timeStamp: 1687610731.257,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 1279, Y: 40, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "6496ebbda9da3f3a624200b8",
  },
  {
    timeStamp: 1687610731.88,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: {
      X: 1279,
      Y: 6786,
      scrollX: 0,
      scrollY: 6190.66650390625,
      HTMLElement: null,
    },
    _id: "6496ebbda9da3f3a624200b9",
  },
  {
    timeStamp: 1687610735.152,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 735,
      Y: 6488,
      scrollX: 0,
      scrollY: 6190.66650390625,
      HTMLElement: "<p>no credit card required</p>",
    },
    _id: "6496ebbda9da3f3a624200ba",
  },
  {
    timeStamp: 1687610736.494,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1279,
      Y: 6793,
      scrollX: 0,
      scrollY: 6190.66650390625,
      HTMLElement: null,
    },
    _id: "6496ebbda9da3f3a624200bb",
  },
  {
    timeStamp: 1687610737.408,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 1276, Y: 35, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "6496ebbda9da3f3a624200bc",
  },
  {
    timeStamp: 1687610738.205,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 941,
      Y: 58,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<a href="/setupguide/" class="elementor-item">Setup Guide</a>',
    },
    _id: "6496ebbda9da3f3a624200bd",
  },
  {
    timeStamp: 1687610738.289,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 11.252 },
    _id: "6496ebbda9da3f3a624200be",
  },
  {
    timeStamp: 1687610738.758,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "6496ebbda9da3f3a624200bf",
  },
  {
    timeStamp: 1687610740.78,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/setupguide/",
      DOMLoadTime: 2.4581000000238418,
    },
    _id: "6496ebbda9da3f3a624200c0",
  },
  {
    timeStamp: 1687610742.405,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 1186,
      Y: 321,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span>',
    },
    _id: "6496ebbda9da3f3a624200c1",
  },
  {
    timeStamp: 1687610744.187,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1186,
      Y: 321,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span>',
    },
    _id: "6496ebbda9da3f3a624200c2",
  },
  {
    timeStamp: 1687610744.29,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1186,
      Y: 321,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200c3",
  },
  {
    timeStamp: 1687610745.513,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 727,
      Y: 397,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="row h-100">\n<div class="col-lg-8 black_bg opacity-7 h-100 pt-50 slide_width">\n<div class="container" style="display: none;">\n<div class="row">\n<div class="col-lg-10 pt-4 text-center index_ciscologo"><img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/cisco-spaces-whte.svg" style="width:47%" class="mt-2 mr-4"></div>\n</div>\n</div>\n</div>\n<div class="col-lg-3 h-100 black_bg2 opacity-7 pt-50 index_linkdiv welcometext cursor_pointer display-5 text-white cisco-extralight text-center signinform_hide"><span class="pt-14 d-block">Setup Guide</span></div>\n<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>\n<p><!--\n\n\n<div class="col-lg-1 h-10 green_bg pt-50 text-center"><a href="#" class="welcome d-block mt-5 pt-2"><img decoding="async" src="utilities/images/right_arrow.png"></a></div>\n\n\n--></p>\n</div>',
    },
    _id: "6496ebbda9da3f3a624200c4",
  },
  {
    timeStamp: 1687610745.611,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 727,
      Y: 397,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="row h-100">\n<div class="col-lg-8 black_bg opacity-7 h-100 pt-50 slide_width">\n<div class="container" style="display: none;">\n<div class="row">\n<div class="col-lg-10 pt-4 text-center index_ciscologo"><img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/cisco-spaces-whte.svg" style="width:47%" class="mt-2 mr-4"></div>\n</div>\n</div>\n</div>\n<div class="col-lg-3 h-100 black_bg2 opacity-7 pt-50 index_linkdiv welcometext cursor_pointer display-5 text-white cisco-extralight text-center signinform_hide"><span class="pt-14 d-block">Setup Guide</span></div>\n<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>\n<p><!--\n\n\n<div class="col-lg-1 h-10 green_bg pt-50 text-center"><a href="#" class="welcome d-block mt-5 pt-2"><img decoding="async" src="utilities/images/right_arrow.png"></a></div>\n\n\n--></p>\n</div>',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200c5",
  },
  {
    timeStamp: 1687610746.835,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200c6",
  },
  {
    timeStamp: 1687610746.917,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200c7",
  },
  {
    timeStamp: 1687610747.578,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200c8",
  },
  {
    timeStamp: 1687610747.679,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200c9",
  },
  {
    timeStamp: 1687610747.778,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200ca",
  },
  {
    timeStamp: 1687610747.86,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200cb",
  },
  {
    timeStamp: 1687610748.255,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 710,
      Y: 396,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200cc",
  },
  {
    timeStamp: 1687610748.454,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 710,
      Y: 396,
      key: "V",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200cd",
  },
  {
    timeStamp: 1687610748.61,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 710,
      Y: 396,
      key: "V",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="V">',
    },
    _id: "6496ebbda9da3f3a624200ce",
  },
  {
    timeStamp: 1687610748.631,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 710,
      Y: 396,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="V">',
    },
    _id: "6496ebbda9da3f3a624200cf",
  },
  {
    timeStamp: 1687610749.398,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 710,
      Y: 396,
      key: "a",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="V">',
    },
    _id: "6496ebbda9da3f3a624200d0",
  },
  {
    timeStamp: 1687610749.554,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 710,
      Y: 396,
      key: "a",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Va">',
    },
    _id: "6496ebbda9da3f3a624200d1",
  },
  {
    timeStamp: 1687610750.067,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 710,
      Y: 396,
      key: "r",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Va">',
    },
    _id: "6496ebbda9da3f3a624200d2",
  },
  {
    timeStamp: 1687610750.161,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 710,
      Y: 396,
      key: "r",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Var">',
    },
    _id: "6496ebbda9da3f3a624200d3",
  },
  {
    timeStamp: 1687610750.303,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 710,
      Y: 396,
      key: "u",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Var">',
    },
    _id: "6496ebbda9da3f3a624200d4",
  },
  {
    timeStamp: 1687610750.411,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 710,
      Y: 396,
      key: "u",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Varu">',
    },
    _id: "6496ebbda9da3f3a624200d5",
  },
  {
    timeStamp: 1687610751.006,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 710,
      Y: 396,
      key: "n",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Varu">',
    },
    _id: "6496ebbda9da3f3a624200d6",
  },
  {
    timeStamp: 1687610751.162,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 710,
      Y: 396,
      key: "n",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Varun">',
    },
    _id: "6496ebbda9da3f3a624200d7",
  },
  {
    timeStamp: 1687610752.171,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 710,
      Y: 396,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Varun">',
    },
    _id: "6496ebbda9da3f3a624200d8",
  },
  {
    timeStamp: 1687610753.057,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 713,
      Y: 481,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200d9",
  },
  {
    timeStamp: 1687610753.141,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 713,
      Y: 481,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200da",
  },
  {
    timeStamp: 1687610753.2,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 713,
      Y: 481,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200db",
  },
  {
    timeStamp: 1687610753.299,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 713,
      Y: 481,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a624200dc",
  },
  {
    timeStamp: 1687610753.974,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200dd",
  },
  {
    timeStamp: 1687610754.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200de",
  },
  {
    timeStamp: 1687610754.517,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200df",
  },
  {
    timeStamp: 1687610754.549,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e0",
  },
  {
    timeStamp: 1687610754.586,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e1",
  },
  {
    timeStamp: 1687610754.619,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e2",
  },
  {
    timeStamp: 1687610754.652,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e3",
  },
  {
    timeStamp: 1687610754.683,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e4",
  },
  {
    timeStamp: 1687610754.721,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e5",
  },
  {
    timeStamp: 1687610754.753,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e6",
  },
  {
    timeStamp: 1687610754.786,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e7",
  },
  {
    timeStamp: 1687610754.823,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e8",
  },
  {
    timeStamp: 1687610754.855,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200e9",
  },
  {
    timeStamp: 1687610754.889,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200ea",
  },
  {
    timeStamp: 1687610754.923,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200eb",
  },
  {
    timeStamp: 1687610754.956,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200ec",
  },
  {
    timeStamp: 1687610754.987,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200ed",
  },
  {
    timeStamp: 1687610755.012,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "S",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "6496ebbda9da3f3a624200ee",
  },
  {
    timeStamp: 1687610755.16,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="S">',
    },
    _id: "6496ebbda9da3f3a624200ef",
  },
  {
    timeStamp: 1687610755.176,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "s",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="S">',
    },
    _id: "6496ebbda9da3f3a624200f0",
  },
  {
    timeStamp: 1687610755.307,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "a",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="S">',
    },
    _id: "6496ebbda9da3f3a624200f1",
  },
  {
    timeStamp: 1687610755.409,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "a",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sa">',
    },
    _id: "6496ebbda9da3f3a624200f2",
  },
  {
    timeStamp: 1687610755.424,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "m",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sa">',
    },
    _id: "6496ebbda9da3f3a624200f3",
  },
  {
    timeStamp: 1687610755.534,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "m",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sam">',
    },
    _id: "6496ebbda9da3f3a624200f4",
  },
  {
    timeStamp: 1687610755.722,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "b",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sam">',
    },
    _id: "6496ebbda9da3f3a624200f5",
  },
  {
    timeStamp: 1687610755.816,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "b",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Samb">',
    },
    _id: "6496ebbda9da3f3a624200f6",
  },
  {
    timeStamp: 1687610755.879,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "a",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Samb">',
    },
    _id: "6496ebbda9da3f3a624200f7",
  },
  {
    timeStamp: 1687610755.965,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "n",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Samba">',
    },
    _id: "6496ebbda9da3f3a624200f8",
  },
  {
    timeStamp: 1687610755.97,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "a",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Samban">',
    },
    _id: "6496ebbda9da3f3a624200f9",
  },
  {
    timeStamp: 1687610756.029,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "n",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Samban">',
    },
    _id: "6496ebbda9da3f3a624200fa",
  },
  {
    timeStamp: 1687610756.106,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "n",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Samban">',
    },
    _id: "6496ebbda9da3f3a624200fb",
  },
  {
    timeStamp: 1687610756.199,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "n",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sambann">',
    },
    _id: "6496ebbda9da3f3a624200fc",
  },
  {
    timeStamp: 1687610756.452,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 713,
      Y: 481,
      key: "i",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sambann">',
    },
    _id: "6496ebbda9da3f3a624200fd",
  },
  {
    timeStamp: 1687610756.539,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 713,
      Y: 481,
      key: "i",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sambanni">',
    },
    _id: "6496ebbda9da3f3a624200fe",
  },
  {
    timeStamp: 1687610757.837,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 717,
      Y: 549,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "6496ebbda9da3f3a624200ff",
  },
  {
    timeStamp: 1687610757.964,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 717,
      Y: 549,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a62420100",
  },
  {
    timeStamp: 1687610758.932,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 717,
      Y: 549,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "6496ebbda9da3f3a62420101",
  },
  {
    timeStamp: 1687610759.452,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "v",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "6496ebbda9da3f3a62420102",
  },
  {
    timeStamp: 1687610759.547,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "v",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="v">',
    },
    _id: "6496ebbda9da3f3a62420103",
  },
  {
    timeStamp: 1687610759.631,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="v">',
    },
    _id: "6496ebbda9da3f3a62420104",
  },
  {
    timeStamp: 1687610759.724,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vs">',
    },
    _id: "6496ebbda9da3f3a62420105",
  },
  {
    timeStamp: 1687610759.763,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsa">',
    },
    _id: "6496ebbda9da3f3a62420106",
  },
  {
    timeStamp: 1687610759.857,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsa">',
    },
    _id: "6496ebbda9da3f3a62420107",
  },
  {
    timeStamp: 1687610759.887,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsa">',
    },
    _id: "6496ebbda9da3f3a62420108",
  },
  {
    timeStamp: 1687610759.996,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsam">',
    },
    _id: "6496ebbda9da3f3a62420109",
  },
  {
    timeStamp: 1687610760.143,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "b",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsam">',
    },
    _id: "6496ebbda9da3f3a6242010a",
  },
  {
    timeStamp: 1687610760.25,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "b",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamb">',
    },
    _id: "6496ebbda9da3f3a6242010b",
  },
  {
    timeStamp: 1687610760.25,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamb">',
    },
    _id: "6496ebbda9da3f3a6242010c",
  },
  {
    timeStamp: 1687610760.335,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamba">',
    },
    _id: "6496ebbda9da3f3a6242010d",
  },
  {
    timeStamp: 1687610760.363,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "n",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamba">',
    },
    _id: "6496ebbda9da3f3a6242010e",
  },
  {
    timeStamp: 1687610760.448,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "n",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban">',
    },
    _id: "6496ebbda9da3f3a6242010f",
  },
  {
    timeStamp: 1687610760.571,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "Shift",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban">',
    },
    _id: "6496ebbda9da3f3a62420110",
  },
  {
    timeStamp: 1687610760.731,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "@",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban">',
    },
    _id: "6496ebbda9da3f3a62420111",
  },
  {
    timeStamp: 1687610760.768,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "@",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@">',
    },
    _id: "6496ebbda9da3f3a62420112",
  },
  {
    timeStamp: 1687610760.829,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "Shift",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@">',
    },
    _id: "6496ebbda9da3f3a62420113",
  },
  {
    timeStamp: 1687610761.044,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@">',
    },
    _id: "6496ebbda9da3f3a62420114",
  },
  {
    timeStamp: 1687610761.169,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@c">',
    },
    _id: "6496ebbda9da3f3a62420115",
  },
  {
    timeStamp: 1687610761.172,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@ci">',
    },
    _id: "6496ebbda9da3f3a62420116",
  },
  {
    timeStamp: 1687610761.259,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@ci">',
    },
    _id: "6496ebbda9da3f3a62420117",
  },
  {
    timeStamp: 1687610761.26,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@ci">',
    },
    _id: "6496ebbda9da3f3a62420118",
  },
  {
    timeStamp: 1687610761.314,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cis">',
    },
    _id: "6496ebbda9da3f3a62420119",
  },
  {
    timeStamp: 1687610761.344,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisc">',
    },
    _id: "6496ebbda9da3f3a6242011a",
  },
  {
    timeStamp: 1687610761.431,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisc">',
    },
    _id: "6496ebbda9da3f3a6242011b",
  },
  {
    timeStamp: 1687610761.436,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco">',
    },
    _id: "6496ebbda9da3f3a6242011c",
  },
  {
    timeStamp: 1687610761.495,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco">',
    },
    _id: "6496ebbda9da3f3a6242011d",
  },
  {
    timeStamp: 1687610761.656,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco">',
    },
    _id: "6496ebbda9da3f3a6242011e",
  },
  {
    timeStamp: 1687610761.762,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.">',
    },
    _id: "6496ebbda9da3f3a6242011f",
  },
  {
    timeStamp: 1687610761.764,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.">',
    },
    _id: "6496ebbda9da3f3a62420120",
  },
  {
    timeStamp: 1687610761.873,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.c">',
    },
    _id: "6496ebbda9da3f3a62420121",
  },
  {
    timeStamp: 1687610761.88,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.co">',
    },
    _id: "6496ebbda9da3f3a62420122",
  },
  {
    timeStamp: 1687610761.933,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 717,
      Y: 549,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.co">',
    },
    _id: "6496ebbda9da3f3a62420123",
  },
  {
    timeStamp: 1687610761.957,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.com">',
    },
    _id: "6496ebbda9da3f3a62420124",
  },
  {
    timeStamp: 1687610762.026,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 717,
      Y: 549,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.com">',
    },
    _id: "6496ebbda9da3f3a62420125",
  },
  {
    timeStamp: 1687610762.785,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 717,
      Y: 549,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.com">',
    },
    _id: "6496ebbda9da3f3a62420126",
  },
  {
    timeStamp: 1687610762.862,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 717,
      Y: 549,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.com">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a62420127",
  },
  {
    timeStamp: 1687610764.05,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 761,
      Y: 635,
      scrollX: 0,
      scrollY: 142,
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "6496ebbda9da3f3a62420128",
  },
  {
    timeStamp: 1687610764.126,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 761,
      Y: 635,
      scrollX: 0,
      scrollY: 142,
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
      button: 0,
    },
    _id: "6496ebbda9da3f3a62420129",
  },
  {
    timeStamp: 1687610764.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "6496ebbda9da3f3a6242012a",
  },
  {
    timeStamp: 1687610764.634,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1">',
    },
    _id: "6496ebbda9da3f3a6242012b",
  },
  {
    timeStamp: 1687610764.725,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12">',
    },
    _id: "6496ebbda9da3f3a6242012c",
  },
  {
    timeStamp: 1687610764.781,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "6496ebbda9da3f3a6242012d",
  },
  {
    timeStamp: 1687610764.804,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "6496ebbda9da3f3a6242012e",
  },
  {
    timeStamp: 1687610764.835,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "6496ebbda9da3f3a6242012f",
  },
  {
    timeStamp: 1687610764.924,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "4",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "6496ebbda9da3f3a62420130",
  },
  {
    timeStamp: 1687610765.049,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "4",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234">',
    },
    _id: "6496ebbda9da3f3a62420131",
  },
  {
    timeStamp: 1687610765.144,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "5",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234">',
    },
    _id: "6496ebbda9da3f3a62420132",
  },
  {
    timeStamp: 1687610765.206,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "5",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12345">',
    },
    _id: "6496ebbda9da3f3a62420133",
  },
  {
    timeStamp: 1687610765.311,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "6",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12345">',
    },
    _id: "6496ebbda9da3f3a62420134",
  },
  {
    timeStamp: 1687610765.389,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "6",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456">',
    },
    _id: "6496ebbda9da3f3a62420135",
  },
  {
    timeStamp: 1687610765.511,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "7",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456">',
    },
    _id: "6496ebbda9da3f3a62420136",
  },
  {
    timeStamp: 1687610765.573,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "7",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234567">',
    },
    _id: "6496ebbda9da3f3a62420137",
  },
  {
    timeStamp: 1687610765.715,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "8",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234567">',
    },
    _id: "6496ebbda9da3f3a62420138",
  },
  {
    timeStamp: 1687610765.73,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "8",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12345678">',
    },
    _id: "6496ebbda9da3f3a62420139",
  },
  {
    timeStamp: 1687610766.295,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "9",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12345678">',
    },
    _id: "6496ebbda9da3f3a6242013a",
  },
  {
    timeStamp: 1687610766.414,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "9",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789">',
    },
    _id: "6496ebbda9da3f3a6242013b",
  },
  {
    timeStamp: 1687610767.168,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "Control",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789">',
    },
    _id: "6496ebbda9da3f3a6242013c",
  },
  {
    timeStamp: 1687610767.399,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "a",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789">',
    },
    _id: "6496ebbda9da3f3a6242013d",
  },
  {
    timeStamp: 1687610767.56,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "Control",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789">',
    },
    _id: "6496ebbda9da3f3a6242013e",
  },
  {
    timeStamp: 1687610767.561,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "a",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789">',
    },
    _id: "6496ebbda9da3f3a6242013f",
  },
  {
    timeStamp: 1687610767.689,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "Delete",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789">',
    },
    _id: "6496ebbda9da3f3a62420140",
  },
  {
    timeStamp: 1687610767.744,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 761,
      Y: 635,
      key: "Delete",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "6496ebbda9da3f3a62420141",
  },
  {
    timeStamp: 1687610768.744,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 761,
      Y: 635,
      scrollX: 0,
      scrollY: 142,
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "6496ebbda9da3f3a62420142",
  },
  {
    timeStamp: 1687610768.95,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "Control",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "6496ebbda9da3f3a62420143",
  },
  {
    timeStamp: 1687610769.042,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 761,
      Y: 635,
      key: "z",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "6496ebbda9da3f3a62420144",
  },
  {
    timeStamp: 1687610769.173,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 740,
      Y: 680,
      key: "Control",
      HTMLElement:
        '<form id="hsForm_dbe69d22-e575-4548-a360-0bd07b9d9fa9" method="POST" accept-charset="UTF-8" enctype="multipart/form-data" novalidate="" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/5010372/dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="hs-form-private hsForm_dbe69d22-e575-4548-a360-0bd07b9d9fa9 hs-form-dbe69d22-e575-4548-a360-0bd07b9d9fa9 hs-form-dbe69d22-e575-4548-a360-0bd07b9d9fa9_7f62dd5e-462e-4e51-8a07-c363f4339ff1 hs-form stacked" target="target_iframe_dbe69d22-e575-4548-a360-0bd07b9d9fa9" data-instance-id="7f62dd5e-462e-4e51-8a07-c363f4339ff1" data-form-id="dbe69d22-e575-4548-a360-0bd07b9d9fa9" data-portal-id="5010372" data-gtm-form-interact-id="0"><div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"><label id="label-firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your First name" for="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>First name</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Varun" data-gtm-form-interact-field-id="0"></div></div><div class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"><label id="label-lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Last name" for="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Last name</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sambanni" data-gtm-form-interact-field-id="1"></div></div><div class="hs_email hs-email hs-fieldtype-text field hs-form-field"><label id="label-email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Email" for="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Email</span><span class="hs-form-required">*</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.com" data-gtm-form-interact-field-id="2"></div></div><div class="hs_phone hs-phone hs-fieldtype-phonenumber field hs-form-field"><label id="label-phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Phone number" for="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Phone number</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789"></div></div><div class="hs_accessed_setup_guide hs-accessed_setup_guide hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-accessed_setup_guide-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Accessed Setup Guide" for="accessed_setup_guide-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Accessed Setup Guide</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="accessed_setup_guide" class="hs-input" type="hidden" value="Yes"></div></div><div class="hs_submit hs-submit"><div class="hs-field-desc" style="display: none;"></div><div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div></div><input name="hs_context" type="hidden" value="{&quot;embedAtTimestamp&quot;:&quot;1687610737076&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1686139740605&quot;,&quot;lang&quot;:&quot;en&quot;,&quot;disableCookieSubmission&quot;:&quot;true&quot;,&quot;renderRawHtml&quot;:&quot;true&quot;,&quot;userAgent&quot;:&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&quot;,&quot;pageTitle&quot;:&quot;Setupguide – Cisco Spaces&quot;,&quot;pageUrl&quot;:&quot;https://spaces.cisco.com/setupguide/&quot;,&quot;referrer&quot;:&quot;https://spaces.cisco.com/&quot;,&quot;isHubSpotCmsGeneratedPage&quot;:false,&quot;hutk&quot;:&quot;d3ddbc8c9e4a92a245f89c1b2cbb675a&quot;,&quot;__hsfp&quot;:524412920,&quot;__hssc&quot;:&quot;105720540.8.1687610659036&quot;,&quot;__hstc&quot;:&quot;105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687601952274.1687610659036.3&quot;,&quot;formTarget&quot;:&quot;#hbspt-form-7f62dd5e-462e-4e51-8a07-c363f4339ff1&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;timestamp&quot;:1687610769043,&quot;originalEmbedContext&quot;:{&quot;portalId&quot;:&quot;5010372&quot;,&quot;formId&quot;:&quot;dbe69d22-e575-4548-a360-0bd07b9d9fa9&quot;,&quot;region&quot;:&quot;na1&quot;,&quot;target&quot;:&quot;#hbspt-form-7f62dd5e-462e-4e51-8a07-c363f4339ff1&quot;,&quot;isBuilder&quot;:false,&quot;isTestPage&quot;:false,&quot;isPreview&quot;:false,&quot;isMobileResponsive&quot;:true},&quot;correlationId&quot;:&quot;7f62dd5e-462e-4e51-8a07-c363f4339ff1&quot;,&quot;renderedFieldsIds&quot;:[&quot;firstname&quot;,&quot;lastname&quot;,&quot;email&quot;,&quot;phone&quot;,&quot;accessed_setup_guide&quot;],&quot;captchaStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;emailResubscribeStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;isInsideCrossOriginFrame&quot;:false,&quot;source&quot;:&quot;forms-embed-1.3339&quot;,&quot;sourceName&quot;:&quot;forms-embed&quot;,&quot;sourceVersion&quot;:&quot;1.3339&quot;,&quot;sourceVersionMajor&quot;:&quot;1&quot;,&quot;sourceVersionMinor&quot;:&quot;3339&quot;,&quot;_debug_allPageIds&quot;:{},&quot;_debug_embedLogLines&quot;:[{&quot;clientTimestamp&quot;:1687610740051,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved customer callbacks used on embed context: [\\&quot;onFormSubmit\\&quot;]&quot;},{&quot;clientTimestamp&quot;:1687610740051,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved pageContext values which may be overriden by the embed context: {\\&quot;pageTitle\\&quot;:\\&quot;Setupguide – Cisco Spaces\\&quot;,\\&quot;pageUrl\\&quot;:\\&quot;https://spaces.cisco.com/setupguide/\\&quot;,\\&quot;referrer\\&quot;:\\&quot;https://spaces.cisco.com/\\&quot;,\\&quot;userAgent\\&quot;:\\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\\&quot;,\\&quot;isHubSpotCmsGeneratedPage\\&quot;:false}&quot;},{&quot;clientTimestamp&quot;:1687610740054,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved countryCode property from normalized embed definition response: \\&quot;IN\\&quot;&quot;},{&quot;clientTimestamp&quot;:1687610740770,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved analytics values from API response which may be overriden by the embed context: {\\&quot;hutk\\&quot;:\\&quot;d3ddbc8c9e4a92a245f89c1b2cbb675a\\&quot;}&quot;}]}"><iframe name="target_iframe_dbe69d22-e575-4548-a360-0bd07b9d9fa9" style="display: none;"></iframe></form>',
    },
    _id: "6496ebbda9da3f3a62420145",
  },
  {
    timeStamp: 1687610769.173,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 740,
      Y: 680,
      key: "z",
      HTMLElement:
        '<form id="hsForm_dbe69d22-e575-4548-a360-0bd07b9d9fa9" method="POST" accept-charset="UTF-8" enctype="multipart/form-data" novalidate="" action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/5010372/dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="hs-form-private hsForm_dbe69d22-e575-4548-a360-0bd07b9d9fa9 hs-form-dbe69d22-e575-4548-a360-0bd07b9d9fa9 hs-form-dbe69d22-e575-4548-a360-0bd07b9d9fa9_7f62dd5e-462e-4e51-8a07-c363f4339ff1 hs-form stacked" target="target_iframe_dbe69d22-e575-4548-a360-0bd07b9d9fa9" data-instance-id="7f62dd5e-462e-4e51-8a07-c363f4339ff1" data-form-id="dbe69d22-e575-4548-a360-0bd07b9d9fa9" data-portal-id="5010372" data-gtm-form-interact-id="0"><div class="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field"><label id="label-firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your First name" for="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>First name</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Varun" data-gtm-form-interact-field-id="0"></div></div><div class="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field"><label id="label-lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Last name" for="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Last name</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Sambanni" data-gtm-form-interact-field-id="1"></div></div><div class="hs_email hs-email hs-fieldtype-text field hs-form-field"><label id="label-email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Email" for="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Email</span><span class="hs-form-required">*</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="vsamban@cisco.com" data-gtm-form-interact-field-id="2"></div></div><div class="hs_phone hs-phone hs-fieldtype-phonenumber field hs-form-field"><label id="label-phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Phone number" for="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Phone number</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123456789"></div></div><div class="hs_accessed_setup_guide hs-accessed_setup_guide hs-fieldtype-text field hs-form-field" style="display: none;"><label id="label-accessed_setup_guide-dbe69d22-e575-4548-a360-0bd07b9d9fa9" class="" placeholder="Enter your Accessed Setup Guide" for="accessed_setup_guide-dbe69d22-e575-4548-a360-0bd07b9d9fa9"><span>Accessed Setup Guide</span></label><legend class="hs-field-desc" style="display: none;"></legend><div class="input"><input name="accessed_setup_guide" class="hs-input" type="hidden" value="Yes"></div></div><div class="hs_submit hs-submit"><div class="hs-field-desc" style="display: none;"></div><div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div></div><input name="hs_context" type="hidden" value="{&quot;embedAtTimestamp&quot;:&quot;1687610737076&quot;,&quot;formDefinitionUpdatedAt&quot;:&quot;1686139740605&quot;,&quot;lang&quot;:&quot;en&quot;,&quot;disableCookieSubmission&quot;:&quot;true&quot;,&quot;renderRawHtml&quot;:&quot;true&quot;,&quot;userAgent&quot;:&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36&quot;,&quot;pageTitle&quot;:&quot;Setupguide – Cisco Spaces&quot;,&quot;pageUrl&quot;:&quot;https://spaces.cisco.com/setupguide/&quot;,&quot;referrer&quot;:&quot;https://spaces.cisco.com/&quot;,&quot;isHubSpotCmsGeneratedPage&quot;:false,&quot;hutk&quot;:&quot;d3ddbc8c9e4a92a245f89c1b2cbb675a&quot;,&quot;__hsfp&quot;:524412920,&quot;__hssc&quot;:&quot;105720540.8.1687610659036&quot;,&quot;__hstc&quot;:&quot;105720540.d3ddbc8c9e4a92a245f89c1b2cbb675a.1687584670916.1687601952274.1687610659036.3&quot;,&quot;formTarget&quot;:&quot;#hbspt-form-7f62dd5e-462e-4e51-8a07-c363f4339ff1&quot;,&quot;locale&quot;:&quot;en&quot;,&quot;timestamp&quot;:1687610769043,&quot;originalEmbedContext&quot;:{&quot;portalId&quot;:&quot;5010372&quot;,&quot;formId&quot;:&quot;dbe69d22-e575-4548-a360-0bd07b9d9fa9&quot;,&quot;region&quot;:&quot;na1&quot;,&quot;target&quot;:&quot;#hbspt-form-7f62dd5e-462e-4e51-8a07-c363f4339ff1&quot;,&quot;isBuilder&quot;:false,&quot;isTestPage&quot;:false,&quot;isPreview&quot;:false,&quot;isMobileResponsive&quot;:true},&quot;correlationId&quot;:&quot;7f62dd5e-462e-4e51-8a07-c363f4339ff1&quot;,&quot;renderedFieldsIds&quot;:[&quot;firstname&quot;,&quot;lastname&quot;,&quot;email&quot;,&quot;phone&quot;,&quot;accessed_setup_guide&quot;],&quot;captchaStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;emailResubscribeStatus&quot;:&quot;NOT_APPLICABLE&quot;,&quot;isInsideCrossOriginFrame&quot;:false,&quot;source&quot;:&quot;forms-embed-1.3339&quot;,&quot;sourceName&quot;:&quot;forms-embed&quot;,&quot;sourceVersion&quot;:&quot;1.3339&quot;,&quot;sourceVersionMajor&quot;:&quot;1&quot;,&quot;sourceVersionMinor&quot;:&quot;3339&quot;,&quot;_debug_allPageIds&quot;:{},&quot;_debug_embedLogLines&quot;:[{&quot;clientTimestamp&quot;:1687610740051,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved customer callbacks used on embed context: [\\&quot;onFormSubmit\\&quot;]&quot;},{&quot;clientTimestamp&quot;:1687610740051,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved pageContext values which may be overriden by the embed context: {\\&quot;pageTitle\\&quot;:\\&quot;Setupguide – Cisco Spaces\\&quot;,\\&quot;pageUrl\\&quot;:\\&quot;https://spaces.cisco.com/setupguide/\\&quot;,\\&quot;referrer\\&quot;:\\&quot;https://spaces.cisco.com/\\&quot;,\\&quot;userAgent\\&quot;:\\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\\&quot;,\\&quot;isHubSpotCmsGeneratedPage\\&quot;:false}&quot;},{&quot;clientTimestamp&quot;:1687610740054,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved countryCode property from normalized embed definition response: \\&quot;IN\\&quot;&quot;},{&quot;clientTimestamp&quot;:1687610740770,&quot;level&quot;:&quot;INFO&quot;,&quot;message&quot;:&quot;Retrieved analytics values from API response which may be overriden by the embed context: {\\&quot;hutk\\&quot;:\\&quot;d3ddbc8c9e4a92a245f89c1b2cbb675a\\&quot;}&quot;}]}"><iframe name="target_iframe_dbe69d22-e575-4548-a360-0bd07b9d9fa9" style="display: none;"></iframe></form>',
    },
    _id: "6496ebbda9da3f3a62420146",
  },
  {
    timeStamp: 1687610769.521,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 728,
      Y: 699,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div>',
    },
    _id: "6496ebbda9da3f3a62420147",
  },
  {
    timeStamp: 1687610769.607,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 728,
      Y: 699,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div>',
      button: 0,
    },
    _id: "6496ebbda9da3f3a62420148",
  },
  {
    timeStamp: 1687610770.942,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1279,
      Y: 531,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement: null,
    },
    _id: "6496ebbda9da3f3a62420149",
  },
  {
    timeStamp: 1687610771.279,
    name: "USER_EVENT",
    type: "MOUSEUP",
    data: { X: 1279, Y: 131, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "6496ebbda9da3f3a6242014a",
  },
  {
    timeStamp: 1687610771.71,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 755,
      Y: 133,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="row h-100">\n<div class="col-lg-8 black_bg opacity-7 h-100 pt-50 slide_width">\n<div class="container" style="display: none;">\n<div class="row">\n<div class="col-lg-10 pt-4 text-center index_ciscologo"><img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/cisco-spaces-whte.svg" style="width:47%" class="mt-2 mr-4"></div>\n</div>\n</div>\n</div>\n<div class="col-lg-3 h-100 black_bg2 opacity-7 pt-50 index_linkdiv welcometext cursor_pointer display-5 text-white cisco-extralight text-center signinform_hide"><span class="pt-14 d-block">Setup Guide</span></div>\n<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>\n<p><!--\n\n\n<div class="col-lg-1 h-10 green_bg pt-50 text-center"><a href="#" class="welcome d-block mt-5 pt-2"><img decoding="async" src="utilities/images/right_arrow.png"></a></div>\n\n\n--></p>\n</div>',
    },
    _id: "6496ebbda9da3f3a6242014b",
  },
  {
    timeStamp: 1687610772.72,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 755,
      Y: 133,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="row h-100">\n<div class="col-lg-8 black_bg opacity-7 h-100 pt-50 slide_width">\n<div class="container" style="display: none;">\n<div class="row">\n<div class="col-lg-10 pt-4 text-center index_ciscologo"><img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/cisco-spaces-whte.svg" style="width:47%" class="mt-2 mr-4"></div>\n</div>\n</div>\n</div>\n<div class="col-lg-3 h-100 black_bg2 opacity-7 pt-50 index_linkdiv welcometext cursor_pointer display-5 text-white cisco-extralight text-center signinform_hide"><span class="pt-14 d-block">Setup Guide</span></div>\n<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>\n<p><!--\n\n\n<div class="col-lg-1 h-10 green_bg pt-50 text-center"><a href="#" class="welcome d-block mt-5 pt-2"><img decoding="async" src="utilities/images/right_arrow.png"></a></div>\n\n\n--></p>\n</div>',
    },
    _id: "6496ebbda9da3f3a6242014c",
  },
  {
    timeStamp: 1687610781.481,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 40.702 },
    _id: "6496ebbda9da3f3a6242014d",
  },
  {
    timeStamp: 1687610781.492,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "6496ebbda9da3f3a6242014e",
  },
  {
    timeStamp: 1687611443.069,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 3.762300000011921 },
    _id: "6496ebbda9da3f3a6242014f",
  },
  {
    timeStamp: 1687611445.655,
    name: "PAGE_EVENT",
    type: "PAGE_CLOSE",
    data: { sessionTime: 2.596 },
    _id: "6496ebbda9da3f3a62420150",
  },
  {
    timeStamp: 1687611445.664,
    name: "PAGE_EVENT",
    type: "TAB_HIDDEN",
    _id: "6496ebbda9da3f3a62420151",
  },
  {
    timeStamp: 1687612341.396,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: { URL: "https://spaces.cisco.com/", DOMLoadTime: 1.8784000000357628 },
    _id: "6496ebbda9da3f3a62420152",
  },
  {
    timeStamp: 1687612346.139,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 963,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "6496ebbda9da3f3a62420153",
  },
  {
    timeStamp: 1687612346.277,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 963,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "6496ebbda9da3f3a62420154",
  },
  {
    timeStamp: 1687612347.14,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 963,
      Y: 177,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<h1 class="elementor-heading-title elementor-size-default">Cisco Spaces</h1>',
    },
    _id: "6496ebbda9da3f3a62420155",
  },
  {
    timeStamp: 1687612349.25,
    name: "USER_EVENT",
    type: "IDLE",
    data: { X: 902, Y: 31, scrollX: 0, scrollY: 0, HTMLElement: null },
    _id: "6496ebbda9da3f3a62420156",
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
    "https://spaces.cisco.com/?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("https://spaces.cisco.com/?session-replay=true", {
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
  //             "Session : abc_user/test-dna-spaces \n"  +
  //             "Elapsed : " +
  //             time;
  //         } else {
  //         pre.textContent =
  //             "Session : abc_user/test-dna-spaces \n"  +
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
