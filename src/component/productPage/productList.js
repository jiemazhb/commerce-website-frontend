
import React from 'react'

export default function ProductList({ onProductClick, items }) {

    return (
        <>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th className='d-none'>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((p, index) =>
                            <tr key={p.id || index} onClick={() => {
                                onProductClick(p)}} style={{ cursor: 'pointer' }} >
                                <td className='d-none'>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.description}</td>
                                <td>{p.price}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
