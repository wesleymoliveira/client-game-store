import { getStorageItem, setStorageItem } from '.'

describe('getStorageitem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['1', '2']),
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageitem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', ['4', '5'])

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(['4', '5']),
    )
  })
})
