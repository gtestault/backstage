/*! For license information please see d56e573c.5dd97b87.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[288286],{675251:(e,t,n)=>{n(727418);var s=n(667294),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),t.Fragment=i("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,i={},l=null,d=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:r,type:e,key:l,ref:d,props:i,_owner:o.current}}t.jsx=l,t.jsxs=l},785893:(e,t,n)=>{e.exports=n(675251)},759662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(785893),r=n(511151);const i={title:"New Backstage feature: Kubernetes for Service owners",author:"Matthew Clarke, Spotify",authorURL:"https://github.com/mclarke47"},o=void 0,a={permalink:"/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners",source:"@site/blog/2021-01-12-new-backstage-feature-kubernetes-for-service-owners.mdx",title:"New Backstage feature: Kubernetes for Service owners",description:"Animation of Kubernetes and cloud provider icons becoming the Backstage logo",date:"2021-01-12T00:00:00.000Z",formattedDate:"January 12, 2021",tags:[],readingTime:3.6,hasTruncateMarker:!0,authors:[{name:"Matthew Clarke, Spotify",url:"https://github.com/mclarke47"}],frontMatter:{title:"New Backstage feature: Kubernetes for Service owners",author:"Matthew Clarke, Spotify",authorURL:"https://github.com/mclarke47"},unlisted:!1,prevItem:{title:"Where do you start when adopting Backstage?",permalink:"/blog/2021/05/20/adopting-backstage"},nextItem:{title:"Announcing the Backstage Stability Index",permalink:"/blog/2020/12/22/stability-index"}},c={authorsImageUrls:[void 0]},l=[{value:"The missing link between K8s and your service",id:"the-missing-link-between-k8s-and-your-service",level:2},{value:"No more context switching",id:"no-more-context-switching",level:2},{value:"Automatic error reporting",id:"automatic-error-reporting",level:2},{value:"Autoscaling limits at a glance",id:"autoscaling-limits-at-a-glance",level:2},{value:"Pick a cloud, any Cloud",id:"pick-a-cloud-any-cloud",level:2},{value:"Rethinking the developer experience",id:"rethinking-the-developer-experience",level:2},{value:"Future iterations",id:"future-iterations",level:2},{value:"Getting started",id:"getting-started",level:2}];function d(e){const t=Object.assign({p:"p",img:"img",h2:"h2",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Animation of Kubernetes and cloud provider icons becoming the Backstage logo",src:n(507275).Z+"",width:"800",height:"450"})}),"\n",(0,s.jsx)(t.p,{children:"TLDR; We\u2019re rethinking the Kubernetes developer experience with a new feature: a Kubernetes monitoring tool that\u2019s designed around the needs of service owners, not cluster admins. Now developers can easily check the health of their services no matter how or where those services are deployed \u2014 whether it\u2019s on a local host for testing or in production on dozens of clusters around the world."}),"\n",(0,s.jsx)(t.p,{children:"And since Backstage uses the native Kubernetes API, the feature works with whichever cloud provider (AWS, Azure, GCP, etc.) or managed service (OpenShift, IBM Cloud, GKE, etc.) you already use."}),"\n","\n",(0,s.jsx)(t.h2,{id:"the-missing-link-between-k8s-and-your-service",children:"The missing link between K8s and your service"}),"\n",(0,s.jsx)(t.p,{children:"A core feature of Backstage is its service catalog, which aggregates information about software systems together inside a single tool, with a consistent, familiar UI."}),"\n",(0,s.jsx)(t.p,{children:"By navigating to a service\u2019s overview page in Backstage, you can see everything you need to know about the service: what it does, its APIs and technical documentation, CI/CD progress \u2014 and now detailed information about its presence on Kubernetes clusters."}),"\n",(0,s.jsx)(t.h2,{id:"no-more-context-switching",children:"No more context switching"}),"\n",(0,s.jsx)(t.p,{children:"Kubernetes in Backstage can be configured to search multiple clusters for your services. It will then aggregate them together into a single view. So if you deploy to multiple clusters you will no longer need to switch kubectl contexts to understand the current state of your service."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"List of deployments in Backstage Kubernetes plugin",src:n(156251).Z+"",width:"1999",height:"1092"})}),"\n",(0,s.jsx)(t.h2,{id:"automatic-error-reporting",children:"Automatic error reporting"}),"\n",(0,s.jsx)(t.p,{children:"Instead of trying different kubectl commands to figure out where an error occurred, Backstage will automatically find and highlight errors in Kubernetes resources that are affecting your service. So you can spend time fixing errors, not hunting for them."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Error reporting screen in Backstage Kubernetes plugin",src:n(587099).Z+"",width:"1999",height:"1091"})}),"\n",(0,s.jsx)(t.h2,{id:"autoscaling-limits-at-a-glance",children:"Autoscaling limits at a glance"}),"\n",(0,s.jsx)(t.p,{children:"Backstage also shows you how close your service is to its autoscaling limit. Coming up to a period of high load? Now you will be able to see how your horizontal autoscaling is dealing with it across multiple clusters."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Autoscaling limits screen in Backstage Kubernetes plugin",src:n(790346).Z+"",width:"3360",height:"1124"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Autoscaling limits screen in Backstage Kubernetes plugin",src:n(15805).Z+"",width:"1999",height:"1090"})}),"\n",(0,s.jsx)(t.h2,{id:"pick-a-cloud-any-cloud",children:"Pick a cloud, any Cloud"}),"\n",(0,s.jsx)(t.p,{children:"Since Backstage communicates directly with the Kubernetes API, it\u2019s cloud agnostic \u2014 it doesn\u2019t matter how or where you\u2019re running Kubernetes. You\u2019ll always get the same familiar view of your deployments, whether you\u2019re:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Deploying to clusters on AWS, Azure, GCP, or another cloud provider"}),"\n",(0,s.jsx)(t.li,{children:"Using an unmanaged or managed Kubernetes service (like OpenShift, etc.)"}),"\n",(0,s.jsx)(t.li,{children:"Migrating from one cloud provider or service to another"}),"\n",(0,s.jsx)(t.li,{children:"Testing on a single local machine or deploying to a dozen clusters in production"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"In short: local or global, single or multi-cloud, managed or unmanaged \u2014 Backstage always provides a seamless Kubernetes experience for your service owners\u2019 day-to-day development needs."}),"\n",(0,s.jsx)(t.h2,{id:"rethinking-the-developer-experience",children:"Rethinking the developer experience"}),"\n",(0,s.jsx)(t.p,{children:"The philosophy behind Backstage is simple: improve developer experience by reducing infrastructure complexity. As popular and widespread as Kubernetes has become, all of the tools to date have been geared toward the needs of cluster admins. These tools add unnecessary complexity to the workflows of the typical developer building, testing, and deploying services."}),"\n",(0,s.jsx)(t.p,{children:"We believe Backstage Kubernetes gives developers back control of their services by providing a more focused and consistent experience. Backstage provides a single standard for developers to monitor their Kubernetes deployments, regardless of the underlying cloud infrastructure."}),"\n",(0,s.jsx)(t.h2,{id:"future-iterations",children:"Future iterations"}),"\n",(0,s.jsx)(t.p,{children:"The current focus of Kubernetes in Backstage is Deployments/ReplicaSets/Pods \u2014 but we know that not everyone utilizes these."}),"\n",(0,s.jsxs)(t.p,{children:["As we continue to grow and develop Kubernetes in Backstage with the community, we hope to offer support for Kubernetes resources beyond Deployments and Custom Resource Definitions. You can browse or add open issues for the plugin ",(0,s.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+kubernetes+label%3Ak8s-plugin",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsxs)(t.p,{children:["We made the Kubernetes plugin a core feature of Backstage. Like Software Templates (scaffolder) and TechDocs, the k8s-plugin is installed with the core app. When you update the app to the latest version and go to the Kubernetes tab of any service, you will be asked to provide your cloud provider credentials. To learn more, including details on configuration and surfacing your Kubernetes components as part of an entity, ",(0,s.jsx)(t.a,{href:"https://backstage.io/docs/features/kubernetes/overview",children:"read the docs"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["To contribute or get more information on Kubernetes in Backstage, ",(0,s.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"join the discussion on Discord"}),"!"]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},507275:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/backstage-k8s-1-hero-85649533931182a78497138b2dc803c2.gif"},156251:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/backstage-k8s-2-deployments-36ca3f831747105e25f3e69e7e459032.png"},587099:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/backstage-k8s-3-error-reporting-3620b313e23820f8fb2425944483b0c6.png"},790346:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/backstage-k8s-4-autoscaling-limits-71b75d961b4eae3dbad2fd7b4f18174b.png"},15805:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/backstage-k8s-5-autoscaling-limits-0034663df8dcdd3e2e5b8ef6adf071d0.png"},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var s=n(667294);const r=s.createContext({});function i(e){const t=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:i(e),s.createElement(r.Provider,{value:a},t)}}}]);