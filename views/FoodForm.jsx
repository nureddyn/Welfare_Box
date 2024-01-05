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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'grey', heigh: '100vh' }}>
        <h1>Provider Form for {user.firstName && user.firstName}</h1>
        <form action="/foodForm" method="POST" ><br />
            <h4>Type of Donation</h4>
            <input hidden name='userId' value={user._id}></input>
            <select name='goodType'>
                <option selected value="food">Food</option>
                <option value="cloth">Cloth</option>
                <option value="medicine">Medicine</option>
            </select><br />
            <h4>Location</h4>
            <select name='location'>
                <option selected value="newyork">New York</option>
                <option value="newjersey">New Jersey</option>
                <option value="chicago">Chicago</option>
            </select><br />
            <h4>Quantity</h4>
            <select name='quantity'>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br />
            <h4>Description:</h4> <input type="text" name="description" /><br />
            <h4>Is Available:</h4> <input type="checkbox" name="isAvailable" /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}
