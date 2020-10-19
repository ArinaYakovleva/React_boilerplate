import * as React from "react";
import { connect } from 'react-redux';

import { App } from '../components/App/App';
import { clientsLoadActions, sendDataActions } from '../actions/clients';
import { AppContainerComponentProps, AppContainerState } from './AppContainer.interface';
import { Client } from '../mocks/clients/clients.interface';

class AppContainerClass extends React.Component<AppContainerComponentProps, AppContainerState>{
    componentDidMount(){
        this.props.clientsLoadActions();
    }


    render(){
        const {clients} = this.props;
        return(
            <App clients={clients}
                 sendData={this.props.sendDataActions}
            />
        );
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        clientsLoadActions: () => dispatch(clientsLoadActions()),
        sendDataActions: (client: any) => dispatch(sendDataActions(client))
    }
}

const mapStateToProps = (state: any, ownProps: any) =>{ 
    const clients = state.clients.entries; 
    return {
        clients
    };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass);

