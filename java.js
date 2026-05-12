document.addEventListener('DOMContentLoaded', function () {

    const savedLayout = localStorage.getItem('layout');
    const layoutLink = document.getElementById('lay');

    if (savedLayout) {
        setLayout(savedLayout);
    } else {
        // setLayout('layout1.css');
        layoutLink.setAttribute('href', 'layout1.css');
    }

    document.getElementById('btn').addEventListener('click', function () {

        const currentLayout =
            document.getElementById('lay').getAttribute('href');

        if (currentLayout === 'layout1.css') {
            setLayout('layout.css');
        } else {
            setLayout('layout1.css');
        }
    });

});

function setLayout(layout) {
    const layoutLink = document.getElementById('lay');

    layoutLink.setAttribute('href', layout);

    localStorage.setItem('layout', layout);
}


const audio = document.querySelector("audio");
const buttons = document.querySelectorAll(".play");

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});