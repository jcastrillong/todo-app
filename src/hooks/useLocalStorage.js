import { useState, useEffect } from 'react';

export function useLocalStorage(itemName, initialValue) {
  const [ loading, setLoading ] = useState(true);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      const localStorageItem = localStorage.getItem(itemName)
      let parsedItems = [];

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
      } else {
        parsedItems = JSON.parse(localStorageItem)
        setItem(parsedItems)
        setLoading(false)
      }

      
    }, 3000)
  }, [initialValue, itemName, item])
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, loading }
}