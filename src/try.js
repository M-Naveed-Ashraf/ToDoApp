import React, { useState } from 'react';
import ListItem from './ToDoList.js';
import FooterText from './cardFooterText.jsx';
import { useHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Try() {

    let [inputList, setInputList] = useState(''); 

    let [tasks,setTasks] = useState([]);

    const history = useHistory();

    const inputEvent = (e) => {
        return setInputList(e.target.value);
    }

    function ToDo(task, complete) {
        return {
            task: task,
            complete: complete
        }
    }

    const showList = (inputList) => {
          if(inputList === '' ) {
            alert('Empty Task can not be added');
          }
          else {
            setTasks( (data) =>{ return [...data, ToDo(inputList,false)] } );
            setInputList("");
          }
    }

    const deleteListItem = (id) => {
        setTasks( (data) => {
          return data.filter( (arrElem, index) => {
            return index !== id;
          })
        })
      }

    const completeListItem = (id) => {
        let shallowTasks = [...tasks];
        let item = shallowTasks[id];
        item.complete = !item.complete;
        setTasks(shallowTasks);
    }

    const completeCount = () => {
      const item = tasks.filter( (data) => {
        return data.complete === true;
      })
      return item.length
    }

    const openCount = () => {
      const item = tasks.filter( (data) => {
        return data.complete === false;
      })
      return item.length
    }


    return (
        <div className="container">
          <button className="btn btn-outline-danger mt-3" onClick={ () => history.push('/')}>Logout</button>
          <main className="card text-center w-50  my-5 mx-auto shadow-lg">
            <div className="card-header">
                <h1 className="card-title">ToDo List</h1>
            </div>
                <div className="card-body">
                    <br />
                    <br />
                    <div className="row align-items-center">
                        <div className="col-9">
                            <input className="form-control" type="text" value={inputList} placeholder="Add a item" onChange={inputEvent} />
                            <span className="text-danger" id="error"></span>
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-success rounded-pill" onClick={() => {showList(inputList)}}> <i class="las la-plus-circle la-lg"></i> </button>
                        </div>
                    </div>
                    
                    <ol className="list-group my-4">
                      {
                          tasks.length===0 ? '' :  tasks.map( (item, index) => {
                          return (
                            <ListItem
                            key={index}
                            id={index}
                            Item={item.task}
                            complete={item.complete}
                            onSelect={deleteListItem}
                            onComplete={completeListItem} />
                            // open={openTask} />
                          );
                        })
                      }
                    </ol>
                </div>
                <div className="card-footer text-muted row align-items-center">
                      <FooterText tasks={tasks.length}
                      completed={completeCount()}
                      open={openCount()} />
                </div>
          </main>
        </div>
    );
}

export default Try