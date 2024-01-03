import React from "react";

type DividerProps = { style: { } }

export const Divider: React.FC<DividerProps> =({ style }): React.ReactElement => {
    return (
        <React.Fragment>
            <div style={style}></div>
        </React.Fragment>
    )
}