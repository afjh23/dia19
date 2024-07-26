import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { RadioButton } from 'primereact/radiobutton';
import image1 from '../assets/image-product-1.jpg';
import image1thumb from '../assets/image-product-1-thumbnail.jpg';
import image2 from '../assets/image-product-2.jpg';
import image2thumb from '../assets/image-product-2-thumbnail.jpg';
import image3 from '../assets/image-product-3.jpg';
import image3thumb from '../assets/image-product-3-thumbnail.jpg';
import image4 from '../assets/image-product-4.jpg';
import image4thumb from '../assets/image-product-4-thumbnail.jpg';

const imageData = [
    {
        itemImageSrc: image1,
        thumbnailImageSrc: image1thumb,
        alt: 'Description for Image 1',
        title: 'Title 1'
    },
    {
        itemImageSrc: image2,
        thumbnailImageSrc: image2thumb,
        alt: 'Description for Image 2',
        title: 'Title 2'
    },
    {
        itemImageSrc: image3,
        thumbnailImageSrc: image3thumb,
        alt: 'Description for Image 3',
        title: 'Title 3'
    },
    {
        itemImageSrc: image4,
        thumbnailImageSrc: image4thumb,
        alt: 'Description for Image 4',
        title: 'Title 4'
    }
];

export default function ProductImage() {
    const [images, setImages] = useState(null);
    const [position, setPosition] = useState('bottom');
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        setImages(imageData);
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ width: '100%', display: 'flex'}} />;
    };

    return (
        <div className="card">
           
            <Galleria
                style={{ maxWidth: '640px' }}
                value={images}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnailsPosition={position}
                thumbnail={thumbnailTemplate}
            />
        </div>
    );
}