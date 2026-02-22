 let InterviewList = [];
 let RejectedList = [];

let total = document.getElementById('Total');
let Interview = document.getElementById('Interview');
let Rejected = document.getElementById('Rejected');

const allJobBtn = document.getElementById('all-job-btn')
const interviewJobBtn = document.getElementById('interview-job-btn')
const rejectedJobBtn = document.getElementById('rejected-job-btn')

const allCardSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main')    
const filteredSection =document.getElementById('filtered-section')
 


function calculateCount (){
    total.innerText = allCardSection.children.length
    Interview.innerText = InterviewList.length
    Rejected.innerText = RejectedList.length
}
calculateCount ()

function toggleStyle(id){

    allJobBtn.classList.add('bg-gray-400','text-black')
    interviewJobBtn.classList.add('bg-gray-400','text-black')
    rejectedJobBtn.classList.add('bg-gray-400','text-black')

    allJobBtn.classList.remove('bg-blue-500','text-white')
    interviewJobBtn.classList.remove('bg-blue-500','text-white')
    rejectedJobBtn.classList.remove('bg-blue-500','text-white')


    console.log(id);

    const selected = document.getElementById(id)
    console.log(selected);
    

    selected.classList.remove('bg-gray-400','text-black')
    selected.classList.add('bg-blue-500','text-white')
}

mainContainer.addEventListener('click', function(event){

    console.log(event.target.classList.contains('interview-btn'));

   if (event.target.classList.contains  ('interview-btn')){
     const parenNode = event.target.parentNode.parentNode;
    const fristCorp = parenNode.querySelector('.fristCorp').innerText   
    const nativeDeveloper = parenNode.querySelector('.nativeDeveloper').innerText   
    const remoteJob = parenNode.querySelector('.remoteJob').innerText   
    const status = parenNode.querySelector('.status').innerText   
    const notes = parenNode.querySelector('.notes').innerText   
   

    const cardInfo ={
        fristCorp ,
        nativeDeveloper,
         remoteJob,
         status,
         notes
    }
    
    const fristCorpExist = InterviewList.find(item =>  item.fristCorp == cardInfo.fristCorp)

    parenNode.querySelector('.status').innerText = 'interview'

    if(!fristCorpExist){
        InterviewList.push(cardInfo)
        renderInterview()
    }
}
})

function renderInterview (){
    filteredSection.innerHTML = ``

    for (let Interview of InterviewList){
        console.log(Interview);


        let div = document.createElement('div');
        div.className ='card flex justify-between border border-white shadow-lg p-8'
        div.innerHTML =` <!-- main part-1 -->
             <div class="space-y-6">
                <!-- part -1 -->
                 <div>
                    <h1 class="fristCorp text-2xl font-semibold">Mobile First Corp</h1>
                <p class="nativeDeveloper text-gray-400">React Native Developer</p>
                 </div>
                 <!-- part -2 -->
                  <div>
                    <p class="remoteJob text-gray-400">Remote• Full-time •$130,000 - $175,000</p>
                  </div>
                  <!-- part -3 -->
                    <p class="status">Not Applied</p>
                    <p class="notes ">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p> 

                    <div class="flex gap-3">
                        <button class="interview-btn shadow-lg border border-green-400 px-4 py-2 text-green-400 font-bold rounded-sm ">interview</button>
                        <button class="rejected-btn shadow-lg border border-red-400 px-4 py-2 text-red-400 font-bold rounded-sm">Rejected</button>
                    </div>
             </div>
             <!-- main part-2 -->
              <div >
               <button class="btn-delete" > <i class="fa-regular fa-trash-can"></i></button>
              </div>
        `
        filteredSection.appendChild(div)

    }
}