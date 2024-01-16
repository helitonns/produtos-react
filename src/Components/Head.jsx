import React from "react";

const Head = (props) => {
  React.useEffect(()=> {
    document.title = props.title;
    document.querySelector("meta[name='description']").setAttribute("content", props.descripton);
  }, [props]);

  return <></>;
};

export default Head;
