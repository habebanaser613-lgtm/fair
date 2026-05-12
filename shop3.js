let books = [
    { name: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 79, img: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg", desc: "How the rich think differently about money and wealth." },
    { name: "The 7 Habits of Highly Effective People", author: "Stephen Covey", price: 95, img: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg", desc: "Seven habits to become more productive and effective in life." },
    { name: "Secrets of the Millionaire Mind", author: "T. Harv Eker", price: 82, img: "https://m.media-amazon.com/images/I/71BAdL0OaTL.jpg", desc: "Secrets of wealthy minds and how to program your brain for riches." },
    { name: "Who Moved My Cheese?", author: "Spencer Johnson", price: 48, img: "https://covers.openlibrary.org/b/isbn/9780091816971-L.jpg", desc: "An allegory about adapting to change in work and life." },
    { name: "The Power of Your Subconscious Mind", author: "Joseph Murphy", price: 59, img: "https://m.media-amazon.com/images/I/81gTwYAhU7L.jpg", desc: "Harness the power of the subconscious mind for success and happiness." },
    { name: "How to Win Friends and Influence People", author: "Dale Carnegie", price: 73, img: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg", desc: "Golden principles for dealing with people and gaining their trust." },
    { name: "You Can", author: "George Matthew Adams", price: 42, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAcGtmbc3QPNLk8sobwBrLSRFdZn1xj9pWQ&s", desc: "Motivational messages to build self-confidence and believe in your abilities." },
    { name: "Jump", author: "Steve Harvey", price: 54, img: "https://covers.openlibrary.org/b/isbn/9781501120190-L.jpg", desc: "How to take a leap toward success and overcome fear." },

    { name: "ثلاثية غرناطة", author: "Radwa Ashour", price: 110, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT24TtSg8o81856bARMoYTlEubOU_sEDajiw&s", desc: "A historical novel about the fall of Andalusia and the tragedy of Muslims." },
    { name: "عزازيل", author: "Youssef Ziedan", price: 88, img: "https://m.media-amazon.com/images/I/A1xzpK7VXHL._AC_UF1000,1000_QL80_.jpg", desc: "The struggle between good and evil in ancient Egypt at the dawn of Christianity." },
    { name: "رجال في الشمس", author: "Ghassan Kanafani", price: 45, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuaIPzigdAbYgxb2jrCU4o-U1lTlF01xw5w&s", desc: "The story of three Palestinian refugees trying to cross the desert." },
    { name: "يوتوبيا", author: "Ahmed Khaled Tawfik", price: 62, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUcNkBStQ0owq8-PbSgguUMFbFuqygSX-wSQ&s", desc: "A futuristic tale about class struggle in Egypt." },

    { name: "Anna Karenina", author: "Leo Tolstoy", price: 125, img: "https://covers.openlibrary.org/b/isbn/9780143035008-L.jpg", desc: "The tragedy of love and betrayal in Russian society." },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 68, img: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg", desc: "The American Dream and false wealth in the 1920s." },
    { name: "One Hundred Years of Solitude", author: "Gabriel García Márquez", price: 120, img: "https://covers.openlibrary.org/b/isbn/9780060883287-L.jpg", desc: "The epic of the Buendía family across generations of solitude." },
    { name: "A Passage to India", author: "E. M. Forster", price: 74, img: "https://covers.openlibrary.org/b/isbn/9780156711425-L.jpg", desc: "The relationship between the British and Indians during colonial times." },
    { name: "Invisible Man", author: "Ralph Ellison", price: 86, img: "https://covers.openlibrary.org/b/isbn/9780679732761-L.jpg", desc: "A black man's struggle for identity in America." },
    { name: "Don Quixote", author: "Miguel de Cervantes", price: 105, img: "https://covers.openlibrary.org/b/isbn/9780142437230-L.jpg", desc: "The adventures of the wandering knight Don Quixote." },

    { name: "Clean Code", author: "Robert C. Martin", price: 115, img: "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg", desc: "Principles of writing clean and maintainable code." },
    { name: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", price: 108, img: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg", desc: "Practical tips to become a professional programmer." },
    { name: "Introduction to Algorithms", author: "Cormen et al.", price: 145, img: "https://covers.openlibrary.org/b/isbn/9780262033848-L.jpg", desc: "The most famous reference on algorithms." },
    { name: "Design Patterns", author: "Erich Gamma et al.", price: 132, img: "https://covers.openlibrary.org/b/isbn/9780201633610-L.jpg", desc: "Design patterns for solving recurring software problems." },
    { name: "Code Complete", author: "Steve McConnell", price: 128, img: "https://covers.openlibrary.org/b/isbn/9780735619678-L.jpg", desc: "A comprehensive guide to building high-quality software." },
    { name: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", price: 140, img: "https://covers.openlibrary.org/b/isbn/9780262510875-L.jpg", desc: "Fundamentals of programming using Scheme." },
    { name: "The C Programming Language", author: "Kernighan & Ritchie", price: 98, img: "https://covers.openlibrary.org/b/isbn/9780131103627-L.jpg", desc: "The C language reference from its creators." },

    { name: "Guns, Germs, and Steel", author: "Jared Diamond", price: 102, img: "https://covers.openlibrary.org/b/isbn/9780393317558-L.jpg", desc: "Why human civilizations evolved differently." },
    { name: "The Rise and Fall of the Third Reich", author: "William L. Shirer", price: 135, img: "https://covers.openlibrary.org/b/isbn/9781451651683-L.jpg", desc: "The history of Nazi Germany and Hitler's rise." },
    { name: "1776", author: "David McCullough", price: 89, img: "https://covers.openlibrary.org/b/isbn/9780743226721-L.jpg", desc: "The year of the American Revolution as never seen before." },
    { name: "The Guns of August", author: "Barbara Tuchman", price: 96, img: "https://covers.openlibrary.org/b/isbn/9780345476098-L.jpg", desc: "How World War I broke out." },
    { name: "Team of Rivals", author: "Doris Kearns Goodwin", price: 112, img: "https://covers.openlibrary.org/b/isbn/9780743270755-L.jpg", desc: "The political genius of Abraham Lincoln." },
    { name: "John Adams", author: "David McCullough", price: 99, img: "https://covers.openlibrary.org/b/isbn/9780743223133-L.jpg", desc: "The biography of America's second president." },
    { name: "The Diary of a Young Girl", author: "Anne Frank", price: 58, img: "https://covers.openlibrary.org/b/isbn/9780553296983-L.jpg", desc: "Anne Frank's diary during the Nazi occupation." },

    { name: "The Very Hungry Caterpillar", author: "Eric Carle", price: 35, img: "https://covers.openlibrary.org/b/isbn/9780399226908-L.jpg", desc: "A little caterpillar eats its way toward transformation." },
    { name: "Where the Wild Things Are", author: "Maurice Sendak", price: 42, img: "https://covers.openlibrary.org/b/isbn/9780060254926-L.jpg", desc: "Max's adventures with the wild things." },
    { name: "The Giving Tree", author: "Shel Silverstein", price: 38, img: "https://covers.openlibrary.org/b/isbn/9780060256654-L.jpg", desc: "A tree gives everything to a boy without asking for anything in return." },
    { name: "Green Eggs and Ham", author: "Dr. Seuss", price: 32, img: "https://covers.openlibrary.org/b/isbn/9780394800165-L.jpg", desc: "A funny story about trying new foods." },
    { name: "Goodnight Moon", author: "Margaret Wise Brown", price: 28, img: "https://covers.openlibrary.org/b/isbn/9780064430173-L.jpg", desc: "A bedtime story about a little room." },
    { name: "Charlotte's Web", author: "E. B. White", price: 48, img: "https://covers.openlibrary.org/b/isbn/9780061124952-L.jpg", desc: "The friendship between a pig and a spider on a farm." },
    { name: "The Cat in the Hat", author: "Dr. Seuss", price: 36, img: "https://covers.openlibrary.org/b/isbn/9780394800011-L.jpg", desc: "A cat wearing a hat turns a house upside down." },

];

const catbooks = [
  { name: "The Art of War", author: "Sun Tzu", price: 13, img: "Authors/philosophy/artOfWar.png", desc: "Ancient Chinese military strategy and philosophy." },
    { name: "Discourses", author: "Epictetus", price: 15, img: "Authors/philosophy/discourses.png", desc: "Core teachings of Stoic philosophy." },
    { name: "Bhagavad Gita", author: "Vyasa", price: 11, img: "Authors/philosophy/gita.png", desc: "Sacred Hindu scripture on duty and spirituality." },
    { name: "Last Days of Socrates", author: "Plato", price: 12.6, img: "Authors/philosophy/last.png", desc: "The trial and execution of the great philosopher Socrates." },
    { name: "Letters from a Stoic", author: "Seneca", price: 10, img: "Authors/philosophy/letters.png", desc: "Timeless wisdom on ethics and mental strength." },
    { name: "Man_s Search for Meaning", author: "Viktor Frankl", price: 15.2, img: "Authors/philosophy/meaning.png", desc: "Finding hope and purpose even in the darkest times." },
    { name: "Meditations", author: "Marcus Aurelius", price: 13, img: "Authors/philosophy/meditations.png", desc: "Personal reflections of a Roman Emperor on virtue." },
    { name: "The Republic", author: "Plato", price: 17, img: "Authors/philosophy/plato.png", desc: "Plato's vision of an ideal society and justice." },
    { name: "The Prince", author: "Machiavelli", price: 20.03, img: "Authors/philosophy/prince.png", desc: "Strategic advice on power and political leadership." },
    { name: "Socrates", author: "Ancient Wisdom", price: 20.03, img: "Authors/philosophy/socrates.png", desc: "An exploration into Socratic questioning and life." },
    { name: "Tao Te Ching", author: "Lao Tzu", price: 20.03, img: "Authors/philosophy/tao.png", desc: "The foundational text of Taoist philosophy." },
    { name: "The Story of Philosophy", author: "Will Durant", price: 20.03, img: "Authors/philosophy/theStory.png", desc: "The lives and opinions of the world's greatest philosophers." },


    { name: "The Cruel Prince", author: "Holly Black", price: 15, img: "Authors/Fantasy/cruel.png", desc: "A mortal girl finds herself caught in a web of royal faerie intrigue." },
    { name: "Powerless", author: "Lauren Roberts", price: 11, img: "Authors/Fantasy/Powerless.png", desc: "A gripping fantasy romance in a world of elites." },
    { name: "Fearless", author: "Fantasy Author", price: 12.6, img: "Authors/Fantasy/fearless.png", desc: "The journey of a hero with nothing to lose." },
    { name: "Reckless", author: "Fantasy Author", price: 10, img: "Authors/Fantasy/reckless.png", desc: "A tale of magic and dangerous choices." },
    { name: "The Name of the Wind", author: "Patrick Rothfuss", price: 15.2, img: "Authors/Fantasy/theNmaeOfTheWind.png", desc: "The life story of a legendary figure in a world of magic." },
    { name: "Once Upon a Broken Heart", author: "Stephanie Garber", price: 13, img: "Authors/Fantasy/onceUponAbroken.png", desc: "How far would you go for a happily ever after?" },
    { name: "The Ballad of Never After", author: "Stephanie Garber", price: 17, img: "Authors/Fantasy/theBalledOfNeverAfter.png", desc: "The sequel to the magical story of heartbreak and curses." },
    { name: "Curse of True Love", author: "Stephanie Garber", price: 20.03, img: "Authors/Fantasy/curseOftrueLove.png", desc: "The conclusion to the Evangeline Fox story." },
    { name: "Dune", author: "Frank Herbert", price: 20.03, img: "Authors/Fantasy/dune.png", desc: "A desert planet, spice, and a galactic struggle for power." },
    { name: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", price: 20.03, img: "Authors/Fantasy/HarryPotter.png", desc: "The boy who lived starts his magical journey." },
    { name: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", price: 18.5, img: "Authors/Fantasy/HarryPotter2.png", desc: "Mystery and danger return to Hogwarts." },
    { name: "The Poppy War", author: "R.F. Kuang", price: 17, img: "Authors/Fantasy/poppyWar.png", desc: "A dark military fantasy inspired by history." },


    { name: "Better Than the Movies", author: "Lynn Painter", price: 13, img: "Authors/Romance/betterThanMovies.png", desc: "A rom-com obsessed girl tries to land her own cinematic happy ending." },
    { name: "The Seven Year Slip", author: "Ashley Poston", price: 15, img: "Authors/Romance/theSevenYearSlip.png", desc: "An apartment that allows you to travel seven years back in time." },
    { name: "Book Lovers", author: "Emily Henry", price: 11, img: "Authors/Romance/bookLovers.png", desc: "Two bookish rivals find themselves in the same small town." },
    { name: "First Time Caller", author: "Romance Author", price: 12.6, img: "Authors/Romance/firstTimeCaller.png", desc: "A charming story about unexpected connections." },
    { name: "The Cheat Sheet", author: "Sarah Adams", price: 10, img: "Authors/Romance/TheCheatSheet.png", desc: "Best friends to lovers in a sweet and funny fake-dating story." },
    { name: "The Rom-Commers", author: "Katherine Center", price: 15.2, img: "Authors/Romance/theRomCommers.png", desc: "A screenwriter gets the chance of a lifetime to work with her idol." },
    { name: "The Hating Game", author: "Sally Thorne", price: 13, img: "Authors/Romance/theHatingGame.png", desc: "The ultimate office-rivals to lovers story." },
    { name: "Part of Your World", author: "Abby Jimenez", price: 17, img: "Authors/Romance/PartOfYourWorld.png", desc: "A city doctor and a small-town mayor find common ground." },
    { name: "The Paradise Problem", author: "Christina Lauren", price: 20.03, img: "Authors/Romance/theParadiseProblem.png", desc: "A fake marriage, a family inheritance, and a tropical island." },
    { name: "And Now Back to You", author: "Romance Author", price: 20.03, img: "Authors/Romance/andNowBackToYOU.png", desc: "A second chance at love when you least expect it." },
    { name: "Beg, Borrow and Steal", author: "Romance Author", price: 20.03, img: "Authors/Romance/begBorrow.png", desc: "A story about fighting for the love you deserve." },
    { name: "Funny Story", author: "Emily Henry", price: 20.03, img: "Authors/Romance/funnyStory.png", desc: "Opposites attract in this hilarious and heartfelt novel." },


    { name: "A Good Girl_s Guide to Murder", author: "Holly Jackson", price: 13, img: "Authors/Crime/aGoodGirl'sGuideToMurder.png", desc: "A high school student investigates a local murder case for her senior project." },
    { name: "Good Girl, Bad Blood", author: "Holly Jackson", price: 15, img: "Authors/Crime/goodGirlBadBlood.png", desc: "The sequel where Pip launches a podcast about the case." },
    { name: "As Good as Dead", author: "Holly Jackson", price: 11, img: "Authors/Crime/asGoodAsDead.png", desc: "The dark conclusion to Pip's investigation journey." },
    { name: "A Time to Kill", author: "John Grisham", price: 12.6, img: "Authors/Crime/aTimeToKill.png", desc: "A classic legal thriller about justice and revenge." },
    { name: "The Godfather", author: "Mario Puzo", price: 10, img: "Authors/Crime/godfather.png", desc: "The epic tale of the Corleone crime family." },
    { name: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", price: 15.2, img: "Authors/Crime/theGirlWithDragon.png", desc: "A journalist and a hacker team up to solve a cold case." },
    { name: "And Then There Were None", author: "Agatha Christie", price: 13, img: "Authors/Crime/thereWereNone.png", desc: "Ten strangers are lured to an island where they are killed one by one." },
    { name: "Five Survivors", author: "Holly Jackson", price: 17, img: "Authors/Crime/FiveServivor.png", desc: "Six friends on a road trip, one sniper, and eight hours to survive." },
    { name: "Shutter Island", author: "Dennis Lehane", price: 20.03, img: "Authors/Crime/shutterIsland.png", desc: "U.S. Marshals investigate the disappearance of a patient from a hospital for the criminally insane." },
    { name: "A Story of Yesterday", author: "Crime Author", price: 20.03, img: "Authors/Crime/aStoryOfYesterday.png", desc: "A mysterious look into past crimes that haunt the present." },
    { name: "Gone Girl", author: "Gillian Flynn", price: 20.03, img: "Authors/Crime/gonegirl.png", desc: "A suspenseful thriller about a marriage gone wrong and a sudden disappearance." },
    { name: "The Reappearance of Rachel Price", author: "Holly Jackson", price: 20.03, img: "Authors/Crime/theReappearanceOfRachelPrice.png", desc: "Years after her mother vanished, she suddenly returns during a documentary shoot." },


    { name: "Atomic Habits", author: "James Clear", price: 13, img: "Authors/selfImprovement/atomicHabits.png", desc: "An easy and proven way to build good habits and break bad ones." },
    { name: "Big Magic", author: "Elizabeth Gilbert", price: 15, img: "Authors/selfImprovement/bigMagic.png", desc: "Creative living beyond fear and embracing curiosity." },
    { name: "The Daily Stoic", author: "Ryan Holiday", price: 11, img: "Authors/selfImprovement/dailyStoic.png", desc: "366 meditations on wisdom, perseverance, and the art of living." },
    { name: "Daring Greatly", author: "Brené Brown", price: 12.6, img: "Authors/selfImprovement/daring.png", desc: "How the courage to be vulnerable transforms the way we live." },
    { name: "The Courage to Be Disliked", author: "Ichiro Kishimi", price: 10, img: "Authors/selfImprovement/disliked.png", desc: "The Japanese phenomenon on showing you how to free yourself." },
    { name: "The Four Agreements", author: "Don Miguel Ruiz", price: 15.2, img: "Authors/selfImprovement/fourAgg.png", desc: "A practical guide to personal freedom based on ancient Toltec wisdom." },
    { name: "The Midnight Library", author: "Matt Haig", price: 13, img: "Authors/selfImprovement/midnight.png", desc: "A novel about all the choices that go into a life well lived." },
    { name: "Quiet", author: "Susan Cain", price: 17, img: "Authors/selfImprovement/quiet.png", desc: "The power of introverts in a world that can't stop talking." },
    { name: "The Alchemist", author: "Paulo Coelho", price: 20.03, img: "Authors/selfImprovement/theAlch.png", desc: "A fable about following your dream and listening to your heart." },
    { name: "The Magic of Thinking Big", author: "David J. Schwartz", price: 20.03, img: "Authors/selfImprovement/thinkingBig.png", desc: "Set your goals high and then exceed them." },
    { name: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 20.03, img: "Authors/selfImprovement/thinkingFast.png", desc: "A tour of the mind and the two systems that drive our thoughts." },
    { name: "How to Stop Worrying and Start Living", author: "Dale Carnegie", price: 20.03, img: "Authors/selfImprovement/worrying.png", desc: "Time-tested methods to conquer worry and anxiety." },


    { name: "Ancient World", author: "Susan Wise Bauer", price: 13, img: "Authors/History/ancient.png" },
    { name: "Foundations of Chinese Civilization", author: "Jing Liu", price: 15, img: "Authors/History/chinese.png" },
    { name: "The Communist Manifesto", author: "Karl Marx", price: 11, img: "Authors/History/comm.png" },
    { name: "Orientalism", author: "Edward W. Said", price: 12.6, img: "Authors/History/east.png" },
    { name: "When Women Ruled the World", author: "Kara Cooney", price: 10, img: "Authors/History/egypt.png" },
    { name: "Guns, Germs, and Steel", author: "Jared Diamond", price: 15.2, img: "Authors/History/guns.png" },
    { name: "The Argumentative Indian", author: "Amartya Sen", price: 13, img: "Authors/History/india.png" },
    { name: "Destiny Disrupted", author: "Tamim Ansary", price: 17, img: "Authors/History/islamicWay.png" },
    { name: "The History of the Decline and Fall of the Roman Empire", author: "Edward Gibbon", price: 20.03, img: "Authors/History/roman.png" },
    { name: "Salt: A World History", author: "Mark Kurlansky", price: 20.03, img: "Authors/History/salt.png" },
    { name: "What is History?", author: "Edward Hallett Carr", price: 20.03, img: "Authors/History/What.png" },
    { name: "A Short History of Nearly Everything", author: "Bill Bryson", price: 20.03, img: "Authors/History/world.png" },


    { name: "Artificial Intelligence: A Modern Approach", author: "Stuart Russell", price: 13, img: "Authors/programming/AI.png" },
    { name: "Introduction to Algorithms", author: "Cormen et al.", price: 15, img: "Authors/programming/algorithms.png" },
    { name: "The C Programming Language", author: "Kernighan & Ritchie", price: 11, img: "Authors/programming/C.png" },
    { name: "Clean Code", author: "Robert C. Martin", price: 12.6, img: "Authors/programming/cleanCode.png" },
    { name: "C# in Depth", author: "Jon Skeet", price: 10, img: "Authors/programming/cSharp.png" },
    { name: "Domain-Driven Design", author: "Eric Evans", price: 15.2, img: "Authors/programming/domain.png" },
    { name: "Effective Java", author: "Joshua Bloch", price: 13, img: "Authors/programming/java.png" },
    { name: "The Mythical Man-Month", author: "Frederick Brooks", price: 17, img: "Authors/programming/manMonth.png" },
    { name: "Python Crash Course", author: "Eric Matthes", price: 20.03, img: "Authors/programming/python.png" },
    { name: "Refactoring", author: "Martin Fowler", price: 20.03, img: "Authors/programming/re.png" },
    { name: "Structure and Interpretation of Computer Programs", author: "Abelson & Sussman", price: 20.03, img: "Authors/programming/structure.png" },
    { name: "Compilers: Principles, Techniques, and Tools", author: "Aho & Ullman", price: 20.03, img: "Authors/programming/compil.png" }
]

// ارراي المشتريات و اراي الاستعارة
let pur = [];  
let bor = [];


// فونكشن عرض الكتب من ارراي الاول
//var displayBooks() {
function d_Books() {
    let grid = document.getElementById("booksGrid");
    if (grid == null) return;
    let html = "";
    for (let i = 0; i < books.length; i++) {
        let b = books[i];
        let safe = b.name.replace(/'/g, "\\'");  
        html += '<div class="project-card">' +
            '<div class="project-image"><img src="' + b.img + '" alt="' + b.name + '"></div>' +
            '<div class="project-info">' +
            '<p>Author: ' + b.author + '</p>' +
            '<strong>' + b.name + '</strong>' +
            '<div class="price">$' + b.price + '</div>' +
            '<p class="book-description">📖 ' + b.desc + '</p>' +
            '<div class="actions">' +
            '<button class="buy-btn" onclick="add_To_Pur(\'' + safe + '\')">Buy</button>' +
            '<button class="borrow-btn" onclick="add_To_Bor(\'' + safe + '\')">Borrow</button>' +
            '</div></div></div>';
    }
    grid.innerHTML = html;
}




if (localStorage.getItem('purchased')) pur = JSON.parse(localStorage.getItem('purchased'));

if (localStorage.getItem('borrowed')) bor = JSON.parse(localStorage.getItem('borrowed'));

// فونكشن عرض الكتاب اللي تم شراىه
function add_To_Pur(bookName) {
  let allbooks = [...books, ...catbooks]
    let book = allbooks.find(b => b.name === bookName);
    pur.push({ name: book.name, img: book.img, author: book.author });
    localStorage.setItem('purchased', JSON.stringify(pur));
    // alert("Added to Cart!");
    d_Pur_List();
}


// فونكشن عرض الكتاب اللي تم استعارتها
function add_To_Bor(bookName) {
  let allbooks = [...books, ...catbooks]
    let book = allbooks.find(b => b.name === bookName);
    bor.push({ name: book.name, img: book.img, author: book.author });
    localStorage.setItem('borrowed', JSON.stringify(bor));
    d_Bor_List();
}


//  فونكشن تنسيق ال اتش تي ام ال للكتب المشتراه
function d_Pur_List() {
let container = document.getElementById('purchasedList');
    if (!container) return;
    if (pur.length === 0) {
        container.innerHTML = '<p style="color:gray; text-align:center;">there are no buoght books until now</p>';
        return;
}
let html = '<div style="display:flex; flex-wrap:wrap; gap:15px; justify-content:center;">';
    for (let i = 0; i < pur.length; i++) {
let b = pur[i];
        html += `<div style="border:1px solid var(--border-light); border-radius:12px; padding:10px; width:200px; background:var(--card-bg); text-align:center;">
         <img src="${b.img}" style="width:60px; height:80px; object-fit:cover; border-radius:8px;">
        <div><strong>${b.name}</strong></div>
        <div style="font-size:0.8rem;">Author: ${b.author}</div>
         <button onclick="re_Pur(${i})" style="margin-top:8px; padding:4px 12px; background:#d9534f; color:white; border:none; border-radius:20px; cursor:pointer;">🗑️ Remove</button>
        </div>`;
}
    html += '</div>';
    container.innerHTML = html;
}


// فونكشن تنسيق ال اتش تي ام ال للكتب المستعارة

function d_Bor_List() {
    let container = document.getElementById('borrowedList');
    if (!container) return;
    if (bor.length === 0) {
        container.innerHTML = '<p style="color:gray; text-align:center;">there are no borrowed books until now</p>';
return;
}
let html = '<div style="display:flex; flex-wrap:wrap; gap:15px; justify-content:center;">';
    for (let i = 0; i < bor.length; i++) {
let b = bor[i];
  html += `<div style="border:1px solid var(--border-light); border-radius:12px; padding:10px; width:200px; background:var(--card-bg); text-align:center;">
  <img src="${b.img}" style="width:60px; height:80px; object-fit:cover; border-radius:8px;">
  <div><strong>${b.name}</strong></div>
  <div style="font-size:0.8rem;">Author: ${b.author}</div>
  <button onclick="re_Bor(${i})" style="margin-top:8px; padding:4px 12px; background:#f0ad4e; color:black; border:none; border-radius:20px; cursor:pointer;">🔁 Return</button>
    </div>`;
}
html += '</div>';
container.innerHTML = html;
}

//  فونكشن الحدف
function re_Pur(index) {
pur.splice(index, 1);
localStorage.setItem('purchased', JSON.stringify(pur));
 d_Pur_List();
}

function re_Bor(index) {
    bor.splice(index, 1);
    localStorage.setItem('borrowed', JSON.stringify(bor));
    d_Bor_List();
}

d_Books();

window.onload = function() {
    d_Pur_List();
    d_Bor_List();
}