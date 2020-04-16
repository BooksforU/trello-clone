import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Textarea from "react-textarea-autosize"
import Card from '@material-ui/core/Card';
import {connect} from "react-redux"
import {addList} from "../actions/listActions"
import {addCard} from "../actions/cardActions"
import styled from "styled-components"


class TrelloActionButton extends Component {

    state = {
        formOpen:false,
        text:""
    }
    renderAddButton = () =>{
       
        const buttonTextOpacity = list ?0.52: 0.5;
        const buttonTextColor = list ?"white":"inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)":"inherit"
        const OpenFormButton = styled.div`
                display: flex;
                align-items: center;
                cursor: pointer;
                border-radius: 3px;
                height: 36px;
                margin-left: 8px;
                width: 300px;
                padding-left: 10px;
                padding-right: 10px;
                opacity: ${buttonTextOpacity};
                color: ${buttonTextColor};
                background-color: ${buttonTextBackground};
                
                `;
        const { list } = this.props
        const buttonText = list ?"Add another list":"Add another card"
        
        return(
            <OpenFormButton
            onClick = {this.openForm}
            >
                <AddIcon/>
                <p>{buttonText}</p>
            </OpenFormButton>
        )
    }
    //open form 
    openForm = ()=>{
        this.setState({
            formOpen:true
        })
    }
    //close form 
    closeForm = e =>{
        this.setState({
            formOpen:false
        })
    }

    handleInputchange = (e)=>{
        this.setState({
            text:e.target.value
        })
    }

    //AddToList dispatch
    handleAddList = () =>{
        const { dispatch } = this.props
        const { text} = this.state
        if(text){
            this.setState({
                text:""
            })
            dispatch(addList(text))
        }
    return 
    }
    
    handleCardAdd = () =>{
        const { dispatch,listID} = this.props
        const { text } = this.state
        if(text){
            this.setState({
                text:""
            })
            dispatch(addCard(listID,text))
        }
     
    }

    //renderform 
    renderForm = () =>{
        const {list} = this.props
        const placeholder = list ?"Enter list title ....":"Enter a title for card"
        const buttonTitle = list?"Add List":"Add Card"

        return (
        <div>

            <Card 
            style ={{
                minHeight:85,
                maxHeight:272,
                padding:"6px 8px 2px"
            }}
            >
                <Textarea
                placeholder={placeholder}
                autoFocus
                onBlur = {this.closeForm}
                onChange = {this.handleInputchange}
                value={this.state.text}
                style={{
                    resize:"none",
                    width:"100%",
                    overflow:"hidden",
                    outline:"none",
                    border:"none"

                }}
                />
            </Card>
            <div style={styles.openForButtonGroup}>
                <button 
                    onMouseDown = {list ? this.handleAddList : this.handleCardAdd}
                    variant = "contained" style={{color:"white",backgroundColor:"#5aac44",border:"none",borderRadius:4,height:20}}>
                    {buttonTitle}{" "}
                </button>
                <CloseIcon style={{marginLeft:6,cursor:"pointer"}}/>

            </div>
            
        </div>
        )
    }

    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
    
}
        const styles = {
            openForButtonGroup:{
                display:"flex",
                alignItems:"center",
                cursor:"pointer",
                borderRadius:3,
                height:36,
                width:272
            },
            formButtonGroup:{
                marginTop:8,
                display:"flex",
                alignItems:"center"

            }
    
        }

export default connect () (TrelloActionButton)