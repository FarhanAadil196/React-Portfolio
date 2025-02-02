import React from 'react'

function Image() {
  return (
    
    <Wrapper>
        <div className="image-container">
            <img src={image} alt={title} />
        </div>
    </Wrapper>
  )
}

export default Image