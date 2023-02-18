'use strict';var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{'default':mod};};Object.defineProperty(exports,'__esModule',{value:true});exports.signIn=void 0;const bcrypt_1=__importDefault(require('bcrypt'));const errorsTypesEnum_1=require('../../types/errorsTypesEnum');async function signIn(payload,salt,db){const password=await bcrypt_1.default.hash(payload.password,salt);await db.$connect();const userResponse={id:payload.id,name:payload.name,surname:payload.surname,login:payload.login||payload.email||'',password:password,accounts:[]};if(!userResponse.login){return{payload:{},error:true,errorCode:errorsTypesEnum_1.ErrorsTypesEnum.invalidData,msg:'Email or login required!'};}const response=await db.users.create({include:{accounts:{include:{user:true}}},data:{name:userResponse.name,surname:userResponse.surname,login:userResponse.login,password:userResponse.password,accounts:undefined}});await db.$disconnect();return response;}exports.signIn=signIn;