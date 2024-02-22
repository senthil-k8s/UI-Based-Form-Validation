
const ErrorMessage = ({children}:any) => {
  return (
    <p className="p-1 text-danger italic text-red-400" data-testid="error-message">
    {children}
  </p>
  )
}

export default ErrorMessage