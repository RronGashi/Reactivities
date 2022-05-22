import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../app/models/activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props) {
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.method}</Item.Header>
                            <Item.Meta>{activity.status}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.district}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated="right" content='View' color='blue' />
                                <Button onClick={() => deleteActivity(activity.id)} floated="right" content='Delete' color='red' />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}