import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const a1 = [
  {
    id: "Lorem",
    name: "Lorem",
    thumb: "logo512.png",
  },
  {
    id: "ipsum",
    name: "ipsum",
    thumb: "logo512.png",
  },
  {
    id: "sit",
    name: "sit",
    thumb: "logo512.png",
  },
  {
    id: "amet",
    name: "amet",
    thumb: "logo512.png",
  },
  {
    id: "consectetur",
    name: "consectetur",
    thumb: "logo512.png",
  },
];
const a2 = [
  {
    id: "adipisicing",
    name: "adipisicing",
    thumb: "logo512.png",
  },
  {
    id: "elit",
    name: "elit",
    thumb: "logo512.png",
  },
  {
    id: "Magni",
    name: "Magni",
    thumb: "logo512.png",
  },
  {
    id: "exercitationem",
    name: "exercitationem",
    thumb: "logo512.png",
  },
  {
    id: "Repellendus",
    name: "Repellendus",
    thumb: "logo512.png",
  },
];

function App() {
  const [lorem1, updateLorem1] = useState(a1);
  const [lorem2, updateLorem2] = useState(a2);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(lorem1);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateLorem1(items);
  }
  function handleOnDragEnd2(result) {
    if (result.combine) {
      // super simple: just removing the dragging item
      // console.log(characters2);
      const items = Array.from(lorem2);
      items.splice(result.source.index, 1);
      updateLorem2(items);
      return;
    }
    if (!result.destination) return;

    const items = Array.from(lorem2);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateLorem2(items);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="lists">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {lorem1.map(({ id, name, thumb }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>{name}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="lists">
          <DragDropContext onDragEnd={handleOnDragEnd2}>
            <Droppable droppableId="characters2" isCombineEnabled>
              {(provided) => (
                <ul
                  className="characters"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {lorem2.map(({ id, name, thumb }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="characters-thumb">
                              <img src={thumb} alt={`${name} Thumb`} />
                            </div>
                            <p>{name}</p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
}

export default App;
