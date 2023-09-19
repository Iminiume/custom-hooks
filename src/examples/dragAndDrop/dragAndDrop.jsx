import React from "react";
import useDragAndDrop from "../../hooks/useDragAndDrop";

function DraggableElement() {
  const { isDragging, draggedElement, handleDragStart, dragData } =
    useDragAndDrop();

  const handleDrag = (event) => {
    if (!isDragging) return;

    const { offsetX, offsetY } = dragData;
    const { clientX, clientY } = event;
    const x = clientX - offsetX;
    const y = clientY - offsetY;

    draggedElement.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div
      draggable
      onDragStart={(event) => handleDragStart(event, event.target)}
      onDrag={handleDrag}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        position: "absolute",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      Drag me
    </div>
  );
}

export default DraggableElement;
