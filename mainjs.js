'use strict'
let cmd = prompt('new,list,delete,exit のいずれかを入力ください')
const todo = ["リハ","ライブ","トーク",'握手会']

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
      console.log(typeof addTodo)
       addTodo = prompt('to do リストを追加してください。')
    }
    if (addTodo !== null) {
      todo.push(addTodo);
      //誤 todo = todo.push(addTodo);と書いてtodoがnumberになっていた
      console.log(`${addTodo}を追加しました`)
      // console.log(todo)
      // console.log(typeof todo)
      // console.log(todo.length)
    }
    
   
  } else if (cmd === 'delete') {
    let del = prompt('削除index番号を入力してください');
    if (del < todo.length + 1) {
      let delIndex = todo.splice(del - 1,1);
        console.log(`${delIndex}を削除します`);
    //    console.log(delIndex)
    //  console.log(typeof delIndex)
    //  console.log(delIndex.length)
    } 
  } 
  cmd = prompt('new,list,delete,exit のいずれかを入力ください')


}
console.log('todolistを終了します');

