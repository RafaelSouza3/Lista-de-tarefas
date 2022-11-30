import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { List } from './components/List';
import { AddArea } from './components/Add';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Estudar React-TS',
      done: false,
    },
    {
      id: 2,
      name: 'Fazer tarefas de casa',
      done: true,
    }
  ]);

  const handleAddTask = (taskname: string) => {
    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    });

    setList(newList);
  }
  
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <C.Container>
      <C.Inside>
        <C.Area>
          Lista de Tarefas
        </C.Area>
        <AddArea
          onEnter={handleAddTask}
        />
        
        {
          list.map((item, index) => (
            <List key={index} item={item} onChange={handleTaskChange}/>
          ))
        }


      </C.Inside>
    </C.Container>
  );
}

export default App;
