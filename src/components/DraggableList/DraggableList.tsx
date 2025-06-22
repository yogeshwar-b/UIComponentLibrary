const DraggableList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Draggable List Component</h1>
      {children && Array.isArray(children)
        ? children.map((child) => {
            return <div>{child}</div>
          })
        : null}
    </div>
  )
}

export default DraggableList
