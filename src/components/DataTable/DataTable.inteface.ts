import { Client } from '../../mocks/clients/clients.interface'

export interface DataTableComponentProps{
    data: Client[];
    onDelete: any;
    changeData: (id: number) => void;
    onEdit: () => void;
    removeData: any;
}

export interface DataTableComponentState{
    isEdited: boolean;
}