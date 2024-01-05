// Provider Form:
// Type of donation (food, clothes, medicine) (dropdown)
// Location (city)
// Quantity (for how many people (1-10))
// Description (any text)

// Receiver Form:
// Location (city)
// List of food available at location
// 	Each item has "reserve" button that sets IsAvailable to false
// 	   can reserve max of 3 items/meal
// 	   can reserve max of 3 meal/day

import React from 'react'

export default function FoodForm({ user }) {
  // user is going to have a type (provider or receiver)
  return (
    <div>FoodForm</div>
  )
}
