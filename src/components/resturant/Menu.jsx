import React from 'react';

const Menu = ({ menu }) => {
    const { name, description, price } = menu;
    return (
        <>
            <div className='flex items-center text-xl font-mar w-96 gap-2 my-2'>
                <h5 className='w-full'>{name}</h5>
                <hr className='w-[50%]' />
                <p className='flex gap-1'><span className='text-lg'>$</span>{price}</p>
            </div>
            <div>{description}</div>
        </>
    );
};

export default Menu;