import {useEffect, useState} from 'react';
import og, {OgData} from "@Data/og";
import {LazyLoadImage} from "react-lazy-load-image-component";


const LinkPreview = (url: string) => {
    const [ogData, setOgData] = useState<OgData | null>(null);

    useEffect(() => {
        const data = og.get(url);
        if (data != null) {
            setOgData(data);
        }
    }, [url]);

    return (
        <div>
            {ogData && (
                <a href={url}>
                    <div>
                        <LazyLoadImage src={ogData.image} alt={ogData.title}/>
                    </div>
                    <div>
                        <h2>{ogData.title}</h2>
                        <p>{ogData.description}</p>
                    </div>
                </a>
            )}
        </div>
    );
};

export default LinkPreview;
