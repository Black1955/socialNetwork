import{j as o,r as c}from"./index-5d0c194e.js";const l="#2f2f2f",d="#fff",f="#ffb94a",_="#818181",A="#bfbfbf",m="#d7d7d7",R="_input_fso5y_13",u="_item_fso5y_17",n={JET:l,"YELLOW-ORANGE":"#ff9900","BABY-POWDER":"#f3f4f0",WHITE:d,PALE_ORANGE:f,DARK_GRAY:_,GRAY:A,LIGHT_GRAY:m,input:R,item:u},j=({id:s,onClickShow:e,children:t,...a})=>o.jsx("div",{children:o.jsxs("div",{className:n.link,children:[o.jsx("input",{...a,id:s,className:n.input,accept:"image/png, image/jpeg, image/jpg"}),o.jsx("label",{htmlFor:s,className:n.item,onClick:e,children:t})]})}),E="_ModalWrapper_2dkhs_1",G="_visible_2dkhs_11",i={ModalWrapper:E,visible:G},x=({children:s,visible:e,...t})=>o.jsx("div",{...t,className:`${i.ModalWrapper} ${!e&&i.visible}`,children:s}),W=s=>{const[e,t]=c.useState(),a=new FileReader;return c.useEffect(()=>{s&&s instanceof File?a.onload=p=>{var r;t((r=p.target)==null?void 0:r.result)}:s&&t(s)},[s]),s&&s instanceof File&&a.readAsDataURL(s),[e]};export{j as A,x as M,W as u};
