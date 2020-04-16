import TrelloList from "./TrelloList"
import { connect } from "react-redux"
import TrelloActionButton from "./TrelloActionButton"
import React, { Component } from 'react'
import { DragDropContext,Droppable } from "react-beautiful-dnd"
import { sort } from "../actions/listActions"
import styled from "styled-components";

const ListsContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
class App extends Component {
  onDragEnd = results=>{
    const { destination,source,draggableId, type } = results

    if(!destination){
      return
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
    
  }

  render() {
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd = {this.onDragEnd}>
        <Droppable droppableId = "all-lists" direction="horizontal" type="list">
        {provided=>(
          <ListsContainer  {...provided.droppableProps} ref={provided.innerRef}>
                  {lists.map((list,index)=>(
                    <TrelloList  listID = {list.id} key = {list.id} title={list.title} cards ={list.cards} index = {index}/>
                  ))}
                  {provided.placeholder}
                  <TrelloActionButton list/>
          </ListsContainer>
           )}
        </Droppable>
      </DragDropContext>
    );
  }
}




const mapStateToprops = state =>({
  lists:state.lists
})



export default connect(mapStateToprops) (App);
