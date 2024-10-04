// src/app/api/subscribe/route.ts

import {NextRequest, NextResponse} from 'next/server';

// Load environment variables
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY as string;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX as string; // e.g., 'us11'
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID as string;

// Validate environment variables
if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER_PREFIX || !MAILCHIMP_LIST_ID) {
	throw new Error(
		'Missing Mailchimp configuration in environment variables.'
	);
}

export async function POST(request: NextRequest) {
	try {
		const {EMAIL, FNAME, LNAME} = await request.json();

		if (!EMAIL) {
			return NextResponse.json(
				{error: 'Email is required.'},
				{status: 400}
			);
		}

		// Construct Mailchimp API URL
		const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

		// Prepare data for Mailchimp
		const data = {
			email_address: EMAIL,
			status: 'subscribed',
			merge_fields: {
				FNAME: FNAME || '',
				LNAME: LNAME || '',
			},
		};

		// Make a request to Mailchimp API
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `apikey ${MAILCHIMP_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});

		const result = await response.json();

		if (response.status === 200 || response.status === 201) {
			return NextResponse.json(
				{message: 'Successfully subscribed.'},
				{status: 200}
			);
		} else {
			// Handle specific Mailchimp errors
			if (response.status === 400 && result.title === 'Member Exists') {
				return NextResponse.json(
					{error: 'This email is already subscribed.'},
					{status: 400}
				);
			}
			return NextResponse.json(
				{error: result.detail || 'An error occurred.'},
				{status: response.status}
			);
		}
	} catch (error) {
		console.error('Subscription Error:', error);
		return NextResponse.json(
			{error: 'Internal Server Error.'},
			{status: 500}
		);
	}
}
