// export class UrlParts {
    
//     decomposeURL(url:string) {

//         // http://foo.bar.com/foobar.html
//         // URL: https://www.foobar.com:8080/download/install.exe

//         const splitURL = url.split("/");

//         let protocol = splitURL[0];
//         let hostName = splitURL[2];
//         let partsOfHostName = hostName.split(".");
//         let subDomain;
//         let domainName;
//         if(partsOfHostName.length === 2) {
//             subDomain = "";
//             domainName = partsOfHostName[0] + "." + partsOfHostName[1];
//         } else if(partsOfHostName.length === 3)

//         let port = 80;
//         let path = arr[3];

//         return {
//             protocol,
//             subDomain,
//             domainName,
//             port,
//             path
//         };
//     }

//     private splitTheString(str:string, character:string) : string[] {
//         return str.split(character);
//     }

// }