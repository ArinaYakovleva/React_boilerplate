import * as React from "react";
import { connect } from 'react-redux';

import {App} from '../components/App/App';
import {clientsLoadActions} from '../actions/clients';
import {AppContainerComponentProps} from './AppContainer.interface';

class AppContainerClass extends React.Component<AppContainerComponentProps>{
    componentDidMount(){
        this.props.clientsLoadActions();
    }

    render(){
        const {clients} = this.props;
        return(
            <App clients={clients}/>
        );
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        clientsLoadActions: () => dispatch(clientsLoadActions()),
    }
}

const mapStateToProps = (state: any, ownProps: any) =>{    
    const allClients = state.clients.entries;
    return {
        clients: allClients,
    };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass);

