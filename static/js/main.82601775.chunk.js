(this["webpackJsonpmental-tools"]=this["webpackJsonpmental-tools"]||[]).push([[0],{62:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),l=c(22),i=c.n(l),n=(c(62),c(17)),r=c(9),j=c(76),d=c(77),o=c(78),b=c(0),x=function(){return Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("h1",{children:["\u0423\u043f\u0441! \u041e\u0448\u0438\u0431\u043e\u0447\u043a\u0430 \u0432\u044b\u0448\u043b\u0430.  ",Object(b.jsx)(d.a,{bg:"danger",children:"\u0421\u043e\u0440\u044f\u043d :("})]}),Object(b.jsx)(n.b,{to:"/",children:Object(b.jsx)(o.a,{children:"\u041d\u0430\u0437\u0430\u0434 \u0434\u043e\u043c\u043e\u0439"})})]})},h=c(79),m=c(55),u=c(86),O=c(15),p=a.a.createContext(),g=function(e){var t=e.children,c=Object(s.useState)(localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[]),a=Object(O.a)(c,2),l=a[0],i=a[1];return Object(s.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(l))}),[l]),Object(b.jsxs)(p.Provider,{value:{notes:l,setNotes:i},children:[" ",t," "]})},f=function(){return Object(s.useContext)(p)},v=function(){var e=f().notes,t=Object(s.useState)(""),c=Object(O.a)(t,2),a=c[0],l=c[1],i=Object(r.g)().id;if(Object(s.useEffect)((function(){var t=e.find((function(e){return e.noteID===i}));l(t)}),[]),a){a.noteID;var n=a.titleValue,o=a.triggerValue,x=a.emotionValue,u=a.emotionPowerValue,p=a.automaticThoughtsValue,g=a.cognitiveDistortionsValue,v=a.challengeThoughtsValue,N=a.alternativeThoughtsValue;return console.log(g),Object(b.jsx)(j.a,{className:"my-5 px-4 px-sm-5 ",children:Object(b.jsx)(h.a,{children:Object(b.jsxs)(m.a,{xl:7,children:[Object(b.jsx)("h1",{children:n}),Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)(d.a,{bg:"info",children:x}),Object(b.jsxs)(d.a,{bg:"info",className:"mx-3",children:[u,"/10"]})]}),Object(b.jsx)("div",{className:"my-3",children:g.map((function(e,t){return Object(b.jsx)(d.a,{bg:"light",text:"dark",children:e},t)}))}),Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)("h5",{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438"}),Object(b.jsx)("p",{children:o})]}),Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)("h5",{children:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u044b\u0441\u043b\u0438"}),Object(b.jsx)("p",{children:p})]}),Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)("h5",{children:"\u0427\u0435\u043b\u043b\u0435\u043d\u0434\u0436 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u044b\u0441\u043b\u0435\u0439"}),Object(b.jsx)("p",{children:v})]}),Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)("h5",{children:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043c\u044b\u0441\u043b\u0438"}),Object(b.jsx)("p",{children:N})]})]})})})}return Object(b.jsx)(j.a,{children:Object(b.jsx)("h1",{className:"text-center",children:"\u041f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043c\u0435\u0442\u043a\u0438"})})},N=function(){var e=f().notes;return Object(b.jsxs)(j.a,{children:[Object(b.jsx)("h1",{className:"mt-5 text-center",children:"\u041c\u043e\u0438 \u0437\u0430\u043f\u0438\u0441\u0438"}),Object(b.jsx)(j.a,{fluid:!0,className:"my-4",children:Object(b.jsx)(h.a,{xs:1,md:3,xl:4,className:"g-4",children:e.map((function(e){return Object(b.jsx)(m.a,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.a.Header,{children:e.titleValue}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsx)(u.a.Text,{children:e.triggerValue}),Object(b.jsx)("div",{class:"d-grid",children:Object(b.jsx)(o.a,{variant:"outline-primary",size:"sm",as:n.b,to:"/note/".concat(e.noteID),children:"\u0427\u0438\u0442\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"})})]})]})},e.noteID)}))})})]})},y=c(52),w=c(82),k=c(56),S=function(){var e=f(),t=e.notes,c=e.setNotes,l=a.a.useRef(""),i=a.a.useRef(""),n=a.a.useRef(""),d=a.a.useRef(""),x=a.a.useRef(""),h=a.a.useRef(""),m=a.a.useRef(""),u=Object(r.f)(),p=Object(s.useState)([]),g=Object(O.a)(p,2),v=g[0],N=g[1];return Object(b.jsx)(j.a,{className:"d-flex flex-column align-items-center justify-content-center my-5",children:Object(b.jsxs)(w.a,{onSubmit:function(e){e.preventDefault();var s=[l.current.value,i.current.value,n.current.value,d.current.value,x.current.value,v,h.current.value,m.current.value],a=s[0],r=s[1],j=s[2],o=s[3],b=s[4],O=s[5],p=s[6],g=s[7],f=(new Date).getTime().toString(),N={noteID:f,titleValue:a,triggerValue:r,emotionValue:j,emotionPowerValue:o,automaticThoughtsValue:b,cognitiveDistortionsValue:O,challengeThoughtsValue:p,alternativeThoughtsValue:g};c([].concat(Object(y.a)(t),[N])),u.push("/note/".concat(f))},children:[Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"trigger",children:[Object(b.jsx)(w.a.Label,{children:"\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f/\u0422\u0440\u0438\u0433\u0433\u0435\u0440"}),Object(b.jsx)(w.a.Control,{type:"Text",placeholder:"\u0427\u0442\u043e \u0441\u043b\u0443\u0447\u0438\u043b\u043e\u0441\u044c?",ref:l})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"trigger",children:[Object(b.jsx)(w.a.Label,{children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438"}),Object(b.jsx)(w.a.Control,{as:"textarea",placeholder:"\u0418\u0437\u043b\u043e\u0436\u0438\u0442\u0435 \u0444\u0430\u043a\u0442\u044b \u043e \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438",style:{height:"80px"},ref:i})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"emotion",children:[Object(b.jsx)(w.a.Label,{children:"\u042d\u043c\u043e\u0446\u0438\u044f"}),Object(b.jsx)(k.a,{label:"\u0427\u0442\u043e \u0432\u044b \u043f\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u0438?",children:Object(b.jsxs)(w.a.Select,{"aria-label":"Emotions select",ref:n,children:[Object(b.jsx)("option",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0430\u043c\u0443\u044e \u044f\u0440\u043a\u0443\u044e \u044d\u043c\u043e\u0446\u0438\u044e"}),Object(b.jsx)("option",{value:"Anger",children:"\u0413\u043d\u0435\u0432, \u0432\u043e\u0437\u043c\u0443\u0449\u0435\u043d\u0438\u0435"}),Object(b.jsx)("option",{value:"Anxiety",children:"\u0421\u0442\u0440\u0430\u0445, \u0442\u0440\u0435\u0432\u043e\u0433\u0430"}),Object(b.jsx)("option",{value:"Depression",children:"\u0413\u0440\u0443\u0441\u0442\u044c, \u0440\u0430\u0437\u043e\u0447\u0430\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),Object(b.jsx)("option",{value:"Guilt",children:"\u0412\u0438\u043d\u0430, \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u0435"}),Object(b.jsx)("option",{value:"Shame",children:"\u0421\u0442\u044b\u0434, \u0441\u043c\u0443\u0449\u0435\u043d\u0438\u0435"}),Object(b.jsx)("option",{value:"Happiness",children:"\u0420\u0430\u0434\u043e\u0441\u0442\u044c, \u0432\u043e\u0437\u0431\u0443\u0436\u0434\u0435\u043d\u0438\u0435"}),Object(b.jsx)("option",{value:"Love",children:"\u041b\u044e\u0431\u043e\u0432\u044c, \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c"})]})})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"emotion-power",children:[Object(b.jsx)(w.a.Label,{children:"\u0421\u0438\u043b\u0430 \u044d\u043c\u043e\u0446\u0438\u0438"}),Object(b.jsx)(w.a.Range,{min:"1",max:"10",ref:d})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"automatic-thoughts",children:[Object(b.jsx)(w.a.Label,{children:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u044b\u0441\u043b\u0438"}),Object(b.jsx)(w.a.Control,{as:"textarea",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u044b\u0441\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0432 \u044d\u0442\u043e\u0439 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438",style:{height:"80px"},ref:x})]}),Object(b.jsxs)(w.a.Group,{className:"my-4",controlId:"cognitive-distortions",children:[Object(b.jsx)(w.a.Label,{className:"d-block",children:"\u041a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0441\u043a\u0430\u0436\u0435\u043d\u0438\u044f"}),Object(b.jsx)(w.a.Text,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435 \u043a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u044b\u0435 \u0438\u0441\u043a\u0430\u0436\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043d\u0430\u0448\u043b\u0438 \u0432 \u0441\u0432\u043e\u0438\u0445 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u044b\u0441\u043b\u044f\u0445:"}),Object(b.jsx)(j.a,{className:"mt-3",children:[{name:"\u041a\u0430\u0442\u0430\u0441\u0442\u0440\u043e\u0444\u0438\u0437\u0430\u0446\u0438\u044f",example:"\u0427\u0442\u043e \u0435\u0441\u043b\u0438 \u0441\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u0445\u0443\u0434\u0448\u0435\u0435?"},{name:"\u0427\u0435\u0440\u043d\u043e-\u0431\u0435\u043b\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435",example:"\u042f \u043f\u043e\u043b\u043d\u044b\u0439 \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u0438\u043a"},{name:"\u042d\u043c\u043e\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0435",example:"\u042f \u0442\u0430\u043a \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044e, \u0441\u0442\u0430\u043b\u043e \u0431\u044b\u0442\u044c \u044d\u0442\u043e \u043f\u0440\u0430\u0432\u0434\u0430"},{name:"\u0423\u0441\u0438\u043b\u0435\u043d\u0438\u0435 \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u0430",example:"\u042f \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e \u0432\u0441\u0435 \u0437\u0430\u0433\u0443\u0431\u0438\u043b "},{name:"\u041c\u0438\u043d\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u0430",example:"\u041e\u043d\u0438 \u0442\u0430\u043a \u0441\u043a\u0430\u0437\u0430\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0438\u0437 \u0432\u0435\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0438"},{name:"\u041f\u043e\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u0432\u044b\u0432\u043e\u0434\u044b",example:"\u041e\u043d\u0430 \u0441\u043e \u043c\u043d\u043e\u0439 \u043d\u0435 \u043f\u043e\u0437\u0434\u0430\u0440\u043e\u0432\u0430\u043b\u0430\u0441\u044c, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043e\u043d\u0430 \u043c\u0435\u043d\u044f \u043d\u0435\u043d\u0430\u0432\u0438\u0434\u0438\u0442"},{name:"\u041f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e",example:"\u042f \u043d\u0430\u0432\u0435\u0440\u043d\u044f\u043a\u0430 \u043f\u0440\u043e\u0432\u0430\u043b\u044e \u043c\u043e\u0439 \u044d\u043a\u0437\u0430\u043c\u0435\u043d"},{name:"\u0427\u0442\u0435\u043d\u0438\u0435 \u043c\u044b\u0441\u043b\u0435\u0439",example:"\u041e\u043d \u043d\u0435 \u0445\u043e\u0442\u0435\u043b \u0441\u043e \u043c\u043d\u043e\u0439 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c"},{name:"\u041e\u0431\u0432\u0438\u043d\u0435\u043d\u0438\u0435 \u0441\u0435\u0431\u044f",example:"\u042d\u0442\u043e \u0432\u0441\u0435 \u044f \u0432\u0438\u043d\u043e\u0432\u0430\u0442"},{name:"\u041e\u0431\u0432\u0438\u043d\u0435\u043d\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0445",example:"\u042d\u0442\u043e \u043e\u043d\u0438 \u0432\u043e \u0432\u0441\u0435\u043c \u0432\u0438\u043d\u043e\u0432\u0430\u0442\u044b"}].map((function(e,t){return Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)(w.a.Check,{type:"checkbox",id:"".concat(e.name),label:"".concat(e.name),onClick:function(){N([].concat(Object(y.a)(v),[e.name]))}}),Object(b.jsx)(w.a.Text,{children:e.example})]},"key-".concat(e.name))}))})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"challenge-thoughts",children:[Object(b.jsx)(w.a.Label,{children:"\u0427\u0435\u043b\u043b\u0435\u043d\u0434\u0436 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043c\u044b\u0441\u043b\u0435\u0439"}),Object(b.jsx)(w.a.Control,{as:"textarea",placeholder:"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0438\u0442\u0435 \u0444\u0430\u043a\u0442\u044b, \u043e\u043f\u0440\u043e\u0432\u0435\u0440\u0433\u0430\u044e\u0449\u0438\u0435 \u044d\u0442\u0438 \u043c\u044b\u0441\u043b\u0438",style:{height:"80px"},ref:h})]}),Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"alternative-thoughts",children:[Object(b.jsx)(w.a.Label,{children:"\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043c\u044b\u0441\u043b\u0438"}),Object(b.jsx)(w.a.Control,{as:"textarea",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435, \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043e\u043b\u0435\u0435 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u043e \u0438 \u0433\u0438\u0431\u043a\u043e \u043f\u043e\u0434\u0443\u043c\u0430\u0442\u044c \u043e \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438",style:{height:"80px"},ref:m})]}),Object(b.jsx)(o.a,{variant:"primary",type:"submit",children:"Submit"})]})})},I=c.p+"static/media/hero.3a74258c.png",V=function(){return Object(b.jsx)("div",{className:"container col-xxl-8 px-4 py-5",children:Object(b.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",children:[Object(b.jsx)("div",{className:"col-10 col-sm-8 col-lg-6",children:Object(b.jsx)("img",{src:I,class:"d-block mx-lg-auto img-fluid",alt:"Bootstrap Themes",width:"700",height:"500",loading:"lazy"})}),Object(b.jsxs)("div",{className:"col-lg-6",children:[Object(b.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:"\u0422\u0440\u0435\u043d\u0438\u0440\u0443\u0439 \u0441\u0432\u043e\u0438 \u0433\u0438\u0431\u043a\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"}),Object(b.jsx)("p",{className:"lead",children:"SoftSkillz \u2014 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044c \u0433\u0438\u0431\u043a\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0439 \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432. "}),Object(b.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start",children:[Object(b.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4 me-md-2",children:"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c"}),Object(b.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4",children:"\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435"})]})]})]})})},B=(c(53),function(){return Object(b.jsx)("div",{className:"container px-4 py-5",id:"custom-cards",children:Object(b.jsxs)("div",{className:"row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"card card-cover h-100 overflow-hidden text-white  rounded-5 shadow-lg",style:{backgroundImage:"url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"},children:Object(b.jsxs)("div",{className:"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1",children:[Object(b.jsx)("h2",{className:"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold",children:"Short title, long jacket"}),Object(b.jsx)("ul",{className:"d-flex list-unstyled mt-auto",children:Object(b.jsx)("li",{className:"me-auto",children:Object(b.jsx)("img",{src:"https://github.com/twbs.png",alt:"Bootstrap",width:"32",height:"32",className:"rounded-circle border border-white"})})})]})})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg",style:{backgroundImage:"url('https://images.unsplash.com/photo-1626823142330-0dec2ddbe3f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80)"},children:Object(b.jsxs)("div",{className:"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1",children:[Object(b.jsx)("h2",{className:"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold",children:"Short title, long jacket"}),Object(b.jsx)("ul",{className:"d-flex list-unstyled mt-auto",children:Object(b.jsx)("li",{className:"me-auto",children:Object(b.jsx)("img",{src:"https://github.com/twbs.png",alt:"Bootstrap",width:"32",height:"32",className:"rounded-circle border border-white"})})})]})})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("div",{className:"card card-cover h-100 overflow-hidden text-white rounded-5 shadow-lg",style:{backgroundImage:"url('https://images.unsplash.com/photo-1628257228884-90f11c4e78a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"},children:Object(b.jsxs)("div",{className:"d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1",children:[Object(b.jsx)("h2",{className:"pt-5 mt-5 mb-4 display-6 lh-1 fw-bold",children:"Short title, long jacket"}),Object(b.jsx)("ul",{className:"d-flex list-unstyled mt-auto",children:Object(b.jsx)("li",{className:"me-auto",children:Object(b.jsx)("img",{src:"https://github.com/twbs.png",alt:"Bootstrap",width:"32",height:"32",className:"rounded-circle border border-white"})})})]})})})]})})}),H=c(2),G=c(80),M=function(e){var t=e.title,c=e.titleMuted,s=e.para,a=e.imageLeft,l=e.img;return Object(b.jsxs)(j.a,{children:[Object(b.jsx)("hr",{className:"featurette-divider"}),Object(b.jsxs)(h.a,{className:"featurette",children:[Object(b.jsx)(m.a,{lg:7,className:a&&"order-lg-2",children:Object(b.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(b.jsxs)("h2",{className:"featurette-heading",children:[t,Object(b.jsx)("span",{className:"text-muted",children:c})]}),Object(b.jsx)("p",{className:"lead",children:s})]})}),Object(b.jsx)(m.a,{lg:5,className:a&&"order-md-1",children:Object(b.jsx)(G.a,{rounded:!0,src:l,alt:t,className:" img-fluid mx-auto "})})]})]})},D=function(){var e=Object(s.useState)([{title:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0439\u0442\u0435\u0441\u044c. ",titleMuted:"\u0412\u043c\u0435\u0441\u0442\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u043e\u0447\u0435\u0440\u0435\u0434\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438.",para:"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043a\u043d\u0438\u0433 \u043f\u043e \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0438\u0438, \u043f\u0435\u0440\u0435\u0433\u043e\u0432\u043e\u0440\u0430\u043c, \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u043c \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f\u043c. \u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043b\u0438\u0448\u044c \u0432 \u0442\u043e\u043c, \u0447\u0442\u043e \u043a\u043d\u0438\u0433\u0430 \u043d\u0435 \u0434\u0430\u0435\u0442 \u0432\u0430\u043c \u043d\u0430\u0432\u044b\u043a\u043e\u0432. \u0412\u044b \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043b\u0438 \u043a\u043d\u0438\u0433\u0443, \u0443\u0437\u043d\u0430\u043b\u0438 \u043d\u043e\u0432\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u043d\u043e \u0432 \u0432\u0430\u0448\u0435\u0439 \u0436\u0438\u0437\u043d\u0438 \u043f\u043e-\u0431\u043e\u043b\u044c\u0448\u043e\u043c\u0443 \u0441\u0447\u0435\u0442\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c. SoftSkill - \u044d\u0442\u043e \u0438\u0433\u0440\u043e\u0432\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0430 \u0434\u043b\u044f \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0438 \u0432\u0430\u0448\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432. \u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f. ",img:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80",imageLeft:!1},{title:"\u041d\u0430\u0443\u0447\u043d\u043e \u043e\u0431\u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f. ",titleMuted:"\u0412\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0442\u043d\u044b\u0445 \u043a\u043e\u0443\u0447\u0435\u0439, \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u043e\u0432 \u0438 \u0448\u0430\u0440\u043b\u0430\u0442\u0430\u043d\u043e\u0432",para:"\u0412\u0430\u0448 \u043a\u043e\u0443\u0447 \u0437\u0430\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0430\u0441 \u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0438\u0445\u0438 \u0432 \u043c\u0435\u0442\u0440\u043e \u0438 \u0431\u0435\u0433\u0430\u0442\u044c \u0433\u043e\u043b\u044b\u043c \u0432\u043e\u043a\u0440\u0443\u0433 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044c \u0431\u043e\u044f\u0442\u044c\u0441\u044f \u043b\u044e\u0434\u0435\u0439? \u0412\u0430\u0448 \u043f\u0441\u0438\u0445\u043e\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a \u0443\u0436\u0435 \u0434\u0432\u0430 \u0433\u043e\u0434\u0430 \u043a\u043e\u043f\u0430\u0435\u0442\u0441\u044f \u0432 \u0432\u0430\u0448\u0438\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u044f\u0445 \u0438\u0437 \u0434\u0435\u0442\u0441\u0442\u0432\u0430 \u0438 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u0441 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f\u043c\u0438, \u043d\u043e \u0432\u044b \u043d\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430? \u0412 \u043d\u0430\u0448\u0438\u0445 \u043f\u0441\u0438\u0445\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f\u0445 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u0438\u0437 \u043d\u0430\u0443\u0447\u043d\u043e \u0434\u043e\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u043e-\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u0435\u0440\u0430\u043f\u0438\u0438. \u0410 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0438 \u0441\u0442\u0430\u0442\u044c\u0438 \u043f\u043e \u0434\u0440\u0443\u0433\u0438\u043c \u0442\u0435\u043c\u0430\u043c \u043f\u043e\u0434\u043a\u0440\u0435\u043f\u043b\u044f\u0435\u043c \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043c\u0435\u0442\u0430-\u0430\u043d\u0430\u043b\u0438\u0437\u044b \u0438 \u0441\u0432\u0435\u0436\u0438\u0435 \u043d\u0430\u0443\u0447\u043d\u044b\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f.",img:"https://images.pexels.com/photos/7089290/pexels-photo-7089290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",imageLeft:!0},{title:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e. ",titleMuted:"\u0412\u043c\u0435\u0441\u0442\u043e \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432 \u0442\u044b\u0441\u044f\u0447 \u0440\u0443\u0431\u043b\u0435\u0439 \u0437\u0430 \u0442\u0440\u0435\u043d\u0438\u043d\u0433\u0438, \u043a\u0443\u0441\u044b \u0438 \u0441\u0435\u0430\u043d\u0441\u044b",para:"\u041c\u044b \u0445\u043e\u0442\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043b\u044e\u0431\u043e\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u043c\u043e\u0433 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u043e\u043c\u043e\u0449\u044c \u0438 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0433\u0438\u0431\u043a\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0438. \u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b, \u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 \u0441\u0442\u043e\u044f\u0442 \u0434\u0435\u0448\u0435\u0432\u043b\u0435, \u0447\u0435\u043c \u043e\u0434\u0438\u043d \u0441\u0435\u0430\u043d\u0441 \u0443 \u043f\u0441\u0438\u0445\u043e\u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442\u0430",img:"https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",imageLeft:!1}]),t=Object(O.a)(e,2),c=t[0];t[1];return console.log(c),Object(b.jsx)(j.a,{className:"marketing",children:c.map((function(e,t){return console.log(e),Object(b.jsx)(M,Object(H.a)({},e),t)}))})},L=c(83),T=function(){return Object(b.jsx)(j.a,{fluid:"md",children:Object(b.jsxs)(h.a,{className:"my-5 g-5 justify-content-around align-items-center",children:[Object(b.jsx)(m.a,{xs:6,sm:6,lg:4,children:Object(b.jsx)("img",{src:"https://images.unsplash.com/photo-1551636898-47668aa61de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",className:"img-fluid",alt:"ebook"})}),Object(b.jsxs)(m.a,{lg:6,children:[Object(b.jsx)("h2",{children:"\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430 \u0432 \u0441\u0442\u0430\u0434\u0438\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438"}),Object(b.jsxs)("div",{className:"text-muted",children:[Object(b.jsx)("p",{children:"\u0412 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0432\u0430\u043c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u0432\u0430 \u043c\u043e\u0434\u0443\u043b\u044f - \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u043c\u044b\u0441\u043b\u044f\u043c\u0438 \u0438 \u043a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u044b\u043c\u0438 \u0438\u0441\u043a\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438. "}),Object(b.jsx)("p",{children:"\u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u044b\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b. \u0412 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u043a \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u043e-\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0447\u0435\u0441\u043a\u043e\u0439 \u0442\u0435\u0440\u0430\u043f\u0438\u0438. "}),Object(b.jsx)("p",{children:"\u0418\u0437\u0443\u0447\u0438\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432 \u043f\u043b\u0430\u043d\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438: "})]}),Object(b.jsxs)(L.a,{defaultActiveKey:"0",children:[Object(b.jsxs)(L.a.Item,{eventKey:"0",children:[Object(b.jsx)(L.a.Header,{children:"\u0426\u0435\u043b\u0438 \u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),Object(b.jsx)(L.a.Body,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0439\u0442\u0435 \u0446\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f. \u0412 \u044d\u0442\u043e\u043c \u0432\u0430\u043c \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 SMART \u0446\u0435\u043b\u0435\u0439."}),Object(b.jsx)("li",{children:"\u0416\u0438\u0432\u0438\u0442\u0435 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043e \u0441\u0432\u043e\u0438\u043c\u0438 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u044f\u043c\u0438. \u0412 \u044d\u0442\u043e\u043c \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u044c \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0446\u0435\u043d\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u043e\u0440\u043e\u043d  "})]})})]}),Object(b.jsxs)(L.a.Item,{eventKey:"1",children:[Object(b.jsx)(L.a.Header,{children:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c"}),Object(b.jsx)(L.a.Body,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u041f\u0440\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043e\u0438 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u044b \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f"}),Object(b.jsx)("li",{children:"\u0421\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u043b\u0430\u043d \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439"}),Object(b.jsx)("li",{children:"\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c"}),Object(b.jsx)("li",{children:"\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043f\u043b\u044e\u0441\u043e\u0432 \u0438 \u043c\u0438\u043d\u0443\u0441\u043e\u0432 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0439"})]})})]}),Object(b.jsxs)(L.a.Item,{eventKey:"2",children:[Object(b.jsx)(L.a.Header,{children:"\u0420\u0430\u0437\u0432\u0438\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0432\u044b\u043a\u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0439"}),Object(b.jsx)(L.a.Body,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"\u041f\u0440\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u043f\u043e\u0440 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0430 EAR: \u044d\u043c\u043f\u0430\u0442\u0438\u044f, \u0430\u0441\u0441\u0435\u0440\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u0443\u0432\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(b.jsx)("li",{children:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c \u043a \u0441\u043b\u043e\u0436\u043d\u044b\u043c \u0434\u0438\u0430\u043b\u043e\u0433\u0430\u043c"}),Object(b.jsx)("li",{children:"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u0439\u0442\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0441\u043b\u0443\u0448\u0430\u043d\u0438\u0435"}),Object(b.jsx)("li",{children:"\u041d\u0430\u0443\u0447\u0438\u0442\u0435\u0441\u044c \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"})]})})]})]})]})]})})},C=c(81),A=function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),c=t[0],a=t[1],l=function(){return a(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{variant:"primary",onClick:function(){return a(!0)},children:"Launch demo modal"}),Object(b.jsxs)(C.a,{show:c,onHide:l,children:[Object(b.jsx)(C.a.Header,{closeButton:!0,children:Object(b.jsx)(C.a.Title,{children:"\u0423\u0437\u043d\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0431 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445"})}),Object(b.jsxs)(C.a.Body,{children:[Object(b.jsx)("p",{children:"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0432\u044b\u043c\u0438 \u0443\u0437\u043d\u0430\u0432\u0430\u0442\u044c \u043e \u043d\u043e\u0432\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u044f\u0445. \u041c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u0441\u043f\u0430\u043c\u0438\u0442\u044c: \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043e\u0431 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445 \u0431\u0435\u0437 \u0440\u0435\u043a\u043b\u0430\u043c\u044b."}),Object(b.jsx)(w.a,{children:Object(b.jsxs)(w.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(b.jsx)(w.a.Label,{children:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 email"}),Object(b.jsx)(w.a.Control,{type:"email",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, mark@mail.ru"}),Object(b.jsx)(w.a.Text,{className:"text-muted",children:"\u041c\u044b \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u0434\u0435\u043b\u0438\u043c\u0441\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u043c\u0438 \u0441 \u043a\u0435\u043c-\u043b\u0438\u0431\u043e \u0435\u0449\u0435."})]})})]}),Object(b.jsxs)(C.a.Footer,{children:[Object(b.jsx)(o.a,{variant:"secondary",onClick:l,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(b.jsx)(o.a,{variant:"primary",onClick:l,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})]})},R=function(){return Object(b.jsx)("section",{className:"bg-light",children:Object(b.jsxs)(j.a,{children:[Object(b.jsxs)("div",{class:"text-center",children:[Object(b.jsx)("h2",{children:"Stay in The Loop"}),Object(b.jsx)("p",{class:"lead",children:"Get the latest updates as they happen..."})]}),Object(b.jsx)(h.a,{className:"justify-content-center",children:Object(b.jsxs)(m.a,{md:8,className:"text-center",children:[Object(b.jsx)("p",{class:"text-muted my-4",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem voluptatibus porro, hic asperiores fuga illo voluptates obcaecati deleniti veritatis sunt saepe quasi deserunt ex ipsum. Est possimus, aspernatur, vitae eligendi rem odit quaerat, ipsum pariatur ratione maxime delectus fuga minus accusamus dolores iusto maiores accusantium cumque magnam placeat quia!"}),Object(b.jsx)(A,{})]})})]})})},q=function(){return Object(b.jsxs)(j.a,{fluid:!0,className:"px-0",children:[Object(b.jsx)(V,{}),Object(b.jsx)(B,{}),Object(b.jsx)(D,{}),Object(b.jsx)(T,{}),Object(b.jsx)(R,{})]})},E=c(85),W=c(84),Y=function(){return Object(b.jsx)(E.a,{bg:"primary",variant:"dark",expand:"md",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(E.a.Brand,{as:n.b,to:"/",className:"display-6",children:"SoftSkillz"}),Object(b.jsx)(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(E.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(W.a,{className:"me-auto",children:[Object(b.jsx)(W.a.Link,{as:n.b,to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(b.jsx)(W.a.Link,{as:n.b,to:"/guide",children:"\u0410\u043d\u0430\u043b\u0438\u0437 \u043c\u044b\u0441\u043b\u0435\u0439"}),Object(b.jsx)(W.a.Link,{as:n.b,to:"/notes",children:"\u041c\u043e\u0438 \u0437\u0430\u043f\u0438\u0441\u0438"})]})})]})})};var z=function(){return Object(b.jsxs)(n.a,{children:[Object(b.jsx)(Y,{}),Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",children:Object(b.jsx)(q,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/guide",children:Object(b.jsx)(S,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/notes",children:Object(b.jsx)(N,{})}),Object(b.jsx)(r.a,{exact:!0,path:"/note/:id",children:Object(b.jsx)(v,{})}),Object(b.jsx)(r.a,{path:"*",children:Object(b.jsx)(x,{})})]})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.82601775.chunk.js.map