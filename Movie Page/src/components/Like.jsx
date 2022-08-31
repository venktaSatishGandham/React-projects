import React from "react";

function Like(props){
    console.log(props)
    return(
        <>
{props.liked?
    <i className="font-weight-bold text-uppercase">❤️</i>:<i>♡</i>}

        </>
    );
}
export default Like






