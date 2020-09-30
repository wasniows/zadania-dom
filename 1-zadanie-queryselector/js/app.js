document.addEventListener('DOMContentLoaded', () => {

    //1. Znajdź elementy o klasie `.first-attempt` - dodaj im klasę `.active`
    {
        const elems = document.querySelectorAll(".first-attempt");
        for (let el of elems) {
            el.classList.add("active")
        }
    }

    //2. Znajdź elementy z atrybutem `data-border` i dodaj im atrybut `data-el-active`. Wykorzystaj dataset i inny rodzaj pętli niż w 1 zadaniu
    {
        const elems = document.querySelectorAll("[data-border]");
        for (let el of elems) {
            el.dataset.elActive = true;
        }
    }

    //3. Znajdź elementy z klasą `.hack`. Dodaj im atrybut title ustawiony na wartość "hacking". Atrybut ten nie powinien zaczynać się od `data-`
    {
        const elems = document.querySelectorAll(".hack");
        for (let el of elems) {
            el.title = "hacking"
        }
    }

    //4. Znajdź elementy o klasie `.hijack`. Usuń im atrybut `title`
    {
        const elems = document.querySelectorAll(".hijack");
        for (let el of elems) {
            el.removeAttribute("title")
        }
    }

    //5. Znajdź elementy które mają 2 klasy równocześnie: `.st1` i `.st2`. Dodaj im style: `color na red`, i `font-weight na bold`
    {
        const elems = document.querySelectorAll(".st1.st2");
        for (let el of elems) {
            el.style.cssText = 'color: red; font-size: 15px'
        }
    }

    //6. Znajdź elementy które mają klasę `.attrib`. Dodaj im atrybut `data-hack-active`, usuń atrybut `data-hack-inactive`
    {
        const elems = document.querySelectorAll(".attrib");
        for (let el of elems) {
            el.setAttribute('data-hack-active', true);
            el.removeAttribute(`data-hack-inactive`)
        }
    }

    //7. Znajdź elementy o klasie `.last-attempt` i ukryj (nie usuwaj) w ich wnętrzu spany
    {
        const elems = document.querySelectorAll(".last-attempt");
        for (let el of elems) {
            el.querySelectorAll("span").forEach(el => el.style.display = "none")
        }
    }

});