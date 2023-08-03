import{G as g,u as j,r as h,a as v,j as e,P as d,B as A,b as w,c as R,A as G,d as H}from"./index-5d0c194e.js";import{u as E,M as N,A as _}from"./useFoto-acad2b1c.js";import{I as T}from"./Input-2c9cb845.js";import{u as y,G as u,a as P,P as I,b as L}from"./ProfileList-608cbfd5.js";const k="#2f2f2f",Y="#fff",B="#ffb94a",M="#818181",S="#bfbfbf",D="#d7d7d7",O="_item_43iob_12",W="_ml_43iob_17",$="_blogText_43iob_21",V="_transitionText_43iob_28",F="_wrapper_43iob_32",z="_blockShow_43iob_36",Z="_btn_43iob_63",J="_paperclip_43iob_76",x={JET:k,"YELLOW-ORANGE":"#ff9900","BABY-POWDER":"#f3f4f0",WHITE:Y,PALE_ORANGE:B,DARK_GRAY:M,GRAY:S,LIGHT_GRAY:D,item:O,ml:W,blogText:$,transitionText:V,wrapper:F,blockShow:z,btn:Z,paperclip:J};function K(t){return g({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M3 2.5C3 2.22386 3.22386 2 3.5 2H9.08579C9.21839 2 9.34557 2.05268 9.43934 2.14645L11.8536 4.56066C11.9473 4.65443 12 4.78161 12 4.91421V12.5C12 12.7761 11.7761 13 11.5 13H3.5C3.22386 13 3 12.7761 3 12.5V2.5ZM3.5 1C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V4.91421C13 4.51639 12.842 4.13486 12.5607 3.85355L10.1464 1.43934C9.86514 1.15804 9.48361 1 9.08579 1H3.5ZM4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H7.5C7.77614 5 8 4.77614 8 4.5C8 4.22386 7.77614 4 7.5 4H4.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5ZM4.5 10C4.22386 10 4 10.2239 4 10.5C4 10.7761 4.22386 11 4.5 11H10.5C10.7761 11 11 10.7761 11 10.5C11 10.2239 10.7761 10 10.5 10H4.5Z",fill:"currentColor"}}]})(t)}const Q="#2f2f2f",U="#fff",q="#ffb94a",X="#818181",ee="#bfbfbf",te="#d7d7d7",se="_wrapper_18w8g_12",oe="_modal_18w8g_20",ae="_photo_18w8g_28",ie="_cross_18w8g_47",le="_textarea_18w8g_60",n={JET:Q,"YELLOW-ORANGE":"#ff9900","BABY-POWDER":"#f3f4f0",WHITE:U,PALE_ORANGE:q,DARK_GRAY:X,GRAY:ee,LIGHT_GRAY:te,wrapper:se,modal:oe,photo:ae,cross:ie,textarea:le};function ne(t){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"}}]})(t)}const re=({file:t})=>{const{IsPostModal:i}=j(o=>o.modal),[a,r]=h.useState(),[s,c]=h.useState(t),[b]=y();h.useEffect(()=>{c(t)},[t]);const[f]=E(s),m=v(),C=async o=>{const p=new FormData;s&&p.append("post",s),p.append("title",a),p.append("description",o.currentTarget.elements.description.value),o.preventDefault(),await b(p).then(()=>m(d(!1)))};return e.jsx(N,{visible:i,children:e.jsx("div",{className:n.wrapper,onClick:()=>m(d(!1)),children:e.jsxs("form",{className:n.modal,onClick:o=>o.stopPropagation(),onSubmit:C,children:[e.jsx("div",{onClick:()=>m(d(!1)),className:n.cross,style:{top:"20px",right:"20px",padding:"4px"},children:e.jsx(u,{})}),e.jsxs("div",{style:{position:"relative",height:"100%"},children:[e.jsx("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"},children:e.jsx("div",{children:"Create Post"})}),e.jsx(T,{style:{marginBottom:"10px",fontSize:"20px"},border:"BorderWhite",variant:"Black",placeholder:"title",value:a,onChange:o=>r(o.target.value)}),e.jsx("div",{children:e.jsx("textarea",{className:n.textarea,placeholder:"description",name:"description",id:"description"})}),e.jsx("div",{className:n.photo,children:s?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:f==null?void 0:f.toString(),alt:"image"}),e.jsx("div",{className:n.cross,onClick:()=>c(null),children:e.jsx(u,{})})]}):e.jsx(_,{type:"file",id:"postfile",onChange:o=>c(o.target.files[0]),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(ne,{}),"add photo"]})})}),e.jsx(A,{disabled:!a,type:"submit",variant:a?"Orange":"Gray",style:{position:"absolute",width:"100%",bottom:"0px"},children:"post"})]})]})})})},ce=()=>{const[t,i]=h.useState(),a=v(),r=s=>{s.target.files&&(i(s.target.files[0]),a(d(!0)))};return e.jsxs("div",{className:x.wrapper,children:[e.jsxs("div",{className:x.item,children:[e.jsxs(_,{id:"1",type:"file",onChange:s=>r(s),children:[e.jsx("h3",{children:"Photo"}),e.jsx(w,{})]}),e.jsx("div",{className:x.ml,children:e.jsxs(_,{id:"2",onClickShow:()=>a(d(!0)),type:"text",children:[e.jsx("h3",{children:"Text"}),e.jsx(K,{})]})})]}),e.jsx(re,{file:t})]})},de="_wrapper_ufhu1_1",pe="_blockAdd_ufhu1_5",he="_mr_ufhu1_11",fe="_title_ufhu1_20",me="_title2_ufhu1_31",xe="_right_ufhu1_36",_e="_left_ufhu1_46",ue="_recomendblog_ufhu1_51",l={wrapper:de,blockAdd:pe,mr:he,title:fe,title2:me,right:xe,left:_e,recomendblog:ue},Ce=()=>{const{avatar_url:t,id:i}=j(c=>c.auth.user),{data:a,isLoading:r}=R(i),s=[{text:"Following",name:"home",value:"following",onChange:()=>{}},{text:"Popular",name:"home",value:"popular",onChange:()=>{}},{text:"New",name:"home",value:"new",onChange:()=>{}}];return e.jsxs("div",{className:l.wrapper,children:[e.jsxs("div",{className:l.left,children:[e.jsxs("div",{className:l.blockAdd,children:[e.jsx("div",{className:l.mr,children:e.jsx(G,{width:70,height:70,url:H(t),userId:i})}),e.jsx(ce,{})]}),e.jsx(P,{tabs:s,id:i})]}),e.jsxs("div",{className:l.right,children:[e.jsx(I,{title:"Check out this blogs",profiles:a,loading:r}),e.jsxs("div",{children:[e.jsx("h2",{className:l.title2,children:"Recomended for you"}),e.jsx("div",{className:l.blog,children:e.jsx(L,{id:5,title:"Hooray",description:"Description of post 4",likes:40,liked:!1,img_url:"https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?cs=srgb&dl=pexels-alex-andrews-2295744.jpg&fm=jpg",time:"2 hours ago",comented:!1,folowed:!1,coments:[],userId:3})})]})]})]})};export{Ce as default};
