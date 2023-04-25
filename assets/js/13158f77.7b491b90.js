"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8101],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(r),k=a,m=u["".concat(s,".").concat(k)]||u[k]||c[k]||i;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:4,sidebar_label:"Creating an K3s Kubernetes Cluster",title:"Creating an K3s Kubernetes Cluster"},l=void 0,o={unversionedId:"rancher/node/k3s-cluster",id:"rancher/node/k3s-cluster",title:"Creating an K3s Kubernetes Cluster",description:"You can now provision K3s Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.3+ using the built-in Harvester node driver.",source:"@site/docs/rancher/node/k3s-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/k3s-cluster",permalink:"/dev/rancher/node/k3s-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/node/k3s-cluster.md",tags:[],version:"current",lastUpdatedAt:1682388839,formattedLastUpdatedAt:"Apr 25, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Creating an K3s Kubernetes Cluster",title:"Creating an K3s Kubernetes Cluster"},sidebar:"tutorialSidebar",previous:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/dev/rancher/node/rke2-cluster"},next:{title:"Harvester Cloud Provider",permalink:"/dev/rancher/cloud-provider"}},s={},d=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create K3s Kubernetes Cluster",id:"create-k3s-kubernetes-cluster",level:3},{value:"Add Node Affinity",id:"add-node-affinity",level:4},{value:"Using Harvester K3s Node Driver in Air Gapped Environment",id:"using-harvester-k3s-node-driver-in-air-gapped-environment",level:3}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can now provision K3s Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," using the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k3s-cluster",src:r(60080).Z,width:"2556",height:"980"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Harvester K3s node driver is in ",(0,a.kt)("strong",{parentName:"li"},"Tech Preview"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/dev/networking/harvester-network#vlan-network"},"VLAN network")," is required for Harvester node driver."),(0,a.kt)("li",{parentName:"ul"},"Harvester node driver only supports cloud images."))),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester Cluster".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(46600).Z,width:"1920",height:"969"})),(0,a.kt)("h3",{id:"create-k3s-kubernetes-cluster"},"Create K3s Kubernetes Cluster"),(0,a.kt)("p",null,"You can create a K3s Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the K3s node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-k3s-harvester-cluster",src:r(22086).Z,width:"1919",height:"1079"})),(0,a.kt)("h4",{id:"add-node-affinity"},"Add Node Affinity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,a.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules. This provides high availability and better resource utilization."),(0,a.kt)("p",null,"Node affinity can be added to the machine pools during the cluster creation:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Show Advanced")," button and click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,a.kt)("img",{alt:"affinity-add-node-selector",src:r(92866).Z,width:"3668",height:"1478"})),(0,a.kt)("li",{parentName:"ol"},"Set priority to ",(0,a.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,a.kt)("a",{parentName:"li",href:"/dev/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,a.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,a.kt)("img",{alt:"affinity-add-rules",src:r(73753).Z,width:"3634",height:"1290"})),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to save the node template. After the cluster is installed, you can check whether its machine nodes are scheduled according to the affinity rules.")),(0,a.kt)("h3",{id:"using-harvester-k3s-node-driver-in-air-gapped-environment"},"Using Harvester K3s Node Driver in Air Gapped Environment"),(0,a.kt)("p",null,"K3s provisioning relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," package to get the IP of the virtual machine."),(0,a.kt)("p",null,"However, it may not be feasible to install packages in an air gapped environment."),(0,a.kt)("p",null,"You can address the installation constraints with the following options:"),(0,a.kt)("p",null,"Option 1. Use a VM image with required packages installed."),(0,a.kt)("p",null,"Option 2. Configure the ",(0,a.kt)("strong",{parentName:"p"},"Show Advanced > User Data")," to enable the VMs to install required packages via an HTTP(S) proxy."),(0,a.kt)("p",null,"Example of ",(0,a.kt)("inlineCode",{parentName:"p"},"user data")," in Harvester node template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\n")))}c.isMDXComponent=!0},92866:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-rke2-add-node-selector-43c8e7c2785ab6a07a2c90791d84f9c3.png"},73753:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-rke2-add-rules-6934a0009ec40592576d46f06523c040.png"},46600:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-cloud-credentials-b3b6813e1a8b52c1e0fa45e740f27a23.png"},22086:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-k3s-harvester-cluster-3b0b62e216eaf050c48c10a762cf4ff4.png"},60080:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke2-k3s-node-driver-5b8e9729d66e7494fd1c0f310268bd56.png"}}]);