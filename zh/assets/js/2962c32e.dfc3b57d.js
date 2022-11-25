"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3675],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:17,sidebar_label:"\u5e38\u89c1\u95ee\u9898",title:"\u5e38\u89c1\u95ee\u9898"},l=void 0,s={unversionedId:"faq",id:"faq",title:"\u5e38\u89c1\u95ee\u9898",description:"\u672c\u6587\u5305\u542b\u4e86\u7528\u6237\u5e38\u89c1\u7684 Harvester \u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/zh/v1.1/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:17,frontMatter:{sidebar_position:17,sidebar_label:"\u5e38\u89c1\u95ee\u9898",title:"\u5e38\u89c1\u95ee\u9898"},sidebar:"tutorialSidebar",previous:{title:"\u76d1\u63a7",permalink:"/zh/v1.1/troubleshooting/monitoring"}},i={},c=[{value:"\u5982\u4f55\u901a\u8fc7 SSH \u767b\u5f55\u5230 Harvester \u8282\u70b9\uff1f",id:"\u5982\u4f55\u901a\u8fc7-ssh-\u767b\u5f55\u5230-harvester-\u8282\u70b9",level:3},{value:"Harvester \u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48\uff1f",id:"harvester-\u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u8bbf\u95ee Harvester \u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\uff1f",id:"\u5982\u4f55\u8bbf\u95ee-harvester-\u96c6\u7fa4\u7684-kubeconfig-\u6587\u4ef6",level:3},{value:"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5 qemu-guest-agent",id:"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5-qemu-guest-agent",level:3},{value:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f",id:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5305\u542b\u4e86\u7528\u6237\u5e38\u89c1\u7684 Harvester \u95ee\u9898\u3002"),(0,a.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7-ssh-\u767b\u5f55\u5230-harvester-\u8282\u70b9"},"\u5982\u4f55\u901a\u8fc7 SSH \u767b\u5f55\u5230 Harvester \u8282\u70b9\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,a.kt)("h3",{id:"harvester-\u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48"},"Harvester \u4eea\u8868\u76d8\u7684\u9ed8\u8ba4\u767b\u5f55\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f\u4ec0\u4e48\uff1f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # \u9996\u6b21\u767b\u5f55\u65f6\u4f1a\u63d0\u793a\u4f60\u8bbe\u7f6e\u9ed8\u8ba4\u5bc6\u7801\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u8bbf\u95ee-harvester-\u96c6\u7fa4\u7684-kubeconfig-\u6587\u4ef6"},"\u5982\u4f55\u8bbf\u95ee Harvester \u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\uff1f"),(0,a.kt)("p",null,"\u9009\u9879 1\uff1a\u4f60\u53ef\u4ee5\u4ece Harvester \u4eea\u8868\u76d8\u7684\u652f\u6301\u9875\u9762\u4e0b\u8f7d kubeconfig \u6587\u4ef6\u3002\n",(0,a.kt)("img",{alt:"harvester-kubeconfig.png",src:r(68001).Z,width:"2866",height:"1246"})),(0,a.kt)("p",null,"\u9009\u9879 2\uff1a\u4f60\u53ef\u4ee5\u4ece\u5176\u4e2d\u4e00\u4e2a Harvester \u7ba1\u7406\u8282\u70b9\u83b7\u53d6 kubeconfig \u6587\u4ef6\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5-qemu-guest-agent"},"\u5982\u4f55\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u4e0a\u5b89\u88c5 qemu-guest-agent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init \u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0 cloud-init \u914d\u7f6e\u540e\u8bf7\u91cd\u65b0\u542f\u52a8\u5b83\u3002\n$ cloud-init clean --logs --reboot\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/topics/cli.html#clean")),(0,a.kt)("h3",{id:"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801"},"\u5982\u4f55\u91cd\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\uff1f"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5fd8\u8bb0\u4e86\u7ba1\u7406\u5458\u5bc6\u7801\uff0c\u8bf7\u901a\u8fc7\u547d\u4ee4\u884c\u8fdb\u884c\u91cd\u7f6e\u3002SSH \u5230\u5176\u4e2d\u4e00\u4e2a\u7ba1\u7406\u8282\u70b9\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5207\u6362\u5230 root \u5e76\u8fd0\u884c\uff1a\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")))}p.isMDXComponent=!0},68001:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);