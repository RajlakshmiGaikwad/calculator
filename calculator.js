var expr=document.querySelector('#expression')
var action=document.querySelectorAll('.calculator .buttons .action button')
action.forEach((button)=>{
button.addEventListener('click',function(){
    let previousvalue=expr.value
    previousvalue=previousvalue+button.value
    expr.value=previousvalue
})

})
var numbers=document.querySelectorAll('.calculator .buttons .number .btn1')
numbers.forEach((button)=>
{
    button.addEventListener('click',function(){
        let previousvalue=expr.value
        previousvalue=previousvalue+button.value
        expr.value=previousvalue
    })
})
function calculate(){
    let expression=expr.value
    let result=eval(expression)
    expr.value=result.toString()
}
function clearText(){
    expr.value=''
}


