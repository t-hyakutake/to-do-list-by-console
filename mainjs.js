'use strict'
let cmd = prompt('new,list,delete,exit のいずれかを入力ください')
const todo = []

while (cmd !== 'exit' && cmd !== null) {
  
  if (cmd === 'list') {
    console.log('**********')
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1} ： ${todo[i]}`)
    }
    console.log('**********')
  } else if (cmd === 'new') {
    let addTodo = prompt('to do リストを追加してください。')
    while (addTodo.length === 0 ){
      console.log(addTodo)
      console.log(typeofnew addTodo)
       addTodo = prompt('to do リストを追加してください。')
    }
    if (addTodo !== null) {
      todo.push(addTodo);
      //誤 todo = todo.push(addTodo);と書いてtodoがnumberになっていた
      console.log(`${addTodo}を追加しました`)
      // console.log(todo)
      // console.log(typeof todo)
      // console.log(todo.length)
      // for (let i = 0; i < todo.length; i++) {
      //     console.log(`${i} ： ${todo[i]}`)
        
      // }
    }
    
   
  } else if (cmd === 'delete') {
    let del = prompt('削除index番号を入力してください');
       let delIndex = todo.splice(del - 1,1);
         console.log(`${delIndex}を削除します`)
  } 
  cmd = prompt('new,list,delete,exit のいずれかを入力ください')


}
console.log('todolistを終了します');

