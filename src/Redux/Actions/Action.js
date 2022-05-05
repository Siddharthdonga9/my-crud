import{Type} from '../Constans/Constant';

export const CreateData=(Data)=>{

    return{
        type:Type.CREATE_DATA,
        payload: Data,
    }
}

export const EditData=(Data)=>{
    return{
        type:Type.EDIT_DATA,
        payload:Data,
    }
}

export const DeletData=(Data)=>{
    return{
        type:Type.DELET_DATA,
        payload:Data,
    }
}