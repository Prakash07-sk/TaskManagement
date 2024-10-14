import Popup from 'reactjs-popup';
import Dialog from '../../Common/Dialog';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddNewTaskData } from '../Utils/TaskDatas.util';


interface propsData {
    UpdateAddTaskDialog: (state: boolean) => void;
}
export default function AddTestDetails(props: propsData) {
    const { UpdateAddTaskDialog } = props;
    const dispatcher = useDispatch();

    const methods = useForm({
        mode: 'all'
    });

    const {
        control,
        handleSubmit
    } = methods;

    const SaveData = (data: any) => {
        dispatcher(AddNewTaskData(data));
        UpdateAddTaskDialog(false);
    }

    return (
        <Dialog
            title={'Add new Task'}
            buttons={<>
                <button type='submit' className='btn btn-secondary btn-sm' onClick={() => UpdateAddTaskDialog(false)}>Cancel</button>
                <button type='submit' className='btn btn-primary pl-4 btn-sm' onClick={handleSubmit(data => SaveData(data))}>Add</button>

            </>}
        >
            <div className='form-group'>
                <FormProvider {...methods}>

                    <Controller
                        name="title"
                        control={control}
                        render={({ field: { onChange } }) => <input
                            type="text"
                            name="title"
                            onChange={onChange}
                            className="form-control"
                            placeholder="Enter Title..." />}
                    />
                     <Controller
                        name="description"
                        control={control}
                        render={({ field: { onChange } }) => <input
                            type="text"
                            name="description"
                            onChange={onChange}
                            className="form-control mt-4"
                            placeholder="Enter description..." />}
                    />

                </FormProvider>
            </div>

        </Dialog>
    );
}