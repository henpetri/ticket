import React from 'react';

import Chat from '../../components/Chat';

function UserChat() {

    return(
        <Chat
            id="1"
            back="/logged"
            styles="user"
        />
    )
}

export default UserChat;