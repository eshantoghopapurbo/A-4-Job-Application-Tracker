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
console.log(mainContainer);
 


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