(this["webpackJsonpreact-router-link-bootstrap-medium"]=this["webpackJsonpreact-router-link-bootstrap-medium"]||[]).push([[0],{344:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"nftName","type":"string"},{"internalType":"string","name":"nftSymbol","type":"string"},{"internalType":"string","name":"baseTokenURI","type":"string"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"royalty","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_MINTABLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PER_CLAIM","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ROYALTY_VALUE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensByAddress","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleClaimability","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"n","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"uri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},353:function(e,t,n){},354:function(e,t,n){},380:function(e,t){},405:function(e,t){},407:function(e,t){},487:function(e,t){},489:function(e,t){},499:function(e,t){},501:function(e,t){},526:function(e,t){},528:function(e,t){},529:function(e,t){},534:function(e,t){},536:function(e,t){},555:function(e,t){},567:function(e,t){},570:function(e,t){},575:function(e,t){},591:function(e,t){},593:function(e,t){},625:function(e,t){},627:function(e,t){},634:function(e,t){},635:function(e,t){},656:function(e,t){},658:function(e,t){},666:function(e,t){},668:function(e,t){},682:function(e,t){},773:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(87),s=n.n(i),c=(n(353),n(777)),u=(n(354),n.p+"static/media/arbre2.d27ef244.png"),o=n(3);var p,l=function(){return Object(o.jsx)(c.a,{children:Object(o.jsxs)("div",{className:"appP2P",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"PLAY 2 PLANT"}),Object(o.jsx)("h2",{children:"The Leaf project"}),Object(o.jsx)("p",{children:"Play 2 Plant est une jeu mobile cr\xe9\xe9 pour contribuer \xe0 la reforestation en incitant ses joueurs \xe0 faire de l\u2019activit\xe9 physique. Notre jeu permet \xe0 l\u2019utilisateur de gagner de la crypto-monnaie $LEAF et de planter des arbres lorsqu\u2019il marche. Pour jouer, vous devez poss\xe9der un des 10.000 NFT."})]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:u})})]})})},d=(n(356),n(118)),f=n(22),y=n(8),b=n(21),j=n(2),m=n.n(j),h=n(782),x=n(783),v=n(779),O=n(69),w=n(54),k=n.n(w),T=n(344),g="",M="43113",A="0xa869",C=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("init"),"undefined"===typeof window.ethereum){e.next=7;break}window.ethereum.on("accountsChanged",(function(e){e[0]?(console.log("connected",e[0]),g=e[0]):console.log("not connected"),window.location.reload()})),window.ethereum.on("chainChanged",(function(e){e=e==A?"avax":"not-avax",window.location.reload()})),window.ethereum.on("disconnect",(function(){console.log("disconnected"),window.location.reload()})),e.next=9;break;case 7:return console.log("no-metamask"),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"}).then(function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t[0]){e.next=7;break}return n=new k.a(window.ethereum),e.next=4,n.eth.getChainId().then(function(){var e=Object(y.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=t==M?"avax":"not-avax";case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:g=t[0],e.next=8;break;case 7:return e.abrupt("return",[]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",g);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:A}]}).catch((function(e){console.log(e)}));case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=5;break}return t=new k.a(window.ethereum),e.next=4,t.eth.getChainId().then(function(){var e=Object(y.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t==M?"avax":"not-avax",e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=7;break}return t=new k.a(window.ethereum),e.next=4,t.eth.getChainId().then(function(){var e=Object(y.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=t==M?"avax":"not-avax";case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.next=6,t.eth.getAccounts().then(function(){var e=Object(y.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g=t[0]?t[0]:"";case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:return e.abrupt("return",g);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new k.a(window.ethereum),p=new t.eth.Contract(T,"0x5AABc8481797bc3486C75B20108b01761Be2B5dA");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(y.a)(m.a.mark((function e(t,n){var r,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return r=new k.a(window.ethereum),a=p.methods.claim(t),i={from:g,value:r.utils.toWei((n*t).toString(),"ether")},e.next=7,a.send(i).on("error",(function(e){-32602===e.code&&(i.type="0x0",i.maxFeePerGas=null,i.maxPriorityFeePerGas=null,a.send(i).on("error",(function(){})))})).then((function(){return!1}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.abrupt("return",p.methods.totalSupply().call());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.abrupt("return",p.methods.MAX_MINTABLE().call());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(y.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return t=new k.a(window.ethereum),e.next=5,p.methods.NFT_PRICE().call();case 5:return n=e.sent,e.abrupt("return",t.utils.fromWei("".concat(n),"ether"));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.next=4,p.methods.tokensByAddress(t).call();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(y.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return e.next=4,p.methods.tokenURI(t).call();case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),s=Object(b.a)(i,2),c=s[0],u=s[1];Object(r.useEffect)((function(){C(),d(),l()}),[]);var p=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,u(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("disconnect");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(h.a,{bg:"light",expand:"lg",children:[Object(o.jsx)(O.LinkContainer,{to:"/",children:Object(o.jsx)(h.a.Brand,{children:"Home"})}),Object(o.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(o.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(o.jsxs)(x.a,{className:"mr-auto",children:[Object(o.jsx)(O.LinkContainer,{to:"./mint",children:Object(o.jsx)(x.a.Link,{children:"Mint"})}),Object(o.jsx)(O.LinkContainer,{to:"./nft",children:Object(o.jsx)(x.a.Link,{children:"NFT"})}),Object(o.jsx)(O.LinkContainer,{to:"./leaf",children:Object(o.jsx)(x.a.Link,{children:"Leaf"})}),Object(o.jsx)(O.LinkContainer,{to:"./service",children:Object(o.jsx)(x.a.Link,{children:"Service"})}),Object(o.jsx)(O.LinkContainer,{to:"./about",children:Object(o.jsx)(x.a.Link,{children:"About"})})]}),n&&"avax"!=c&&Object(o.jsx)(v.a,{onClick:function(){return p()},children:"Switch Network"}),n&&"avax"===c&&Object(o.jsxs)(v.a,{onClick:function(){return j()},children:[n.substr(21)," ..."]}),!n&&Object(o.jsx)(v.a,{onClick:function(){return f()},children:"Connect"})]})]})},X=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This is Service Page"})})},q=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"About Page"})})},U=n(780),J=n(781),Y=n(784),G=n(122),W=n.n(G),D=function(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),n=(t[0],t[1]),a=Object(r.useState)(0),i=Object(b.a)(a,2),s=(i[0],i[1]),u=Object(r.useState)(0),p=Object(b.a)(u,2),l=(p[0],p[1]),d=Object(r.useState)(!1),f=Object(b.a)(d,2),j=(f[0],f[1],Object(r.useState)("")),h=Object(b.a)(j,2),x=h[0],O=h[1],w=Object(r.useState)(""),k=Object(b.a)(w,2),T=k[0],g=k[1],M=Object(r.useState)([]),A=Object(b.a)(M,2),C=A[0],P=A[1],E=Object(r.useState)([]),R=Object(b.a)(E,2),X=R[0],q=R[1];Object(r.useEffect)((function(){Q(),Z(),ee(),te(),K(),D()}),[]),Object(r.useEffect)((function(){te()}),[x]),Object(r.useEffect)((function(){G()}),[C]);var G=function(){var e=Object(y.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<C.length)){e.next=8;break}return e.next=5,W.a.get(C[n],{responseType:"json"}).then((function(e){t.push(e.data)})).catch((function(){}));case 5:n++,e.next=2;break;case 8:q(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,O(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],!x||"avax"!==T){e.next=6;break}return e.next=4,V(x);case 4:e.sent.forEach(function(){var e=Object(y.a)(m.a.mark((function e(n){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(n);case 2:r=e.sent,a=r.substr(7),t.push("https://ipfs.io/ipfs/"+a),P(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)(c.a,{children:[!x&&Object(o.jsxs)("div",{className:"mintPage",children:[Object(o.jsx)("div",{className:"connect",children:"Vous devez vous connectez avec votre wallet AVAX"}),Object(o.jsx)("div",{children:Object(o.jsx)(v.a,{onClick:function(){return $()},children:"Connect"})})]}),x&&"avax"!==T&&Object(o.jsxs)("div",{className:"mintPage",children:[Object(o.jsx)("p",{children:"Vous devez mint ce NFT sur le reseau AVAX"}),Object(o.jsx)(v.a,{onClick:function(){return H()},children:"Switch Network"})]}),C.length>0?Object(o.jsx)(U.a,{className:"marketPlaceTree",children:X.map((function(e,t){return Object(o.jsx)(J.a,{xs:12,md:8,lg:8,className:"d-flex justify-content-center nftLeaf",style:{marginTop:"20px"},children:Object(o.jsxs)(Y.a,{children:[Object(o.jsx)(Y.a.Img,{variant:"top",src:e.image}),Object(o.jsxs)(Y.a.Body,{children:[Object(o.jsx)(Y.a.Title,{children:e.name}),Object(o.jsx)(Y.a.Text,{children:e.description}),Object(o.jsx)("div",{className:"d-flex justify-content-center"})]})]},t)})}))}):Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"mintPage",children:[Object(o.jsx)("h1",{children:"Vous n'avez pas encore de Tree NFT"}),Object(o.jsx)("a",{href:"./mint",children:"Allez dans la pepiniere pour obtenir une graine"})]})})]})},H=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"This is Leaf Page"})})},$=n.p+"static/media/tree.b35c35f5.png",K=function(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),s=Object(b.a)(i,2),u=s[0],p=s[1],l=Object(r.useState)(0),d=Object(b.a)(l,2),f=d[0],j=d[1],h=Object(r.useState)(!1),x=Object(b.a)(h,2),O=x[0],w=x[1],k=Object(r.useState)(""),T=Object(b.a)(k,2),g=T[0],M=T[1],A=Object(r.useState)(""),C=Object(b.a)(A,2),P=C[0],R=C[1],X=Object(r.useState)([]),q=Object(b.a)(X,2),G=q[0],D=q[1],H=Object(r.useState)([]),K=Object(b.a)(H,2),Q=K[0],Z=K[1],ee=Object(r.useState)([]),te=Object(b.a)(ee,2),ne=te[0];te[1];Object(r.useEffect)((function(){ue(),oe(),pe(),de(),ce(),ae()}),[]),Object(r.useEffect)((function(){de()}),[g]),Object(r.useEffect)((function(){re()}),[G]);var re=function(){var e=Object(y.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=0;case 2:if(!(n<G.length)){e.next=8;break}return e.next=5,W.a.get(G[n],{responseType:"json"}).then((function(e){t.push(e.data)})).catch((function(){}));case 5:n++,e.next=2;break;case 8:Z(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,R(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,M(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,M(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,E(1,f);case 3:t=e.sent,console.log(t),pe(),de(),w(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(y.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],!g||"avax"!==P){e.next=6;break}return e.next=4,V(g);case 4:e.sent.forEach(function(){var e=Object(y.a)(m.a.mark((function e(n){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(n);case 2:r=e.sent,a=r.substr(7),t.push("https://ipfs.io/ipfs/"+a),D(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(G.length>0);else;return console.log(ne),console.log(g),console.log(P),console.log(Q),Object(o.jsxs)(c.a,{children:[!g&&Object(o.jsxs)("div",{className:"mintPage",children:[Object(o.jsx)("div",{className:"connect",children:"Vous devez vous connectez avec votre wallet AVAX"}),Object(o.jsx)("div",{children:Object(o.jsx)(v.a,{onClick:function(){return se()},children:"Connect"})})]}),g&&"avax"!==P&&Object(o.jsxs)("div",{className:"mintPage",children:[Object(o.jsx)("p",{children:"Vous devez mint ce NFT sur le reseau AVAX"}),Object(o.jsx)(v.a,{onClick:function(){return ie()},children:"Switch Network"})]}),g&&"avax"===P&&Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mintPage",children:[Object(o.jsx)("h1",{children:"Mint your first tree"}),Object(o.jsxs)("div",{children:[u-n," / 10000 restant"]})]}),Object(o.jsx)(U.a,{className:"marketPlaceTree",children:Object(o.jsx)(J.a,{xs:12,md:8,lg:8,className:"d-flex justify-content-center nftLeaf",style:{marginTop:"20px"},children:Object(o.jsxs)(Y.a,{children:[Object(o.jsx)(Y.a.Img,{variant:"top",src:$}),Object(o.jsxs)(Y.a.Body,{children:[Object(o.jsx)(Y.a.Title,{children:"Tree NFT"}),Object(o.jsx)(Y.a.Text,{children:"Ce LEAF TREE \xe0 d\xe9j\xe0 donn\xe9 vie \xe0 10 arbres dans le monde r\xe9el et si tu fais 10 000 pas aujourd'hui, il te donnera 6 LEAFs. Des LEAFs qui permettront de planter de nouveaux arbres. Alors l\xe8ve toi et marche!"})]}),Object(o.jsxs)(v.a,{disabled:O,variant:"primary",onClick:function(){return le()},children:["Mint ",f," "]})]})})})]}),1==ne&&console.log("player true")]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsxs)(d.BrowserRouter,{children:[Object(o.jsx)(R,{}),Object(o.jsxs)(f.g,{children:[Object(o.jsx)(f.d,{exact:!0,path:"/",component:l}),Object(o.jsx)(f.d,{path:"/service",component:X}),Object(o.jsx)(f.d,{path:"/about",component:q}),Object(o.jsx)(f.d,{path:"/mint",component:K}),Object(o.jsx)(f.d,{path:"/nft",component:D}),Object(o.jsx)(f.d,{path:"/leaf",component:H})]})]})}),document.getElementById("root"))}},[[773,1,2]]]);
//# sourceMappingURL=main.5692c111.chunk.js.map