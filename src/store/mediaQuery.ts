import { Store } from '@tanstack/react-store'

interface MediaQueryStoreType {
  isDesktop: null | boolean
  isLaptop: null | boolean
}

const useMediaQueryStore = new Store<MediaQueryStoreType>({
  isDesktop: null,
  isLaptop: null,
})

const setMediaqueryStore = (data: MediaQueryStoreType) => {
  useMediaQueryStore.setState((state) => ({
    ...state,
    ...data,
  }))
}

export { setMediaqueryStore }

export default useMediaQueryStore
