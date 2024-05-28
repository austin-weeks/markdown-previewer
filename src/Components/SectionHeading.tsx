import { ReactNode } from "react";

interface Props {
    title: string;
    icon: ReactNode;
}
function SectionHeading({title, icon}: Props) {
    return (
        <div className="section-heading">{title}{icon}</div>
    );
}

export default SectionHeading;