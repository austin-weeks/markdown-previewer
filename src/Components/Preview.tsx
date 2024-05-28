import { Code } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading";

const previewIcon = <Code className="ph" weight="bold" />
const renderHTML = true;

interface Props {
    markDownHTML: string;
}

function Preview({ markDownHTML }: Props) {
    return (
        <div className="section preview-section">
            <SectionHeading title="Markup Preview" icon={previewIcon} />
            { renderHTML ?
                <div id="preview" dangerouslySetInnerHTML={{__html: markDownHTML}}></div> :
                <div id="preview">{markDownHTML}</div> }
        </div>
    );
}

export default Preview;