"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6969],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),v=d(t),u=a,h=v["".concat(l,".").concat(u)]||v[u]||c[u]||i;return t?n.createElement(h,o(o({ref:r},p),{},{components:t})):n.createElement(h,o({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=v;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},69756:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const i={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},o=void 0,s={unversionedId:"rancher/csi-driver",id:"version-v1.0/rancher/csi-driver",title:"Harvester CSI Driver",description:"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.",source:"@site/versioned_docs/version-v1.0/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/v1.0/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/csi-driver.md",tags:[],version:"v1.0",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"Nov 25, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},sidebar:"tutorialSidebar",previous:{title:"Harvester Cloud Provider",permalink:"/v1.0/rancher/cloud-provider"},next:{title:"Harvester Terraform Provider",permalink:"/v1.0/terraform/"}},l={},d=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying with Harvester RKE1 Node Driver",id:"deploying-with-harvester-rke1-node-driver",level:3},{value:"Deploying with Harvester RKE2 Node Driver",id:"deploying-with-harvester-rke2-node-driver",level:3},{value:"Deploying with Harvester K3s Node Driver",id:"deploying-with-harvester-k3s-node-driver",level:3}],p={toc:d};function c(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Harvester Container Storage Interface (CSI) Driver provides a CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance."),(0,a.kt)("h2",{id:"deploying"},"Deploying"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,a.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Currently, the Harvester CSI driver only supports single-node read-write(RWO) volumes. Please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," for future multi-node ",(0,a.kt)("inlineCode",{parentName:"p"},"read-only"),"(ROX) and ",(0,a.kt)("inlineCode",{parentName:"p"},"read-write"),"(RWX) support.")),(0,a.kt)("h3",{id:"deploying-with-harvester-rke1-node-driver"},"Deploying with Harvester RKE1 Node Driver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the external cloud provider option.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver/blob/master/deploy/generate_addon.sh"},"Generate addon configuration")," and add it in the RKE config YAML."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\n./deploy/generate_addon.sh <serviceaccount name> <namespace>\n")),(0,a.kt)("h3",{id:"deploying-with-harvester-rke2-node-driver"},"Deploying with Harvester RKE2 Node Driver"),(0,a.kt)("p",null,"When spinning up a Kubernetes cluster using Rancher RKE2 node driver, the Harvester CSI driver will be deployed when Harvester cloud provider is selected."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"select-harvester-cloud-provider",src:t(12481).Z,width:"1916",height:"964"})),(0,a.kt)("h3",{id:"deploying-with-harvester-k3s-node-driver"},"Deploying with Harvester K3s Node Driver"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester-csi-driver/blob/master/deploy/generate_addon.sh"},"Generate addon configuration")," and put it in K3s VMs ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/kubernetes/cloud-config"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# depend on kubectl to operate the Harvester cluster\n./deploy/generate_addon.sh <serviceaccount name> <namespace>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," from the Rancher marketplace."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:t(24811).Z,width:"2039",height:"437"})))))}c.isMDXComponent=!0},24811:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/install-harvester-csi-driver-in-k3s-f9484289395513e6cad4f69b00f84fa5.png"},12481:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/select-harvester-cloud-provider-7e9fe45280de6f364e7e4bce3b11224d.png"}}]);