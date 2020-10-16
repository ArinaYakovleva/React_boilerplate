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
            age: null,
            phone: '',
            vehicle: '',
            model: '',
            year: null,
            firstNameValid: true,
            lastNameValid: true,
            ageValid: true,
            phoneValid: true,
            formsValid: true,
 
        }

        this.onHandleChange = this.onHandleChange.bind(this);
        this.clearForms = this.clearForms.bind(this);
        this.validateField = this.validateField.bind(this);
    }

    onHandleChange(e: any){
        const target = e.target;
        const name = target.name;       
        this.setState({
            [name]: target.value,
        });
        this.validateField(name, target.value);
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

    validateField(fieldName: string, value: any){
        const {firstNameValid, lastNameValid, ageValid, phoneValid} = this.state;
        switch(fieldName){
            case 'firstName': 
                this.setState({
                    firstNameValid: value.match(/^[a-zA-Zа-яА-ЯЁё]+$/) && value.length >= 3,
                });
                break;
            case 'lastName':
                this.setState({
                    lastNameValid: value.match(/^[a-zA-Zа-яА-ЯЁё]+$/) && value.length >= 3,
                });
                break;
            case 'age':
                this.setState({
                    ageValid: value.match(/^\d+$/) && +value > 0
                });
                break;
            case 'phone':
                this.setState({
                    phoneValid: value.match(/^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/) && value.length > 0,
                });
                break;
        }

        this.setState({
            formsValid: firstNameValid && lastNameValid && ageValid && phoneValid,
        });
    }

    render(){
        const {length, edited, isAnyCorrect} = this.props;
        const arr = 
            {   id: length,
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
                <Form.Item label="Name" className={styles['required']}>
                   <Input name="firstName" type="firstName"
                           value={this.state.firstName}
                           onChange={this.onHandleChange}
                           className={this.state.firstNameValid ? '' : 'error'}
                           />
                       {!this.state.firstNameValid && <p className={styles['error']}>Name requires 3 caracters minimum<br /> and must contain only letters</p>} 
                </Form.Item>
               
                <Form.Item label="Surname" className={styles['required']}>
                    <Input name="lastName" type="lastName"
                           value={this.state.lastName}
                           onChange={this.onHandleChange}
                           />
                    {!this.state.lastNameValid && <p className={styles['error']}>Lastname requires 3 caracters minimum<br /> and must contain only letter</p>}
                </Form.Item>
                <Form.Item label="Age" className={styles['required']}>
                    <Input name="age" type="age"
                                 value={this.state.age}
                                 onChange={this.onHandleChange}
                                />

                    {!this.state.ageValid && <p className={styles['error']}>Age should be more then 1 <br /> and requires only digits</p>}
                </Form.Item>
                <Form.Item label="Phone" className={styles['required']}>
                    <Input name="phone" type="phone"
                                 value={this.state.phone}
                                 onChange={this.onHandleChange}
                                />

                    {!this.state.phoneValid && <p className={styles['error']}>+7(999)000-0000</p>}
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
                {edited ? 
                    <Button type="primary"
                        block size="large"
                        onClick={() => this.props.onUpdate(arr, this.clearForms,  this.state.formsValid) }>
                            Update
                    </Button> :
                        <Button type="primary"
                            block size="large"
                            onClick={() => this.props.sendData(arr, this.clearForms,  this.state.formsValid)}>
                                Send
                        </Button>
                        
                        }
                {!isAnyCorrect && <p className={styles['error-message']}>Oops, something is wrong with your info...</p>}
            </div>
        );
    }
}