// import { LogLevel } from "@azure/msal-browser";

// export const msalConfig = {
//     auth: {
//         clientId: '0b356004-4cfc-4566-8907-d25042d420b8',
//         authority: 'https://login.microsoftonline.com/ctocodegaragetech.onmicrosoft.com',
//         redirectUri: '/',
//         postLogoutRedirectUrl: '/',
//         navigateToLoginRequestUrl: false,
//     },
//     cache: {
//         cacheLocation: 'sessionStorage',
//         setAuthStateInCookie: false,
//     },
//     system: {
//         loggerOptions: {
//             loggerCallback: (level, message, containsPii) => {
//                 if(containsPii){
//                     return;
//                 }
//                 switch (level) {
//                     case LogLevel.Error:
//                         console.error(message);
//                         return;
//                     case LogLevel.Info:
//                         console.info(message);
//                         return;
//                     case LogLevel.Verbose:
//                         console.Verbose(message);
//                         return;
//                     case LogLevel.Warning:
//                         console.warn(message);
//                         return;
//                     default:
//                         return;

//                 }
//             }
//         }
//     }
// }


// export const loginRequest = {
//     scopes: ['user.read','Team.ReadBasic.All','TeamMember.Read.All'],
//     prompt: 'select_account'
// }