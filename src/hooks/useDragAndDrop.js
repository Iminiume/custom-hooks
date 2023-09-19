import { useState, useRef, useEffect } from "react";

function useDragAndDrop() {
  const [isDragging, setIsDragging] = useState(false);
  const [draggedElement, setDraggedElement] = useState(null);
  const [dropTarget, setDropTarget] = useState(null);

  const dragData = useRef({
    offsetX: 0,
    offsetY: 0,
  });

  const handleDragStart = (event, element) => {
    setDraggedElement(element);
    setIsDragging(true);

    const boundingRect = element.getBoundingClientRect();
    dragData.current.offsetX = event.clientX - boundingRect.left;
    dragData.current.offsetY = event.clientY - boundingRect.top;

    event.dataTransfer.setData("text/plain", ""); // Required for Firefox
  };

  useEffect(() => {
    function handleDragOver(event) {
      event.preventDefault();
      setDropTarget(event.target);
    }

    function handleDrop() {
      setIsDragging(false);
    }

    function handleDragEnd() {
      setIsDragging(false);
      setDraggedElement(null);
      setDropTarget(null);
    }

    if (draggedElement) {
      draggedElement.addEventListener("dragend", handleDragEnd);
    }

    if (dropTarget) {
      dropTarget.addEventListener("dragover", handleDragOver);
      dropTarget.addEventListener("drop", handleDrop);
    }

    return () => {
      if (draggedElement) {
        draggedElement.removeEventListener("dragend", handleDragEnd);
      }

      if (dropTarget) {
        dropTarget.removeEventListener("dragover", handleDragOver);
        dropTarget.removeEventListener("drop", handleDrop);
      }
    };
  }, [draggedElement, dropTarget]);

  return {
    isDragging,
    draggedElement,
    dragData: dragData.current,
    handleDragStart, // Expose the handleDragStart function to be used in the component
  };
}

export default useDragAndDrop;
