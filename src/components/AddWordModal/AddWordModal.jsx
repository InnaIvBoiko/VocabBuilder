import AddWordForm from '../AddWordForm/AddWordForm.jsx';
import ModalPopUp from '../ModalPopUp/ModalPopUp.jsx';

export default function EditWordModal() {
    return (
        <>
            <ModalPopUp state={true}>
                <AddWordForm />
            </ModalPopUp>
        </>
    );
}