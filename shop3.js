//  ارااي ايوقونات المنتجات مع صورة كل كتاب من هنا تعدل مش من ال اتش تي ام ال
// --------------------------- Self Development ---------------------------

var books = [
     //تطوير الذات
    { name: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 79, img: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg", desc: "How the rich think differently about money and wealth." },
    { name: "The 7 Habits of Highly Effective People", author: "Stephen Covey", price: 95, img: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg", desc: "Seven habits to become more productive and effective in life." },
    { name: "Secrets of the Millionaire Mind", author: "T. Harv Eker", price: 82, img: "https://m.media-amazon.com/images/I/71BAdL0OaTL.jpg", desc: "Secrets of wealthy minds and how to program your brain for riches." },
    { name: "Who Moved My Cheese?", author: "Spencer Johnson", price: 48, img: "https://covers.openlibrary.org/b/isbn/9780091816971-L.jpg", desc: "An allegory about adapting to change in work and life." },
         // { name: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", price: 66, img: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg", desc: "How to choose what truly matters and ignore the rest." },
    { name: "The Power of Your Subconscious Mind", author: "Joseph Murphy", price: 59, img: "https://m.media-amazon.com/images/I/81gTwYAhU7L.jpg", desc: "Harness the power of the subconscious mind for success and happiness." },
    { name: "How to Win Friends and Influence People", author: "Dale Carnegie", price: 73, img: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg", desc: "Golden principles for dealing with people and gaining their trust." },
    { name: "You Can", author: "George Matthew Adams", price: 42, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAcGtmbc3QPNLk8sobwBrLSRFdZn1xj9pWQ&s", desc: "Motivational messages to build self-confidence and believe in your abilities." },
    { name: "Jump", author: "Steve Harvey", price: 54, img: "https://covers.openlibrary.org/b/isbn/9781501120190-L.jpg", desc: "How to take a leap toward success and overcome fear." },

    // كتب عربية 
    { name: "ثلاثية غرناطة", author: "Radwa Ashour", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT24TtSg8o81856bARMoYTlEubOU_sEDajiw&s", desc: "A historical novel about the fall of Andalusia and the tragedy of Muslims." },
    { name: "عزازيل", author: "Youssef Ziedan", price: 88, img: "https://m.media-amazon.com/images/I/A1xzpK7VXHL._AC_UF1000,1000_QL80_.jpg", desc: "The struggle between good and evil in ancient Egypt at the dawn of Christianity." },
    { name: "رجال في الشمس", author: "Ghassan Kanafani", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuaIPzigdAbYgxb2jrCU4o-U1lTlF01xw5w&s", desc: "The story of three Palestinian refugees trying to cross the desert." },
    { name: "يوتوبيا", author: "Ahmed Khaled Tawfik", price: 62, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNkBStQ0owq8-PbSgguUMFbFuqygSX-wSQ&s", desc: "A futuristic tale about class struggle in Egypt." },
       //     { name: "الأسود يليق بك", author: "Ahlam Mosteghanemi", price: 78, img: "https://covers.openlibrary.org/b/isbn/9789953884417-L.jpg", desc: "A romantic novel about love, betrayal, and revenge." },
       //    { name: "أولاد حارتنا", author: "Naguib Mahfouz", price: 95, img: "https://covers.openlibrary.org/b/isbn/9789770906286-L.jpg", desc: "An epic about the struggle between good and evil in a popular neighborhood." },
        //    { name: "ذاكرة الجسد", author: "Ahlam Mosteghanemi", price: 83, img: "https://covers.openlibrary.org/b/isbn/9789953884394-L.jpg", desc: "A love story between an Algerian artist and an Arab intellectual." },

    // ===== Novels =====
    { name: "Anna Karenina", author: "Leo Tolstoy", price: 125, img: "https://covers.openlibrary.org/b/isbn/9780143035008-L.jpg", desc: "The tragedy of love and betrayal in Russian society." },
        // { name: "To Kill a Mockingbird", author: "Harper Lee", price: 92, img: "https://covers.openlibrary.org/b/isbn/9780061935466-L.jpg", desc: "A story about racism and justice from a child's perspective." },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 68, img: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", desc: "The American Dream and false wealth in the 1920s." },
    { name: "One Hundred Years of Solitude", author: "Gabriel García Márquez", price: 120, img: "https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg", desc: "The epic of the Buendía family across generations of solitude." },
    { name: "A Passage to India", author: "E. M. Forster", price: 74, img: "https://covers.openlibrary.org/b/isbn/9780156711425-L.jpg", desc: "The relationship between the British and Indians during colonial times." },
    { name: "Invisible Man", author: "Ralph Ellison", price: 86, img: "https://covers.openlibrary.org/b/isbn/9780679732761-L.jpg", desc: "A black man's struggle for identity in America." },
    { name: "Don Quixote", author: "Miguel de Cervantes", price: 105, img: "https://covers.openlibrary.org/b/isbn/9780142437230-L.jpg", desc: "The adventures of the wandering knight Don Quixote." },

    // ===== Programming & Technology =====
    { name: "Clean Code", author: "Robert C. Martin", price: 115, img: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg", desc: "Principles of writing clean and maintainable code." },
    { name: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", price: 108, img: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg", desc: "Practical tips to become a professional programmer." },
    { name: "Introduction to Algorithms", author: "Cormen et al.", price: 145, img: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg", desc: "The most famous reference on algorithms." },
    { name: "Design Patterns", author: "Erich Gamma et al.", price: 132, img: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg", desc: "Design patterns for solving recurring software problems." },
    { name: "Code Complete", author: "Steve McConnell", price: 128, img: "https://covers.openlibrary.org/b/isbn/9780735619678-L.jpg", desc: "A comprehensive guide to building high-quality software." },
    { name: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", price: 140, img: "https://covers.openlibrary.org/b/isbn/9780262510875-L.jpg", desc: "Fundamentals of programming using Scheme." },
    { name: "The C Programming Language", author: "Kernighan & Ritchie", price: 98, img: "https://covers.openlibrary.org/b/isbn/9780131103627-L.jpg", desc: "The C language reference from its creators." },

    // تاريخ و سياسه
    { name: "Guns, Germs, and Steel", author: "Jared Diamond", price: 102, img: "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg", desc: "Why human civilizations evolved differently." },
    { name: "The Rise and Fall of the Third Reich", author: "William L. Shirer", price: 135, img: "https://covers.openlibrary.org/b/isbn/9781451651683-L.jpg", desc: "The history of Nazi Germany and Hitler's rise." },
    { name: "1776", author: "David McCullough", price: 89, img: "https://covers.openlibrary.org/b/isbn/9780743226721-L.jpg", desc: "The year of the American Revolution as never seen before." },
    { name: "The Guns of August", author: "Barbara Tuchman", price: 96, img: "https://covers.openlibrary.org/b/isbn/9780345476098-L.jpg", desc: "How World War I broke out." },
    { name: "Team of Rivals", author: "Doris Kearns Goodwin", price: 112, img: "https://covers.openlibrary.org/b/isbn/9780743270755-L.jpg", desc: "The political genius of Abraham Lincoln." },
    { name: "John Adams", author: "David McCullough", price: 99, img: "https://covers.openlibrary.org/b/isbn/9780743223133-L.jpg", desc: "The biography of America's second president." },
    { name: "The Diary of a Young Girl", author: "Anne Frank", price: 58, img: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg", desc: "Anne Frank's diary during the Nazi occupation." },

    // قصص اطفال
    { name: "The Very Hungry Caterpillar", author: "Eric Carle", price: 35, img: "https://covers.openlibrary.org/b/isbn/9780399226908-L.jpg", desc: "A little caterpillar eats its way toward transformation." },
    { name: "Where the Wild Things Are", author: "Maurice Sendak", price: 42, img: "https://covers.openlibrary.org/b/isbn/9780060254926-L.jpg", desc: "Max's adventures with the wild things." },
    { name: "The Giving Tree", author: "Shel Silverstein", price: 38, img: "https://covers.openlibrary.org/b/isbn/9780060256654-L.jpg", desc: "A tree gives everything to a boy without asking for anything in return." },
    { name: "Green Eggs and Ham", author: "Dr. Seuss", price: 32, img: "https://covers.openlibrary.org/b/isbn/9780394800165-L.jpg", desc: "A funny story about trying new foods." },
    { name: "Goodnight Moon", author: "Margaret Wise Brown", price: 28, img: "https://covers.openlibrary.org/b/isbn/9780064430173-L.jpg", desc: "A bedtime story about a little room." },
    { name: "Charlotte's Web", author: "E. B. White", price: 48, img: "https://covers.openlibrary.org/b/isbn/9780061124952-L.jpg", desc: "The friendship between a pig and a spider on a farm." },
    { name: "The Cat in the Hat", author: "Dr. Seuss", price: 36, img: "https://covers.openlibrary.org/b/isbn/9780394800011-L.jpg", desc: "A cat wearing a hat turns a house upside down." }
];
// اسم الكتاب بعدين المؤلف ثم السعر ثم رابط الصورة و اخر حاجه الدسكربشت تبع الكتاب 







// فونكشن تعرض الكتب ال ارااي و تطبع اتش تي ام ال بالستعمال فور لوب

function displayBooks() {
  var grid = document.getElementById("booksGrid");
  if (grid == null) return;

  var html = "";

  // اللوب
  for (var i = 0; i < books.length; i++) {
    var b = books[i];

    // كود ال اتش تي ام ال
      html += '<div class="project-card">' +
      '<div class="project-image"><img src="' + b.img + '" alt="' + b.name + '"></div>' +
      '<div class="project-info">' +
      '<p>✍️ ' + b.author + '</p>' +
        '<strong>' + b.name + '</strong>' +
      '<div class="price">$' + b.price + '</div>' +
      '<p class="book-description">📖 ' + b.desc + '</p>' +
      '<div class="actions">' +
      '<button class="buy-btn" data-name="' + b.name + '">Buy</button>' +
      '<button class="borrow-btn" data-name="' + b.name + '">Borrow</button>' +
  '</div>' +
  '</div></div>';
  }

  grid.innerHTML = html;
}








// جافا الدارك مود 
var darkBtn = document.getElementById("darkModeToggle"); // 
  if (darkBtn != null) 


{
    
    if (localStorage.getItem("dark") == "1") // تخزين الحاله السابقة ل اليوزر
    { 
       document.body.classList.add("dark");
    }

         darkBtn.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";

         darkBtn.onclick = function () 
         {
             document.body.classList.toggle("dark");
             var dark = document.body.classList.contains("dark");
             localStorage.setItem("dark", dark ? "1" : "0");
            darkBtn.innerHTML = dark ? "☀️" : "🌙"; 
    
        };
}

displayBooks(); // نهاغفلا