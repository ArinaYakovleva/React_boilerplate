import * as React from "react";
import { Form, Input, Button } from 'antd';
import styles from './Forms.module.scss';

import {FormsComponentState, FormsComponentProps} from './Forms.interface';

export default class Forms extends React.Component<{}, FormsComponentState, FormsComponentProps>{
    constructor(props: FormsComponentProps){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            age: 0,
            phone: '',
            vehicle: '',
            model: '',
            year: 0,
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.clearForms = this.clearForms.bind(this);
    }

    onHandleChange(e: any){
        const target = e.target;
        const name = target.name;       
        this.setState({
            [name]: target.value,
        });
    }

    clearForms(){
        this.setState({
            firstName: '',
            lastName: '',
            age: 0,
            phone: '',
            vehicle: '',
            model: '',
            year: 0,
        });
    }

    render(){
        const arr = 
            {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                phone: this.state.phone ,
                vehicles: [
                    {
                        manufacturer: this.state.vehicle,
                        model: this.state.model,
                        year: this.state.year,
                    }
                ]
            };
        return(
            <div className={styles['left-forms']}>
                <Form.Item label="Name">
                    <Input name="firstName" type="firstName"
                           value={this.state.firstName}
                           onChange={this.onHandleChange}
                           />
                </Form.Item>
                <Form.Item label="Surname">
                    <Input name="lastName" type="lastName"
                           value={this.state.lastName}
                           onChange={this.onHandleChange}
                           />
                </Form.Item>
                <Form.Item label="Age">
                    <Input name="age" type="age"
                                 value={this.state.age}
                                 onChange={this.onHandleChange}
                                />
                </Form.Item>
                <Form.Item label="Phone">
                    <Input name="phone" type="phone"
                                 value={this.state.phone}
                                 onChange={this.onHandleChange}
                                />
                </Form.Item>
                <Form.Item label="Vehicule">
                    <Input name="vehicle" type="vehicule"
                           value={this.state.vehicle}
                           onChange={this.onHandleChange}
                           />
                </Form.Item>
                <Form.Item label="Model">
                    <Input name="model" type="model"
                           value={this.state.model}
                           onChange={this.onHandleChange}/>
                </Form.Item>
                <Form.Item label="Year">
                    <Input name="year" type="year"
                                 value={this.state.year}
                                 onChange={this.onHandleChange}
                                 />
                </Form.Item>
                <Button type="primary"
                        block size="large"
                        onClick={() => this.props.sendData(arr, this.clearForms)}
                        >Send</Button>
            </div>
        );
    }
}