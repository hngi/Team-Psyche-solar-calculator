import React, { useState, useRef } from "react";
import { Input, Button } from './forms';
import { Stack } from "./layouts";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

// import { log } from "../libs/helpers";

const Label = (props) => <label {...props} className="font-sans"/>
const appliance = [
  { label: "Ceiling Fan", value: 1 },
  { label: "Light Bulb", value: 2 },
  { label: "Water Heater", value: 3 },
  { label: "Laptop", value: 4 },
  { label: "Refrigerator", value: 5 },
  { label: "Rice Cooker", value: 6 },
  { label: "Toaster", value: 7 },
  { label: "Hair Dryer", value: 8 },
  { label: "Washing Machine", value: 9 },
  { label: "Iron", value: 10 },
  { label: "Television", value: 11 },
  { label: "Printer", value: 12 },
];

const fields = {
  data: {
    appliance: appliance[1].label,
    number: 1,
    time: 1,
    energy: 1
  }
};

const AddItem = (props) => {
  const [state, setState] = useState(fields);
  const form = useRef();

  const onSubmit = e => {
    e.preventDefault();
    props.addItem(state.data);
    form.current.reset()

    setState(fields);
  };

  const onSelectChange = ({label}) => {
    setState({data:{...state.data, appliance:label}})
  }

  const onChange = e => {
    setState({
      data: { ...state.data, [e.target.name]: e.target.value }
    });
  };

  return (
    <form ref={form} onSubmit={onSubmit}>
      <Stack>
        <div className="ma3">
          <Label className="">Name of appliance</Label>
          <br></br>
            <CreatableSelect defaultValue={state.data.appliance} name="appliance" options={appliance} onChange={onSelectChange} 
            placeholder='Television'/>
            
        </div>
        <div className="ma3 dib">
          <Label>Number of Appliance</Label>
          <Input
            fullwidth
            type="number"
            min="1"
            name="number"
            required
            value={state.data.number}
            onChange={onChange}
          />
        </div>
        <div className="ma3 dib">
          <Label>
            Time <span>Hr</span>
          </Label>
          <Input
            fullwidth
            type="number"
            min="1"
            name="time"
            required
            value={state.data.time}
            onChange={onChange}
          />
        </div>
        <div className="ma3 dib">
          <Label>
            Energy <span>Watt</span>
          </Label>
          <Input
            fullwidth
            type="number"
            min="1"
            name="energy"
            required
            value={state.data.energy}
            onChange={onChange}
          />
        </div>
        <Button type="submit" fullwidth primary>
          Add Appliance
        </Button>
      </Stack>
    </form>
  );
};

export default AddItem;
