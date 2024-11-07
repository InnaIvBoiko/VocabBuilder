import EditWordForm from '../EditWordForm/EditWordForm.jsx';
import ModalPopUp from '../ModalPopUp/ModalPopUp.jsx';

export default function EditWordModal() {
    return (
        <>
            <ModalPopUp state={true}>
                <EditWordForm />
            </ModalPopUp>
        </>
    );
}