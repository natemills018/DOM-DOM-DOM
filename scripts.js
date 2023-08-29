document.addEventListener("DOMContentLoaded", function () {




    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.append(btnText);
    button.className = 'button-settings';
    document.body.appendChild(button);

    let x = 0;




    button.addEventListener("click", function () {
        //let container = document.createElement('div')
        //container.className = 'container-div';        
        let div1 = document.createElement('div');
        div1.className = 'awesome-div1';
        div1.id = x++;
        let h3 = document.createElement('h3');
        let h3text = document.createTextNode(div1.id);
        h3.className = 'awesome-h3';


        let colors = ['blue', 'green', 'red', 'purple', 'yellow', 'orange', 'gray', 'brown'];


        div1.addEventListener("click", function () {
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            div1.style.background = randomColor;
        })

        div1.addEventListener("dblclick", function () {

            let nextSib = div1.nextElementSibling

            let preSib = div1.previousElementSibling

            if (div1.id % 2 === 1) {
                if (preSib) {
                    preSib.remove();

                } else {
                    alert("There isn't a square located before this");
                }
            }

            if (div1.id % 2 === 0) {
                if (nextSib) {
                    nextSib.remove();
                } else {
                    alert("There isn't a square located after this one!")
                }
            }

        })

        h3.appendChild(h3text);
        div1.appendChild(h3);






        // container.appendChild(div1);

        document.body.appendChild(div1);
    })



})