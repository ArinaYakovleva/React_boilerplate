import * as React from "react";
import { Form, Input, Button } from 'antd';
import styles from './Forms.module.scss';

import {FormsComponentState, FormsComponentProps} from './Forms.interface';

export default class Forms extends React.Component<{}, FormsComponentState, FormsComponentProps>{
    constructor(props: FormsComponentProps){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: null,
            phone: '',
            vehicle: '',
            model: '',
            year: null,
            isFirstNameValid: true, 
            isLastNameValid: true,
            isAgeValid: true,
            isPhoneValid: true,
            formsValid: true,
            isAnyCorrect: true,
        }

        this.onHandleChange = this.onHandleChange.bind(this);
        this.clearForms = this.clearForms.bind(this);
        this.validateField = this.validateField.bind(this);
        this.onHandleClick = this.onHandleClick.bind(this);
        this.onHandleUpdate = this.onHandleUpdate.bind(this);
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
            age: null,
            phone: '',
            vehicle: '',
            model: '',
            year: null,
        });
    }

    async onHandleClick(){
        const {isFirstNameValid, isLastNameValid, isAgeValid, isPhoneValid, formsValid} = this.state;

        this.setState({
            formsValid: isFirstNameValid && isLastNameValid && isAgeValid && isPhoneValid,
        });

        const {length} = this.props;
        
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

        if(formsValid && arr.firstName && arr.lastName && arr.age && arr.phone){
           await this.props.sendData('http://localhost:4000/api/clients',arr);
        }else{
            this.setState({
                isAnyCorrect: false
            })
            return;
        }
        
        this.clearForms();
    }

    async onHandleUpdate(){
        const {isFirstNameValid, isLastNameValid, isAgeValid, isPhoneValid, formsValid} = this.state;

        this.setState({
            formsValid: isFirstNameValid && isLastNameValid && isAgeValid && isPhoneValid,
        });
        
        const arr = 
            {   id: this.props.id,
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

        if(formsValid && arr.firstName && arr.lastName && arr.age && arr.phone){
           await this.props.onUpdate(`http://localhost:4000/api/clients/${this.props.id}`,arr);
        }else{
            this.setState({
                isAnyCorrect: false
            });
            return;
        }
        this.clearForms();
    }

    validateField(fieldName: string, value: any){
        switch(fieldName){
            case 'firstName': 
                this.setState({
                    isFirstNameValid: value.match(/^[a-zA-Zа-яА-ЯЁё]+$/) && value.length >= 3,
                });
                break;
            case 'lastName':
                this.setState({
                    isLastNameValid: value.match(/^[a-zA-Zа-яА-ЯЁё]+$/) && value.length >= 3,
                });
                break;
            case 'age':
                this.setState({
                    isAgeValid: value.match(/^\d+$/) && +value > 0
                });
                break;
            case 'phone':
                this.setState({
                    isPhoneValid: value.match(/^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/) && value.length > 0,
                });
                break;
        }
        
    }

    render(){
        const { isAnyCorrect } = this.state;
        const { edited } = this.props;
        
        return(
            <div className={styles['left-forms']}>
                <Form.Item label="Name" className={styles['required']}>
                   <Input name="firstName" type="firstName"
                           value={this.state.firstName}
                           onChange={this.onHandleChange}
                           className={this.state.isFirstNameValid ? '' : 'error'}
                           />
                       {!this.state.isFirstNameValid && <p className={styles['error']}>Name requires 3 caracters minimum<br /> and must contain only letters</p>} 
                </Form.Item>
               
                <Form.Item label="Surname" className={styles['required']}>
                    <Input name="lastName" type="lastName"
                           value={this.state.lastName}
                           onChange={this.onHandleChange}
                           />
                    {!this.state.isLastNameValid && <p className={styles['error']}>Lastname requires 3 caracters minimum<br /> and must contain only letter</p>}
                </Form.Item>
                <Form.Item label="Age" className={styles['required']}>
                    <Input name="age" type="age"
                                 value={this.state.age}
                                 onChange={this.onHandleChange}
                                />

                    {!this.state.isAgeValid && <p className={styles['error']}>Age should be more then 1 <br /> and requires only digits</p>}
                </Form.Item>
                <Form.Item label="Phone" className={styles['required']}>
                    <Input name="phone" type="phone"
                                 value={this.state.phone}
                                 onChange={this.onHandleChange}
                                />

                    {!this.state.isPhoneValid && <p className={styles['error']}>+7(999)000-0000</p>}
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
                        onClick={this.onHandleUpdate}>
                            Update
                    </Button> :
                        <Button type="primary"
                            block size="large"
                            onClick={this.onHandleClick}>
                                Send
                        </Button>
                        
                        }
                {!isAnyCorrect && <p className={styles['error-message']}>Oops, something is wrong with your info...</p>}
            </div>
        );
    }
}