(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{xDww:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return r})),n.d(e,"default",(function(){return u}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var a=n("/FXl"),s=n("TjRS"),i=n("ZFoC"),o=n("Spqv"),l=n("EQUp"),c=n("yAS9");n("aD51");function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var r={};void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/documentation/components/List.mdx"}});var b={_frontmatter:r},d=s.a;function u(t){var e,n,u,S=t.components,m=function(t,e){if(null==t)return{};var n,a,s={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,["components"]);return Object(a.b)(d,p({},b,m,{components:S,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"list"},"List"),Object(a.b)("h2",{id:"sdlist-base"},"SDList (Base)"),Object(a.b)("p",null,"This is the base List component. Other List components wrap this one with other default config options."),Object(a.b)("h3",{id:"example"},"Example"),Object(a.b)(i.c,{__position:0,__code:'<div class="docz-sdpi-wrapper">\n  <SDList label="List" options={listOptions} />\n</div>',__scope:(e={props:m,DefaultLayout:s.a,Props:i.d,Playground:i.c,SDList:o.a,SDListSelect:o.c,SDListMultiSelect:o.b,DemoStateContainer:l.a,listOptions:c.a},e.DefaultLayout=s.a,e._frontmatter=r,e),mdxType:"Playground"},Object(a.b)("div",{className:"docz-sdpi-wrapper"},Object(a.b)(o.a,{label:"List",options:c.a,mdxType:"SDList"}))),Object(a.b)("h3",{id:"props"},"Props"),Object(a.b)(i.d,{of:o.a,mdxType:"Props"}),Object(a.b)("h2",{id:"sdlistselect"},"SDListSelect"),Object(a.b)("p",null,"This component is a single selectable list that wraps the base component."),Object(a.b)("h3",{id:"example-1"},"Example"),Object(a.b)(i.c,{__position:2,__code:"<div class=\"docz-sdpi-wrapper\">\n  <DemoStateContainer\n    initialState={{\n      listState: '',\n    }}\n  >\n    {({ setState, state: { listState } }) => (\n      <SDListSelect\n        label=\"List (selectable)\"\n        selectedOptions={listState}\n        options={listOptions}\n        onChange={value => {\n          console.log('I was changed.', value)\n          setState({\n            listState: value,\n          })\n        }}\n      />\n    )}\n  </DemoStateContainer>\n</div>",__scope:(n={props:m,DefaultLayout:s.a,Props:i.d,Playground:i.c,SDList:o.a,SDListSelect:o.c,SDListMultiSelect:o.b,DemoStateContainer:l.a,listOptions:c.a},n.DefaultLayout=s.a,n._frontmatter=r,n),mdxType:"Playground"},Object(a.b)("div",{className:"docz-sdpi-wrapper"},Object(a.b)(l.a,{initialState:{listState:""},mdxType:"DemoStateContainer"},(function(t){var e=t.setState,n=t.state.listState;return Object(a.b)(o.c,{label:"List (selectable)",selectedOptions:n,options:c.a,onChange:function(t){console.log("I was changed.",t),e({listState:t})},mdxType:"SDListSelect"})})))),Object(a.b)("h3",{id:"props-1"},"Props"),Object(a.b)("p",null,"See ",Object(a.b)("a",p({parentName:"p"},{href:"#props"}),"Base Props"),". This wrapper passes ",Object(a.b)("inlineCode",{parentName:"p"},"isSelectable: true")," under the hood."),Object(a.b)("h2",{id:"sdlistmultiselect"},"SDListMultiSelect"),Object(a.b)("p",null,"This component is a single selectable list that wraps the base component."),Object(a.b)("h3",{id:"example-2"},"Example"),Object(a.b)(i.c,{__position:3,__code:"<div class=\"docz-sdpi-wrapper\">\n  <DemoStateContainer\n    initialState={{\n      listState: '',\n    }}\n  >\n    {({ setState, state: { listState } }) => (\n      <SDListMultiSelect\n        label=\"List (multi selectable)\"\n        selectedOptions={listState}\n        options={listOptions}\n        onChange={value => {\n          console.log('I was changed.', value)\n          setState({\n            listState: value,\n          })\n        }}\n      />\n    )}\n  </DemoStateContainer>\n</div>",__scope:(u={props:m,DefaultLayout:s.a,Props:i.d,Playground:i.c,SDList:o.a,SDListSelect:o.c,SDListMultiSelect:o.b,DemoStateContainer:l.a,listOptions:c.a},u.DefaultLayout=s.a,u._frontmatter=r,u),mdxType:"Playground"},Object(a.b)("div",{className:"docz-sdpi-wrapper"},Object(a.b)(l.a,{initialState:{listState:""},mdxType:"DemoStateContainer"},(function(t){var e=t.setState,n=t.state.listState;return Object(a.b)(o.b,{label:"List (multi selectable)",selectedOptions:n,options:c.a,onChange:function(t){console.log("I was changed.",t),e({listState:t})},mdxType:"SDListMultiSelect"})})))),Object(a.b)("h3",{id:"props-2"},"Props"),Object(a.b)("p",null,"See ",Object(a.b)("a",p({parentName:"p"},{href:"#props"}),"Base Props"),". This wrapper passes ",Object(a.b)("inlineCode",{parentName:"p"},"isSelectable: true")," and ",Object(a.b)("inlineCode",{parentName:"p"},"isMultiSelect: true")," under the hood."))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/documentation/components/List.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-documentation-components-list-mdx-acd308075639e5145a83.js.map