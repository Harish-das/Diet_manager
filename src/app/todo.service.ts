import {Injectable} from '@angular/core'
@Injectable({providedIn:'root'})

export class TodoService{
    index:number;
    TodoList=[
        {id:14.6 ,date :'21/10/20',title:'160cm',des:'60 KG'},
        {id:22.5 ,date :'22/10/20',title:'180 cm',des:'78 KG'},
        {id:13.4 ,date :'23/10/20',title:'170 cm',des:'88 KG'},
    ]
    manager=[
      {ne:'walking',dat:'10/12/2020',detail:'Just 30 minutes every day can increase cardiovascular fitness'}
    ]
    addingitem(id,date,title,des){
        this.TodoList.push({id,date,title,des});
      }
      deletingitem(d){
         this.index =this.TodoList.indexOf(d);
        if (this.index > -1) {
          this.TodoList.splice(this.index, 1);
        }

      }
    addingmanager(ne,dat,detail){
      this.manager.push({ne,dat,detail});
    }
}