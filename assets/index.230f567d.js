var S=Object.defineProperty,I=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(r,o,n)=>o in r?S(r,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[o]=n,v=(r,o)=>{for(var n in o||(o={}))B.call(o,n)&&y(r,n,o[n]);if(g)for(var n of g(o))O.call(o,n)&&y(r,n,o[n]);return r},x=(r,o)=>I(r,V(o));import{j as p,c as d,L,r as C,u as m,a as T,b as $,_ as P,d as q,e as E,f as M,H,B as Q,R as b,g as w,Q as U,h as W,i as G,k as Y,l as K}from"./vendor.e131fe03.js";const J=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(i){if(i.ep)return;i.ep=!0;const t=n(i);fetch(i.href,t)}};J();const X="_header_1d27f_1",Z="_inner_1d27f_7",D="_logo_1d27f_15",ee="_navi_1d27f_29",ne="_isActive_1d27f_42",te="_toggle_1d27f_60";var re={header:X,inner:Z,logo:D,navi:ee,isActive:ne,toggle:te};const e=p.exports.jsx,s=p.exports.jsxs,z=p.exports.Fragment;function A(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 220.05 41.04",children:[e("path",{d:"M32.55 40.2V13.77L22.26 33.45h-4.22L7.76 13.77V40.2H0V.28h8.32l11.81 22.71L32.04.28h8.26V40.2h-7.75zM51.89.28l9.84 19.23 10-19.23h8.38L65.6 26.25V40.2h-7.7V26.14L43.45.28h8.44zM91.74 19.96c0-2.44.43-4.84 1.29-7.22.86-2.38 2.11-4.51 3.74-6.38s3.63-3.39 5.99-4.55c2.36-1.16 5.06-1.74 8.1-1.74 3.56 0 6.64.81 9.25 2.42 2.61 1.61 4.53 3.71 5.76 6.3l-5.96 4.1c-.45-1.12-1.03-2.07-1.74-2.84a8.871 8.871 0 0 0-2.33-1.83c-.84-.45-1.71-.78-2.61-.98-.9-.21-1.76-.31-2.59-.31-1.84 0-3.45.39-4.83 1.18s-2.54 1.81-3.46 3.06c-.92 1.26-1.61 2.68-2.08 4.27-.47 1.59-.7 3.18-.7 4.75 0 1.76.27 3.46.82 5.09.54 1.63 1.31 3.06 2.3 4.3.99 1.24 2.18 2.23 3.57 2.98 1.39.75 2.9 1.12 4.55 1.12.86 0 1.74-.11 2.64-.34.9-.22 1.77-.58 2.61-1.07.84-.49 1.62-1.11 2.33-1.88.71-.77 1.29-1.7 1.74-2.78l6.35 3.65c-.6 1.5-1.47 2.82-2.61 3.96a16.832 16.832 0 0 1-3.91 2.9c-1.46.79-3 1.39-4.61 1.8-1.61.41-3.2.62-4.78.62-2.77 0-5.31-.6-7.62-1.8-2.3-1.2-4.29-2.76-5.96-4.69-1.67-1.93-2.96-4.12-3.88-6.58-.91-2.46-1.37-4.96-1.37-7.51z"}),e("path",{d:"M143.11 40.48c-2.81 0-5.38-.57-7.7-1.71a19.228 19.228 0 0 1-5.99-4.55c-1.67-1.89-2.95-4.06-3.85-6.49-.9-2.44-1.35-4.93-1.35-7.48 0-2.66.48-5.21 1.43-7.65a21.02 21.02 0 0 1 3.99-6.47 19.51 19.51 0 0 1 6.04-4.47C138 .56 140.53 0 143.27 0c2.81 0 5.38.59 7.7 1.77 2.32 1.18 4.31 2.73 5.96 4.64 1.65 1.91 2.92 4.09 3.82 6.52.9 2.44 1.35 4.91 1.35 7.42 0 2.66-.48 5.2-1.43 7.62-.96 2.42-2.28 4.55-3.96 6.41a18.996 18.996 0 0 1-6.02 4.44c-2.31 1.1-4.84 1.66-7.58 1.66zm-11.07-20.24c0 1.72.25 3.39.76 5 .51 1.61 1.24 3.04 2.19 4.27.96 1.24 2.13 2.23 3.51 2.98 1.39.75 2.96 1.12 4.72 1.12 1.8 0 3.38-.38 4.75-1.15 1.37-.77 2.52-1.79 3.46-3.06s1.65-2.71 2.14-4.3c.49-1.59.73-3.21.73-4.86 0-1.72-.26-3.39-.79-5-.53-1.61-1.26-3.04-2.22-4.27s-2.12-2.22-3.49-2.95-2.91-1.1-4.64-1.1c-1.8 0-3.38.39-4.75 1.15-1.37.77-2.53 1.78-3.49 3.04-.96 1.26-1.68 2.68-2.16 4.27-.48 1.59-.72 3.21-.72 4.86zM167.38 40.2V.34h7.76V40.2h-7.76zM191.21 14.62V40.2h-7.76V.28h6.01l20.8 26.2V.34h7.76V40.2h-6.3l-20.51-25.58z"})]})}const f=d.bind(re);function F(){return e("header",{className:f("header"),children:e("div",{className:f("inner"),children:s(L,{className:f("logo","hbox"),to:"/",children:[e("h1",{children:"MyCoin"}),e(A,{})]})})})}const oe="_footer_f6qgi_1",se="_inner_f6qgi_7",ie="_logo_f6qgi_16";var ce={footer:oe,inner:se,logo:ie};const _=d.bind(ce);function j(){return e("footer",{className:_("footer"),children:s("div",{className:_("inner"),children:[e("div",{className:_("logo"),children:e(A,{})}),s("p",{className:"c(#999)",children:[e("a",{href:"//nykim.work",target:"_blank",rel:"noopener",className:"hover:text-decoration(underline)",children:"Nana"}),e("i",{className:"font-size(90%)",children:"\xA0with\xA0"}),e("a",{href:"//nomadcoders.co/react-masterclass",target:"_blank",rel:"noopener",className:"hover:text-decoration(underline)",children:"NomadCoders"}),"\xA0",e("i",{children:"\u{1F499}"})]})]})})}function ae(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 6 10",children:e("path",{fill:"#919191",fillRule:"evenodd",d:"M5.575 4.624L1.199.25 1.17.221a.46.46 0 0 0-.626.673L4.6 4.948.545 9.003a.46.46 0 0 0 0 .652l.106-.107h.002l-.106.107a.462.462 0 0 0 .65 0l4.378-4.38a.456.456 0 0 0 0-.65"})})}const le="_article_e8h01_1",he="_box_e8h01_5",de="_title_e8h01_12",me="_list_e8h01_20",ue="_coinName_e8h01_33",fe="_coinPrice_e8h01_39",_e="_rightArrow_e8h01_44";var pe={article:le,box:he,title:de,list:me,coinName:ue,coinPrice:fe,rightArrow:_e};const l=d.bind(pe);function ge({id:r,name:o,price:n,symbol:c}){return e("li",{children:s(L,{to:`/${r}`,state:{id:r,name:o,price:n,symbol:c},className:"hbox justify-content(space-between)",children:[s("div",{className:"hbox",children:[e("img",{src:`https://cryptoicon-api.vercel.app/api/icon/${c.toLowerCase()}`,alt:o}),s("div",{className:"m(0/0/0/1.6rem)",children:[e("p",{className:l("coinName"),children:o}),s("p",{className:l("coinPrice"),children:[n.toFixed(3)," USD"]})]})]}),s("div",{className:l("rightArrow"),children:[e("i",{children:"See more"}),e(ae,{})]})]})})}function N({title:r,list:o=[],loadMore:n=!1}){return e("article",{className:l("article"),children:s("div",{className:l("box"),children:[e("h2",{className:l("title"),children:r}),e("ul",{className:l("list"),children:o.map(c=>e(ge,{id:c.id,name:c.name,symbol:c.symbol,price:c.quotes.USD.price},c.id))})]})})}const ye="_home_1i33g_1",ve="_inner_1i33g_1";var xe={home:ye,inner:ve};const u="https://api.coinpaprika.com/v1";async function be(){return await(await fetch(`${u}/tickers`)).json()}async function we(r){return await(await fetch(`${u}/coins/${r}`)).json()}async function Ne(r){const o=Math.floor(Date.now()/1e3),n=o-60*60*24*7;return await(await fetch(`${u}/coins/${r}/ohlcv/historical?start=${n}&end=${o}`)).json()}async function ke(r){return await(await fetch(`${u}/tickers/${r}`)).json()}const k=d.bind(xe);function Le(){C.exports.useEffect(()=>(document.body.classList.add("hasGrayBg"),()=>{document.body.classList.remove("hasGrayBg")}),[]);const{data:r}=m("allTickers",be,{refetchInterval:1e4});return s("div",{className:k("home"),children:[e(F,{}),s("div",{className:k("inner"),children:[e(N,{title:"Top Coins",list:r==null?void 0:r.slice(0,5)}),e(N,{title:"Coins",list:r==null?void 0:r.slice(5,30)})]}),e(j,{})]})}const Ce="_detail_hr9zy_1",$e="_inner_hr9zy_1",Me="_back_hr9zy_9",ze="_head_hr9zy_20",Ae="_coinTitle_hr9zy_31",Fe="_body_hr9zy_46",je="_desc_hr9zy_70",Re="_seeChart_hr9zy_78";var Se={detail:Ce,inner:$e,back:Me,head:ze,coinTitle:Ae,body:Fe,desc:je,seeChart:Re};function Ie(r){return e("svg",x(v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 20"},r),{children:e("g",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"#444",children:e("path",{d:"m8.9 1.811-7 8 7 8M1.9 9.811h22"})})}))}const Ve="_chart_smeyz_1";var Be={chart:Ve};T.bind(Be);function Oe(){const{coinId:r}=$(),{data:o}=m(["CoinHistory",r],()=>Ne(r));return e(z,{children:e(P,{type:"candlestick",series:[{data:o==null?void 0:o.map(n=>({x:n.time_open,y:[n.open.toFixed(3),n.high.toFixed(3),n.low.toFixed(3),n.close.toFixed(3)]}))}],options:{chart:{toolbar:{show:!1},height:350,type:"candlestick"},xaxis:{type:"category",tickPlacement:"between",labels:{show:!0,rotateAlways:!1,hideOverlappingLabels:!1,showDuplicates:!1,trim:!1,style:{fontFamily:"Open Sans"},formatter:function(n){return q(n).format("MM/DD")}}},yaxis:{tooltip:{enabled:!0},labels:{show:!0,maxWidth:150,style:{colors:[],fontSize:"12px",fontFamily:"Open Sans",fontWeight:400,cssClass:"apexcharts-yaxis-label"}}}}})})}const h=d.bind(Se);function Te(){const r=E(),n=M().state,{coinId:c}=$(),{isLoading:i,data:t}=m(["CoinDetail",c],()=>we(c),{refetchInterval:1e4}),{data:a}=m(["CoinPrice",c],()=>ke(c),{refetchInterval:1e4});return s("div",{className:h("detail"),children:[e(H,{children:e("title",{children:(n==null?void 0:n.name)?n.name:i?"MY COIN":`${t==null?void 0:t.name} :: MY COIN`})}),e(F,{}),s("div",{className:h("inner"),children:[e("a",{href:"/","aria-label":"Go Back",className:h("back"),onClick:R=>{R.preventDefault(),r(-1)},children:e(Ie,{})}),s("div",{className:h("head"),children:[s("div",{children:[e("h2",{children:(n==null?void 0:n.name)||(t==null?void 0:t.name)}),s("p",{children:[(n==null?void 0:n.price.toFixed(3))||(a==null?void 0:a.quotes.USD.price.toFixed(3))," ","USD"]})]}),e("img",{src:`https://cryptoicon-api.vercel.app/api/icon/${(n==null?void 0:n.symbol.toLowerCase())||(t==null?void 0:t.symbol.toLowerCase())}`,alt:n==null?void 0:n.name})]}),s("div",{className:h("body"),children:[s("ul",{children:[s("li",{children:[e("strong",{children:"Rank"}),s("span",{children:["#",t==null?void 0:t.rank]})]}),s("li",{children:[e("strong",{children:"Symbol"}),e("span",{children:(n==null?void 0:n.symbol)||(t==null?void 0:t.symbol)})]}),s("li",{children:[e("strong",{children:"Algorithm"}),e("span",{children:(t==null?void 0:t.hash_algorithm)!=="None"&&(t==null?void 0:t.hash_algorithm)!==null?t==null?void 0:t.hash_algorithm:"-"})]}),s("li",{children:[e("strong",{children:"Website"}),e("span",{children:e("a",{href:t==null?void 0:t.links.website[0],target:"_blank",rel:"noopener",children:t==null?void 0:t.links.website[0]})})]})]}),e("p",{className:h("desc"),children:t==null?void 0:t.description})]}),e(Oe,{})]}),e(j,{})]})}const Pe=({children:r})=>{const o=M();return C.exports.useLayoutEffect(()=>{document.documentElement.scrollTo(0,0)},[o.pathname]),r};function qe(){return s(Q,{children:[e(Pe,{children:e(b,{children:e(w,{path:"/",element:e(Le,{})})})}),e(b,{children:e(w,{path:"/:coinId",element:e(Te,{})})})]})}function Ee(){return e(z,{children:e(qe,{})})}const He=new U;W.render(e(G.StrictMode,{children:s(Y,{client:He,children:[e(Ee,{}),e(K.exports.ReactQueryDevtools,{initialIsOpen:!1})]})}),document.getElementById("root"));
