import{d as s,b as d,p as i,M as r,e as w,a as u,E as y,c as p,s as h,f as E}from"./index-925943aa.js";const f=async t=>{const a=s(new Uint8Array(await d(t))).find(n=>n.name==="tEXt");return a?i.decode(a.data):null},A=async({blob:t,metadata:e})=>{const a=s(new Uint8Array(await d(t))),n=i.encode(r.excalidraw,JSON.stringify(await w({text:e,compress:!0})));return a.splice(-1,0,n),new Blob([u(a)],{type:r.png})},x=async t=>{const e=await f(t);if((e==null?void 0:e.keyword)===r.excalidraw)try{const a=JSON.parse(e.text);if(!("encoded"in a)){if("type"in a&&a.type===y.excalidraw)return e.text;throw new Error("FAILED")}return await p(a)}catch(a){throw console.error(a),new Error("FAILED")}throw new Error("INVALID")},I=async({text:t})=>{const e=await h(JSON.stringify(await w({text:t})),!0);let a="";return a+=`<!-- payload-type:${r.excalidraw} -->`,a+="<!-- payload-version:2 -->",a+="<!-- payload-start -->",a+=e,a+="<!-- payload-end -->",a},D=async({svg:t})=>{if(t.includes(`payload-type:${r.excalidraw}`)){const e=t.match(/<!-- payload-start -->\s*(.+?)\s*<!-- payload-end -->/);if(!e)throw new Error("INVALID");const a=t.match(/<!-- payload-version:(\d+) -->/),l=((a==null?void 0:a[1])||"1")!=="1";try{const o=await E(e[1],l),c=JSON.parse(o);if(!("encoded"in c)){if("type"in c&&c.type===y.excalidraw)return o;throw new Error("FAILED")}return await p(c)}catch(o){throw console.error(o),new Error("FAILED")}}throw new Error("INVALID")};export{x as decodePngMetadata,D as decodeSvgMetadata,A as encodePngMetadata,I as encodeSvgMetadata,f as getTEXtChunk};
//# sourceMappingURL=image-663880d7.js.map
