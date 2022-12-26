import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  //   userSelect: "none",
  padding: grid * 2,
  margin: `0 10px 10px 0`,
  width: "120px",
  borderRadius: "5px",

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "white",
  display: "inline-flex",
  border: "1px solid grey",
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "orange" : "lightblue",
  padding: grid,
  borderRadius: "5px",
  margin: "10px 0",
});
const Children = ({ type, subItems }) => {
  // const [droppableType, setDroppableType] = React.useState("droppableSubItem");
  return (
    <Droppable droppableId={type} type={"droppableSubItem"}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {subItems?.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {/* {snapshot.isDragging
                      ? setDroppableType("droppableSubItem")
                      : setDroppableType("droppableItem")} */}
                    {item.content}
                  </div>
                  {provided.placeholder}
                </>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Children;
