(this["webpackJsonpnew-blog2"]=this["webpackJsonpnew-blog2"]||[]).push([[0],{23:function(n,t,e){},25:function(n,t,e){"use strict";e.r(t);var i=e(0),c=e(13),o=e.n(c),r=e(8),s=e(3),l=(e(23),e(4)),d=e(5),a=e(1);const x={imageContainer:{width:"48px",height:"48px",borderRadius:64,backgroundColor:"gray",margin:8,overflow:"hidden"},wrapper:{width:"48px",height:"48px",borderRadius:32,margin:8,paddingTop:8}},h=[{id:500,numb:"stefan-stefancik-QXevDflbl8A-unsplash.jpg"}];var j,p=function(n){return Object(a.jsxs)("div",{style:x.wrapper,children:[Object(a.jsx)("div",{style:x.imageContainer,children:Object(a.jsx)("img",{src:"".concat("","/img/").concat(h[0].numb),width:"48",alt:"imgtest"})}),Object(a.jsx)("div",{children:Object(a.jsx)("span",{style:x.circlename,children:n.circlename})})]})};const b=d.a.button(j||(j=Object(l.a)(["\nwidth: 100%;\nheight: "," px;\npadding: 16px;\nfont - size: 16px;\nline - height: 20px;\nbackground-color:#2F3347;\nborder-radius: 4px;\ncolor: white;\nborder:none;\n&:hover {\n\n    color: #EF4747;\n    font-weight:700;\n    cursor: pointer;\n  }\n"])),(n=>n.height));var g,f,m=function(n){const{title:t,onClick:e}=n;return Object(a.jsx)(b,{onClick:e,children:t||"button"})};const O=d.a.div(g||(g=Object(l.a)(["\nmin-width: 264px;\nheight:100vh;\nbackground-color:white;\nwhite-space:nowrap;\n\n"]))),u=d.a.div(f||(f=Object(l.a)(["\n&:hover {\n\n    color: #EF4747;\n    font-weight:700;\n    cursor: pointer;\n  }\n  font-size:20px;\n\n"]))),w={flex:{display:"flex",justifyContent:"flex-start",gap:"16px",padding:"12px 24px",fontSize:"14px",alignItems:"center",color:"lightgray",paddingLeft:"32px"},title:{padding:"16px"},button:{paddingLeft:"25%",padding:"32px"}};var v,C,y,k=function(n){const t=Object(s.o)();return Object(a.jsxs)(O,{children:[Object(a.jsx)(p,{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{style:w.title,children:"\ub0b4 Blog"}),Object(a.jsxs)("div",{style:w.flex,children:[Object(a.jsx)("img",{width:24,src:"/iconography/ic_round-person.svg",alt:""}),Object(a.jsxs)(u,{children:[" \ud648",Object(a.jsx)("p",{})]})]}),Object(a.jsxs)("div",{style:w.flex,onClick:()=>{t("/")},children:[Object(a.jsx)("img",{width:24,src:"/iconography/icon-park_page.svg",alt:""}),Object(a.jsx)(u,{children:Object(a.jsx)("p",{children:"\uae00 \ubaa9\ub85d\ubcf4\uae30"})})]}),Object(a.jsxs)("div",{style:w.flex,onClick:()=>{t("/write")},children:[Object(a.jsx)("img",{width:24,src:"/iconography/Vector.svg",alt:""}),Object(a.jsx)(u,{children:Object(a.jsx)("p",{children:"\ubc14\ub85c \uae00\uc4f0\uae30"})})]})]}),Object(a.jsx)("div",{style:w.button,children:Object(a.jsx)(m,{title:"\uae00 \uc791\uc131\ud558\uae30",onClick:()=>{t("/write")},children:" "})}),Object(a.jsxs)("p",{style:w.title,children:['"i love ',Object(a.jsx)("strong",{children:" blog,"})," which is ",Object(a.jsx)("br",{})," my ",Object(a.jsx)("strong",{children:'favorite place."'})]})]})};const H=d.a.div(v||(v=Object(l.a)(["\nwidth: 92%;\ntransform-origin:top left;\n// transform: translate(0px,150%);\nmargin-left: 24px;\nmargin:8px;\npadding: 24px;\ndiplay: flex;\nflex-direction: column;\nalign-items: flex-start;\n\nborder: 1px solid #f5f5f5;\nborder-radius: 8px;\ncursor: pointer;\n\n&:hover {\n    background:#FBF6F6;\n    color: #EF4747;\n    transition: 0.3s;\n  }\n \n\n\n"]))),D=d.a.div(C||(C=Object(l.a)(["\n   gap:32px;\n    display:flex;\n"]))),M=d.a.div(y||(y=Object(l.a)(["\nfont-size: 16px;\nwidth: 980px;\n  \n"]))),V={imgsize:{width:"340px",height:"240px",objectFit:"cover"}};var B,F=function(n){const{post:t,onClick:e}=n;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(H,{onClick:e,children:Object(a.jsxs)(D,{children:[Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{children:Object(a.jsx)("img",{style:V.imgsize,src:t.comments[0].i,alt:"testimg"})})}),Object(a.jsxs)(M,{children:["   ",Object(a.jsxs)("h2",{children:[" ",t.title," "]})," ",Object(a.jsx)("p",{children:t.content})]})]})})})};const Z=d.a.div(B||(B=Object(l.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\njustify-content: center;\nwidth:80vw;\nheigth: 100px;\n\noverflow-x: hidden;\noverflow-y: auto;\nmargin-top: 24px;\npadding-top: 44px;\n\n\n& > *{\n    :not(:last-child){\n        margin-bottom: 16px;\n       \n    }\n}\n\n\n"])));var A,E,L,z,G=function(n){const{posts:t,onClickItem:e}=n;return Object(a.jsx)(Z,{children:t.map(((n,t)=>Object(a.jsx)(F,{post:n,onClick:()=>e(n)},n.id)))})},S=e(9);const W=d.a.div(A||(A=Object(l.a)(["\nmin-width:20%;\nmin-height:20%;\nwidth: 100vw;\nheight: 100%;\n\ndisplay: flex;\nflex-direction: row;\nalign-items: flex-start;\njustify-content: space-between;\nbackground-color:#FDFDFE;\n\n"]))),_=d.a.div(E||(E=Object(l.a)(["\nwidth: 100%;\nmax-width:100%;\nmargin-left:8px;\noverflow-x: hidden;\nheight:100vh;\n& > *{\n    :not(:last-chilld){\n        margin-bottom: 16px;\n    }\n}\nbackground-color:white;\nborder-radius: 8px;\n\n"]))),q=d.a.div(L||(L=Object(l.a)(["\nmargin:32px; "]))),I=d.a.div(z||(z=Object(l.a)(["\nwidth:100%;\nheight:1px;\nbackground:#E6EAF0;\nborder-radius:3px;\n"]))),R={flex:{display:"flex",justifyContent:"flex-end",gap:"16px",padding:"12px",paddingRight:"36px"},timecolor:{color:"#999999"}};function Y(){const[n,t]=Object(i.useState)(new Date);return Object(i.useEffect)((()=>{const n=setInterval((()=>{t(new Date)}),1e3);return()=>clearInterval(n)}),[]),Object(a.jsxs)("div",{style:R.timecolor,children:["\ud604\uc7ac \uc2dc\uac04:  ",n.toLocaleTimeString()]})}var J,T=function(n){const t=Object(s.o)();return Object(a.jsxs)(W,{children:[Object(a.jsx)(k,{}),Object(a.jsxs)(_,{children:[Object(a.jsxs)(q,{children:[Object(a.jsx)("h2",{children:"\uc0c8 \uae00"})," ",Object(a.jsx)(Y,{})]}),Object(a.jsx)(I,{}),Object(a.jsx)(G,{posts:S,onClickItem:n=>{t("/post/"+n.id+"database")}})]})]})};const N=d.a.textarea(J||(J=Object(l.a)(["\n// width: calculateNewValue(100 % - 32px);\nwidth:97%;\nheight: ","px;\npadding: 16px;\nmargin: 16px;\nfont - size: 16px;\nline - height: 20px;\nborder-radius: 8px;\n"])),(n=>n.height));var Q,X,K=function(n){const{height:t,value:e,onChange:i}=n;return Object(a.jsx)(N,{height:t||20,value:e,onChange:i})};const P=d.a.div(Q||(Q=Object(l.a)(["\n\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\nflex-direction: row;\nalign-items: flex-start;\njustify-content: space-between;\nbackground-color:#242424;\n"]))),U=d.a.div(X||(X=Object(l.a)(["\npadding:32px;\nwidth: 100%;\nmax-width: 100%;\nheight:90%;\nmargin-left:32px;\ndisplay: flex;\nflex-direction: column;\ncolor:#f5f5f5;\nborder-radius: 8px;\n\n"]))),$={p:{color:"#999999",fontWeight:"200",textAlign:"right",paddingRight:"32px"}};var nn,tn,en=function(n){const[t,e]=Object(i.useState)(""),[c,o]=Object(i.useState)(""),[r]=Object(i.useState)(new Date),l=Object(s.o)();return Object(a.jsxs)(P,{children:[Object(a.jsx)(k,{}),Object(a.jsxs)(U,{children:[Object(a.jsx)("h4",{title:"\ub4a4\ub85c \uac00\uae30",onClick:()=>{l("/")},children:"\ub4a4\ub85c\uac00\uae30"}),Object(a.jsx)("h1",{children:"\uae00 \uc791\uc131\ud558\uae30"}),Object(a.jsxs)("h2",{style:$.p,children:[" \uc5c5\ub85c\ub4dc \ub0a0\uc9dc:  ",r.toLocaleDateString()]}),Object(a.jsx)("h4",{children:"Title"}),Object(a.jsx)(K,{height:20,value:t,onChange:n=>e(n.target.value)}),Object(a.jsx)("h4",{children:"Content"}),Object(a.jsx)(K,{height:480,value:c,onChange:n=>o(n.target.value)}),Object(a.jsx)(m,{title:"\uae00 \uc791\uc131\ud558\uae30",onClick:()=>{l("/")}})]})]})};const cn=d.a.div(nn||(nn=Object(l.a)(["\nwidth: calc(100% -64px);\npadding: 4px 16px;\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\nborder: 1px solid #DEE5EB;\nborder-radius: 8px;\ncursor: pointer;\nbackground: white;\n&:hover{\n    background: lightgrey;\n}\n"]))),on={radius:{width:"36px",height:"36px",objectFit:"cover",borderRadius:"48px"}},rn=[{id:0,numb:"stefan-stefancik-QXevDflbl8A-unsplash.jpg"}],sn=d.a.p(tn||(tn=Object(l.a)(["\nmin-width:800px;\nwidth:72vw;\nfont-size: 14px;\nwhite-space: pre-wrap;\ndisplay:flex;\nalign-items:center;\ngap:16px;\n"])));var ln,dn=function(n){const{comment:t}=n;return Object(a.jsx)(cn,{children:Object(a.jsxs)(sn,{children:[Object(a.jsx)("img",{style:on.radius,width:40,src:"/img/"+rn[0].numb,alt:""}),t.content," "]})})};const an=d.a.div(ln||(ln=Object(l.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\njustify-content: center;\nmargin-left:16px;\n& > *{\n    :not(:last-child){\n        margin-borrom: 16px;\n    }\n}\n"])));var xn=function(n){const{comments:t}=n;return Object(a.jsx)(an,{children:t.map(((n,t)=>Object(a.jsx)(dn,{comment:n,children:" "},n.id)))})};const hn={mainlogo:{fontSize:"32px"},topbar:{margin:24,display:"flex",justifyContent:"space-between",alignItems:"center"},space:{margin:"32px"}};var jn,pn,bn,gn,fn,mn,On,un,wn=function(){return Object(a.jsxs)("div",{style:hn.topbar,children:[Object(a.jsx)("h1",{style:hn.mainlogo,children:"Write, Create, Describe"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("svg",{style:hn.space,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M12 21C10.346 21 9 19.654 9 18L9.053 14.947L6.018 15C4.346 15 3 13.654 3 12C3 10.346 4.346 9 6 9L9.053 8.946L9 6.018C9 4.346 10.346 3 12 3C13.654 3 15 4.346 15 6L15.055 8.946L18.018 9C19.654 9 21 10.346 21 12C21 13.654 19.654 15 18 15L15.055 14.947L15 18.018C15 19.654 13.654 21 12 21ZM11 13V18.018C11 18.551 11.449 19 12 19C12.551 19 13 18.551 13 18V13H18.018C18.551 13 19 12.551 19 12C19 11.449 18.551 11 18 11H13V6C13 5.431 12.551 5 12 5C11.449 5 11 5.449 11 6V11H6C5.431 11 5 11.449 5 12C5 12.551 5.449 13 6 13H11Z",fill:"black"})}),Object(a.jsx)("svg",{style:hn.space,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M19.071 13.142L13.414 18.8C13.0389 19.1749 12.5303 19.3856 12 19.3856C11.4697 19.3856 10.961 19.1749 10.586 18.8L4.92899 13.143C4.46136 12.6794 4.08989 12.1281 3.83592 11.5206C3.58194 10.9131 3.45046 10.2614 3.44902 9.60296C3.44758 8.94451 3.5762 8.29226 3.82752 7.68365C4.07883 7.07505 4.44788 6.52207 4.91347 6.05648C5.37907 5.59088 5.93204 5.22183 6.54065 4.97052C7.14925 4.71921 7.8015 4.59058 8.45995 4.59202C9.1184 4.59346 9.77009 4.72495 10.3776 4.97892C10.9851 5.2329 11.5364 5.60436 12 6.07199C12.9416 5.15387 14.2069 4.64366 15.522 4.6519C16.8371 4.66014 18.096 5.18616 19.026 6.11602C19.956 7.04587 20.4822 8.30469 20.4906 9.61977C20.499 10.9348 19.989 12.2003 19.071 13.142Z",stroke:"black","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"})}),Object(a.jsx)("svg",{style:hn.space,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(a.jsx)("path",{d:"M2 8.99401C1.99947 8.20621 2.15435 7.42605 2.45577 6.69819C2.75718 5.97034 3.19921 5.30909 3.75655 4.75231C4.31388 4.19553 4.97558 3.75416 5.70373 3.45348C6.43189 3.15279 7.21221 2.99869 8 3.00001H16C19.313 3.00001 22 5.69501 22 8.99401V21H8C4.687 21 2 18.305 2 15.006V8.99401ZM20 19V8.99401C19.9974 7.93451 19.5749 6.91925 18.8251 6.17063C18.0754 5.42201 17.0595 5.00106 16 5.00001H8C7.47485 4.99869 6.9546 5.10106 6.4691 5.30123C5.98359 5.50141 5.54238 5.79546 5.17076 6.16652C4.79914 6.53758 4.50443 6.97835 4.30353 7.46356C4.10262 7.94876 3.99947 8.46886 4 8.99401V15.006C4.00265 16.0655 4.42511 17.0808 5.17486 17.8294C5.9246 18.578 6.9405 18.999 8 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z",fill:"black"})})]})]})};const vn=d.a.div(jn||(jn=Object(l.a)(["\n\nwidth: 100vw;\nmin-height:600px;\nheight: 100vh;\ndisplay: flex;\nflex-direction: row;\nalign-items: flex-start;\njustify-content: space-between;\nbackground-color:#242424;\n"]))),Cn=d.a.div(pn||(pn=Object(l.a)(["\n\nwidth: 100%;\nmax-width:100%;\nmin-height:600px;\nheight:100vh;\noverflow-x:hidden;\nmargin-left:32px;\nmargin-right:32px;\n& > *{\n    :not(:last-child){\n        margin-bottom:16px;\n    }\n}\n"]))),yn=d.a.div(bn||(bn=Object(l.a)(["\nbackground-color: #ffffff;\noverflow-x:hidden;\npadding: 16px;\nmargin:32px;\nborder: 1px #DEE5EB;\nborder-radius:8px;\nmin-height:980px;\nheight:90vh;\n"]))),kn=d.a.p(gn||(gn=Object(l.a)(["\nfont-size: 28px;\nfont-weight: 500;\n"]))),Hn=d.a.p(fn||(fn=Object(l.a)(["\ndisplay:flex;\nwidth:100%;\nflex-direction:column;\njustify-content:center;\nheight:420px;\noverflow:scroll;\nfont-size: 20px;\nline-height:32px;\nwhite-space: pre-wrap;\n"]))),Dn=d.a.p(mn||(mn=Object(l.a)(["\nfont-size:16px;\nfont-weight: 500;\npadding: 16px;\n"]))),Mn=d.a.div(On||(On=Object(l.a)(["\nwidth:100%;\nheight:1px;\nbackground:#242424;\nborder-radius:3px;\n"]))),Vn=d.a.div(un||(un=Object(l.a)(["\nbackground:#F4F4F6;\nborder-radius:8px;\nmargin-top:16px;\nheight:260px;\noverflow:scroll;\n"])));var Bn=function(n){const t=Object(s.o)(),e=Object(s.q)().id,c=S.find((n=>n.id=e)),[o,r]=Object(i.useState)("\ucd5c\uc18c 20\uc790 \uc774\uc0c1 \uc791\uc131\ud574\uc8fc\uc138\uc694. \ube44\ubc29\uacfc \ubd80\uc801\uc808\ud55c \uc695\uc124\uc740 \uc0bc\uac00\ud574\uc8fc\uc138\uc694");return Object(a.jsxs)(vn,{children:[Object(a.jsx)(k,{children:" "}),Object(a.jsx)(Cn,{children:Object(a.jsxs)(yn,{children:[Object(a.jsx)("h4",{title:"\ub4a4\ub85c \uac00\uae30",onClick:()=>{t("/")},children:"\ub4a4\ub85c\uac00\uae30"}),Object(a.jsx)(kn,{children:c.title}),Object(a.jsx)(wn,{}),Object(a.jsx)(Mn,{}),Object(a.jsxs)(Hn,{children:[" ",Object(a.jsx)("img",{src:c.comments[0].i,alt:"testimg"})," ",Object(a.jsx)("div",{children:c.content})]}),Object(a.jsx)(Mn,{}),Object(a.jsxs)(Vn,{children:[Object(a.jsx)(Dn,{children:"\ub313\uae00"}),Object(a.jsx)(xn,{comments:c.comments}),Object(a.jsx)(K,{height:60,value:o,onChange:n=>r(n.target.value)}),Object(a.jsx)(m,{title:"\ub313\uae00 \uc791\uc131\ud558\uae30",onClick:()=>{alert("\ub313\uae00 \uc791\uc131\ud558\uae30!")}})]})]})})]})};o.a.createRoot(document.getElementById("root")).render(Object(a.jsx)(r.a,{children:Object(a.jsxs)(s.c,{children:[Object(a.jsx)(s.a,{index:!0,element:Object(a.jsx)(T,{})}),Object(a.jsx)(s.a,{path:"write",element:Object(a.jsx)(en,{})}),Object(a.jsx)(s.a,{path:"post/:id",element:Object(a.jsx)(Bn,{})})]})}))},9:function(n){n.exports=JSON.parse('[{"id":1,"date":"2023/02/22","url":"205634_328441_583.jpg","title":"\uc548\ub155\ud558\uc138\uc694, \uc77c\uc0c1\uc744 \uae30\ub85d\ud558\ub294 \ub77c\uc774\ud504\ub85c\uadf8 \ube14\ub85c\uadf8\uc785\ub2c8\ub2e4.","content":"9\uc6d4\uc5d0\ub294 \ucd94\uc11d\uc774 \uc788\ub2e4. \ucd94\uc11d\uc5d0\ub294 \ud2b9\ubcc4\ud55c\uac8c \uc5c6\uc73c\ub2c8 \ucd94\uc11d\uacfc \uad00\ub828\ub41c \uac83\uc740 \ud328\uc4f0.","comments":[{"id":11,"content":"\uc2e4\uc81c\ub85c \uac1c\ubc1c\ud558\ub2e4\ubcf4\uba74 map\ud568\uc218\ub97c \uc9c4\uc9dc \ub9ce\uc774 \uc4f0\ub294 \uac83 \uac19\uc544\uc694\ud83d\ude04","i":"https://plus.unsplash.com/premium_photo-1678116565548-2e1b7734588b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},{"id":12,"content":"\uc801\uc6a9\ud574\ubcf4\ub2c8 \ucf54\ub4dc\uac00 \uc815\ub9d0 \uac04\uacb0\ud574\uc9c0\ub124\uc694\u314e\u314e"},{"id":13,"content":"key\ub97c \uaf2d \ub123\uc5b4\uc918\uc57c \ud558\ub294\uad70\uc694~"},{"id":14,"content":"\uc0dd\uc0b0\uc131\uc774 \ud655 \uc62c\ub77c\uac00\ub294 \ub290\ub08c\uc785\ub2c8\ub2e4\u314b\u314b"},{"id":15,"content":"\uc624\ub298\ub3c4 \uc88b\uc740 \uae00 \uac10\uc0ac\ud569\ub2c8\ub2e4!\ud83d\udc4d"}]},{"id":2,"title":"\ub9ac\uc561\ud2b8\uc758 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc774\ub780?","content":"\uc548\ub155\ud558\uc138\uc694, \uc18c\ud50c\uc785\ub2c8\ub2e4.\\n\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \ub9ac\uc561\ud2b8\uc758 \uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc5d0 \ub300\ud574\uc11c \ubc30\uc6cc\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\n\uc870\uac74\ubd80 \ub80c\ub354\ub9c1\uc740 \ub9d0 \uadf8\ub300\ub85c \uc870\uac74\uc5d0 \ub530\ub77c\uc11c \ub80c\ub354\ub9c1\uc744 \ub2e4\ub974\uac8c \ud55c\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4.","url":"205634_328441_583.jpg","comments":[{"id":21,"content":"\uc774\ub807\uac8c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc5c8\uad70\uc694!","i":"https://plus.unsplash.com/premium_photo-1681345515350-89e8c3891b50?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"},{"id":22,"content":"\uc88b\uc740 \uae00 \uac10\uc0ac\ud569\ub2c8\ub2e4\u314e\u314e"},{"id":23,"content":"\ud56d\uc0c1 ?\ub9cc \uc0ac\uc6a9\ud588\uc5c8\ub294\ub370, \uc774\uc81c &&\ub3c4 \uc0ac\uc6a9\ud574\ubd10\uc57c \uaca0\ub124\uc694."},{"id":24,"content":"\uc26c\uc6b4 \uc124\uba85 \uac10\uc0ac\ub4dc\ub9bd\ub2c8\ub2e4\ud83d\ude01"},{"id":25,"content":"\ubc14\ub85c \ucf54\ub4dc\uc5d0 \uc801\uc6a9\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4!!"}]},{"id":3,"title":"\ub9ac\uc561\ud2b8 Hook\uc5d0 \ub300\ud574\uc11c \ubc30\uc6cc\ubcfc\uae4c\uc694?","content":"\uc548\ub155\ud558\uc138\uc694, \uc18c\ud50c\uc785\ub2c8\ub2e4.\\n\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \ub9ac\uc561\ud2b8\uc758 Hook\uc5d0 \ub300\ud574\uc11c \ubc30\uc6cc\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.\\nHook\uc740 \ub9ac\uc561\ud2b8\uc758 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ud750\ub984\uc5d0 \ub07c\uc5b4\ub4e4\uc5b4\uc11c \ub2e4\uc591\ud55c \uc791\uc5c5\ub4e4\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.","url":"ic_round-person.svg","comments":[{"id":31,"content":"\ubb54\uac00 \uc5b4\ub824\uc6b4 \uac1c\ub150\uc774\uc5c8\ub294\ub370, \uae00\uc744 \uc77d\uace0 \uc870\uae08 \uc815\ub9ac\uac00 \ub41c \uac83 \uac19\uc2b5\ub2c8\ub2e4.","i":"https://images.unsplash.com/photo-1712074228527-3d5682dc192a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"id":32,"content":"Hook\uc774 \ubb54\uac00 \ud588\ub354\ub2c8 \uc774\ub7f0\uac70\uc600\uad70\uc694. \uc54c\ub824\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4\u314e\u314e"},{"id":33,"content":"\ucc98\uc74c\uc5d0 \ud6c5\uc744 \uc811\ud588\uc744 \ub54c \ub108\ubb34 \uc5b4\ub824\uc6e0\ub294\ub370 \uac10\uc0ac\ud569\ub2c8\ub2e4!\ud83d\udc4d"},{"id":34,"content":"\uc55e\uc73c\ub85c\ub294 \uc798 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc744\uac83 \uac19\uc544\uc694"},{"id":35,"content":"\uc774\ub984\ubd80\ud130 \ub108\ubb34 \uc5b4\ub824\uc6b4 \ud6c5...\ud83e\udd72"}]},{"id":4,"title":"\ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \uac1c\ub150 \uc18c\uac1c","content":"\uc774\ubc88 \uae00\uc5d0\uc11c\ub294 \ub9ac\uc561\ud2b8\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud574\uc11c \uc124\uba85\uc744 \ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4.\\n\ub9ac\uc561\ud2b8\uac00 \ucef4\ud3ec\ub10c\ud2b8 \uae30\ubc18\uc774\ub77c\ub294 \uac83\uc740 \ub9ac\uc561\ud2b8\ub97c \uc870\uae08\ub9cc \uacf5\ubd80\ud574\ubcf4\uc2e0 \ubd84\ub4e4\ub3c4 \ub2e4 \uc54c\uace0 \uacc4\uc2e4\uac81\ub2c8\ub2e4.\\n\uadf8\ub807\ub2e4\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub3c4\ub300\uccb4 \ubb58\uae4c\uc694?","comments":[{"id":41,"content":"\ud5f7\uac08\ub838\ub358 \uac1c\ub150\uc744 \ud655\uc2e4\ud788 \uc774\ud574\ud560 \uc218 \uc788\uc5b4\uc11c \uc88b\ub124\uc694\u314b\u314b","i":"https://images.unsplash.com/photo-1714192711503-a64f88858b62?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"id":42,"content":"\ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub300\ud55c \uc26c\uc6b4 \uc124\uba85 \uac10\uc0ac\ub4dc\ub824\uc694\ud83d\udc4f"},{"id":43,"content":"\ucef4\ud3ec\ub10c\ud2b8\ub97c \uc81c\ub300\ub85c \uc774\ud574\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\ub85c \uc0ac\uc6a9\ud558\uae30\ub9cc \ud588\ub294\ub370 \ud655\uc2e4\ud788 \uac1c\ub150\uc744 \uc7a1\uc744 \uc218 \uc788\uc5b4\uc11c \uc88b\uc2b5\ub2c8\ub2e4!\ud83d\udc4d"},{"id":44,"content":"\ub9ac\uc561\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8 \uae30\ubc18\uc774\ub77c\uc11c \uc7ac\uc0ac\uc6a9\uc131\ub3c4 \ub192\uace0 \uc815\ub9d0 \uc88b\uc740\uac83 \uac19\uc544\uc694"},{"id":45,"content":"\ub9ac\uc561\ud2b8 \ucd5c\uace0!!\ud83d\udc4d"}]},{"id":5,"title":"\ucc98\uc74c \ub9cc\ub09c \ub9ac\uc561\ud2b8 \uac15\uc758 \uc18c\uac1c","content":"\uc548\ub155\ud558\uc138\uc694, \uc18c\ud50c\uc785\ub2c8\ub2e4.\\n\uc624\ub298\uc740 \uc81c\uac00 \ub9cc\ub4e0 \ub9ac\uc561\ud2b8 \uac15\uc758\ub97c \uc18c\uac1c\ud574\ub4dc\ub9ac\ub824\uace0 \ud569\ub2c8\ub2e4.\\n\uac15\uc758 \uc774\ub984\uc740 \'\ucc98\uc74c \ub9cc\ub09c \ub9ac\uc561\ud2b8\'\uc785\ub2c8\ub2e4.\\n\uac15\uc758 \uc774\ub984\uc5d0\uc11c \uc774\ubbf8 \ub290\ub07c\uc168\uc744\ud150\ub370, \ub9ac\uc561\ud2b8 \ucd08\ubcf4\uc790\ubd84\ub4e4\uc744 \uc704\ud55c \uac15\uc758\uc785\ub2c8\ub2e4.","comments":[{"id":51,"content":"\uac15\uc758 \ub108\ubb34 \uc88b\uc544\uc694~!","i":"https://images.unsplash.com/photo-1713332126538-0fe6208bf453?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"id":52,"content":"\ucd08\ubcf4\uc790\ub3c4 \uc27d\uac8c \uc774\ud574\ud560 \uc218 \uc788\uc5b4\uc11c \uc88b\uc2b5\ub2c8\ub2e4\ud83d\ude03"},{"id":53,"content":"\uc2e4\uc2b5\ub3c4 \ub530\ub77c\ud558\uba74\uc11c \ud558\ub294\ub370 \uc88b\uc544\uc694"},{"id":54,"content":"\uc88b\uc740 \uac15\uc758 \uac10\uc0ac\ub4dc\ub9bd\ub2c8\ub2e4\ud83d\udc4d\ud83d\udc4d"},{"id":55,"content":"\uc624 \uc774\ub7f0 \uac15\uc758\uac00 \uc788\uc5c8\uad70\uc694~"}]},{"id":6,"title":"\uc548\ub155\ud558\uc138\uc694 \uc18c\ud50c\uc785\ub2c8\ub2e4.","content":"\uc81c \ube14\ub85c\uadf8\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4.\\n\uc55e\uc73c\ub85c \uc720\uc775\ud55c \uae00\ub4e4\uc744 \uc790\uc8fc \uc62c\ub9ac\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4!","comments":[{"id":61,"content":"\ub9ce\uc774 \uc62c\ub824\uc8fc\uc138\uc694!\ud83d\udc4d","i":"https://images.unsplash.com/photo-1713553731819-d4dc1e8f7705?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{"id":62,"content":"\uc640 \uc88b\uc2b5\ub2c8\ub2e4\u314e\u314e"},{"id":63,"content":"\ub9ac\uc561\ud2b8 \ub108\ubb34 \uc5b4\ub824\uc6cc\uc694\u3160\u3160\ud83d\ude02"},{"id":64,"content":"\uc18c\ud50c\ub2d8 \uac15\uc758 \uc798 \ub4e3\uace0 \uc788\uc2b5\ub2c8\ub2e4~!"},{"id":65,"content":"\uafb8\uc900\ud788 \ube14\ub85c\uadf8 \ud65c\ub3d9 \ud574\uc8fc\uc138\uc694!!\ud83d\ude00"}]}]')}},[[25,1,2]]]);
//# sourceMappingURL=main.97a93ee5.chunk.js.map