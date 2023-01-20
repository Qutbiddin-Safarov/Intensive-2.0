// Global 
    // global variables
const heroPage = document.querySelector("#content_box")
        // tooggles
        const tgl1 = document.querySelector("#tgl1");
        const tgl2 = document.querySelector("#tgl2");
        const tgl3 = document.querySelector("#tgl3");

        tgl1.style.background = "#0096A7";

        // Feature section varuabes
            // features info btns
                const fL_2 = document.querySelector("#f_l2");
                const fL_1 = document.querySelector("#f_l1");
                const fL_3 = document.querySelector("#f_l3");

            // features p -- text
                const f_P = document.querySelector("#f_info");
            
// Function slider with DOM

// IMG - 1
    function hero_1(){
        // cleaning page
        heroPage.innerHTML = "";
        // set new value
        heroPage.innerHTML += `
        <!-- IMG div -->
        <div class="hero-img_box">
            <img src="./img/hero-1.png" alt="web-planet">
        </div>
        <!-- TEXT div -->
        <div class="hero-text_box">
            <h1 class="site-h1">
            Разработано 2000+ приложений
            </h1>
            <p class="hero-p">
                Для вашего удобства мы разработали<br> 
                множество приложений для вашего <br> 
                бизнеса и команды, которые доступны <br>
                в любое время суток 
            </p>
            <a href="" class="hero-btn">
                Присоединяйтесь
            </a>
        </div>
        `

        // toggles 

        tgl1.style.background = "#0096A7";
        tgl2.style.background = "transparent";
        tgl3.style.background = "transparent";

        // toggles

    }

// IMG - 2

    function hero_2(){
        // cleaning page
        heroPage.innerHTML = "";
        // set new value
        heroPage.innerHTML += `
        <!-- IMG div -->
        <div class="hero-img_box">
            <img src="./img/hero-2.png" alt="web-planet">
        </div>
        <!-- TEXT div -->
        <div class="hero-text_box">
            <h1 class="site-h1">
            Бесплатные <br> приложения
            </h1>
            <p class="hero-p">
            К любому сервисному обслуживанию мы <br>
            подключим советы по управлению <br>
            компанией совершенно бесплатно
            </p>
        </div>
        `

        // toggle

        tgl1.style.background = "transparent";
        tgl2.style.background = "#0096A7";
        tgl3.style.background = "transparent";

        // toggle

    }

// IMG - 3

    function hero_3(){
        // cleaning page
        heroPage.innerHTML = "";
        // set new value
        heroPage.innerHTML += `
        <!-- IMG div -->
        <div class="hero-img_box">
            <img src="./img/hero-3.png" alt="web-planet">
        </div>
        <!-- TEXT div -->
        <div class="hero-text_box">
            <h1 class="site-h1">
            Тысячи довольных клиентов
            </h1>
            <p class="hero-p">
            Накопленный нами опыт позволяет <br>
             предлагать клиентам обширный спектр <br>
              качественных приложений и сервисов
            </p>
        </div>
        `

        // toggle

        tgl1.style.background = "transparent";
        tgl2.style.background = "transparent";
        tgl3.style.background = "#0096A7";

        // toggle

    }


    // FEatures INFO slider

    function fLink_1(){
        // cleaning <p>
        f_P.innerHTML = "";
        // set new value to <p>
        f_P.innerHTML += `
        Создаем кастомизированные программы и сервисы
        для развития <br>
        управленческих команд в российских и
        международных компаниях
        `

        fL_1.style.color = "#0096A7";
        fL_1.style.borderBottom = "1px solid #0096A7"
        fL_2.style.color = "rgba(66, 74, 87, 0.5)";
        fL_2.style.borderBottom = "0"
        fL_3.style.color = "rgba(66, 74, 87, 0.5)";
        fL_3.style.borderBottom = "0"
    }

    function fLink_2(){
        // cleaning <p>
        f_P.innerHTML = "";
        // set new value to <p>
        f_P.innerHTML += `
        Помогаем руководителям и командам колл-центров создать полный цикл по
        <br>
        поддержке клиентов и
        организовать контроль качества
        `
        
        // Features tgl css props

        fL_1.style.color = "rgba(66, 74, 87, 0.5)";
        fL_1.style.borderBottom = "0"
        fL_2.style.color = "#0096A7";
        fL_2.style.borderBottom = "1px solid #0096A7"
        fL_3.style.color = "rgba(66, 74, 87, 0.5)";
        fL_3.style.borderBottom = "0"

         // Features tgl css props

    }

    function fLink_3(){
        // cleaning <p>
        f_P.innerHTML = "";
        // set new value to <p>
        f_P.innerHTML += `
        Разрабатываем локальные защищенные
        корпоративные хранилища, <br>
         а также осуществляем
        поддержку на протяжении всего времени
        пользования 
        `

         // Features tgl css props

        fL_2.style.color = "rgba(66, 74, 87, 0.5)";
        fL_2.style.borderBottom = "0"
        fL_1.style.color = "rgba(66, 74, 87, 0.5)";
        fL_1.style.borderBottom = "0"
        fL_3.style.color = "#0096A7";
        fL_3.style.borderBottom = "1px solid #0096A7"
        
         // Features tgl css props
         
    }


