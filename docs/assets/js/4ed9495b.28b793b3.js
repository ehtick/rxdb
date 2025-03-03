"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[1199],{2764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"rx-storage-sqlite","title":"RxDB SQLite RxStorage for Hybrid Apps","description":"Unlock seamless persistence with SQLite RxStorage. Explore usage in hybrid apps, compare performance, and leverage advanced features like attachments.","source":"@site/docs/rx-storage-sqlite.md","sourceDirName":".","slug":"/rx-storage-sqlite.html","permalink":"/rx-storage-sqlite.html","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RxDB SQLite RxStorage for Hybrid Apps","slug":"rx-storage-sqlite.html","description":"Unlock seamless persistence with SQLite RxStorage. Explore usage in hybrid apps, compare performance, and leverage advanced features like attachments."},"sidebar":"tutorialSidebar","previous":{"title":"Memory","permalink":"/rx-storage-memory.html"},"next":{"title":"Filesystem Node \ud83d\udc51","permalink":"/rx-storage-filesystem-node.html"}}');var i=a(4848),n=a(8453),r=(a(7580),a(3894));const o={title:"RxDB SQLite RxStorage for Hybrid Apps",slug:"rx-storage-sqlite.html",description:"Unlock seamless persistence with SQLite RxStorage. Explore usage in hybrid apps, compare performance, and leverage advanced features like attachments."},l="SQLite RxStorage",c={},d=[{value:"Performance comparison with other storages",id:"performance-comparison-with-other-storages",level:2},{value:"Using the SQLite RxStorage",id:"using-the-sqlite-rxstorage",level:2},{value:"Trial Version",id:"trial-version",level:2},{value:"RxDB Premium \ud83d\udc51",id:"rxdb-premium-",level:2},{value:"SQLiteBasics",id:"sqlitebasics",level:2},{value:"Using the SQLite RxStorage with different SQLite libraries",id:"using-the-sqlite-rxstorage-with-different-sqlite-libraries",level:2},{value:"Usage with the <strong>sqlite3 npm package</strong>",id:"usage-with-the-sqlite3-npm-package",level:3},{value:"Usage with the <strong>node</strong> package",id:"usage-with-the-node-package",level:3},{value:"Usage with Webassembly in the Browser",id:"usage-with-webassembly-in-the-browser",level:3},{value:"Usage with <strong>React Native</strong>",id:"usage-with-react-native",level:3},{value:"Usage with <strong>Expo SQLite</strong>",id:"usage-with-expo-sqlite",level:3},{value:"Usage with <strong>SQLite Capacitor</strong>",id:"usage-with-sqlite-capacitor",level:3},{value:"Database Connection",id:"database-connection",level:2},{value:"Known Problems of SQLite in JavaScript apps",id:"known-problems-of-sqlite-in-javascript-apps",level:2},{value:"Related",id:"related",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"sqlite-rxstorage",children:"SQLite RxStorage"})}),"\n",(0,i.jsxs)(t.p,{children:["This ",(0,i.jsx)(t.a,{href:"/rx-storage.html",children:"RxStorage"})," is based on ",(0,i.jsx)(t.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})," and is made to work with ",(0,i.jsx)(t.strong,{children:"Node.js"}),", ",(0,i.jsx)(t.a,{href:"/electron-database.html",children:"Electron"}),", ",(0,i.jsx)(t.a,{href:"/react-native-database.html",children:"React Native"})," and ",(0,i.jsx)(t.a,{href:"/capacitor-database.html",children:"Capacitor"})," or SQLite via webassembly in the browser. It can be used with different so called ",(0,i.jsx)(t.code,{children:"sqliteBasics"})," adapters to account for the differences in the various SQLite bundles and libraries that exist."]}),"\n",(0,i.jsxs)(t.p,{children:["SQLite is a natural fit for RxDB because most platforms - Android, iOS, Node.js, and beyond - already ship with a built-in SQLite engine, delivering robust performance and minimal setup overhead. Its proven reliability, having powered countless applications over the years, ensures a battle-tested foundation for local data. By placing RxDB on top of SQLite, you gain advanced features suited for building interactive, offline-capable UI apps: ",(0,i.jsx)(t.a,{href:"/rx-query.html#observe",children:"real-time queries"}),", reactive state updates, ",(0,i.jsx)(t.a,{href:"/transactions-conflicts-revisions.html",children:"conflict handling"}),", ",(0,i.jsx)(t.a,{href:"/encryption.html",children:"data encryption"}),", and straightforward ",(0,i.jsx)(t.a,{href:"/rx-schema.html",children:"schema management"}),". This combination offers a unified NoSQL-like experience without sacrificing the speed and broad availability that SQLite brings."]}),"\n",(0,i.jsx)(t.h2,{id:"performance-comparison-with-other-storages",children:"Performance comparison with other storages"}),"\n",(0,i.jsxs)(t.p,{children:["The SQLite storage is a bit slower compared to other Node.js based storages like the ",(0,i.jsx)(t.a,{href:"/rx-storage-filesystem-node.html",children:"Filesystem Storage"})," because wrapping SQLite has a bit of overhead and sending data from the JavaScript process to SQLite and backwards increases the latency. However for most hybrid apps the SQLite storage is the best option because it can leverage the SQLite version that comes already installed on the smartphones OS (iOS and android). Also for desktop electron apps it can be a viable solution because it is easy to ship SQLite together inside of the electron bundle."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"./files/rx-storage-performance-node.png",alt:"SQLite performance - Node.js",width:"700"})}),"\n",(0,i.jsx)(t.h2,{id:"using-the-sqlite-rxstorage",children:"Using the SQLite RxStorage"}),"\n",(0,i.jsx)(t.p,{children:"There are two versions of the SQLite storage available for RxDB:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"trial version"})," which comes directly shipped with RxDB Core. It contains an SQLite storage that allows you to try out RxDB on devices that support SQLite, like React Native or Electron. While the trial version does pass the full RxDB storage test-suite, it is not made for production. It is not using indexes, has no attachment support, is limited to store 300 documents and fetches the whole storage state to run queries in memory. ",(0,i.jsx)(t.strong,{children:"Use it for evaluation and prototypes only!"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"})," version"]})," which contains the full production-ready SQLite storage. It contains a full load of performance optimizations and full query support. To use the SQLite storage you have to import ",(0,i.jsx)(t.code,{children:"getRxStorageSQLite"})," from the ",(0,i.jsx)(t.a,{href:"/premium/",children:"RxDB Premium \ud83d\udc51"})," package and then add the correct ",(0,i.jsx)(t.code,{children:"sqliteBasics"})," adapter depending on which sqlite module you want to use. This can then be used as storage when creating the ",(0,i.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),". In the following you can see some examples for some of the most common SQLite packages."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.t,{children:[(0,i.jsx)(t.h2,{id:"trial-version",children:"Trial Version"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// Import the Trial SQLite Storage\nimport {\n    getRxStorageSQLiteTrial,\n    getSQLiteBasicsNodeNative\n} from 'rxdb/plugins/storage-sqlite';\n\n// Create a Storage for it\nconst storage = getRxStorageSQLiteTrial({\n    sqliteBasics: getSQLiteBasicsNodeNative(sqlite.DatabaseSync)\n});\n\n// Create a Database with the Storage\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: storage\n});\n"})}),(0,i.jsx)(t.h2,{id:"rxdb-premium-",children:"RxDB Premium \ud83d\udc51"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"// Import the SQLite Storage from the premium plugins.\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNodeNative\n} from 'rxdb-premium/plugins/storage-sqlite';\n\n// Create a Storage for it\nconst storage = getRxStorageSQLite({\n    sqliteBasics: getSQLiteBasicsNodeNative(sqlite.DatabaseSync)\n});\n\n// Create a Database with the Storage\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: storage\n});\n"})})]}),"\n",(0,i.jsx)(t.p,{children:"In the following, all examples are shown with the premium SQLite storage. Still they work the same with the trial version."}),"\n",(0,i.jsx)(t.h2,{id:"sqlitebasics",children:"SQLiteBasics"}),"\n",(0,i.jsxs)(t.p,{children:["Different SQLite libraries have different APIs to create and access the SQLite database. Therefore the library must be massaged to work with the RxDB SQlite storage. This is done in a so called ",(0,i.jsx)(t.code,{children:"SQLiteBasics"})," interface. RxDB directly ships with a wide range of these for various SQLite libraries that are commonly used. Also creating your own one is pretty simple, check the source code of the existing ones for that."]}),"\n",(0,i.jsxs)(t.p,{children:["For example for the ",(0,i.jsx)(t.code,{children:"sqlite3"})," npm library we have the ",(0,i.jsx)(t.code,{children:"getSQLiteBasicsNode()"})," implementation. For ",(0,i.jsx)(t.code,{children:"node:sqlite"})," we have the ",(0,i.jsx)(t.code,{children:"getSQLiteBasicsNodeNative()"})," implementation and so on.."]}),"\n",(0,i.jsx)(t.h2,{id:"using-the-sqlite-rxstorage-with-different-sqlite-libraries",children:"Using the SQLite RxStorage with different SQLite libraries"}),"\n",(0,i.jsxs)(t.h3,{id:"usage-with-the-sqlite3-npm-package",children:["Usage with the ",(0,i.jsx)(t.strong,{children:"sqlite3 npm package"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNode\n} from 'rxdb-premium/plugins/storage-sqlite';\n\n/**\n * In Node.js, we use the SQLite database\n * from the 'sqlite' npm module.\n * @link https://www.npmjs.com/package/sqlite3\n */\nimport sqlite3 from 'sqlite3';\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        /**\n         * Different runtimes have different interfaces to SQLite.\n         * For example in node.js we have a callback API,\n         * while in capacitor sqlite we have Promises.\n         * So we need a helper object that is capable of doing the basic\n         * sqlite operations.\n         */\n        sqliteBasics: getSQLiteBasicsNode(sqlite3)\n    })\n});\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"usage-with-the-node-package",children:["Usage with the ",(0,i.jsxs)(t.strong,{children:["node",":sqlite"]})," package"]}),"\n",(0,i.jsxs)(t.p,{children:['With Node.js version 22 and newer, you can use the "native" ',(0,i.jsx)(t.a,{href:"https://nodejs.org/api/sqlite.html",children:"sqlite module"})," that comes shipped with Node.js."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { createRxDatabase } from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsNodeNative\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport sqlite from 'node:sqlite';\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsNodeNative(sqlite.DatabaseSync)\n    })\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage-with-webassembly-in-the-browser",children:"Usage with Webassembly in the Browser"}),"\n",(0,i.jsxs)(t.p,{children:["In the browser you can use the ",(0,i.jsx)(t.a,{href:"https://github.com/rhashimoto/wa-sqlite",children:"wa-sqlite"})," package to run sQLite in Webassembly. The wa-sqlite module also allows to use persistence with IndexedDB or OPFS. Notice that in general SQLite via Webassembly is slower compared to other storages like ",(0,i.jsx)(t.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB"})," or ",(0,i.jsx)(t.a,{href:"/rx-storage-opfs.html",children:"OPFS"})," because sending data from the main thread to wasm and backwards is slow in the browser. Have a look the ",(0,i.jsx)(t.a,{href:"/rx-storage-performance.html",children:"performance comparison"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsWasm\n} from 'rxdb-premium/plugins/storage-sqlite';\n\n/**\n * In the Browser, we use the SQLite database\n * from the 'wa-sqlite' npm module. This contains the SQLite library\n * compiled to Webassembly\n * @link https://www.npmjs.com/package/wa-sqlite\n */\nimport SQLiteESMFactory from 'wa-sqlite/dist/wa-sqlite-async.mjs';\nimport SQLite from 'wa-sqlite';\nconst sqliteModule = await SQLiteESMFactory();\nconst sqlite3 = SQLite.Factory(module);\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsWasm(sqlite3)\n    })\n});\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"usage-with-react-native",children:["Usage with ",(0,i.jsx)(t.strong,{children:"React Native"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Install the ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-quick-sqlite",children:"react-native-quick-sqlite npm module"})]}),"\n",(0,i.jsxs)(t.li,{children:["Import ",(0,i.jsx)(t.code,{children:"getSQLiteBasicsQuickSQLite"})," from the SQLite plugin and use it to create a ",(0,i.jsx)(t.a,{href:"/rx-database.html",children:"RxDatabase"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsQuickSQLite\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport { open } from 'react-native-quick-sqlite';\n\n// create database\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    multiInstance: false, // <- Set multiInstance to false when using RxDB in React Native\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsQuickSQLite(open)\n    })\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.code,{children:"react-native-quick-sqlite"})," does not work for you, as alternative you can use the ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/react-native-sqlite-2",children:"react-native-sqlite-2"})," library instead:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    getRxStorageSQLite,\n    getSQLiteBasicsWebSQL\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport SQLite from 'react-native-sqlite-2';\nconst storage = getRxStorageSQLite({\n  sqliteBasics: getSQLiteBasicsWebSQL(SQLite.openDatabase)\n});\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"usage-with-expo-sqlite",children:["Usage with ",(0,i.jsx)(t.strong,{children:"Expo SQLite"})]}),"\n",(0,i.jsxs)(t.p,{children:["Notice that ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/expo-sqlite",children:"expo-sqlite"})," cannot be used on android (but it works on iOS) if you use Expo SDK version 50 or older. Please update to Version 50 or newer to use it."]}),"\n",(0,i.jsxs)(t.p,{children:["In the latest expo SDK version, use the ",(0,i.jsx)(t.code,{children:"getSQLiteBasicsExpoSQLiteAsync()"})," method:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsExpoSQLiteAsync\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport * as SQLite from 'expo-sqlite';\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    multiInstance: false,\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsExpoSQLiteAsync(SQLite.openDatabaseAsync)\n    })\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"In older Expo SDK versions, you might have to use the non-async API:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsExpoSQLite\n} from 'rxdb-premium/plugins/storage-sqlite';\nimport { openDatabase } from 'expo-sqlite';\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    multiInstance: false,\n    storage: getRxStorageSQLite({\n        sqliteBasics: getSQLiteBasicsExpoSQLite(openDatabase)\n    })\n});\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"usage-with-sqlite-capacitor",children:["Usage with ",(0,i.jsx)(t.strong,{children:"SQLite Capacitor"})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Install the ",(0,i.jsx)(t.a,{href:"https://github.com/capacitor-community/sqlite",children:"sqlite capacitor npm module"})]}),"\n",(0,i.jsx)(t.li,{children:"Add the iOS database location to your capacitor config"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "plugins": {\n        "CapacitorSQLite": {\n            "iosDatabaseLocation": "Library/CapacitorDatabase"\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["Use the function ",(0,i.jsx)(t.code,{children:"getSQLiteBasicsCapacitor"})," to get the capacitor sqlite wrapper."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import {\n    createRxDatabase\n} from 'rxdb';\nimport {\n    getRxStorageSQLite,\n    getSQLiteBasicsCapacitor\n} from 'rxdb-premium/plugins/storage-sqlite';\n\n/**\n * Import SQLite from the capacitor plugin.\n */\nimport {\n    CapacitorSQLite,\n    SQLiteConnection\n} from '@capacitor-community/sqlite';\nimport { Capacitor } from '@capacitor/core';\n\nconst sqlite = new SQLiteConnection(CapacitorSQLite);\n\nconst myRxDatabase = await createRxDatabase({\n    name: 'exampledb',\n    storage: getRxStorageSQLite({\n        /**\n         * Different runtimes have different interfaces to SQLite.\n         * For example in node.js we have a callback API,\n         * while in capacitor sqlite we have Promises.\n         * So we need a helper object that is capable of doing the basic\n         * sqlite operations.\n         */\n        sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor)\n    })\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"database-connection",children:"Database Connection"}),"\n",(0,i.jsxs)(t.p,{children:["If you need to access the database connection for any reason you can use ",(0,i.jsx)(t.code,{children:"getDatabaseConnection"})," to do so:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"import { getDatabaseConnection } from 'rxdb-premium/plugins/storage-sqlite'\n"})}),"\n",(0,i.jsx)(t.p,{children:"It has the following signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"getDatabaseConnection(\n    sqliteBasics: SQLiteBasics<any>,\n    databaseName: string\n): Promise<SQLiteDatabaseClass>;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"known-problems-of-sqlite-in-javascript-apps",children:"Known Problems of SQLite in JavaScript apps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Some JavaScript runtimes do not contain a ",(0,i.jsx)(t.code,{children:"Buffer"})," API which is used by SQLite to store binary attachments data as ",(0,i.jsx)(t.code,{children:"BLOB"}),". You can set ",(0,i.jsx)(t.code,{children:"storeAttachmentsAsBase64String: true"})," if you want to store the attachments data as base64 string instead. This increases the database size but makes it work even without having a ",(0,i.jsx)(t.code,{children:"Buffer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["The SQlite RxStorage works on SQLite libraries that use SQLite in version ",(0,i.jsx)(t.code,{children:"3.38.0 (2022-02-22)"})," or newer, because it uses the ",(0,i.jsx)(t.a,{href:"https://www.sqlite.org/json1.html",children:"SQLite JSON"})," methods like ",(0,i.jsx)(t.code,{children:"JSON_EXTRACT"}),". If you get an error like ",(0,i.jsx)(t.code,{children:"[Error: no such function: JSON_EXTRACT (code 1 SQLITE_ERROR[1])"}),", you might have a too old version of SQLite."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["To debug all SQL operations, you can pass a log function to ",(0,i.jsx)(t.code,{children:"getRxStorageSQLite()"})," like this. This does not work with the trial version:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const storage = getRxStorageSQLite({\n    sqliteBasics: getSQLiteBasicsCapacitor(sqlite, Capacitor),\n    // pass log function\n    log: console.log.bind(console)\n});\n"})}),"\n",(0,i.jsx)(t.h2,{id:"related",children:"Related"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/react-native-database.html",children:"React Native Databases"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3894:(e,t,a)=>{a.d(t,{t:()=>r});var s=a(6540),i=a(6412),n=a(4848);function r(e){const t=[];let a=null;s.Children.toArray(e.children).forEach((e=>{const s=e,i=s?.props?.id;i?(a&&t.push(a),a={label:s.props.children,key:s.props.id,content:[]}):a&&a.content.push(e)})),a&&t.push(a);const r=t.map((e=>({key:e.key,label:e.label,children:(0,n.jsx)("div",{style:{color:"white"},children:e.content})})));return(0,n.jsx)(i.A,{type:"line",items:r,color:"red"})}},7580:(e,t,a)=>{a.d(t,{g:()=>i});var s=a(4848);function i(e){const t=[];let a=null;return e.children.forEach((e=>{e.props.id?(a&&t.push(a),a={headline:e,paragraphs:[]}):a&&a.paragraphs.push(e)})),a&&t.push(a),(0,s.jsx)("div",{style:n.stepsContainer,children:t.map(((e,t)=>(0,s.jsxs)("div",{style:n.stepWrapper,children:[(0,s.jsxs)("div",{style:n.stepIndicator,children:[(0,s.jsxs)("div",{style:n.stepNumber,children:[t+1,"."]}),(0,s.jsx)("div",{style:n.verticalLine})]}),(0,s.jsxs)("div",{style:n.stepContent,children:[(0,s.jsx)("div",{children:e.headline}),e.paragraphs.map(((e,t)=>(0,s.jsx)("div",{style:n.item,children:e},t)))]})]},t)))})}const n={stepsContainer:{display:"flex",flexDirection:"column"},stepWrapper:{display:"flex",alignItems:"stretch",marginBottom:"1rem",position:"relative",minWidth:0},stepIndicator:{position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",width:"32px",marginRight:"1rem",minWidth:0},stepNumber:{width:"32px",height:"32px",borderRadius:"50%",backgroundColor:"var(--color-middle)",border:"3px solid #391a3b",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold"},verticalLine:{position:"absolute",top:"32px",bottom:"0",left:"50%",width:"1px",background:"linear-gradient(to bottom, var(--color-middle) 0%, var(--color-middle) 80%, rgba(0,0,0,0) 100%)",transform:"translateX(-50%)"},stepContent:{flex:1,minWidth:0,overflowWrap:"break-word"},item:{marginTop:"0.5rem"}}},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var s=a(6540);const i={},n=s.createContext(i);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);