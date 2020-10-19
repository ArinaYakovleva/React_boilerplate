import * as React from "react";
import { connect } from 'react-redux';

import { App } from '../components/App/App';
import { clientsLoadActions, sendDataActions } from '../actions/clients';
import { AppContainerComponentProps, AppContainerState } from './AppContainer.interface';
import { Client } from '../mocks/clients/clients.interface';

class AppContainerClass extends React.Component<AppContainerComponentProps, AppContainerState>{
    constructor(props:AppContainerComponentProps){
        super(props);
        this.state = {
            isAnyCorrect: true,
        }
        this.sendData = this.sendData.bind(this);

    }

    componentDidMount(){
        this.props.clientsLoadActions();
    }

    sendData(arr: Client, func: () => void, isValid: boolean){
        //console.log(arr);
        
        if(isValid && arr.firstName && arr.lastName && arr.age && arr.phone){
            this.props.sendDataActions(arr);
        }

        else{
            this.setState({
                isAnyCorrect: false,
            });
            return;
        }

        func();
    }

    render(){
        const {clients} = this.props;
        return(
            <App clients={clients}
                 sendData={this.sendData}
                 isAnyCorrect={this.state.isAnyCorrect}
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
    const allClients = state.clients.entries;
    return {
        clients: allClients,
    };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass);

