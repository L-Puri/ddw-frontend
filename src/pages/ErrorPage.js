import React from 'react'
import ErrorImage from '../images/error_404.png'

function ErrorPage() {
  return (
    
    <div className='error-message'><img src={ErrorImage}
    alt="404 error message" />
    </div>
  )
}

export default ErrorPage