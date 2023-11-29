import t from"throttled-queue";class s{constructor(s=new URL("https://ipns.namesys.xyz/"),e=function(){const s=t(30,1e4);return async()=>await s((()=>{}))}()){this.endpoint=s,this.waitForRateLimit=e}}export{s as default};
//# sourceMappingURL=service.mjs.map
