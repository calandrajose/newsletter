import React, {useState} from 'react'

const useSelect = (initialState, options)=>{
    const [selected, setSelect] = useState(initialState);

    const SelectOption = ()=>{
        
        const onSelectHandler = (e)=>{
            setSelect(e.target.value)
        }
        
        return(
            <select
                className='browser-default'
                onChange={onSelectHandler}
                value={selected}>
                    {options.map(option=>(
                        <option key={option.value} value={option.value}>{option.display}</option>
                        ))}
            </select>
        )
    }
    return [selected, SelectOption];
}

export default useSelect;