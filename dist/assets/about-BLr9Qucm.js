import{p as k,aG as A,aX as Z,F as p,aY as z,aM as q,aZ as xe,aN as T,J as G,a_ as O,L as f,N as K,a$ as W,b0 as Y,b1 as $,aQ as Q,b2 as Se,W as C,X as a,ac as ee,aJ as g,aI as L,b3 as ae,aU as _e,b4 as Ae,a1 as _,G as Ie,aK as Pe,b5 as Ue,b6 as Le,b7 as Te,b8 as Be,aH as De,S as we,aP as Ne,b9 as Ee,ba as ze,bb as Me,bc as He,g as R,_ as Re,a0 as Xe,bd as Fe,v as te,M as Je,a5 as ne,a6 as r,a7 as m,a8 as l,a9 as S,aa as b,aj as x,aq as D,ab as v,ai as w,be as je,ah as U,r as X,az as Ze,af as N,ad as h,ag as F}from"./index-CfKzfOAZ.js";import{m as qe,u as Ge,a as le,V as J}from"./VDivider-BMs_09Zz.js";const Oe=k({start:Boolean,end:Boolean,icon:A,image:String,text:String,...Z(),...p(),...z(),...q(),...xe(),...T(),...G(),...O({variant:"flat"})},"VAvatar"),E=f()({name:"VAvatar",props:Oe(),setup(e,i){let{slots:t}=i;const{themeClasses:n}=K(e),{borderClasses:d}=W(e),{colorClasses:c,colorStyles:o,variantClasses:s}=Y(e),{densityClasses:V}=$(e),{roundedClasses:y}=Q(e),{sizeClasses:u,sizeStyles:B}=Se(e);return C(()=>a(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,d.value,c.value,V.value,y.value,u.value,s.value,e.class],style:[o.value,B.value,e.style]},{default:()=>[t.default?a(L,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?a(ee,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?a(g,{key:"icon",icon:e.icon},null):e.text,ae(!1,"v-avatar")]})),{}}}),se=f()({name:"VCardActions",props:p(),setup(e,i){let{slots:t}=i;return _e({VBtn:{slim:!0,variant:"text"}}),C(()=>{var n;return a("div",{class:["v-card-actions",e.class],style:e.style},[(n=t.default)==null?void 0:n.call(t)])}),{}}}),Ke=k({opacity:[Number,String],...p(),...T()},"VCardSubtitle"),ie=f()({name:"VCardSubtitle",props:Ke(),setup(e,i){let{slots:t}=i;return C(()=>a(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),de=Ae("v-card-title"),We=k({appendAvatar:String,appendIcon:A,prependAvatar:String,prependIcon:A,subtitle:[String,Number],title:[String,Number],...p(),...z()},"VCardItem"),Ye=f()({name:"VCardItem",props:We(),setup(e,i){let{slots:t}=i;return C(()=>{var y;const n=!!(e.prependAvatar||e.prependIcon),d=!!(n||t.prepend),c=!!(e.appendAvatar||e.appendIcon),o=!!(c||t.append),s=!!(e.title!=null||t.title),V=!!(e.subtitle!=null||t.subtitle);return a("div",{class:["v-card-item",e.class],style:e.style},[d&&a("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?a(L,{key:"prepend-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):a(_,null,[e.prependAvatar&&a(E,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&a(g,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),a("div",{class:"v-card-item__content"},[s&&a(de,{key:"title"},{default:()=>{var u;return[((u=t.title)==null?void 0:u.call(t))??e.title]}}),V&&a(ie,{key:"subtitle"},{default:()=>{var u;return[((u=t.subtitle)==null?void 0:u.call(t))??e.subtitle]}}),(y=t.default)==null?void 0:y.call(t)]),o&&a("div",{key:"append",class:"v-card-item__append"},[t.append?a(L,{key:"append-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):a(_,null,[e.appendIcon&&a(g,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&a(E,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),$e=k({opacity:[Number,String],...p(),...T()},"VCardText"),oe=f()({name:"VCardText",props:$e(),setup(e,i){let{slots:t}=i;return C(()=>a(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Qe=k({appendAvatar:String,appendIcon:A,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:A,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Z(),...p(),...z(),...Ie(),...Pe(),...Ue(),...Le(),...Te(),...q(),...Be(),...T(),...G(),...O({variant:"elevated"})},"VCard"),ea=f()({name:"VCard",directives:{Ripple:De},props:Qe(),setup(e,i){let{attrs:t,slots:n}=i;const{themeClasses:d}=K(e),{borderClasses:c}=W(e),{colorClasses:o,colorStyles:s,variantClasses:V}=Y(e),{densityClasses:y}=$(e),{dimensionStyles:u}=we(e),{elevationClasses:B}=Ne(e),{loaderClasses:re}=Ee(e),{locationStyles:ce}=ze(e),{positionClasses:ue}=Me(e),{roundedClasses:me}=Q(e),I=He(e,t),ve=R(()=>e.link!==!1&&I.isLink.value),P=R(()=>!e.disabled&&e.link!==!1&&(e.link||I.isClickable.value));return C(()=>{const he=ve.value?"a":e.tag,ge=!!(n.title||e.title!=null),fe=!!(n.subtitle||e.subtitle!=null),ye=ge||fe,be=!!(n.append||e.appendAvatar||e.appendIcon),ke=!!(n.prepend||e.prependAvatar||e.prependIcon),pe=!!(n.image||e.image),Ce=ye||ke||be,Ve=!!(n.text||e.text!=null);return Re(a(he,te({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":P.value},d.value,c.value,o.value,y.value,B.value,re.value,ue.value,me.value,V.value,e.class],style:[s.value,u.value,ce.value,e.style],onClick:P.value&&I.navigate,tabindex:e.disabled?-1:void 0},I.linkProps),{default:()=>{var M;return[pe&&a("div",{key:"image",class:"v-card__image"},[n.image?a(L,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):a(ee,{key:"image-img",cover:!0,src:e.image},null)]),a(Fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:n.loader}),Ce&&a(Ye,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:n.item,prepend:n.prepend,title:n.title,subtitle:n.subtitle,append:n.append}),Ve&&a(oe,{key:"text"},{default:()=>{var H;return[((H=n.text)==null?void 0:H.call(n))??e.text]}}),(M=n.default)==null?void 0:M.call(n),n.actions&&a(se,null,{default:n.actions}),ae(P.value,"v-card")]}}),[[Xe("ripple"),P.value&&e.ripple]])}),{}}}),aa=k({disabled:Boolean,modelValue:{type:Boolean,default:null},...qe()},"VHover"),ta=f()({name:"VHover",props:aa(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=Je(e,"modelValue"),{runOpenDelay:d,runCloseDelay:c}=Ge(e,o=>!e.disabled&&(n.value=o));return()=>{var o;return(o=t.default)==null?void 0:o.call(t,{isHovering:n.value,props:{onMouseenter:d,onMouseleave:c}})}}}),na={__name:"TeamMemberCard",props:{name:String,title:String,description:String,photo:String,homeUrl:String,scholarUrl:String,githubUrl:String,email:String},setup(e){return(i,t)=>(r(),m(ta,null,{default:l(({isHovering:n,props:d})=>[a(ea,te({class:"mx-auto my-4 pa-5","max-width":"600","min-height":"300",outlined:"",hover:""},d,{rounded:n?"xl":"lg",color:n?"light":"white"}),{default:l(()=>[a(S,null,{default:l(()=>[a(b,{cols:"4",class:"px-5 mb-3"},{default:l(()=>[e.photo!==""?(r(),m(E,{key:0,size:n?"150":"100",image:"/people_avtar/"+e.photo},null,8,["size","image"])):x("",!0)]),_:2},1024),a(b,{cols:"7"},{default:l(()=>[a(de,{class:D(["font-weight-bold",n?"text-h5":"text-h6"])},{default:l(()=>[v(w(e.name),1)]),_:2},1032,["class"]),a(ie,{class:D(n?"text-h6":"")},{default:l(()=>[v(w(e.title),1)]),_:2},1032,["class"]),a(se,null,{default:l(()=>[a(je),e.email!==""?(r(),m(U,{key:0,icon:"",href:"mailto:"+e.email,target:"_blank"},{default:l(()=>[a(g,null,{default:l(()=>t[0]||(t[0]=[v("mdi-email")])),_:1})]),_:1},8,["href"])):x("",!0),e.homeUrl!==""?(r(),m(U,{key:1,icon:"",href:e.homeUrl,target:"_blank"},{default:l(()=>[a(g,null,{default:l(()=>t[1]||(t[1]=[v("mdi-home")])),_:1})]),_:1},8,["href"])):x("",!0),e.scholarUrl!==""?(r(),m(U,{key:2,icon:"",href:e.scholarUrl,target:"_blank"},{default:l(()=>[a(g,null,{default:l(()=>t[2]||(t[2]=[v("mdi-school")])),_:1})]),_:1},8,["href"])):x("",!0),e.githubUrl!==""?(r(),m(U,{key:3,icon:"",href:e.githubUrl,target:"_blank"},{default:l(()=>[a(g,null,{default:l(()=>t[3]||(t[3]=[v("mdi-github")])),_:1})]),_:1},8,["href"])):x("",!0)]),_:1})]),_:2},1024)]),_:2},1024),a(le),a(oe,{class:D(n?"text-body-1":"text-body-2")},{default:l(()=>[v(w(e.description),1)]),_:2},1032,["class"])]),_:2},1040,["rounded","color"])]),_:1}))}},la=ne(na,[["__scopeId","data-v-d9fef667"]]),sa="/assets/lsce-Div2ndk4.png",ia="/assets/university-of-exeter-dark-hk5iCKYu.svg",j=[{name:"Philippe Ciais",title:"Principal Investigator",institute:"LSCE",description:"Philippe, is a senior researcher at LSCE. He is an internationally recognized expert of the global carbon cycle and greenhouse gases emissions monitoring. He is the author of over a thousand of peer-reviewed publications including many in Nature, Science and high-impact journals (cited 170000 times). He is among the top 1% most-cited scientists in the fields of Geosciences and Ecology.",photo:"philippe_ciais.jpg",email:"philippe.ciais@lsce.ipsl.fr",homeUrl:"https://www.lsce.ipsl.fr/en/cycles-transferts/mosaic/pisp/philippe-ciais/",scholarUrl:"https://scholar.google.com/citations?hl=en&user=PJhqfAoAAAAJ",githubUrl:""},{name:"Chuanlong Zhou",title:"Web Designer & Developer",institute:"LSCE",description:"Research scientist at LSCE with an interdisciplinary background in engineering, environmental science, and computer science. Passionate about integrating environmental science, data science, machine learning, and web technology to address both scientific and real-world challenges. ",photo:"chuanlong_zhou.png",email:"chuanlong.zhou@lsce.ipsl.fr",homeUrl:"https://defve1988.github.io/",scholarUrl:"https://scholar.google.com/citations?hl=en&user=I1xZXuEAAAAJ",githubUrl:"https://github.com/chuanlongZhou"}],da={__name:"about",setup(e){const i=X(j.filter(n=>n.institute==="LSCE")),t=X(j.filter(n=>n.institute==="Nexqt"));return(n,d)=>{const c=Ze("Hero"),o=la;return r(),N(_,null,[a(c,{main:"Team Introduction text",sub:"other introduction text"}),a(J,{class:"my-10"},{default:l(()=>[a(S,null,{default:l(()=>[a(b,{cols:"12",class:"text-left text-h6 text-primary"},{default:l(()=>d[0]||(d[0]=[h("a",{href:"https://www.lsce.ipsl.fr/",target:"_blank"},[h("img",{src:sa,alt:"Team Logo",class:"team-logo"})],-1),h("p",{class:"text-body-1"}," The LSCE team, a leading research entity in climate science based in France, ... ",-1)])),_:1})]),_:1}),a(S,null,{default:l(()=>[(r(!0),N(_,null,F(i.value,s=>(r(),m(b,{class:"px-4",cols:"12",md:"4",key:s.name},{default:l(()=>[a(o,{name:s.name,title:s.title,description:s.description,photo:s.photo,homeUrl:s.homeUrl,scholarUrl:s.scholarUrl,githubUrl:s.githubUrl},null,8,["name","title","description","photo","homeUrl","scholarUrl","githubUrl"])]),_:2},1024))),128))]),_:1}),a(le,{class:"my-10"})]),_:1}),a(J,{class:"my-10"},{default:l(()=>[a(S,null,{default:l(()=>[a(b,{cols:"12",class:"text-left text-h6 text-primary"},{default:l(()=>d[1]||(d[1]=[h("a",{href:"",target:"_blank"},[h("img",{src:ia,alt:"Team Logo",class:"team-logo"})],-1),h("p",{class:"text-body-1"}," XXX.... ",-1),h("p",{class:"text-body-1"},null,-1)])),_:1})]),_:1}),a(S,null,{default:l(()=>[(r(!0),N(_,null,F(t.value,s=>(r(),m(b,{class:"px-4",cols:"12",md:"4",key:s.name},{default:l(()=>[a(o,{name:s.name,title:s.title,description:s.description,photo:s.photo,homeUrl:s.homeUrl,scholarUrl:s.scholarUrl,githubUrl:s.githubUrl},null,8,["name","title","description","photo","homeUrl","scholarUrl","githubUrl"])]),_:2},1024))),128))]),_:1})]),_:1})],64)}}},ca=ne(da,[["__scopeId","data-v-09fb58f7"]]);export{ca as default};
