import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

//
// const DialogsContainer = (props) => {
//     let state = props.store.getState().dialogsPage
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
//                     dialogsPage={state}/>
//
// }


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }

    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;