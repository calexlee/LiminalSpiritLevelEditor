(this.webpackJsonple=this.webpackJsonple||[]).push([[0],{23:function(e,t,a){},27:function(e,t){},52:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(17),i=a.n(n),r=(a(23),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,53)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))}),l=a(3),o=(a(8),a.p,a.p,a.p+"static/media/blank.67dd73c0.jpg"),d=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHISURBVFhH7Zj7boIwFIdPKVAU5+JeeY+yl9s/i4ubcm27c7AlXHSQNRss6Wd+ULEtn6VclL2+PGtYCmZXpoBo3dcJzHoZyAVDUjZDlhWcgRd0xQu64gVd8YKueEFXvKArXtAVL+jKWNA85a6FnmDz2G1ea6EnyBj+fDFZCwNBWpishMEhpoXJShifJCvDC7ry/wSrSkKRV/B5yiE7l1Dj+yUZCUoUuqDY+/EMH6cM8qxqti91aRwJxkkEYRRAWdQgpQSlVHOHOb6dIceRvfUHz28yEqSRCkMOyTYGgbIsYCiqcFQLPORFO6J/BQl2L88ab3M6jLjebGONghpltZRao5jOLlUzijOxfVq65SlaHxKks6CXKOLy8JTKdJfIKOZS4QurSzzsCkdxzo6on9qsu7E7nqJtT4JUuJuAsZqHQZ0+iHp/2FSPh5S2T0GnlO1bmdBOS7OeI0l1aurEPh7cDM5BxnnAcDRZmgqWbCLcPEm3D2L4foq2PgmK74JzUqCg2O0TgXMyxvIcQ+rc9k31Q0xsQuUpUY6hdoI6WTWB/S50eetm1iy5h2v7DjjD7Ghf/2W/lYbBrcQ+eV9jPqZg9badbftjAL4AKQjZP+VR5zUAAAAASUVORK5CYII="),m=(a.p,a.p,a.p,a.p,a.p,a.p,a.p,a.p,a(0)),u=a(18),p=a.p+"static/media/player.eb3bce71.png",b=a.p+"static/media/specter.f63f16cd.png",v=a.p+"static/media/triangle.01789bc8.png",j=a.p+"static/media/square.43511249.png",w=a.p+"static/media/circle.0c29e141.png",h=a.p+"static/media/seeker.15b41021.png",O=a.p+"static/media/glutton.ff5b4314.png",f=a.p+"static/media/lost.47959cbc.png",x=function(e){var t,a=e.itemName,s=e.itemId,c=e.callback,n=e.hide,i=e.large,r=e.x,l=e.y,u={color:"black",border:"1px solid black",display:n?"none":"inline-block","background-color":"white",margin:0,width:i?"100px":"27px",height:i?"100px":"20px",padding:"0px"};return Object(m.jsx)("div",{style:u,onDragOver:function(){c(s,r,l,a)},onClick:function(){c(s,r,l,a)},children:Object(m.jsx)("img",{src:(t=a,"chef"===t?p:"wall"===t?d:"specter"===t?b:"square"===t?j:"triangle"===t?v:"circle"===t?w:"seeker"===t?h:"glutton"===t?O:"lost"===t?f:o),alt:"",className:"square"})})},g=(a(25),function(e){e.callback;var t=Object(s.useState)("chef"),a=Object(l.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(54),r=Object(l.a)(i,2),o=r[0],d=r[1],p=Object(s.useState)(32),b=Object(l.a)(p,2),v=b[0],j=(b[1],Object(s.useState)("level")),w=Object(l.a)(j,2),h=w[0],O=w[1],f=Object(s.useState)("cave"),g=Object(l.a)(f,2),A=g[0],N=g[1],S=Object(s.useState)({items:Object(u.a)(Array(1)).map((function(){return Array(1728).fill(" ")})),startpos:[],wavenumber:1,selectedwave:1,wavespawntimes:Array(1).fill(0)}),k=Object(l.a)(S,2),C=k[0],y=k[1],J=["chef","wall"," "],E=["lost","specter","circle","triangle","square","seeker","glutton"," "],L=function(e,t,a,s){var n=C.items.slice();!E.includes(c)||" "===c&&!E.includes(s)?n.forEach((function(t){t[e]=c})):n[C.selectedwave-1][e]=c,y("chef"===c?{items:n,startpos:[t,a],wavenumber:C.wavenumber,selectedwave:C.selectedwave,wavespawntimes:C.wavespawntimes}:{items:n,startpos:C.startpos,wavenumber:C.wavenumber,selectedwave:C.selectedwave,wavespawntimes:C.wavespawntimes})},U=function(e){var t=0,a=o-1,s=0,c=[];return console.log(o),e.forEach((function(e){"wall"===e&&s++,0!==(t=(t+1)%v)&&"wall"===e||(0===t&&a--,s>0&&(c.push([t-s,a,s]),s=0))})),c},I=function(){var e=[];return C.items.forEach((function(t){e.push(function(e){var t=0,a=o-1,s=[];return e.forEach((function(e){E.includes(e)&&" "!==e&&s.push([t,a]),0===(t=(t+1)%v)&&a--})),s}(t))})),e},R=function(){var e=[];return C.items.forEach((function(t){var a=[];t.forEach((function(e){E.includes(e)&&" "!==e&&a.push(e)})),e.push(a)})),e},q=function(e){var t=J.concat(E);n(t[e])};return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"title",children:" Liminal Spirit Level Editor"}),Object(m.jsxs)("div",{className:"upload",children:[Object(m.jsx)("p",{children:"Load json level: "}),Object(m.jsx)("input",{type:"file",onChange:function(e){return function(t){var a=new FileReader;a.onloadend=function(){try{y({items:JSON.parse(a.result).items,startpos:JSON.parse(a.result).start_pos,wavenumber:JSON.parse(a.result).items.length,selectedwave:1,wavespawntimes:JSON.parse(a.result).spawn_times}),d(JSON.parse(a.result).level_height),N(JSON.parse(a.result).biome),O(JSON.parse(a.result).name)}catch(e){console.log("**Not valid JSON file!**")}},void 0!==t&&a.readAsText(t)}(e.target.files[0])}})]}),Object(m.jsx)("div",{className:"grid",children:C.items[C.selectedwave-1].map((function(e,t){return Object(m.jsx)(x,{itemName:e,itemId:t,hide:!1,large:!1,callback:L,x:t%v,y:o-Math.floor(t/v)-1})}))}),Object(m.jsxs)("div",{className:"selector",children:[Object(m.jsxs)("p",{className:"selected",children:["Currently Selected: ",Object(m.jsx)(x,{itemName:c,itemId:0,hide:!1,large:!0,callback:function(){return!1}})]}),J.map((function(e,t){return Object(m.jsx)(x,{itemName:e,itemId:t,hide:!1,large:!1,callback:q})})),Object(m.jsx)("p",{children:" Enemies: "}),E.map((function(e,t){return Object(m.jsx)(x,{itemName:e,itemId:t+J.length,hide:!1,large:!1,callback:q})})),Object(m.jsx)("br",{}),Object(m.jsx)("button",{className:"addWave",onClick:function(){var e=C.items.slice();e[e.length]=e[0].slice();var t=C.wavespawntimes.slice();t.push(0),y({items:e,startpos:C.startpos,wavenumber:C.wavenumber+1,selectedwave:C.selectedwave,wavespawntimes:t})},children:"Add Wave to Level"}),Object(m.jsx)("button",{className:"subWave",onClick:function(){if(C.wavenumber>1){var e=C.items.slice();e.pop();var t=C.wavespawntimes.slice();t.pop(),C.wavenumber-1<C.selectedwave?y({items:e,startpos:C.startpos,wavenumber:C.wavenumber-1,selectedwave:C.selectedwave-1,wavespawntimes:t}):y({items:e,startpos:C.startpos,wavenumber:C.wavenumber-1,selectedwave:C.selectedwave,wavespawntimes:t})}},children:" Subtract Wave from Level "}),Object(m.jsx)("button",{className:"nextWave",onClick:function(){C.selectedwave<C.wavenumber&&y({items:C.items,startpos:C.startpos,wavenumber:C.wavenumber,selectedwave:C.selectedwave+1,wavespawntimes:C.wavespawntimes})},children:"Go to Next Wave"}),Object(m.jsx)("button",{className:"prevWave",onClick:function(){C.selectedwave>1&&y({items:C.items,startpos:C.startpos,wavenumber:C.wavenumber,selectedwave:C.selectedwave-1,wavespawntimes:C.wavespawntimes})},children:" Go to Previous Wave "}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"textfields",children:[Object(m.jsxs)("form",{children:[Object(m.jsxs)("label",{children:["Spawns in Wave ",C.selectedwave]}),Object(m.jsx)("br",{}),Object(m.jsxs)("label",{children:["There are ",C.wavenumber," total waves"]})]}),Object(m.jsx)("h2",{children:" Other Values "}),Object(m.jsx)("form",{children:Object(m.jsxs)("label",{children:["Spawn Times are currently [",C.wavespawntimes.map((function(e){return Object(m.jsxs)("span",{children:["[",e,"]"]})})),"]:",Object(m.jsx)("textarea",{className:"jAdd",onChange:function(e){var t=C.wavespawntimes.slice(),a=parseInt(e.target.value);t[C.selectedwave-1]=isNaN(a)?0:a,y({items:C.items,startpos:C.startpos,wavenumber:C.wavenumber,selectedwave:C.selectedwave,wavespawntimes:t})}})]})}),Object(m.jsx)("form",{children:Object(m.jsxs)("label",{children:["Biome:",Object(m.jsx)("textarea",{className:"jAdd",value:A,onChange:function(e){N(e.target.value)}})]})}),Object(m.jsx)("form",{children:Object(m.jsxs)("label",{children:["Level Name:",Object(m.jsx)("textarea",{className:"jAdd",value:h,onChange:function(e){O(e.target.value)}})]})})]}),Object(m.jsx)("button",{className:"download",onClick:function(){var e=document.createElement("a"),t=JSON.stringify({name:h,start_pos:C.startpos,biome:A,level_height:o,spawn_order:R(),spawn_pos:I(),spawn_times:C.wavespawntimes,platforms:U(C.items[0]),items:C.items}),a=new Blob([t],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(a),e.download=h+".json",document.body.appendChild(e),e.click()},children:"Save JSON"})]})]})}),A=function(){return Object(m.jsxs)("div",{className:"game",children:[Object(m.jsx)("div",{className:"game-board",children:Object(m.jsx)(g,{callback:function(){}})}),Object(m.jsx)("div",{className:"info"})]})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),r()},8:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.65f89a7b.chunk.js.map