"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[8588],{142:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=a(4848),o=a(8453);const n={title:"\u2699\ufe0f Rxstorage Layer",slug:"rx-storage.html"},s="RxStorage",i={id:"rx-storage",title:"\u2699\ufe0f Rxstorage Layer",description:"RxDB is not a self contained database. Instead the data is stored in an implementation of the RxStorage interface. This allows you to switch out the underlying data layer, depending on the JavaScript environment and performance requirements. For example you can use the SQLite storage for a capacitor app or you can use the Dexie.js RxStorage to store data in IndexedDB in a browser based application. There are also storages for other JavaScript runtimes like Node.js, React-Native, NativeScript and more.",source:"@site/docs/rx-storage.md",sourceDirName:".",slug:"/rx-storage.html",permalink:"/rx-storage.html",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u2699\ufe0f Rxstorage Layer",slug:"rx-storage.html"},sidebar:"tutorialSidebar",previous:{title:"RxPipeline (beta)",permalink:"/rx-pipeline"},next:{title:"\ud83d\udcc8 RxStorage Performance",permalink:"/rx-storage-performance.html"}},d={},l=[{value:"Quick Recommendations",id:"quick-recommendations",level:2},{value:"Configuration Examples",id:"configuration-examples",level:2},{value:"Storing much data in a browser securely",id:"storing-much-data-in-a-browser-securely",level:3},{value:"High query Load",id:"high-query-load",level:3},{value:"Low Latency on Writes and Simple Reads",id:"low-latency-on-writes-and-simple-reads",level:3},{value:"All RxStorage Implementations List",id:"all-rxstorage-implementations-list",level:2},{value:"Dexie.js",id:"dexiejs",level:3},{value:"Memory",id:"memory",level:3},{value:"\ud83d\udc51 IndexedDB",id:"-indexeddb",level:3},{value:"\ud83d\udc51 OPFS",id:"-opfs",level:3},{value:"\ud83d\udc51 SQLite",id:"-sqlite",level:3},{value:"\ud83d\udc51 Filesystem Node",id:"-filesystem-node",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"DenoKV",id:"denokv",level:3},{value:"FoundationDB",id:"foundationdb",level:3},{value:"LokiJS (deprecated)",id:"lokijs-deprecated",level:3},{value:"\ud83d\udc51 Worker",id:"-worker",level:3},{value:"\ud83d\udc51 SharedWorker",id:"-sharedworker",level:3},{value:"Remote",id:"remote",level:3},{value:"\ud83d\udc51 Sharding",id:"-sharding",level:3},{value:"\ud83d\udc51 Memory Mapped",id:"-memory-mapped",level:3},{value:"\ud83d\udc51 Memory Synced",id:"-memory-synced",level:3},{value:"\ud83d\udc51 Localstorage Meta Optimizer",id:"-localstorage-meta-optimizer",level:3},{value:"Electron IpcRenderer &amp; IpcMain",id:"electron-ipcrenderer--ipcmain",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"rxstorage",children:"RxStorage"}),"\n",(0,t.jsxs)(r.p,{children:["RxDB is not a self contained database. Instead the data is stored in an implementation of the ",(0,t.jsx)(r.a,{href:"https://github.com/pubkey/rxdb/blob/master/src/types/rx-storage.interface.d.ts",children:"RxStorage interface"}),". This allows you to ",(0,t.jsx)(r.strong,{children:"switch out"})," the underlying data layer, depending on the JavaScript environment and performance requirements. For example you can use the SQLite storage for a capacitor app or you can use the Dexie.js RxStorage to store data in IndexedDB in a browser based application. There are also storages for other JavaScript runtimes like Node.js, React-Native, NativeScript and more."]}),"\n",(0,t.jsx)(r.h2,{id:"quick-recommendations",children:"Quick Recommendations"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["In the Browser: Use the ",(0,t.jsx)(r.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"})," if you have ",(0,t.jsx)(r.a,{href:"/premium",children:"\ud83d\udc51 premium access"}),", otherwise use the ",(0,t.jsx)(r.a,{href:"/rx-storage-dexie.html",children:"Dexie.js"})," storage."]}),"\n",(0,t.jsxs)(r.li,{children:["In ",(0,t.jsx)(r.a,{href:"/electron-database.html",children:"Electron"})," and ",(0,t.jsx)(r.a,{href:"/react-native-database.html",children:"ReactNative"}),": Use the ",(0,t.jsx)(r.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," if you have ",(0,t.jsx)(r.a,{href:"/premium",children:"\ud83d\udc51 premium access"}),", otherwise use the ",(0,t.jsx)(r.a,{href:"/rx-storage-lokijs.html",children:"LokiJS"})," storage."]}),"\n",(0,t.jsxs)(r.li,{children:["In Capacitor: Use the ",(0,t.jsx)(r.a,{href:"/rx-storage-sqlite.html",children:"SQLite RxStorage"})," if you have ",(0,t.jsx)(r.a,{href:"/premium",children:"\ud83d\udc51 premium access"}),", otherwise use the ",(0,t.jsx)(r.a,{href:"/rx-storage-dexie.html",children:"Dexie.js"})," storage."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"configuration-examples",children:"Configuration Examples"}),"\n",(0,t.jsx)(r.p,{children:"The RxStorage layer of RxDB is very flexible. Here are some examples on how to configure more complex settings:"}),"\n",(0,t.jsx)(r.h3,{id:"storing-much-data-in-a-browser-securely",children:"Storing much data in a browser securely"}),"\n",(0,t.jsx)(r.p,{children:"Lets say you build a browser app that needs to store a big amount of data as secure as possible. Here we can use a combination of the storages (encryption, IndexedDB, compression, schema-checks) that increase security and reduce the stored data size."}),"\n",(0,t.jsx)(r.p,{children:"We use the schema-validation on the top level to ensure schema-errors are clearly readable and do not contain encrypted/compressed data. The encryption is used inside of the compression because encryption of compressed data is more efficient."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';\nimport { wrappedKeyCompressionStorage } from 'rxdb/plugins/key-compression';\nimport { wrappedKeyEncryptionCryptoJsStorage } from 'rxdb/plugins/encryption-crypto-js';\nimport { getRxStorageIndexedDB } from 'rxdb-premium/plugins/storage-indexeddb';\n\nconst myDatabase = await createRxDatabase({\n    storage: wrappedValidateAjvStorage({\n        storage: wrappedKeyCompressionStorage({\n            storage: wrappedKeyEncryptionCryptoJsStorage({\n                storage: getRxStorageIndexedDB()\n            })\n        })\n    })\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"high-query-load",children:"High query Load"}),"\n",(0,t.jsx)(r.p,{children:"Also we can utilize a combination of storages to create a database that is optimized to run complex queries on the data really fast. Here we use the shardingstorage together with the worker storage. This allows to run queries in parallel multithreading instead of a single JavaScript process. Because the worker initialization can slow down the initial page load, we also use the localstorage-meta-optimizer to improve initialization time."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { getRxStorageSharding } from 'rxdb-premium/plugins/storage-sharding';\nimport { getRxStorageWorker } from 'rxdb-premium/plugins/storage-worker';\nimport { getRxStorageIndexedDB } from 'rxdb-premium/plugins/storage-indexeddb';\nimport { getLocalstorageMetaOptimizerRxStorage } from 'rxdb-premium/plugins/storage-localstorage-meta-optimizer';\n\nconst myDatabase = await createRxDatabase({\n    storage: getLocalstorageMetaOptimizerRxStorage({\n        storage: getRxStorageSharding({\n            storage: getRxStorageWorker({\n                workerInput: 'path/to/worker.js',\n                storage: getRxStorageIndexedDB()\n            })\n        })\n    })\n});\n"})}),"\n",(0,t.jsx)(r.h3,{id:"low-latency-on-writes-and-simple-reads",children:"Low Latency on Writes and Simple Reads"}),"\n",(0,t.jsx)(r.p,{children:"Here we create a storage configuration that is optimized to have a low latency on simple reads and writes. It uses the memory-synced storage to fetch and store data in memory. For persistence the OPFS storage is used in the main thread which has lower latency for fetching big chunks of data when at initialization the data is loaded from disc into memory. We do not use workers because sending data from the main thread to workers and backwards would increase the latency."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import { getLocalstorageMetaOptimizerRxStorage } from 'rxdb-premium/plugins/storage-localstorage-meta-optimizer';\nimport { getMemorySyncedRxStorage } from 'rxdb-premium/plugins/storage-memory-synced';\nimport { getRxStorageOPFSMainThread } from 'rxdb-premium/plugins/storage-worker';\n\n\nconst myDatabase = await createRxDatabase({\n    storage: getLocalstorageMetaOptimizerRxStorage({\n        storage: getMemorySyncedRxStorage({\n            storage: getRxStorageOPFSMainThread()\n        })\n    })\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"all-rxstorage-implementations-list",children:"All RxStorage Implementations List"}),"\n",(0,t.jsx)(r.h3,{id:"dexiejs",children:"Dexie.js"}),"\n",(0,t.jsxs)(r.p,{children:["The Dexie.js based storage is based on the ",(0,t.jsx)(r.a,{href:"https://github.com/dexie/Dexie.js",children:"Dexie.js"})," IndexedDB wrapper.\nIt stores the data inside of a browsers IndexedDB database and has a very small bundle size. ",(0,t.jsx)(r.strong,{children:"If you are new to RxDB, you should start with the Dexie.js RxStorage"}),". ",(0,t.jsx)(r.a,{href:"/rx-storage-dexie.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"memory",children:"Memory"}),"\n",(0,t.jsxs)(r.p,{children:["A storage that stores the data in as plain data in the memory of the JavaScript process. Really fast and can be used in all environments. ",(0,t.jsx)(r.a,{href:"/rx-storage-memory.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-indexeddb",children:"\ud83d\udc51 IndexedDB"}),"\n",(0,t.jsxs)(r.p,{children:["The IndexedDB ",(0,t.jsx)(r.code,{children:"RxStorage"})," is based on plain IndexedDB. This has a better performance than the Dexie.js storage, but it is slower compared to the OPFS storage. ",(0,t.jsx)(r.a,{href:"/rx-storage-indexeddb.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-opfs",children:"\ud83d\udc51 OPFS"}),"\n",(0,t.jsxs)(r.p,{children:["The OPFS ",(0,t.jsx)(r.code,{children:"RxStorage"})," is based on the File System Access API. This has the best performance of all other non-in-memory storage, when RxDB is used inside of a browser. ",(0,t.jsx)(r.a,{href:"/rx-storage-opfs.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-sqlite",children:"\ud83d\udc51 SQLite"}),"\n",(0,t.jsxs)(r.p,{children:["The SQLite storage has great performance when RxDB is used on ",(0,t.jsx)(r.strong,{children:"Node.js"}),", ",(0,t.jsx)(r.strong,{children:"Electron"}),", ",(0,t.jsx)(r.strong,{children:"React Native"}),", ",(0,t.jsx)(r.strong,{children:"Cordova"})," or ",(0,t.jsx)(r.strong,{children:"Capacitor"}),". ",(0,t.jsx)(r.a,{href:"/rx-storage-sqlite.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-filesystem-node",children:"\ud83d\udc51 Filesystem Node"}),"\n",(0,t.jsxs)(r.p,{children:["The Filesystem Node storage is best suited when you use RxDB in a Node.js process or with ",(0,t.jsx)(r.a,{href:"/electron.html",children:"electron.js"}),". ",(0,t.jsx)(r.a,{href:"/rx-storage-filesystem-node.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"mongodb",children:"MongoDB"}),"\n",(0,t.jsxs)(r.p,{children:["To use RxDB on the server side, the MongoDB RxStorage provides a way of having a secure, scalable and performant storage based on the popular MongoDB NoSQL database ",(0,t.jsx)(r.a,{href:"/rx-storage-mongodb.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"denokv",children:"DenoKV"}),"\n",(0,t.jsxs)(r.p,{children:["To use RxDB in Deno. The DenoKV RxStorage provides a way of having a secure, scalable and performant storage based on the Deno Key Value Store. ",(0,t.jsx)(r.a,{href:"/rx-storage-denokv.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"foundationdb",children:"FoundationDB"}),"\n",(0,t.jsxs)(r.p,{children:["To use RxDB on the server side, the FoundationDB RxStorage provides a way of having a secure, fault-tolerant and performant storage. ",(0,t.jsx)(r.a,{href:"/rx-storage-foundationdb.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"lokijs-deprecated",children:"LokiJS (deprecated)"}),"\n",(0,t.jsxs)(r.p,{children:["The LokiJS based storage is based on the ",(0,t.jsx)(r.a,{href:"https://github.com/techfort/LokiJS",children:"LokiJS"})," database.\nIt has the special behavior of loading all data into memory at app start and therefore has a good performance when running operations over a small dataset where loading all data upfront is not a problem. ",(0,t.jsx)(r.a,{href:"/rx-storage-lokijs.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-worker",children:"\ud83d\udc51 Worker"}),"\n",(0,t.jsxs)(r.p,{children:["The worker RxStorage is a wrapper around any other RxStorage which allows to run the storage in a WebWorker (in browsers) or a Worker Thread (in Node.js). By doing so, you can take CPU load from the main process and move it into the worker's process which can improve the perceived performance of your application. ",(0,t.jsx)(r.a,{href:"/rx-storage-worker.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-sharedworker",children:"\ud83d\udc51 SharedWorker"}),"\n",(0,t.jsxs)(r.p,{children:["The worker RxStorage is a wrapper around any other RxStorage which allows to run the storage in a SharedWorker (only in browsers). By doing so, you can take CPU load from the main process and move it into the worker's process which can improve the perceived performance of your application. ",(0,t.jsx)(r.a,{href:"/rx-storage-shared-worker.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"remote",children:"Remote"}),"\n",(0,t.jsxs)(r.p,{children:["The Remote RxStorage is made to use a remote storage and communicate with it over an asynchronous message channel. The remote part could be on another JavaScript process or even on a different host machine. Mostly used internally in other storages like Worker or Electron-ipc. ",(0,t.jsx)(r.a,{href:"/rx-storage-remote.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-sharding",children:"\ud83d\udc51 Sharding"}),"\n",(0,t.jsxs)(r.p,{children:["On some ",(0,t.jsx)(r.code,{children:"RxStorage"})," implementations (like IndexedDB), a huge performance improvement can be done by sharding the documents into multiple database instances. With the sharding plugin you can wrap any other ",(0,t.jsx)(r.code,{children:"RxStorage"})," into a sharded storage. ",(0,t.jsx)(r.a,{href:"/rx-storage-sharding.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-memory-mapped",children:"\ud83d\udc51 Memory Mapped"}),"\n",(0,t.jsxs)(r.p,{children:["The memory-mapped ",(0,t.jsx)(r.a,{href:"/rx-storage.html",children:"RxStorage"})," is a wrapper around any other RxStorage. The wrapper creates an in-memory storage that is used for query and write operations. This memory instance stores its data in an underlying storage for persistence.\nThe main reason to use this is to improve query/write performance while still having the data stored on disc. ",(0,t.jsx)(r.a,{href:"/rx-storage-memory-mapped.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-memory-synced",children:"\ud83d\udc51 Memory Synced"}),"\n",(0,t.jsxs)(r.p,{children:["The memory-synced ",(0,t.jsx)(r.a,{href:"/rx-storage.html",children:"RxStorage"})," is a wrapper around any other RxStorage. The wrapper creates an in-memory storage that is used for query and write operations. This memory instance is replicated with the underlying storage for persistence.\nThe main reason to use this is to improve initial page load and query/write times. This is mostly useful in browser based applications. While the memory-synced storage has its use cases, by default you should use the ",(0,t.jsx)(r.a,{href:"/rx-storage-memory-mapped.html",children:"Memory-Mapped RxStorage"})," instead. ",(0,t.jsx)(r.a,{href:"/rx-storage-memory-synced.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"-localstorage-meta-optimizer",children:"\ud83d\udc51 Localstorage Meta Optimizer"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"/rx-storage.html",children:"RxStorage"})," Localstorage Meta Optimizer is a wrapper around any other RxStorage. The wrapper uses the original RxStorage for normal collection documents. But to optimize the initial page load time, it uses ",(0,t.jsx)(r.code,{children:"localstorage"})," to store the plain key-value metadata that RxDB needs to create databases and collections. This plugin can only be used in browsers. ",(0,t.jsx)(r.a,{href:"/rx-storage-localstorage-meta-optimizer.html",children:"Read more"})]}),"\n",(0,t.jsx)(r.h3,{id:"electron-ipcrenderer--ipcmain",children:"Electron IpcRenderer & IpcMain"}),"\n",(0,t.jsxs)(r.p,{children:["To use RxDB in ",(0,t.jsx)(r.a,{href:"/electron-database.html",children:"electron"}),", it is recommended to run the RxStorage in the main process and the RxDatabase in the renderer processes. With the rxdb electron plugin you can create a remote RxStorage and consume it from the renderer process. ",(0,t.jsx)(r.a,{href:"/electron.html",children:"Read more"})]})]})}function c(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>i});var t=a(6540);const o={},n=t.createContext(o);function s(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);