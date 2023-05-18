type Props = {
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}
export const Button: React.FC<Props> = ({
  type = 'button',
  variant = 'primary',
  children,
}) => {
  return (
    <>
      <button
        type={type}
        className="text-white bg-primary-2 hover:bg-primary-3 focus:outline-none focus:ring-2 focus:ring-primary-1 font-medium rounded-full text-sm px-5 py-2.5 text-center"
      >
        {children}
      </button>
    </>
  )
}
