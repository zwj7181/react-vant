var P=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var N=(e,a,t)=>a in e?P(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,m=(e,a)=>{for(var t in a||(a={}))x.call(a,t)&&N(e,t,a[t]);if(v)for(var t of v(a))w.call(a,t)&&N(e,t,a[t]);return e},d=(e,a)=>R(e,z(a));var _=(e,a)=>{var t={};for(var i in e)x.call(e,i)&&a.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&v)for(var i of v(e))a.indexOf(i)<0&&w.call(e,i)&&(t[i]=e[i]);return t};import{a as c,j as o,i as j,b as f,F as T,s as E,d as F,c as O,g as H,e as A}from"./locales.787b5507.js";import{u as y,r as u,e as S,c as $,S as I,f as G,g as U,h as K,i as q}from"./vendor.823f0359.js";function J(){const{pathname:e}=y();return u.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),null}const Q=e=>{const a=S(),t="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z",i=()=>{a.length>1?a.goBack():a.replace("/")};return e.title?c("div",{className:"demo-nav",children:[o("div",{className:"demo-nav__title",children:e.title}),o("svg",{className:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:i,children:o("path",{fill:"#969799",fillRule:"evenodd",d:t})})]}):null},C={name:"react-vant",build:{packageManager:"pnpm",srcDir:"src",namedExport:!0,css:{preprocessor:"less"},site:{publicPath:"./"}},site:{defaultLang:"zh-CN",versions:[{label:"v1",link:"https://3lang3.github.io/react-vant/v1"}],htmlMeta:{"docsearch:version":"v3"},locales:{"zh-CN":{title:"react vant",description:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF React \u7EC4\u4EF6\u5E93",logo:"https://gitee.com/lang3/react-vant/raw/main/public/logo.svg",langLabel:"\u4E2D\u6587",links:[{url:"https://github.com/youzan/vant",title:"vant",alt:"vant\u5B98\u7F51"},{url:"https://github.com/mallfoundry/taroify/",title:"taroify",alt:"taro\u7248\u672C"},{title:"GitHub",url:"https://github.com/3lang3/react-vant"}],nav:[{title:"\u5E03\u5C40\u7EC4\u4EF6",items:[{path:"flex",title:"Flex \u5E03\u5C40"},{path:"space",title:"Space \u95F4\u8DDD"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"cell",title:"Cell \u5355\u5143\u683C"},{path:"config-provider",title:"ConfigProvider \u5168\u5C40\u914D\u7F6E"},{path:"typography",title:"Typography \u6587\u672C"},{path:"icon",title:"Icon \u56FE\u6807"},{path:"image",title:"Image \u56FE\u7247"},{path:"popup",title:"Popup \u5F39\u51FA\u5C42"},{path:"styles",title:"Style \u5185\u7F6E\u6837\u5F0F"},{path:"toast",title:"Toast \u8F7B\u63D0\u793A"}]},{title:"\u8868\u5355\u7EC4\u4EF6",items:[{path:"calendar",title:"Calendar \u65E5\u5386"},{path:"cascader",title:"Cascader \u7EA7\u8054\u9009\u62E9"},{path:"checkbox",title:"Checkbox \u590D\u9009\u6846"},{path:"datetime-picker",title:"DatetimePicker \u65F6\u95F4\u9009\u62E9"},{path:"field",title:"Field \u8F93\u5165\u6846"},{path:"form",title:"Form \u8868\u5355"},{path:"number-keyboard",title:"NumberKeyboard \u6570\u5B57\u952E\u76D8"},{path:"password-input",title:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846"},{path:"picker",title:"Picker \u9009\u62E9\u5668"},{path:"radio",title:"Radio \u5355\u9009\u6846"},{path:"rate",title:"Rate \u8BC4\u5206"},{path:"search",title:"Search \u641C\u7D22"},{path:"slider",title:"Slider \u6ED1\u5757"},{path:"stepper",title:"Stepper \u6B65\u8FDB\u5668"},{path:"switch",title:"Switch \u5F00\u5173"},{path:"uploader",title:"Uploader \u6587\u4EF6\u4E0A\u4F20"}]},{title:"\u53CD\u9988\u7EC4\u4EF6",items:[{path:"action-sheet",title:"ActionSheet \u52A8\u4F5C\u9762\u677F"},{path:"dialog",title:"Dialog \u5F39\u51FA\u6846"},{path:"dropdown-menu",title:"DropdownMenu \u4E0B\u62C9\u83DC\u5355"},{path:"loading",title:"Loading \u52A0\u8F7D"},{path:"notify",title:"Notify \u6D88\u606F\u901A\u77E5"},{path:"overlay",title:"Overlay \u906E\u7F69\u5C42"},{path:"pull-refresh",title:"PullRefresh \u4E0B\u62C9\u5237\u65B0"},{path:"share-sheet",title:"ShareSheet \u5206\u4EAB\u9762\u677F"},{path:"swipe-cell",title:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C"}]},{title:"\u5C55\u793A\u7EC4\u4EF6",items:[{path:"badge",title:"Badge \u5FBD\u6807"},{path:"card",title:"Card \u5361\u7247"},{path:"circle",title:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761"},{path:"collapse",title:"Collapse \u6298\u53E0\u9762\u677F"},{path:"count-down",title:"CountDown \u5012\u8BA1\u65F6"},{path:"divider",title:"Divider \u5206\u5272\u7EBF"},{path:"empty",title:"Empty \u7A7A\u72B6\u6001"},{path:"image-preview",title:"ImagePreview \u56FE\u7247\u9884\u89C8"},{path:"lazyload",title:"Lazyload \u61D2\u52A0\u8F7D"},{path:"list",title:"List \u5217\u8868"},{path:"skeleton",title:"Skeleton \u9AA8\u67B6\u5C4F"},{path:"steps",title:"Steps \u6B65\u9AA4\u6761"},{path:"notice-bar",title:"NoticeBar \u901A\u77E5\u680F"},{path:"popover",title:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846"},{path:"progress",title:"Progress \u8FDB\u5EA6\u6761"},{path:"sticky",title:"Sticky \u7C98\u6027\u5E03\u5C40"},{path:"swiper",title:"Swiper \u8F6E\u64AD"},{path:"tag",title:"Tag \u6807\u7B7E"}]},{title:"\u5BFC\u822A\u7EC4\u4EF6",items:[{path:"action-bar",title:"ActionBar \u52A8\u4F5C\u680F"},{path:"grid",title:"Grid \u5BAB\u683C"},{path:"index-bar",title:"IndexBar \u7D22\u5F15\u680F"},{path:"nav-bar",title:"NavBar \u5BFC\u822A\u680F"},{path:"pagination",title:"Pagination \u5206\u9875"},{path:"sidebar",title:"Sidebar \u4FA7\u8FB9\u5BFC\u822A"},{path:"tabs",title:"Tabs \u6807\u7B7E\u9875"},{path:"tabbar",title:"Tabbar \u6807\u7B7E\u680F"}]},{title:"\u4E1A\u52A1\u7EC4\u4EF6",items:[{path:"area",title:"Area \u7701\u5E02\u533A\u9009\u62E9"},{path:"product-card",title:"ProductCard \u5546\u54C1\u5361\u7247"},{path:"coupon-list",title:"Coupon \u4F18\u60E0\u5238"},{path:"submit-bar",title:"SubmitBar \u63D0\u4EA4\u8BA2\u5355\u680F"},{path:"sku",title:"Sku \u5546\u54C1\u89C4\u683C"}]}]},"en-US":{title:"react vant",description:"Mobile UI Components built on React",logo:"https://img01.yzcdn.cn/vant/logo.png",langLabel:"En",links:[{logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",url:"https://github.com/3lang3/react-vant"}],nav:[{title:"Basic Components",items:[{path:"button",title:"Button"}]}]}}}};var V=e=>c("svg",d(m({viewBox:"0 0 1024 1024"},e),{children:[o("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"}),o("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"})]}));const X=e=>{const{lang:a,group:t}=e,i=S(),l=u.exports.useMemo(()=>a?`/${a}`:"",[a]);return c("div",{className:"demo-home-nav",children:[o("div",{className:"demo-home-nav__title",children:t.title}),o("div",{className:"demo-home-nav__group",children:t.items.map(n=>c("div",{className:"demo-home-nav__block",onClick:()=>{i.push(`${l}/${n.path}`),!j&&window!==window.top&&window.top.postMessage({pathname:`${l}/${n.path}`},window.top)},children:[n.title,o(V,{className:"demo-home-nav__icon"})]},n.path))})]})};const B=e=>{const{lang:a}=e.meta,t=u.exports.useMemo(()=>{const{locales:l}=C.site;return l?l[a]:C.site},[a]),i=u.exports.useMemo(()=>t.title.length>=8,[t]);return c("div",{className:"demo-home",children:[c("h1",{className:$("demo-home__title",{"demo-home__title--small":i}),children:[o("img",{src:t.logo,alt:""}),o("span",{children:t.title})]}),t.description&&o("h2",{className:"demo-home__desc",children:t.description}),t.nav.map(l=>o(X,{lang:a,group:l},l.title))]})};const Y=e=>{const{children:a,style:t,className:i}=e,{pathname:l}=y(),n=u.exports.useMemo(()=>{const s=k.find(g=>g.path===l),h=s&&s.meta&&s.meta.name||"";return h?`demo-${f(h)}`:""},[l]);return o("section",{className:$("vant-doc-demo-section",i,n),style:t,children:a})};const Z=e=>{const{title:a,card:t}=e;return c("div",{className:"vant-doc-demo-block",children:[a&&o("h2",{className:"vant-doc-demo-block__title",children:a}),t?o("div",{className:"vant-doc-demo-block__card",children:e.children}):o(T,{children:e.children})]})};var D=({blocks:e=[],children:a,frontmatter:t={}})=>{const{background:i,className:l}=t;return c(Y,{className:l,style:{background:i},children:[typeof a=="function"?a():a,e.map(r=>{var p=r,{Component:n,key:s,title:h}=p,g=_(p,["Component","key","title"]);return o(Z,d(m({title:h},g),{children:o(n,{})}),s)})]})};const{locales:b,defaultLang:W}=O.site;E(W);function tt(e){const a=e.split("/")[1];return Object.keys(b).indexOf(a)!==-1?a:H()}function et(e){if(e.indexOf("_")!==-1){const a=e.split("_"),t=a.shift();return{component:`${f(t)}`,lang:a.join("-")}}return{component:`${f(e)}`,lang:""}}function at(){const e=[],a=A,t=b?Object.keys(b):[];return t.length?t.forEach(i=>{e.push({path:`/${i}`,exact:!0,component:B,meta:{lang:i}})}):e.push({path:"/",exact:!0,component:B,meta:{}}),a.forEach(i=>{const{component:l}=et(i),{MdDemos:n,frontmatter:s={}}=F[i],h=i.split("_")[0],g=Object.keys(s).reduce((r,p)=>{if(p.startsWith("mobile-")){const M=s[p],L=p.replace(/^mobile-/,"");r[L]=M}return r},{});t.length?t.forEach(r=>{e.push({name:`${r}/${l}`,path:`/${r}/${l}`,component:p=>o(D,d(m({},p),{blocks:n,frontmatter:g})),meta:{name:h,lang:r}})}):e.push({name:l,path:`/${l}`,component:r=>o(D,d(m({},r),{blocks:n,frontmatter:s})),meta:{name:h}})}),b?e.push({path:"*",redirect:i=>`/${tt(i)}/`,meta:{}}):e.push({path:"*",redirect:()=>"/",meta:{}}),e}const k=at();const it=()=>{const{pathname:e}=y(),a=u.exports.useMemo(()=>{const t=k.find(i=>i.path===e);return t&&t.meta&&t.meta.name||""},[e]);return c("div",{children:[o(Q,{title:a}),o(J,{}),o(I,{children:k.map(t=>t.redirect?o(G,{to:t.redirect(e)},t.path):o(U,{exact:t.exact,path:t.path,render:i=>o(t.component,d(m({},i),{meta:t.meta,routes:t.routes}))},t.path))})]})};K.render(o(q,{children:o(it,{})}),document.getElementById("root"));
