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
    timeStamp: 1687584670.957,
    name: "PAGE_EVENT",
    type: "NAVIGATE",
    data: {
      URL: "https://spaces.cisco.com/setupguide/#",
      DOMLoadTime: 6.867300000011921,
    },
    _id: "64967fbda9da3f3a6241c9a2",
  },
  {
    timeStamp: 1687584671.901,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 1212,
      Y: 315,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="text-white text-center " style=" clear: both;display: block;position: fixed;top: 0;width: 100%;left: 0;right: 0;font-size: 14px;line-height: 32px;z-index: 1000000;background: #1e4471;">\n\t\t\t\tCisco DNA Spaces is now Cisco Spaces - The platform you know &amp; love has got a new name! <a href="https://spaces.cisco.com/cisco-spaces/" target="_blank" class="text-white cisco-bold" style="padding-left: 16px;">Learn more &gt;&gt;</a>\n\t\t\t</div>',
    },
    _id: "64967fbda9da3f3a6241c9a3",
  },
  {
    timeStamp: 1687584671.991,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 1212,
      Y: 315,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241c9a4",
  },
  {
    timeStamp: 1687584673.303,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 800,
      Y: 395,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="row h-100">\n<div class="col-lg-8 black_bg opacity-7 h-100 pt-50 slide_width">\n<div class="container" style="display: none;">\n<div class="row">\n<div class="col-lg-10 pt-4 text-center index_ciscologo"><img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/cisco-spaces-whte.svg" style="width:47%" class="mt-2 mr-4"></div>\n</div>\n</div>\n</div>\n<div class="col-lg-3 h-100 black_bg2 opacity-7 pt-50 index_linkdiv welcometext cursor_pointer display-5 text-white cisco-extralight text-center signinform_hide"><span class="pt-14 d-block">Setup Guide</span></div>\n<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>\n<p><!--\n\n\n<div class="col-lg-1 h-10 green_bg pt-50 text-center"><a href="#" class="welcome d-block mt-5 pt-2"><img decoding="async" src="utilities/images/right_arrow.png"></a></div>\n\n\n--></p>\n</div>',
    },
    _id: "64967fbda9da3f3a6241c9a5",
  },
  {
    timeStamp: 1687584673.394,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 800,
      Y: 395,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<div class="row h-100">\n<div class="col-lg-8 black_bg opacity-7 h-100 pt-50 slide_width">\n<div class="container" style="display: none;">\n<div class="row">\n<div class="col-lg-10 pt-4 text-center index_ciscologo"><img decoding="async" src="https://ddm2gd3hh6a8o.cloudfront.net/wp-content/uploads/2022/09/cisco-spaces-whte.svg" style="width:47%" class="mt-2 mr-4"></div>\n</div>\n</div>\n</div>\n<div class="col-lg-3 h-100 black_bg2 opacity-7 pt-50 index_linkdiv welcometext cursor_pointer display-5 text-white cisco-extralight text-center signinform_hide"><span class="pt-14 d-block">Setup Guide</span></div>\n<div class="col-lg-1 h-100 blue_bg pt-50 index_linkdiv welcometext cursor_pointer signinform_hide"><a href="#" class="d-block text-light hv_zindex"><span class="display-5 text-light cisco-extralight d-block mt-5 text-center no-gutter"> <i class="home_right_arrow" style="display: none;"><img decoding="async" src="/utilities/setupguide/images/signin_arrow_white.png"></i></span> </a><a href="#" class="welcome d-block blue_bg" id="guide_link_arrow"></a></div>\n<p><!--\n\n\n<div class="col-lg-1 h-10 green_bg pt-50 text-center"><a href="#" class="welcome d-block mt-5 pt-2"><img decoding="async" src="utilities/images/right_arrow.png"></a></div>\n\n\n--></p>\n</div>',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241c9a6",
  },
  {
    timeStamp: 1687584674.121,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 712,
      Y: 395,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9a7",
  },
  {
    timeStamp: 1687584674.214,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 712,
      Y: 395,
      scrollX: 0,
      scrollY: 0,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241c9a8",
  },
  {
    timeStamp: 1687584674.961,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9a9",
  },
  {
    timeStamp: 1687584675.079,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "D",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9aa",
  },
  {
    timeStamp: 1687584675.187,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="D">',
    },
    _id: "64967fbda9da3f3a6241c9ab",
  },
  {
    timeStamp: 1687584675.188,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "d",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="D">',
    },
    _id: "64967fbda9da3f3a6241c9ac",
  },
  {
    timeStamp: 1687584675.266,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "i",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="D">',
    },
    _id: "64967fbda9da3f3a6241c9ad",
  },
  {
    timeStamp: 1687584675.35,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "i",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Di">',
    },
    _id: "64967fbda9da3f3a6241c9ae",
  },
  {
    timeStamp: 1687584675.351,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "d",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Di">',
    },
    _id: "64967fbda9da3f3a6241c9af",
  },
  {
    timeStamp: 1687584675.468,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did">',
    },
    _id: "64967fbda9da3f3a6241c9b0",
  },
  {
    timeStamp: 1687584675.474,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "d",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did ">',
    },
    _id: "64967fbda9da3f3a6241c9b1",
  },
  {
    timeStamp: 1687584675.581,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did ">',
    },
    _id: "64967fbda9da3f3a6241c9b2",
  },
  {
    timeStamp: 1687584675.641,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "i",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did ">',
    },
    _id: "64967fbda9da3f3a6241c9b3",
  },
  {
    timeStamp: 1687584675.684,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "i",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did i">',
    },
    _id: "64967fbda9da3f3a6241c9b4",
  },
  {
    timeStamp: 1687584675.707,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "t",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did i">',
    },
    _id: "64967fbda9da3f3a6241c9b5",
  },
  {
    timeStamp: 1687584675.827,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it">',
    },
    _id: "64967fbda9da3f3a6241c9b6",
  },
  {
    timeStamp: 1687584675.832,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "t",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it ">',
    },
    _id: "64967fbda9da3f3a6241c9b7",
  },
  {
    timeStamp: 1687584675.928,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it ">',
    },
    _id: "64967fbda9da3f3a6241c9b8",
  },
  {
    timeStamp: 1687584675.966,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "w",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it ">',
    },
    _id: "64967fbda9da3f3a6241c9b9",
  },
  {
    timeStamp: 1687584676.038,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "o",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it w">',
    },
    _id: "64967fbda9da3f3a6241c9ba",
  },
  {
    timeStamp: 1687584676.074,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "w",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it wo">',
    },
    _id: "64967fbda9da3f3a6241c9bb",
  },
  {
    timeStamp: 1687584676.099,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "o",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it wo">',
    },
    _id: "64967fbda9da3f3a6241c9bc",
  },
  {
    timeStamp: 1687584676.157,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "r",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it wo">',
    },
    _id: "64967fbda9da3f3a6241c9bd",
  },
  {
    timeStamp: 1687584676.22,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "k",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it wor">',
    },
    _id: "64967fbda9da3f3a6241c9be",
  },
  {
    timeStamp: 1687584676.281,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "r",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work">',
    },
    _id: "64967fbda9da3f3a6241c9bf",
  },
  {
    timeStamp: 1687584676.305,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "k",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work">',
    },
    _id: "64967fbda9da3f3a6241c9c0",
  },
  {
    timeStamp: 1687584676.388,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work">',
    },
    _id: "64967fbda9da3f3a6241c9c1",
  },
  {
    timeStamp: 1687584676.481,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ">',
    },
    _id: "64967fbda9da3f3a6241c9c2",
  },
  {
    timeStamp: 1687584676.482,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ">',
    },
    _id: "64967fbda9da3f3a6241c9c3",
  },
  {
    timeStamp: 1687584676.827,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ">',
    },
    _id: "64967fbda9da3f3a6241c9c4",
  },
  {
    timeStamp: 1687584676.868,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ?">',
    },
    _id: "64967fbda9da3f3a6241c9c5",
  },
  {
    timeStamp: 1687584676.959,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ?">',
    },
    _id: "64967fbda9da3f3a6241c9c6",
  },
  {
    timeStamp: 1687584677.059,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9c7",
  },
  {
    timeStamp: 1687584677.059,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "/",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9c8",
  },
  {
    timeStamp: 1687584677.232,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "Control",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9c9",
  },
  {
    timeStamp: 1687584677.333,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "a",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9ca",
  },
  {
    timeStamp: 1687584677.42,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "Control",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9cb",
  },
  {
    timeStamp: 1687584677.48,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "a",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9cc",
  },
  {
    timeStamp: 1687584677.499,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 712,
      Y: 395,
      key: "Backspace",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Did it work ??">',
    },
    _id: "64967fbda9da3f3a6241c9cd",
  },
  {
    timeStamp: 1687584677.537,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 712,
      Y: 395,
      key: "Backspace",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9ce",
  },
  {
    timeStamp: 1687584678.549,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 746,
      Y: 479,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9cf",
  },
  {
    timeStamp: 1687584678.686,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9d0",
  },
  {
    timeStamp: 1687584678.779,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 746,
      Y: 479,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241c9d1",
  },
  {
    timeStamp: 1687584678.816,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "T",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9d2",
  },
  {
    timeStamp: 1687584678.897,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="T">',
    },
    _id: "64967fbda9da3f3a6241c9d3",
  },
  {
    timeStamp: 1687584678.913,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "t",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="T">',
    },
    _id: "64967fbda9da3f3a6241c9d4",
  },
  {
    timeStamp: 1687584679.015,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "e",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="T">',
    },
    _id: "64967fbda9da3f3a6241c9d5",
  },
  {
    timeStamp: 1687584679.078,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "e",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Te">',
    },
    _id: "64967fbda9da3f3a6241c9d6",
  },
  {
    timeStamp: 1687584679.213,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "s",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Te">',
    },
    _id: "64967fbda9da3f3a6241c9d7",
  },
  {
    timeStamp: 1687584679.298,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "t",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Tes">',
    },
    _id: "64967fbda9da3f3a6241c9d8",
  },
  {
    timeStamp: 1687584679.328,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "s",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Test">',
    },
    _id: "64967fbda9da3f3a6241c9d9",
  },
  {
    timeStamp: 1687584679.399,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "t",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Test">',
    },
    _id: "64967fbda9da3f3a6241c9da",
  },
  {
    timeStamp: 1687584679.433,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "i",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Test">',
    },
    _id: "64967fbda9da3f3a6241c9db",
  },
  {
    timeStamp: 1687584679.518,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "n",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testi">',
    },
    _id: "64967fbda9da3f3a6241c9dc",
  },
  {
    timeStamp: 1687584679.559,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "i",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testin">',
    },
    _id: "64967fbda9da3f3a6241c9dd",
  },
  {
    timeStamp: 1687584679.562,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "g",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testin">',
    },
    _id: "64967fbda9da3f3a6241c9de",
  },
  {
    timeStamp: 1687584679.586,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "n",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing">',
    },
    _id: "64967fbda9da3f3a6241c9df",
  },
  {
    timeStamp: 1687584679.68,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: " ",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing">',
    },
    _id: "64967fbda9da3f3a6241c9e0",
  },
  {
    timeStamp: 1687584679.682,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "g",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ">',
    },
    _id: "64967fbda9da3f3a6241c9e1",
  },
  {
    timeStamp: 1687584679.806,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: " ",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ">',
    },
    _id: "64967fbda9da3f3a6241c9e2",
  },
  {
    timeStamp: 1687584679.856,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ">',
    },
    _id: "64967fbda9da3f3a6241c9e3",
  },
  {
    timeStamp: 1687584680.001,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "?",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ">',
    },
    _id: "64967fbda9da3f3a6241c9e4",
  },
  {
    timeStamp: 1687584680.031,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "?",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ?">',
    },
    _id: "64967fbda9da3f3a6241c9e5",
  },
  {
    timeStamp: 1687584680.125,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "?",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ?">',
    },
    _id: "64967fbda9da3f3a6241c9e6",
  },
  {
    timeStamp: 1687584680.204,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "?",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ??">',
    },
    _id: "64967fbda9da3f3a6241c9e7",
  },
  {
    timeStamp: 1687584680.298,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "Shift",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ??">',
    },
    _id: "64967fbda9da3f3a6241c9e8",
  },
  {
    timeStamp: 1687584680.443,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "Control",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ??">',
    },
    _id: "64967fbda9da3f3a6241c9e9",
  },
  {
    timeStamp: 1687584680.533,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "a",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ??">',
    },
    _id: "64967fbda9da3f3a6241c9ea",
  },
  {
    timeStamp: 1687584680.604,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 746,
      Y: 479,
      key: "Backspace",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="Testing ??">',
    },
    _id: "64967fbda9da3f3a6241c9eb",
  },
  {
    timeStamp: 1687584680.62,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "Control",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9ec",
  },
  {
    timeStamp: 1687584680.684,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "Backspace",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9ed",
  },
  {
    timeStamp: 1687584680.685,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 746,
      Y: 479,
      key: "a",
      HTMLElement:
        '<input id="lastname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="lastname" placeholder="Last name" type="text" class="hs-input" inputmode="text" autocomplete="family-name" value="">',
    },
    _id: "64967fbda9da3f3a6241c9ee",
  },
  {
    timeStamp: 1687584681.764,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 777,
      Y: 550,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "64967fbda9da3f3a6241c9ef",
  },
  {
    timeStamp: 1687584681.986,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 777,
      Y: 550,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241c9f0",
  },
  {
    timeStamp: 1687584682.192,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "64967fbda9da3f3a6241c9f1",
  },
  {
    timeStamp: 1687584682.316,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="m">',
    },
    _id: "64967fbda9da3f3a6241c9f2",
  },
  {
    timeStamp: 1687584682.476,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "y",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="m">',
    },
    _id: "64967fbda9da3f3a6241c9f3",
  },
  {
    timeStamp: 1687584682.562,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "y",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="my">',
    },
    _id: "64967fbda9da3f3a6241c9f4",
  },
  {
    timeStamp: 1687584682.588,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="my">',
    },
    _id: "64967fbda9da3f3a6241c9f5",
  },
  {
    timeStamp: 1687584682.792,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="mys">',
    },
    _id: "64967fbda9da3f3a6241c9f6",
  },
  {
    timeStamp: 1687584683.032,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "Backspace",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="mys">',
    },
    _id: "64967fbda9da3f3a6241c9f7",
  },
  {
    timeStamp: 1687584683.11,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "Backspace",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="my">',
    },
    _id: "64967fbda9da3f3a6241c9f8",
  },
  {
    timeStamp: 1687584683.163,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "e",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="my">',
    },
    _id: "64967fbda9da3f3a6241c9f9",
  },
  {
    timeStamp: 1687584683.216,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "q",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="mye">',
    },
    _id: "64967fbda9da3f3a6241c9fa",
  },
  {
    timeStamp: 1687584683.289,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeq">',
    },
    _id: "64967fbda9da3f3a6241c9fb",
  },
  {
    timeStamp: 1687584683.295,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "e",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqm">',
    },
    _id: "64967fbda9da3f3a6241c9fc",
  },
  {
    timeStamp: 1687584683.325,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "q",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqm">',
    },
    _id: "64967fbda9da3f3a6241c9fd",
  },
  {
    timeStamp: 1687584683.365,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqm">',
    },
    _id: "64967fbda9da3f3a6241c9fe",
  },
  {
    timeStamp: 1687584683.49,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqm">',
    },
    _id: "64967fbda9da3f3a6241c9ff",
  },
  {
    timeStamp: 1687584683.564,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqma">',
    },
    _id: "64967fbda9da3f3a6241ca00",
  },
  {
    timeStamp: 1687584683.623,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmai">',
    },
    _id: "64967fbda9da3f3a6241ca01",
  },
  {
    timeStamp: 1687584683.641,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmai">',
    },
    _id: "64967fbda9da3f3a6241ca02",
  },
  {
    timeStamp: 1687584683.746,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "l",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmai">',
    },
    _id: "64967fbda9da3f3a6241ca03",
  },
  {
    timeStamp: 1687584683.81,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "l",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail">',
    },
    _id: "64967fbda9da3f3a6241ca04",
  },
  {
    timeStamp: 1687584683.934,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail">',
    },
    _id: "64967fbda9da3f3a6241ca05",
  },
  {
    timeStamp: 1687584684.02,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail.">',
    },
    _id: "64967fbda9da3f3a6241ca06",
  },
  {
    timeStamp: 1687584684.359,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "Control",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail.">',
    },
    _id: "64967fbda9da3f3a6241ca07",
  },
  {
    timeStamp: 1687584684.457,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail.">',
    },
    _id: "64967fbda9da3f3a6241ca08",
  },
  {
    timeStamp: 1687584684.535,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "Control",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail.">',
    },
    _id: "64967fbda9da3f3a6241ca09",
  },
  {
    timeStamp: 1687584684.589,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail.">',
    },
    _id: "64967fbda9da3f3a6241ca0a",
  },
  {
    timeStamp: 1687584684.72,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myeqmail.">',
    },
    _id: "64967fbda9da3f3a6241ca0b",
  },
  {
    timeStamp: 1687584684.814,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="m">',
    },
    _id: "64967fbda9da3f3a6241ca0c",
  },
  {
    timeStamp: 1687584684.958,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "y",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="m">',
    },
    _id: "64967fbda9da3f3a6241ca0d",
  },
  {
    timeStamp: 1687584685.021,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "y",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="my">',
    },
    _id: "64967fbda9da3f3a6241ca0e",
  },
  {
    timeStamp: 1687584685.194,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "e",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="my">',
    },
    _id: "64967fbda9da3f3a6241ca0f",
  },
  {
    timeStamp: 1687584685.327,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "e",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="mye">',
    },
    _id: "64967fbda9da3f3a6241ca10",
  },
  {
    timeStamp: 1687584685.631,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="mye">',
    },
    _id: "64967fbda9da3f3a6241ca11",
  },
  {
    timeStamp: 1687584685.702,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myem">',
    },
    _id: "64967fbda9da3f3a6241ca12",
  },
  {
    timeStamp: 1687584685.797,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myem">',
    },
    _id: "64967fbda9da3f3a6241ca13",
  },
  {
    timeStamp: 1687584685.898,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myema">',
    },
    _id: "64967fbda9da3f3a6241ca14",
  },
  {
    timeStamp: 1687584685.904,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemai">',
    },
    _id: "64967fbda9da3f3a6241ca15",
  },
  {
    timeStamp: 1687584685.938,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemai">',
    },
    _id: "64967fbda9da3f3a6241ca16",
  },
  {
    timeStamp: 1687584686.048,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "l",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemai">',
    },
    _id: "64967fbda9da3f3a6241ca17",
  },
  {
    timeStamp: 1687584686.109,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "l",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail">',
    },
    _id: "64967fbda9da3f3a6241ca18",
  },
  {
    timeStamp: 1687584686.214,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail">',
    },
    _id: "64967fbda9da3f3a6241ca19",
  },
  {
    timeStamp: 1687584686.295,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.">',
    },
    _id: "64967fbda9da3f3a6241ca1a",
  },
  {
    timeStamp: 1687584686.298,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.">',
    },
    _id: "64967fbda9da3f3a6241ca1b",
  },
  {
    timeStamp: 1687584686.378,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.c">',
    },
    _id: "64967fbda9da3f3a6241ca1c",
  },
  {
    timeStamp: 1687584686.93,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.c">',
    },
    _id: "64967fbda9da3f3a6241ca1d",
  },
  {
    timeStamp: 1687584687.015,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "i",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.ci">',
    },
    _id: "64967fbda9da3f3a6241ca1e",
  },
  {
    timeStamp: 1687584687.115,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.ci">',
    },
    _id: "64967fbda9da3f3a6241ca1f",
  },
  {
    timeStamp: 1687584687.193,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "s",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cis">',
    },
    _id: "64967fbda9da3f3a6241ca20",
  },
  {
    timeStamp: 1687584687.21,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cis">',
    },
    _id: "64967fbda9da3f3a6241ca21",
  },
  {
    timeStamp: 1687584687.273,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisc">',
    },
    _id: "64967fbda9da3f3a6241ca22",
  },
  {
    timeStamp: 1687584687.301,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco">',
    },
    _id: "64967fbda9da3f3a6241ca23",
  },
  {
    timeStamp: 1687584687.349,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco">',
    },
    _id: "64967fbda9da3f3a6241ca24",
  },
  {
    timeStamp: 1687584687.493,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco">',
    },
    _id: "64967fbda9da3f3a6241ca25",
  },
  {
    timeStamp: 1687584687.595,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: ".",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.">',
    },
    _id: "64967fbda9da3f3a6241ca26",
  },
  {
    timeStamp: 1687584687.7,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.">',
    },
    _id: "64967fbda9da3f3a6241ca27",
  },
  {
    timeStamp: 1687584687.772,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.c">',
    },
    _id: "64967fbda9da3f3a6241ca28",
  },
  {
    timeStamp: 1687584687.808,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "c",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.co">',
    },
    _id: "64967fbda9da3f3a6241ca29",
  },
  {
    timeStamp: 1687584687.848,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.co">',
    },
    _id: "64967fbda9da3f3a6241ca2a",
  },
  {
    timeStamp: 1687584687.88,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "o",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.com">',
    },
    _id: "64967fbda9da3f3a6241ca2b",
  },
  {
    timeStamp: 1687584687.941,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "m",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.com">',
    },
    _id: "64967fbda9da3f3a6241ca2c",
  },
  {
    timeStamp: 1687584688.053,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "Control",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.com">',
    },
    _id: "64967fbda9da3f3a6241ca2d",
  },
  {
    timeStamp: 1687584688.167,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.com">',
    },
    _id: "64967fbda9da3f3a6241ca2e",
  },
  {
    timeStamp: 1687584688.232,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "Control",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.com">',
    },
    _id: "64967fbda9da3f3a6241ca2f",
  },
  {
    timeStamp: 1687584688.299,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 777,
      Y: 550,
      key: "Backspace",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="myemail.cisco.com">',
    },
    _id: "64967fbda9da3f3a6241ca30",
  },
  {
    timeStamp: 1687584688.305,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "a",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "64967fbda9da3f3a6241ca31",
  },
  {
    timeStamp: 1687584688.345,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 777,
      Y: 550,
      key: "Backspace",
      HTMLElement:
        '<input id="email-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="email" required="" placeholder="Business Email *" type="email" class="hs-input" inputmode="email" autocomplete="email" value="">',
    },
    _id: "64967fbda9da3f3a6241ca32",
  },
  {
    timeStamp: 1687584689.152,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 790,
      Y: 629,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "64967fbda9da3f3a6241ca33",
  },
  {
    timeStamp: 1687584689.381,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 790,
      Y: 629,
      scrollX: 0,
      scrollY: 161.3333282470703,
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241ca34",
  },
  {
    timeStamp: 1687584689.952,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "64967fbda9da3f3a6241ca35",
  },
  {
    timeStamp: 1687584690.024,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1">',
    },
    _id: "64967fbda9da3f3a6241ca36",
  },
  {
    timeStamp: 1687584690.109,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12">',
    },
    _id: "64967fbda9da3f3a6241ca37",
  },
  {
    timeStamp: 1687584690.18,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "64967fbda9da3f3a6241ca38",
  },
  {
    timeStamp: 1687584690.201,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "64967fbda9da3f3a6241ca39",
  },
  {
    timeStamp: 1687584690.249,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "64967fbda9da3f3a6241ca3a",
  },
  {
    timeStamp: 1687584690.358,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "4",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123">',
    },
    _id: "64967fbda9da3f3a6241ca3b",
  },
  {
    timeStamp: 1687584690.491,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "4",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234">',
    },
    _id: "64967fbda9da3f3a6241ca3c",
  },
  {
    timeStamp: 1687584690.74,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "6",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234">',
    },
    _id: "64967fbda9da3f3a6241ca3d",
  },
  {
    timeStamp: 1687584690.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "6",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346">',
    },
    _id: "64967fbda9da3f3a6241ca3e",
  },
  {
    timeStamp: 1687584690.917,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "5",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346">',
    },
    _id: "64967fbda9da3f3a6241ca3f",
  },
  {
    timeStamp: 1687584691.026,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "5",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123465">',
    },
    _id: "64967fbda9da3f3a6241ca40",
  },
  {
    timeStamp: 1687584691.046,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "8",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123465">',
    },
    _id: "64967fbda9da3f3a6241ca41",
  },
  {
    timeStamp: 1687584691.148,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "8",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234658">',
    },
    _id: "64967fbda9da3f3a6241ca42",
  },
  {
    timeStamp: 1687584691.191,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234658">',
    },
    _id: "64967fbda9da3f3a6241ca43",
  },
  {
    timeStamp: 1687584691.285,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581">',
    },
    _id: "64967fbda9da3f3a6241ca44",
  },
  {
    timeStamp: 1687584691.318,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "9",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123465812">',
    },
    _id: "64967fbda9da3f3a6241ca45",
  },
  {
    timeStamp: 1687584691.363,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234658129">',
    },
    _id: "64967fbda9da3f3a6241ca46",
  },
  {
    timeStamp: 1687584691.368,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293">',
    },
    _id: "64967fbda9da3f3a6241ca47",
  },
  {
    timeStamp: 1687584691.422,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "9",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293">',
    },
    _id: "64967fbda9da3f3a6241ca48",
  },
  {
    timeStamp: 1687584691.424,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293">',
    },
    _id: "64967fbda9da3f3a6241ca49",
  },
  {
    timeStamp: 1687584691.469,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293">',
    },
    _id: "64967fbda9da3f3a6241ca4a",
  },
  {
    timeStamp: 1687584691.523,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293">',
    },
    _id: "64967fbda9da3f3a6241ca4b",
  },
  {
    timeStamp: 1687584691.57,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="123465812931">',
    },
    _id: "64967fbda9da3f3a6241ca4c",
  },
  {
    timeStamp: 1687584691.615,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="1234658129312">',
    },
    _id: "64967fbda9da3f3a6241ca4d",
  },
  {
    timeStamp: 1687584691.618,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "1",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca4e",
  },
  {
    timeStamp: 1687584691.645,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "2",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca4f",
  },
  {
    timeStamp: 1687584691.684,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "3",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca50",
  },
  {
    timeStamp: 1687584691.912,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "Control",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca51",
  },
  {
    timeStamp: 1687584692.006,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "a",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca52",
  },
  {
    timeStamp: 1687584692.088,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "Control",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca53",
  },
  {
    timeStamp: 1687584692.089,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 790,
      Y: 629,
      key: "Backspace",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="12346581293123">',
    },
    _id: "64967fbda9da3f3a6241ca54",
  },
  {
    timeStamp: 1687584692.129,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "a",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "64967fbda9da3f3a6241ca55",
  },
  {
    timeStamp: 1687584692.147,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 790,
      Y: 629,
      key: "Backspace",
      HTMLElement:
        '<input id="phone-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="phone" placeholder="Phone/Mobile number" type="tel" class="hs-input" inputmode="tel" autocomplete="tel" value="">',
    },
    _id: "64967fbda9da3f3a6241ca56",
  },
  {
    timeStamp: 1687584693.094,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 760,
      Y: 753,
      scrollX: 0,
      scrollY: 188.6666717529297,
      HTMLElement:
        '<div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div>',
    },
    _id: "64967fbda9da3f3a6241ca57",
  },
  {
    timeStamp: 1687584693.319,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 760,
      Y: 753,
      scrollX: 0,
      scrollY: 188.6666717529297,
      HTMLElement:
        '<div class="actions"><input type="submit" class="hs-button primary large" value="Submit"></div>',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241ca58",
  },
  {
    timeStamp: 1687584694.067,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 759,
      Y: 424,
      scrollX: 0,
      scrollY: 74.66666412353516,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241ca59",
  },
  {
    timeStamp: 1687584694.289,
    name: "USER_EVENT",
    type: "CLICK",
    data: {
      X: 759,
      Y: 424,
      scrollX: 0,
      scrollY: 74.66666412353516,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
      button: 0,
    },
    _id: "64967fbda9da3f3a6241ca5a",
  },
  {
    timeStamp: 1687584694.327,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241ca5b",
  },
  {
    timeStamp: 1687584694.414,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "W",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241ca5c",
  },
  {
    timeStamp: 1687584694.529,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="W">',
    },
    _id: "64967fbda9da3f3a6241ca5d",
  },
  {
    timeStamp: 1687584694.53,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "w",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="W">',
    },
    _id: "64967fbda9da3f3a6241ca5e",
  },
  {
    timeStamp: 1687584694.633,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "o",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="W">',
    },
    _id: "64967fbda9da3f3a6241ca5f",
  },
  {
    timeStamp: 1687584694.702,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "o",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Wo">',
    },
    _id: "64967fbda9da3f3a6241ca60",
  },
  {
    timeStamp: 1687584694.756,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "r",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Wo">',
    },
    _id: "64967fbda9da3f3a6241ca61",
  },
  {
    timeStamp: 1687584694.819,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "k",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Wor">',
    },
    _id: "64967fbda9da3f3a6241ca62",
  },
  {
    timeStamp: 1687584694.825,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "r",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Work">',
    },
    _id: "64967fbda9da3f3a6241ca63",
  },
  {
    timeStamp: 1687584694.904,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "k",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Work">',
    },
    _id: "64967fbda9da3f3a6241ca64",
  },
  {
    timeStamp: 1687584695.001,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "e",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Work">',
    },
    _id: "64967fbda9da3f3a6241ca65",
  },
  {
    timeStamp: 1687584695.126,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "d",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worke">',
    },
    _id: "64967fbda9da3f3a6241ca66",
  },
  {
    timeStamp: 1687584695.13,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "e",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked">',
    },
    _id: "64967fbda9da3f3a6241ca67",
  },
  {
    timeStamp: 1687584695.259,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "d",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked">',
    },
    _id: "64967fbda9da3f3a6241ca68",
  },
  {
    timeStamp: 1687584695.327,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked">',
    },
    _id: "64967fbda9da3f3a6241ca69",
  },
  {
    timeStamp: 1687584695.388,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ">',
    },
    _id: "64967fbda9da3f3a6241ca6a",
  },
  {
    timeStamp: 1687584695.428,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: " ",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ">',
    },
    _id: "64967fbda9da3f3a6241ca6b",
  },
  {
    timeStamp: 1687584695.513,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ">',
    },
    _id: "64967fbda9da3f3a6241ca6c",
  },
  {
    timeStamp: 1687584695.567,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ?">',
    },
    _id: "64967fbda9da3f3a6241ca6d",
  },
  {
    timeStamp: 1687584695.637,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ?">',
    },
    _id: "64967fbda9da3f3a6241ca6e",
  },
  {
    timeStamp: 1687584695.715,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "?",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca6f",
  },
  {
    timeStamp: 1687584695.749,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "Shift",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca70",
  },
  {
    timeStamp: 1687584695.971,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "Control",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca71",
  },
  {
    timeStamp: 1687584696.034,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "a",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca72",
  },
  {
    timeStamp: 1687584696.136,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "Control",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca73",
  },
  {
    timeStamp: 1687584696.212,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "a",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca74",
  },
  {
    timeStamp: 1687584696.269,
    name: "USER_EVENT",
    type: "KEYDOWN",
    data: {
      X: 759,
      Y: 424,
      key: "Backspace",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="Worked ??">',
    },
    _id: "64967fbda9da3f3a6241ca75",
  },
  {
    timeStamp: 1687584696.361,
    name: "USER_EVENT",
    type: "KEYUP",
    data: {
      X: 759,
      Y: 424,
      key: "Backspace",
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241ca76",
  },
  {
    timeStamp: 1687584696.844,
    name: "USER_EVENT",
    type: "MOUSEDOWN",
    data: {
      X: 759,
      Y: 424,
      scrollX: 0,
      scrollY: 74.66666412353516,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241ca77",
  },
  {
    timeStamp: 1687584696.899,
    name: "USER_EVENT",
    type: "CONTEXTMENU",
    data: {
      X: 759,
      Y: 424,
      scrollX: 0,
      scrollY: 74.66666412353516,
      HTMLElement:
        '<input id="firstname-dbe69d22-e575-4548-a360-0bd07b9d9fa9" name="firstname" placeholder="First name" type="text" class="hs-input" inputmode="text" autocomplete="given-name" value="">',
    },
    _id: "64967fbda9da3f3a6241ca78",
  },
  {
    timeStamp: 1687584698.956,
    name: "USER_EVENT",
    type: "IDLE",
    data: {
      X: 814,
      Y: 433,
      scrollX: 0,
      scrollY: 74.66666412353516,
      HTMLElement: null,
    },
    _id: "64967fbda9da3f3a6241ca79",
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
    "https://spaces.cisco.com/setupguide/#?session-replay=true",
    ["geolocation"]
  );

  await installMouseHelper(page);

  await page.setViewport({
    width: 1280,
    height: 681,
    hasTouch: true, // Enable touch events if needed
  });

  await page.goto("https://spaces.cisco.com/setupguide/#?session-replay=true", {
    waitUntil: "networkidle0",
  });

  await page.evaluate(() => {
    const pre = document.createElement("pre");
    pre.id = "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo";
    pre.style.fontSize = "0.75rem";
    pre.style.pointerEvents = "none";
    pre.style.position = "fixed";
    pre.style.backgroundColor = "black";
    pre.style.borderRadius = "0.2em";
    pre.style.padding = "0.2em";
    pre.style.color = "white";
    pre.style.zIndex = "999";
    pre.style.top = "0em";
    pre.style.right = "0em";
    pre.style.opacity = "0.5";
    document.body.appendChild(pre);
  });

  const updateTimer = () => {
    let seconds = 0;

    setInterval(() => {
      seconds++;
      page.evaluate((time) => {
        const pre = document.getElementById(
          "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo"
        );
        if (pre === null || pre === undefined) {
          const pre = document.createElement("pre");
          pre.id = "id-abc_user/ygp6sb8o-lh3o-l4l3-1upg-e5vwxx4ca4eo";
          pre.style.fontSize = "0.75rem";
          pre.style.pointerEvents = "none";
          pre.style.position = "fixed";
          pre.style.backgroundColor = "black";
          pre.style.borderRadius = "0.2em";
          pre.style.padding = "0.2em";
          pre.style.color = "white";
          pre.style.zIndex = "999";
          pre.style.top = "0em";
          pre.style.right = "0em";
          pre.style.opacity = "0.5";
          document.body.appendChild(pre);
          pre.textContent =
            "Session : abc_user/test-dna-spaces \n" + "Elapsed : " + time;
        } else {
          pre.textContent =
            "Session : abc_user/test-dna-spaces \n" + "Elapsed : " + time;
        }
      }, seconds);
    }, 1000);
  };

  // Start the timer
  updateTimer();

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
