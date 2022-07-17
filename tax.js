//to select buttons with same class name
const buttons = document.querySelectorAll(".amnt")
//to select the input
const Tcost = document.getElementById('Tcost');
//assign an empty string for final answer
let finalans = ''
//for each button to loop through the buttons, the (btn)=> is a call back
buttons.forEach((btn)=>{
// if i add a parameter line (e) to the call back, it brin gs out all properties of each of the buttons when clicked 
// because its an object to ass the properties we use '.' and 'target' to target the Element. 
// we can then asssign the value to it like(e.target.value)
//addEventListener is to listen to the click even if not on html
    btn.addEventListener('click',()=>{
        //to get the value of each button when clicked
        const percentageValue = btn.value
        // the aritimetic calculation to resul the final answer
        const percentage = (percentageValue * Tcost.value )/100
        finalans = percentage
        
    })
})




function solve() {
    document.getElementById('amount').value = finalans

}

