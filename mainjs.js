'use strict'
let cmd = prompt('new,list,delete,exit のいずれかを入力ください')
while (cmd !== 'exit' && cmd !== null){
  
  
  
  switch (cmd) {
    case 'new':
      console.log('new')
      console.log('**********')
      break;
    case 'list':
        console.log('list')
        console.log('**********')
      break;
    case 'delete':
          console.log('delete')
          console.log('**********')
  }      
        cmd = prompt('new,list,delete,exit のいずれかを入力ください')
}
        console.log('todolistを終了します')