import * as L from "./styles";
import { Item } from '../../types/item';
import { useState } from "react";

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const List = ({ item, onChange }: Props) => {
    return (
        <L.Container>
            <L.Area>
                <L.bgItems done={item.done}>
                    <input
                        type="checkbox"
                        checked={item.done}
                        onChange={e => onChange(item.id, e.target.checked)}
                    />
                    <label>{item.name} - {item.done.toString()}</label>
                </L.bgItems>
            </L.Area>
        </L.Container>
    )
}