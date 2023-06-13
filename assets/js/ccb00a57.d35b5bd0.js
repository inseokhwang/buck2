"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1473],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>m,mdx:()=>_,useMDXComponents:()=>d,withMDXComponents:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){return function(t){var n=d(t.components);return r.createElement(e,o({},t,{components:n}))}},d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,c=s["".concat(u,".").concat(m)]||s[m]||x[m]||o;return n?r.createElement(c,l(l({ref:t},i),{},{components:n})):r.createElement(c,l({ref:t},i))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},28378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={id:"bxl_output_stream"},u="bxl_output_stream type",l={unversionedId:"api/bxl/bxl_output_stream",id:"api/bxl/bxl_output_stream",title:"bxl_output_stream type",description:"The output stream for bxl to print values to the console as their result",source:"@site/../docs/api/bxl/bxl_output_stream.generated.md",sourceDirName:"api/bxl",slug:"/api/bxl/bxl_output_stream",permalink:"/docs/api/bxl/bxl_output_stream",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl_output_stream"},sidebar:"manualSidebar",previous:{title:"bxl_ctx type",permalink:"/docs/api/bxl/bxl_ctx"},next:{title:"configured_attr_val type",permalink:"/docs/api/bxl/configured_attr_val"}},p={},i=[{value:"bxl_output_stream.ensure",id:"bxl_output_streamensure",level:2},{value:"bxl_output_stream.ensure_multiple",id:"bxl_output_streamensure_multiple",level:2},{value:"bxl_output_stream.print",id:"bxl_output_streamprint",level:2},{value:"bxl_output_stream.print_json",id:"bxl_output_streamprint_json",level:2}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"bxl_output_stream-type"},(0,a.mdx)("inlineCode",{parentName:"h1"},"bxl_output_stream")," type"),(0,a.mdx)("p",null,"The output stream for bxl to print values to the console as their result"),(0,a.mdx)("h2",{id:"bxl_output_streamensure"},"bxl","_","output","_","stream.ensure"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_output_stream.ensure(artifact: "") -> "ensured_artifact"\n')),(0,a.mdx)("p",null,"Marks the artifact as an artifact that should be available to the users at the end of the bxl invocation. Any artifacts that do not get registered via this call is not accessible by users at the end of bxl script."),(0,a.mdx)("p",null,"This function returns an ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensured_artifact")," type that can be printed via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()"),"\nto print its actual path on disk."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_ensure(ctx):\n    actions = ctx.actions_factory\n    output = actions.write("my_output", "my_content")\n    ensured = ctx.output.ensure(output)\n    ctx.output.print(ensured)\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxl_output_streamensure_multiple"},"bxl","_","output","_","stream.ensure","_","multiple"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_output_stream.ensure_multiple(artifacts: "") -> ""\n')),(0,a.mdx)("p",null,"Same as ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensure"),", but for multiple artifacts. Will preserve the shape of the inputs (i.e. if the resulting ",(0,a.mdx)("inlineCode",{parentName:"p"},"Dict")," of a ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.build()")," is passed in, the output will be a ",(0,a.mdx)("inlineCode",{parentName:"p"},"Dict")," where the key is preserved, and the values are converted to ",(0,a.mdx)("inlineCode",{parentName:"p"},"EnsuredArtifact"),"s)."),(0,a.mdx)("p",null,"Note that is slower to loop through objects and ensure them one by one than it is to call ",(0,a.mdx)("inlineCode",{parentName:"p"},"ensure_multiple()"),"\non all the objects at once (if possible).\nSo, it is suggested to use this method when you are only ensuring a few individual artifacts that are not stored in an iterable."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"def _impl_ensure_multiple(ctx):\n    outputs = {}\n    for target, value in ctx.build(ctx.cli_args.target).items():\n    outputs.update({target.raw_target(): ctx.output.ensure_multiple(value.artifacts())})\n    ctx.output.print_json(outputs)\n")),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxl_output_streamprint"},"bxl","_","output","_","stream.print"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_output_stream.print(*args, sep: str.type = " ") -> None\n')),(0,a.mdx)("p",null,'Outputs results to the console via stdout. These outputs are considered to be the results of a bxl script, which will be displayed to stdout by buck2 even when the script is cached. Accepts an optional separator that defaults to " ".'),(0,a.mdx)("p",null,"Prints that are not result of the bxl should be printed via stderr via the stdlib ",(0,a.mdx)("inlineCode",{parentName:"p"},"print"),"\nand ",(0,a.mdx)("inlineCode",{parentName:"p"},"pprint"),". Note that ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print()")," is intended for simple outputs. For more complex\noutputs, the recommendation would be to write them to a file."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_print(ctx):\n    ctx.output.print("test")\n')),(0,a.mdx)("hr",null),(0,a.mdx)("h2",{id:"bxl_output_streamprint_json"},"bxl","_","output","_","stream.print","_","json"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def bxl_output_stream.print_json(value: "", *, pretty: bool.type = True) -> None\n')),(0,a.mdx)("p",null,"Outputs results to the console via stdout as pretty-printed json. Pretty printing can be turned off by the ",(0,a.mdx)("inlineCode",{parentName:"p"},"pretty")," keyword-only parameter. These outputs are considered to be the results of a bxl script, which will be displayed to stdout by buck2 even when the script is cached."),(0,a.mdx)("p",null,"Prints that are not result of the bxl should be printed via stderr via the stdlib ",(0,a.mdx)("inlineCode",{parentName:"p"},"print"),"\nand ",(0,a.mdx)("inlineCode",{parentName:"p"},"pprint"),"."),(0,a.mdx)("p",null,"Sample usage:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},'def _impl_print_json(ctx):\n    outputs = {}\n    outputs.update({"foo": bar})\n    ctx.output.print_json("test")\n')))}d.isMDXComponent=!0}}]);