import React from 'react'
import "./PageHeaderContent.scss"

const PageHeaderContent = (props) => {
    const {headerText, icon} = props;
  return (
    <div className='wrapper'>
        <h3>{headerText}</h3>
        <span>{icon}</span>
    </div>
  )
}

export default PageHeaderContent