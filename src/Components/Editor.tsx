import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { PencilSimpleLine } from "@phosphor-icons/react";

const editIcon = <PencilSimpleLine className="ph" weight="bold" />

interface Props {
    onTextChanged: (text: string) => void;
    startingText: string;
}

function Editor({ startingText, onTextChanged }: Props) {
    const [text, setText] = useState(startingText);

    function handleChange(event: { target: { value: string; }; }) {
        const newText = event.target.value;
        setText(newText);
        onTextChanged(newText);
    }

    return (
        <div className="section editor-section">
            <SectionHeading title="Markup Editor" icon={editIcon} />
            <textarea id='editor' onChange={handleChange} value={text}
            data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" />
        </div>
    );
}

export default Editor;