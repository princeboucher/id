"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // styles

const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 120
};
const headingAccentStyles = {
  color: "#663399"
};
const paragraphStyles = {
  marginBottom: 48,
  lineHeight: 1.5,
  maxWidth: 560
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30
};
const linkStyle = {
  color: "#0f4c81",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%"
};
const docLinkStyle = { ...linkStyle,
  listStyleType: "none",
  marginBottom: 24
};
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25
};
const docLink = {
  text: "Previous Experience",
  url: "https://www.linkedin.com/in/princeboucher",
  color: "#8954A8"
};
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 12,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1
}; // data

const links = [{
  text: "Vana: Head of Marketing",
  url: "https://www.vana.xyz",
  description: "To shift the flow of data for a more prosperous world.",
  color: "#000000"
}, {
  text: "Unit21: Sr Growth Marketing Manager",
  url: "https://www.unit21.ai",
  description: "Unit21 is a fully customizable platform that provides unprecedented control to reduce fraud loss by 50%+ and false positives by 85%+. The platform seamlessly integrates three products that can be used together or individually: Transaction Monitoring, Case Management, and Onboarding Orchestration.",
  color: "#000000"
}, {
  text: "U.S. Digital Response: Volunteer",
  url: "https://www.gatsbyjs.com/docs/reference/",
  description: "Supporting the Critical Needs of the Public. USDR is a nonprofit, nonpartisan organization that helps governments, nonprofits, and public entities respond quickly to critical public needs.",
  color: "#000000"
}, {
  text: "South Park Commons: Community Member & Marketing DRI",
  url: "https://www.southparkcommons.com/",
  description: "SPC is a home for the most talented technologists, builders, and domain-experts figuring out what's next???a community designed to turn the chaos of possibility into the clarity of conviction.",
  color: "#000000"
}, {
  text: "AWS:Intersect: Digital Director",
  url: "https://www.youtube.com/watch?v=KSsnXlaIP0k",
  description: "Intersect is a 2-day celebration of music, art, and tech. With 25+ artists including Foo Fighters, Kacey Musgraves, Beck, and Anderson .Paak. Featuring art installations from Nonotak, Beeple, Kyttenjanae, Ouchhh, and more.",
  color: "#000000"
}]; // markup

const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    style: pageStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Home Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    style: headingStyles
  }, "Prince Boucher", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: headingAccentStyles
  }, "Applied Generalist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    role: "img",
    "aria-label": "Party popper emojis"
  }, "\uD83C\uDF89\uD83C\uDF89\uD83C\uDF89")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: paragraphStyles
  }, "Visit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
    style: codeStyles
  }, "princeboucher.eth"), " to see this page on-chain.", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    role: "img",
    "aria-label": "Sunglasses smiley emoji"
  }, "\uD83D\uDE0E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: paragraphStyles
  }, "Bridging activists, creatives, and technologists at the intersection of civic, media, and technology drive my curiosity. Over the past decade I've worked on some fun projects with 300 Entertainment, Interscope, Funny or Die, and even UnitedHealth. Over the past couple of years I've joined several communities that have been helpful with my development and growth as an artist, organizer, and entrepreneur. Special shout out to the Global Shapers Community, Climate Reality, Fedtech, On Deck, & South Park Commons. Below are a few of the companies I've worked for."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    style: listStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    style: docLinkStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: linkStyle,
    href: `${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`
  }, docLink.text)), links.map(link => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: link.url,
    style: { ...listItemStyles,
      color: link.color
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: linkStyle,
    href: `${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`
  }, link.text), link.badge && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: badgeStyle,
    "aria-label": "New Badge"
  }, "NEW!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: descriptionStyle
  }, link.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    alt: "Gatsby G Logo",
    src: "data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map