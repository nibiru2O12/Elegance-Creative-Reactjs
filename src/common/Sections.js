import React from 'react';

const Sections = ({children,...rest}) => {
    console.log(rest)
    return <div className="section">{children}</div>
}

export default Sections;