import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {

    const intialState = selectedActivity ?? {
        id: '',
        method: '',
        status: '',
        description: '',
        district: ''
    }

    const [activity, setActivity] = useState(intialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='method' value={activity.method} name='method' onChange={handleInputChange} />
                <Form.TextArea placeholder='status' value={activity.status} name='status' onChange={handleInputChange} />
                <Form.Input placeholder='description' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='district' value={activity.district} name='district' onChange={handleInputChange} />
                <Button floated="right" positive type="submit" content='Submit' />
                <Button onClick={closeForm} floated="right" type="button" content='Cancel' />
            </Form>
        </Segment>
    )
}