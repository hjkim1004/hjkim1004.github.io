import {useEffect, useState} from 'react';
import og, {OgData} from "@Data/og";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {FaAngleRight} from "react-icons/fa6";


export interface ILink {
    url: string
    title: string
}

const LinkPreview = (props: ILink) => {
    const [ogData, setOgData] = useState<OgData | null>(null);

    useEffect(() => {
        const data = og.get(props.url);
        if (data != null) {
            setOgData(data);
        }
    }, [props.url]);

    return (
        <div className={"og-container"}>
            {ogData ? (
                <>
                    <div className={"og-img"}>
                        <LazyLoadImage src={ogData.image} alt={ogData.title}/>
                    </div>
                    <div className={"og-info"}>
                        <h3 className={"og-title"}>{ogData.title}</h3>
                        <a className={"og-link-preview"} target={"_blank"} href={props.url}>{props.url}</a>
                        <p>{ogData.description}</p>
                    </div>
                    <div className={"og-link"}>
                        <a href={ogData.url} target={"_blank"}><FaAngleRight/></a>
                    </div>
                </>
            ) : (
                <>
                    <div className={"og-info"}>
                        <h3 className={"og-title"}>{props.title}</h3>
                        <a className={"og-link-preview"} target={"_blank"} href={props.url}>{props.url}</a>
                    </div>
                    <div className={"og-link"}>
                        <a href={props.url} target={"_blank"}><FaAngleRight/></a>
                    </div>
                </>
            )}
        </div>
    );
};

export default LinkPreview;
