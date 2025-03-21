import * as React from 'react';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel, Radio } from '@mui/material';
// import { styled } from '@mui/material/styles';
import { Select, MenuItem } from '@mui/material';
import { fetchLanguages } from '../../../Api/CountriesName';




export default function GeneralTab() {
    const [languages, setLanguages] = useState<{ code: string; name: string; timezone: string }[]>([]);
    const [selectedLang, setSelectedLang] = useState('en');
    const [selectedTimezone, setSelectedTimezone] = useState('UTC');
    const [timeFormat, setTimeFormat] = useState<'24' | '12'>('24');


    useEffect(() => {
        const loadLanguages = async () => {
            const langs = await fetchLanguages();
            setLanguages(langs);
        };
        loadLanguages();
    }, []);

    useEffect(() => {
        const lang = languages.find((l) => l.code === selectedLang);
        if (lang) {
            setSelectedTimezone(lang.timezone);
        }
    }, [selectedLang, languages]);


    return (
        <div>
            <div>
                <p className='font-[poppins-medium] mt-4 py-1!!'>Language</p>
                <FormControl sx={{ m: 1, width: { xs: 300, sm: 400 }, mt: 3}}>

                    <Select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)} sx={{ borderRadius: 3 }}>   
                        {languages.map((lang) => (
                            <MenuItem key={lang.code} value={lang.code}>
                                {lang.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div>
                <p className='font-[poppins-medium] mt-5!'>Tomezone</p>
                <FormControl sx={{ m: 1, width: { xs: 300, sm: 400 }, mt: 3, borderRadius: 12 }}>
                    <Select value={selectedTimezone} disabled sx={{ borderRadius: 3 }}>
                        <MenuItem value={selectedTimezone}>{selectedTimezone}</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <p className='font-[poppins-medium] mt-5!'>Tomezone</p>
            <div className="flex justify-between sm:justify-normal sm:gap-8 mt-6! ms-4!">
                <FormControlLabel
                    control={<Radio checked={timeFormat === '24'} onChange={() => setTimeFormat('24')} />}
                    label="24 Hours"
                    className={timeFormat === '24' ? 'border border-blue-500 rounded-xl w-[136px]! sm:w-[184px]! sm:px-5! py-2!' : 'border border-gray-300 rounded-xl w-[136px]! sm:w-[184px]! sm:px-5! py-2!'}
                />
                <FormControlLabel
                    control={<Radio checked={timeFormat === '12'} onChange={() => setTimeFormat('12')} />}
                    label="12 Hours"
                    className={timeFormat === '12' ? 'border border-blue-500 rounded-xl w-[136px]! sm:w-[184px]! sm:px-5! py-2!' : 'border border-gray-300 rounded-xl w-[136px]! sm:w-[184px]! sm:px-5! py-2!'}
                />
            </div>

            <button className='bg-[#546FFF] w-full sm:w-[216px] mt-16! sm:mt-12! rounded-xl p-3! text-white font-semibold hover:bg-[#546effdf] cursor-pointer transition delay-75 ease-in-out'>Save Changes</button>

        </div>
    );
}
