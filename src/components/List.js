import React from "react";
import Container from '@material-ui/core/Container';

export default function List(props) {
    const {list, deleteList, editList} = props;
    return (
        <div>
            {list && list.map((element, index) => {
                const key = index;
                return (
                    <div>
                        <Container maxWidth="sm">
                            <span key={index}>{element}</span>
                            <button className={"button"} onClick={() => editList(key)}>edit</button>
                            <button className={"button"} onClick={() => deleteList(key)}>delete</button>
                        </Container>
                    </div>
                )
            })}
        </div>
    )
}
