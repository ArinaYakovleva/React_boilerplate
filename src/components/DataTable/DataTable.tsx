import * as React from "react";
import { Table, Tag, Image, Space } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import styles from './DataTable.module.scss';
import { DataTableComponentState, DataTableComponentProps } from './DataTable.inteface';

const { Column } = Table;

export default class DataTable extends React.Component<{},DataTableComponentState, DataTableComponentProps>{

    render(){    
        const {data} = this.props;   
        return(<>
            <Table dataSource={data} className={styles["data-table"]}>
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column
                    title="Vehicles"
                    dataIndex="vehicles"
                    key="vehicles"
                    render={(vehicles) => (
                        <div key={data._id} className={styles['data-row']}>
                        {vehicles && vehicles.map((vehicle: any, index: number) => (
                            <div key={vehicle.manufacturer}>
                            <Tag color="blue" key={`${vehicle.manufacturer}${index}`}>
                                {vehicle.manufacturer}
                            </Tag>
                            <Tag color="blue" key={`${vehicle.model}${index}`}>
                                {vehicle.model}
                            </Tag>
                            <Tag color="blue" key={`${vehicle.year}${index}`}>
                                {vehicle.year}
                            </Tag>
                            {vehicle.image && <Image width={100} src={`${vehicle.image}`}/>}               
                            </div>    
                        )) 
                        }
                        </div>
                    )}
                    />
                    <Column
                        title="Actions"
                        key="action"
                        render={(record) => (
                            <Space size="large">
                            <EditTwoTone onClick={() => this.props.onEdit(record._id)}/>
                            <DeleteTwoTone  onClick={async() => await this.props.onDelete(`http://localhost:4000/api/clients/${record._id}`,record._id)}/>
                            </Space>
                        )}
                    />
                    
            </Table>
            </>
        );
    }
}