import React, { useState } from 'react';
import ListItem from './ToDoList.js';
import FooterText from './cardFooterText.js';
import { useHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Main() {
    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);

    const complete = [
        
    ];
    const history = useHistory();

    const inputEvent = (e) => {
        setInputList(e.target.value)
    };

    const showList = () => {
        setItems( (data) =>{
            return [...data, inputList];
        });
        setInputList("");
    }

  const deleteListItem = (id) => {
    setItems( (data) => {
      return data.filter( (arrElem, index) => {
        return index !== id;
      })
    })
  }

  

  return (
    <div className="container">
      <main className="card text-center w-50  my-5 mx-auto shadow-lg">
        <div className="card-header">
            <h1 className="card-title">ToDo List</h1>
        </div>
            <div className="card-body">
                <br />
                <br />
                <div className="row align-items-center">
                    <div className="col">
                        <input className="form-control" type="text" value={inputList} placeholder="Add a item" onChange={inputEvent} />
                    </div>
                    <div className="col">
                        <button className="btn btn-outline-success rounded-pill" onClick={showList}> <i class="las la-plus-circle la-lg"></i> </button>
                    </div>
                </div>
                
                <ol className="list-group my-4">
                  {
                    items.map( (item, index) => {
                      return (
                        <ListItem
                        key={index}
                        id={index}
                        Item={item}
                        onSelect={deleteListItem} />
                        // onComplete={completeListItem} />
                        // open={openTask} />
                      );
                    })
                  }
                </ol>
            </div>
            <div className="card-footer text-muted row align-items-center">
                  <FooterText tasks={items.length} />
            </div>
      </main>
    </div>
  );
}

export default Main