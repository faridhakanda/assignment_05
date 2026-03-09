
// there is 4 level
// bug, help wanted, good first issue, documentation
const createPriorityLabel = (word) => {
    // 1. Define the designs
    const priorityTextDesign = {
        "low": "border-gray-100 bg-gray-100 text-gray-600",
        "medium": "border-orange-100 bg-orange-100 text-orange-600",
        "high": "border-red-100 bg-red-100 text-red-600"
    };
    
    
    const priorityStyle = priorityTextDesign[word]; 
    
    return `
        <p class="${priorityStyle} font-medium items-center text-center my-auto text-[12px] w-fit px-4 py-1 rounded-xl">
            ${word.toUpperCase()}
        </p>
    `;
}


const createLabel = (words) => {
    //console.log(arr);
    const iconMap = {
        "bug": "fa-solid fa-bug mr-1",
        "help wanted": "fa-regular fa-life-ring mr-1",
        "enhancement": "fa-solid fa-hand-sparkles mr-1",
        "documentation": "fa-regular fa-file-code mr-1",
        "good first issue": "fa-brands fa-files-pinwheel mr-1"
    };
    const btnDesign = {
        "bug": "border-red-100 bg-red-100 text-red-600",
        "help wanted": "border-red-100 bg-orange-100 text-orange-600",
        "enhancement": "border-greed-100 bg-green-100 text-green-600",
        "documentation": "border-green-100 bg-green-100 text-green-600",
        "good first issue": "border-orange-100 bg-yellow-100 text-orange-600"
    };
    const wordListWithIcons = words.map((word) => {
        let icon = iconMap[word];
        let btn = btnDesign[word];
        return (
            //console.log("Farid Akanda", icon)
            //console.log(word)
            `
                <button class="space-y-2 font-medium text-[10px]  py-[2px] text-center items-center w-fit px-2 rounded-xl border-1 ${btn}">
                <i class="${icon}"></i>
                    ${word.toUpperCase()}
                </button>
            `
        
        )
    });
    return wordListWithIcons.join(" ");
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
// "createdAt": "2024-01-15T10:30:00Z"

const managerSpiner = (spinnerValue) => {
    const spinner = document.getElementById('spinner');
    const allCard = document.getElementById('all-card');
    if (spinnerValue == true) {
        spinner.classList.remove('hide');
        allCard.classList.add('hide');
    } else {
        spinner.classList.add('hide');
        allCard.classList.remove('hide');
    }
}
const removeActive = () => {
    const lessonBtn = document.querySelectorAll(".btn-main");
    lessonBtn.forEach((btn) => btn.classList.remove("active"));
    //console.log(lessonBtn);
}


const modalCard = (card) => {
    //const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    const modalCard = document.getElementById('modal-card');
   // modalCard.innerHTML = "";

    //cards.map((card) => {
        //const cardModal = document.createElement("div");
        modalCard.innerHTML = `
            <div class="space-y-2">
                <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                <span class="flex items-center space-x-2 text-[#64748B]">
                    <p class=" bg-green-600 text-[#FFFFFF] font-medium w-fit px-2 py-1 rounded-full text-[12px]">${card.status == 'open' ? "Opened" : "Closed"}</p>
                    <p>Opened by ${card.author}</p>
                    <p>${card.createdAt}</p>
                </span>
                <div>
                    ${createLabel(card.labels)}
                </div>
                <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                <div class="bg-gray-100 flex gap-12 rounded-md p-3">
                    <span>
                        <p class="text-[#64748B] text-[14px]">Assignee:</p>
                        <p class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.author}</p>
                    </span>
                    <span>
                        <p class="text-[#64748B] text-[14px]">Priority: </p>
                        ${createPriorityLabel(card.priority)}
                    </span>
                </div>
            </div>
        `;
        document.getElementById('my_modal_5').showModal();
        //modalCard.append(cardModal);
    
    

}
const loadModal = (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        modalCard(data.data)
    })
}


// display all issue card 
const displayAllIssueCard = async (cards) => {
    console.log(cards.data);
    const allIssueContainer = document.getElementById('all-issues-card-container');
    allIssueContainer.innerHTML = ""
    // const openCount = document.getElementById('open-count');
    // const closeCount = document.getElementById('close-count');
    
    // let totalOpen = 0;
    // let totalClosed = 0;
    cards.forEach((card) => {
        console.log(card.labels);
        //createPriority(card.priority);
        const issueCard = document.createElement("div");
        if (card.status == "open") {
            issueCard.innerHTML = `
                <div onclick="loadModal(${card.id})" class="bg-[#FFFFFF] border-t-4 rounded-t-md rounded-md border-1 border-green-500 space-y-2 mb-2 min-h-full">
                        <div class="flex justify-between p-3">
                            <img src="./assets/Open-Status.png" alt="">
                            ${createPriorityLabel(card.priority)}
                        </div>
                        <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                        <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                        <div class="flex space-x-1 px-3 my-4">
                            ${createLabel(card.labels)}
                            
                        </div>
                        <hr class="border-1 border-gray-300">
                        <div class="p-3 space-y-1">
                            <p class="text-[#64748B]">#1 by ${card.author}</p>
                            <p class="text-[#64748B]">${card.createdAt}</p>
                        </div>
                    </div>
            
            `;
        } else {
            issueCard.innerHTML = `
                <div onclick="loadModal(${card.id})" class="i bg-[#FFFFFF] border-t-4 rounded-t-md rounded-md border-1 border-purple-500 space-y-2 mb-2 min-h-full">
                    <div class="flex justify-between p-3">
                        <img src="./assets/Closed- Status .png" alt="">
                        ${createPriorityLabel(card.priority)}
                    </div>
                    <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                    <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                    <div class="flex space-x-1 px-3 my-4">
                        ${createLabel(card.labels)}
                        
                    </div>
                    <hr class="border-1 border-gray-300">
                    <div class="p-3 space-y-1">
                        <p class="text-[#64748B]">#1 by ${card.author}</p>
                        <p class="text-[#64748B]">${card.createdAt}</p>
                    </div>
                </div>
            `;
        }
        
        allIssueContainer.append(issueCard);
        // if (card.status == "open") {
        //     totalOpen += 1;
        //     console.log("Open is found!");
        //     //openCount.innerText = card.status.length
        // }
        // if (card.status == "closed") {
        //     console.log("Closed is found!");
        //     totalClosed += 1;
        //     //closeCount.innerText = card.status.length
        // }
        // console.log(
        //     card.id,
        //     card.title,
        //     card.status,
        //     card.labels,
        //     card.priority
        // )
    })
    // openCount.innerText = totalOpen;
    // closeCount.innerText = totalClosed;
}

// display all open issue card
const displayAllOpenCard = async (cards) => {
    console.log(cards.data);
    const allOpenCardContainer = document.getElementById('all-open-card-container');
    allOpenCardContainer.innerHTML = ""
    const openCount = document.getElementById('all-open-count');
    //const closeCount = document.getElementById('close-count');
    
    let totalOpen = 0;
    let totalClosed = 0;
    cards.forEach((card) => {
        console.log(card.labels);
        //createPriority(card.priority);
        if (card.status == 'closed') {
            return;
        }
        const issueCard = document.createElement("div");
            if (card.status == "open") {
                issueCard.innerHTML = `
                    <div onclick="loadModal(${card.id})" class="bg-[#FFFFFF] border-t-4 rounded-t-md rounded-md border-1 border-green-500 space-y-2 mb-2 min-h-full">
                            <div class="flex justify-between p-3">
                                <img src="./assets/Open-Status.png" alt="">
                                ${createPriorityLabel(card.priority)}
                            </div>
                            <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                            <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                            <div class="flex space-x-1 px-3 my-4">
                                ${createLabel(card.labels)}
                            </div>
                            <hr class="border-1 border-gray-300">
                            <div class="p-3 space-y-1">
                                <p class="text-[#64748B]">#1 by ${card.author}</p>
                                <p class="text-[#64748B]">${card.createdAt}</p>
                            </div>
                        </div>
                
                `;
            }
            allOpenCardContainer.append(issueCard);
            if (card.status == 'open') {
                totalOpen += 1;
            }
        }
        
        //allOpenCardContainer.append(issueCard)
        // if(card.status == 'open') {
        //     totalOpen += 1;
        // }
    )
    openCount.innerText = totalOpen;
}




// display all closed issue card
const displayAllClosedCard = async (cards) => {
    console.log(cards.data);
    const allClosedCardContainer = document.getElementById('all-closed-card-container');
    allClosedCardContainer.innerHTML = ""
    //const openCount = document.getElementById('open-count');
    const closeCount = document.getElementById('all-closed-count');
    
    //let totalOpen = 0;
    let totalClosed = 0;
    cards.forEach((card) => {
        console.log(card.labels);
        //createPriority(card.priority);
        if (card.status == 'open') return;
        const issueCard = document.createElement("div");
        if (card.status == 'closed') {
            issueCard.innerHTML = `
                <div onclick="loadModal(${card.id})" class="bg-[#FFFFFF] border-t-4 rounded-t-md rounded-md border-1 border-purple-500 space-y-2 mb-2 min-h-full">
                    <div class="flex justify-between p-3">
                        <img src="./assets/Closed- Status .png" alt="">
                        ${createPriorityLabel(card.priority)}
                    </div>
                    <h2 class="px-3 font-semibold text-[14px] text-[#1F2937]">${card.title}</h2>
                    <p class="px-3 text-[#64748B] text-[12px]">${card.description}</p>
                    <div class="flex space-x-1 px-3 my-4">
                        ${createLabel(card.labels)}
                        
                    </div>
                    <hr class="border-1 border-gray-300">
                    <div class="p-3 space-y-1">
                        <p class="text-[#64748B]">#1 by ${card.author}</p>
                        <p class="text-[#64748B]">${card.createdAt}</p>
                    </div>
                </div>
            `;
        } 
        
        allClosedCardContainer.append(issueCard);
        // if (card.status == "open") {
        //     totalOpen += 1;
        //     console.log("Open is found!");
        //     //openCount.innerText = card.status.length
        // }
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
    //openCount.innerText = totalOpen;
    closeCount.innerText = totalClosed;
}
const allOpenCard = async () => {
    managerSpiner(true);
    const allOpenCount = document.getElementById('all-open-count');
    
    
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url)
    const details = await  res.json()
    .then((details) => {
        allOpenCount.innerText = details.data.length
        // openCount.innerText = details.data.status
        //console.log(details.data.length)
        console.log(details)
        console.log("Array of card is show: ");
        const clickBtn = document.getElementById('open-btn');
        removeActive();
        clickBtn.classList.add('active');
        const allIssue = document.getElementById('all-issue-container');
        const allOpenContainer = document.getElementById('all-open-container');
        const allCloseContainer = document.getElementById('all-close-container');
        allIssue.classList.add('hide');
        allOpenContainer.classList.remove('hide');
        allCloseContainer.classList.add('hide');
        
        //console.log(Array.isArray(details))
        displayAllOpenCard(details.data)
    })
    managerSpiner(false);
}

const allClosedCard = async () => {
    managerSpiner(true)
    //const allIssueCount = document.getElementById('all-close-count');
    
    
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    const res = await fetch(url)
    const details = await  res.json()
    .then((details) => {
        //allIssueCount.innerText = details.data.length
        // openCount.innerText = details.data.status
        //console.log(details.data.length)
        console.log(details)
        console.log("Array of card is show: ");
        const clickBtn = document.getElementById('close-btn');
        removeActive();
        clickBtn.classList.add('active');
        const allIssue = document.getElementById('all-issue-container');
        const allOpenContainer = document.getElementById('all-open-container');
        const allCloseContainer = document.getElementById('all-close-container');
        allIssue.classList.add('hide');
        allOpenContainer.classList.add('hide');
        allCloseContainer.classList.remove('hide');

        //console.log(Array.isArray(details))
        displayAllClosedCard(details.data)
    })
    managerSpiner(false);
}

const allIssueCard = async () => {
    managerSpiner(true);
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
        const clickBtn = document.getElementById('all-btn');
        removeActive();
        clickBtn.classList.add('active');
        const allIssue = document.getElementById('all-issue-container');
        const allOpenContainer = document.getElementById('all-open-container');
        const allCloseContainer = document.getElementById('all-close-container');
        allIssue.classList.remove('hide');
        allOpenContainer.classList.add('hide');
        allCloseContainer.classList.add('hide');
        
        //console.log(Array.isArray(details))
        displayAllIssueCard(details.data)
    })
    managerSpiner(false);
}




allIssueCard();
// allOpenCard();
// allClosedCard();




// const displayLesson = async (lessons) => {
//     const levelContainer = document.getElementById("level-container");
//     levelContainer.innerHTML = "";
//     //console.log(lessons);
//     lessons.forEach(lesson => {
//         //const lessonCard = document.createElement("div");
//         // lessonCard.innerText = `${lesson.lessonName}`
//         // levelContainer.append(lessonCard);
//         //console.log(lesson.lessonName)
//         console.log("data: ", lesson.status);
//         // lessonCard.innerHTML = `
//         //     <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary space-x-2 space-y-2 lesson-btn"
//         //           ><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</
//         //         >
//         // `
//         // levelContainer.append(lessonCard);
//     });
//     //console.log(lessons);
//     //managerSpiner(false);
// }


// const loadLesson =  () => {
//     const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
//     // const lessonList = await fetch(url);
//     // const lessons = await lessonList.json();
//     // console.log(lessons);
//     fetch(url)
//     .then((res) => res.json())
//     //.then((lessons) => displayLesson(lessons.data));
//     .then((lessons) => {
//         displayLesson(lessons.data);
//     })
// }

// loadLesson();