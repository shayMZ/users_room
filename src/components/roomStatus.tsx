import React from 'react';

function RoomStatus(props: any) {
    return <div className={'roomStatus'}>
        {props.status ? <div className={'active'}>Active</div> : <div>Inactive</div>}
    </div>
}

export default RoomStatus;
