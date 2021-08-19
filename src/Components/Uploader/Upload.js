import { useState } from 'react';
import { storage } from '../../Service/firebase';
import './Upload.scss'
import Gif from '../../Pages/Start/gif/upload.gif'
import {AiOutlineFileAdd} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const Upload = () =>{
    const [base , setBase] = useState(null)
    const [progress , setProgress] = useState(0)
    const [urls , setUrl] = useState('')
    const [disable , setDisable] = useState(true)
    const [style , setStyle] = useState(false)
    const [items , setItems] = useState(JSON.parse(localStorage.getItem('image')) || [])

    useEffect(() =>{
        localStorage.setItem('image',JSON.stringify(items))

        const data = JSON.parse(localStorage.getItem('image'))

        const baseId = data.map((item , index) => {
            return {
                ...item ,
                id:index
            }
        })  
        localStorage.setItem('image' , JSON.stringify([...baseId]))
    } , [items])


    

    const upLoadFile = (e) =>{
        var value = e.target.files[0]
        if(value){
            console.log(value)
            setBase(value)
            setDisable(false)
            setItems(items =>  [...items , {
                name:value.name,
                size:value.size,
                type:value.type,
                lastModifiedDate:value.lastModifiedDate,
                image:urls
            }])
        }

    }   

    console.log(items)

    const upLoadButton = () =>{
        const upload = storage.ref(`images/${base.name}`).put(base)
        upload.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                setProgress(progress)
            },
            error => {
                console.log(error)
            },
            () =>{
                storage
                .ref('images')
                .child(base.name)
                .getDownloadURL()
                .then(url =>{
                    setUrl(url)
                    setStyle(true)
                })

            }
        )
    }   


    return(
        <>  
            <div className='upload'>
                <progress value={progress} max="100"/>
                <p>{progress + '%'}</p>
                {
                    progress ? (
                        <div>
                            <img src={Gif} className='uploadImg'/>
                        </div>
                    ) : (
                        <>
                            <div className='inpBase'> 
                                <input  
                                    type='file'
                                    className='inp'
                                    placeholder='Upload file...'
                                    onChange={upLoadFile}
                                />
                                <button disabled={disable} onClick={upLoadButton}>Отправить <AiOutlineFileAdd className='fileIcon'/></button>
                            </div>
                        </>
                    )
                }
                 <Link to='/start/table'>
                    <div className={style ? 'storage active' : 'storage'}>
                        <h5>Storage</h5>
                    </div>
                 </Link>



            </div>

            </>
    )
}

export default Upload