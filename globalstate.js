import React, {createContext, useState, useEffect} from 'react'
// import ProductsAPI from './api/ProductsAPI'
// import UserAPI from './api/UserAPI'
import CategoriesAPI from './myapi/CategoriesAPI'

import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    



    
    const state = {
    
        // productsAPI: ProductsAPI(),
        // userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
