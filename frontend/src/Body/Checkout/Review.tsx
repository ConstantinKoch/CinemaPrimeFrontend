import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

export default class Review extends React.Component {
	render() {
		return (
			<div>
				<Typography variant="h6" gutterBottom>
					Order summary
				</Typography>
				<List disablePadding>
					<ListItem style={{ padding: '10px 0' }}>
						<ListItemText secondary={`Quantity:`} />
						<Typography variant="body2">{}</Typography>
					</ListItem>

					<ListItem style={{ padding: '10px 0' }}>
						<ListItemText primary="Total" />
						<Typography variant="subtitle1" style={{ fontWeight: 700 }} />
					</ListItem>
				</List>
			</div>
		);
	}
}
