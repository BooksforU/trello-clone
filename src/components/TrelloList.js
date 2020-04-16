
import React from 'react'
import TrelloCard from "./TrelloCard"
import TrelloActionButton from "./TrelloActionButton"
import { Droppable,Draggable } from "react-beautiful-dnd"
import styled from "styled-components";
 function TrelloList({title,cards,listID,index}) {

    const ListContainer = styled.div`
        background-color: #dfe3e6;
        border-radius: 3px;
        width: 300px;
        padding: 8px;
        height: 100%;
        margin: 0 8px 0 0;
        `;
     
    return (
        <Draggable draggableId = {String(listID)} index={index}>
            {provider =>(
                <ListContainer
                {...provider.dragHandleProps}
                {...provider.draggableProps}
                ref = {provider.innerRef}
                >
                <Droppable droppableId = {String(listID)} type="card" >
                    {provider =>(
    
                    <div {...provider.droppableProps} ref={provider.innerRef} >
                        <h3>{title}</h3>
                        {cards.map((card,index)=>(
                            <TrelloCard  key = {card.id} index = {index} text = {card.text} id = {card.id}/>
                        ))}
                        {provider.placeholder}
                        <TrelloActionButton listID = {listID} />
                    </div>
                    )}
                </Droppable>
            </ListContainer>

            )}

        </Draggable>
        
    )
}



export default TrelloList

