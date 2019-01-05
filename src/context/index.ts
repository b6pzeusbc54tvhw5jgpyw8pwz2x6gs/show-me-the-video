import { createContext } from 'react'

interface IAppContext {
  showLayout: boolean
  toggleShowLayout: () => void
}
export const appContext = createContext<IAppContext>({
  showLayout: true,
  toggleShowLayout: () => {
    console.log('hi')
  },
})
