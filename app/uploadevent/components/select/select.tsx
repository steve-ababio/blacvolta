import React from "react";

type SelectProps = {
    selectedvalue:string,
}
 const Select = React.forwardRef<HTMLSelectElement,SelectProps>(({selectedvalue},ref)=>{
    return (
        <div className="w-full">
            <label id="eventday" className="block mb-[3px] text-slate-600 dark:text-slate-200">Event recurring day: </label>
            <select ref={ref} defaultValue={selectedvalue}  className="w-full dark:bg-[#191C20] border outline-none border-slate-300/80 focus:ring-2 duration-300 px-4 focus:ring-blue-400 py-2 text-slate-600 dark:text-slate-200 rounded-[5px]" id="eventday" name="daysoftheweek">
                <option value="0">Sunday</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
            </select>
        </div>
    )
})

export default Select;
Select.displayName = 'Select';

