import{C as d,o as g,r as u,j as s,z as f}from"./index-5d0c194e.js";import{I as _}from"./InputPassword-476c4183.js";import{I as r}from"./Input-2c9cb845.js";const h="#2f2f2f",x="#fff",j="#ffb94a",E="#818181",A="#bfbfbf",N="#d7d7d7",v="_signUpForm_p1leg_12",w="_login_p1leg_23",G="_wrapper_p1leg_30",P="_inputEmail_p1leg_39",R="_inputPassword_p1leg_45",y="_logo_p1leg_51",b="_paragraf_p1leg_59",B="_minimum_p1leg_72",U="_formBtn_p1leg_77",T="_signUp_p1leg_12",e={JET:h,"YELLOW-ORANGE":"#ff9900","BABY-POWDER":"#f3f4f0",WHITE:x,PALE_ORANGE:j,DARK_GRAY:E,GRAY:A,LIGHT_GRAY:N,signUpForm:v,login:w,wrapper:G,inputEmail:P,inputPassword:R,logo:y,paragraf:b,minimum:B,formBtn:U,signUp:T},Y=()=>{const[i,{isLoading:o,data:n}]=d(),l=g(),t=async a=>{const c=a.currentTarget.elements.name.value,m=a.currentTarget.elements.email.value,p=a.currentTarget.elements.password.value;a.preventDefault(),await i({nickname:c,email:m,password:p})};return u.useEffect(()=>{n!=null&&n.access&&l("/")},[n]),o?s.jsx("h1",{children:"oleg"}):s.jsx("div",{className:e.signUpForm,children:s.jsx("form",{className:e.login,onSubmit:t,children:s.jsxs("div",{className:e.wrapper,children:[s.jsx("div",{className:e.logo,children:s.jsx("img",{src:f,alt:""})}),s.jsxs("div",{className:e.inputEmail,children:[s.jsx("h3",{children:"Name"}),s.jsx(r,{id:"name",variant:"Gray",border:"BorderWhite",placeholder:"Name"})]}),s.jsxs("div",{className:e.inputEmail,children:[s.jsx("h3",{children:"Email"}),s.jsx(r,{variant:"Gray",id:"email",border:"BorderWhite",placeholder:"Email"})]}),s.jsxs("div",{className:e.inputPassword,children:[s.jsx("h3",{children:"Password"}),s.jsx(_,{id:"password",border:"BorderWhite",placeholder:"Password"})]}),s.jsx("span",{className:e.minimum,children:"Minimum 6 characters"}),s.jsxs("p",{className:e.paragraf,children:["By clicking Agree & Join, you agree to the Flothy's"," ",s.jsx("span",{children:"User Agreement"})," ",s.jsx("span",{children:"Privacy Policy"})," and"," ",s.jsx("span",{children:"Cookie Policy"})," "]}),s.jsx("button",{className:e.formBtn,children:"Agree & Join "}),s.jsxs("p",{className:e.signUp,children:["Already on Fluffy's? ",s.jsx("span",{children:"Login"})]})]})})})};export{Y as default};