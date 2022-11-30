import * as C from "./styles";
import { useState, KeyboardEvent } from "react";
import { bgItems } from "../List/styles";

type Props = {
    onEnter: (taskname: string) => void
}

export const AddArea = ({ onEnter }: Props) => {

    const [ InputText, setInputText ] = useState('');
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code == "Enter" && InputText !== '') {
            onEnter(InputText);
            setInputText('');
        }
    }
    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Adicionar uma Tarefa..."
                value={InputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}