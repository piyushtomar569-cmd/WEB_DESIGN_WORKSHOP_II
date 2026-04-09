const quotes = ["The universe is not obligated to make sense to you." ,

"Simplicity is earned, not assumed.",

"Curiosity is the antidote to certainty.",

"Knowledge grows where ego shrinks.",

"Most limits are stories we repeat.",
                
"The mind is a tool; sharpen it daily,.",
                
"Truth survives inspection.",

"Small improvements compound into extraordinary change.",

"Confusion is the beginning of understanding.",

"Discipline builds freedom.",

"Patterns hide in plain sight.",

"Thinking clearly is a superpower.",
"Complexity rewards patience.",

"Consistency outperforms intensity.",

"Doubt is not weakness; it is calibration.",
"Every expert was once comfortably wrong.",

"Questions carve paths through ignorance.",

"Effort is the price of mastery.",

"Perspective changes everything.",

"The world is stranger and more interesting than it first appears."];

const button= document.querySelector("button");
const quote = document.querySelector("h1");
button.addEventListener("click", ()=>{
const index = Math.floor(Math.random()*20);
quote.textContent = quotes[index];
});
