import{u as r,j as a}from"./index-5d0c194e.js";import{P as n,a as i}from"./ProfileList-608cbfd5.js";const u=()=>{const e=[{nickname:"oleg",description:"hallo, I am oleg",id:1,avatar_url:""},{nickname:"aboba",description:"hallo, I am oleg",id:3,avatar_url:""},{nickname:"alex",description:"hallo, I am oleg",id:2,avatar_url:""},{nickname:"max",description:"hallo, I am oleg",id:5,avatar_url:""},{nickname:"aleX",description:"hallo, I am oleg",id:7,avatar_url:""},{nickname:"alwx",description:"hallo, I am oleg",id:8,avatar_url:""}],o=[{text:"Popular",name:"explore",value:"popular",onChange:()=>{}},{text:"New",name:"explore",value:"new",onChange:()=>{}},{text:"Your tags",name:"explore",value:"Your tags",onChange:()=>{}}],{id:l}=r(t=>t.auth.user);return a.jsxs("div",{children:[a.jsx(n,{profiles:e,title:"Check out  these blogs"}),a.jsx(i,{tabs:o,id:l})]})};export{u as default};