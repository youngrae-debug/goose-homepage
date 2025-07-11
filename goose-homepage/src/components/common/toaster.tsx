import { Toaster as ReactHotToaster } from 'react-hot-toast'

export function Toaster() {
  return (
    <ReactHotToaster
      toastOptions={{
        style: {
          borderRadius: '8px',
          background: '#000',
          color: '#fff',
          fontSize: '0.9rem',
        },
        success: {
          iconTheme: {
            primary: '#4ade80',
            secondary: '#000',
          },
        },
        error: {
          iconTheme: {
            primary: '#f87171',
            secondary: '#000',
          },
        },
      }}
    />
  )
}
