import SectionHeading from "./SectionHeading";
import { PencilSimpleLine } from "@phosphor-icons/react";

const editIcon = <PencilSimpleLine className="ph" weight="bold" />

interface Props {
    onTextChanged: (text: string) => void;
    text: string;
}

function Editor({ text, onTextChanged }: Props) {

    function handleChange(event: { target: { value: string; }; }) {
        const newText = event.target.value;
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