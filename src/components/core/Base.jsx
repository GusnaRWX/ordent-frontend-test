import React from 'react'
import PropTypes from 'prop-types'

function Base ({
    children
}) {
    return (
        <div>
            <nav className='flex h-20 items-center w-screen justify-between flex-wrap bg-teal-500 p-4'>
                <h2 className='text-white'>
                    Ordent Frontend Test - Dadan Gusna
                </h2>
            </nav>
            <div className='h-screen p-4'>
                {children}
            </div>
        </div>
    )
}

Base.propTypes = {
    children: PropTypes.node
}

export default Base