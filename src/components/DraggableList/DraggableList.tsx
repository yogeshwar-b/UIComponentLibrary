import React from 'react'

interface DraggableListProps{
    itemlist:React.JSX.Element[]
}

export const DraggableList=(props:DraggableListProps)=>{
    return (<div style={{gap:'1rem',display:'flex',flexDirection:'column'}}>
    {props.itemlist.map((i)=>{
        return <DraggableItem item={i}></DraggableItem>
    })}
    </div>)
}

const DraggableItem=({item})=>{
    return item
}