import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';

const Gallery = () => {
    const [imgUrl, setImgUrl] = useState('');
    const [show, setShow] = useState(false);
    const onHandleClick = (url) => {
        setImgUrl(url);
        setShow(true);
    }
    const handleClose =()=>{
        setShow(false);
        setImgUrl('');
    }
    return (
        <>
            <div>
                {
                    Array.from(Array(30).keys()).map((index) => {
                        return (
                            <span key={`gallery-img-${index}`} className='p-3 d-inline-block img-tag' onClick={() => onHandleClick(`./gallery_images/${index}.jpg`)}>
                                <img
                                    src={require(`./gallery_images/${index}.jpg`)}
                                    className="border-radius-10"
                                    width={400} height={300}
                                    alt={`gallery-img-${index}`} />
                            </span>
                        )


                    })
                }
            </div>
            <Modal show={show} fullscreen size='lg' animation>
                <Modal.Body>
                    <span className='closeButton' onClick={handleClose}>
                        <CloseButton/>
                    </span>
                    {imgUrl?.length > 0 && (
                        <img
                            height={'100%'} width={'100%'}
                            src={require(`${imgUrl}`)}
                            alt='larger-img' />
                    )}
                </Modal.Body>
            </Modal>

        </>

    )
}

export default Gallery