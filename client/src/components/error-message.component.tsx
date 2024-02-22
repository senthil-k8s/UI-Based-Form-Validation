import React from 'react'

const ErrorMessage = ({children}:any) => {
  return (
    <p className="p-1 text-danger italic" data-testid="error-message">
    {children}
  </p>
  )
}

export default ErrorMessage