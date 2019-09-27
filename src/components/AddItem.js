import React, { useState, useRef } from "react";
import { Input, Button } from './forms';
import { Stack } from "./layouts";
import { log } from "../libs/helpers";

const Label = (props) => <label {...props} className="font-sans"/>

const AddItem = (props) => {
  const [state, setState] = useState({
    data: {
      appliance: "",
      number: 0,
      time: 0,
      energy: 0
    }
  });
  const form = useRef();

  const onSubmit = e => {
    e.preventDefault();
    props.addItem(state.data);
    form.current.reset()

    setState({
      data: {
        appliance: "",
        number: 0,
        time: 0,
        energy: 0
      }
    });
  };

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
          <Input
            fullwidth
            type="text"
            placeholder="Televsion"
            required
            name="appliance"
            value={state.data.appliance}
            onChange={onChange}
          />
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
