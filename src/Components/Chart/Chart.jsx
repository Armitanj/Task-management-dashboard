import { LineChart } from '@mui/x-charts'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';  
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import './Chart.css'

export default function Chart() {
    const data = [0, 2, 0, 3, 1, 2, 1];

    return (
        <div className='chartComp flex flex-col bg-[#F5F5F7] rounded-2xl'>
            <div className='flex flex-row justify-between items-center w-full'>
                <h4 className='relative'>Activity</h4>
                <Select
                    placeholder="This Week"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        width: 140,
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                    <Option value="This Week">This Week</Option>
                    <Option value="This Month">This Month</Option>
                    <Option value="This Year">This Year</Option>
                </Select>
            </div>
            <br />
            <LineChart className='bg-white rounded-2xl'
                xAxis={[{ scaleType: 'point', data: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'] }]}
                series={[
                    {
                        data: data,
                        showMark: ({ index }) => (
                            <Tooltip title={`${data[index]} tasks`} placement="top">
                                <Button variant="plain">{data[index]}</Button>
                            </Tooltip>
                        ),
                        curve: 'monotoneX',
                        color: '#000',
                        area: false,
                    }
                ]}
                width={422}
                grid={{ vertical: true }}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            />
        </div>
    )
}
