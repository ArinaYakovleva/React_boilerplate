import * as React from "react";
import { connect } from 'react-redux';

import { App } from '../components/App/App';
import { clientsFetchData, clientsAddData, clientsRemoveData, clientsUpdateData } from '../actions/clients';
import { AppContainerComponentProps, AppContainerState } from './AppContainer.interface';

class AppContainerClass extends React.Component<AppContainerComponentProps, AppContainerState>{
    async componentDidMount(){
      await this.props.fetchData('http://localhost:4000/api/clients');

    }

    async componentDidUpdate(){
        await this.props.fetchData('http://localhost:4000/api/clients');
    }

    render(){
        const {clients, clientsAddData, clientsRemoveData, clientsUpdateData} = this.props;
        return(
            <App clients={clients}
                 sendData={clientsAddData}
                 removeData={clientsRemoveData}
                 editData={clientsUpdateData}
            />
        );
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: async (url: string) => await dispatch(clientsFetchData(url)),
        clientsAddData: async (url: string, client: any) => await dispatch(clientsAddData(url, client)),
        clientsRemoveData: async (url: string, id: string) => await dispatch(clientsRemoveData(url, id)),
        clientsUpdateData: async(url: string, item: any) => await dispatch(clientsUpdateData(url, item)),
    }
}
const mapStateToProps = (state: any) =>{  
    return {
        clients: state.clientsFetchReducer.entries,
    };
}


export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainerClass);

