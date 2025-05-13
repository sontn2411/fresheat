import { LoadingStore } from '@/types/loading'
import { Store } from '@tanstack/react-store'

const useLoadingStore = new Store<LoadingStore>({
  isLoader: false,
})

const setIsLoader = (isLoader: boolean) => {
  useLoadingStore.setState((state) => ({ ...state, isLoader }))
}

export { setIsLoader }

export default useLoadingStore
