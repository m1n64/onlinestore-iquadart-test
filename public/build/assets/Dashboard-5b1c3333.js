import{o,b as u,e as l,t as v,y as pe,a as P,c as h,u as x,r as c,z as ve,A as _e,l as s,w as n,F as y,H as he,f,L as O,d as L,n as ge,g as j,v as W,m as ye,_ as X,B as xe}from"./app-dbf303d8.js";import{g as be,_ as ke}from"./cookies-adc1f27f.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as F,a as T}from"./SecondaryButton-c53e91d8.js";import{C as z}from"./CardComponent-9678e7c6.js";import{_ as we}from"./InputLabel-3e31e9f9.js";import{_ as B}from"./TextInput-538f18e4.js";import{_ as A}from"./PrimaryButton-baa692a1.js";import{i as Ce,a as $e,b as Se,_ as Le,o as Fe,f as Te}from"./MultimediaView-d123dd54.js";import"./AuthenticatedLayout-c3f2992c.js";const ze={name:"ProgressBar",props:{value:Number,maxValue:Number|String}},Be=["max","value"];function Ve(b,d,m,_,p,r){return o(),u("div",{class:"progress-container",style:pe("--percent-value:"+m.value+"%")},[l("progress",{max:m.maxValue,value:m.value},v(m.value)+"%",9,Be)],4)}const Z=ee(ze,[["render",Ve],["__scopeId","data-v-ba0da72c"]]),K={__name:"CloseButton",props:{buttonClick:{type:Function,default:()=>{}},additonal:null},setup(b){return(d,m)=>{const _=P("font-awesome-icon");return o(),h(_,{icon:"fa-regular fa-circle-xmark",class:"cursor-pointer hover:text-red-600",onClick:m[0]||(m[0]=p=>b.buttonClick(b.additonal))})}}},De={};function Ie(b,d){const m=P("font-awesome-icon");return o(),h(m,{icon:"fa-solid fa-circle-notch",class:"text-center text-4xl text-indigo-600",spin:""})}const Ne=ee(De,[["render",Ie]]),Me=["src"],Ue={__name:"PreviewFile",props:{link:{type:String,default:""},mimeType:{type:String,default:""}},setup(b){const d=b;return(m,_)=>{const p=P("font-awesome-icon");return x(Ce)(d.mimeType)?(o(),u("img",{key:0,class:"h-[45%] cursor-pointer",src:d.link},null,8,Me)):x($e)(d.mimeType)?(o(),h(p,{key:1,icon:"fa-regular fa-file-audio",class:"text-6xl cursor-pointer h-[45%]"})):x(Se)(d.mimeType)?(o(),h(p,{key:2,icon:"fa-regular fa-file-video",class:"text-6xl cursor-pointer h-[45%]"})):d.mimeType==="application/pdf"?(o(),h(p,{key:3,icon:"fa-regular fa-file-pdf",class:"text-6xl cursor-pointer h-[45%]"})):d.mimeType==="text/plain"?(o(),h(p,{key:4,icon:"fa-regular fa-file-lines",class:"text-6xl cursor-pointer h-[45%]"})):d.mimeType==="application/zip"?(o(),h(p,{key:5,icon:"fa-regular fa-file-zipper",class:"text-6xl cursor-pointer h-[45%]"})):(o(),h(p,{key:6,icon:"fa-regular fa-file",class:"text-6xl cursor-pointer h-[45%]"}))}}},Ae={class:"flex sm:flex-row flex-col justify-between"},Pe={class:""},Re=["disabled"],He={class:"flex justify-between"},Ee={class:"flex text-lg"},Oe={class:"px-2"},je={class:"px-2"},Ke={class:"my-3 cursor-pointer"},Ye={class:"flex flex-row sm:flex-row flex-col"},qe={class:"w-full"},Ge={class:"flex my-3 flex-wrap"},Je={class:"break-words"},Qe={class:"flex my-3 flex-wrap"},We=["onClick"],Xe={class:"break-words"},Ze={class:"w-[40%]"},ea={key:0,class:"text-center mt-[50%]"},aa={class:"flex"},la=l("div",{class:"font-bold text-lg mb-3"},"Information",-1),sa={class:"break-words"},ta={class:"flex flex-col my-2"},oa=["href","download"],ra=["disabled"],na={class:"flex w-full my-3 items-center justify-center text-center"},ia=l("label",{for:"assetsFieldHandle",class:"block cursor-pointer"},[l("div",null,[f(" Explain to our users they can drop files in here or "),l("span",{class:"underline"},"click here"),f(" to upload their files ")])],-1),da={key:0,class:"mt-4"},ua={class:"text-sm p-1"},ca={class:"w-full"},fa={class:"flex flex-row"},ma=["onClick"],$a={__name:"Dashboard",props:{folderSlug:{type:String,default:null},folders:{type:Array,default:[]},foldersBreadcrumbs:{type:Array,default:[]},files:{type:Array,default:[]}},setup(b){const d=b,m=c(d.folders),_=c(d.files),p=c(ve().props.value.auth.user.files_size),r=c({isLoaded:!1,id:-1,name:"",size:0,uploaded:Date.now().toLocaleString(),shared:!1,mimeType:"",downloadLink:"",sharingLink:""}),R=c(!1),S=c(""),H=c(!1),V=c(!1),D=c(!1),I=c(!1),k=c([]),E=c(null),ae=c(null),N=c(""),M=c(0),w=c(""),C=_e(),$={Authorization:`Bearer ${be("__token")}`},le=()=>{R.value=!0},Y=()=>{R.value=!1},se=()=>{H.value=!0,M.value=0},q=()=>{H.value=!1,M.value=0},G=a=>{V.value=!0,r.value.isLoaded=!1,axios.get("/api/share/isShared/"+a,{headers:$}).then(e=>{if(!e.data.success)return C.error(e.data.message);const i=_.value.find(U=>U.id===a);r.value={isLoaded:!0,id:a,name:i.name,size:i.size,uploaded:Te(i.created_at),shared:e.data.data.inSharing,mimeType:i.mime_type,downloadLink:i.full_file_path,sharingLink:route("share",{slug:i.slug})}})},te=()=>{V.value=r.value.isLoaded=!1},oe=()=>{axios.post("/api/folders/create",{name:S.value,folderSlug:d.folderSlug},{headers:$}).then(a=>{a.data.success&&(m.value.push(a.data.data),S.value="",Y())})},re=a=>{axios.delete("/api/folders/delete/"+a,{headers:$}).then(e=>{if(!e.data.success)return C.error(e.data.message);X.remove(m.value,i=>i.id===a)})},J=()=>{k.value=[...E.value.files]},ne=a=>{k.value.splice(a,1)},ie=a=>{a.preventDefault(),a.currentTarget.classList.contains("border-indigo-600")||(a.currentTarget.classList.remove("border-gray-300"),a.currentTarget.classList.add("border-indigo-600"))},Q=a=>{a.currentTarget.classList.add("border-gray-300"),a.currentTarget.classList.remove("border-progressValueRefindigo-600")},de=a=>{a.preventDefault(),E.value.files=a.dataTransfer.files,J(),Q(a)},ue=()=>{const a=new FormData;a.append("folderSlug",d.folderSlug),k.value.forEach((e,i)=>{a.append(`files[${i}]`,e)}),axios.post("/api/files/create",a,{headers:{...$,"Content-Type":"multipart/form-data"},onUploadProgress:e=>{M.value=parseInt(Math.round(e.loaded/e.total*100))}}).then(e=>{e.data.success||C.error(e.data.message),_.value.push(...e.data.data.files),p.value=e.data.data.userSize,q(),k.value=[]}).catch(e=>C.error(e.message))},ce=a=>{D.value=!0,axios.post("/api/share/"+a,{},{headers:$}).then(e=>{if(!e.data.success)return C.error(e.data.message);r.value.shared=e.data.data.inSharing})},fe=a=>{axios.post("/api/files/rename/"+a,{name:N.value},{headers:$}).then(e=>{if(!e.data.success)return C.error(e.data.message);r.value.name=e.data.data.name,_.value=_.value.map(i=>i.id===e.data.data.id?e.data.data:i),I.value=!1})},me=a=>{axios.delete("/api/files/delete/"+a,{headers:$}).then(e=>{if(!e.data.success)return C.error(e.data.message);r.value.id=-1,r.value.isLoaded=V.value=!1,p.value=e.data.data.userSize,X.remove(_.value,i=>i.id===a)})};return(a,e)=>{const i=P("font-awesome-icon"),U=xe("clipboard");return o(),u(y,null,[s(x(he),{title:"Main"}),s(ke,null,{default:n(()=>[l("div",Ae,[l("div",Pe,[l("button",{class:"btn sub",disabled:a.$page.props.auth.user.max_files_size>-1?p.value>=a.$page.props.auth.user.max_files_size:!1,onClick:se},[s(i,{icon:"fa-solid fa-plus"}),f(" Add file ")],8,Re),l("button",{class:"btn main",onClick:le}," Add folder ")]),l("div",He,[l("div",Ee,[l("span",Oe,v(p.value)+"MB",1),s(Z,{class:"w-[40vw] px-2 mt-2",value:a.$page.props.auth.user.max_files_size===-1?100:p.value,"max-value":a.$page.props.auth.user.max_files_size===-1?1:a.$page.props.auth.user.max_files_size},null,8,["value","max-value"]),l("span",je,[a.$page.props.auth.user.max_files_size>-1?(o(),u(y,{key:0},[f(v(a.$page.props.auth.user.max_files_size)+"MB ",1)],64)):(o(),h(i,{key:1,icon:"fa-solid fa-infinity"}))])])])]),l("div",null,[s(B,{id:"searchInDir",ref:"searchInDir",type:"text",class:"my-2 block w-full",placeholder:"Search files in this dir",modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=t=>w.value=t),onKeyup:e[1]||(e[1]=()=>{a.$refs.search.focus()})},null,8,["modelValue"])]),l("div",Ke,[s(x(O),{class:"font-bold hover:border-b-2 hover:border-solid hover:border-b-black",href:a.route("dashboard")},{default:n(()=>[f(" My documents ")]),_:1},8,["href"]),(o(!0),u(y,null,L(d.foldersBreadcrumbs,(t,g)=>(o(),u(y,{key:g},[s(i,{class:"mx-2",icon:"fa-solid fa-chevron-right"}),s(x(O),{class:ge(g===d.foldersBreadcrumbs.length-1?"text-gray-500 cursor-default":"hover:border-b-2 hover:border-solid hover:border-b-black"),href:a.route("dashboard",{folderSlug:t.slug})},{default:n(()=>[f(v(t.name),1)]),_:2},1032,["class","href"])],64))),128))]),l("div",Ye,[l("div",qe,[l("div",Ge,[(o(!0),u(y,null,L(m.value,(t,g)=>(o(),u("div",{class:"md:w-[25%] w-[50%] p-2",key:g},[s(K,{"button-click":re,additonal:t.id},null,8,["additonal"]),s(x(O),{class:"block float-left hover:text-indigo-600",href:a.route("dashboard",{folderSlug:t.slug})},{default:n(()=>[s(i,{icon:"fa-regular fa-folder",class:"text-6xl cursor-pointer"}),l("div",Je,v(t.name),1)]),_:2},1032,["href"])]))),128))]),l("div",Qe,[(o(!0),u(y,null,L(_.value,(t,g)=>(o(),u("div",{class:"md:w-[25%] w-[50%] h-[130px] p-2",key:g,onClick:pa=>G(t.id)},[l("span",null,[s(Ue,{link:t.full_file_path,"mime-type":t.mime_type},null,8,["link","mime-type"]),l("div",Xe,v(t.name),1)])],8,We))),128))])]),j(l("div",Ze,[r.value.isLoaded?(o(),u(y,{key:1},[l("div",aa,[l("div",null,[la,l("div",sa,"Name: "+v(r.value.name),1),l("div",null,"Size: "+v(r.value.size)+"MB",1),l("div",null,"Uploaded: "+v(r.value.uploaded),1),l("div",null,"Shared: "+v(r.value.shared?"Yes":"No"),1)]),l("div",null,[s(K,{"button-click":te})])]),s(Le,{link:r.value.downloadLink,"mime-type":r.value.mimeType},null,8,["link","mime-type"]),l("div",ta,[l("a",{href:r.value.downloadLink,download:r.value.name,class:"btn main my-2 text-center",target:"_self"},"Download",8,oa),l("button",{class:"btn main my-2",onClick:e[2]||(e[2]=()=>{I.value=!0,N.value=r.value.name})},"Rename "),l("button",{class:"btn main my-2",onClick:e[3]||(e[3]=t=>ce(r.value.id)),disabled:r.value.shared}," Share ",8,ra),j(l("a",{onClick:e[4]||(e[4]=t=>D.value=!0),class:"ml-2 cursor-pointer underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Forgot link?",512),[[W,r.value.shared]]),l("button",{class:"btn sub my-4",onClick:e[5]||(e[5]=t=>me(r.value.id))},"Delete")])],64)):(o(),u("div",ea,[s(Ne)]))],512),[[W,V.value]])]),s(F,{show:R.value},{default:n(()=>[s(z,{"head-text":"Create folder"},{default:n(()=>[s(we,{for:"folderName",value:"Enter folder name:",class:"sr-only"}),s(B,{id:"folderName",ref:"passwordInput",type:"text",class:"my-2 block w-3/4",placeholder:"folder name",modelValue:S.value,"onUpdate:modelValue":e[6]||(e[6]=t=>S.value=t)},null,8,["modelValue"]),s(T,{onClick:Y},{default:n(()=>[f("Close")]),_:1}),s(A,{onClick:oe,disabled:S.value.length===0},{default:n(()=>[f("Save")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["show"]),s(F,{show:H.value},{default:n(()=>[s(z,{"head-text":"Upload file"},{default:n(()=>[l("div",na,[l("div",{class:"p-12 bg-gray-100 rounded-lg border-2 border-gray-300",onDragover:ie,onDragleave:Q,onDrop:de},[l("input",{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",id:"assetsFieldHandle",class:"w-px h-px opacity-0 overflow-hidden absolute",onChange:J,ref_key:"filesList",ref:E},null,544),ia,k.value.length?(o(),u("ul",da,[(o(!0),u(y,null,L(k.value,t=>(o(),u("li",ua,[f(v(t.name)+" ",1),s(i,{icon:"fa-solid fa-xmark",class:"cursor-pointer ml-2 hover:text-red-600",onClick:g=>ne(k.value.indexOf(t))},null,8,["onClick"])]))),256))])):ye("",!0)],32)]),l("div",ca,[s(Z,{class:"w-[100%]","max-value":100,value:M.value},null,8,["value"])]),s(T,{onClick:q},{default:n(()=>[f("Close")]),_:1}),s(A,{onClick:ue,disabled:k.value.length===0},{default:n(()=>[f("Send")]),_:1},8,["disabled"])]),_:1})]),_:1},8,["show"]),s(F,{show:D.value},{default:n(()=>[s(z,{"head-text":"Sharing link"},{default:n(()=>[s(B,{type:"text",class:"my-2 block w-full",placeholder:"folder name",readonly:"",value:r.value.sharingLink},null,8,["value"]),j((o(),h(T,null,{default:n(()=>[f("Copy ")]),_:1})),[[U,r.value.sharingLink,"copy"],[U,()=>{x(C).success("Copied")},"success"]]),s(T,{onClick:e[7]||(e[7]=t=>x(Fe)(r.value.sharingLink))},{default:n(()=>[f("Open")]),_:1}),s(A,{onClick:e[8]||(e[8]=t=>D.value=!1)},{default:n(()=>[f("Close")]),_:1})]),_:1})]),_:1},8,["show"]),s(F,{show:I.value},{default:n(()=>[s(z,{"head-text":"Rename file"},{default:n(()=>[s(B,{id:"fileRenameInput",type:"text",class:"my-2 block w-full",placeholder:"File name",ref_key:"fileRenameInput",ref:ae,modelValue:N.value,"onUpdate:modelValue":e[9]||(e[9]=t=>N.value=t)},null,8,["modelValue"]),s(T,{onClick:e[10]||(e[10]=t=>I.value=!1)},{default:n(()=>[f("Close")]),_:1}),s(A,{onClick:e[11]||(e[11]=t=>fe(r.value.id))},{default:n(()=>[f("Save")]),_:1})]),_:1})]),_:1},8,["show"]),s(F,{show:w.value.length>0},{default:n(()=>[s(z,{"head-text":"Search files in current dir"},{default:n(()=>[l("div",fa,[s(B,{id:"search",type:"text",class:"my-2 block w-full",placeholder:"Search files in current dir",ref:"search",modelValue:w.value,"onUpdate:modelValue":e[12]||(e[12]=t=>w.value=t)},null,8,["modelValue"]),s(K,{class:"mt-5 px-2","button-click":()=>{w.value=""}},null,8,["button-click"])]),(o(!0),u(y,null,L(_.value.filter(t=>t.name.toLowerCase().indexOf(w.value.toLowerCase())>-1),(t,g)=>(o(),u("div",{key:g},[l("div",{class:"cursor-pointer font-bold my-2 border-b-2 border-solid border-b-gray-200",onClick:()=>{G(t.id),w.value=""}},v(t.name),9,ma)]))),128))]),_:1})]),_:1},8,["show"])]),_:1})],64)}}};export{$a as default};