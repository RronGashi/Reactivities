import React from "react";
import { Item, Label, Segment } from "semantic-ui-react";
import { Activity } from '../../../app/models/activity';

interface Props{
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props){
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.Method}</Item.Header>
                            <Item.Meta>{activity.Status}</Item.Meta>
                            <Item.Description>
                                <div>{activity.Method}</div>
                                <div>{activity.Status}, {activity.District}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.Method}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}