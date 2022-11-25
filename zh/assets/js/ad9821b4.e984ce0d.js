"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:2,sidebar_label:"\u865a\u62df\u5316\u7ba1\u7406",title:"\u865a\u62df\u5316\u7ba1\u7406",keywords:["Harvester","Rancher"]},l=void 0,o={unversionedId:"rancher/virtualization-management",id:"version-v1.0/rancher/virtualization-management",title:"\u865a\u62df\u5316\u7ba1\u7406",description:"\u5bf9\u4e8e Harvester v0.3.0 \u53ca\u66f4\u9ad8\u7248\u672c\uff0c\u4f7f\u7528 Rancher v2.6 \u53ca\u66f4\u9ad8\u7248\u672c\u5c06\u652f\u6301\u5177\u6709\u591a\u96c6\u7fa4\u7ba1\u7406\u529f\u80fd\u7684\u865a\u62df\u5316\u7ba1\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.0/rancher/virtualization-management.md",sourceDirName:"rancher",slug:"/rancher/virtualization-management",permalink:"/zh/v1.0/rancher/virtualization-management",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/virtualization-management.md",tags:[],version:"v1.0",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u865a\u62df\u5316\u7ba1\u7406",title:"\u865a\u62df\u5316\u7ba1\u7406",keywords:["Harvester","Rancher"]},sidebar:"tutorialSidebar",previous:{title:"Rancher \u96c6\u6210",permalink:"/zh/v1.0/rancher/rancher-integration"},next:{title:"Harvester \u4e3b\u673a\u9a71\u52a8",permalink:"/zh/v1.0/rancher/node/node-driver"}},s={},p=[{value:"\u591a\u79df\u6237",id:"\u591a\u79df\u6237",level:2},{value:"\u591a\u79df\u6237\u793a\u4f8b",id:"\u591a\u79df\u6237\u793a\u4f8b",level:3},{value:"\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4",id:"\u5220\u9664\u5bfc\u5165\u7684-harvester-\u96c6\u7fa4",level:2}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5bf9\u4e8e Harvester v0.3.0 \u53ca\u66f4\u9ad8\u7248\u672c\uff0c\u4f7f\u7528 Rancher v2.6 \u53ca\u66f4\u9ad8\u7248\u672c\u5c06\u652f\u6301\u5177\u6709\u591a\u96c6\u7fa4\u7ba1\u7406\u529f\u80fd\u7684\u865a\u62df\u5316\u7ba1\u7406\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8981\u96c6\u6210 Harvester ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"\uff0c\u4f60\u9700\u8981\u4f7f\u7528 Rancher Server ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.3")," \u6216\u66f4\u9ad8\u7248\u672c\u3002\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6307\u5357\u4e4b\u4e00\uff0c\u5728\u4f60\u9009\u62e9\u7684\u63d0\u4f9b\u5546\u4e2d\u90e8\u7f72\u548c\u914d\u7f6e Rancher \u548c Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-qs/"},"AWS"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-marketplace-qs/"},"AWS Marketplace"),"\uff08\u4f7f\u7528 Amazon EKS\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/microsoft-azure-qs/"},"Azure"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/digital-ocean-qs/"},"DigitalOcean"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/google-gcp-qs/"},"GCP"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/hetzner-cloud-qs/"},"Hetzner Cloud"),"\uff08\u4f7f\u7528 Terraform\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/quickstart-vagrant/"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/equinix-metal-qs/"},"Equinix Metal"))),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Docker \u6765\u5b89\u88c5 Rancher"),"\u3002\u5426\u5219\uff0c\u4f60\u7684\u73af\u5883\u53ef\u80fd\u4f1a\u635f\u574f\uff0c\u800c\u4e14\u96c6\u7fa4\u53ef\u80fd\u65e0\u6cd5\u6062\u590d\u3002\u5728 Docker \u4e2d\u5b89\u88c5 Rancher \u53ea\u9002\u7528\u4e8e\u5feb\u901f\u8bc4\u4f30\u548c\u6d4b\u8bd5\u573a\u666f\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u8981\u4f7f\u7528 Docker \u5b89\u88c5 Rancher\uff1a"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e Linux \u4e3b\u673a\u6765\u521b\u5efa\u81ea\u5b9a\u4e49\u96c6\u7fa4\u3002\u4f60\u7684\u4e3b\u673a\u53ef\u4ee5\u662f\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e91\u865a\u62df\u673a"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u865a\u62df\u673a"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668"))),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f60\u60ef\u7528\u7684 shell\uff08\u4f8b\u5982 PuTTy \u6216\u8fdc\u7a0b\u7ec8\u7aef\u8fde\u63a5\uff09\u767b\u5f55\u4f60\u7684 Linux \u4e3b\u673a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5728 shell \u4e2d\uff0c\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e3a\u4e86\u5feb\u901f\u8bc4\u4f30\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c Rancher Server\n$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.6\n"))))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Rancher Server \u6b63\u5e38\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u767b\u5f55\u8fdb\u53bb\uff0c\u70b9\u51fb\u5de6\u4e0a\u89d2\u7684\u6c49\u5821\u83dc\u5355\uff0c\u7136\u540e\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Virtualization Management")," \u9009\u9879\u5361\u3002\u9009\u62e9 ",(0,n.kt)("strong",{parentName:"li"},"Import Existing"),"\uff0c\u5c06\u4e0b\u6e38 Harvester \u96c6\u7fa4\u5bfc\u5165 Rancher Server\u3002\n",(0,n.kt)("img",{src:r(10483).Z,width:"1848",height:"724"})),(0,n.kt)("li",{parentName:"ol"},"\u6307\u5b9a ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Name")," \u5e76\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Create"),"\u3002\u7136\u540e\u4f60\u5c06\u770b\u5230\u6ce8\u518c\u6307\u5357\u3002\u8bf7\u6253\u5f00\u76ee\u6807 Harvester \u96c6\u7fa4\u7684\u4eea\u8868\u76d8\u5e76\u6309\u7167\u6307\u5357\u8fdb\u884c\u64cd\u4f5c\u3002\n",(0,n.kt)("img",{src:r(17736).Z,width:"1024",height:"454"})),(0,n.kt)("li",{parentName:"ol"},"Agent \u8282\u70b9\u5c31\u7eea\u540e\uff0c\u4f60\u5e94\u8be5\u80fd\u591f\u4ece Rancher Server \u67e5\u770b\u548c\u8bbf\u95ee\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\uff0c\u5e76\u7ba1\u7406\u4f60\u7684\u865a\u62df\u673a\u3002\n",(0,n.kt)("img",{src:r(75951).Z,width:"2559",height:"801"})),(0,n.kt)("li",{parentName:"ol"},"\u5728 Harvester UI \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5355\u51fb\u6c49\u5821\u83dc\u5355\u5bfc\u822a\u56de Rancher \u591a\u96c6\u7fa4\u7ba1\u7406\u9875\u9762\u3002\n",(0,n.kt)("img",{src:r(65086).Z,width:"2555",height:"1222"}))),(0,n.kt)("h2",{id:"\u591a\u79df\u6237"},"\u591a\u79df\u6237"),(0,n.kt)("p",null,"\u5728 Harvester \u4e2d\uff0c\u6211\u4eec\u5229\u7528\u4e86\u73b0\u6709\u7684 Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"RBAC \u6388\u6743"),"\uff0c\u4ee5\u4fbf\u7528\u6237\u6839\u636e\u4ed6\u4eec\u7684\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272\u6743\u9650\u67e5\u770b\u548c\u7ba1\u7406\u4e00\u7ec4\u8d44\u6e90\u3002"),(0,n.kt)("p",null,"\u5728 Rancher \u4e2d\uff0c\u6bcf\u4e2a\u4eba\u90fd\u9a8c\u8bc1\u4e3a\u4e00\u4e2a\u7528\u6237\u6765\u8bbf\u95ee Rancher\u3002\u7528\u6237\u53ef\u4ee5\u662f\u672c\u5730\u7528\u6237\u6216\u5916\u90e8\u7528\u6237\uff08\u5982",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/authentication/"},"\u8eab\u4efd\u9a8c\u8bc1"),"\u4e2d\u6240\u8ff0\uff09\u3002"),(0,n.kt)("p",null,"\u7528\u6237\u767b\u5f55\u5230 Rancher \u540e\uff0c\u4ed6\u4eec\u7684\u6388\u6743\uff08\u4e5f\u79f0\u4e3a\u8bbf\u95ee\u6743\u9650\uff09\u7531\u5168\u5c40\u6743\u9650\u4ee5\u53ca\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272\u51b3\u5b9a\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},(0,n.kt)("strong",{parentName:"a"},"\u5168\u5c40\u6743\u9650")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u6240\u6709\u7279\u5b9a\u96c6\u7fa4\u4e4b\u5916\u5b9a\u4e49\u7528\u6237\u6388\u6743\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/"},(0,n.kt)("strong",{parentName:"a"},"\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272")),"\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u4e3a\u7528\u6237\u5206\u914d\u89d2\u8272\u7684\u7279\u5b9a\u96c6\u7fa4\u6216\u9879\u76ee\u4e2d\u5b9a\u4e49\u7528\u6237\u6388\u6743\u3002")))),(0,n.kt)("p",null,"\u5168\u5c40\u6743\u9650\u4ee5\u53ca\u96c6\u7fa4\u548c\u9879\u76ee\u89d2\u8272\u90fd\u662f\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC")," \u4e4b\u4e0a\u5b9e\u73b0\u7684\u3002\u56e0\u6b64\uff0c\u6743\u9650\u548c\u89d2\u8272\u7531 Kubernetes \u6267\u884c\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6240\u6709\u8005\u53ef\u4ee5\u5b8c\u5168\u63a7\u5236\u96c6\u7fa4\u53ca\u5176\u5185\u90e8\u7684\u6240\u6709\u8d44\u6e90\uff0c\u4f8b\u5982\u4e3b\u673a\u3001\u865a\u62df\u673a\u3001\u5377\u3001\u955c\u50cf\u3001\u7f51\u7edc\u3001\u5907\u4efd\u548c\u8bbe\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5c06\u9879\u76ee\u7528\u6237\u5206\u914d\u5230\u6709\u6743\u9650\u7ba1\u7406\u9879\u76ee\u5185\u90e8\u8d44\u6e90\u7684\u7279\u5b9a\u9879\u76ee\u3002")),(0,n.kt)("h3",{id:"\u591a\u79df\u6237\u793a\u4f8b"},"\u591a\u79df\u6237\u793a\u4f8b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u89e3\u91ca\u4e86\u591a\u79df\u6237\u529f\u80fd\u7684\u5de5\u4f5c\u539f\u7406\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9996\u5148\uff0c\u901a\u8fc7 Rancher ",(0,n.kt)("inlineCode",{parentName:"li"},"Users & Authentication")," \u9875\u9762\u6dfb\u52a0\u65b0\u7528\u6237\u3002\u7136\u540e\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," \u6dfb\u52a0\u4e24\u4e2a\u65b0\u7528\u6237\uff0c\u5206\u522b\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly"),"\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u662f\u6709\u6743\u7ba1\u7406\u7279\u5b9a\u9879\u76ee\uff08\u4f8b\u5982\u9ed8\u8ba4\u9879\u76ee\uff09\u7684\u8d44\u6e90\u7684\u7528\u6237\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," \u662f\u5177\u6709\u7279\u5b9a\u9879\u76ee\uff08\u4f8b\u5982\u9ed8\u8ba4\u9879\u76ee\uff09\u7684\u53ea\u8bfb\u6743\u9650\u7684\u7528\u6237\u3002\n",(0,n.kt)("img",{src:r(32445).Z,width:"2556",height:"1159"})))),(0,n.kt)("li",{parentName:"ol"},"\u5bfc\u822a\u5230 Harvester UI \u540e\uff0c\u5355\u51fb\u5176\u4e2d\u4e00\u4e2a\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u70b9\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Projects/Namespaces")," \u9009\u9879\u5361\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u4e2a\u9879\u76ee\uff08\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"default"),"\uff09\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit Config")," \u6765\u5c06\u7528\u6237\u5206\u914d\u7ed9\u8be5\u9879\u76ee\u5e76\u5206\u914d\u9002\u5f53\u7684\u6743\u9650\u3002\u4f8b\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u7528\u6237\u4f1a\u88ab\u5206\u914d\u5230\u9879\u76ee\u6240\u6709\u8005\u89d2\u8272\u3002\n",(0,n.kt)("img",{src:r(48257).Z,width:"897",height:"733"})))),(0,n.kt)("li",{parentName:"ol"},"\u7ee7\u7eed\u5c06 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," \u7528\u6237\u6dfb\u52a0\u5230\u540c\u4e00\u9879\u76ee\u4e2d\uff0c\u5206\u914d\u53ea\u8bfb\u6743\u9650\uff0c\u7136\u540e\u5355\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002\n",(0,n.kt)("img",{src:r(34703).Z,width:"2559",height:"947"})),(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u65e0\u75d5\u6d4f\u89c8\u6a21\u5f0f\uff0c\u5e76\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u8eab\u4efd\u767b\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," \u7528\u6237\u8eab\u4efd\u767b\u5f55\u540e\uff0c\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Virtualization Management")," \u9009\u9879\u5361\u3002\u7136\u540e\uff0c\u4f60\u5c06\u80fd\u770b\u5230\u4f60\u5206\u914d\u5230\u7684\u96c6\u7fa4\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,n.kt)("strong",{parentName:"li"},"Images")," \u9009\u9879\u5361\u4ee5\u67e5\u770b\u4e4b\u524d\u4e0a\u4f20\u5230 harvester-public \u547d\u540d\u7a7a\u95f4\u7684\u955c\u50cf\u5217\u8868\u3002\u4f60\u4e5f\u53ef\u4ee5\u6309\u9700\u4e0a\u4f20\u4f60\u81ea\u5df1\u7684\u955c\u50cf\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f60\u4e0a\u4f20\u7684\u955c\u50cf\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u673a\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u53e6\u4e00\u4e2a\u7528\u6237\u767b\u5f55\uff08\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly"),"\uff09\uff0c\u8fd9\u4e2a\u7528\u6237\u53ea\u6709\u8fd9\u4e2a\u9879\u76ee\u7684\u8bfb\u6743\u9650\u3002")),(0,n.kt)("h2",{id:"\u5220\u9664\u5bfc\u5165\u7684-harvester-\u96c6\u7fa4"},"\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4"),(0,n.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728 ",(0,n.kt)("strong",{parentName:"p"},"Virtualization Management > Harvester Clusters")," \u9875\u9762\uff0c\u5728 Rancher UI \u4e2d\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002\u9009\u62e9\u8981\u5220\u9664\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Delete")," \u6309\u94ae\uff0c\u4ece\u800c\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delete-cluster",src:r(83401).Z,width:"3578",height:"1638"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4e0d\u8981\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ...")," \u547d\u4ee4\u6765\u5220\u9664\u5bfc\u5165\u7684 Harvester \u96c6\u7fa4\uff0c\u56e0\u4e3a\u8fd9\u5c06\u5220\u9664 Harvester \u96c6\u7fa4\u6240\u9700\u8981\u7684\u6574\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u3002")))}m.isMDXComponent=!0},48257:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/add-member-943f18a8d8aab0377ddf8c74d15a44a4.png"},34703:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/added-user-74f30dba0c2ea1936837d3ebfa781335.png"},32445:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-user-9b8348a8edeeff5ea8537ea4739df041.png"},83401:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/delete-harvester-cluster-d4571d1521fa3e2b3bb4078d456bc481.png"},65086:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harv-back-c989871813d3966b8175840c417c0396.png"},75951:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harv-cluster-view-066656890fd03300b5964da81dd0b079.png"},17736:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harv-importing-3284d4c71fff9d88bde954de0fca8cb9.png"},10483:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vm-menu-9370f3a907e8bc5e4c78f2cf3ac17184.png"}}]);