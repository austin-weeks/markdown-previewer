import { Code } from "@phosphor-icons/react";
import SectionHeading from "./SectionHeading";

const previewIcon = <Code className="ph" weight="bold" />

interface Props {
    markDownHTML: string;
}

function Preview({ markDownHTML }: Props) {
    return (
        <div className="section preview-section">
            <SectionHeading title="Markup Preview" icon={previewIcon} />
            <div id="preview" dangerouslySetInnerHTML={ {__html: markDownHTML}} >
            </div>
        </div>
    );
}

export default Preview;