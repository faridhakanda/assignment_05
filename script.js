
// there is 4 level
// bug, help wanted, good first issue, documentation
const createElement = (words) => {
    //console.log(arr);
    const iconMap = {
        "bug": "fa-solid fa-bug mr-1",
        "help wanted": "fa-regular fa-life-ring mr-1",
        "enhancement": "fa-solid fa-hand-sparkles mr-1",
        "documentation": "fa-regular fa-file-code mr-1",
        "good first issue": "fa-brands fa-files-pinwheel mr-1"
    };
    const wordListWithIcons = words.map((word) => {
        let icon = iconMap[word];
        return (
            //console.log("Farid Akanda", icon)
            //console.log(word)
            `
                <button class=" font-medium text-[12px]  py-[2px] text-center items-center w-fit px-2 rounded-xl border-1 border-red-100 bg-red-100 text-red-600">
                <i class="${icon}"></i>
                    ${word}
                </button>
            `

        )
    });
    return wordListWithIcons.join(" ");
    // console.log("Word is printed!");
    // const wordList = words.map(word => 
        
    //     `
    //         <button class="font-medium text-[12px]  py-[2px] text-center items-center w-fit px-2 rounded-xl border-1 border-red-100 bg-red-100 text-red-600">
    //             <i class="fa-regular fa-life-ring mr-2"></i>
    //             ${word}
    //         </button>
    //     `
        
        
    // );
      
    //return wordList.join(" ");
}




// Login function javascript code
// for user authentication with 
// user-name and user-password
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
    const userName = document.getElementById('user-name');
    const userPassword = document.getElementById('user-password');
    const user = userName.value;
    const password = userPassword.value;
    // console.log(user, password);
    if (user == "admin" && password == "admin123") {
        // const loginPart = document.getElementById('login-part');
        // const spinner  = document.getElementById("spinner");
        // const allIssues = document.getElementById('all-issues');
        // loginPart.classList.add('hide');
        // spinner.classList.add('hide');
        // allIssues.classList.remove('hide');
        console.log(user, password);
        console.log("User is authenticated!");
    } else {
        alert("Login is failed!");
    }
});



const removeBtnBg = (id) => {
    const buttons = document.querySelectorAll('.btn-none');
    buttons.forEach((btn) => btn.classList.remove("active"));
    const selectedId = document.getElementById(id);
    selectedId.classList.add('active');
    // buttons.forEach((btn) => {
    //     btn.classList.add('bg-[#FFFFFF]','text-[#64748B]');
    // })
    // const selectedId = document.getElementById(id);
    // selectedId.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    // selectedId.classList.add('bg-[#4A00FF', 'text-[#FFFFFF]');
}
//removeBtnBg();
//removeBtnBg()


// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"


const displayCard = async (cards) => {
    console.log(cards.data);
    const allIssueContainer = document.getElementById('all-issues-card-container');
    allIssueContainer.innerHTML = ""
    const openCount = document.getElementById('open-count');
    const closeCount = document.getElementById('close-count');
    
    // cards.forEach((card) => {
    //     console.log(card.id)
    // })
    // for (const {title, id} of cards) {
    //     console.log(title, id)
    // }
    
    // for bug, help wanted and enhancement button code
    // <button class="font-medium text-[12px]  py-[2px] text-center items-center w-fit px-2 rounded-xl border-1 border-red-100 bg-red-100 text-red-600"><i class="fa-solid fa-bug mr-1"></i>BUG</button>
    // <button class="font-medium text-[12px] py-[2px] text-center items-center w-fit px-2 rounded-xl border-1 border-red-100 bg-orange-100 text-orange-600"><i class="fa-regular fa-life-ring mr-1"></i>HELP WANTED</button>

    let totalOpen = 0;
    let totalClosed = 0;
    cards.forEach((card) => {
        console.log(card.labels);
        const issueCard = document.createElement("div");
        if (card.status == "open") {
            issueCard.innerHTML = `
                <div class="bg-[#FFFFFF] border-t-4 rounded-t-md rounded-md border-1 border-green-500 space-y-2 mb-2 min-h-full">
                        <div class="flex justify-between p-3">
                            <img src="./assets/Open-Status.png" alt="">
                            <p class="bg-red-100 text-red-600 font-medium items-center text-center my-auto text-[12px] w-fit px-4 py-1 rounded-xl">${card.priority.toUpperCase()}</p>
                        </div>
                        <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                        <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                        <div class="px-3 my-4">
                            ${createElement(card.labels)}
                        </div>
                        <hr class="border-1 border-gray-300">
                        <div class="p-3 space-y-1">
                            <p class="">#1 by ${card.author}</p>
                            <p class="">${card.updatedAt}</p>
                        </div>
                    </div>
            
            `;
        } else {
            issueCard.innerHTML = `
                <div class="bg-[#FFFFFF] border-t-4 rounded-t-md rounded-md border-1 border-purple-500 space-y-2 mb-2 min-h-full">
                    <div class="flex justify-between p-3">
                        <img src="./assets/Closed- Status .png" alt="">
                        <p class="bg-gray-100 text-gray-600 font-medium items-center text-center my-auto text-[12px] w-fit px-4 py-1 rounded-xl">${card.priority.toUpperCase()}</p>
                    </div>
                    <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                    <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                    <div class="px-3 my-4">
                        <button class="font-medium text-[12px]  py-[2px] text-center items-center w-fit px-2 rounded-xl border-1 border-green-100 bg-green-200 text-green-600"><i class="fa-solid fa-hand-sparkles mr-1"></i>ENHANCEMENT</button>
                        
                    </div>
                    <hr class="border-1 border-gray-300">
                    <div class="p-3 space-y-1">
                        <p class="">#1 by ${card.author}</p>
                        <p class="">${card.updatedAt}</p>
                    </div>
                </div>
            `;
        }
        
        allIssueContainer.append(issueCard);
        if (card.status == "open") {
            totalOpen += 1;
            console.log("Open is found!");
            //openCount.innerText = card.status.length
        }
        if (card.status == "closed") {
            console.log("Closed is found!");
            totalClosed += 1;
            //closeCount.innerText = card.status.length
        }
        // console.log(
        //     card.id,
        //     card.title,
        //     card.status,
        //     card.labels,
        //     card.priority
        // )
    })
    openCount.innerText = totalOpen;
    closeCount.innerText = totalClosed;
}

const allIssue = async () => {
    
    const allIssueCount = document.getElementById('all-issue-count');
    
    
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url)
    const details = await  res.json()
    .then((details) => {
        allIssueCount.innerText = details.data.length
        // openCount.innerText = details.data.status
        //console.log(details.data.length)
        console.log(details)
        console.log("Array of card is show: ");
        console.log(Array.isArray(details))
        displayCard(details.data)
    })
}




allIssue();




const displayLesson = async (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";
    //console.log(lessons);
    lessons.forEach(lesson => {
        //const lessonCard = document.createElement("div");
        // lessonCard.innerText = `${lesson.lessonName}`
        // levelContainer.append(lessonCard);
        //console.log(lesson.lessonName)
        console.log("data: ", lesson.status);
        // lessonCard.innerHTML = `
        //     <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary space-x-2 space-y-2 lesson-btn"
        //           ><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</
        //         >
        // `
        // levelContainer.append(lessonCard);
    });
    //console.log(lessons);
    //managerSpiner(false);
}


const loadLesson =  () => {
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    // const lessonList = await fetch(url);
    // const lessons = await lessonList.json();
    // console.log(lessons);
    fetch(url)
    .then((res) => res.json())
    //.then((lessons) => displayLesson(lessons.data));
    .then((lessons) => {
        displayLesson(lessons.data);
    })
}

loadLesson();