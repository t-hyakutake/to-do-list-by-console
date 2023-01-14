'use strict'
let cmd = prompt('new,list,delete,exit のいずれかを入力ください')
while (cmd !== 'exit' && cmd !== null) {
  let todo = ['ライブ','握手会']
 
  
  
  switch (cmd) {
    case 'new':
      let addTodo = prompt('to do リストを追加してください。')
      todo.push(addTodo);
      console.log(`${addTodo}を追加しました`)
      // break;
    case 'list':
        for (let i = 0; i < todo.length; i++) {
          console.log(`${i + '：' + todo[i]}`)
        }
      console.log(todo);
      console.log('**********')
      // break;
    case 'delete':
      let del = prompt('削除index番号を入力してください');
      let delIndex = todo.splice(del,1);
      console.log(todo)

      console.log(`${delIndex}を削除します`)
      console.log('**********')
  }
  cmd = prompt('new,list,delete,exit のいずれかを入力ください')
}
console.log('todolistを終了します');
console.log(todo);