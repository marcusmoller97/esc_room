hamburgerMenu();

window.addEventListener("resize", () => {
    const div = document.querySelector(".icon");
    if (window.innerWidth < 965) {
        div.style.visibility = "visible";
    } else {
        div.style.visibility = "hidden";
    }
});

const div = document.querySelector(".icon");
div.addEventListener("click", createNav);

function createNav () {
    const navContainer = document.createElement("nav");
    navContainer.id = "mobile-nav";

    /* create copy of header nav */
    const originalLi = document.querySelector(".navbar");
    const clonedLi = originalLi.cloneNode(true);

    /* opacity all elements except mobile-nav */
    const elements = document.querySelectorAll("body *:not(#mobile-nav)");
    elements.forEach(ele => {
        fadeOut(ele);
    });

    /* add style to nav */
    navContainer.style.position = "absolute";
    navContainer.style.top = "0";
    navContainer.style.bottom = "0";
    navContainer.style.left = "0";
    navContainer.style.right = "0";
    navContainer.style.opacity = "0";

    navContainer.style.margin = "auto";

    navContainer.style.width = "90%";
    navContainer.style.height = "95%";
    navContainer.style.backgroundColor = "#011827";

    /* add navContainer  */
    document.body.append(navContainer);

    /* add style to list inside navContainer */
    clonedLi.style.textAlign = "center";
    clonedLi.style.marginTop = "auto";
    clonedLi.style.marginBottom = "auto";
    clonedLi.style.textDecoration = "none";
    clonedLi.style.height = "calc(100% - 90px - 8rem";
    clonedLi.style.display = "flex";
    clonedLi.style.flexDirection = "column";
    clonedLi.style.justifyContent = "center";
    clonedLi.style.gap = "3rem";

    const listChildren = Array.from(clonedLi.children);
    listChildren.forEach(ele => {
        ele.style.listStyleType = "none";
        ele.firstChild.style.color = "#FFF";
        ele.firstChild.style.textDecoration = "none";
        ele.firstChild.style.fontSize = "36px";
        ele.firstChild.style.fontWeight = "bold";
    });

    /* create div for exitImg and add exitImg */
    const exitFig = document.createElement("article");
    exitFig.style.height = "90px";
    exitFig.classList.add("exit-article");
    const exitImg = document.createElement("img");
    exitImg.src = "./img/close.png";
    exitImg.alt = "";
    exitImg.id = "exit-img";

    exitImg.style.float = "right";
    exitImg.style.padding = "1.5rem 1.5rem";
    exitImg.style.opacity = "0";

    exitFig.append(exitImg);

    /* append navContainer, div for exit img */
    navContainer.append(exitFig);
    navContainer.append(clonedLi);

    setTimeout(() => {
        fadeIn(navContainer);
        setTimeout(() => {
            const exitImg = document.querySelector("#exit-img");
            fadeIn(exitImg);

        }, 100);
    }, "200");

    /* exitImg click */
    clickExit();
}

function fadeIn (element) {
    element.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );
}

function fadeOut (element) {
    const animation = element.animate(
        [
            { opacity: 1 },
            { opacity: 0.5 }
        ],
        {
            duration: 500,
            easing: "ease-in-out",
            fill: "none"
        }
    );

    animation.onfinish = () => {
        element.style.opacity = 0.5;
    };
}

function clickExit () {
    const clickExit = document.querySelector("#exit-img");
    clickExit.addEventListener("click", () => {
        const nav = document.querySelector("#mobile-nav");
        nav.remove();
        const elements = document.querySelectorAll("body *:not(#mobile-nav)");
        elements.forEach(ele => {
            ele.style.opacity = "1";
        });
    });
}

function hamburgerMenu () {
    const sectionLogo = document.querySelector(".section-flex");

    const div = document.createElement("div");

    div.classList.add("icon");
    div.style.display = "flex";
    div.style.float = "left";
    div.style.flexDirection = "column";
    div.style.alignSelf = "flex-start";
    div.style.gap = "8px";
    div.style.marginLeft = "auto";
    div.style.marginRight = "20px";
    if (window.innerWidth > 965) {
        div.style.visibility = "hidden";
    }

    sectionLogo.append(div);
    for (let i = 0; i < 3; ++i) {
        const img = document.createElement("img");
        img.src = "./img/line.png";
        div.append(img);
    }
}
