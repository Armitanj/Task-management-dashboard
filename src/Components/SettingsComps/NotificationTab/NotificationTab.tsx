import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function NotificationTab() {


    return (
        <div className='flex flex-col gap-4'>
            <div className='mt-3!'>
                <Switch {...label} defaultChecked /><span className='ms-2!'>Message</span>
            </div>
            <div className='mt-3!'>
                <Switch {...label} /><span className='ms-2!'>Task Update</span>
            </div>
            <div className='mt-3!'>
                <Switch {...label} defaultChecked /><span className='ms-2!'>Task Deadline</span>
            </div>
            <div className='mt-3!'>
                <Switch {...label} /><span className='ms-2!'>Mentor Help</span>

            </div>
            <button className='bg-[#546FFF] w-full sm:w-[216px] mt-12! rounded-xl p-3! text-white font-semibold hover:bg-[#546effdf] cursor-pointer transition delay-75 ease-in-out'>Save Changes</button>

        </div>
    );
}
