import * as React from "react";
import { connect } from 'react-redux';

import { App } from '../components/App/App';
import { clientsLoadActions, sendDataActions, removeDataActions, editDataActions } from '../actions/clients';
import { AppContainerComponentProps, AppContainerState } from './AppContainer.interface';

class AppContainerClass extends React.Component<AppContainerComponentProps, AppContainerState>{
    componentDidMount(){
        this.props.clientsLoadActions();
    }


    render(){
        const {clients, sendDataActions, removeDataActions, editDataActions} = this.props;
        return(
            <App clients={clients}
                 sendData={sendDataActions}
                 removeData={removeDataActions}
                 editData={editDataActions}
            />
        );
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        clientsLoadActions: () => dispatch(clientsLoadActions()),
        sendDataActions: (client: any) => dispatch(sendDataActions(client)),
        removeDataActions: (id: number) => dispatch(removeDataActions(id)),
        editDataActions: (item: any) => dispatch(editDataActions(item)),

    }
}

const mapStateToProps = (state: any, ownProps: any) =>{ 
    const clients = state.clients.entries; 
    return {
        clients
    };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass);

