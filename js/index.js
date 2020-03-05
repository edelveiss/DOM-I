const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

function selectAll(str) {
    return document.querySelectorAll(str);
}

function selector(str) {
    return document.querySelector(str);
}
let navArr = selectAll("nav a");
//let navArr = document.querySelectorAll("nav a");
// navArr[0].textContent = siteContent["nav"]["nav-item-1"];
//console.log(navArr[1].textContent);
for (let i = 0; i < navArr.length; i++) {
    navArr[i].textContent = siteContent["nav"]["nav-item-" + (i + 1)];
}
let ctaText = selector(".cta-text");
ctaText.style.width = "25%";
//ctaText.style.marginTop = "10px";
let ctah1 = selector(".cta h1");
ctah1.textContent = siteContent["cta"]["h1"];
ctah1.style.width = "80%";
ctah1.style.height = "60%";
ctah1.style.textAlign = "center";

let butStarted = selector(".cta button");
butStarted.textContent = siteContent["cta"]["button"];
let imgCta = selector(".cta img");
imgCta.setAttribute('src', siteContent["cta"]["img-src"]);

//main content
let mainTextContentH4 = selectAll(".text-content h4");
let mainTextContentP = selectAll(".text-content p");

mainTextContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainTextContentP[0].textContent = siteContent["main-content"]["features-content"];

mainTextContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainTextContentP[1].textContent = siteContent["main-content"]["about-content"];

let mainContentImg = selector(".main-content img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

mainTextContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainTextContentP[2].textContent = siteContent["main-content"]["services-content"];

mainTextContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainTextContentP[3].textContent = siteContent["main-content"]["product-content"];

mainTextContentH4[4].textContent = siteContent["main-content"]["vision-h4"];
mainTextContentP[4].textContent = siteContent["main-content"]["vision-content"];

//contact
let contact = selector(".contact");
contact.style.width = '20%';

let contactH4 = selector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = selectAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//footer

let footerP = selector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];