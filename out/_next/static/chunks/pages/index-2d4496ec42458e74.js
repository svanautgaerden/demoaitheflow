(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5821)}])},5821:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return N}});var n=a(5893),t=a(7294);function o(e){let{children:s}=e;return(0,n.jsxs)("div",{className:"mx-auto flex flex-col space-y-4",children:[(0,n.jsx)("header",{className:"container sticky top-0 z-40 bg-white",children:(0,n.jsx)("div",{className:"h-16 border-b border-b-slate-200 py-4",children:(0,n.jsx)("nav",{className:"ml-4 pl-6",children:(0,n.jsx)("a",{href:"#",className:"hover:text-slate-600 cursor-pointer",children:"Home"})})})}),(0,n.jsx)("div",{children:(0,n.jsx)("main",{className:"flex w-full flex-1 flex-col overflow-hidden",children:s})})]})}var r=a(8122),l=a.n(r),i=a(5675),c=a.n(i),d=a(4740),m=a(4871),u=a.n(m);let _=e=>{let{color:s="#000",style:a="small"}=e;return(0,n.jsxs)("span",{className:"small"==a?u().loading2:u().loading,children:[(0,n.jsx)("span",{style:{backgroundColor:s}}),(0,n.jsx)("span",{style:{backgroundColor:s}}),(0,n.jsx)("span",{style:{backgroundColor:s}})]})};_.defaultProps={style:"small"};var h=a(1683),g=a(9307),x=a(6010),p=a(7851);function f(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,p.m)((0,x.W)(s))}let j=h.fC,w=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,n.jsx)(h.ck,{ref:s,className:f("border-b border-b-slate-200 dark:border-b-slate-700",a),...t})});w.displayName="AccordionItem";let v=t.forwardRef((e,s)=>{let{className:a,children:t,...o}=e;return(0,n.jsx)(h.h4,{className:"flex",children:(0,n.jsxs)(h.xz,{ref:s,className:f("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...o,children:[t,(0,n.jsx)(g.Z,{className:"h-4 w-4 transition-transform duration-200"})]})})});v.displayName=h.xz.displayName;let y=t.forwardRef((e,s)=>{let{className:a,children:t,...o}=e;return(0,n.jsx)(h.VY,{ref:s,className:f("data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all",a),...o,children:(0,n.jsx)("div",{className:"pt-0 pb-4",children:t})})});function N(){let[e,s]=(0,t.useState)(""),[a,r]=(0,t.useState)(!1),[i,m]=(0,t.useState)(null),[u,h]=(0,t.useState)({messages:[{message:"Hi, what do you want to know about employee experience.f",type:"apiMessage"}],history:[]}),{messages:g,history:x}=u,p=(0,t.useRef)(null),f=(0,t.useRef)(null);async function N(a){if(a.preventDefault(),m(null),!e){alert("Please input a question");return}let n=e.trim();h(e=>({...e,messages:[...e.messages,{type:"userMessage",message:n}]})),r(!0),s("");try{var t;let e=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:n,history:x})}),s=await e.json();console.log("data",s),s.error?m(s.error):h(e=>({...e,messages:[...e.messages,{type:"apiMessage",message:s.text,sourceDocs:s.sourceDocuments}],history:[...e.history,[n,s.text]]})),console.log("messageState",u),r(!1),null===(t=p.current)||void 0===t||t.scrollTo(0,p.current.scrollHeight)}catch(e){r(!1),m("An error occurred while fetching the data. Please try again."),console.log("error",e)}}(0,t.useEffect)(()=>{var e;null===(e=f.current)||void 0===e||e.focus()},[]);let b=s=>{"Enter"===s.key&&e?N(s):"Enter"==s.key&&s.preventDefault()};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o,{children:[(0,n.jsxs)("div",{className:"mx-auto flex flex-col gap-4",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold leading-[1.1] tracking-tighter text-center",children:"Chat With Your Legal Docs"}),(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)("div",{className:l().cloud,children:(0,n.jsx)("div",{ref:p,className:l().messagelist,children:g.map((e,s)=>{let t,o;return"apiMessage"===e.type?(t=(0,n.jsx)(c(),{src:"/bot-image.png",alt:"AI",width:"40",height:"40",className:l().boticon,priority:!0},s),o=l().apimessage):(t=(0,n.jsx)(c(),{src:"/usericon.png",alt:"Me",width:"30",height:"30",className:l().usericon,priority:!0},s),o=a&&s===g.length-1?l().usermessagewaiting:l().usermessage),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:o,children:[t,(0,n.jsx)("div",{className:l().markdownanswer,children:(0,n.jsx)(d.D,{linkTarget:"_blank",children:e.message})})]},"chatMessage-".concat(s)),e.sourceDocs&&(0,n.jsx)("div",{className:"p-5",children:(0,n.jsx)(j,{type:"single",collapsible:!0,className:"flex-col",children:e.sourceDocs.map((e,s)=>(0,n.jsx)("div",{children:(0,n.jsxs)(w,{value:"item-".concat(s),children:[(0,n.jsx)(v,{children:(0,n.jsxs)("h3",{children:["Source ",s+1]})}),(0,n.jsxs)(y,{children:[(0,n.jsx)(d.D,{linkTarget:"_blank",children:e.pageContent}),(0,n.jsxs)("p",{className:"mt-2",children:[(0,n.jsx)("b",{children:"Source:"})," ",e.metadata.source]})]})]})},"messageSourceDocs-".concat(s)))})},"sourceDocsAccordion-".concat(s))]})})})}),(0,n.jsx)("div",{className:l().center,children:(0,n.jsx)("div",{className:l().cloudform,children:(0,n.jsxs)("form",{onSubmit:N,children:[(0,n.jsx)("textarea",{disabled:a,onKeyDown:b,ref:f,autoFocus:!1,rows:1,maxLength:512,id:"userInput",name:"userInput",placeholder:a?"Waiting for response...":"Ask me a question about employee experience",value:e,onChange:e=>s(e.target.value),className:l().textarea}),(0,n.jsx)("button",{type:"submit",disabled:a,className:l().generatebutton,children:a?(0,n.jsx)("div",{className:l().loadingwheel,children:(0,n.jsx)(_,{color:"#000"})}):(0,n.jsx)("svg",{viewBox:"0 0 20 20",className:l().svgicon,xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"})})})]})})}),i&&(0,n.jsx)("div",{className:"border border-red-400 rounded-md p-4",children:(0,n.jsx)("p",{className:"text-red-500",children:i})})]})]}),(0,n.jsx)("footer",{className:"m-auto p-4",children:(0,n.jsx)("a",{href:"https://twitter.com/mayowaoshin",children:"Powered by LangChainAI. Demo built by Mayo (Twitter: @mayowaoshin)."})})]})})}y.displayName=h.VY.displayName},8122:function(e){e.exports={main:"Home_main__nLjiQ",header:"Home_header__GCVRv",cloudform:"Home_cloudform__W4PLJ",textarea:"Home_textarea__lSHf7",generatebutton:"Home_generatebutton__omKYX",loadingwheel:"Home_loadingwheel__IWJnE",svgicon:"Home_svgicon__PLaWz",messagelist:"Home_messagelist__YHr8p",messagelistloading:"Home_messagelistloading__tlCYV",usermessage:"Home_usermessage__tWHWR",usermessagewaiting:"Home_usermessagewaiting__PYv_4","loading-gradient":"Home_loading-gradient__8jpVG",apimessage:"Home_apimessage__VhfTn",fadein:"Home_fadein__CBLON",markdownanswer:"Home_markdownanswer__UUDfu",boticon:"Home_boticon__Xr0Q4",usericon:"Home_usericon___BrVD",center:"Home_center__4BFgC",cloud:"Home_cloud__S7par",pointsnormal:"Home_pointsnormal__yRwA_",pointsdim:"Home_pointsdim__x_zcw",footer:"Home_footer____T7K",topnav:"Home_topnav__BfkuW",navlogo:"Home_navlogo__AhPAx"}},4871:function(e){e.exports={loading:"loading-dots_loading__LomzL",spacer:"loading-dots_spacer__nBBvk",blink:"loading-dots_blink__yy72w",loading2:"loading-dots_loading2___zCAu"}}},function(e){e.O(0,[745,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);