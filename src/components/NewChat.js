import React, {useState, useEffect} from 'react';
import './NewChat.css';
import api from '../api';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async () => {
            if(user !== null) {
                let results = await api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user])

    const addNewChat = async (user2) => {
        await api.addNewChat(user, user2);

        handleClose();
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div className="newChat" style={{
            left: show? 0 : -415
        }}>
            <div className="newChat--head">
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#fff'}}/>
                </div>
                <div className="newChat--headtitle">
                    Nova Conversa
                </div>
            </div>
            <div className="newChjat--list">
                {list.map((item, key) => (
                    <div onClick={() => {addNewChat(item)}} className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}