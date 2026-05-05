function searchBooks() {

    let input =
        document
            .getElementById("search")
            .value
            .toLowerCase();

    let books =
        document.querySelectorAll(".book");


    books.forEach(function (book) {

        let title =
            book.querySelector("h2")
                .innerText
                .toLowerCase();


        if (
            title.includes(input)
        ) {

            book.style.display = "block";

            book.scrollIntoView({
                behavior: "smooth"
            });

        }
        else {

            book.style.display = "none";

        }

    });

}
function changeStyle() {

    let allParagraphs =
        document.querySelectorAll(".book");

    allParagraphs.forEach(p => {

        p.classList.toggle("book-style");

    });

}


