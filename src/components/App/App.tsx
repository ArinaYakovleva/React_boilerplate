import * as React from "react";
import styles from './App.module.scss';

import Forms from '../Forms/Forms';
import DataTable from '../DataTable/DataTable';
import {MockClients} from '../../mocks/clients/index';
import {AppComponentProps, AppComponentState} from './App.interface';
import { Client } from '../../mocks/clients/clients.interface';

export class App extends React.Component<AppComponentProps, AppComponentState> {
    constructor(props: AppComponentProps){
        super(props);
        this.state = {
            formsData: [...MockClients],
            isEdited: false,
            id: 0,
        }

        this.onEdit = this.onEdit.bind(this);
    }


    onEdit(newId: number){
        this.setState({
            isEdited: true,
            id: newId,
        });
    }


    render() {
        const {clients, sendData, removeData, editData} = this.props; 
        return (
            <div className={styles.wrapper}>
                <h3 className={styles["main-header"]}>Please, enter your information</h3>
                <Forms sendData={sendData}
                       onUpdate={editData}
                       id={this.state.id}
                       length={this.state.formsData.length}
                       edited={this.state.isEdited}
                       />
                <DataTable data={clients} 
                           onEdit={this.onEdit}
                           onDelete={removeData}/>
            </div>

        );
    }
}

