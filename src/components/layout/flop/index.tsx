import React from 'react';
import {links} from "@Data/link";
import {IoIosArrowUp} from "react-icons/io";
import {useSelector} from "react-redux";
import {RootState} from "@Store/index";
import {Button} from "@mui/material";

const FlopMenu = () => {
    const offset = useSelector((state: RootState) => state.offset.value)
    return (
        <div className={offset === 0 ? "flop-list hide" : "flop-list"}>
            <ul className="flop-menu">
                {links.map(item => {
                    return (
                        <li className="flop-item" data-name={item.id} key={'flop-item-id-' + item.id}>
                            <a href={item.link} target="_blank">
                                <div className="icon">
                                    {item.icon}
                                </div>
                                <div className="name">{item.name}</div>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <Button className="flop-top" onClick={(e) => {
                window.scrollTo(0, 0);
            }}>
                <IoIosArrowUp/>
            </Button>
        </div>
    );
};

export default FlopMenu;
