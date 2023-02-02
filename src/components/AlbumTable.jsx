import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function AlbumTable ({
    albums,
    users
}) {
    const navigate = useNavigate()
    const handleChangePage = (id, title) => {
        navigate(`/photo/${id}`, { state: { albumId: id, title: title } })
    }
    return (
        <table className='w-full border rounded-md border-teal-500 p-2 table-fixed'>
            <thead>
                <tr>
                    <th className='border border-collapse bg-teal-500 border-teal-500 text-white p-2'>Albums Title</th>
                    <th className='border border-collapse bg-teal-500 border-teal-500 text-white p-2'>Username</th>
                    <th className='border border-collapse bg-teal-500 border-teal-500 text-white p-2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    albums.map((item, index) => (
                        <tr key={index}>
                            <td className='border border-collapse border-slate-300 p-2'>{item?.title}</td>
                            <td className='border border-collapse border-slate-300 p-2'>
                                {
                                    users.filter(opt => opt.id === item.userId).map((user, key) => (
                                        <p key={key}>{user.username}</p>
                                    ))
                                }
                            </td>
                            <td className='border border-collapse border-slate-300 p-2 justify-center flex'>
                                <button type='button' className='focus:outline-none text-white bg-teal-500
                                hover:bg-teal-700 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg
                                text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700
                                dark:focus:ring-teal-800' onClick={() => { handleChangePage(item.id, item.title) }}>
                                    show
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

AlbumTable.propTypes = {
    albums: PropTypes.array,
    users: PropTypes.array
}

export default AlbumTable
