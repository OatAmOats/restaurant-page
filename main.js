(()=>{"use strict";function e(e){let t=document.createElement("p");return t.textContent=e,t}function t(){const t=document.querySelector(".main");t&&(t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const n=document.createElement("div");n.classList.add("mealCont");const a=document.createElement("img");a.src="./images/glass-of-milk.jpg",a.alt="glass of milk";const d=document.createElement("div");d.classList.add("vMealTxt");const i=document.createElement("div");i.appendChild(function(e){let t=document.createElement("div");return t.classList.add("desc"),t.textContent="Our Signature Shake: A Glass of Milk™!",t}());const o=document.createElement("div");o.appendChild(e("Our Glass of Milk™ will blow your mind. Order it warm or chilled depending on your preference, \n            and for just $2.99 you get a side of cookies to dunk.")),d.appendChild(i),d.appendChild(o),n.appendChild(a),n.appendChild(d);const c=document.createElement("div");c.classList.add("testimonial");const l=document.createElement("div");l.append(e("Wow, these shakes are on another level. The signature Glass of Milk™ will blow your socks off!"));const s=document.createElement("div");s.classList.add("testAU"),s.textContent="-Dairy Dan, milkman by trade, milkshake reviewer by passion",c.appendChild(l),c.appendChild(s);const r=document.createElement("div");r.classList.add("testimonial");const m=document.createElement("div");m.append(e("This is a restaurant worth coming back from the dead for. The milkshakes are incredible and the Glass of Milk™ with cookies\n         will really get your body Moo-ving!"));const p=document.createElement("div");return p.classList.add("testAU"),p.textContent="-The Ghost of Larry Longhorn, cattle",r.appendChild(m),r.appendChild(p),t.appendChild(n),t.appendChild(c),t.appendChild(r),t}()))}function n(e){let t=document.createElement("div");t.classList.add("menuItem");let n=document.createElement("div");return n.classList.add("menuTitle"),n.textContent=e,t.appendChild(n),t}function a(e){let t=document.createElement("p");return t.textContent=e,t}function d(){const e=document.createElement("div");e.classList.add("header");const d=document.createElement("div");return d.classList.add("restName"),d.textContent="ShakeCraft Milk Co.",e.appendChild(d),e.appendChild(function(){const e=document.createElement("nav"),d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Home",d.addEventListener("click",(e=>{i(d),t()}));const o=document.createElement("button");o.classList.add("button-nav"),o.textContent="Menu",o.addEventListener("click",(e=>{i(o),function(){const e=document.querySelector(".main");e&&(e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menugrid");const t=document.createElement("div");t.classList.add("milkcont");const a=document.createElement("img");a.src="./images/glass-of-milk.jpg",a.alt="glass of milk";const d=document.createElement("div");d.classList.add("milktxt"),d.textContent="The ShakeCraft Milk Co. Signature Glass of Milk™",t.appendChild(d),t.appendChild(a);const i=document.createElement("div");i.classList.add("flavors"),i.textContent="Alternatively, you can choose a milkshake combining any of our flavors!";const o=n("Chocolate"),c=document.createElement("img");c.src="./images/choc.jpeg",c.alt="chocolate milkshake",o.appendChild(c);const l=n("Vanilla"),s=document.createElement("img");s.src="./images/vanilla.jpeg",s.alt="vanilla milkshake",l.appendChild(s);const r=n("Strawberry"),m=document.createElement("img");m.src="./images/strawberry.jpeg",m.alt="strawberry milkshake",r.appendChild(m);const p=n("Mint"),u=document.createElement("img");u.src="./images/mint.jpeg",u.alt="mint milkshake",p.appendChild(u);const h=n("Raspberry"),C=document.createElement("img");C.src="./images/rasp.jpeg",C.alt="raspberry milkshake",h.appendChild(C);const k=n("Cookies n' Cream"),g=document.createElement("img");g.src="./images/cookncream.jpeg",g.alt="cookies n cream milkshake",k.appendChild(g);const f=n("Peanut Butter"),E=document.createElement("img");E.src="./images/pbm.jpeg",E.alt="peanut butter milkshake ",f.appendChild(E);const v=n("Coffee"),b=document.createElement("img");b.src="./images/coffee.jpeg",b.alt="coffee milkshake",v.appendChild(b);const y=n("Banana"),L=document.createElement("img");return L.src="./images/banan.jpeg",L.alt="banana milkshake",y.appendChild(L),e.appendChild(t),e.appendChild(i),e.appendChild(o),e.appendChild(l),e.appendChild(r),e.appendChild(p),e.appendChild(h),e.appendChild(k),e.appendChild(f),e.appendChild(v),e.appendChild(y),e}()))}()}));const c=document.createElement("button");return c.classList.add("button-nav"),c.textContent="About",c.addEventListener("click",(e=>{i(c),function(){const e=document.querySelector(".main");e&&(e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("about");const t=document.createElement("div");t.classList.add("abthead"),t.textContent="About the ShakeCraft Milk Company";const n=document.createElement("div");n.classList.add("abtmain"),n.appendChild(a("The ShakeCraft Milk Company was founded in 2023 when its founder, Vicente Tapia, was trying to come up with an idea for a fake restaurant.")),n.appendChild(a("Since its founding, SCM Co. has opened over a dozen locations worldwide, and critics around the world are celebrating it.")),n.appendChild(a("Unfortunately, it is not real, and you will not be able to try it.")),n.appendChild(a("Here's Vicente's github page though!"));const d=document.createElement("a");return d.href="https://github.com/OatAmOats",d.textContent="github",d.setAttribute("target","_blank"),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}()))}()})),e.appendChild(d),e.appendChild(o),e.appendChild(c),e}()),e}function i(e){document.querySelectorAll(".button-nav").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}!function(){const e=document.getElementById("content");if(e)return e.appendChild(d()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("main"),e.setAttribute("id","main"),e}()),void t()}()()})();