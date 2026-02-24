// header part

//header initialize
let totalCount = document.getElementById('totalCount')
let totalCountLower = document.getElementById('totalCountLower')
let interviewCount = document.getElementById('interviewCount')
let rejectCount = document.getElementById('rejectCount')
let jobCards = document.getElementById('job-cards')
let interviewList = [];
let rejectList = [];
//header function
function calculateTotalCount(){
    totalCount.innerText = jobCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectList.length; 
}
calculateTotalCount()

//nav part

//nav initialize

let allNav = document.getElementById('all-nav')
let interviewNav = document.getElementById('interview-nav')
let rejectNav = document.getElementById('reject-nav')

let filter = document.getElementById('filter');
let interviewBtn = document.querySelectorAll('.interviewBtn');
let rejectBtn = document.querySelectorAll('.rejectBtn');
//nav selection function

//toggoling part 

function toggle(id)
{
    allNav.classList.remove('bg-blue-400','text-[#fffd]')
    interviewNav.classList.remove('bg-blue-400','text-[#fffd]')
    rejectNav.classList.remove('bg-blue-400','text-[#fffd]')

    allNav.classList.add('btn')
    interviewNav.classList.add('btn')
    rejectNav.classList.add('btn')

    const selected = document.getElementById(id)
    console.log(selected)
    selected.classList.add('bg-blue-400','text-[#fffd]')
    //--------condition part-------

    //condition if i click interview button
    if(id == 'interview-nav')
    {
        jobCards.classList.add('hidden')
        filter.classList.remove('hidden')
        renderinterview()
        totalCountLower.innerText = interviewList.length 
    }
    
    //condition if i click reject button
    else if(id == 'reject-nav')
    {
        jobCards.classList.add('hidden')
        filter.classList.remove('hidden')
        renderreject()
        totalCountLower.innerText = rejectList.length
    }
    
  
    else
    {
        filter.classList.add('hidden')
        jobCards.classList.remove('hidden')
        totalCountLower.innerText = jobCards.children.length
    }
    
}
 
//-----------------main-------------------

let main = document.getElementById('main')

//cards part

main.addEventListener('click',function(event)
{

//for interview filter
    if(event.target.classList.contains('interviewBtn'))
    {
        let parentNode = event.target.parentNode.parentNode;

        let title = parentNode.querySelector('.title').innerText
        let prof = parentNode.querySelector('.prof').innerText
        let salary = parentNode.querySelector('.salary').innerText
        let apply = parentNode.querySelector('.apply').innerText
        let detail = parentNode.querySelector('.detail').innerText

        const cardInfo = {
            title,
            prof,
            salary,
            apply,
            detail
        }
        const interviewExist = interviewList.find(item => item.title === title)

        parentNode.querySelector('.apply').innerText = 'interview'

        if(!interviewExist){
            interviewList.push(cardInfo)
        }
           rejectList = rejectList.filter(item => item.title !== title)
        calculateTotalCount()
        renderinterview()
        if(interviewNav.classList.contains('bg-blue-400'))
        {
        totalCountLower.innerText = interviewList.length
        }
    }
//for reject nav filter
    else if(event.target.classList.contains('rejectBtn'))
    {
        let parentNode = event.target.parentNode.parentNode;

        let title = parentNode.querySelector('.title').innerText
        let prof = parentNode.querySelector('.prof').innerText
        let salary = parentNode.querySelector('.salary').innerText
        let apply = parentNode.querySelector('.apply').innerText
        let detail = parentNode.querySelector('.detail').innerText

        const cardInfo = {
            title,
            prof,
            salary,
            apply,
            detail
        }
        const rejectExist = rejectList.find(item => item.title === title)

        parentNode.querySelector('.apply').innerText = 'Rejected'

        if(!rejectExist){
            rejectList.push(cardInfo)
        }
           interviewList = interviewList.filter(item => item.title !== title)
        calculateTotalCount()
        renderreject()
        if(rejectNav.classList.contains('bg-blue-400'))
        {
        totalCountLower.innerText = rejectList.length
        }
    }
//for delete
    else if(event.target.classList.contains('delete'))
    {
        let parentOfDelete = event.target.parentNode.parentNode;
        let title = parentOfDelete.querySelector('.title').innerText;

       interviewList = interviewList.filter(item => item.title !== title)
       rejectList = rejectList.filter(item => item.title !== title)

       parentOfDelete.remove()

    calculateTotalCount()



    if(interviewNav.classList.contains('bg-blue-400'))
    {
    totalCountLower.innerText = interviewList.length
    }
    else if(rejectNav.classList.contains('bg-blue-400'))
    {
    totalCountLower.innerText = rejectList.length
    }
    else
    {
    totalCountLower.innerText = jobCards.children.length
    }
    }
})
//--------------------------------------------------
// rendering interview part 


function renderinterview()
{
       filter.innerHTML = ''

        if (interviewList.length === 0) {
         filter.innerHTML = `
             <div class="text-center justify-center items-center h-[400px] bg-white">
                 <img class="my-2 max-w-[100px] mx-auto" src="jobs.png" alt="">
                 <h3>No jobs available</h3>
                 <p>Check back soon for new job opportunities</p>
             </div>
        `
         return
     }

       for(let interview of interviewList)
       {
        let div = document.createElement('div');
        div.className = 'mx-auto w-full p-8 space-y-4 flex justify-between bg-white'
        div.innerHTML = `
                 <div class="card_left">
               <h3 class="title">${interview.title}</h3>
               <p class="prof">${interview.prof}</p><br>
               <p class="salary">${interview.salary}</p><br>
               <button class="btn apply">INTERVIEW</button>
               <p class="detail">${interview.detail}</p>
               <div>
                     <button class="interviewBtn btn btn-outline btn-accent">INTERVIEW</button>
                     <button class="rejectBtn btn btn-outline btn-secondary">REJECTED</button>
               </div>
             </div>

             <div class="card-right">
                 <i class="delete fa-solid fa-trash-can cursor-pointer btn bg-transparent border-none"></i>
             </div>
            `
            filter.appendChild(div);
        
       }

    }
//--------------------------------------------------------
// rendering reject part 

function renderreject()
{
       filter.innerHTML = ''

        if (rejectList.length === 0) {
         filter.innerHTML = `
             <div class="text-center  justify-center items-center h-[400px] bg-white">
                 <img class="my-2 max-w-[100px] mx-auto" src="jobs.png" alt="">
                 <h3>No jobs available</h3>
                 <p>Check back soon for new job opportunities</p>
             </div>
        `
         return
     }

       for(let reject of rejectList)
       {
        let div = document.createElement('div');
        div.className = 'mx-auto w-full p-8 space-y-4 flex justify-between bg-white'
        div.innerHTML = `
                 <div class="card_left">
               <h3 class="title">${reject.title}</h3>
               <p class="prof">${reject.prof}</p><br>
               <p class="salary">${reject.salary}</p><br>
               <button class="btn apply">REJECTED</button>
               <p class="detail">${reject.detail}</p>
               <div>
                     <button class="interviewBtn btn btn-outline btn-accent">INTERVIEW</button>
                     <button class="rejectBtn btn btn-outline btn-secondary">REJECTED</button>
               </div>
             </div>

             <div class="card-right">
                 <i class="delete fa-solid fa-trash-can cursor-pointer btn bg-transparent border-none"></i>
             </div>
            `
            filter.appendChild(div);
        
       }

    }

//------------------------------------------------





