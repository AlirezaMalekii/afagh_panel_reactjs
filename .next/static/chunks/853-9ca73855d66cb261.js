(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[853],{58761:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/logo.2a923b68.webp",height:232,width:300,blurDataURL:"data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAVWc7Oi8AAQBikrWUUxEAApfMwapCDgAAdKuMxLVCKCsLRNbBfYZwNgEHVkNNXEcdAFZQOCBIAAAA0AEAnQEqCAAGAAJAOCWwAnQBDwwEP0AA/v4xy7ll3cDDEAXrvLQNOtuY0dHaYT8Ssro8vIOotEntDD7AXs0hxfPXml+qxAAA",blurWidth:8,blurHeight:6}},70853:function(e,t,n){"use strict";n.d(t,{Z:function(){return W}});var i=n(85893),o=n(1954),s=n(9008),r=n.n(s),l=n(67294),a=n(14111),c=n(62222),d=n(22815);n(57343),n(29297);var u=n(41664),p=n.n(u),_=n(11163),h=n(52056),m=n(51751);let{Column:v,HeaderCell:g,Cell:x}=m.Z,f=e=>{let{Solver:t}=null!=e?e:[];return(0,i.jsxs)("div",{className:"rs-flex-col",children:[(0,i.jsx)("div",{className:"rs-flex-end",children:(0,i.jsx)("button",{className:"rs-btn-ghost rs-btn-red custom-btn",onClick:()=>void t.Page.modal({header:"افزودن جلسه جدید",body:(0,i.jsx)("div",{className:""})}),children:"افزودن جلسه"})}),(0,i.jsx)(m.Z,{virtualized:!0,data:[{id:1,title:"1",date:"2",record:"shit",start_auto_record:"fuck",guest:"oh yea",status:"off"}],children:[{title:"#",type:"id"},{title:"عنوان جلسه",type:"title",align:"right"},{title:"تاریخ ایجاد",key:"created_at",type:"date"},{title:"ضبط",type:"record"},{title:"شروع ضبط اتوماتیک",type:"start_auto_record"},{title:"مهمان",type:"guest"},{title:"وضعیت",type:"status"},{title:"عملیات ها",type:"actions",actions:[{key:"edit"},{key:"delete",url:"courses"}]}].map((e,t)=>(0,i.jsxs)(v,{width:120,align:"center",fixed:!0,children:[(0,i.jsx)(g,{children:e.title}),(0,i.jsx)(x,{dataKey:e.type})]}))})]})};var j=n(35585),b=n(17669);function k(e){let{steps:t,content:n,page:o}=e,{p:s,u:r}=null!=o?o:{};return(0,i.jsx)("div",{className:"".concat(b.wrapper),children:Object.keys(t).length>1&&(0,i.jsx)("div",{className:"".concat(b.steps),id:"steps",children:(0,i.jsx)("div",{className:"".concat(b.steps_container),children:(0,i.jsx)(j.Z,{small:!0,className:"".concat(b.steps_comp),id:"steps_container",children:null==t?void 0:t.map((e,o)=>{let l=null==n?void 0:n[e];return console.log(l),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(p(),{href:{query:{...s.Router.query.get(),step:o+1}},children:(0,i.jsx)(j.Z.Item,{title:"".concat(null==l?void 0:l.label),stepNumber:r.toPe(o+1),status:"".concat(s.Router.query.get("step")>o+1?"wait":s.Router.query.get("step")===o+1+""||void 0===s.Router.query.get("step")&&0===o?"process":"wait"),className:"".concat(b.step," ").concat(void 0===s.Router.query.get("step")&&0===o||s.Router.query.get("step")===o+1+""?b.current:""," cursor-pointer transition-colors")},"step-".concat(o,"-").concat(e))}),o+1!==Object.keys(t).length&&(0,i.jsx)("div",{className:"".concat(b.steps_spacer)})]})})})})})})}var y=n(20199),w=n(61603),N=n(48936);function A(e){let{data:t,Solver:n,View:s}=e,r=e=>{var t,o,r,c;let[d,u]=l.useState(),[p,_]=l.useState({ep:null,s:0});return(0,i.jsx)(s,{structure:{tabs:{data:[{label:"ایجاد قسمت",disabled:p.s,disabled_message:"شما قبلا قسمت را ساخته اید",content:{form:{config:{url:"episodes",initial:{title:"",description:"",body:"",section_id:(null==e?void 0:null===(t=e.e)||void 0===t?void 0:t.id)+"",type:"open",published:1},callback(e){var t,n;_({ep:null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(n=t.episode)||void 0===n?void 0:n.id,s:1}),setTimeout(()=>{a.push({query:{...a.query,tab:1}})},1e3)}},structure:[[{input:{name:"title",placeholder:"نام قسمت"}},{input:{name:"description",placeholder:"توضیح مختصر",addon:{last:{prompt:"SP-counter-150"}}},flex:2}],[{input:{name:"body",placeholder:"توضیحات تکمیلی",type:"textarea"}}]]}}},{label:"محتوا و مدیا",content:{form:{config:{noBtn:!0},structure:[[{toggle:{prompt:"افزودن ویدیو",state:null==d?void 0:d.video,setState:e=>u({...d,video:e}),on:{form:{config:{noBtn:!0},structure:[[{toggle:{prompt:"آپلود ویدیو",state:!0,setState(e){},on:{form:{config:{url:"upload-public-video-file",initial:{file:{}},content_type:"multipart/form-data",callback(e){var t,i,o,s;let r=null==e?void 0:null===(t=e.data)||void 0===t?void 0:null===(i=t.data)||void 0===i?void 0:i.videoUrl,l=null==e?void 0:null===(o=e.data)||void 0===o?void 0:null===(s=o.data)||void 0===s?void 0:s.videoTime;n.Request({config:{url:"videos",method:"post",req_data:{time:l,videoUrl:r,driver:"sftp",type:"lock",episode_id:p},push_notif:!1},dependencies:{}})}},structure:[[{upload:{name:"file",prompt:"ویدیو را انتخاب کنید"}}]]}},off:{form:{config:{url:"videos",initial:{videoUrl:"",time:"00:00:00",episode_id:null==p?void 0:null===(o=p.ep)||void 0===o?void 0:o.id,driver:"sftp",type:"open"}},structure:[[{input:{placeholder:"لینک ویدیو",name:"videoUrl"}}],[{input:{name:"time",addon:{first:{prompt:"مدت زمان"},last:{prompt:"ث:د:س"}},masked:!0,showMask:!0,guide:!0,placeholderChar:"۰",mask:[/[\u06F0-\u06F90-9]/,/[\u06F0-\u06F90-9]/,":",/[\u06F0-\u06F90-9]/,/[\u06F0-\u06F90-9]/,":",/[\u06F0-\u06F90-9]/,/[\u06F0-\u06F90-9]/],keepCharPositions:!0,direction:"ltr"}}]]}}}}]]}}}}],[{toggle:{prompt:"افزودن PDF",state:null==d?void 0:d.pdf,setState:e=>u({...d,pdf:e}),on:{form:{config:{noBtn:!0},structure:[[{toggle:{prompt:"آپلود فایل PDF",state:null==d?void 0:d.pdf_upl,setState:e=>u({}),on:{form:{config:{url:"upload-file",initial:{file:{},extension:"pdf",episode_id:p,driver:"sftp",type:"open"},content_type:"multipart/form-data",callback(e){let{data:t}=null!=e?e:{},{fileUrl:i,fileExtension:o}=null!=t?t:{};n.Request({config:{url:"files",method:"post",req_data:{fileUrl:i,extension:o,driver:"sftp",type:"open",episode_id:p},push_notif:!1},dependencies:{}})}},structure:[[{upload:{name:"file",prompt:"فایل را انتخاب کنید"}}]]}},off:{form:{config:{url:"files",initial:{fileUrl:"",extension:"pdf",episode_id:p,driver:"sftp",type:"open"}},structure:[[{input:{placeholder:"لینک PDF",name:"fileUrl"}}]]}}}}]]}}}}],[{toggle:{prompt:"افزودن فایل صوتی",state:null==d?void 0:d.voice,setState:e=>u({...d,voice:e}),on:{form:{config:{noBtn:!0},structure:[[{toggle:{prompt:"آپلود فایل صوتی",state:!0,setState:e=>u({}),on:{form:{config:{url:"upload-file",initial:{file:{},extension:"mp3",episode_id:null==p?void 0:null===(r=p.ep)||void 0===r?void 0:r.id,driver:"sftp",type:"open"},content_type:"multipart/form-data",callback(e){var t;let{data:i}=null!=e?e:{},{fileUrl:o,fileExtension:s}=null!=i?i:{};n.Request({config:{url:"files",method:"post",req_data:{fileUrl:o,extension:s,driver:"sftp",type:"open",episode_id:null==p?void 0:null===(t=p.ep)||void 0===t?void 0:t.id},push_notif:!1},dependencies:{}})}},structure:[[{upload:{name:"file",prompt:"فایل را انتخاب کنید"}}]]}},off:{form:{config:{url:"files",initial:{fileUrl:"",extension:"mp3",episode_id:null==p?void 0:null===(c=p.ep)||void 0===c?void 0:c.id,driver:"sftp",type:"open"}},structure:[[{input:{placeholder:"لینک فایل صوتی",name:"fileUrl"}}]]}}}}]]}}}}]]}},disabled:!p.s,disabled_message:"برای دسترسی به این بخش اول قسمت را ایجاد کنید"}],form:!0}}})},a=(0,_.useRouter)(),{cu:d}=null!=t?t:{},u=null==d?void 0:d.sections,[p,h]=l.useState({a:u,reverse:!1}),[m,v]=l.useState();return l.useEffect(()=>{p.reverse||h({a:u.reverse(),reverse:!0})}),d?(null==d?void 0:d.sections)&&(0,i.jsxs)("div",{className:"",children:[(0,i.jsxs)("div",{className:"".concat(N.add),onClick:()=>n.Page.modal({header:"افزودن سرفصل جدید",body:(0,i.jsx)(w.Z,{config:{url:"sections",initial:{course_id:(null==d?void 0:d.id)+"",title:"",number:1},callback:e=>a.reload()},structure:[[{input:{name:"title",placeholder:"نام سرفصل"}}]]})}),children:[(0,i.jsx)(o.JO,{icon:"ic:round-plus",height:"48"}),(0,i.jsx)("strong",{children:(0,i.jsx)("small",{children:"ایجاد سرفصل جدید"})})]}),(0,i.jsx)(s,{structure:{accord:{entries:null==p?void 0:p.a,inside:{data_info:{url:"sections"},view:{config:{},structure:{table:{fillHeight:!0,columns:[{title:"#",type:"id",key:"id"},{title:"عنوان قسمت",type:"title",key:"title"},{title:"ویدیو",type:"dependencies",key:"video_url"},{title:"صوت",type:"dependencies",key:"mp3_url"},{title:"PDF",type:"dependencies",key:"pdf_url"},{title:"عملیات ها",type:"actions"}]}}}},ctas:[{prompt:"افزودن قسمت",color:"blue",onClick(e){n.Page.modal({header:"افزودن قسمت به '".concat(e.title,"'"),body:(0,i.jsx)(r,{e:e})})}},{prompt:"حذف سرفصل",color:"red",onClick(e){n.Request({config:{url:"sections/".concat(e.id),method:"DELETE"}}).then(e=>200===e.status&&window.location.reload()),window.location.reload}}]}},Solver:n})]}):(0,i.jsx)(c.Z,{center:!0})}n(73573);var R=n(66157),S=n(73265),O=n(81915),q=n(21983);function Z(e){let{Solver:t,title:n,toggle:o,additional:s}=e;return(0,i.jsx)("div",{className:"".concat(q.wrapper),children:(0,i.jsxs)("div",{className:"".concat(q.content),children:[(0,i.jsx)("div",{className:"".concat(q.path),children:t.Router.path.get("all")&&t.Router.path.get("all").map((e,n)=>{var o;return(0,i.jsx)("span",{className:"".concat(t.Router.path.get("all").pop()===e?q.active:""),children:"".concat(n>0?" › ":"").concat(null===(o=(e=>{let t;switch(e){case"super-admin":case"user":t={text:"پنل",link:"./"};break;case"view":t={text:"مشاهده جزئیات",link:"./view"};break;case"failed_pay":t={text:"پرداخت ناموفق",link:"./failed_pay"};break;case"study":t={text:"کلاس درس",link:"./study"};break;case"success_pay":t={text:"پرداخت موفق",link:"./success_pay"};break;case"invoices":t={text:"پرداخت ها",link:"./invoices"};break;case"practices":t={text:"حل تمرین",link:"./practices"};break;case"courses":t={text:"دوره ها",link:"./courses"};break;case"organizations":t={text:"موسسه ها",link:"./organizations"};break;case"users":t={text:"کاربران",link:"./users"};break;case"classrooms":t={text:"کلاس ها",link:"./classrooms"};break;case"categories":t={text:"دسته بندی ها",link:"./categories"};break;case"create":t={text:"ایجاد",link:null};break;case"edit":t={text:"ویرایش",link:null};break;case"overview":t={text:"مشاهده",link:null};break;case"edit_user_profile":t={text:"ویرایش اطلاعات کاربری",link:null};break;case"change_password":t={text:"تغییر رمز عبور",link:null};break;case"discounts":t={text:"تخفیفات",links:null};break;default:t={text:"",link:null}}return t})(e))||void 0===o?void 0:o.text," ")},"path-".concat(n))})}),(0,i.jsxs)("div",{className:"".concat(q.title),children:[(0,i.jsxs)("div",{className:"".concat(q.heading),children:[(0,i.jsx)("h1",{className:"".concat(q.heading_tag),children:"string"==typeof n?t.Convert.toPe(null!=n?n:"عنوان صفحه"):null!=n?n:""}),s&&(0,i.jsxs)("div",{className:"".concat(q.badge),children:[(0,i.jsx)("small",{className:"".concat(q.header_slash),children:"/"}),(0,i.jsx)(S.Z,{color:"عضو هستید"===s?"green":"عضو نیستید"===s?"red":"violet",children:(0,i.jsx)("strong",{children:t.Convert.toPe(null!=s?s:"")})})]})]}),(0,i.jsx)("div",{className:"".concat(q.toggle),children:o&&(0,i.jsxs)("div",{style:{display:"grid",gridAutoFlow:"column",columnGap:".35rem",alignItems:"center",justifyContent:"center"},children:[(0,i.jsx)("label",{children:(0,i.jsx)("strong",{className:"".concat("1"===t.Router.query.get("toggle")?"":q.current),children:null==o?void 0:o.off})}),(0,i.jsx)(O.Z,{size:"md",checked:"1"===t.Router.query.get("toggle"),onChange:e=>t.Router.query.set("toggle",e?1:0)}),(0,i.jsx)("label",{children:(0,i.jsx)("strong",{className:"".concat("1"===t.Router.query.get("toggle")?q.current:""),children:null==o?void 0:o.on})})]})})]})]})})}var L=n(73250),C=n(58761),E=n(25675),F=n.n(E),J=n(96210),P=n(92297),B=n(823);function U(e){let{links:t,prompt:n,icon:o,page:s,href:r}=e,a=(0,l.useId)(),c=()=>null==t?void 0:t.map((e,t)=>{let{prompt:n,href:o}=null!=e?e:{};return(0,i.jsx)(p(),{href:"/".concat(null!=r?r:"","/").concat(null!=o?o:""),children:(0,i.jsx)("strong",{children:null!=n?n:""})},"link-".concat(r,"-").concat(t))});return(0,i.jsx)("div",{className:"".concat(B.wrapper),children:(0,i.jsx)(P.Z,{trigger:"click",placement:"left",speaker:(0,i.jsx)(J.Z,{arrow:!1,className:B.drop_mother,children:(0,i.jsx)(c,{})}),onEntering(){let e=document.getElementById(a);return e.className="".concat(B.link," ").concat(B.action_detector)},onExiting(){let e=document.getElementById(a);return e.className="".concat(B.link)},children:(0,i.jsxs)("div",{className:"".concat(B.link),id:null!=a?a:"",children:[(0,i.jsx)("div",{className:"".concat(B.icon),children:null!=o?o:""}),(0,i.jsx)("div",{className:"".concat(B.prompt),children:(0,i.jsx)("strong",{children:null!=n?n:""})})]})})})}var D=n(11860),Q=n.n(D);function I(e){var t;let{page:n,collapsed:s,Solver:r}=e,a=(0,_.useRouter)(),c=Q(),[d,u]=l.useState("");l.useEffect(()=>{var e,t,n;!d&&(null===(e=c.get("user"))||void 0===e?void 0:e.role)&&u(null!==(n=null===(t=c.get("user"))||void 0===t?void 0:t.user_name)&&void 0!==n?n:"")},[c,d]);let h=(e,t)=>{var n;let{onClose:o,left:s,top:r,className:l,...d}=e;return(0,i.jsxs)(J.Z,{ref:t,className:l+" "+B.drop_mother,style:{left:s,top:r},full:!0,children:[(0,i.jsx)(p(),{href:"/".concat(a.pathname.split("/")[1],"/change_password"),children:(0,i.jsx)("strong",{children:"تغییر رمز عبور"})}),(null===(n=c.get("user"))||void 0===n?void 0:n.role)&&(0,i.jsx)(p(),{href:"/".concat(a.pathname.split("/")[1],"/edit_user_profile"),children:(0,i.jsx)("strong",{children:"ویرایش پروفایل"})})]})},[m,v]=l.useState(),g=async()=>{await r.Request({config:{isLogout:!0,method:"post"},dependencies:{}}).then(e=>200===e.status&&a.push("/"))};return l.useEffect(()=>{var e,t;let n=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return e?[{prompt:"مشاهده",href:"/"},{prompt:"ایجاد",href:"/create"}]:[{prompt:"مشاهده",href:"/"}]},s=(null===(e=c.get("user"))||void 0===e?void 0:e.role)?(null===(t=c.get("user"))||void 0===t?void 0:t.role)!=="user"?[{links:n(),prompt:"دوره ها",href:"/super-admin/courses/",icon:(0,i.jsx)(o.JO,{icon:"carbon:course",color:"white",height:"22"})},{links:n(),prompt:"تخفیفات",href:"/super-admin/discounts/",icon:(0,i.jsx)(o.JO,{icon:"ic:round-discount",color:"white",height:"22"})},{links:n(),prompt:"کلاس ها",href:"/super-admin/classrooms",icon:(0,i.jsx)(o.JO,{icon:"carbon:group-presentation",color:"white",height:"22"})},{links:n(),prompt:"موسسه ها",href:"/super-admin/organizations",icon:(0,i.jsx)(o.JO,{icon:"carbon:building-insights-2",color:"white",height:"22"})},{links:n(!1),prompt:"پرداخت ها",href:"/super-admin/invoices",icon:(0,i.jsx)(o.JO,{icon:"ic:round-payments",color:"white",height:"22"})},{links:n(),prompt:"کاربران",href:"/super-admin/users",icon:(0,i.jsx)(o.JO,{icon:"ic:round-supervised-user-circle",color:"white",height:"22"})},{links:n(),prompt:"دسته بندی ها",href:"/super-admin/categories",icon:(0,i.jsx)(o.JO,{icon:"carbon:collapse-categories",color:"white",height:"22"})}]:[{links:n(),prompt:"دوره ها",href:"/user/courses/",icon:(0,i.jsx)(o.JO,{icon:"carbon:course",color:"white",height:"22"})},{links:n(),prompt:"آزمون آنلاین",href:"/user/online_exam",icon:(0,i.jsx)(o.JO,{icon:"bi:list-check",color:"white",height:"22"})}]:[];JSON.stringify(s)!==JSON.stringify(m)&&v(s)},[c,m]),(0,i.jsxs)("aside",{className:"".concat(L.wrapper," ").concat(s?L.collapsed:""),children:[(0,i.jsx)("div",{className:"".concat(L.logo_wrapper),children:(0,i.jsx)("div",{className:"".concat(L.logo_container),children:(0,i.jsx)(F(),{src:C,alt:"Afagh Logo",className:L.logo,layout:"fill"})})}),(0,i.jsx)("div",{className:"".concat(L.links_container),children:(0,i.jsx)("div",{className:"".concat(L.links),children:m&&m.map((e,t)=>(0,l.createElement)(U,{...e,page:n,key:"link-".concat(t)}))})}),(0,i.jsxs)("div",{className:"".concat(L.user),children:[(0,i.jsx)("div",{className:"".concat(L.user_profile),children:(0,i.jsx)("div",{className:"".concat(L.profile_container)})}),(0,i.jsx)("div",{className:"".concat(L.user_info),children:(0,i.jsx)("strong",{children:null!=d?d:""})}),(0,i.jsxs)("div",{className:"".concat(L.utils),children:[(0,i.jsx)("div",{className:"".concat(L.settings),children:(0,i.jsx)(P.Z,{placement:"auto",trigger:(null===(t=c.get("user"))||void 0===t?void 0:t.role)==="user"?"click":"none",speaker:h,children:(0,i.jsx)(o.JO,{icon:"carbon:settings",color:"white",width:20})})}),(0,i.jsx)("div",{className:"".concat(L.logout),onClick:()=>g(),children:(0,i.jsx)(o.JO,{icon:"carbon:power",color:"white",width:20})})]})]})]})}var W=l.memo(function(e){var t,n,s;let{content:u,solve:m,header:v,overlay:g}=null!=e?e:{},x=(0,l.useMemo)(()=>(function(e){var t,n,s,r,l,d;let u=(0,_.useRouter)();console.log(e);let{isCustom:m,btn:v,title:g,view:x,form:j,search:b=!1,loader:N,sections:S,handCrafted:O}=null!==(s=null==e?void 0:e["step".concat((null===(t=u.query)||void 0===t?void 0:t.step)?+u.query.step-1:0)])&&void 0!==s?s:{},{loader:q}=null!=e?e:{},Z=e.Solver,L=e=>(0,i.jsx)(w.Z,{...e,Solver:Z});return(0,i.jsxs)("div",{className:"".concat(h.wrapper),children:[(0,i.jsxs)("div",{className:"".concat(h.upper),children:[(null==e?void 0:e.step1)&&(0,i.jsx)(k,{steps:Object.keys(e).filter(e=>null!==(r=e.includes("step"))&&void 0!==r?r:[]),content:e,page:{p:Z,u:Z.Convert}}),x&&b&&(0,i.jsx)(y.Z,{className:h.search,type:"search",defaultValue:null!==(l=null===(n=u.query)||void 0===n?void 0:n.s)&&void 0!==l?l:"",addon:{first:{prompt:"جستجو"},last:{icon:(0,i.jsx)(o.JO,{icon:"ic:round-search",height:"24"})}}}),v&&(0,i.jsx)(a.Z,{className:"".concat(h.btn),children:(null==v?void 0:v.action)==="create"?(0,i.jsx)(p(),{href:"".concat(Z.Router.path.get(),"/create"),children:(0,i.jsxs)("span",{className:"".concat(h.btn_container),children:[(0,i.jsxs)("strong",{children:["ایجاد ",null==v?void 0:v.prompt," جدید"]}),(0,i.jsx)("div",{className:"".concat(h.icon),children:(0,i.jsx)(o.JO,{icon:"ic:round-add",height:"32"})})]})}):(0,i.jsx)(p(),{href:null!==(d=null==v?void 0:v.href)&&void 0!==d?d:Z.Router.path.get().replace("create","").replace("edit","").replace("view","").replace("study",""),children:(0,i.jsxs)("span",{className:"".concat(h.btn_container),children:[(0,i.jsx)("strong",{children:"بازگشت"}),(0,i.jsx)("div",{className:"".concat(h.icon),children:(0,i.jsx)(o.JO,{icon:"ic:round-arrow-back-ios-new",height:"24"})})]})})}),g&&(0,i.jsx)("h3",{children:g})]}),(0,i.jsxs)("div",{className:"".concat(h.content),children:[x&&!m&&(0,i.jsx)(R.Z,{...x,Solver:Z})," ",j&&!m&&(0,i.jsx)(L,{...j}),(N||q)&&(0,i.jsx)(c.Z,{center:!0}),S&&!m&&(0,i.jsx)(A,{...S,Solver:Z,View(e){let{structure:t}=e;return(0,i.jsx)(R.Z,{structure:t,Solver:Z})}}),m&&(0,i.jsx)(f,{data:e.step4,Solver:solver}),null!=O?O:""]})]})})({...u,Solver:m}),[u]),[j,b]=(0,l.useState)(!1),[N,S]=(0,l.useState)(!1);return(0,i.jsxs)("div",{className:"".concat(d.wrapper),suppressHydrationWarning:!0,children:[(0,i.jsx)(r(),{children:(0,i.jsxs)("title",{children:[null!==(s=null!==(n=null==v?void 0:v.metaTitle)&&void 0!==n?n:null==v?void 0:v.title)&&void 0!==s?s:""," | بنیاد آفاق"]})}),(0,i.jsxs)("div",{className:"".concat(d.container),children:[(0,i.jsx)("div",{className:d.side,children:(0,i.jsx)(a.Z,{appearance:"primary",style:{display:"flex",aspectRatio:"1/1",alignItems:"center",borderRadius:"100rem",padding:"1rem"},onClick:()=>b(!j),children:(0,i.jsx)(o.JO,{icon:j?"ic:round-close":"ic:round-menu",color:"white"})})}),(null===(t=m.Router.path.get("all"))||void 0===t?void 0:t.pop())==="study"&&(0,i.jsx)("div",{className:d.study,style:{bottom:N?"2rem":null,zIndex:N?1e5:null,width:"fit-content",top:N?"unset":null},children:(0,i.jsx)(a.Z,{appearance:"primary",style:{display:"flex",aspectRatio:"1/1",alignItems:"center",borderRadius:"100rem",padding:"1rem",width:"fit-content"},onClick:()=>S(!N),children:(0,i.jsx)(o.JO,{icon:N?"ic:round-close":"ic:round-menu",color:"white"})})}),(0,i.jsx)("div",{className:"".concat(d.sidebar," ").concat(j?d.side_open:""),children:(0,i.jsx)(I,{Solver:m})}),(0,i.jsxs)("div",{className:"".concat(d.content_container),style:{"--overlay":g?"33.5%":"","--open":N?"block":"none"},children:[(0,i.jsx)(Z,{...v,Solver:m}),(0,i.jsxs)("div",{className:"".concat(d.content),children:[(null==u?void 0:u.loading)?(0,i.jsx)(c.Z,{}):x," ",null!=g?g:""]})]})]})]})})},29297:function(e,t,n){"use strict";var i=n(85893);n(73573);let o=e=>{var t,n;let{sec:o,ep:s,data:r,drawer:l=!1}=e,a=Array.isArray(null==r?void 0:r.sections)&&(r.sections.find(e=>+(null==e?void 0:e.id)==+o)||(null==r?void 0:null===(t=r.sections)||void 0===t?void 0:t[0])),c=Array.isArray(null==a?void 0:a.episode)&&(null==a?void 0:a.episode.find(e=>+(null==e?void 0:e.id)==+s))||(null==a?void 0:null===(n=a.episode)||void 0===n?void 0:n[0]),{title:d,id:u}=null!=a?a:{},{body:p,description:_,title:h,mp3_url:m,pdf_url:v,video_url:g}=null!=c?c:{};return l?(0,i.jsx)("div",{style:{backgroundColor:"black",height:"100%"}}):void 0!==u&&{section:{title:d,id:u},episode:{epTitle:h,description:_,body:p,mp3_url:m,pdf_url:v,video_url:g}}};t.Z=o},823:function(e){e.exports={wrapper:"dropdownLink_wrapper__caNn4",link:"dropdownLink_link__42raM",icon:"dropdownLink_icon__6Lr_7",prompt:"dropdownLink_prompt__j_Trq",action_detector:"dropdownLink_action_detector__rz0Zc",drop_mother:"dropdownLink_drop_mother___4VhX",drop:"dropdownLink_drop__pFaDn",drop_item:"dropdownLink_drop_item__VIxFQ",drop_item_icon:"dropdownLink_drop_item_icon__C_qua",logo_container:"dropdownLink_logo_container__4XoOq",logo:"dropdownLink_logo__HSypo"}},17669:function(e){e.exports={wrapper:"steps_wrapper__lNn5W",overview:"steps_overview__RPgb7",content:"steps_content__VPKuP",steps:"steps_steps__CRf7f",steps_container:"steps_steps_container__Iaftw",step:"steps_step__FSu4G",steps_spacer:"steps_steps_spacer__5Svkn",container:"steps_container__7MWLW",upper_left_btn:"steps_upper_left_btn__MnvYP",btn:"steps_btn__jt7fn",scroll_box:"steps_scroll_box__uLilg",scroll_box_create:"steps_scroll_box_create__eJUeC"}},52056:function(e){e.exports={wrapper:"content_wrapper__Jvn1u",upper:"content_upper__9Nkp2",search:"content_search__Dpo_H",btn:"content_btn___mTK0",btn_container:"content_btn_container__gaxsP",icon:"content_icon__0HOtA",content:"content_content__FZ6EO"}},21983:function(e){e.exports={wrapper:"header_wrapper__K3eaQ",fade:"header_fade__7mn8u",path:"header_path__zsGfj",active:"header_active__BKKua",title:"header_title__NQ_dN",heading:"header_heading__4BoL9",heading_tag:"header_heading_tag__509L9",badge:"header_badge__wlwa3",header_slash:"header_header_slash___SNyd",toggle:"header_toggle__2KbpU",current:"header_current__TtVc5",section_selector:"header_section_selector__rnzg1",section_selector_btn:"header_section_selector_btn__VZGYe",section_selector_content:"header_section_selector_content__BYAoL",toggle_container:"header_toggle_container__nNzcU"}},22815:function(e){e.exports={wrapper:"main_wrapper__D9WTN",upper:"main_upper__ok39I",btn:"main_btn__Ku4RL",paginate_container:"main_paginate_container__pluQ4",paginate:"main_paginate__tmJH4",search:"main_search__YFGii",container:"main_container__loQUx",sidebar:"main_sidebar__Sh16t",content_container:"main_content_container__1e1Ld",content:"main_content__LEHzP",trigger:"main_trigger__b4c77",side:"main_side__BmOYW",study:"main_study__OjGAW",side_open:"main_side_open__fj0Is"}},73250:function(e){e.exports={wrapper:"sidebar_wrapper___1ojJ",collapsed:"sidebar_collapsed__VT9no",logo_wrapper:"sidebar_logo_wrapper__0rdsw",logo_container:"sidebar_logo_container__2jcGx",logo:"sidebar_logo__xN0PP",links_container:"sidebar_links_container__i5mQ_",links:"sidebar_links__JbZrD",user:"sidebar_user__K3Gca",user_profile:"sidebar_user_profile__EEW98",profile_container:"sidebar_profile_container__XpZ3n",user_info:"sidebar_user_info__b9Bk5",utils:"sidebar_utils__5luWF",settings:"sidebar_settings__V32p4",logout:"sidebar_logout__hFXbQ"}},48936:function(e){e.exports={add:"sections_add__cRThi"}}}]);