import './Table.scss'
import { useState, Fragment } from 'react';
import { useEffect } from 'react';

const Table = () =>{
    
    const [base , setBase] = useState(JSON.parse(localStorage.getItem('image')))

    return(
        <>
           <div className='tables'>
                <div className='container pt-5'>
                    <table className="table">
                        <thead className="thead-dark bg-primary text-light">
                            <tr >
                            <th scope="col">#</th>
                            <th scope="col">File name</th>
                            <th scope="col">File size</th>
                            <th scope="col">File type</th>
                            <th scope="col">Last modified</th>
                            </tr>
                        </thead>
                            {
                                base?.length === 0 ? (
                                    <td>Empty</td>
                                ) : base ?  (
                                    base.map(item =>{
                                        return (
                                        <tbody   key={item.id} className='bg-light'>

                                            <tr>
                                                <th scope='col'>{item.id}</th>
                                                <Fragment>
                                                    <td style={{color:'green'}}>{item.name}</td>
                                                    <td>{item.size}</td>
                                                    <td>{item.type}</td>
                                                    <td>{item.lastModifiedDate}</td>
                                                </Fragment>
                                            </tr>
                                        </tbody>
                                        )
                                    })
                                ) : (
                                    console.log('Loadibg')
                                )
                            }

                    </table>
                 </div>
           </div>
        </>
    )
}

export default Table;