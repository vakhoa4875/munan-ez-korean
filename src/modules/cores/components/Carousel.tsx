
import { Galleria } from 'primereact/galleria';
import { useState } from 'react';
import { Photo, photos } from '@/data/photo';

export default function Carousel() {
    const [images] = useState<Photo[]>(photos);

    const itemTemplate = (item: Photo) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item: Photo) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    return (
        <Galleria value={images} numVisible={5} circular showItemNavigatorsOnHover
            showThumbnails={false} showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />
    )
}
