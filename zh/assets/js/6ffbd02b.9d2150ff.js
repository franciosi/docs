"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,u=k["".concat(p,".").concat(c)]||k[c]||d[c]||l;return n?a.createElement(u,i(i({ref:t},m),{},{components:n})):a.createElement(u,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1,sidebar_label:"\u4e3b\u673a\u7ba1\u7406",title:"\u4e3b\u673a\u7ba1\u7406"},i=void 0,o={unversionedId:"host/host",id:"host/host",title:"\u4e3b\u673a\u7ba1\u7406",description:"\u7528\u6237\u53ef\u4ee5\u4ece\u4e3b\u673a\u9875\u9762\u67e5\u770b\u548c\u7ba1\u7406 Harvester \u8282\u70b9\u3002\u7b2c\u4e00\u4e2a\u8282\u70b9\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002\u5f53\u8282\u70b9\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e\u4e09\u4e2a\u65f6\uff0c\u5148\u52a0\u5165\u7684\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u5347\u7ea7\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210\u4e00\u4e2a\u9ad8\u53ef\u7528 (HA) \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/zh/dev/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/host/host.md",tags:[],version:"current",lastUpdatedAt:1682388839,formattedLastUpdatedAt:"2023\u5e744\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u4e3b\u673a\u7ba1\u7406",title:"\u4e3b\u673a\u7ba1\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u4e0a\u4f20\u955c\u50cf",permalink:"/zh/dev/upload-image"},next:{title:"\u521b\u5efa\u865a\u62df\u673a",permalink:"/zh/dev/vm/create-vm"}},p={},s=[{value:"\u8282\u70b9\u7ef4\u62a4",id:"\u8282\u70b9\u7ef4\u62a4",level:2},{value:"\u5c01\u9501\u8282\u70b9 (Cordon)",id:"\u5c01\u9501\u8282\u70b9-cordon",level:2},{value:"\u5220\u9664\u8282\u70b9",id:"\u5220\u9664\u8282\u70b9",level:2},{value:"\u591a\u78c1\u76d8\u7ba1\u7406",id:"\u591a\u78c1\u76d8\u7ba1\u7406",level:2},{value:"\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8",id:"\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8",level:3},{value:"\u5b58\u50a8\u6807\u7b7e",id:"\u5b58\u50a8\u6807\u7b7e",level:3},{value:"\u8bbe\u7f6e",id:"\u8bbe\u7f6e",level:4},{value:"Ksmtuned \u6a21\u5f0f",id:"ksmtuned-\u6a21\u5f0f",level:2},{value:"\u5feb\u901f\u8fd0\u884c",id:"\u5feb\u901f\u8fd0\u884c",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3}],m={toc:s};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece\u4e3b\u673a\u9875\u9762\u67e5\u770b\u548c\u7ba1\u7406 Harvester \u8282\u70b9\u3002\u7b2c\u4e00\u4e2a\u8282\u70b9\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u7684\u7ba1\u7406\u8282\u70b9\u3002\u5f53\u8282\u70b9\u6570\u91cf\u5927\u4e8e\u7b49\u4e8e\u4e09\u4e2a\u65f6\uff0c\u5148\u52a0\u5165\u7684\u53e6\u5916\u4e24\u4e2a\u8282\u70b9\u4f1a\u81ea\u52a8\u5347\u7ea7\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u4ece\u800c\u5f62\u6210\u4e00\u4e2a\u9ad8\u53ef\u7528 (HA) \u96c6\u7fa4\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e Harvester \u5efa\u7acb\u5728 Kubernetes \u4e4b\u4e0a\u5e76\u4f7f\u7528 etcd \u4f5c\u4e3a\u6570\u636e\u5e93\uff0c\u56e0\u6b64\u5f53\u7ba1\u7406\u8282\u70b9\u7684\u6570\u91cf\u662f 3 \u65f6\uff0c\u6700\u5927\u8282\u70b9\u5bb9\u9519\u4e3a 1\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"host.png",src:n(62659).Z,width:"5118",height:"2170"})),(0,r.kt)("h2",{id:"\u8282\u70b9\u7ef4\u62a4"},"\u8282\u70b9\u7ef4\u62a4"),(0,r.kt)("p",null,"Admin \u7528\u6237\u53ef\u4ee5\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," \u6765\u81ea\u52a8\u9a71\u9010\u8282\u70b9\u4e2d\u6240\u6709\u7684\u865a\u62df\u673a\u3002\u8fd9\u5c06\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"\u865a\u62df\u673a\u70ed\u8fc1\u79fb"),"\u529f\u80fd\uff0c\u6765\u5c06\u6240\u6709\u865a\u62df\u673a\u81ea\u52a8\u8fc1\u79fb\u5230\u5176\u4ed6\u8282\u70b9\u3002\u8981\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u81f3\u5c11\u9700\u8981\u6709\u4e24\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," \u7684\u8282\u70b9\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"node-maintenance.png",src:n(16277).Z,width:"4394",height:"1932"})),(0,r.kt)("h2",{id:"\u5c01\u9501\u8282\u70b9-cordon"},"\u5c01\u9501\u8282\u70b9 (Cordon)"),(0,r.kt)("p",null,"\u5c01\u9501\u8282\u70b9\u4f1a\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u53ef\u8c03\u5ea6\u3002\u6b64\u529f\u80fd\u9002\u7528\u4e8e\u5728\u77ed\u671f\u7ef4\u62a4\uff08\u5982\u91cd\u542f\uff0c\u5347\u7ea7\u6216\u505c\u7528\uff09\u65f6\u5728\u8282\u70b9\u4e0a\u6267\u884c\u77ed\u671f\u4efb\u52a1\u3002\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u6253\u5f00\u7535\u6e90\u5e76\u901a\u8fc7\u53d6\u6d88\u5c01\u9501\u4f7f\u8282\u70b9\u518d\u6b21\u53ef\u8c03\u5ea6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cordon-node.png",src:n(18670).Z,width:"4402",height:"1878"})),(0,r.kt)("h2",{id:"\u5220\u9664\u8282\u70b9"},"\u5220\u9664\u8282\u70b9"),(0,r.kt)("p",null,"\u5220\u9664\u8282\u70b9\u6709\u4e24\u4e2a\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4ece Harvester \u5220\u9664\u8282\u70b9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u524d\u5f80 ",(0,r.kt)("strong",{parentName:"li"},"Hosts")," \u9875\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u8282\u70b9\uff0c\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Delete"),"\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u8282\u70b9\u4e2d\u5378\u8f7d RKE2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," \u7528\u6237\u767b\u5f55\u5230\u8282\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," \u5220\u9664\u6574\u4e2a RKE2 \u670d\u52a1\u3002")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5220\u9664 RKE2 \u670d\u52a1\u540e\uff0c\u4f60\u5c06\u4e22\u5931 control plane \u8282\u70b9\u7684\u6240\u6709\u6570\u636e\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8282\u70b9\u786c\u5220\u9664\u5b58\u5728\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"\u5df2\u77e5\u95ee\u9898"),"\u3002\n\u8be5\u95ee\u9898\u89e3\u51b3\u540e\uff0c\u53ef\u4ee5\u8df3\u8fc7 RKE2 \u8282\u70b9\u5378\u8f7d\u7684\u6b65\u9aa4\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete.png",src:n(8615).Z,width:"4398",height:"1888"})),(0,r.kt)("h2",{id:"\u591a\u78c1\u76d8\u7ba1\u7406"},"\u591a\u78c1\u76d8\u7ba1\u7406"),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8"},"\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8"),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u4ece\u4e3b\u673a\u7f16\u8f91\u9875\u9762\u67e5\u770b\u548c\u6dfb\u52a0\u591a\u4e2a\u78c1\u76d8\u4f5c\u4e3a\u9644\u52a0\u6570\u636e\u5377\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("strong",{parentName:"li"},"Hosts")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u8282\u70b9\uff0c\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Config",src:n(47760).Z,width:"1909",height:"923"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"Storage")," \u9009\u9879\u5361\u5e76\u5355\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Add Disk"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add Disks",src:n(88178).Z,width:"1909",height:"923"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4ece Harvester v1.0.2 \u5f00\u59cb\uff0c\u6211\u4eec\u4e0d\u518d\u652f\u6301\u5c06\u5206\u533a\u6dfb\u52a0\u4e3a\u9644\u52a0\u78c1\u76d8\u3002\u5982\u679c\u4f60\u60f3\u5c06\u5176\u6dfb\u52a0\u4e3a\u9644\u52a0\u78c1\u76d8\uff0c\u8bf7\u5148\u5220\u9664\u6240\u6709\u5206\u533a\uff08\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"fdisk"),"\uff09\u3002")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u989d\u5916\u7684\u539f\u59cb\u5757\u8bbe\u5907\uff0c\u5c06\u5176\u6dfb\u52a0\u4e3a\u989d\u5916\u7684\u6570\u636e\u5377\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5757\u8bbe\u5907\u4ece\u672a\u88ab\u5f3a\u5236\u683c\u5f0f\u5316\uff0c\u5219\u9700\u8981 ",(0,r.kt)("inlineCode",{parentName:"li"},"Force Formatted")," \u9009\u9879\u3002")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Force Format",src:n(92921).Z,width:"1909",height:"923"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u518d\u6b21\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit Config")," \u67e5\u770b\u65b0\u6dfb\u52a0\u7684\u78c1\u76d8\u3002\u540c\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6dfb\u52a0 \u201cHost/Disk\u201d \u6807\u7b7e\uff08\u8be6\u89c1",(0,r.kt)("a",{parentName:"li",href:"#%E5%AD%98%E5%82%A8%E6%A0%87%E7%AD%BE"},"\u4e0b\u4e00\u8282"),"\uff09\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Check Result",src:n(5007).Z,width:"1909",height:"923"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8981\u8ba9 Harvester \u8bc6\u522b\u78c1\u76d8\uff0c\u6bcf\u4e2a\u78c1\u76d8\u90fd\u9700\u8981\u6709\u4e00\u4e2a\u552f\u4e00\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),"\u3002\u5426\u5219\uff0cHarvester \u5c06\u62d2\u7edd\u6dfb\u52a0\u78c1\u76d8\u3002\n\u5982\u679c\u4f60\u7684\u78c1\u76d8\u6ca1\u6709 WWN\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"EXT4")," \u6587\u4ef6\u7cfb\u7edf\u5bf9\u5176\u8fdb\u884c\u683c\u5f0f\u5316\uff0c\u4ee5\u5e2e\u52a9 Harvester \u8bc6\u522b\u78c1\u76d8\u3002")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u5728 QEMU \u73af\u5883\u4e2d\u6d4b\u8bd5 Harvester\uff0c\u4f60\u9700\u8981\u4f7f\u7528 QEMU v6.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002\u4ee5\u524d\u7248\u672c\u7684 QEMU \u5c06\u59cb\u7ec8\u4e3a NVMe \u78c1\u76d8\u6a21\u62df\u751f\u6210\u76f8\u540c\u7684 WWN\uff0c\u8fd9\u5c06\u5bfc\u81f4 Harvester \u4e0d\u6dfb\u52a0\u5176\u4ed6\u78c1\u76d8\u3002")),(0,r.kt)("h3",{id:"\u5b58\u50a8\u6807\u7b7e"},"\u5b58\u50a8\u6807\u7b7e"),(0,r.kt)("p",null,"\u5b58\u50a8\u6807\u7b7e\u529f\u80fd\u7528\u4e8e\u4ec5\u5141\u8bb8\u4f7f\u7528\u67d0\u4e9b\u8282\u70b9\u6216\u78c1\u76d8\u6765\u5b58\u50a8 Longhorn \u5377\u6570\u636e\u3002\u4f8b\u5982\uff0c\u5bf9\u6027\u80fd\u6709\u8981\u6c42\u7684\u6570\u636e\u53ea\u80fd\u4f7f\u7528\u6807\u8bb0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"fast"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"ssd")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"nvme")," \u7684\u9ad8\u6027\u80fd\u78c1\u76d8\uff0c\u6216\u8005\u53ea\u4f7f\u7528\u6807\u8bb0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"baremetal")," \u7684\u9ad8\u6027\u80fd\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u6b64\u529f\u80fd\u540c\u65f6\u652f\u6301\u78c1\u76d8\u548c\u8282\u70b9\u3002"),(0,r.kt)("h4",{id:"\u8bbe\u7f6e"},"\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Harvester UI \u4e0a\u7684\u4e3b\u673a\u9875\u9762\u8bbe\u7f6e\u6807\u7b7e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Hosts")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit Config")," > ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Add Host/Disk Tags")," \u5f00\u59cb\u8f93\u5165\u6807\u7b7e\uff0c\u7136\u540e\u6309\u56de\u8f66\u952e\u6765\u6dfb\u52a0\u65b0\u6807\u7b7e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"li"},"Save")," \u6765\u66f4\u65b0\u6807\u7b7e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("a",{parentName:"li",href:"/zh/dev/advanced/storageclass"},"StorageClasses")," \u9875\u9762\u4e0a\uff0c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b58\u50a8\u7c7b\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Node Selector")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Disk Selector")," \u5b57\u6bb5\u4e2d\u9009\u62e9\u5df2\u5b9a\u4e49\u7684\u6807\u7b7e\u3002")),(0,r.kt)("p",null,"\u8282\u70b9\u6216\u78c1\u76d8\u4e0a\u7684\u6240\u6709\u73b0\u6709\u8c03\u5ea6\u5377\u90fd\u4e0d\u4f1a\u53d7\u5230\u65b0\u6807\u7b7e\u7684\u5f71\u54cd\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u540c\u4e00\u4e2a\u5377\u6307\u5b9a\u591a\u4e2a\u6807\u7b7e\u65f6\uff0c\u78c1\u76d8\u548c\u8282\u70b9\uff08\u78c1\u76d8\u6240\u5728\u7684\u8282\u70b9\uff09\u5fc5\u987b\u5177\u6709\u6240\u6709\u6307\u5b9a\u7684\u6807\u7b7e\u624d\u80fd\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"ksmtuned-\u6a21\u5f0f"},"Ksmtuned \u6a21\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,r.kt)("p",null,"Ksmtuned \u662f\u4e00\u4e2a\u90e8\u7f72\u4e3a DaemonSet \u7684 KSM \u81ea\u52a8\u5316\u5de5\u5177\uff0c\u7528\u4e8e\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c Ksmtuned\u3002\u5b83\u5c06\u901a\u8fc7\u89c2\u5bdf\u53ef\u7528\u5185\u5b58\u767e\u5206\u6bd4\uff08",(0,r.kt)("strong",{parentName:"p"},"\u5373 Threshold Coefficient\uff0c\u9608\u503c\u7cfb\u6570"),"\uff09\u6765\u542f\u52a8\u6216\u505c\u6b62 KSM\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f60\u9700\u8981\u5728\u6bcf\u4e2a\u8282\u70b9 UI \u4e0a\u624b\u52a8\u542f\u7528 Ksmtuned\u30021-2 \u5206\u949f\u540e\uff0c\u4f60\u5c06\u80fd\u591f\u4ece\u8282\u70b9 UI \u4e2d\u770b\u5230 KSM \u7edf\u8ba1\u4fe1\u606f\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/mm/ksm.html#ksm-daemon-sysfs-interface"},"KSM"),"\u3002"),(0,r.kt)("h3",{id:"\u5feb\u901f\u8fd0\u884c"},"\u5feb\u901f\u8fd0\u884c"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,r.kt)("strong",{parentName:"li"},"Hosts")," \u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u8282\u70b9\uff0c\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"Ksmtuned")," \u9009\u9879\u5361\uff0c\u5e76\u5728 ",(0,r.kt)("strong",{parentName:"li"},"Run Strategy")," \u4e2d\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"li"},"Run"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\uff08\u53ef\u9009\uff09\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4fee\u6539",(0,r.kt)("strong",{parentName:"li"},"\u9608\u503c\u7cfb\u6570"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u7f16\u8f91 Ksmtuned",src:n(41374).Z,width:"2150",height:"984"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Save")," \u8fdb\u884c\u66f4\u65b0\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u5927\u7ea6 1-2 \u5206\u949f\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4f60\u7684\u8282\u70b9 > Ksmtuned")," \u9009\u9879\u5361\u6765\u68c0\u67e5",(0,r.kt)("strong",{parentName:"li"},"\u7edf\u8ba1\u6570\u636e"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b Ksmtuned \u7edf\u8ba1\u6570\u636e",src:n(27313).Z,width:"2002",height:"402"})),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u7b56\u7565"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stop"),"\uff1a\u505c\u6b62 Ksmtuned \u548c KSM\u3002VM \u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u5171\u4eab\u5185\u5b58\u9875\u9762\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Run"),"\uff1a\u8fd0\u884c Ksmtuned\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prune"),"\uff1a\u505c\u6b62 Ksmtuned \u5e76\u4fee\u526a KSM \u5185\u5b58\u9875\u9762\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Threshold Coefficient"),"\uff1a\u914d\u7f6e\u53ef\u7528\u5185\u5b58\u767e\u5206\u6bd4\u3002\u5982\u679c\u53ef\u7528\u5185\u5b58\u5c0f\u4e8e\u9608\u503c\uff0c\u5219\u542f\u52a8 KSM\uff1b\u5426\u5219\uff0c\u5c06\u505c\u6b62 KSM\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merge Across Nodes"),"\uff1a\u662f\u5426\u53ef\u4ee5\u5408\u5e76\u6765\u81ea\u4e0d\u540c NUMA \u8282\u70b9\u7684\u9875\u9762\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6a21\u5f0f"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Standard"),"\uff1a\u9ed8\u8ba4\u6a21\u5f0f\u3002\u63a7\u5236\u8282\u70b9 ksmd \u5927\u7ea6\u4f7f\u7528\u5355\u4e2a CPU \u7684 20%\u3002\u4f7f\u7528\u7684\u53c2\u6570\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 0\nDecay: 0\nMaximum Pages: 100\nMinimum Pages: 100\nSleep Time: 20\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High-performance"),"\uff1a\u8282\u70b9 ksmd \u4f7f\u7528\u5355\u4e2a CPU \u7684 20% \u5230 100%\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u626b\u63cf\u548c\u5408\u5e76\u6548\u7387\u3002\u4f7f\u7528\u7684\u53c2\u6570\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 200\nDecay: 50\nMaximum Pages: 10000\nMinimum Pages: 100\nSleep Time: 20\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Customized"),"\uff1a\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u4ee5\u8fbe\u5230\u4f60\u60f3\u8981\u7684\u6027\u80fd\u3002")),(0,r.kt)("p",null,"Ksmtuned \u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u6765\u63a7\u5236 KSM \u6548\u7387\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Boost"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u53ef\u7528\u5185\u5b58\u5c0f\u4e8e",(0,r.kt)("strong",{parentName:"td"},"\u9608\u503c\u7cfb\u6570"),"\uff0c\u5219\u6bcf\u6b21\u626b\u63cf\u7684\u9875\u6570\u90fd\u4f1a\u589e\u52a0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Decay"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5982\u679c\u53ef\u7528\u5185\u5b58\u5927\u4e8e",(0,r.kt)("strong",{parentName:"td"},"\u9608\u503c\u7cfb\u6570"),"\uff0c\u5219\u6bcf\u6b21\u626b\u63cf\u7684\u9875\u6570\u90fd\u4f1a\u51cf\u5c11\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum Pages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u6b21\u626b\u63cf\u7684\u6700\u5927\u9875\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Minimum Pages"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u6b21\u626b\u63cf\u7684\u6700\u5c0f\u9875\u6570\uff0c\u4e5f\u662f\u7b2c\u4e00\u6b21\u8fd0\u884c\u7684\u914d\u7f6e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Sleep Time (ms)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e24\u6b21\u626b\u63cf\u4e4b\u95f4\u7684\u95f4\u9694\uff0c\u901a\u8fc7\u516c\u5f0f\uff08",(0,r.kt)("strong",{parentName:"td"},"Sleep Time")," ","*"," 16 ","*"," 1024","*"," 1024 / Total Memory\uff09\u8ba1\u7b97\u5f97\u51fa\u3002\u6700\u5c0f\u503c\uff1a10 \u6beb\u79d2\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f8b\u5982\uff0c\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u7684 512GiB \u5185\u5b58\u8282\u70b9"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 300\nDecay: 100\nMaximum Pages: 5000\nMinimum Pages: 1000\nSleep Time: 50\n")),(0,r.kt)("p",null,"Ksmtuned \u542f\u52a8\u65f6\uff0c\u5c06 KSM \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," \u521d\u59cb\u5316\u4e3a 1000\uff08",(0,r.kt)("strong",{parentName:"p"},"Minimum Pages"),"\uff09\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"sleep_millisecs")," \u8bbe\u7f6e\u4e3a 10 (50 ","*"," 16 ","*"," 1024 ","*"," 1024 / 536870912 KiB < 10)\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u5185\u5b58\u4f4e\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u9608\u503c\u7cfb\u6570"),"\u65f6\uff0cKSM \u5c06\u542f\u52a8\u3002\u5982\u679c\u68c0\u6d4b\u5230\u5b83\u6b63\u5728\u8fd0\u884c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," \u6bcf\u5206\u949f\u589e\u52a0 300\uff08",(0,r.kt)("strong",{parentName:"p"},"Boost"),"\uff09\u76f4\u5230\u8fbe\u5230 5000\uff08",(0,r.kt)("strong",{parentName:"p"},"Maximum Pages"),"\uff09\u3002"),(0,r.kt)("p",null,"\u53ef\u7528\u5185\u5b58\u9ad8\u4e8e",(0,r.kt)("strong",{parentName:"p"},"\u9608\u503c\u7cfb\u6570"),"\u65f6\uff0cKSM \u5c06\u505c\u6b62\u3002\u5982\u679c\u68c0\u6d4b\u5230\u5b83\u5df2\u505c\u6b62\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," \u6bcf\u5206\u949f\u9012\u51cf 100\uff08",(0,r.kt)("strong",{parentName:"p"},"Decay"),"\uff09\u76f4\u5230\u8fbe\u5230 1000\uff08",(0,r.kt)("strong",{parentName:"p"},"Minimum Pages"),"\uff09\u3002"))}d.isMDXComponent=!0},88178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-disks-e0c41f2c49e4a15f43835436f3acfe8e.png"},5007:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/check-added-disks-a95ff49af67f0af957b1d408dce34a43.png"},18670:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/cordon-nodes-1bd56c52995e6d73b2328bddc5f7e4fa.png"},8615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delete-node-66bb510f8160cf410a14ccafe973dbda.png"},47760:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-config-f9ec311ce5724fc3d7cf6340df88c119.png"},41374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-ksmtuned-14bde13e55cb1f5615d01d4258e8f5ce.png"},92921:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/force-format-disks-20ef70a38d55ebadcf90cc651f693c59.png"},62659:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/host-59f511ef325881a27dfe07b04af4b5a2.png"},16277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-maintenance-f7a92cb91c2123bd985fe26c2c3f283c.png"},27313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-ksmtuned-statistics-c3e0cac6dc3344b72e8726a6cca8990e.png"}}]);