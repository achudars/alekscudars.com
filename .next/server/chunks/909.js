"use strict";
exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 3909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("static/img")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/layout/BackBtn.js


const BackBtn = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: "demo-back-link",
        onClick: ()=>router.back(),
        href: "#",
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fas fa-arrow-left"
        })
    });
};
/* harmony default export */ const layout_BackBtn = (BackBtn);

;// CONCATENATED MODULE: ./src/layout/DayNightMood.js


const DayNightMood = ()=>{
    const { 0: night , 1: setNight  } = (0,external_react_.useState)(true);
    const changeMood = ()=>{
        document.querySelector("body").classList.toggle("theme-light");
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("label", {
        className: "color_switch",
        onClick: ()=>changeMood(),
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "fas fa-moon"
        })
    });
};
/* harmony default export */ const layout_DayNightMood = (DayNightMood);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(1917);
;// CONCATENATED MODULE: ./src/layout/Header.js




const Header = ({ blog  })=>{
    const { 0: sideBarToggle , 1: setSideBarToggle  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (!blog) {
            (0,utilits/* activeSection */.j1)();
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mob-header",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "navbar-brand",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "logo-text",
                                    children: "Aleksandrs Cudars"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: `toggler-menu ${sideBarToggle ? "open" : ""}`,
                            onClick: ()=>setSideBarToggle(!sideBarToggle),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `header-left ${sideBarToggle ? "menu-open menu-open-desk" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "scroll-bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hl-top",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "hl-logo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "static/img/about-me.jpg",
                                                title: "",
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Aleks"
                                        })
                                    ]
                                })
                            }),
                            blog ? /*#__PURE__*/ jsx_runtime_.jsx(MenuWithBlog, {}) : /*#__PURE__*/ jsx_runtime_.jsx(MenuWithOutBlog, {})
                        ]
                    }),
                     false && /*#__PURE__*/ 0
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);
const MenuWithOutBlog = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "nav nav-menu",
        id: "pp-menu",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                "data-menuanchor": "home",
                className: "active",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "nav-link",
                    href: "#home",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ti-home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "Home"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                "data-menuanchor": "about",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "nav-link",
                    href: "#about",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ti-id-badge"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "About Me"
                        })
                    ]
                })
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
const MenuWithBlog = ()=>{
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>document.querySelector(".blog").classList.add("active"));
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "nav nav-menu",
            id: "pp-menu",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "data-menuanchor": "home",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#home",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "nav-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ti-home"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Home"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "data-menuanchor": "about",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#about",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "nav-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ti-id-badge"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "About Me"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "data-menuanchor": "services",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#services",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "nav-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ti-panel"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Services"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "data-menuanchor": "work",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#work",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "nav-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ti-bookmark-alt"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Portfolio"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "data-menuanchor": "blog",
                    className: "blog active",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#blog",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "nav-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ti-layout-media-overlay-alt-2"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Blogs"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    "data-menuanchor": "contactus",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/#contactus",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "nav-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "ti-map-alt"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Contact Me"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/layout/Layout.js






const Layout = ({ children , blog  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                blog: blog
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "main-left pp-main-section",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_DayNightMood, {}),
            blog && /*#__PURE__*/ jsx_runtime_.jsx(layout_BackBtn, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j1": () => (/* binding */ activeSection),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
const activeSection = ()=>{
    const path = window.location.pathname;
    window.addEventListener("scroll", ()=>{
        const sections = document.querySelectorAll(".pp-section");
        const navLi = document.querySelectorAll(".nav-menu li");
        let current = "";
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li)=>{
            li.classList.remove("active");
            if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
                li.classList.add("active");
            }
        });
    });
};
// Pagination
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
// change pagination and update pagination and content
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};


/***/ })

};
;