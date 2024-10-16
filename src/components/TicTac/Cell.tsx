import React from "react"
const Cell: React.FC<{value: string | null, onClick: () => void }> = (props) => {
    return (
        <div className="cell" onClick={props.onClick}>
            {props.value}
        </div>
    )
}
export default Cell