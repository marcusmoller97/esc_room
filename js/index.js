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
    navContainer.classList.add("mobile-nav");
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
    navContainer.style.opacity = "0";

    /* add navContainer  */
    document.body.append(navContainer);

    const listChildren = Array.from(clonedLi.children);
    let count = 1;
    listChildren.forEach(ele => {
        ele.classList.add(`ele${count}`);
        ++count;
    });

    /* create div for exitImg and add exitImg */
    const exitFig = document.createElement("article");
    exitFig.classList.add("exit-article");

    const exitImg = document.createElement("img");
    exitImg.src = "./img/close.png";
    exitImg.alt = "";
    exitImg.id = "exit-img";

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
