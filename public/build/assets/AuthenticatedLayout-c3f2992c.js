import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";import{o as a,b as p,e,i as B,j as N,k as v,r as z,h as f,g as k,v as $,l as r,w as o,n as u,u as c,T as S,c as y,L as _,f as d,m as C,t as b}from"./app-dbf303d8.js";const j={},D={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E=e("path",{d:"M304 344c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24c13.26 0 24-10.75 24-24C328 354.7 317.3 344 304 344zM448 32h-384c-35.35 0-64 28.65-64 64v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96C512 60.65 483.3 32 448 32zM464 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-96c0-8.822 7.178-16 16-16h384C456.8 304 464 311.2 464 320V416zM464 258.3C458.9 256.9 453.6 256 448 256H64C58.44 256 53.14 256.9 48 258.3V96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V258.3zM400 344c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24c13.26 0 24-10.75 24-24C424 354.7 413.3 344 400 344z"},null,-1),A=[E];function O(n,s){return a(),p("svg",D,A)}const T=V(j,[["render",O]]),H={class:"relative"},P={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(n){const s=n,t=g=>{l.value&&g.key==="Escape"&&(l.value=!1)};B(()=>document.addEventListener("keydown",t)),N(()=>document.removeEventListener("keydown",t));const i=v(()=>({48:"w-48"})[s.width.toString()]),m=v(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=z(!1);return(g,h)=>(a(),p("div",H,[e("div",{onClick:h[0]||(h[0]=w=>l.value=!l.value)},[f(g.$slots,"trigger")]),k(e("div",{class:"fixed inset-0 z-40",onClick:h[1]||(h[1]=w=>l.value=!1)},null,512),[[$,l.value]]),r(S,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[k(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[c(i),c(m)]]),style:{display:"none"},onClick:h[2]||(h[2]=w=>l.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[f(g.$slots,"content")],2)],2),[[$,l.value]])]),_:3})]))}},L={__name:"DropdownLink",setup(n){return(s,t)=>(a(),y(c(_),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[f(s.$slots,"default")]),_:3}))}},M={__name:"NavLink",props:["href","active"],setup(n){const s=n,t=v(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(a(),y(c(_),{href:n.href,class:u(c(t))},{default:o(()=>[f(i.$slots,"default")]),_:3},8,["href","class"]))}},x={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const s=n,t=v(()=>s.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,m)=>(a(),y(c(_),{href:n.href,class:u(c(t))},{default:o(()=>[f(i.$slots,"default")]),_:3},8,["href","class"]))}},U={class:"min-h-screen bg-gray-100"},R={class:"bg-white border-b border-gray-100"},q={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},F={class:"flex justify-between h-16"},G={class:"flex"},I={class:"shrink-0 flex items-center"},J={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},K={key:0,class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Q={class:"hidden sm:flex sm:items-center sm:ml-6"},W={class:"ml-3 relative"},X={class:"inline-flex rounded-md"},Y={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},Z=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ee={class:"-mr-2 flex items-center sm:hidden"},te={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},se={class:"pt-2 pb-3 space-y-1"},oe={class:"pt-4 pb-1 border-t border-gray-200"},ne={class:"px-4"},re={class:"font-medium text-base text-gray-800"},ae={class:"font-medium text-sm text-gray-500"},ie={class:"mt-3 space-y-1"},le={key:0,class:"bg-white shadow"},de={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},fe={__name:"AuthenticatedLayout",setup(n){const s=z(!1);return(t,i)=>(a(),p("div",null,[e("div",U,[e("nav",R,[e("div",q,[e("div",F,[e("div",G,[e("div",I,[r(c(_),{href:t.route("startup")},{default:o(()=>[r(T,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",J,[r(M,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[d(" Storage ")]),_:1},8,["href","active"])]),t.$page.props.auth.user.role==="A"?(a(),p("div",K,[r(M,{href:t.route("admin.users"),active:t.route().current("admin.users")},{default:o(()=>[d(" Users ")]),_:1},8,["href","active"])])):C("",!0)]),e("div",Q,[e("div",W,[r(P,{align:"right",width:"48"},{trigger:o(()=>[e("span",X,[e("button",Y,[d(b(t.$page.props.auth.user.name)+" ",1),Z])])]),content:o(()=>[r(L,{href:t.route("profile.edit")},{default:o(()=>[d(" Profile ")]),_:1},8,["href"]),r(L,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[d(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",ee,[e("button",{onClick:i[0]||(i[0]=m=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(a(),p("svg",te,[e("path",{class:u({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",se,[r(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[d(" Storage ")]),_:1},8,["href","active"])]),e("div",oe,[e("div",ne,[e("div",re,b(t.$page.props.auth.user.name),1),e("div",ae,b(t.$page.props.auth.user.email),1)]),e("div",ie,[r(x,{href:t.route("profile.edit")},{default:o(()=>[d(" Profile ")]),_:1},8,["href"]),r(x,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[d(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(a(),p("header",le,[e("div",de,[f(t.$slots,"header")])])):C("",!0),e("main",null,[f(t.$slots,"default")])])]))}};export{fe as _};
