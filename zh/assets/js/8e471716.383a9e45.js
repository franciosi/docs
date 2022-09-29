"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[11],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,k=u["".concat(s,".").concat(d)]||u[d]||v[d]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:5,sidebar_label:"\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC",title:"",keywords:["Harvester","harvester","Rancher","rancher","\u7f51\u7edc","network","VLAN","vlan"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 [CNI](https://github.com/containernetworking/cni) \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86\u7f51\u7edc\u914d\u7f6e\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},l="\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC",o={unversionedId:"networking/best-practice/single-nic-non-vlan-aware-switch",id:"version-v1.0/networking/best-practice/single-nic-non-vlan-aware-switch",title:"",description:"\u5728\u6b64\u201c\u975e VLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\uff08\u4e5f\u79f0\u4e3a\u201c\u865a\u62df\u201d\u4ea4\u6362\u673a\uff09\u7684\u6700\u4f73\u5b9e\u8df5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5e38\u89c1\u573a\u666f\u4e0b\u7684 Harvester VLAN \u7f51\u7edc\u548c\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/networking/best-practice/single-nic-non-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/single-nic-non-vlan-aware-switch",permalink:"/zh/v1.0/networking/best-practice/single-nic-non-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/single-nic-non-vlan-aware-switch.md",tags:[],version:"v1.0",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC",title:"",keywords:["Harvester","harvester","Rancher","rancher","\u7f51\u7edc","network","VLAN","vlan"],Description:"Harvester \u6784\u5efa\u5728 Kubernetes \u4e4b\u4e0a\uff0c\u800c Kubernetes \u4f7f\u7528 [CNI](https://github.com/containernetworking/cni) \u4f5c\u4e3a\u7f51\u7edc\u63d0\u4f9b\u5546\u548c Kubernetes Pod \u7f51\u7edc\u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e5f\u57fa\u4e8e CNI \u5b9e\u73b0 Harvester \u7f51\u7edc\u3002\u6b64\u5916\uff0cHarvester UI \u96c6\u6210\u4e86\u7f51\u7edc\u914d\u7f6e\uff0c\u6765\u5b9e\u73b0\u7528\u6237\u53cb\u597d\u7684\u865a\u62df\u673a\u7f51\u7edc\u914d\u7f6e\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u5177\u6709 VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC",permalink:"/zh/v1.0/networking/best-practice/single-nic-vlan-aware-switch"},next:{title:"\u76d1\u63a7",permalink:"/zh/v1.0/monitoring/"}},s={},c=[{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e",id:"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e",level:2},{value:"\u5728 Harvester \u4e2d\u521b\u5efa VLAN \u7f51\u7edc",id:"\u5728-harvester-\u4e2d\u521b\u5efa-vlan-\u7f51\u7edc",level:2},{value:"\u5c06 VM \u8fde\u63a5\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51",id:"\u5c06-vm-\u8fde\u63a5\u5230-harvester-\u4e3b\u673a\u7684\u5b50\u7f51",level:3}],p={toc:c};function v(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5177\u6709\u975e-vlan-\u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a-nic"},"\u5177\u6709\u975e VLAN \u611f\u77e5\u4ea4\u6362\u673a\u7684\u5355\u4e2a NIC"),(0,a.kt)("p",null,"\u5728\u6b64\u201c\u975e VLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\uff08\u4e5f\u79f0\u4e3a\u201c\u865a\u62df\u201d\u4ea4\u6362\u673a\uff09\u7684\u6700\u4f73\u5b9e\u8df5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5e38\u89c1\u573a\u666f\u4e0b\u7684 Harvester VLAN \u7f51\u7edc\u548c\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.kt)("p",null,"\u786c\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709\u4e00\u4e2a\u5355\u7aef\u53e3\u7f51\u5361\u7684 3 \u53f0 Harvester Server\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u6216\u591a\u4e2a\u201c\u975e VLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\u3002")),(0,a.kt)("p",null,"\u7f51\u7edc\u89c4\u683c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u548c VM \u7f51\u7edc\u4f4d\u4e8e\u540c\u4e00\u5b50\u7f51\u4e2d\u3002")),(0,a.kt)("p",null,"\u5e03\u7ebf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Harvester Server \u4ece\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," \u5230\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"li"},"3")," \u8fde\u63a5\u5230\u4ea4\u6362\u673a\u3002")),(0,a.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86\u672c\u6307\u5357\u6240\u7528\u7684\u5e03\u7ebf\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"non-vlan-aware-case.png",src:r(44322).Z,width:"921",height:"501"})),(0,a.kt)("h2",{id:"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e"},"\u5916\u90e8\u4ea4\u6362\u673a\u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u65e0\u6cd5\u914d\u7f6e\u201c\u975e VLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\u3002"),(0,a.kt)("h2",{id:"\u5728-harvester-\u4e2d\u521b\u5efa-vlan-\u7f51\u7edc"},"\u5728 Harvester \u4e2d\u521b\u5efa VLAN \u7f51\u7edc"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u524d\u5f80 ",(0,a.kt)("strong",{parentName:"p"},"Advanced > Networks")," \u9875\u9762\uff0c\u7136\u540e\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Create")," \u6309\u94ae\uff0c\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 VLAN \u7f51\u7edc\u3002"),(0,a.kt)("p",null,"\u6307\u5b9a\u4f60\u8981\u4e3a VLAN \u7f51\u7edc\u8bbe\u7f6e\u7684\u540d\u79f0\u548c VLAN ID\uff08\u5982\u679c\u4f60\u914d\u7f6e\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.0/rancher/virtualization-management#%E5%A4%9A%E7%A7%9F%E6%88%B7"},"Rancher \u591a\u79df\u6237"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u6307\u5b9a\u76f8\u540c\u7684 VLAN ID\uff09\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-vlan-network.png",src:r(44712).Z,width:"3472",height:"1132"})),(0,a.kt)("h3",{id:"\u5c06-vm-\u8fde\u63a5\u5230-harvester-\u4e3b\u673a\u7684\u5b50\u7f51"},"\u5c06 VM \u8fde\u63a5\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51"),(0,a.kt)("p",null,"\u201c\u975e VLAN \u611f\u77e5\u201d\u4ea4\u6362\u673a\u53ea\u4f1a\u5c06\u672a\u6807\u8bb0\u7684\u7f51\u7edc\u6d41\u91cf\u53d1\u9001\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51\u3002\u5728 Harvester \u4e2d\uff0c\u672a\u6807\u8bb0\u7684\u6d41\u91cf\u5728 VLAN 1 \u4e2d\u63a5\u6536\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u5c06 VM \u8fde\u63a5\u5230 Harvester \u4e3b\u673a\u7684\u5b50\u7f51\uff0c\u5219\u5fc5\u987b\u5728 Harvester \u4e2d\u521b\u5efa\u4e00\u4e2a VLAN ID \u4e3a 1 \u7684 VLAN \u7f51\u7edc\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"non-vlan-aware-vlan1.png",src:r(4269).Z,width:"921",height:"501"})),(0,a.kt)("p",null,"\u6709\u5173 Harvester \u7f51\u7edc\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.0/networking/harvester-network"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u521b\u5efa ID \u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u7684 VLAN \u7f51\u7edc\uff0c\u4e0d\u540c\u8282\u70b9\u7684 VM \u4e4b\u95f4\u7684\u8fde\u63a5\u5c06\u5931\u8d25\u3002")))}v.isMDXComponent=!0},44712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},44322:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/non-vlan-aware-case-c24cf7ec3f9ee5382ed5746bda1aa9a2.png"},4269:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/non-vlan-aware-vlan1-3b7b424d89052ccc7e8ed5557d9b5477.png"}}]);