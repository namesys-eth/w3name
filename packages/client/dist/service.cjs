"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=t(require("throttled-queue"));module.exports=class{constructor(t=new URL("https://stage.namesys.xyz/"),n=function(){const t=e.default(30,1e4);return async()=>await t((()=>{}))}()){this.endpoint=t,this.waitForRateLimit=n}};
//# sourceMappingURL=service.cjs.map
