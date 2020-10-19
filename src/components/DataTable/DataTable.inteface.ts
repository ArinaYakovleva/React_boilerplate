import { Client } from '../../mocks/clients/clients.interface'

export interface DataTableComponentProps{
    data: Client[];
    onDelete: any;
    changeData: (id: number) => void;
    onEdit: () => void;
}

export interface DataTableComponentState{
    isEdited: boolean;
}