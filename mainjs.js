'use strict'
let cmd = prompt('new,list,delete,exit のいずれかを入力ください')
let todo = ['ライブ','握手会']

while (cmd !== 'exit' && cmd !== null) {
  cmd = prompt('new,list,delete,exit のいずれかを入力ください')

  if (cmd === 'list') {
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + '：' + todo[i]}`)
    }
  console.log('**********')
  } else if (cmd === 'new') {
    let addTodo = prompt('to do リストを追加してください。')
        todo = todo.push(addTodo);
        console.log(`${addTodo}を追加しました`)
        console.log(todo)
    
  } else if (cmd === 'delete') {
    let del = prompt('削除index番号を入力してください');
       let delIndex = todo.splice(del,1);
         console.log(todo)
  
         console.log(`${delIndex}を削除します`)
         console.log('**********')
  } 
  

}
console.log('todolistを終了します');
console.log(todo);
// 問題 todoをaddしてもどこかでリセットしてしまう。