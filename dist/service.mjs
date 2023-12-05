import t from"throttled-queue";class e{constructor(e=new URL("https://stage.namesys.xyz/"),s=function(){const e=t(30,1e4);return async()=>await e((()=>{}))}()){this.endpoint=e,this.waitForRateLimit=s}}export{e as default};
//# sourceMappingURL=service.mjs.map
