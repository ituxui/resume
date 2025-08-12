import { disableScroll, enableScroll } from "@utils/scrolling";
import { proxy } from "valtio";
import { watch } from 'valtio/utils'


export const handleScrollStore = proxy<{
  blockedScrollElementsQuantity: number,
}>({
  blockedScrollElementsQuantity: 0,
})

watch((get) => {
  // `get` adds `sessionState` to this callback's watched proxies
  get(handleScrollStore)
  const quantity = handleScrollStore.blockedScrollElementsQuantity

  if (quantity > 0) {
    disableScroll()
  } else {
    handleScrollStore.blockedScrollElementsQuantity = 0
    enableScroll()
  }
})


export const increaseBlockedScrollElementsQuantity = () => {
  ++handleScrollStore.blockedScrollElementsQuantity
}

export const decreaseBlockedScrollElementsQuantity = () => {
  console.log(handleScrollStore.blockedScrollElementsQuantity)
  if (handleScrollStore.blockedScrollElementsQuantity > 0 ) {
  --handleScrollStore.blockedScrollElementsQuantity
  } else {
    handleScrollStore.blockedScrollElementsQuantity = 0
  }
}
