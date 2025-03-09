import React from 'react'
import { LineChart } from '@mui/x-charts'
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import './Chart.css'

// Define an interface for the props
interface ChartProps {
  title: string;
}

export default function Chart({ title }: ChartProps) {
  const chartData = [0, 2, 0, 3, 1, 2, 1];
  return (
    <div className='chartComp font-[poppins-medium] flex flex-col bg-[#F5F5F7] rounded-2xl w-[90%] sm:w-[470px] '>
      <div className='flex flex-row justify-between items-center w-[90%]'>
        <h4 className='relative'>{title}</h4>
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


      <LineChart className='bg-white rounded-2xl w-100'
                xAxis={[{ scaleType: 'point', data: ['S', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'] }]}
                series={[
                    {
                        data: chartData,
                        curve: 'monotoneX',
                        color: '#000',
                        area: false,
                    }
                ]}
                // width={400}
                grid={{ vertical: true }}
                margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            />
    </div>
  )
}
