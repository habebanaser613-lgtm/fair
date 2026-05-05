// const themeBtn = document.getElementById("themed");
// const currentTheme = localStorage.getItem("theme");
// if (currentTheme === "dark") {
//     document.body.classList.add("dark-mode");
// }
// themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
// themeBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     let theme = "light";
//     if (document.body.classList.contains("dark-mode")) {
//         theme = "dark";
//     }
//     localStorage.setItem("theme", theme);
//     themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
// });


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
// video.addEventListener('mouseenter', () => {
// video.play();
// });
// video.addEventListener('mouseleave', () => {
// video.pause();
// video.currentTime = 0;
// });