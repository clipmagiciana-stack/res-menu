import {build} from 'esbuild';
import fs from 'node:fs';
await build({entryPoints:['src/data.js'],bundle:true,platform:'node',format:'esm',outfile:'.sites-runtime/menu-data.mjs'});
const {dishes,translations,asset}=await import('./.sites-runtime/menu-data.mjs');
for(const d of dishes){if(d.price<500||d.price>700)throw Error('Price: '+d.name);if(d.names.length!==6||d.descriptions.length!==6)throw Error('Translation: '+d.name);for(const n of [d.name+'.png',...(d.model?[d.name+' 2.png',d.name+' 3.png',d.model]:[])]){if(!fs.existsSync('public'+decodeURIComponent(asset(n))))throw Error('Asset missing: '+n)}if(d.model){const b=fs.readFileSync('public/assets/'+d.model);if(b.readUInt32LE(0)!==0x46546c67||b.readUInt32LE(8)!==b.length)throw Error('Invalid GLB: '+d.name)}}
for(const t of translations)if(Object.values(t).some(x=>!x))throw Error('Missing UI translation');
console.log(JSON.stringify({dishes:dishes.length,models:dishes.filter(d=>d.model).length,languages:translations.length,assets:'verified',prices:'500–700'}));
