import InputLabel from "../../../../components/InputLabel";
import { ClientData } from "../../../../types/client";

export default function InputPhone({fieldsData, handleChange}: {fieldsData: ClientData; handleChange: (fieldName: keyof ClientData, newValue: string) => void;}){
    return (
        <InputLabel
            label={fieldsData.phone.label}
            value={fieldsData.phone.value}
            placeholder={fieldsData.phone.placeholder}
            error={fieldsData.phone.error}
            errorText={fieldsData.phone.errorText}
            required={fieldsData.phone.required}
            onChange={(newValue:string) => handleChange('phone', newValue)}
        />
    )
}