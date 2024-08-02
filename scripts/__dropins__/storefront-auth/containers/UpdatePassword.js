import{jsx as i,jsxs as M}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as g,classes as z}from"@dropins/tools/lib.js";import{v as H,u as J,a as K}from"../chunks/usePasswordValidationMessage.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{a as Q}from"../chunks/getCustomerToken.js";import{r as X}from"../chunks/resetPassword.js";import{c as S,g as Y,u as Z,T as $,F as W,B as E}from"../chunks/useInLineAlert.js";import{useState as h,useEffect as O,useCallback as k}from"@dropins/tools/preact-hooks.js";import{useText as j}from"@dropins/tools/i18n.js";import{InLineAlert as C,InputPassword as R}from"@dropins/tools/components.js";import"../chunks/getStoreConfig.js";import"../chunks/network-error.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/initialize.js";import"../chunks/setReCaptchaToken.js";import"@dropins/tools/preact-compat.js";const I=(o,d)=>o.split("&").filter(r=>r.includes(d)).map(r=>r.split("=")[1])[0],tt=({isEmailConfirmationRequired:o,signInOnSuccess:d,passwordConfigs:e,routeRedirectOnSignIn:r,routeWrongUrlRedirect:a,onErrorCallback:u,onSuccessCallback:c,handleSetInLineAlertProps:m,routeRedirectOnPasswordUpdate:f})=>{const t=j({errorNotification:"Auth.Notification.errorNotification",updatePasswordMessage:"Auth.Notification.updatePasswordMessage",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage"}),[U,P]=h({userName:"",status:!1}),[L,N]=h(""),[x,_]=h(!1),[p,T]=h(""),[y,v]=h(""),[w,F]=h(!1);O(()=>{const{search:l}=window.location;!l.includes("token=")&&!l.includes("email=")&&S(a)&&(window.location.href=a());const s=decodeURIComponent(l),b=I(s,"token"),q=I(s,"email");T(q),v(b)},[a]);const B=k(async l=>{l.preventDefault(),F(!0);const s=Y(l.target),b=(s==null?void 0:s.password)&&p&&y,q=(e==null?void 0:e.requiredCharacterClasses)||0,G=(e==null?void 0:e.minLength)||0;if(!H(s==null?void 0:s.password,q)||s.password.length<+G){_(!0),F(!1);return}if(!b){m({type:"error",text:t.errorNotification}),F(!1);return}const{message:V,success:A}=await X(p,y,s.password);if(A){if(o||!o&&!d){S(f)&&(window.location.href=f()),_(!0),F(!1),m({type:"success",text:t.updatePasswordMessage}),N("");return}const n=await Q({email:p,password:s.password,handleSetInLineAlertProps:m,onErrorCallback:u,translations:t});n!=null&&n.userName&&(S(r)?window.location.href=r():(P({userName:n==null?void 0:n.userName,status:!0}),c==null||c(n==null?void 0:n.userName)))}else m({type:"error",text:V}),u==null||u({message:V,success:A});F(!1)},[p,y,e,o,t,d,m,r,f,u,c]),D=k(l=>{N(l)},[]);return{isSuccessful:U,updatePasswordValue:L,isClickSubmit:x,isLoading:w,submitUpdatePassword:B,handleSetUpdatePasswordValue:D}},et=({signInOnSuccess:o=!0,formSize:d="default",routeRedirectOnSignIn:e,routeWrongUrlRedirect:r,slots:a,onErrorCallback:u,onSuccessCallback:c,routeRedirectOnPasswordUpdate:m})=>{const f=j({title:"Auth.UpdatePasswordForm.title",buttonPrimary:"Auth.UpdatePasswordForm.buttonPrimary"}),{passwordConfigs:t,isEmailConfirmationRequired:U}=J(),{inLineAlertProps:P,handleSetInLineAlertProps:L}=Z(),{isSuccessful:N,updatePasswordValue:x,isClickSubmit:_,isLoading:p,submitUpdatePassword:T,handleSetUpdatePasswordValue:y}=tt({isEmailConfirmationRequired:U,signInOnSuccess:o,passwordConfigs:t,routeRedirectOnSignIn:e,routeWrongUrlRedirect:r,onErrorCallback:u,onSuccessCallback:c,handleSetInLineAlertProps:L,routeRedirectOnPasswordUpdate:m}),{isValidUniqueSymbols:v,defaultLengthMessage:w}=K({password:x,isClickSubmit:_,passwordConfigs:t});return N.status&&(a!=null&&a.SuccessNotification)?i(g,{"data-testid":"successNotificationTestId",name:"SuccessNotification",slot:a==null?void 0:a.SuccessNotification,context:{isSuccessful:N}}):M("div",{className:z(["auth-updatePasswordForm",d]),children:[i($,{text:f.title,bottomLine:!1,className:"auth-updatePasswordForm__title"}),P.text?i(C,{className:"auth-updatePasswordForm__notification",variant:"secondary",heading:P.text,icon:P.icon}):null,M(W,{name:"updatePassword_form",className:"auth-updatePasswordForm__form",submitCallback:T,isLoading:p,fieldsConfig:[],children:[i("div",{style:"display: none;",children:i("input",{type:"text",id:"username",name:"username",autocomplete:"username"})}),i(R,{defaultValue:x,onValue:y,className:"auth-updatePasswordForm__form__item",autoComplete:"new-password",name:"password",required:!0,error:v==="error"||(w==null?void 0:w.status)==="error",minLength:t==null?void 0:t.minLength,uniqueSymbolsStatus:v,validateLengthConfig:w,requiredCharacterClasses:t==null?void 0:t.requiredCharacterClasses}),i("div",{className:"auth-updatePasswordForm__button",children:i(E,{type:"submit",buttonText:f.buttonPrimary,variant:"primary",enableLoader:p})})]})]})},yt=({slots:o,formSize:d,signInOnSuccess:e,routeRedirectOnPasswordUpdate:r,routeRedirectOnSignIn:a,routeWrongUrlRedirect:u,onErrorCallback:c,onSuccessCallback:m})=>i("div",{className:"auth-update-password",children:i(et,{formSize:d,signInOnSuccess:e,routeRedirectOnSignIn:a,routeWrongUrlRedirect:u,onErrorCallback:c,onSuccessCallback:m,slots:o,routeRedirectOnPasswordUpdate:r})});export{yt as UpdatePassword,yt as default};
