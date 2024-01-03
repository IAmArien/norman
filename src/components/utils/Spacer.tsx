import React from "react";

type SpacerProps = { style: { height?: string | "0px", width?: string | "100%" } }

export const Spacer: React.FC<SpacerProps> =({ style }): React.ReactElement => {
    return (
        <React.Fragment>
            <div style={style}></div>
        </React.Fragment>
    )
}