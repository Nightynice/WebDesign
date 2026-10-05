async function loadComponent(id,path){
    const response=await fetch(path);
    if(!response.ok)return;
    document.getElementById(id).innerHTML=await response.text();
    if(id==="navbar")initNavbar();
}

function initNavbar(){
    const toggle=document.querySelector(".menu-toggle");
    const menu=document.querySelector(".nav-menu");
    if(!toggle||!menu)return;
    const isTablet=()=>window.innerWidth<=1024;
    toggle.addEventListener("click",()=>{
        const open=menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded",String(open));
        toggle.setAttribute("aria-label",open?"ปิดเมนู":"เปิดเมนู");
    });
    document.querySelectorAll(".dropdown-toggle").forEach(link=>link.addEventListener("click",e=>{
        if(!isTablet())return;
        e.preventDefault();
        e.stopPropagation();
        const parent=link.parentElement;
        parent.classList.toggle("open");
        if(!parent.classList.contains("dropdown-submenu")){
            parent.parentElement.querySelectorAll(":scope > .dropdown.open").forEach(item=>{
                if(item!==parent)item.classList.remove("open");
            });
        }
    }));
    initCountryMegaMenu();
    document.addEventListener("click",e=>{
        if(isTablet()&&!e.target.closest(".nav"))closeMenu();
    });
    window.addEventListener("resize",()=>{
        if(!isTablet())closeMenu();
    });
    window.addEventListener("scroll",()=>{
        const header=document.querySelector(".site-header");
        if(header)header.classList.toggle("scrolled",window.scrollY>20);
    });
}

function closeMenu(){
    document.querySelectorAll(".nav-menu.open").forEach(menu=>menu.classList.remove("open"));
    document.querySelectorAll(".dropdown.open,.dropdown-submenu.open").forEach(item=>item.classList.remove("open"));
    document.querySelectorAll(".menu-toggle").forEach(btn=>{
        btn.setAttribute("aria-expanded","false");
        btn.setAttribute("aria-label","เปิดเมนู");
    });
}

function initCountryMegaMenu(){
    const items=document.querySelectorAll(".country-item");
    const title=document.getElementById("countryTitle");
    const links=document.querySelectorAll("#countryLinks a");
    if(!items.length||!title)return;
    const update=item=>{
        const country=item.dataset.country;
        title.textContent=country;
        items.forEach(x=>x.classList.toggle("active",x===item));
        links.forEach(link=>{
            const url=new URL(link.href,window.location.origin);
            url.searchParams.set("country",country);
            link.href=url.pathname+url.search;
        });
    };
    items.forEach(item=>{
        item.addEventListener("mouseenter",()=>update(item));
        item.addEventListener("click",()=>update(item));
    });
}

loadComponent("navbar","/components/navbar.html");
loadComponent("footer","/components/footer.html");
