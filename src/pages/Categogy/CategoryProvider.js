// ContextProvider.js
import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([
        { ten: 'user1', id: 'user1@gmail.com', trangThai: true },
        { ten: 'user2', id: 'user2@gmail.com', trangThai: false },
    ]);

    return (
        <CategoryContext.Provider value={{ categories, setCategories }}>
            {children}
        </CategoryContext.Provider>
    );
};
